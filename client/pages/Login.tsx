import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";

const roles = [
  {
    label: "Student",
    description: "Access live exams, practice sets, and performance summaries.",
    href: "/dashboard",
  },
  {
    label: "Instructor",
    description: "Create, schedule, and monitor assessments with AI support.",
    href: "/ai-builder",
  },
  {
    label: "Admin",
    description: "Oversee academy-wide analytics, compliance, and credentialing.",
    href: "/analytics",
  },
];

const Login = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <div className="absolute inset-0 -z-10 bg-mesh-dark" aria-hidden />
      <div className="absolute inset-0 -z-10 bg-grid-radial" aria-hidden />
      <div className="mx-auto flex min-h-screen w-full max-w-6xl flex-col px-6 py-10">
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
                Computer-Based Testing
              </p>
            </div>
          </Link>
          <Button asChild variant="outline" className="rounded-full border-border/60 bg-background/60">
            <Link to="/">Back to Experience</Link>
          </Button>
        </header>
        <div className="mt-16 grid flex-1 gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="flex flex-col justify-center gap-10">
            <div className="space-y-6">
              <span className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.4em] text-primary">
                Premium Access
              </span>
              <h1 className="font-heading text-4xl font-semibold leading-tight text-foreground sm:text-5xl">
                Select your role
              </h1>
              <p className="max-w-xl text-lg text-muted-foreground">
                Tailored CBT workspaces for every stakeholder—students, instructors,
                and administrators—crafted for quick onboarding and intuitive flows.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {roles.map((role) => (
                <Button
                  key={role.label}
                  asChild
                  className="group h-auto flex-col items-start rounded-3xl bg-primary/10 px-6 py-6 text-left text-base text-foreground shadow-inner transition hover:bg-primary/20"
                >
                  <Link to={role.href}>
                    <span className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.35em] text-primary">
                      {role.label}
                    </span>
                    <span className="mt-4 text-sm text-muted-foreground">
                      {role.description}
                    </span>
                  </Link>
                </Button>
              ))}
            </div>
          </div>
          <div className="glass-panel relative flex flex-col justify-center gap-6 rounded-[40px] p-10 shadow-glow">
            <div className="absolute right-10 top-10 flex items-center gap-2 text-xs text-muted-foreground">
              <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
              Secure channel
            </div>
            <div className="space-y-3">
              <h2 className="font-heading text-2xl font-semibold text-foreground">
                Unified Identity
              </h2>
              <p className="text-sm text-muted-foreground">
                Odera Academy keeps sessions synced across devices with
                multi-factor verification and intelligent auto-save.
              </p>
            </div>
            <div className="rounded-3xl border border-border/40 bg-background/80 p-8">
              <div className="flex flex-col gap-4 text-sm text-muted-foreground">
                <div className="flex items-center justify-between">
                  <span>Browser fingerprint</span>
                  <span className="text-foreground">Verified</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Last login location</span>
                  <span className="text-foreground">Lagos, NG</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Session expiration</span>
                  <span className="text-foreground">45 minutes</span>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between rounded-2xl border border-primary/30 bg-primary/15 px-5 py-4 text-xs text-muted-foreground">
              <span>Encrypted with Odera Quantum Shield</span>
              <span className="font-semibold text-primary">Active</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
