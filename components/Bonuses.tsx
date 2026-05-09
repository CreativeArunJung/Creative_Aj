import { bonuses } from "@/lib/data";
import { Card } from "@/components/Card";
import { Section } from "@/components/Section";

export default function Bonuses() {
  return (
    <Section title="Extra Support to Help You Get Better Results" className="bg-slate-50">
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-5">
        {bonuses.map(([title, body], index) => (
          <Card key={title} title={title} eyebrow={`Bonus ${index + 1}`} className="lg:col-span-1">
            <p>{body}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
