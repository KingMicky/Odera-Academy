interface DevicePreviewProps {
  variant?: "desktop" | "mobile";
  title: string;
  description?: string;
  children: React.ReactNode;
}

export const DevicePreview = ({
  variant = "desktop",
  title,
  description,
  children,
}: DevicePreviewProps) => {
  const isMobile = variant === "mobile";

  return (
    <div
      className={[
        "relative flex flex-col gap-3 overflow-hidden border border-border/40 bg-card/70 p-6 shadow-card backdrop-blur",
        isMobile ? "rounded-[32px] w-full max-w-[320px]" : "rounded-[40px]",
      ].join(" ")}
    >
      <div className="flex items-center justify-between text-xs text-muted-foreground">
        <span className="font-medium tracking-[0.25em] uppercase">{title}</span>
        <span className="flex gap-1">
          <span className="h-2.5 w-2.5 rounded-full bg-primary/60" />
          <span className="h-2.5 w-2.5 rounded-full bg-primary/40" />
          <span className="h-2.5 w-2.5 rounded-full bg-primary/20" />
        </span>
      </div>
      {description ? (
        <p className="text-sm text-muted-foreground">{description}</p>
      ) : null}
      <div className={isMobile ? "rounded-[26px] bg-background/60 p-4" : "rounded-[32px] bg-background/70 p-6"}>
        <div className="inner-glow space-y-4 rounded-[24px] border border-border/60 bg-background/80 p-6">
          {children}
        </div>
      </div>
    </div>
  );
};
