import { CheckCircle2 } from "lucide-react";

type BenefitsProps = {
  benefits: string[];
};

export default function Benefits({ benefits }: BenefitsProps) {
  return (
    <section className="px-5 py-14 sm:py-18">
      <div className="mx-auto max-w-6xl">
        <div className="mb-9 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-orange">
            How You Benefit
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-brand-ink sm:text-4xl">
            How You Benefit From This Consultation
          </h2>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {benefits.map((benefit) => (
            <div
              key={benefit}
              className="border border-brand-ink/10 bg-white p-5 shadow-sm"
            >
              <CheckCircle2
                aria-hidden="true"
                className="mb-5 h-6 w-6 text-brand-orange"
              />
              <p className="text-base font-semibold leading-7 text-brand-ink">
                {benefit}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
