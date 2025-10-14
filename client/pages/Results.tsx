import { Download, Link2 } from "lucide-react";

import { PlatformShell } from "@/components/layout/PlatformShell";
import { Button } from "@/components/ui/button";

const statisticRows = [
  { label: "Candidate", value: "Odera Amaobi" },
  { label: "Programme", value: "Physics 101" },
  { label: "Exam window", value: "02 Oct 2024 · 09:00 GMT" },
  { label: "Proctor status", value: "Verified" },
];

const Results = () => {
  return (
    <PlatformShell
      title="Exam Results"
      description="Secure credentialing snapshot with built-in verification."
      action={
        <Button className="rounded-full bg-primary px-6 text-sm font-semibold uppercase tracking-[0.35em] text-primary-foreground">
          <Download className="mr-2 h-4 w-4" />
          Download Certificate
        </Button>
      }
    >
      <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-3xl border border-primary/25 bg-primary/10 p-8 shadow-card">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h2 className="font-heading text-4xl font-semibold text-foreground">
                92%
              </h2>
              <p className="text-sm text-muted-foreground">Overall performance</p>
            </div>
            <div className="rounded-full bg-background/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
              Distinction
            </div>
          </div>
          <div className="mt-8 grid gap-3 text-sm text-muted-foreground">
            {statisticRows.map((row) => (
              <div
                key={row.label}
                className="flex items-center justify-between rounded-2xl border border-border/40 bg-background/60 px-4 py-3"
              >
                <span>{row.label}</span>
                <span className="text-foreground">{row.value}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-3xl border border-border/50 bg-card/70 p-8 shadow-card">
          <h2 className="font-heading text-xl font-semibold text-foreground">
            Certificate verification
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Scan to validate authenticity or access the credential on any device.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-6">
            <div className="flex h-48 w-48 items-center justify-center rounded-3xl border border-dashed border-primary/40 bg-background/70">
              <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                QR Preview
              </span>
            </div>
            <Button variant="outline" className="rounded-full border-primary/40 bg-primary/10 text-primary hover:bg-primary/15">
              <Link2 className="mr-2 h-4 w-4" />
              Copy verification link
            </Button>
          </div>
        </div>
      </div>
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-3xl border border-border/50 bg-card/70 p-6 shadow-card">
          <h3 className="font-heading text-lg font-semibold text-foreground">
            Competency breakdown
          </h3>
          <div className="mt-4 space-y-3">
            {["Mechanics", "Electricity", "Thermodynamics", "Modern Physics"].map(
              (item, index) => (
                <div key={item}>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span>{item}</span>
                    <span className="text-foreground">{88 - index * 4}%</span>
                  </div>
                  <div className="mt-2 h-2 rounded-full bg-background/60">
                    <div
                      className="h-2 rounded-full bg-primary"
                      style={{ width: `${88 - index * 4}%` }}
                    />
                  </div>
                </div>
              ),
            )}
          </div>
        </div>
        <div className="rounded-3xl border border-border/50 bg-card/70 p-6 shadow-card">
          <h3 className="font-heading text-lg font-semibold text-foreground">
            Recommendations
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="rounded-2xl border border-border/40 bg-background/60 px-4 py-3">
              Join instructor-led clinic on vector analysis next week.
            </li>
            <li className="rounded-2xl border border-border/40 bg-background/60 px-4 py-3">
              Attempt the adaptive mock for Electricity to secure 95%+.
            </li>
            <li className="rounded-2xl border border-border/40 bg-background/60 px-4 py-3">
              Share certificate with admissions via Odera secure link.
            </li>
          </ul>
        </div>
      </div>
    </PlatformShell>
  );
};

export default Results;
