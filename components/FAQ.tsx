"use client";

import { useState } from "react";
import { faqs } from "@/lib/data";

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <div className="mx-auto max-w-4xl divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white shadow-sm">
      {faqs.map(([question, answer], index) => {
        const isOpen = open === index;
        return (
          <div key={question}>
            <button
              type="button"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? -1 : index)}
              className="focus-ring flex w-full items-center justify-between gap-4 rounded-2xl px-5 py-5 text-left sm:px-6"
            >
              <span className="text-base font-semibold text-slate-950">{question}</span>
              <span aria-hidden="true" className="grid size-8 shrink-0 place-items-center rounded-full bg-slate-100 text-xl text-slate-700">
                {isOpen ? "−" : "+"}
              </span>
            </button>
            {isOpen && <p className="px-5 pb-5 text-sm leading-7 text-slate-600 sm:px-6">{answer}</p>}
          </div>
        );
      })}
    </div>
  );
}
