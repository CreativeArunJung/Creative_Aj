import { CTAButton } from "@/components/CTAButton";
import { Section } from "@/components/Section";

const system = [
  {
    title: "Offer",
    body: "Shape a reason for buyers to respond now.",
    accent: "from-blue-500 to-cyan-500",
    badge: "bg-blue-50 text-blue-700 ring-blue-100"
  },
  {
    title: "Audience",
    body: "Find the people most likely to need you.",
    accent: "from-emerald-500 to-teal-500",
    badge: "bg-emerald-50 text-emerald-700 ring-emerald-100"
  },
  {
    title: "Ad creatives",
    body: "Test hooks, proof, and visuals that stop scrolling.",
    accent: "from-violet-500 to-fuchsia-500",
    badge: "bg-violet-50 text-violet-700 ring-violet-100"
  },
  {
    title: "Messaging",
    body: "Make the value clear before price becomes the only question.",
    accent: "from-amber-500 to-orange-500",
    badge: "bg-amber-50 text-amber-700 ring-amber-100"
  },
  {
    title: "Lead journey",
    body: "Guide visitors from first click to serious inquiry.",
    accent: "from-sky-500 to-blue-600",
    badge: "bg-sky-50 text-sky-700 ring-sky-100"
  },
  {
    title: "Retargeting",
    body: "Bring warm prospects back with the right next message.",
    accent: "from-rose-500 to-pink-500",
    badge: "bg-rose-50 text-rose-700 ring-rose-100"
  },
  {
    title: "Follow-up process",
    body: "Improve replies so more inquiries become real conversations.",
    accent: "from-lime-500 to-emerald-500",
    badge: "bg-lime-50 text-lime-700 ring-lime-100"
  },
  {
    title: "Tracking",
    body: "See what is working instead of guessing from boosted posts.",
    accent: "from-indigo-500 to-blue-500",
    badge: "bg-indigo-50 text-indigo-700 ring-indigo-100"
  },
  {
    title: "Weekly improvement",
    body: "Use results to refine budget, creative, and targeting.",
    accent: "from-slate-700 to-slate-950",
    badge: "bg-slate-100 text-slate-700 ring-slate-200"
  }
];

export default function SolutionSection() {
  return (
    <Section
      id="system"
      title="You Do Not Need More Random Followers. You Need Qualified Buyers."
      intro="My service is not just Meta Ads management. And it is not just posting content."
      className="bg-white"
    >
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1fr_1.1fr]">
        <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
          <p className="text-lg leading-8 text-slate-700">
            I build a Meta Ads Customer Acquisition System for business owners who want more qualified inquiries, more calls, more messages, more bookings, more store visits, more consultations, or more orders.
          </p>
          <p className="mt-5 text-lg leading-8 text-slate-700">
            So instead of guessing what to post, boosting random content, and wondering where customers are coming from, you get a clear plan for attracting, capturing, following up, and converting interested people.
          </p>
          <p className="mt-5 font-bold text-slate-950">
            Goal: help your business turn Facebook and Instagram into a more predictable source of customer inquiries.
          </p>
          <CTAButton href="#lead-form" className="mt-6">Book My Free Marketing Audit Call</CTAButton>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {system.map((item, index) => (
            <article
              key={item.title}
              className="group relative min-h-40 overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-sm shadow-slate-200/80 transition hover:-translate-y-1 hover:border-slate-300 hover:shadow-xl hover:shadow-slate-200"
            >
              <div className={`absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r ${item.accent}`} aria-hidden="true" />
              <div className="flex items-start justify-between gap-4">
                <span className={`grid size-10 shrink-0 place-items-center rounded-full text-sm font-black ring-1 ${item.badge}`}>
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="mt-1 h-2 w-10 rounded-full bg-slate-100 transition group-hover:bg-slate-200" aria-hidden="true" />
              </div>
              <h3 className="mt-5 text-lg font-black text-slate-950">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{item.body}</p>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}
