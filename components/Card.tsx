import { cn } from "@/lib/utils";

type CardProps = {
  title: string;
  children: React.ReactNode;
  eyebrow?: string;
  className?: string;
};

export function Card({ title, children, eyebrow, className }: CardProps) {
  return (
    <article className={cn("rounded-2xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200/70", className)}>
      {eyebrow && <p className="mb-3 text-sm font-semibold text-blue-700">{eyebrow}</p>}
      <h3 className="text-lg font-bold text-slate-950">{title}</h3>
      <div className="mt-3 text-sm leading-6 text-slate-600">{children}</div>
    </article>
  );
}
