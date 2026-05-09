import { caseStudies, proofCards } from "@/lib/data";
import { CTAButton } from "@/components/CTAButton";
import { Section } from "@/components/Section";

export default function Proof() {
  return (
    <>
      <Section
        id="results"
        title="Proof That Builds Trust"
        intro="Business owners do not want empty promises. They want proof, clarity, and transparency. Here are the types of results and proof you can review during the audit call."
        className="bg-white"
      >
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {proofCards.map(([title, body]) => (
            <article key={title} className="rounded-3xl border border-dashed border-slate-300 bg-slate-50 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-500">Editable placeholder</p>
              <h3 className="mt-3 text-lg font-bold text-slate-950">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{body}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section title="Editable Case Study Placeholders" className="bg-slate-50">
        <div className="grid gap-5 lg:grid-cols-3">
          {caseStudies.map((study, index) => (
            <article key={study.business} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold text-blue-700">Case Study {index + 1}</p>
              <h3 className="mt-2 text-xl font-bold text-slate-950">{study.business}</h3>
              <dl className="mt-5 space-y-4 text-sm leading-6">
                <div>
                  <dt className="font-bold text-slate-900">Problem before</dt>
                  <dd className="text-slate-600">{study.problem}</dd>
                </div>
                <div>
                  <dt className="font-bold text-slate-900">What was fixed</dt>
                  <dd className="text-slate-600">{study.fix}</dd>
                </div>
                <div>
                  <dt className="font-bold text-slate-900">Result placeholder</dt>
                  <dd className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-4 text-slate-600">{study.result}</dd>
                </div>
              </dl>
              <CTAButton href="#lead-form" variant="secondary" className="mt-6 w-full">Book audit</CTAButton>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}
