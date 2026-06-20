import { useEffect, useState } from "react";
import { fetchAttendance, deleteAttendance } from "../../services/academicService";
import { Eye, Edit, Trash2, Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";

const AttendanceAdmin = () => {
    const [attendance, setAttendance] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    const loadAttendance = async () => {
        try {
            setLoading(true);
            const data = await fetchAttendance();
            setAttendance(data);
        } catch (err) {
            console.error("Failed to load attendance", err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        loadAttendance();
    }, []);

    const handleDelete = async (id) => {
        if (!window.confirm("Are you sure you want to delete this attendance?")) return;

        try {
            await deleteAttendance(id);
            loadAttendance();
        } catch (err) {
            console.error(err);
            alert("Failed to delete attendance");
        }
    };

    if (loading) {
        return <div className="text-center py-10">Loading attendance...</div>;
    }

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold text-gray-800">Attendance</h1>

                <button
                    onClick={() => navigate("/admin/academics/attendance/create")}
                    className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                >
                    <Plus size={18} />
                    Create Attendance
                </button>
            </div>

            <div className="bg-white shadow rounded-xl overflow-x-auto">
                <table className="w-full text-sm">
                    <thead className="bg-gray-100 text-gray-700 uppercase text-xs">
                        <tr>
                            <th className="px-6 py-4 text-left">Student Name</th>
                            <th className="px-6 py-4 text-left">Class</th>
                            <th className="px-6 py-4 text-left">Date</th>
                            <th className="px-6 py-4 text-left">Status</th>
                            <th className="px-6 py-4 text-left">Remarks</th>
                            <th className="px-6 py-4 text-left">Marked By</th>
                            <th className="px-6 py-4 text-center">Actions</th>
                        </tr>
                    </thead>

                    <tbody className="divide-y">
                        {attendance.map((attendant) => (
                            <tr key={attendant.id} className="hover:bg-gray-50">
                                <td className="px-6 py-4">{attendant.studentName}</td>
                                <td className="px-6 py-4">{attendant.className}</td>
                                <td className="px-6 py-4">{attendant.date}</td>
                                <td className="px-6 py-4">{attendant.status}</td>
                                <td className="px-6 py-4">{attendant.remarks}</td>
                                <td className="px-6 py-4">{attendant.markedByName}</td>

                                <td className="px-6 py-4">
                                    <div className="flex justify-center gap-3">

                                        {/* ✅ FIXED HERE */}
                                        <button
                                            onClick={() => navigate(`/admin/academics/attendance/${attendant.id}`)}
                                            className="text-blue-600 hover:text-blue-800"
                                        >
                                            <Eye size={18} />
                                        </button>

                                        <button
                                            onClick={() => navigate(`/admin/academics/attendance/edit/${attendant.id}`)}
                                            className="text-green-600 hover:text-green-800"
                                        >
                                            <Edit size={18} />
                                        </button>

                                        <button
                                            onClick={() => handleDelete(attendant.id)}
                                            className="text-red-600 hover:text-red-800"
                                        >
                                            <Trash2 size={18} />
                                        </button>

                                    </div>
                                </td>
                            </tr>
                        ))}

                        {attendance.length === 0 && (
                            <tr>
                                <td colSpan="7" className="text-center py-8 text-gray-500">
                                    No attendance found
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AttendanceAdmin;