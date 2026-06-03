import { ArrowRight, CircleAlert, SearchCheck } from "lucide-react";

const problems = [
  "You post on Facebook and Instagram, but the inquiries are still low.",
  "You boost posts, yet you do not see real sales from the money spent.",
  "You get random leads, but very few serious customers.",
  "You are not sure which marketing strategy, content, ads, landing page, or follow-up system to use.",
  "You still depend mostly on referrals or word of mouth."
];

export default function Problem() {
  return (
    <section className="px-5 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-2xl bg-brand-ink p-7 text-white shadow-premium sm:p-10 lg:p-12">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-orange">
              For Business Owners In Nepal
            </p>
            <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
              If digital marketing feels confusing, you are not alone.
            </h2>
            <p className="mt-5 text-base leading-7 text-white/78">
              Many business owners are trying hard, posting regularly, boosting
              ads, and still wondering why leads, customers, and revenue are not
              consistent.
            </p>
            <div className="mt-7 space-y-4">
              {problems.map((problem) => (
                <div key={problem} className="flex gap-3">
                  <CircleAlert
                    aria-hidden="true"
                    className="mt-1 h-5 w-5 shrink-0 text-brand-orange"
                  />
                  <p className="text-sm leading-6 text-white/82">{problem}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-brand-ink/10 bg-white p-7 shadow-sm sm:p-10 lg:p-12">
            <div className="max-w-xl">
              <SearchCheck
                aria-hidden="true"
                className="mb-5 h-8 w-8 text-brand-orange"
              />
              <h2 className="text-3xl font-semibold tracking-tight text-brand-ink sm:text-4xl">
                This free call gives you a clear plan instead of more guessing.
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-700">
                In the consultation, I will understand your business, identify
                what is not working, and show you a clear digital marketing plan
                you can start implementing immediately.
              </p>
              <p className="mt-4 text-lg leading-8 text-slate-700">
                The goal is simple: help you know what to fix, what to focus on,
                and how to attract more serious leads and customers.
              </p>
              <a
                href="#book-call"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand-orange px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#ef650d] focus:outline-none focus:ring-4 focus:ring-brand-orange/25"
              >
                Book your FREE call now
                <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
