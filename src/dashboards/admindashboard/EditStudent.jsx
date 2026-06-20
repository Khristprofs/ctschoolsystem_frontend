import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchStudentById, updateStudent } from "../../services/studentService";
import { ArrowLeft, Save } from "lucide-react";

const EditStudent = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [student, setStudent] = useState(null);
    const [form, setForm] = useState({
        className: "",
        parentFullName: ""
    });

    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);

    useEffect(() => {
        const loadStudent = async () => {
            try {
                const data = await fetchStudentById(id);
                setStudent(data);

                setForm({
                    className: data.className || "",
                    parentFullName: data.parentName || ""
                });

            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        loadStudent();
    }, [id]);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            setSaving(true);

            await updateStudent(id, form);

            alert("Student updated successfully");
            navigate("/admin/students");

        } catch (err) {
            alert(err.response?.data?.message || "Update failed");
        } finally {
            setSaving(false);
        }
    };

    if (loading) {
        return <div className="text-center py-10">Loading student...</div>;
    }

    if (!student) {
        return <div className="text-center py-10">Student not found</div>;
    }

    return (
        <div className="max-w-3xl mx-auto space-y-6">

            {/* HEADER */}
            <div className="flex items-center gap-4">
                <button
                    onClick={() => navigate(-1)}
                    className="p-2 rounded-lg hover:bg-gray-100"
                >
                    <ArrowLeft size={20} />
                </button>
                <h1 className="text-2xl font-bold text-gray-800">
                    Edit Student
                </h1>
            </div>

            {/* CARD */}
            <div className="bg-white shadow rounded-xl p-8">

                <div className="grid md:grid-cols-2 gap-6 mb-8">

                    <Detail label="Student Name" value={student.studentName} />
                    <Detail label="Registration No" value={student.regNo} />

                </div>

                <form onSubmit={handleSubmit} className="space-y-6">

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Class Name
                        </label>
                        <input
                            type="text"
                            name="className"
                            value={form.className}
                            onChange={handleChange}
                            required
                            className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Parent Full Name
                        </label>
                        <input
                            type="text"
                            name="parentFullName"
                            value={form.parentFullName}
                            onChange={handleChange}
                            required
                            className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={saving}
                        className="flex items-center gap-2 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition disabled:opacity-50"
                    >
                        <Save size={18} />
                        {saving ? "Saving..." : "Update Student"}
                    </button>

                </form>
            </div>
        </div>
    );
};

const Detail = ({ label, value }) => (
    <div>
        <p className="text-xs text-gray-500">{label}</p>
        <p className="font-medium text-gray-800 mt-1">{value}</p>
    </div>
);

export default EditStudent;
