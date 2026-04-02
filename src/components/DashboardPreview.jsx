
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
LineChart,
Line,
XAxis,
Tooltip,
ResponsiveContainer,
} from "recharts";

const initialData = [
{ name: "Mon", users: 400 },
{ name: "Tue", users: 700 },
{ name: "Wed", users: 500 },
{ name: "Thu", users: 900 },
{ name: "Fri", users: 1200 },
{ name: "Sat", users: 800 },
];

const DashboardPreview = () => {
const [data, setData] = useState(initialData);
const [users, setUsers] = useState(12500);
const [growth, setGrowth] = useState(24);

useEffect(() => {
const interval = setInterval(() => {
const change = Math.floor(Math.random() * 200 - 100);


  setUsers((prev) => Math.max(1000, prev + change));

  const growthChange = (Math.random() * 4 - 2).toFixed(1);
  setGrowth((prev) =>
    Math.max(0, (parseFloat(prev) + parseFloat(growthChange)).toFixed(1))
  );

  setData((prev) =>
    prev.map((item, i) =>
      i === prev.length - 1
        ? { ...item, users: Math.max(200, item.users + change) }
        : item
    )
  );
}, 2500);

return () => clearInterval(interval);


}, []);

return (
<motion.div
initial={{ opacity: 0, y: 40 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.8 }}
className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl overflow-hidden"
>


  {/* Soft Glow Background */}
  <div className="absolute -top-20 -left-20 w-60 h-60 bg-purple-500/20 blur-3xl rounded-full" />

  {/* Header */}
  <div className="flex justify-between items-center mb-4">
    <h3 className="text-xl font-semibold">Growth Analytics</h3>

    {/* Live Indicator */}
    <div className="flex items-center gap-2 text-green-400 text-sm">
      <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
      Live
    </div>
  </div>

  {/* Stats */}
  <div className="grid grid-cols-2 gap-4 mb-6">

    {/* Active Users */}
    <motion.div
      key={users}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white/10 p-4 rounded-xl"
    >
      <p className="text-sm text-white/60">Active Users</p>
      <h4 className="text-xl font-bold">
        {(users / 1000).toFixed(1)}K
      </h4>
    </motion.div>

    {/* Growth */}
    <motion.div
      key={growth}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white/10 p-4 rounded-xl"
    >
      <p className="text-sm text-white/60">Growth Rate</p>
      <h4
        className={`text-xl font-bold ${
          growth >= 0 ? "text-green-400" : "text-red-400"
        }`}
      >
        {growth >= 0 ? "+" : ""}
        {growth}%
      </h4>
    </motion.div>

  </div>

  {/* Chart */}
  <div className="h-40">
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={data}>
        <XAxis dataKey="name" stroke="#aaa" />
        <Tooltip
          contentStyle={{
            backgroundColor: "#020617",
            border: "none",
          }}
        />
        <Line
          type="monotone"
          dataKey="users"
          stroke="#8B5CF6"
          strokeWidth={3}
          dot={false}
          isAnimationActive={true}
          animationDuration={800}
        />
      </LineChart>
    </ResponsiveContainer>
  </div>

  {/* Footer */}
  <div className="mt-6 text-sm text-white/70 space-y-1">
    <p>🚀 Live user activity</p>
    <p>📈 Smooth real-time analytics</p>
  </div>

</motion.div>


);
};

export default DashboardPreview;
