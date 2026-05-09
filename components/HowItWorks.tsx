import { processSteps } from "@/lib/data";
import { Card } from "@/components/Card";
import { Section } from "@/components/Section";

export default function HowItWorks() {
  return (
    <Section
      id="process"
      title="How I Help You Get More Qualified Inquiries"
      intro="No confusing jargon. No fake promises. No hiding behind reports you cannot understand. Just a clear process built to find what is wrong, fix it, and improve performance."
      className="bg-white"
    >
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {processSteps.map((item) => (
          <Card key={item.title} title={item.title} eyebrow={item.step}>
            <p>{item.body}</p>
            <p className="mt-3 font-semibold text-slate-800">{item.note}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
