import { useEffect, useState } from "react";
import { motion as Motion } from "framer-motion";
import {
  Area,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
} from "recharts";
import { Activity, TrendingUp } from "lucide-react";

const initialData = [
  { name: "Day 1", users: 12 },
  { name: "Day 2", users: 18 },
  { name: "Day 3", users: 25 },
  { name: "Day 4", users: 32 },
  { name: "Day 5", users: 45 },
  { name: "Today", users: 58 },
];

const DashboardPreview = () => {
  const [data, setData] = useState(initialData);
  const [users, setUsers] = useState(58);
  const [growth, setGrowth] = useState(12.5);

  useEffect(() => {
    const interval = setInterval(() => {
      const change = Math.floor(Math.random() * 6 + 2);

      setUsers((prev) => prev + change);
      setGrowth((prev) => (parseFloat(prev) + Math.random() * 1.5).toFixed(1));
      setData((prev) => {
        const last = prev[prev.length - 1];
        return [...prev.slice(1), { name: "Now", users: last.users + change }];
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Motion.div
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.65 }}
      className="light-card rounded-lg p-5"
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#e05f2f]">
            Live Growth
          </p>
          <h3 className="mt-2 text-2xl font-semibold">Lead dashboard</h3>
        </div>
        <span className="inline-flex items-center gap-2 rounded-lg border border-[#16837a]/20 bg-[#16837a]/10 px-3 py-2 text-xs font-semibold text-[#16837a]">
          <Activity size={15} />
          Live
        </span>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-3">
        <div className="rounded-lg border border-[#101312]/10 bg-[#f7f3ea] p-4">
          <p className="text-xs text-[#101312]/50">Active users</p>
          <h4 className="mt-2 text-2xl font-semibold">{users}</h4>
        </div>
        <div className="rounded-lg border border-[#101312]/10 bg-[#f7f3ea] p-4">
          <p className="text-xs text-[#101312]/50">Growth rate</p>
          <h4 className="mt-2 flex items-center gap-2 text-2xl font-semibold text-[#16837a]">
            <TrendingUp size={18} /> +{growth}%
          </h4>
        </div>
      </div>

      <div className="mt-6 h-44">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <defs>
              <linearGradient id="growthGradient" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#16837a" />
                <stop offset="100%" stopColor="#e05f2f" />
              </linearGradient>
            </defs>
            <XAxis dataKey="name" stroke="#6f746f" tickLine={false} axisLine={false} />
            <Tooltip
              contentStyle={{
                backgroundColor: "#101312",
                border: "1px solid rgba(255,255,255,0.12)",
                borderRadius: "8px",
                color: "#fff",
              }}
            />
            <Area
              type="monotone"
              dataKey="users"
              fill="url(#growthGradient)"
              fillOpacity={0.12}
            />
            <Line
              type="monotone"
              dataKey="users"
              stroke="url(#growthGradient)"
              strokeWidth={3}
              dot={false}
              animationDuration={700}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Motion.div>
  );
};

export default DashboardPreview;
