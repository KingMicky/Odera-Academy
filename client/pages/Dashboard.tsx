import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip as RechartsTooltip,
  XAxis,
  YAxis,
} from "recharts";
import {
  Award,
  BookOpenCheck,
  LayoutGrid,
  PlayCircle,
  TimerReset,
} from "lucide-react";

import { PlatformShell } from "@/components/layout/PlatformShell";
import { MetricCard } from "@/components/blocks/MetricCard";
import { Button } from "@/components/ui/button";

const performanceData = [
  { month: "Apr", score: 68 },
  { month: "May", score: 72 },
  { month: "Jun", score: 78 },
  { month: "Jul", score: 81 },
  { month: "Aug", score: 84 },
  { month: "Sep", score: 88 },
  { month: "Oct", score: 91 },
];

const activityData = [
  {
    title: "Data Structures Marathon",
    status: "Live",
    participants: 420,
    time: "Closes in 32m",
  },
  {
    title: "English Language Midterm",
    status: "Scheduled",
    participants: 312,
    time: "Starts tomorrow",
  },
  {
    title: "Physics 101",
    status: "Grading",
    participants: 287,
    time: "Results in review",
  },
];

const Dashboard = () => {
  return (
    <PlatformShell
      title="Executive dashboard"
      description="Monitor live CBT activity, learner momentum, and credentialing health in real time."
      action={
        <Button
          variant="outline"
          className="rounded-full border-primary/40 bg-primary/15 text-primary hover:bg-primary/20 hover:text-primary"
        >
          Sync SIS
        </Button>
      }
    >
      <div className="grid gap-6 lg:grid-cols-3">
        <MetricCard
          icon={LayoutGrid}
          label="Total Students"
          value="12,384"
          delta="+182 this week"
        />
        <MetricCard
          icon={TimerReset}
          label="Active Exams"
          value="48"
          delta="6 running now"
        />
        <MetricCard
          icon={Award}
          label="Certificates Issued"
          value="3,942"
          delta="+12% vs last term"
        />
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-3xl border border-border/50 bg-card/70 p-6 shadow-card">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="font-heading text-xl font-semibold text-foreground">
                Performance overview
              </h2>
              <p className="text-sm text-muted-foreground">
                Average exam success rates across all subjects
              </p>
            </div>
            <span className="rounded-full bg-primary/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-primary">
              Term 1
            </span>
          </div>
          <div className="mt-6 h-64">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={performanceData}>
                <defs>
                  <linearGradient id="colorScore" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="hsla(var(--ring), 0.7)" />
                    <stop offset="95%" stopColor="hsla(var(--ring), 0.05)" />
                  </linearGradient>
                </defs>
                <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" tickLine={false} axisLine={false} />
                <YAxis stroke="hsl(var(--muted-foreground))" tickLine={false} axisLine={false} />
                <RechartsTooltip
                  contentStyle={{
                    background: "rgba(14, 20, 18, 0.92)",
                    borderRadius: 16,
                    border: "1px solid rgba(0,196,107,0.25)",
                    color: "white",
                    fontFamily: "Inter",
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="score"
                  stroke="hsl(var(--ring))"
                  strokeWidth={3}
                  fill="url(#colorScore)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="rounded-3xl border border-border/50 bg-card/70 p-6 shadow-card">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="font-heading text-xl font-semibold text-foreground">
                Upcoming sessions
              </h2>
              <p className="text-sm text-muted-foreground">
                Automated scheduling powered by AI pacing
              </p>
            </div>
            <PlayCircle className="h-5 w-5 text-primary" />
          </div>
          <div className="mt-6 space-y-4">
            {activityData.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-border/40 bg-background/60 p-4"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-heading text-base text-foreground">
                      {item.title}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {item.participants} participants
                    </p>
                  </div>
                  <span className="rounded-full bg-primary/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
                    {item.status}
                  </span>
                </div>
                <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
                  <span>Moderation queue</span>
                  <span>{item.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-3xl border border-border/50 bg-card/70 p-6 shadow-card">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="font-heading text-lg font-semibold text-foreground">
                Certification velocity
              </h2>
              <p className="text-sm text-muted-foreground">Past 7 days</p>
            </div>
            <Award className="h-5 w-5 text-primary" />
          </div>
          <div className="mt-5 space-y-4 text-sm text-muted-foreground">
            <div className="flex items-center justify-between rounded-2xl border border-border/40 bg-background/60 px-4 py-3">
              <span>STEM Faculty</span>
              <span className="text-foreground">+148 issued</span>
            </div>
            <div className="flex items-center justify-between rounded-2xl border border-border/40 bg-background/60 px-4 py-3">
              <span>CBT Practice</span>
              <span className="text-foreground">+96 issued</span>
            </div>
          </div>
        </div>
        <div className="rounded-3xl border border-border/50 bg-card/70 p-6 shadow-card">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="font-heading text-lg font-semibold text-foreground">
                Instructor spotlight
              </h2>
              <p className="text-sm text-muted-foreground">
                Course mastery & engagement rating
              </p>
            </div>
            <BookOpenCheck className="h-5 w-5 text-primary" />
          </div>
          <div className="mt-5 space-y-4">
            {["Chidi Okonkwo", "Halima Musa", "Samuel Obi"].map((name, index) => (
              <div
                key={name}
                className="flex items-center justify-between rounded-2xl border border-border/40 bg-background/60 px-4 py-3"
              >
                <div>
                  <p className="font-heading text-base text-foreground">{name}</p>
                  <p className="text-xs text-muted-foreground">
                    Mastery index {(92 - index * 3).toString()}%
                  </p>
                </div>
                <span className="rounded-full bg-primary/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
                  Elite
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PlatformShell>
  );
};

export default Dashboard;
