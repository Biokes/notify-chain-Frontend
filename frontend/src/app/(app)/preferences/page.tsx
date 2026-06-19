"use client";

import { Topbar } from "@/src/components/dashboard/topbar";
import { Button } from "@/src/components/ui/button";
import { useAppStore } from "@/src/store";
import type { NotificationCategory } from "@/src/store/types";

const CATEGORIES: { key: NotificationCategory; label: string; description: string }[] = [
  { key: "defi", label: "DeFi", description: "Liquidations, swaps, lending, and yield events" },
  { key: "transfers", label: "Transfers", description: "Token transfer events above threshold" },
  { key: "governance", label: "Governance", description: "Proposals, votes, and DAO activity" },
  { key: "nft", label: "NFTs", description: "Sales, mints, and high-value settlements" },
  { key: "bridge", label: "Bridge", description: "Cross-chain deposit and withdrawal events" },
  { key: "custom", label: "Custom", description: "User-defined rules not in other categories" },
];

export default function PreferencesPage() {
  const notificationsEnabled = useAppStore((s) => s.notificationsEnabled);
  const soundEnabled = useAppStore((s) => s.soundEnabled);
  const categoryPreferences = useAppStore((s) => s.categoryPreferences);
  const toggleNotifications = useAppStore((s) => s.toggleNotifications);
  const toggleSound = useAppStore((s) => s.toggleSound);
  const setCategoryEnabled = useAppStore((s) => s.setCategoryEnabled);
  const resetPreferences = useAppStore((s) => s.resetPreferences);

  return (
    <>
      <Topbar
        title="Preferences"
        description="Customize which notifications you receive"
      />

      <div className="flex-1 space-y-6 p-4 md:p-6">
        {/* Global toggles */}
        <section className="rounded-xl border border-border bg-card p-5 space-y-4">
          <h2 className="text-sm font-semibold">Global settings</h2>

          <ToggleRow
            label="Notifications"
            description="Receive notifications for matched events"
            enabled={notificationsEnabled}
            onToggle={toggleNotifications}
          />
          <ToggleRow
            label="Sound alerts"
            description="Play a sound when a notification arrives"
            enabled={soundEnabled}
            onToggle={toggleSound}
          />
        </section>

        {/* Category preferences */}
        <section className="rounded-xl border border-border bg-card p-5 space-y-4">
          <div>
            <h2 className="text-sm font-semibold">Notification categories</h2>
            <p className="text-xs text-muted-foreground mt-0.5">
              Disabled categories are not delivered, even if notifications are on.
            </p>
          </div>

          {CATEGORIES.map(({ key, label, description }) => (
            <ToggleRow
              key={key}
              label={label}
              description={description}
              enabled={categoryPreferences[key]}
              onToggle={(val) => setCategoryEnabled(key, val)}
              disabled={!notificationsEnabled}
            />
          ))}
        </section>

        {/* Reset */}
        <div className="flex justify-end">
          <Button variant="outline" size="sm" onClick={resetPreferences}>
            Reset to defaults
          </Button>
        </div>
      </div>
    </>
  );
}

interface ToggleRowProps {
  label: string;
  description: string;
  enabled: boolean;
  onToggle: (val: boolean) => void;
  disabled?: boolean;
}

function ToggleRow({ label, description, enabled, onToggle, disabled }: ToggleRowProps) {
  return (
    <div className="flex items-center justify-between gap-4">
      <div className="min-w-0">
        <p className={`text-sm font-medium ${disabled ? "text-muted-foreground" : ""}`}>{label}</p>
        <p className="text-xs text-muted-foreground">{description}</p>
      </div>
      <button
        role="switch"
        aria-checked={enabled}
        disabled={disabled}
        onClick={() => onToggle(!enabled)}
        className={`relative inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-40 ${
          enabled ? "bg-primary" : "bg-input"
        }`}
      >
        <span
          className={`pointer-events-none block h-4 w-4 rounded-full bg-background shadow-lg transition-transform ${
            enabled ? "translate-x-4" : "translate-x-0"
          }`}
        />
      </button>
    </div>
  );
}
