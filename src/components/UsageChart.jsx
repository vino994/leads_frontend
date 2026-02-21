import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid
} from "recharts";

function UsageChart() {
  const data = [
    { month: "Jan", leads: 12 },
    { month: "Feb", leads: 20 },
    { month: "Mar", leads: 18 },
    { month: "Apr", leads: 35 },
    { month: "May", leads: 22 },
    { month: "Jun", leads: 30 },
  ];

  return (
    <div className="bg-white/70 backdrop-blur-lg p-6 rounded-3xl shadow-xl">
      <h3 className="text-sm text-gray-500 mb-4">
        Monthly Usage Trend
      </h3>

      <ResponsiveContainer width="100%" height={220}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip
            contentStyle={{
              backgroundColor: "#111827",
              border: "none",
              borderRadius: "12px",
              color: "#fff"
            }}
          />
          <Line
            type="monotone"
            dataKey="leads"
            stroke="#6366f1"
            strokeWidth={3}
            dot={{ r: 5 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default UsageChart;