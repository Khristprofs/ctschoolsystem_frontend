import { Home, User, BookOpen, } from "lucide-react";
import { NavLink } from "react-router-dom";

const ParentSidebar = () => {

    return (
        <aside className="w-64 bg-blue-900 text-white">

            <div className="p-5 font-bold">
                Parent Portal
            </div>
            <nav className="space-y-2 p-3">
                <NavLink
                    to="/parent"
                    className="flex items-center gap-3 p-3 rounded hover:bg-blue-800"
                >
                    <Home size={18} />
                    Dashboard
                </NavLink>

                <NavLink
                    to="/parent/profile"
                    className="flex items-center gap-3 p-3 rounded hover:bg-blue-800"
                >
                    <User size={18} />
                    Profile
                </NavLink>
            </nav>
        </aside>
    );
};

export default ParentSidebar;