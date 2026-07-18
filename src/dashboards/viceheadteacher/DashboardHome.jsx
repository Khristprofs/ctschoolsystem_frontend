import { useEffect, useState } from "react";
import { fetchDashboardStats } from "../../services/viceHeadteacherDashboardService";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const DashboardHome = () => {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadStats = async () => {
      try {
        const res = await fetchDashboardStats();
        setStats(res.data);
      } catch (error) {
        console.error("Failed to load dashboard stats");
      } finally {
        setLoading(false);
      }
    };

    loadStats();
  }, []);

  if (loading) {
    return <p className="text-gray-500">Loading dashboard...</p>;
  }

  const cards = [
    { label: "Students", value: stats.students },
    { label: "Classes", value: stats.classes },
    { label: "Results", value: stats.results },
    { label: "Attendances", value: stats.attendences },
    { label: "Report Cards", value: stats.reportCards },
  ];

  const chartData = cards.map((item) => ({
    name: item.label,
    value: item.value,
  }));

  return (
    <div className="space-y-10">
      <h1 className="text-2xl font-bold text-gray-800">Overview</h1>

      {/* STATS CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card) => (
          <div
            key={card.label}
            className="bg-white py-2 px-4 rounded-xl shadow hover:shadow-md transition"
          >
            <p className="text-sm text-gray-500">{card.label}</p>
            <h3 className="text-3xl font-bold text-blue-600">
              {card.value}
            </h3>
          </div>
        ))}
      </div>

      {/* CHART */}
      <div className="bg-white p-6 rounded-xl shadow">
        <h2 className="text-lg font-semibold text-gray-700 mb-4">
          School Data Overview
        </h2>

        <div className="h-72">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#2563eb" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;