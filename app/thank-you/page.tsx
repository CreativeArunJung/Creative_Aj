import Link from "next/link";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export const metadata = {
  title: "Thank You | Audit Request Received",
  description: "Your free Meta Ads marketing audit request has been received."
};

export default function ThankYouPage() {
  return (
    <>
      <Header />
      <main className="min-h-[70vh] bg-slate-50 py-20">
        <section className="mx-auto max-w-3xl px-5 text-center sm:px-6">
          <p className="mb-4 inline-flex rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-800">
            Audit request received
          </p>
          <h1 className="text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">Thank You. Your Audit Request Has Been Received.</h1>
          <p className="mt-6 text-lg leading-8 text-slate-700">I will review your business details and contact you on WhatsApp or phone.</p>
          <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 text-left shadow-sm">
            <p className="font-bold text-slate-950">Before the call, think about:</p>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-700">
              <li>What have you already tried?</li>
              <li>What is not working?</li>
              <li>What kind of customers do you want more of?</li>
              <li>What result would make the next 30 days feel successful?</li>
            </ul>
            <p className="mt-4 text-sm leading-6 text-slate-600">This will help make the call more useful for you.</p>
          </div>
          <Link href="/" className="focus-ring mt-8 inline-flex min-h-12 items-center justify-center rounded-full bg-blue-600 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700">
            Back to Home
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
