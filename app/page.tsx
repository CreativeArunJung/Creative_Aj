import Benefits from "@/components/Benefits";
import Bonuses from "@/components/Bonuses";
import FAQ from "@/components/FAQ";
import FinalCTA, { UrgencySection } from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Included from "@/components/Included";
import LeadForm from "@/components/LeadForm";
import ProblemSection from "@/components/ProblemSection";
import Proof from "@/components/Proof";
import RiskReversal from "@/components/RiskReversal";
import { Section } from "@/components/Section";
import SolutionSection from "@/components/SolutionSection";
import WhoItsFor from "@/components/WhoItsFor";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ProblemSection />
        <SolutionSection />
        <WhoItsFor />
        <HowItWorks />
        <Benefits />
        <Included />
        <Bonuses />
        <Proof />
        <Section id="faq" title="Questions You May Be Thinking Right Now" className="bg-white">
          <FAQ />
        </Section>
        <RiskReversal />
        <UrgencySection />
        <FinalCTA />
        <Section
          id="lead-form"
          title="Book Your Free Marketing Audit Call"
          intro="Share a few details about your business so I can review your situation before the call."
          className="bg-slate-50"
        >
          <LeadForm />
        </Section>
      </main>
      <Footer />
    </>
  );
}
