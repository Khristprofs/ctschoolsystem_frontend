import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchLevelById } from "../../services/academicService";
import { ArrowLeft } from "lucide-react";

const ViewLevel = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [level, setLevel] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadLevel = async () => {
            try {
                const data = await fetchLevelById(id);
                setLevel(data);
            } catch (err) {
                console.error("Failed to fetch level", err);
            } finally {
                setLoading(false);
            }
        };

        loadLevel();
    }, [id]);

    if (loading) {
        return <div className="text-center py-10">Loading level...</div>;
    }

    if (!level) {
        return <div className="text-center py-10">Level not found</div>;
    }

    return (
        <div className="space-y-6 max-w-5xl mx-auto">
            {/* HEADER */}
            <div className="flex items-center gap-4">
                <button
                    onClick={() => navigate(-1)}
                    className="p-2 rounded-lg hover:bg-gray-100"
                >
                    <ArrowLeft size={20} />
                </button>
                <h1 className="text-2xl font-bold text-gray-800">
                    Level Details
                </h1>
            </div>

            {/* CARD */}
            <div className="bg-white shadow rounded-xl p-8 space-y-8">
                {/* BASIC */}
                <section>
                    <h2 className="text-sm font-semibold text-gray-500 uppercase mb-4">
                        Level Information
                    </h2>

                    <div className="grid md:grid-cols-2 gap-6">
                        <Detail label="Name" value={level.name} />
                        <Detail label="Term" value={level.termName} />
                        <Detail label="Session" value={level.sessionName} />
                    </div>
                </section>
                <section>
                    <h2 className="text-sm font-semibold text-gray-500 uppercase mb-4">
                        Record Info
                    </h2>

                    <div className="grid md:grid-cols-2 gap-6">
                        <Detail
                            label="Created At"
                            value={new Date(level.createdAt).toLocaleString()}
                        />
                        <Detail
                            label="Updated At"
                            value={new Date(level.updatedAt).toLocaleString()}
                        />
                    </div>
                </section>
            </div>
        </div>
    );
};

const Detail = ({ label, value }) => (
    <div>
        <p className="text-xs text-gray-500">{label}</p>
        <p className="text-gray-800 font-medium mt-1">
            {value || "—"}
        </p>
    </div>
);

export default ViewLevel;