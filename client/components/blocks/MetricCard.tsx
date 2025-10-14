import type { LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";

interface MetricCardProps {
  icon: LucideIcon;
  label: string;
  value: string;
  delta?: string;
  trend?: "up" | "down" | "stable";
  className?: string;
}

export const MetricCard = ({
  icon: Icon,
  label,
  value,
  delta,
  trend = "up",
  className,
}: MetricCardProps) => {
  const trendColor =
    trend === "up"
      ? "text-primary"
      : trend === "down"
        ? "text-destructive"
        : "text-muted-foreground";

  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-3xl border border-border/40 bg-card/70 p-6 shadow-card backdrop-blur transition hover:border-primary/40 hover:shadow-glow",
        className,
      )}
    >
      <div className="absolute inset-0 opacity-0 transition group-hover:opacity-100">
        <div className="h-full w-full bg-gradient-to-br from-primary/10 via-primary/5 to-transparent" />
      </div>
      <div className="relative flex items-start gap-4">
        <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/15 text-primary ring-1 ring-inset ring-primary/10">
          <Icon className="h-5 w-5" />
        </span>
        <div className="flex flex-col">
          <span className="text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground">
            {label}
          </span>
          <span className="font-heading text-3xl font-semibold text-foreground">
            {value}
          </span>
          {delta ? (
            <span className={cn("mt-1 text-sm font-medium", trendColor)}>
              {delta}
            </span>
          ) : null}
        </div>
      </div>
    </div>
  );
};
