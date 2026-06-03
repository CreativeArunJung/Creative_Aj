"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Is the consultation really free?",
    answer:
      "Yes. The 1:1 consultation is free. The goal is to understand your business and give you clear direction before you decide what to do next."
  },
  {
    question: "Who is this consultation for?",
    answer:
      "It is for Nepal-based business owners who want more leads, customers, sales, and a clearer digital marketing strategy."
  },
  {
    question: "What will I get inside the consultation call?",
    answer:
      "I will look at your current situation, identify what is not working, and suggest a practical marketing plan you can start using immediately."
  },
  {
    question: "How long will the consultation call be?",
    answer:
      "The call is planned for around 1 hour, so there is enough time to understand your business and discuss the next steps clearly."
  },
  {
    question: "Do I need to have a website before booking the call?",
    answer:
      "No. You can book the call even if you only have a Facebook page, Instagram page, physical store, or a new business idea."
  },
  {
    question: "What happens after I fill up the form?",
    answer:
      "After submitting the form, you will be redirected to a thank-you page and receive the next steps for booking your appointment."
  },
  {
    question: "Will you help me create a marketing plan for my business?",
    answer:
      "Yes. The call is focused on giving you a customized digital marketing plan based on your business, audience, and current challenges."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="px-5 py-16 sm:py-20">
      <div className="mx-auto max-w-4xl">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-orange">
            Questions
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-brand-ink sm:text-4xl">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="mt-9 overflow-hidden border border-brand-ink/10 bg-white shadow-premium">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={faq.question} className="border-b border-brand-ink/10 last:border-b-0">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left text-base font-semibold text-brand-ink transition hover:bg-brand-cream sm:px-7"
                  aria-expanded={isOpen}
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    aria-hidden="true"
                    className={`h-5 w-5 shrink-0 text-brand-orange transition ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`grid transition-all duration-200 ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-base leading-7 text-slate-700 sm:px-7">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
