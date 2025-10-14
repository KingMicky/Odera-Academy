import { Link } from "react-router-dom";
import { ArrowRight, ShieldCheck, Users, Timer, LineChart } from "lucide-react";

import { Button } from "@/components/ui/button";
import { MetricCard } from "@/components/blocks/MetricCard";
import { DevicePreview } from "@/components/blocks/DevicePreview";

const Index = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <div className="absolute inset-0 -z-20 bg-mesh-dark" aria-hidden />
      <div className="absolute inset-0 -z-10 bg-grid-radial" aria-hidden />
      <div className="mx-auto flex min-h-screen w-full max-w-[1400px] flex-col px-6 pb-24 pt-10 sm:px-10">
        <header className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/20 text-primary shadow-inner">
              <span className="text-xl font-bold">OA</span>
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-muted-foreground">
                Odera Academy
              </p>
              <p className="font-heading text-2xl font-semibold text-foreground">
                Premium CBT Platform
              </p>
            </div>
          </Link>
          <div className="hidden items-center gap-3 text-sm text-muted-foreground md:flex">
            <Link to="/dashboard" className="hover:text-foreground">
              Platform
            </Link>
            <Link to="/analytics" className="hover:text-foreground">
              Analytics
            </Link>
            <Link to="/ai-builder" className="hover:text-foreground">
              AI Builder
            </Link>
          </div>
          <div className="flex items-center gap-3">
            <Button asChild variant="ghost" className="hidden rounded-full px-5 text-sm text-muted-foreground hover:text-foreground md:inline-flex">
              <Link to="/login">Sign in</Link>
            </Button>
            <Button asChild className="rounded-full bg-primary px-6 text-sm font-semibold uppercase tracking-[0.35em] text-primary-foreground">
              <Link to="/login">
                Launch CBT Portal
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </header>
        <main className="mt-20 flex flex-col gap-20">
          <section className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-6">
                <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.4em] text-primary">
                  Dark. Precise. Exam-ready.
                </span>
                <h1 className="font-heading text-5xl font-semibold leading-tight text-foreground sm:text-6xl">
                  Odera Academy CBT<br />
                  Reimagined for excellence
                </h1>
                <p className="max-w-xl text-lg text-muted-foreground">
                  Deliver immersive computer-based testing with intelligent proctoring,
                  adaptive feedback loops, and a premium dark-and-green interface built
                  for Nigeria’s next generation of scholars.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-4">
                <Button asChild className="rounded-full bg-primary px-6 text-sm font-semibold uppercase tracking-[0.35em] text-primary-foreground">
                  <Link to="/dashboard">Explore Dashboard</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="rounded-full border-primary/40 bg-primary/10 text-primary hover:bg-primary/15"
                >
                  <Link to="/exam">Experience Exam Mode</Link>
                </Button>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <MetricCard
                  icon={Users}
                  label="Learners onboard"
                  value="12,384"
                  delta="+182 this week"
                />
                <MetricCard
                  icon={ShieldCheck}
                  label="Integrity shield"
                  value="99.6%"
                  delta="Compliance uptime"
                  trend="stable"
                />
              </div>
            </div>
            <div className="relative grid gap-6">
              <div className="absolute -inset-12 -z-10 blur-3xl">
                <div className="h-full w-full rounded-full bg-primary/20" />
              </div>
              <DevicePreview title="Login" description="Role-based authentication" variant="desktop">
                <div className="space-y-4">
                  <div className="flex items-center justify-between rounded-2xl border border-border/40 bg-background/60 px-4 py-3">
                    <span className="text-sm text-muted-foreground">Select your role</span>
                    <span className="rounded-full bg-primary/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
                      Student
                    </span>
                  </div>
                  <div className="grid gap-3 md:grid-cols-3">
                    {["Student", "Instructor", "Admin"].map((role) => (
                      <div
                        key={role}
                        className="rounded-2xl border border-primary/30 bg-primary/10 px-4 py-3 text-sm text-foreground"
                      >
                        {role}
                      </div>
                    ))}
                  </div>
                </div>
              </DevicePreview>
              <DevicePreview title="Login" variant="mobile" description="One-tap authentication">
                <div className="space-y-3 text-sm text-muted-foreground">
                  <div className="rounded-2xl border border-border/40 bg-background/60 px-4 py-3 text-foreground">
                    Student role selected
                  </div>
                  <div className="rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-center text-xs font-semibold uppercase tracking-[0.3em] text-primary">
                    Continue
                  </div>
                </div>
              </DevicePreview>
            </div>
          </section>

          <section className="space-y-10">
            <div className="flex flex-col gap-4">
              <span className="text-xs font-semibold uppercase tracking-[0.4em] text-primary">
                Multi-device fidelity
              </span>
              <h2 className="font-heading text-3xl font-semibold text-foreground">
                Seamless experiences from dashboard to certification
              </h2>
            </div>
            <div className="grid gap-10 lg:grid-cols-2">
              <div className="space-y-6">
                <DevicePreview title="Dashboard" description="Performance overview" variant="desktop">
                  <div className="space-y-4">
                    <div className="grid gap-3 md:grid-cols-3">
                      {["Total Students", "Active Exams", "Certificates"].map((label) => (
                        <div
                          key={label}
                          className="rounded-2xl border border-border/40 bg-background/70 p-4"
                        >
                          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                            {label}
                          </p>
                          <p className="mt-2 font-heading text-xl text-foreground">
                            {label === "Total Students" ? "12,384" : label === "Active Exams" ? "48" : "3,942"}
                          </p>
                        </div>
                      ))}
                    </div>
                    <div className="rounded-2xl border border-primary/30 bg-primary/10 p-4">
                      <p className="text-xs uppercase tracking-[0.3em] text-primary">
                        Performance overview
                      </p>
                      <p className="mt-2 text-sm text-muted-foreground">
                        91% average mastery · 6 active sessions
                      </p>
                    </div>
                  </div>
                </DevicePreview>
                <DevicePreview title="Dashboard" variant="mobile" description="Quick metrics">
                  <div className="space-y-3 text-sm text-muted-foreground">
                    <div className="rounded-2xl border border-border/40 bg-background/60 px-4 py-3">
                      <p className="font-heading text-lg text-foreground">91%</p>
                      <p>Performance index</p>
                    </div>
                    <div className="rounded-2xl border border-border/40 bg-background/60 px-4 py-3">
                      <p className="font-heading text-lg text-foreground">48</p>
                      <p>Active exams</p>
                    </div>
                  </div>
                </DevicePreview>
              </div>
              <div className="space-y-6">
                <DevicePreview title="Exam interface" description="Timed session view" variant="desktop">
                  <div className="space-y-4 text-sm text-muted-foreground">
                    <div className="flex items-center justify-between rounded-2xl border border-border/40 bg-background/70 px-4 py-2 text-xs uppercase tracking-[0.3em] text-primary">
                      Physics 101 · 34:16 remaining
                    </div>
                    <p className="text-foreground">
                      Which principle explains the induced current in a conducting loop
                      when exposed to a changing magnetic field?
                    </p>
                    <div className="space-y-2">
                      {["Electromagnetic induction", "Bernoulli’s principle", "Faraday’s law", "Coulomb’s law"].map(
                        (option) => (
                          <div
                            key={option}
                            className="rounded-2xl border border-border/40 bg-background/60 px-4 py-3"
                          >
                            {option}
                          </div>
                        ),
                      )}
                    </div>
                  </div>
                </DevicePreview>
                <DevicePreview title="Exam interface" variant="mobile" description="Navigation & autosave">
                  <div className="space-y-3 text-sm text-muted-foreground">
                    <div className="rounded-2xl border border-border/40 bg-background/70 px-4 py-3 text-xs uppercase tracking-[0.3em] text-primary">
                      Autosaved 42s ago
                    </div>
                    <div className="grid grid-cols-5 gap-2">
                      {Array.from({ length: 10 }, (_, i) => i + 1).map((item) => (
                        <div
                          key={item}
                          className={`flex h-10 items-center justify-center rounded-2xl border text-xs font-semibold ${item === 4 ? "border-primary bg-primary/15 text-primary" : "border-border/40 bg-background/60"}`}
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </DevicePreview>
              </div>
            </div>
          </section>

          <section className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="space-y-6">
              <DevicePreview title="Results" description="Distinction snapshot" variant="desktop">
                <div className="space-y-4">
                  <div className="flex items-center justify-between rounded-2xl border border-border/40 bg-background/70 px-4 py-3">
                    <span className="font-heading text-3xl text-foreground">92%</span>
                    <span className="rounded-full bg-primary/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
                      Distinction
                    </span>
                  </div>
                  <div className="grid gap-3 text-sm text-muted-foreground md:grid-cols-2">
                    {["Candidate", "Programme", "Exam window", "Verification"].map((item) => (
                      <div
                        key={item}
                        className="rounded-2xl border border-border/40 bg-background/60 px-4 py-3"
                      >
                        <p className="font-heading text-base text-foreground">{item === "Candidate" ? "Odera Amaobi" : item === "Programme" ? "Physics 101" : item === "Exam window" ? "02 Oct · 09:00" : "Secure"}</p>
                        <p className="text-xs text-muted-foreground">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </DevicePreview>
              <DevicePreview title="Results" variant="mobile" description="Certificate QR">
                <div className="space-y-3 text-sm text-muted-foreground">
                  <div className="flex h-32 items-center justify-center rounded-3xl border border-dashed border-primary/40 bg-background/70">
                    QR Preview
                  </div>
                  <div className="rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-center text-xs font-semibold uppercase tracking-[0.3em] text-primary">
                    Download certificate
                  </div>
                </div>
              </DevicePreview>
            </div>
            <div className="space-y-6">
              <DevicePreview title="Analytics" description="Trend intelligence" variant="desktop">
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span>Mastery trajectory</span>
                    <span className="rounded-full bg-primary/15 px-3 py-1 text-xs uppercase tracking-[0.3em] text-primary">
                      Export
                    </span>
                  </div>
                  <div className="grid gap-3 md:grid-cols-2">
                    {["Top performers 97%", "Academy average 82%", "Pass rate 88%", "Distinction 34%"].map((label) => (
                      <div
                        key={label}
                        className="rounded-2xl border border-border/40 bg-background/60 px-4 py-3 text-xs text-muted-foreground"
                      >
                        {label}
                      </div>
                    ))}
                  </div>
                </div>
              </DevicePreview>
              <DevicePreview title="AI Builder" variant="mobile" description="AI drafting">
                <div className="space-y-3 text-sm text-muted-foreground">
                  <div className="rounded-2xl border border-border/40 bg-background/70 px-4 py-3">
                    Upload Course Material
                  </div>
                  <div className="rounded-2xl border border-border/40 bg-background/70 px-4 py-3">
                    AI Generated Question · Approve
                  </div>
                </div>
              </DevicePreview>
            </div>
          </section>

          <section className="rounded-3xl border border-primary/30 bg-primary/10 p-10 shadow-glow">
            <div className="grid gap-6 md:grid-cols-[1.2fr_0.8fr]">
              <div className="space-y-4">
                <span className="text-xs font-semibold uppercase tracking-[0.4em] text-primary">
                  Precision timing
                </span>
                <h3 className="font-heading text-3xl font-semibold text-foreground">
                  Secure countdown, adaptive autosave, and instructor oversight
                </h3>
                <p className="text-sm text-muted-foreground">
                  Odera Academy synchronizes timings across devices, ensuring every
                  learner experiences latency-free examinations powered by neural
                  proctoring and real-time autosave indicators.
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-border/40 bg-background/80 px-4 py-5 text-sm text-muted-foreground">
                  <Timer className="mb-3 h-5 w-5 text-primary" />
                  Countdown syncs instantly with analytics.
                </div>
                <div className="rounded-2xl border border-border/40 bg-background/80 px-4 py-5 text-sm text-muted-foreground">
                  <LineChart className="mb-3 h-5 w-5 text-primary" />
                  Performance data streams to the executive dashboard.
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Index;
