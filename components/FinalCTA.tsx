import { CTAButton, WhatsAppCTA } from "@/components/CTAButton";
import { Section } from "@/components/Section";

export function UrgencySection() {
  return (
    <Section title="If Your Business Is Already Feeling Slow, Waiting Usually Makes It Worse" className="bg-white">
      <div className="mx-auto max-w-5xl rounded-3xl border border-slate-200 bg-slate-950 p-6 text-white sm:p-8">
        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-3 leading-7 text-slate-200">
            <p>If inquiries have already dropped, if you are relying too much on referrals, if competitors are getting more attention, or if you are spending money without knowing what works, waiting another month may only create more confusion.</p>
            <p>The sooner you understand what is broken, the sooner you can fix it.</p>
            <p>Because each audit and campaign setup needs proper attention, I only take on a limited number of new business owners at a time.</p>
          </div>
          <div className="rounded-2xl bg-white p-5 text-slate-950">
            <p className="font-bold">Editable scarcity text</p>
            <p className="mt-3 text-sm leading-6 text-slate-600">Only [X] free audit slots are available this month.</p>
            <p className="mt-2 text-sm leading-6 text-slate-600">Currently accepting [X] new campaign clients this month.</p>
            <CTAButton href="#lead-form" className="mt-5 w-full">Check Available Audit Slots</CTAButton>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default function FinalCTA() {
  return (
    <Section title="Ready to Stop Guessing and Build a Real Customer Acquisition System?" className="bg-[linear-gradient(180deg,#f8fafc_0%,#ffffff_100%)]">
      <div className="mx-auto max-w-4xl text-center">
        <p className="text-lg leading-8 text-slate-700">
          You do not need more random boosted posts. You do not need more confusing reports. You do not need to keep wondering why customers are not consistent.
        </p>
        <p className="mt-4 text-lg leading-8 text-slate-700">
          You need a clear system that helps your business attract, capture, retarget, and convert more serious inquiries.
        </p>
        <p className="mt-4 text-lg leading-8 text-slate-700">
          If you are a new or struggling business owner and you want more predictable customers from Facebook and Instagram, start with a Free Marketing Audit Call.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <CTAButton href="#lead-form" className="min-h-12 px-6">Book My Free Marketing Audit Call</CTAButton>
          <WhatsAppCTA className="min-h-12 px-6" />
        </div>
        <p className="mt-4 text-sm leading-6 text-slate-500">For business owners who want more qualified inquiries, better tracking, and a clearer growth plan.</p>
      </div>
    </Section>
  );
}
