import { Webhook, Mail, MessageCircle, Hash, type LucideIcon } from "lucide-react";
import type { ChannelType } from "@/src/lib/mock-data";

export const channelIcons: Record<ChannelType, LucideIcon> = {
  webhook: Webhook,
  email: Mail,
  telegram: MessageCircle,
  discord: Hash,
};

export function ChannelIcon({
  type,
  className,
}: {
  type: ChannelType;
  className?: string;
}) {
  const Icon = channelIcons[type];
  return <Icon className={className} />;
}
