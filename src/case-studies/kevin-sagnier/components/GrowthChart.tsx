"use client";

import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const data = [
  { m: "Nov 25", v: 1909 },
  { m: "Déc", v: 2380 },
  { m: "Janv 26", v: 2860 },
  { m: "Fév", v: 3380 },
  { m: "Mars", v: 3870 },
  { m: "Avril", v: 4310 },
  { m: "Mai 26", v: 4685 },
];

export function GrowthChart() {
  return (
    <div className="h-[360px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={{ top: 16, right: 16, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="g" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="oklch(0.51 0.16 252)" stopOpacity={0.35} />
              <stop offset="100%" stopColor="oklch(0.51 0.16 252)" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="oklch(0.9 0.01 247)" vertical={false} />
          <XAxis dataKey="m" stroke="oklch(0.55 0.04 257)" fontSize={12} tickLine={false} axisLine={false} />
          <YAxis stroke="oklch(0.55 0.04 257)" fontSize={12} tickLine={false} axisLine={false} width={48} />
          <Tooltip
            contentStyle={{
              background: "oklch(0.18 0.04 265)",
              border: "none",
              borderRadius: 8,
              color: "white",
              fontSize: 13,
            }}
            labelStyle={{ color: "white" }}
            formatter={(v: number) => [v.toLocaleString("fr-FR") + " abonnés", ""]}
          />
          <Area
            type="monotone"
            dataKey="v"
            stroke="oklch(0.51 0.16 252)"
            strokeWidth={2.5}
            fill="url(#g)"
            isAnimationActive
            animationDuration={1800}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
