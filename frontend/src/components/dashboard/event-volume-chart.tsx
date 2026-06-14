"use client";

import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { eventVolume } from "@/src/lib/mock-data";

export function EventVolumeChart() {
  return (
    <ResponsiveContainer width="100%" height={240}>
      <AreaChart
        data={eventVolume}
        margin={{ top: 8, right: 8, left: -16, bottom: 0 }}
      >
        <defs>
          <linearGradient id="eventsFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#2bd97c" stopOpacity={0.35} />
            <stop offset="100%" stopColor="#2bd97c" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="matchedFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#8a8f98" stopOpacity={0.25} />
            <stop offset="100%" stopColor="#8a8f98" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis
          dataKey="hour"
          stroke="#8a8f98"
          fontSize={11}
          tickLine={false}
          axisLine={false}
          interval={1}
        />
        <YAxis
          stroke="#8a8f98"
          fontSize={11}
          tickLine={false}
          axisLine={false}
          width={48}
        />
        <Tooltip
          cursor={{ stroke: "#212328" }}
          contentStyle={{
            background: "#131416",
            border: "1px solid #212328",
            borderRadius: 8,
            fontSize: 12,
          }}
          labelStyle={{ color: "#ededf0" }}
        />
        <Area
          type="monotone"
          dataKey="events"
          stroke="#2bd97c"
          strokeWidth={2}
          fill="url(#eventsFill)"
          name="Events"
        />
        <Area
          type="monotone"
          dataKey="matched"
          stroke="#8a8f98"
          strokeWidth={1.5}
          fill="url(#matchedFill)"
          name="Matched"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}
