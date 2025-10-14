import { useMemo } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Menu,
  LayoutDashboard,
  GraduationCap,
  FileText,
  LineChart,
  Sparkles,
  FileSpreadsheet,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const navigation = [
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    label: "Courses",
    href: "/courses",
    icon: GraduationCap,
  },
  {
    label: "Exams",
    href: "/exam",
    icon: FileText,
  },
  {
    label: "Certificates",
    href: "/results",
    icon: FileSpreadsheet,
  },
  {
    label: "Analytics",
    href: "/analytics",
    icon: LineChart,
  },
  {
    label: "AI Builder",
    href: "/ai-builder",
    icon: Sparkles,
  },
];

interface PlatformShellProps {
  title: string;
  description?: string;
  action?: React.ReactNode;
  children: React.ReactNode;
}

export const PlatformShell = ({
  title,
  description,
  action,
  children,
}: PlatformShellProps) => {
  const location = useLocation();

  const activePath = useMemo(() => {
    if (location.pathname === "/results") {
      return "/results";
    }

    const match = navigation.find((item) =>
      location.pathname.startsWith(item.href),
    );

    return match?.href ?? location.pathname;
  }, [location.pathname]);

  const navList = (
    <nav className="mt-10 flex flex-col gap-2 text-sm font-medium">
      {navigation.map(({ label, href, icon: Icon }) => {
        const isActive = activePath === href;
        return (
          <Link
            key={href}
            to={href}
            className={cn(
              "group flex items-center gap-3 rounded-2xl px-4 py-3 transition",
              "border border-transparent/10",
              isActive
                ? "bg-primary/15 text-primary shadow-glow border-primary/30"
                : "text-muted-foreground hover:text-foreground hover:border-primary/20 hover:bg-accent/50",
            )}
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-black/30 ring-1 ring-inset ring-black/30 transition group-hover:ring-primary/40">
              <Icon className="h-4 w-4" />
            </span>
            {label}
          </Link>
        );
      })}
    </nav>
  );

  const Logo = (
    <Link to="/" className="inline-flex items-center gap-2">
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/20 text-primary shadow-inner">
        <span className="text-xl font-bold">OA</span>
      </div>
      <div className="flex flex-col">
        <span className="text-sm uppercase tracking-[0.28em] text-muted-foreground">
          Odera Academy
        </span>
        <span className="font-heading text-xl font-semibold text-foreground">
          CBT Platform
        </span>
      </div>
    </Link>
  );

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="absolute inset-0 -z-10 bg-mesh-dark" aria-hidden />
      <div className="mx-auto flex min-h-screen w-full max-w-[1400px] flex-col px-4 pb-10 pt-8 sm:px-8">
        <header className="mb-8 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="lg:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-xl border-border/50 bg-accent/70 backdrop-blur"
                  >
                    <Menu className="h-4 w-4" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-[280px] bg-background/95">
                  <SheetHeader>
                    <SheetTitle className="flex items-center gap-2 text-left text-base">
                      <span className="text-primary">Odera Academy</span>
                    </SheetTitle>
                  </SheetHeader>
                  <div className="mt-6 space-y-6">
                    {Logo}
                    {navList}
                  </div>
                </SheetContent>
              </Sheet>
            </div>
            <div className="hidden lg:block">{Logo}</div>
          </div>
          <Button asChild className="hidden rounded-full px-6 text-sm font-semibold lg:inline-flex">
            <Link to="/login">Launch Portal</Link>
          </Button>
        </header>
        <div className="flex flex-1 gap-6">
          <aside className="hidden w-[260px] shrink-0 flex-col rounded-3xl border border-border/40 bg-accent/50 p-6 backdrop-blur lg:flex">
            <div className="flex flex-col gap-8">
              {Logo}
              {navList}
            </div>
          </aside>
          <main className="flex-1">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-4 rounded-3xl border border-border/50 bg-card/60 p-6 shadow-card backdrop-blur">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h1 className="text-2xl font-semibold text-foreground sm:text-3xl">
                      {title}
                    </h1>
                    {description ? (
                      <p className="text-sm text-muted-foreground sm:text-base">
                        {description}
                      </p>
                    ) : null}
                  </div>
                  {action}
                </div>
              </div>
              <section className="space-y-6">{children}</section>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};
