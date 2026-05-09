import { included } from "@/lib/data";
import { Section } from "@/components/Section";

export default function Included() {
  return (
    <Section title="What You Get Inside the Meta Ads Customer Acquisition System" className="bg-white">
      <div className="grid gap-5 lg:grid-cols-2">
        {included.map((group) => (
          <article key={group.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-bold text-slate-950">{group.title}</h3>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {group.items.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-6 text-slate-700">
                  <span className="mt-1.5 size-2 shrink-0 rounded-full bg-blue-600" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
}
