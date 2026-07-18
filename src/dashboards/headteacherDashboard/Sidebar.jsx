import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  GraduationCap,
  Calendar,
  BookOpen,
  FileText,
  Bell,
  CreditCard
} from "lucide-react";

const menu = [
  { name: "Dashboard", icon: LayoutDashboard, path: "/principal-dashboard" },
  { name: "Students", icon: GraduationCap, path: "/principal-dashboard/students" },
  { name: "Teachers", icon: Users, path: "/principal-dashboard/teachers" },
  { name: "Academics", icon: BookOpen, path: "/principal-dashboard/academics" },
  { name: "Assessment", icon: Calendar, path: "/principal-dashboard/assessments" },
  { name: "Results", icon: FileText, path: "/principal-dashboard/results" },
  { name: "Fees", icon: CreditCard, path: "/principal-dashboard/fees" },
  { name: "Announcements", icon: Bell, path: "/principal-dashboard/announcements" },
];

const Sidebar = () => {
  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-white shadow-lg flex flex-col">
      <div className="p-5 font-bold text-xl text-blue-600 border-b">
        Christ The Great
      </div>

      <nav className="flex-1 overflow-y-auto px-4 py-4 space-y-1">
        {menu.map(({ name, icon: Icon, path }) => (
          <NavLink
            key={name}
            to={path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-lg transition
              ${
                isActive
                  ? "bg-blue-100 text-blue-600"
                  : "text-gray-700 hover:bg-gray-100"
              }`
            }
          >
            <Icon size={18} />
            {name}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;