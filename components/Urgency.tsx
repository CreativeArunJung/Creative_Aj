import { Clock3 } from "lucide-react";

export default function Urgency() {
  return (
    <section className="px-5 py-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-5 bg-brand-teal px-6 py-7 text-white sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <div className="flex items-start gap-4">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-white/10">
            <Clock3 aria-hidden="true" className="h-5 w-5 text-brand-orange" />
          </div>
          <div>
            <h2 className="text-xl font-semibold">Limited consultation slots</h2>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-white/74">
              Book the free 1:1 consultation while slots are available, so your
              customized strategy can be prepared properly.
            </p>
          </div>
        </div>
        <a
          href="#book-call"
          className="inline-flex shrink-0 justify-center bg-brand-orange px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#ef650d]"
        >
          Book Free Consultation
        </a>
      </div>
    </section>
  );
}
