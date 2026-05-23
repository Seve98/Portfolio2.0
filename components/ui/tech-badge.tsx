import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export function TechBadge({ children, className }: Props) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1.5 rounded-full border border-[rgb(var(--border-strong))] bg-transparent text-[11px] font-medium text-zinc-300 whitespace-nowrap hover:border-accent-red hover:text-accent-red transition-colors",
        className
      )}
    >
      {children}
    </span>
  );
}
