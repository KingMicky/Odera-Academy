import { PlatformShell } from "@/components/layout/PlatformShell";
import { Button } from "@/components/ui/button";

const Courses = () => {
  return (
    <PlatformShell
      title="Courses overview"
      description="Curated coursework roadmap syncing exams, study plans, and instructor presence."
      action={
        <Button className="rounded-full bg-primary px-6 text-sm font-semibold uppercase tracking-[0.35em] text-primary-foreground">
          Coming soon
        </Button>
      }
    >
      <div className="rounded-3xl border border-border/50 bg-card/70 p-8 shadow-card">
        <p className="text-sm text-muted-foreground">
          This workspace will surface adaptive course maps, instructor-pathway
          orchestration, and cohort pacing analytics. Prompt Fusion to complete
          this page when you are ready to finalise the course library experience.
        </p>
      </div>
    </PlatformShell>
  );
};

export default Courses;
