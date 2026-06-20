import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { updateSubject } from "../../services/academicService";
import { fetchSubjectById } from "../../services/academicService";
import { fetchTeachers } from "../../services/teacherService";
import { ArrowLeft, Save } from "lucide-react";

const EditSubject = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [form, setForm] = useState({
        name: "",
        className: "",
        teacherId: ""
    });

    const [teachers, setTeachers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);

    useEffect(() => {
        const loadSubject = async () => {
            try {
                const data = await fetchSubjectById(id);

                setForm({
                    name: data.name || "",
                    className: data.className || "",
                    teacherId: data.teacherId || "" // MUST exist in API
                });

            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        loadSubject();
    }, [id]);

    useEffect(() => {
        const loadTeachers = async () => {
            try {
                const data = await fetchTeachers();
                setTeachers(data);
            } catch (err) {
                console.error(err);
            }
        };

        loadTeachers();
    }, []);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            setSaving(true);

            await updateSubject(id, form);

            alert("Subject updated successfully");
            navigate("/admin/academics/subjects");

        } catch (err) {
            alert(err.response?.data?.message || "Update failed");
        } finally {
            setSaving(false);
        }
    };

    if (loading) {
        return <div className="text-center py-10">Loading subject...</div>;
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
                    Edit Subject
                </h1>
            </div>

            {/* FORM */}
            <div className="bg-white shadow rounded-xl p-8">
                <form onSubmit={handleSubmit} className="space-y-6">

                    {/* SUBJECT NAME */}
                    <div>
                        <label className="block text-sm font-medium mb-1">
                            Subject Name
                        </label>
                        <input
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            required
                            className="w-full border rounded-lg px-4 py-2"
                        />
                    </div>

                    {/* CLASS */}
                    <div>
                        <label className="block text-sm font-medium mb-1">
                            Class Name
                        </label>
                        <input
                            type="text"
                            name="className"
                            value={form.className}
                            onChange={handleChange}
                            required
                            className="w-full border rounded-lg px-4 py-2"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1">
                            Teacher
                        </label>

                        <select
                            name="teacherId"
                            value={form.teacherId || ""}
                            onChange={handleChange}
                            className="w-full border rounded-lg px-4 py-2"
                        >
                            <option value="">-- Select Teacher --</option>

                            {teachers.map((t) => (
                                <option key={t.id} value={t.id}>
                                    {t.fullName}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* SUBMIT */}
                    <button
                        type="submit"
                        disabled={saving}
                        className="flex items-center gap-2 bg-blue-600 text-white px-6 py-2 rounded-lg"
                    >
                        <Save size={18} />
                        {saving ? "Saving..." : "Update Subject"}
                    </button>

                </form>
            </div>
        </div>
    );
};

export default EditSubject;