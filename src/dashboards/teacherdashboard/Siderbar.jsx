import { Home, User, BookOpen, } from "lucide-react";
import { NavLink } from "react-router-dom";

const TeacherSidebar = () => {

    return (
        <aside className="w-64 bg-blue-900 text-white">

            <div className="p-5 font-bold">
                Teacher Dashboard
            </div>
            <nav className="space-y-2 p-3">
                <NavLink
                    to="/teacher"
                    className="flex items-center gap-3 p-3 rounded hover:bg-blue-800"
                >
                    <Home size={18} />
                    Dashboard
                </NavLink>

                <NavLink
                    to="/teacher/profile"
                    className="flex items-center gap-3 p-3 rounded hover:bg-blue-800"
                >
                    <User size={18} />
                    Profile
                </NavLink>

                <NavLink
                    to="/teacher/subjects"
                    className="flex items-center gap-3 p-3 rounded hover:bg-blue-800"
                >
                    <BookOpen size={18} />
                    Subjects
                </NavLink>
            </nav>
        </aside>
    );
};

export default TeacherSidebar;