import { benefits } from "@/lib/data";
import { Card } from "@/components/Card";
import { Section } from "@/components/Section";

export default function Benefits() {
  return (
    <Section title="What This Means for Your Business" className="bg-slate-50">
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {benefits.map(([title, body]) => (
          <Card key={title} title={title}>
            <p>{body}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
