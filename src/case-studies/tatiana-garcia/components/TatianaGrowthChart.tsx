"use client";

import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const data = [
  { m: "Janv 25", v: 1200 },
  { m: "Févr", v: 1650 },
  { m: "Mars", v: 2300 },
  { m: "Avr", v: 3100 },
  { m: "Mai", v: 3950 },
  { m: "Juin", v: 4800 },
  { m: "Juil", v: 5700 },
  { m: "Août", v: 6600 },
  { m: "Sept", v: 7500 },
  { m: "Oct 25", v: 8700 },
];

export function TatianaGrowthChart() {
  return (
    <div className="h-[360px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={{ top: 16, right: 16, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="gTatiana" x1="0" y1="0" x2="0" y2="1">
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
            fill="url(#gTatiana)"
            isAnimationActive
            animationDuration={1800}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
