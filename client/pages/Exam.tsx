import { useState } from "react";
import { AlertCircle, Flag, Save } from "lucide-react";

import { PlatformShell } from "@/components/layout/PlatformShell";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const questionNav = Array.from({ length: 10 }, (_, index) => index + 1);

const options = [
  {
    value: "A",
    label: "A. Electromagnetic induction",
  },
  {
    value: "B",
    label: "B. Bernoulli’s principle",
  },
  {
    value: "C",
    label: "C. Faraday’s law of induction",
  },
  {
    value: "D",
    label: "D. Coulomb’s law",
  },
];

const Exam = () => {
  const [selectedOption, setSelectedOption] = useState<string | null>("B");
  const [flagged, setFlagged] = useState<boolean>(false);

  return (
    <PlatformShell
      title="Physics 101"
      description="Question 4 of 60 · Adaptive mode"
      action={
        <Button className="rounded-full bg-primary px-6 text-xs font-semibold uppercase tracking-[0.35em] text-primary-foreground">
          34:16
        </Button>
      }
    >
      <div className="grid gap-6 xl:grid-cols-[1.25fr_0.75fr]">
        <div className="rounded-3xl border border-border/50 bg-card/70 p-6 shadow-card">
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span>Odera Standardized CBT</span>
            <span className="flex items-center gap-2 text-primary">
              <AlertCircle className="h-3.5 w-3.5" />
              Anti-malpractice shield active
            </span>
          </div>
          <div className="mt-6 space-y-4">
            <div className="space-y-3">
              <h2 className="font-heading text-lg text-foreground">
                Which fundamental principle best explains the generation of induced
                current in a conducting loop when exposed to a changing magnetic
                field?
              </h2>
              <p className="text-sm text-muted-foreground">
                Select the most accurate option. Reference: Odera Physics
                Handbook Chapter 6.
              </p>
            </div>
            <div className="space-y-3">
              {options.map((option) => {
                const isSelected = selectedOption === option.value;
                return (
                  <button
                    key={option.value}
                    onClick={() => setSelectedOption(option.value)}
                    className={cn(
                      "w-full rounded-2xl border px-4 py-4 text-left transition",
                      isSelected
                        ? "border-primary bg-primary/15 text-foreground shadow-glow"
                        : "border-border/40 bg-background/60 text-muted-foreground hover:border-primary/25 hover:text-foreground",
                    )}
                  >
                    <span className="block text-sm font-medium">{option.label}</span>
                    <span className="mt-1 block text-xs text-muted-foreground">
                      Confidence: {isSelected ? "High" : "Tap to evaluate"}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button
              variant="outline"
              className="rounded-full border-primary/40 bg-primary/15 text-primary hover:bg-primary/20"
            >
              Save & Next
            </Button>
            <Button
              variant={flagged ? "default" : "outline"}
              className={cn(
                "rounded-full",
                flagged
                  ? "bg-primary text-primary-foreground hover:bg-primary/90"
                  : "border border-primary/40 bg-primary/15 text-primary hover:bg-primary/20",
              )}
              onClick={() => setFlagged((prev) => !prev)}
            >
              <Flag className="mr-2 h-4 w-4" />
              {flagged ? "Flagged" : "Flag for review"}
            </Button>
          </div>
        </div>
        <aside className="flex flex-col gap-6">
          <div className="rounded-3xl border border-border/50 bg-card/70 p-6 shadow-card">
            <div className="flex items-center justify-between">
              <h2 className="font-heading text-base font-semibold text-foreground">
                Question navigator
              </h2>
              <span className="text-xs text-muted-foreground">1 – 10</span>
            </div>
            <div className="mt-5 grid grid-cols-5 gap-3">
              {questionNav.map((item) => (
                <button
                  key={item}
                  className={cn(
                    "aspect-square rounded-2xl border text-sm font-semibold transition",
                    item === 4
                      ? "border-primary bg-primary/20 text-primary"
                      : item < 4
                        ? "border-border/40 bg-background/70 text-foreground"
                        : "border-border/30 bg-background/50 text-muted-foreground",
                  )}
                >
                  {item}
                </button>
              ))}
            </div>
            <div className="mt-5 flex items-center gap-3 text-xs text-muted-foreground">
              <span className="flex items-center gap-2">
                <span className="h-2.5 w-6 rounded-full bg-primary/40" /> Answered
              </span>
              <span className="flex items-center gap-2">
                <span className="h-2.5 w-6 rounded-full bg-border" /> Pending
              </span>
            </div>
          </div>
          <div className="rounded-3xl border border-primary/30 bg-primary/10 p-6 shadow-card">
            <div className="flex items-center justify-between text-sm text-muted-foreground">
              <span>Progress</span>
              <span>65% complete</span>
            </div>
            <div className="mt-3 h-3 rounded-full bg-background/60">
              <div className="h-3 w-[65%] rounded-full bg-primary" />
            </div>
            <Button className="mt-6 w-full rounded-full bg-primary text-primary-foreground hover:bg-primary/90">
              Submit assessment
            </Button>
          </div>
        </aside>
      </div>
      <div className="flex items-center justify-end text-xs text-muted-foreground">
        <span className="flex items-center gap-2 rounded-full border border-border/40 bg-background/60 px-4 py-2">
          <Save className="h-3.5 w-3.5 text-primary" />
          Autosaved 42 seconds ago
        </span>
      </div>
    </PlatformShell>
  );
};

export default Exam;
