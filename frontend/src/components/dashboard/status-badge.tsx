import { cn } from "@/src/lib/utils";

type Tone = "success" | "pending" | "danger" | "muted";

const toneStyles: Record<Tone, string> = {
  success: "bg-primary/10 text-primary border-primary/20",
  pending: "bg-warning/10 text-warning border-warning/20",
  danger: "bg-destructive/10 text-destructive border-destructive/20",
  muted: "bg-secondary text-muted-foreground border-border",
};

const dotStyles: Record<Tone, string> = {
  success: "bg-primary",
  pending: "bg-warning",
  danger: "bg-destructive",
  muted: "bg-muted-foreground",
};

interface StatusBadgeProps {
  tone: Tone;
  label: string;
  pulse?: boolean;
}

export function StatusBadge({ tone, label, pulse }: StatusBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-2 py-0.5 text-xs font-medium capitalize",
        toneStyles[tone]
      )}
    >
      <span
        className={cn(
          "size-1.5 rounded-full",
          dotStyles[tone],
          pulse && "animate-pulse-dot"
        )}
      />
      {label}
    </span>
  );
}
