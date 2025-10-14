import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="relative flex min-h-screen items-center justify-center bg-background text-foreground">
      <div className="absolute inset-0 -z-10 bg-mesh-dark" aria-hidden />
      <div className="absolute inset-0 -z-10 bg-grid-radial" aria-hidden />
      <div className="rounded-3xl border border-border/50 bg-card/80 p-12 text-center shadow-card backdrop-blur">
        <span className="text-xs font-semibold uppercase tracking-[0.4em] text-primary">
          Offline route
        </span>
        <h1 className="mt-4 font-heading text-4xl font-semibold text-foreground">
          404 — Orbit not mapped
        </h1>
        <p className="mt-3 max-w-md text-sm text-muted-foreground">
          The path you are looking for hasn’t been crafted yet. Return to the
          Odera Academy experience or prompt Fusion to design this screen.
        </p>
        <Link
          to="/"
          className="mt-6 inline-flex rounded-full border border-primary/40 bg-primary/10 px-6 py-3 text-sm font-semibold uppercase tracking-[0.35em] text-primary"
        >
          Back to home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
