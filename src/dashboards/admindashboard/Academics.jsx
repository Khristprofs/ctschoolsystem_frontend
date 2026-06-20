import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchAcademicAnalytics } from "../../services/academicService";

import {
  Layers,
  BookOpen,
  ClipboardList,
  PenTool,
  FileText,
  CheckSquare,
  CalendarDays
} from "lucide-react";

const Academics = () => {
  const navigate = useNavigate();

  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadAnalytics();
  }, []);

  const loadAnalytics = async () => {
    try {
      const data = await fetchAcademicAnalytics();
      setStats(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const cards = [
    {
      name: "Levels",
      value: stats?.levels || 0,
      icon: Layers,
      path: "/admin/academics/levels",
      color: "from-blue-500 to-blue-600"
    },
    {
      name: "Subjects",
      value: stats?.subjects || 0,
      icon: BookOpen,
      path: "/admin/academics/subjects",
      color: "from-green-500 to-green-600"
    },
    {
      name: "Tests",
      value: stats?.tests || 0,
      icon: ClipboardList,
      path: "/admin/academics/tests",
      color: "from-purple-500 to-purple-600"
    },
    {
      name: "Quizzes",
      value: stats?.quizzes || 0,
      icon: PenTool,
      path: "/admin/academics/quizzes",
      color: "from-yellow-500 to-yellow-600"
    },
    {
      name: "Exams",
      value: stats?.exams || 0,
      icon: FileText,
      path: "/admin/academics/exams",
      color: "from-red-500 to-red-600"
    },
    {
      name: "Assessment Items",
      value: stats?.assessmentItems || 0,
      icon: CheckSquare,
      path: "/admin/academics/assessment-items",
      color: "from-indigo-500 to-indigo-600"
    },
    {
      name: "Attendance",
      value: stats?.attendance || 0,
      icon: CalendarDays,
      path: "/admin/academics/attendance",
      color: "from-teal-500 to-teal-600"
    }
  ];

  if (loading) {
    return <div className="p-6">Loading academic data...</div>;
  }

  return (
    <div className="space-y-10">

      {/* HEADER */}

      <div>
        <h1 className="text-2xl font-bold text-gray-800">
          Academic Management
        </h1>

        <p className="text-gray-500 text-sm">
          Manage subjects, assessments and attendance across the institution.
        </p>
      </div>

      {/* KPI CARDS */}

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

        {cards.map(card => {
          const Icon = card.icon;

          return (
            <div
              key={card.name}
              onClick={() => navigate(card.path)}
              className="
              group
              cursor-pointer
              bg-white
              rounded-xl
              p-6
              shadow-sm
              hover:shadow-xl
              transition-all
              duration-300
              hover:-translate-y-1
              hover:scale-[1.02]
              "
            >

              <div className="flex justify-between items-center">

                <div>

                  <p className="text-sm text-gray-500 group-hover:text-gray-600 transition">
                    {card.name}
                  </p>

                  <h2 className="text-3xl font-bold text-gray-800 mt-1">
                    {card.value}
                  </h2>

                </div>

                <div
                  className={`
                  bg-linear-to-r ${card.color}
                  p-3
                  rounded-lg
                  text-white
                  shadow-md
                  group-hover:scale-110
                  transition
                  `}
                >
                  <Icon size={22} />
                </div>

              </div>

              <p className="text-xs text-gray-400 mt-4 group-hover:text-gray-500">
                Click to manage {card.name.toLowerCase()}
              </p>

            </div>
          );
        })}

      </div>

      {/* ANALYTICS SECTION */}

      <div className="grid md:grid-cols-2 gap-6">

        <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition">

          <h3 className="font-semibold text-gray-700 mb-4">
            Assessment Distribution
          </h3>

          <div className="space-y-4 text-sm">

            <div className="flex justify-between">
              <span>Tests</span>
              <span className="font-semibold">{stats.tests}</span>
            </div>

            <div className="flex justify-between">
              <span>Quizzes</span>
              <span className="font-semibold">{stats.quizzes}</span>
            </div>

            <div className="flex justify-between">
              <span>Exams</span>
              <span className="font-semibold">{stats.exams}</span>
            </div>

          </div>

        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition">

          <h3 className="font-semibold text-gray-700 mb-4">
            Academic Overview
          </h3>

          <div className="space-y-4 text-sm">

            <div className="flex justify-between">
              <span>Total Subjects</span>
              <span className="font-semibold">{stats.subjects}</span>
            </div>

            <div className="flex justify-between">
              <span>Total Levels</span>
              <span className="font-semibold">{stats.levels}</span>
            </div>

            <div className="flex justify-between">
              <span>Attendance Records</span>
              <span className="font-semibold">{stats.attendance}</span>
            </div>

          </div>

        </div>

      </div>

      {/* QUICK ACTIONS */}

      <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition">

        <h3 className="font-semibold text-gray-700 mb-4">
          Quick Academic Actions
        </h3>

        <div className="flex flex-wrap gap-3">

          <button
            onClick={() => navigate("/admin/academics/subjects/create")}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition"
          >
            Add Subject
          </button>

          <button
            onClick={() => navigate("/admin/academics/tests/create")}
            className="bg-purple-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-purple-700 transition"
          >
            Create Test
          </button>

          <button
            onClick={() => navigate("/admin/academics/exams/create")}
            className="bg-red-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-red-700 transition"
          >
            Schedule Exam
          </button>

        </div>

      </div>

    </div>
  );
};

export default Academics;