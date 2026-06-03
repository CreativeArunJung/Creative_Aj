import CTAForm from "@/components/CTAForm";
import FAQ from "@/components/FAQ";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Process from "@/components/Process";

export default function Home() {
  return (
    <main>
      <Hero />
      <Problem />
      <Process />
      <FAQ />
      <CTAForm />
    </main>
  );
}
