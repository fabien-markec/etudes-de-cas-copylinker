"use client";

import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const data = [
  { m: "Mai 25", v: 500 },
  { m: "Juin", v: 720 },
  { m: "Juil", v: 980 },
  { m: "Août", v: 1280 },
  { m: "Sept", v: 1620 },
  { m: "Oct", v: 2000 },
  { m: "Nov", v: 2380 },
  { m: "Déc", v: 2760 },
  { m: "Janv 26", v: 3100 },
  { m: "Fév", v: 3420 },
  { m: "Mars", v: 3680 },
  { m: "Avril", v: 3860 },
  { m: "Mai 26", v: 4000 },
];

export function MichaelGrowthChart() {
  return (
    <div className="h-[360px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={{ top: 16, right: 16, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="gMichael" x1="0" y1="0" x2="0" y2="1">
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
            fill="url(#gMichael)"
            isAnimationActive
            animationDuration={1800}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}