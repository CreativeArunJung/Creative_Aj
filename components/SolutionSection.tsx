import { CTAButton } from "@/components/CTAButton";
import { Section } from "@/components/Section";

const system = ["Offer", "Audience", "Ad creatives", "Messaging", "Lead journey", "Retargeting", "Follow-up process", "Tracking", "Weekly improvement"];

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
        <div className="grid gap-3 sm:grid-cols-3">
          {system.map((item) => (
            <div key={item} className="rounded-2xl border border-blue-100 bg-blue-50 p-5 text-center font-bold text-slate-900">
              {item}
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
