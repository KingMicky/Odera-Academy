import { Upload, Sparkles, Edit3, CheckCircle2 } from "lucide-react";

import { PlatformShell } from "@/components/layout/PlatformShell";
import { Button } from "@/components/ui/button";

const generatedQuestions = [
  {
    title: "Explain the principle behind magnetic flux linkage.",
    difficulty: "Advanced",
  },
  {
    title: "Differentiate between electric potential and potential difference with examples.",
    difficulty: "Intermediate",
  },
  {
    title: "A coil of 500 turns is linked with a magnetic flux of 2 mWb. Calculate the induced emf when the flux is reversed in 0.01s.",
    difficulty: "Advanced",
  },
];

const AiBuilder = () => {
  return (
    <PlatformShell
      title="AI Question Builder"
      description="Transform course material into calibrated CBT questions in seconds."
      action={
        <Button className="rounded-full bg-primary px-6 text-sm font-semibold uppercase tracking-[0.35em] text-primary-foreground">
          <Sparkles className="mr-2 h-4 w-4" />
          Generate set
        </Button>
      }
    >
      <div className="grid gap-6 xl:grid-cols-[1.05fr_0.95fr]">
        <div className="space-y-6">
          <div className="rounded-3xl border border-border/50 bg-card/70 p-8 shadow-card">
            <h2 className="font-heading text-xl font-semibold text-foreground">
              Upload course material
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Drag and drop PDF, DOCX, or PowerPoint files. AI will map outcomes to
              blueprint requirements.
            </p>
            <label className="mt-6 flex cursor-pointer flex-col items-center justify-center gap-3 rounded-3xl border border-dashed border-primary/40 bg-background/60 p-10 text-center transition hover:border-primary/60">
              <Upload className="h-10 w-10 text-primary" />
              <span className="font-heading text-lg text-foreground">
                Upload Course Material
              </span>
              <span className="text-xs text-muted-foreground">
                Supports multi-file batching up to 200 MB
              </span>
              <input type="file" className="hidden" multiple />
            </label>
          </div>
          <div className="rounded-3xl border border-border/50 bg-card/70 p-8 shadow-card">
            <h3 className="font-heading text-lg font-semibold text-foreground">
              AI understanding
            </h3>
            <div className="mt-5 grid gap-4 text-sm text-muted-foreground md:grid-cols-2">
              <div className="rounded-2xl border border-border/40 bg-background/60 p-4">
                <p className="text-xs uppercase tracking-[0.3em] text-primary">
                  Key topics extracted
                </p>
                <p className="mt-2 text-foreground">Faraday’s law · Lenz’s law · Transformers</p>
              </div>
              <div className="rounded-2xl border border-border/40 bg-background/60 p-4">
                <p className="text-xs uppercase tracking-[0.3em] text-primary">
                  Suggested blueprint
                </p>
                <p className="mt-2 text-foreground">40% conceptual · 40% applied · 20% data response</p>
              </div>
            </div>
          </div>
        </div>
        <div className="rounded-3xl border border-border/50 bg-card/70 p-8 shadow-card">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="font-heading text-xl font-semibold text-foreground">
                Generated questions
              </h2>
              <p className="text-sm text-muted-foreground">
                Edit to personalize tone or approve instantly.
              </p>
            </div>
            <span className="rounded-full bg-primary/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
              3 ready
            </span>
          </div>
          <div className="mt-6 space-y-4">
            {generatedQuestions.map((question) => (
              <div
                key={question.title}
                className="rounded-2xl border border-border/40 bg-background/60 p-5"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-heading text-base text-foreground">
                      {question.title}
                    </p>
                    <p className="mt-2 text-xs uppercase tracking-[0.3em] text-primary">
                      {question.difficulty}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      className="rounded-full border-primary/40 bg-primary/10 text-primary hover:bg-primary/15"
                    >
                      <Edit3 className="mr-2 h-4 w-4" />
                      Edit
                    </Button>
                    <Button className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90">
                      <CheckCircle2 className="mr-2 h-4 w-4" />
                      Approve
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 rounded-2xl border border-primary/30 bg-primary/10 px-5 py-4 text-xs text-muted-foreground">
            AI calibrates difficulty across Bloom’s taxonomy. Adjust weights in
            advanced settings to customise pacing.
          </div>
        </div>
      </div>
    </PlatformShell>
  );
};

export default AiBuilder;
