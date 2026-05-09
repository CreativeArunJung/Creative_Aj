import { cn } from "@/lib/utils";

type SectionProps = {
  id?: string;
  eyebrow?: string;
  title?: string;
  intro?: string;
  children: React.ReactNode;
  className?: string;
  innerClassName?: string;
};

export function Section({ id, eyebrow, title, intro, children, className, innerClassName }: SectionProps) {
  return (
    <section id={id} className={cn("section-anchor py-16 sm:py-20", className)}>
      <div className={cn("mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8", innerClassName)}>
        {(eyebrow || title || intro) && (
          <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-12">
            {eyebrow && <p className="mb-3 text-sm font-semibold uppercase tracking-[0.14em] text-blue-700">{eyebrow}</p>}
            {title && <h2 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">{title}</h2>}
            {intro && <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">{intro}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
