import type { Metadata } from "next";
import { MessageCircle, PlayCircle } from "lucide-react";

const vimeoVideoUrl = "https://vimeo.com/1199229968?fl=ip&fe=ec";
const whatsappChatUrl = "https://wa.me/9779807985364";

export const metadata: Metadata = {
  title: "Thanks",
  description:
    "Watch the next-step video before your free 1:1 digital marketing consultation."
};

export default function ThanksPage() {
  const embedUrl = getVimeoEmbedUrl(vimeoVideoUrl);

  return (
    <main className="min-h-screen text-brand-ink">
      <section className="mx-auto flex min-h-screen w-full max-w-5xl flex-col items-center justify-center px-5 py-12 text-center">
        <img
          src="/creativeaj-logo-cropped.png"
          alt="CreativeAJ"
          width="320"
          height="90"
          className="mb-8 h-auto w-44 object-contain sm:w-56"
        />

        <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
          Wait... watch the video before you go
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-700">
          Before your consultation, please watch this short video so you know
          what to do next.
        </p>

        <div className="mt-9 w-full max-w-3xl overflow-hidden rounded-2xl border border-brand-ink/10 bg-white shadow-premium">
          <div className="aspect-video w-full bg-brand-ink">
            {embedUrl ? (
              <iframe
                src={embedUrl}
                title="Consultation next steps video"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                className="h-full w-full"
              />
            ) : (
              <div className="flex h-full flex-col items-center justify-center px-6 text-center text-white">
                <PlayCircle
                  aria-hidden="true"
                  className="mb-4 h-12 w-12 text-brand-orange"
                />
                <p className="max-w-md text-base font-semibold leading-7">
                  Vimeo video will appear here once the video link is provided.
                </p>
              </div>
            )}
          </div>
        </div>

        <a
          href={whatsappChatUrl}
          target="_blank"
          rel="noreferrer"
          className="mt-9 inline-flex items-center justify-center gap-2 rounded-full bg-brand-orange px-7 py-4 text-base font-semibold text-white shadow-premium transition hover:-translate-y-0.5 hover:bg-[#ef650d] focus:outline-none focus:ring-4 focus:ring-brand-orange/25"
        >
          <MessageCircle aria-hidden="true" className="h-5 w-5" />
          Chat with me on WhatsApp
        </a>
      </section>
    </main>
  );
}

function getVimeoEmbedUrl(videoUrl: string) {
  if (!videoUrl) {
    return "";
  }

  const match = videoUrl.match(/vimeo\.com\/(?:video\/)?(\d+)/);
  return match ? `https://player.vimeo.com/video/${match[1]}` : videoUrl;
}
