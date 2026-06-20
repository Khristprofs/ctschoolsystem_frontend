import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchLevelById, updateLevel } from "../../services/academicService";
import { ArrowLeft, Save } from "lucide-react";

const EditLevel = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [level, setLevel] = useState(null);
    const [form, setForm] = useState({
        name: "",
        termName: "",
        sessionName: ""
    });

    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);

    useEffect(() => {
        const loadLevel = async () => {
            try {
                const data = await fetchLevelById(id);
                setLevel(data);

                setForm({
                    name: data.name || "",
                    termName: data.termName || "",
                    sessionName: data.sessionName || ""
                });

            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        loadLevel();
    }, [id]);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            setSaving(true);

            await updateLevel(id, form);

            alert("Level updated successfully");
            navigate("/admin/academic/level");

        } catch (err) {
            alert(err.response?.data?.message || "Update failed");
        } finally {
            setSaving(false);
        }
    };

    if (loading) {
        return <div className="text-center py-10">Loading level...</div>;
    }

    if (!level) {
        return <div className="text-center py-10">Level not found</div>;
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
                    Edit Level
                </h1>
            </div>

            {/* CARD */}
            <div className="bg-white shadow rounded-xl p-8">
                <form onSubmit={handleSubmit} className="space-y-6">

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Name
                        </label>
                        <input
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            required
                            className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Term Name
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
                            Session Name
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

                    <button
                        type="submit"
                        disabled={saving}
                        className="flex items-center gap-2 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition disabled:opacity-50"
                    >
                        <Save size={18} />
                        {saving ? "Saving..." : "Update Level"}
                    </button>

                </form>
            </div>
        </div>
    );
};

export default EditLevel;
