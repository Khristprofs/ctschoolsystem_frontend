import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchTeacherById } from "../../services/teacherService";
import { ArrowLeft } from "lucide-react";

const ViewTeacher = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [teacher, setTeacher] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadTeacher = async () => {
            try {
                const data = await fetchTeacherById(id);
                setTeacher(data);
            } catch (err) {
                console.error("Failed to fetch teacher", err);
            } finally {
                setLoading(false);
            }
        };

        loadTeacher();
    }, [id]);

    if (loading) {
        return <div className="text-center py-10">Loading teacher...</div>;
    }

    if (!teacher) {
        return <div className="text-center py-10">Teacher not found</div>;
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
                    Teacher Details
                </h1>
            </div>

            {/* CARD */}
            <div className="bg-white shadow rounded-xl p-8 space-y-8">
                {/* BASIC */}
                <section>
                    <h2 className="text-sm font-semibold text-gray-500 uppercase mb-4">
                        Teacher Information
                    </h2>

                    <div className="grid md:grid-cols-2 gap-6">
                        <Detail label="Full Name" value={teacher.teacherName} />
                        <Detail label="Staff No" value={teacher.staffNo} />
                        <Detail label="Email" value={teacher.email} />
                        <Detail label="Phone" value={teacher.phone} />
                    </div>
                </section>

                {/* Class */}
                <section>
                    <h2 className="text-sm font-semibold text-gray-500 uppercase mb-4">
                        Subject Information
                    </h2>

                    <div className="grid md:grid-cols-2 gap-6">
                        <Detail label="Level" value={teacher.levelName} />
                        <Detail label="Subjects" value={teacher.subjects} />
                        <Detail label="Specialization" value={teacher.specialization} />
                    </div>
                </section>

                {/* META */}
                <section>
                    <h2 className="text-sm font-semibold text-gray-500 uppercase mb-4">
                        Record Info
                    </h2>

                    <div className="grid md:grid-cols-2 gap-6">
                        <Detail
                            label="Created At"
                            value={new Date(teacher.createdAt).toLocaleString()}
                        />
                        <Detail
                            label="Updated At"
                            value={new Date(teacher.updatedAt).toLocaleString()}
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

export default ViewTeacher;