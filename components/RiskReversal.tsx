import { CTAButton } from "@/components/CTAButton";
import { Section } from "@/components/Section";

const clarity = ["What is not working", "What should be fixed first", "Whether Meta Ads makes sense for your business right now", "What type of campaign may fit your goal", "What next step is practical for your budget and business stage"];
const promise = ["I will build your campaign around a clear system", "I will explain what I am doing", "I will track results", "I will improve based on data", "I will focus on qualified inquiries, not vanity metrics", "I will help you understand where your marketing money is going"];

export default function RiskReversal() {
  return (
    <>
      <Section title="Start With Clarity Before You Commit" className="bg-white">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2">
          <div>
            <p className="text-lg leading-8 text-slate-700">You do not have to jump blindly into a full campaign.</p>
            <p className="mt-4 text-lg font-bold text-slate-950">Start with a Free Marketing Audit Call.</p>
            <p className="mt-4 text-lg leading-8 text-slate-700">
              On the call, I will look at your current situation and help identify what may be stopping your business from getting more consistent customers.
            </p>
            <p className="mt-5 text-base font-bold text-slate-950">No pressure. No fake guarantee. No confusing marketing talk.</p>
            <CTAButton href="#lead-form" className="mt-6">Book My Free Marketing Audit Call</CTAButton>
          </div>
          <div className="rounded-3xl bg-blue-50 p-6">
            <p className="font-bold text-slate-950">You will leave with more clarity on:</p>
            <ul className="mt-5 space-y-3">
              {clarity.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-6 text-slate-700">
                  <span className="mt-1.5 size-2 rounded-full bg-blue-600" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section title="My Promise: No Random Ads. No Hidden Process. No Fake Hype." className="bg-slate-50">
        <div className="mx-auto max-w-5xl rounded-3xl bg-white p-6 shadow-sm sm:p-8">
          <p className="text-lg leading-8 text-slate-700">
            I will not promise impossible sales numbers. I will not tell you to spend big without a plan. I will not just make designs and call it marketing. I will not leave you confused about what is happening.
          </p>
          <p className="mt-6 text-lg font-bold text-slate-950">My promise is simple:</p>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2">
            {promise.map((item) => (
              <li key={item} className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm font-semibold text-slate-800">{item}</li>
            ))}
          </ul>
          <p className="mt-6 font-bold text-slate-950">That is how professional marketing should feel.</p>
        </div>
      </Section>
    </>
  );
}
