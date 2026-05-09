"use client";

import { FormEvent, useState } from "react";
import { siteConfig } from "@/lib/utils";

const fields = [
  ["name", "Name", "text"],
  ["businessName", "Business name", "text"],
  ["businessType", "Business type", "text"],
  ["city", "City", "text"],
  ["phone", "Phone number", "tel"],
  ["whatsapp", "WhatsApp number", "tel"],
  ["email", "Email", "email"],
  ["pageLink", "Facebook/Instagram page link", "url"]
] as const;

export default function LeadForm() {
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.checkValidity()) {
      setError("Please complete the required fields before submitting.");
      form.reportValidity();
      return;
    }

    const data = Object.fromEntries(new FormData(form));
    sessionStorage.setItem("auditRequestDraft", JSON.stringify(data));
    setError("");
    setIsSubmitting(true);

    const payload = new FormData(form);
    payload.append("_subject", "New Meta Ads Audit Request");
    payload.append("_captcha", "false");
    payload.append("_template", "table");

    try {
      await fetch(siteConfig.formSubmitEndpoint, {
        method: "POST",
        headers: {
          Accept: "application/json"
        },
        body: payload
      });
    } finally {
      window.location.href = siteConfig.whatsappUrl;
    }
  }

  return (
    <form onSubmit={onSubmit} className="mx-auto max-w-4xl rounded-3xl border border-slate-200 bg-white p-5 shadow-xl shadow-slate-200/80 sm:p-8" noValidate>
      <div className="grid gap-5 md:grid-cols-2">
        {fields.map(([name, label, type]) => (
          <div key={name}>
            <label htmlFor={name} className="mb-2 block text-sm font-semibold text-slate-800">
              {label}
            </label>
            <input
              id={name}
              name={name}
              type={type}
              required
              className="focus-ring w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-950 placeholder:text-slate-400"
              placeholder={label}
            />
          </div>
        ))}
        <div>
          <label htmlFor="triedAds" className="mb-2 block text-sm font-semibold text-slate-800">
            Have you tried boosting posts or Meta Ads before?
          </label>
          <select id="triedAds" name="triedAds" required className="focus-ring w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-950">
            <option value="">Select one</option>
            <option>Yes, boosted posts</option>
            <option>Yes, full Meta Ads</option>
            <option>No, not yet</option>
            <option>Not sure</option>
          </select>
        </div>
        <div>
          <label htmlFor="budget" className="mb-2 block text-sm font-semibold text-slate-800">
            Current monthly marketing budget comfort range
          </label>
          <select id="budget" name="budget" required className="focus-ring w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-950">
            <option value="">Select one</option>
            <option>Under $300</option>
            <option>$300 - $700</option>
            <option>$700 - $1,500</option>
            <option>$1,500+</option>
            <option>I need guidance</option>
          </select>
        </div>
      </div>
      <div className="mt-5">
        <label htmlFor="problem" className="mb-2 block text-sm font-semibold text-slate-800">
          What problem are you facing right now?
        </label>
        <textarea
          id="problem"
          name="problem"
          required
          rows={5}
          className="focus-ring w-full resize-y rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-950 placeholder:text-slate-400"
          placeholder="Tell me what is not working, what you have tried, and what kind of customers you want more of."
        />
      </div>
      {error && <p className="mt-4 rounded-xl bg-red-50 px-4 py-3 text-sm font-medium text-red-700">{error}</p>}
      <button
        type="submit"
        disabled={isSubmitting}
        className="focus-ring mt-6 inline-flex w-full min-h-12 items-center justify-center rounded-full bg-blue-600 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700 sm:w-auto"
      >
        {isSubmitting ? "Submitting..." : "Submit"}
      </button>
      <p className="mt-4 text-sm leading-6 text-slate-500">
        After you submit, your details are sent by email and you are redirected to WhatsApp.
      </p>
    </form>
  );
}
