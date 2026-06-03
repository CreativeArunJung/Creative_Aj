"use client";

import { useEffect, useRef, useState } from "react";
import { ShieldCheck } from "lucide-react";

const REDIRECT_DELAY_MS = 2200;

export default function CTAForm() {
  const embedRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    let observer: MutationObserver | undefined;
    let redirectTimer: ReturnType<typeof setTimeout> | undefined;
    let isMounted = true;

    async function mountFlodeskEmbed() {
      const response = await fetch("/flodesk-embed.html");
      const html = await response.text();

      if (!isMounted || !embedRef.current) {
        return;
      }

      embedRef.current.innerHTML = html;

      const scripts = Array.from(embedRef.current.querySelectorAll("script"));
      scripts.forEach((script) => {
        const executableScript = document.createElement("script");

        Array.from(script.attributes).forEach((attribute) => {
          executableScript.setAttribute(attribute.name, attribute.value);
        });

        executableScript.text = script.textContent ?? "";
        script.replaceWith(executableScript);
      });

      const root = embedRef.current.querySelector<HTMLElement>(
        '[data-ff-el="root"]'
      );

      if (root) {
        observer = new MutationObserver(() => {
          if (root.dataset.ffStage === "success") {
            observer?.disconnect();
            redirectTimer = setTimeout(() => {
              window.location.assign("/thanks");
            }, REDIRECT_DELAY_MS);
          }
        });

        observer.observe(root, {
          attributes: true,
          attributeFilter: ["data-ff-stage"]
        });
      }

      setIsLoaded(true);
    }

    mountFlodeskEmbed().catch(() => {
      setIsLoaded(false);
    });

    return () => {
      isMounted = false;
      observer?.disconnect();

      if (redirectTimer) {
        clearTimeout(redirectTimer);
      }
    };
  }, []);

  return (
    <section id="book-call" className="scroll-mt-6 px-5 pb-20 pt-12 sm:pb-28">
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.78fr_1.22fr]">
        <div className="rounded-2xl bg-brand-teal p-7 text-white sm:p-9 lg:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-orange">
            Book the Call
          </p>
          <h2 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
            Book Your FREE 1:1 Consultation Call
          </h2>
          <p className="mt-5 max-w-md text-lg leading-8 text-white/80">
            Fill up the form below and we&apos;ll contact you with the next
            steps.
          </p>
          <div className="mt-8 rounded-xl border border-white/15 bg-white/8 p-5 text-base leading-7 text-white/78">
            Your details are submitted through the live Flodesk form, so your
            lead is captured and the email automation can run normally.
          </div>
          <p className="mt-5 flex items-center gap-2 text-sm text-white/72">
            <ShieldCheck aria-hidden="true" className="h-4 w-4 text-brand-orange" />
            We respect your privacy. No spam.
          </p>
        </div>

        <div className="rounded-2xl border border-brand-ink/10 bg-white p-4 shadow-premium sm:p-7">
          {!isLoaded ? (
            <div className="flex min-h-80 items-center justify-center text-center text-sm font-semibold text-slate-600">
              Loading consultation form...
            </div>
          ) : null}
          <div
            ref={embedRef}
            className={`flodesk-shell ${isLoaded ? "block" : "hidden"}`}
          />
        </div>
      </div>
    </section>
  );
}
