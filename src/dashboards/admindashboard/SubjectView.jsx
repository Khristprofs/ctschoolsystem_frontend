import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchSubjectById } from "../../services/academicService";
import { ArrowLeft } from "lucide-react";

const ViewSubject = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [subject, setSubject] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadSubject = async () => {
            try {
                const data = await fetchSubjectById(id);
                setSubject(data);
            } catch (err) {
                console.error("Failed to fetch subject", err);
            } finally {
                setLoading(false);
            }
        };

        loadSubject();
    }, [id]);

    if (loading) {
        return <div className="text-center py-10">Loading subject...</div>;
    }

    if (!subject) {
        return <div className="text-center py-10">Subject not found</div>;
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
                    Subject Details
                </h1>
            </div>

            {/* CARD */}
            <div className="bg-white shadow rounded-xl p-8 space-y-8">
                {/* BASIC */}
                <section>
                    <h2 className="text-sm font-semibold text-gray-500 uppercase mb-4">
                        Subject Information
                    </h2>

                    <div className="grid md:grid-cols-2 gap-6">
                        <Detail label="Name" value={subject.name} />
                        <Detail label="Class" value={subject.className} />
                        <Detail label="Teacher" value={subject.teacherName} />
                    </div>
                </section>
                <section>
                    <h2 className="text-sm font-semibold text-gray-500 uppercase mb-4">
                        Record Info
                    </h2>

                    <div className="grid md:grid-cols-2 gap-6">
                        <Detail
                            label="Created At"
                            value={new Date(subject.createdAt).toLocaleString()}
                        />
                        <Detail
                            label="Updated At"
                            value={new Date(subject.updatedAt).toLocaleString()}
                        />
                    </div>
                </section>
            </div>
        </div>
    );
};

const Detail = ({ label, value }) => {
    const safeValue =
        typeof value === "string" && value.trim() === ""
            ? null
            : value;

    return (
        <div>
            <p className="text-xs text-gray-500">{label}</p>
            <p className="text-gray-800 font-medium mt-1">
                {safeValue ?? "—"}
            </p>
        </div>
    );
};
export default ViewSubject;