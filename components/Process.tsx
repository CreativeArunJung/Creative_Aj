import {
  CalendarCheck2,
  ClipboardList,
  FileCheck2,
  MailCheck,
  Video
} from "lucide-react";

const steps = [
  {
    title: "Fill up the form",
    description: "Share your details so I can understand your business first.",
    icon: ClipboardList
  },
  {
    title: "Receive an email with the appointment link",
    description: "You will get the next step in your inbox after submitting.",
    icon: MailCheck
  },
  {
    title: "Fill the appointment form",
    description: "Pick your preferred time and add any extra business context.",
    icon: CalendarCheck2
  },
  {
    title: "Join the 1:1 consultation call",
    description: "We will talk through your current marketing and growth goals.",
    icon: Video
  },
  {
    title: "Get your customized digital marketing plan for FREE",
    description: "Leave with a practical plan you can start implementing immediately.",
    icon: FileCheck2
  }
];

export default function Process() {
  return (
    <section className="px-5 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-orange">
            Simple Process
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-brand-ink sm:text-4xl">
            How The Free Consultation Works
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-700">
            The process is simple, clear, and designed to help you get direction
            before you spend more money on ads.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={step.title}
                className="relative border border-brand-ink/10 bg-white p-5 shadow-sm"
              >
                <div className="mb-5 flex items-center justify-between">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-orange text-sm font-bold text-white">
                    {index + 1}
                  </span>
                  <Icon aria-hidden="true" className="h-6 w-6 text-brand-teal" />
                </div>
                <h3 className="text-base font-semibold leading-6 text-brand-ink">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
