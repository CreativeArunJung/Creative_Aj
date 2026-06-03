import { ArrowDown, BadgeCheck } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-5 pb-16 pt-6 sm:pb-20 lg:pb-24">
      <div className="mx-auto max-w-5xl">
        <header className="mb-12 flex justify-center">
          <img
            src="/creativeaj-logo-cropped.png"
            alt="CreativeAJ"
            width="320"
            height="90"
            className="h-auto w-44 object-contain sm:w-56"
          />
        </header>

        <div className="mx-auto text-center">
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-brand-orange/30 bg-white px-4 py-2 text-sm font-semibold text-brand-teal shadow-sm">
            <BadgeCheck aria-hidden="true" className="h-4 w-4 text-brand-orange" />
            Free 1:1 Digital Marketing Consultation
          </p>
          <h1 className="mx-auto max-w-4xl text-5xl font-semibold leading-[1.05] tracking-tight text-brand-ink sm:text-6xl lg:text-7xl">
            Struggling to grow your business?
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-xl font-semibold leading-8 text-brand-teal sm:text-2xl">
            Grab a FREE 1:1 Digital Marketing consultation call with me.
          </p>
          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-700 sm:text-xl">
            I&apos;ll diagnose your business and provide a customized Digital
            Marketing plan that you can immediately implement in your business
            after the call.
          </p>
          <div className="mt-9 flex justify-center">
            <a
              href="#book-call"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-orange px-7 py-4 text-base font-semibold text-white shadow-premium transition hover:-translate-y-0.5 hover:bg-[#ef650d] focus:outline-none focus:ring-4 focus:ring-brand-orange/25"
            >
              Book your FREE call now
              <ArrowDown aria-hidden="true" className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
