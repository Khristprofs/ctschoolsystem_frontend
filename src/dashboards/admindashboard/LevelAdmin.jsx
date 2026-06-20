import { useEffect, useState } from "react";
import { fetchLevels, deleteLevel } from "../../services/academicService";
import { Eye, Edit, Trash2, Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";

const LevelsAdmin = () => {
    const [levels, setLevels] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    const loadLevels = async () => {
        try {
            setLoading(true);
            const data = await fetchLevels();
            setLevels(data);
        } catch (err) {
            console.error("Failed to load level", err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        loadLevels();
    }, []);

    const handleDelete = async (id) => {
        if (!window.confirm("Are you sure you want to delete this level?")) return;

        try {
            await deleteLevel(id);
            loadLevels();
        } catch (err) {
            console.error(err);
            alert("Failed to delete level");
        }
    };

    if (loading) {
        return <div className="text-center py-10">Loading levels...</div>;
    }

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold text-gray-800">Levels</h1>

                <button
                    onClick={() => navigate("/admin/academics/levels/create")}
                    className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                >
                    <Plus size={18} />
                    Create Level
                </button>
            </div>

            {/* TABLE */}
            <div className="bg-white shadow rounded-xl overflow-x-auto">
                <table className="w-full text-sm">
                    <thead className="bg-gray-100 text-gray-700 uppercase text-xs">
                        <tr>
                            <th className="px-6 py-4 text-left">Name</th>
                            <th className="px-6 py-4 text-left">Term</th>
                            <th className="px-6 py-4 text-left">Session</th>
                            <th className="px-6 py-4 text-center">Actions</th>
                        </tr>
                    </thead>

                    <tbody className="divide-y">
                        {levels.map((level) => (
                            <tr key={level.id} className="hover:bg-gray-50">
                                <td className="px-6 py-4 font-medium">{level.name}</td>
                                <td className="px-6 py-4">{level.termName}</td>
                                <td className="px-6 py-4">{level.sessionName}</td>

                                <td className="px-6 py-4">
                                    <div className="flex justify-center gap-3">
                                        <button
                                            onClick={() => navigate(`/admin/academics/levels/${level.id}`)}
                                            className="text-blue-600 hover:text-blue-800"
                                        >
                                            <Eye size={18} />
                                        </button>

                                        <button
                                            onClick={() =>
                                                navigate(`/admin/academics/levels/edit/${level.id}`)
                                            }
                                            className="text-green-600 hover:text-green-800"
                                        >
                                            <Edit size={18} />
                                        </button>

                                        <button
                                            onClick={() => handleDelete(level.id)}
                                            className="text-red-600 hover:text-red-800"
                                            title="Delete"
                                        >
                                            <Trash2 size={18} />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}

                        {levels.length === 0 && (
                            <tr>
                                <td
                                    colSpan="5"
                                    className="px-6 py-8 text-center text-gray-500"
                                >
                                    No levels found
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default LevelsAdmin;
