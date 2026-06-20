import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchAttendanceById, updateAttendance } from "../../services/academicService";
import { ArrowLeft, Save } from "lucide-react";

const EditAttendance = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [attendance, setAttendance] = useState(null);
    const [form, setForm] = useState({
        studentName: "",
        className: "",
        termName: "",
        sessionName: "",
        date: "",
        status: "",
        remarks: "",
        markedByName: ""
    });

    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);

    useEffect(() => {
        const loadAttendance = async () => {
            try {
                const data = await fetchAttendanceById(id);
                setAttendance(data);

                setForm({
                    studentName: data.studentName || "",
                    className: data.className || "",
                    termName: data.termName || "",
                    sessionName: data.sessionName || "",
                    date: data.date || "",
                    status: data.status || "",
                    remarks: data.remarks || "",
                    markedByName: data.markedByName || "",
                });

            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        loadAttendance();
    }, [id]);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            setSaving(true);

            await updateAttendance(id, form);

            alert("Attendance updated successfully");
            navigate("/admin/academics/attendance");

        } catch (err) {
            alert(err.response?.data?.message || "Update failed");
        } finally {
            setSaving(false);
        }
    };

    if (loading) {
        return <div className="text-center py-10">Loading attendance...</div>;
    }

    if (!attendance) {
        return <div className="text-center py-10">Attendance not found</div>;
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
                    Edit Attendance
                </h1>
            </div>

            {/* CARD */}
            <div className="bg-white shadow rounded-xl p-8">

                <form onSubmit={handleSubmit} className="space-y-6">

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Student Name
                        </label>
                        <input
                            type="text"
                            name="studentName"
                            value={form.studentName}
                            onChange={handleChange}
                            required
                            className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Class
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
                            Term
                        </label>
                        <input
                            type="text"
                            name="termName"
                            value={form.termName}
                            onChange={handleChange}
                            required
                            className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Session
                        </label>
                        <input
                            type="text"
                            name="sessionName"
                            value={form.sessionName}
                            onChange={handleChange}
                            required
                            className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Date
                        </label>
                        <input
                            type="date"
                            name="date"
                            value={form.date}
                            onChange={handleChange}
                            required
                            className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Status
                        </label>
                        <input
                            type="text"
                            name="status"
                            value={form.status}
                            onChange={handleChange}
                            required
                            className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Remark
                        </label>
                        <input
                            type="text"
                            name="remarks"
                            value={form.remarks}
                            onChange={handleChange}
                            required
                            className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Marked By
                        </label>
                        <input
                            type="text"
                            name="markedByName"
                            value={form.markedByName}
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
                        {saving ? "Saving..." : "Update Attendance"}
                    </button>

                </form>
            </div>
        </div>
    );
};

export default EditAttendance;
