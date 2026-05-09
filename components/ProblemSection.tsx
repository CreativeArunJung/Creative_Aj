import { Section } from "@/components/Section";

const questions = [
  "Where are the real customers?",
  "Why are people asking but not buying?",
  "Why are my competitors getting more attention than me?",
  "Is my product the problem?",
  "Or am I just doing marketing the wrong way?"
];

export default function ProblemSection() {
  return (
    <>
      <Section id="problem" title="Getting Likes But No Customers?" className="bg-white">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2">
          <div className="rounded-3xl bg-slate-50 p-6 sm:p-8">
            <p className="text-lg font-bold text-slate-950">Maybe this sounds familiar.</p>
            <div className="mt-5 space-y-3 text-base leading-7 text-slate-700">
              <p>People message you and ask: “Price?” “Last price?” “Location?” “Can you send catalogue?” “Too expensive.”</p>
              <p>Then they disappear.</p>
              <p>You post product photos, reels, offers, and designs. Some posts get likes. Some get comments. Some get nothing.</p>
              <p>You boost posts because it feels like the easiest option.</p>
            </div>
          </div>
          <div className="grid gap-3">
            {questions.map((question) => (
              <div key={question} className="rounded-2xl border border-slate-200 bg-white p-5 text-base font-semibold text-slate-900 shadow-sm">
                “{question}”
              </div>
            ))}
          </div>
        </div>
        <div className="mx-auto mt-8 max-w-4xl rounded-3xl border border-blue-100 bg-blue-50 p-6 text-center">
          <p className="text-lg font-bold text-slate-950">The problem is usually not that your product is bad.</p>
          <p className="mt-2 text-base leading-7 text-slate-700">The problem is that your business does not have a proper customer acquisition system.</p>
        </div>
      </Section>

      <Section title="Random Posting Is Not a Growth Strategy" className="bg-slate-50">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-3xl bg-slate-950 p-7 text-white">
            <p className="text-3xl font-black">Hope is not a system.</p>
            <p className="mt-4 leading-7 text-slate-300">
              Boosting a post is not the same as running a real Meta Ads strategy. A boosted post may push content to more people, but it does not automatically mean those people are right, qualified, ready to buy, or tracked properly.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {["Posting when they have time", "Boosting when sales are slow", "Copying competitors", "Running discounts", "Hiring someone to make designs", "Trying reels", "Waiting for referrals", "Hoping walk-in customers will come"].map((item) => (
              <div key={item} className="rounded-2xl border border-slate-200 bg-white p-5 font-medium text-slate-700">
                {item}
              </div>
            ))}
          </div>
        </div>
        <div className="mx-auto mt-10 max-w-5xl columns-1 gap-4 space-y-4 sm:columns-2">
          {["We boosted posts but didn’t get any real sales.", "Our page is active, but business is still slow.", "We are spending money on ads, but we don’t know if it is working.", "I tried digital marketing before, but it didn’t work.", "I need someone who understands business, not just posting."].map((quote) => (
            <blockquote key={quote} className="ml-auto w-fit break-inside-avoid">
              <span className="imessage-bubble px-5 py-3.5 text-base font-semibold leading-6 text-white">
                “{quote}”
              </span>
            </blockquote>
          ))}
        </div>
        <p className="mx-auto mt-8 max-w-3xl text-center text-base leading-8 text-slate-700">
          You may already have a good product or service. You may already be working hard. You may already be spending money. But without the right system, your business stays stuck. Some months are good. Some months are weak. You cannot plan properly.
        </p>
      </Section>
    </>
  );
}
