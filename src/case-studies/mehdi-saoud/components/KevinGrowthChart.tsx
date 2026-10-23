"use client";

import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const data = [
  { m: "Janv 24", v: 2500 },
  { m: "Fév", v: 3100 },
  { m: "Mars", v: 3800 },
  { m: "Avr", v: 4600 },
  { m: "Mai", v: 5400 },
  { m: "Juin", v: 6300 },
  { m: "Juil", v: 7200 },
  { m: "Août", v: 8100 },
  { m: "Sept", v: 9200 },
  { m: "Oct", v: 10200 },
  { m: "Nov", v: 11200 },
  { m: "Déc", v: 12000 },
];

export function KevinGrowthChart() {
  return (
    <div className="h-[360px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={{ top: 16, right: 16, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="gKevin" x1="0" y1="0" x2="0" y2="1">
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
            fill="url(#gKevin)"
            isAnimationActive
            animationDuration={1800}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
