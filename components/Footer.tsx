import Link from "next/link";
import { CTAButton, WhatsAppCTA } from "@/components/CTAButton";
import { siteConfig } from "@/lib/utils";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white py-10">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 sm:px-6 md:grid-cols-[1.4fr_1fr_1fr] lg:px-8">
        <div>
          <p className="text-lg font-bold text-slate-950">{siteConfig.brandName}</p>
          <p className="mt-3 max-w-md text-sm leading-6 text-slate-600">
            Helping business owners turn Facebook and Instagram into a predictable customer acquisition system.
          </p>
        </div>
        <nav aria-label="Footer navigation" className="grid gap-2 text-sm">
          <Link className="text-slate-600 hover:text-slate-950" href="/#home">Home</Link>
          <Link className="text-slate-600 hover:text-slate-950" href="/#process">Process</Link>
          <Link className="text-slate-600 hover:text-slate-950" href="/#faq">FAQ</Link>
          <Link className="text-slate-600 hover:text-slate-950" href="/#lead-form">Book Audit</Link>
        </nav>
        <div className="flex flex-col gap-3 sm:items-start">
          <WhatsAppCTA />
          <CTAButton href="/#lead-form" variant="ghost" className="px-0 hover:bg-transparent hover:text-blue-700">
            Book Free Audit
          </CTAButton>
        </div>
      </div>
      <div className="mx-auto mt-8 max-w-7xl px-5 text-sm text-slate-500 sm:px-6 lg:px-8">
        © {new Date().getFullYear()} {siteConfig.brandName}. Placeholder brand details are easy to replace.
      </div>
    </footer>
  );
}
