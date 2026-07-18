import { Home, User, BookOpen, Table, ClipboardCheck, FileText, Coins, CreditCard } from "lucide-react";
import { NavLink } from "react-router-dom";

const StudentSidebar = () => {

    return (
        <aside className="w-64 bg-blue-900 text-white">

            <div className="p-5 font-bold">
                Student Portal
            </div>
            <nav className="space-y-2 p-3">
                <NavLink
                    to="/student"
                    className="flex items-center gap-3 p-3 rounded hover:bg-blue-800"
                >
                    <Home size={18} />
                    Dashboard
                </NavLink>

                <NavLink
                    to="/student/attendance"
                    className="flex items-center gap-3 p-3 rounded hover:bg-blue-800"
                >
                    <User size={18} />
                    Attendance
                </NavLink>
                <NavLink
                    to="/student/timetable"
                    className="flex items-center gap-3 p-3 rounded hover:bg-blue-800"
                >
                    <Table size={18} />
                    Timetable
                </NavLink>

                <NavLink
                    to="/student/assessment"
                    className="flex items-center gap-3 p-3 rounded hover:bg-blue-800"
                >
                    <ClipboardCheck size={18} />
                    Assessment
                </NavLink>
                <NavLink
                    to="/student/results"
                    className="flex items-center gap-3 p-3 rounded hover:bg-blue-800"
                >
                    <BookOpen size={18} />
                    Results
                </NavLink>
                <NavLink
                    to="/student/reportcard"
                    className="flex items-center gap-3 p-3 rounded hover:bg-blue-800"
                >
                    <FileText size={18} />
                    Reportcard
                </NavLink>
                <NavLink
                    to="/student/fees"
                    className="flex items-center gap-3 p-3 rounded hover:bg-blue-800"
                >
                    <Coins size={18} />
                    Fees
                </NavLink>

                <NavLink
                    to="/student/payments"
                    className="flex items-center gap-3 p-3 rounded hover:bg-blue-800"
                >
                    <CreditCard size={18} />
                    Payments
                </NavLink>
            </nav>
        </aside>
    );
};

export default StudentSidebar;