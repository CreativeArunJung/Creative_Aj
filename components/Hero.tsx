import { CTAButton, WhatsAppCTA } from "@/components/CTAButton";

const metrics = [
  ["Qualified inquiries", "Tracked"],
  ["Cost per lead", "Monitoring"],
  ["Retargeting", "Active"],
  ["Lead tracking", "Ready"]
];

export default function Hero() {
  return (
    <section id="home" className="overflow-hidden bg-[linear-gradient(180deg,#ffffff_0%,#f6f8ff_100%)] py-14 sm:py-20 lg:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
        <div>
          <p className="mb-4 inline-flex rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-800">
            Meta Ads Customer Acquisition System
          </p>
          <h1 className="max-w-4xl text-3xl font-black tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
            Get 20-50 qualified leads in 30 days or we will work for free
          </h1>
          <p className="mt-5 max-w-2xl text-xl font-bold leading-8 text-slate-800 sm:text-2xl sm:leading-9">
            Get more qualified customers from facebook & instagram without wasting money on random boosted posts.
          </p>
          <div className="mt-6 grid max-w-xl gap-2 text-base font-semibold text-slate-800 sm:grid-cols-2">
            {["You are posting.", "You are boosting.", "You are spending money.", "But customers are still not consistent."].map((line) => (
              <p key={line} className="rounded-xl bg-white px-4 py-3 shadow-sm shadow-slate-200">
                {line}
              </p>
            ))}
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <CTAButton href="#lead-form" className="min-h-12 px-6">Book My Free Marketing Audit Call</CTAButton>
            <WhatsAppCTA className="min-h-12 px-6" />
          </div>
          <p className="mt-4 max-w-xl text-sm leading-6 text-slate-500">
            No pressure. No confusing marketing talk. Just a clear look at what is working, what is not, and what can be improved.
          </p>
        </div>
        <div className="relative">
          <div className="absolute -inset-6 rounded-[2rem] bg-blue-100/70 blur-3xl" aria-hidden="true" />
          <div className="relative rounded-3xl border border-slate-200 bg-white p-5 shadow-2xl shadow-blue-950/10">
            <div className="flex items-center justify-between border-b border-slate-200 pb-4">
              <div>
                <p className="text-sm font-semibold text-slate-500">Acquisition dashboard</p>
                <p className="text-xl font-bold text-slate-950">System view</p>
              </div>
              <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-700">UI placeholder</span>
            </div>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {metrics.map(([label, value]) => (
                <div key={label} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm text-slate-500">{label}</p>
                  <p className="mt-2 text-xl font-black text-slate-950">{value}</p>
                </div>
              ))}
            </div>
            <div className="mt-5 rounded-2xl bg-slate-950 p-5 text-white">
              <div className="flex items-center justify-between gap-4">
                <p className="text-sm font-semibold text-slate-300">Weekly optimization</p>
                <span className="rounded-full bg-blue-500 px-3 py-1 text-xs font-bold">Planned</span>
              </div>
              <div className="mt-5 space-y-3">
                {["Offer test", "Audience refinement", "Follow-up review"].map((item, index) => (
                  <div key={item} className="flex items-center gap-3">
                    <span className="grid size-7 place-items-center rounded-full bg-white/10 text-xs font-bold">{index + 1}</span>
                    <span className="text-sm text-slate-200">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <p className="mt-4 text-xs leading-5 text-slate-500">Metrics shown are decorative placeholders, not client performance claims.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
