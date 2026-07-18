import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  GraduationCap,
  Bell,
  CreditCard
} from "lucide-react";

const menu = [
  { name: "Dashboard", icon: LayoutDashboard, path: "/bursar" },
  { name: "Students", icon: GraduationCap, path: "/bursar/students" },
  { name: "Fees", icon: CreditCard, path: "/bursar/fees" },
  { name: "Payments", icon: Bell, path: "/bursar/payments" },
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