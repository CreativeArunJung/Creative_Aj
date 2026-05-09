import Link from "next/link";
import { cn, siteConfig } from "@/lib/utils";

type CTAButtonProps = {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "ghost" | "whatsapp";
  className?: string;
  ariaLabel?: string;
};

const variants = {
  primary: "bg-blue-600 text-white shadow-lg shadow-blue-600/20 hover:bg-blue-700",
  secondary: "border border-slate-300 bg-white text-slate-900 hover:border-blue-300 hover:bg-blue-50",
  ghost: "text-slate-700 hover:bg-slate-100",
  whatsapp: "bg-[#25D366] text-white shadow-lg shadow-[#25D366]/20 hover:bg-[#1fb85a]"
};

export function CTAButton({ children, href = "#lead-form", variant = "primary", className, ariaLabel }: CTAButtonProps) {
  return (
    <Link
      href={href}
      aria-label={ariaLabel}
      className={cn(
        "focus-ring inline-flex min-h-11 items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition",
        variants[variant],
        className
      )}
    >
      {children}
    </Link>
  );
}

export function WhatsAppCTA({ children = "Message Me on WhatsApp", className }: { children?: React.ReactNode; className?: string }) {
  return (
    <CTAButton
      href={siteConfig.whatsappUrl}
      variant="whatsapp"
      className={className}
      ariaLabel="Message the Meta Ads expert on WhatsApp"
    >
      {children}
    </CTAButton>
  );
}
