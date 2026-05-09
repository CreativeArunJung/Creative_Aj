import Image from "next/image";
import Link from "next/link";
import { CTAButton, WhatsAppCTA } from "@/components/CTAButton";

const nav = [
  ["Problem", "/#problem"],
  ["System", "/#system"],
  ["Process", "/#process"],
  ["Results", "/#results"],
  ["FAQ", "/#faq"]
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur">
      <div className="mx-auto flex min-h-16 max-w-7xl items-center justify-between gap-4 px-5 sm:px-6 lg:px-8">
        <Link href="/#home" className="focus-ring flex items-center gap-3 rounded-full">
          <Image
            src="/creativeaj-logo-cropped.png"
            alt="CreativeAJ"
            width={1420}
            height={360}
            priority
            className="h-10 w-auto sm:h-[51px]"
          />
        </Link>
        <nav aria-label="Primary navigation" className="hidden items-center gap-6 lg:flex">
          {nav.map(([label, href]) => (
            <Link key={label} href={href} className="focus-ring rounded-full text-sm font-medium text-slate-600 transition hover:text-slate-950">
              {label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-3 sm:flex">
          <WhatsAppCTA className="hidden lg:inline-flex" />
          <CTAButton href="/#lead-form" className="px-4 py-2.5">
            Book Free Audit
          </CTAButton>
        </div>
        <CTAButton href="/#lead-form" className="sm:hidden">
          Book Audit
        </CTAButton>
      </div>
    </header>
  );
}
