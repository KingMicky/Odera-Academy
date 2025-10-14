import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip as RechartsTooltip,
  XAxis,
  YAxis,
} from "recharts";
import { DownloadCloud } from "lucide-react";

import { PlatformShell } from "@/components/layout/PlatformShell";
import { Button } from "@/components/ui/button";

const trendData = [
  { month: "Apr", top: 88, average: 72 },
  { month: "May", top: 91, average: 74 },
  { month: "Jun", top: 92, average: 76 },
  { month: "Jul", top: 94, average: 77 },
  { month: "Aug", top: 95, average: 79 },
  { month: "Sep", top: 97, average: 82 },
];

const passRateData = [
  { faculty: "STEM", pass: 86, distinction: 32 },
  { faculty: "Arts", pass: 79, distinction: 24 },
  { faculty: "Social", pass: 82, distinction: 28 },
  { faculty: "Business", pass: 88, distinction: 34 },
];

const Analytics = () => {
  return (
    <PlatformShell
      title="Insights & Analytics"
      description="AI-backed diagnostics for engagement, mastery, and credential confidence."
      action={
        <Button className="rounded-full bg-primary px-6 text-sm font-semibold uppercase tracking-[0.35em] text-primary-foreground">
          <DownloadCloud className="mr-2 h-4 w-4" />
          Export to Excel
        </Button>
      }
    >
      <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-3xl border border-border/50 bg-card/70 p-6 shadow-card">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="font-heading text-xl font-semibold text-foreground">
                Mastery trajectory
              </h2>
              <p className="text-sm text-muted-foreground">
                Comparing top performers versus academy averages
              </p>
            </div>
            <span className="rounded-full bg-primary/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
              6 months
            </span>
          </div>
          <div className="mt-6 h-72">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={trendData}>
                <defs>
                  <linearGradient id="colorTop" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="hsla(var(--ring), 0.8)" />
                    <stop offset="95%" stopColor="hsla(var(--ring), 0.08)" />
                  </linearGradient>
                  <linearGradient id="colorAverage" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="rgba(120, 152, 140, 0.6)" />
                    <stop offset="95%" stopColor="rgba(120, 152, 140, 0.05)" />
                  </linearGradient>
                </defs>
                <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" tickLine={false} axisLine={false} />
                <YAxis domain={[60, 100]} stroke="hsl(var(--muted-foreground))" tickLine={false} axisLine={false} />
                <RechartsTooltip
                  contentStyle={{
                    background: "rgba(14, 20, 18, 0.92)",
                    borderRadius: 16,
                    border: "1px solid rgba(0,196,107,0.18)",
                    color: "white",
                    fontFamily: "Inter",
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="top"
                  stroke="hsl(var(--ring))"
                  strokeWidth={3}
                  fill="url(#colorTop)"
                />
                <Area
                  type="monotone"
                  dataKey="average"
                  stroke="rgba(120,152,140,0.9)"
                  strokeWidth={2}
                  fill="url(#colorAverage)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="rounded-3xl border border-border/50 bg-card/70 p-6 shadow-card">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="font-heading text-xl font-semibold text-foreground">
                Pass rate by faculty
              </h2>
              <p className="text-sm text-muted-foreground">
                Distinction bands versus baseline pass
              </p>
            </div>
          </div>
          <div className="mt-6 h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={passRateData} barGap={12}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.06)" />
                <XAxis dataKey="faculty" stroke="hsl(var(--muted-foreground))" axisLine={false} tickLine={false} />
                <YAxis stroke="hsl(var(--muted-foreground))" axisLine={false} tickLine={false} domain={[0, 100]} />
                <RechartsTooltip
                  contentStyle={{
                    background: "rgba(14, 20, 18, 0.92)",
                    borderRadius: 16,
                    border: "1px solid rgba(0,196,107,0.18)",
                    color: "white",
                    fontFamily: "Inter",
                  }}
                />
                <Bar dataKey="pass" fill="hsl(var(--ring))" radius={[14, 14, 14, 14]} />
                <Bar dataKey="distinction" fill="rgba(120,152,140,0.6)" radius={[14, 14, 14, 14]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-3xl border border-border/50 bg-card/70 p-6 shadow-card">
          <h3 className="font-heading text-lg font-semibold text-foreground">
            Engagement highlights
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="rounded-2xl border border-border/40 bg-background/60 px-4 py-3">
              94% of learners completed practice modules before certification exams.
            </li>
            <li className="rounded-2xl border border-border/40 bg-background/60 px-4 py-3">
              AI feedback loops reduced retake attempts by 18% this quarter.
            </li>
            <li className="rounded-2xl border border-border/40 bg-background/60 px-4 py-3">
              Night study sessions peak between 9PM and 11PM across timezones.
            </li>
          </ul>
        </div>
        <div className="rounded-3xl border border-border/50 bg-card/70 p-6 shadow-card">
          <h3 className="font-heading text-lg font-semibold text-foreground">
            Alert thresholds
          </h3>
          <div className="mt-4 space-y-3 text-sm text-muted-foreground">
            {[
              { label: "Dropout risk", value: "3.8%", band: "Low" },
              { label: "Exam integrity flags", value: "0.4%", band: "Minimal" },
              { label: "Instructor SLA", value: "98.7%", band: "Optimal" },
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-center justify-between rounded-2xl border border-border/40 bg-background/60 px-4 py-3"
              >
                <div>
                  <p className="font-heading text-base text-foreground">{item.value}</p>
                  <p className="text-xs text-muted-foreground">{item.label}</p>
                </div>
                <span className="rounded-full bg-primary/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
                  {item.band}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PlatformShell>
  );
};

export default Analytics;
