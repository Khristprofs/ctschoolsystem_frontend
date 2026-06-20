import { useEffect, useState } from "react";
import { fetchStudents, deleteStudent } from "../../services/studentService";
import { Eye, Edit, Trash2, Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";

const StudentsAdmin = () => {
    const [students, setStudents] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    const loadStudents = async () => {
        try {
            setLoading(true);
            const data = await fetchStudents();
            setStudents(data);
        } catch (err) {
            console.error("Failed to load students", err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        loadStudents();
    }, []);

    const handleDelete = async (id) => {
        if (!window.confirm("Are you sure you want to delete this student?")) return;

        try {
            await deleteStudent(id);
            loadStudents();
        } catch (err) {
            console.error(err);
            alert("Failed to delete student");
        }
    };

    if (loading) {
        return <div className="text-center py-10">Loading students...</div>;
    }

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold text-gray-800">Students</h1>

                <button
                    onClick={() => navigate("/admin/students/create")}
                    className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                >
                    <Plus size={18} />
                    Create Student
                </button>
            </div>

            {/* TABLE */}
            <div className="bg-white shadow rounded-xl overflow-x-auto">
                <table className="w-full text-sm">
                    <thead className="bg-gray-100 text-gray-700 uppercase text-xs">
                        <tr>
                            <th className="px-6 py-4 text-left">Reg No</th>
                            <th className="px-6 py-4 text-left">Student Name</th>
                            <th className="px-6 py-4 text-left">Class</th>
                            <th className="px-6 py-4 text-left">Parent</th>
                            <th className="px-6 py-4 text-center">Actions</th>
                        </tr>
                    </thead>

                    <tbody className="divide-y">
                        {students.map((student) => (
                            <tr key={student.id} className="hover:bg-gray-50">
                                <td className="px-6 py-4 font-medium">{student.regNo}</td>
                                <td className="px-6 py-4">{student.studentName}</td>
                                <td className="px-6 py-4">{student.className}</td>
                                <td className="px-6 py-4">{student.parentName}</td>

                                <td className="px-6 py-4">
                                    <div className="flex justify-center gap-3">
                                        <button
                                            onClick={() => navigate(`/admin/students/${student.id}`)}
                                            className="text-blue-600 hover:text-blue-800"
                                        >
                                            <Eye size={18} />
                                        </button>

                                        <button
                                            onClick={() =>
                                                navigate(`/admin/students/edit/${student.id}`)
                                            }
                                            className="text-green-600 hover:text-green-800"
                                        >
                                            <Edit size={18} />
                                        </button>

                                        <button
                                            onClick={() => handleDelete(student.id)}
                                            className="text-red-600 hover:text-red-800"
                                            title="Delete"
                                        >
                                            <Trash2 size={18} />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}

                        {students.length === 0 && (
                            <tr>
                                <td
                                    colSpan="5"
                                    className="px-6 py-8 text-center text-gray-500"
                                >
                                    No students found
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default StudentsAdmin;
