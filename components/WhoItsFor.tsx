import { businessTypes } from "@/lib/data";
import { Section } from "@/components/Section";

export default function WhoItsFor() {
  return (
    <Section title="Built for Business Owners Who Are Tired of Guessing" className="bg-slate-50">
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {businessTypes.map((type) => (
          <div key={type} className="rounded-2xl border border-slate-200 bg-white p-4 text-sm font-semibold text-slate-800 shadow-sm">
            {type}
          </div>
        ))}
      </div>
      <div className="mx-auto mt-10 max-w-4xl rounded-3xl bg-slate-950 p-6 text-white sm:p-8">
        <p className="text-xl font-bold">This is for you if you are thinking:</p>
        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          {["I need more inquiries, not just followers.", "I want customers who are actually ready to buy.", "I don’t have time to manage Facebook and Instagram every day.", "I cannot keep depending only on referrals.", "I need a system, not random posting."].map((line) => (
            <p key={line} className="rounded-2xl bg-white/10 p-4 text-sm font-medium text-slate-100">“{line}”</p>
          ))}
        </div>
      </div>
    </Section>
  );
}
