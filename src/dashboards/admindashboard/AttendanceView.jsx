import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchAttendanceById } from "../../services/academicService";
import { ArrowLeft } from "lucide-react";

const ViewAttendance = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [attendance, setAttendance] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!id) return;

        const loadAttendance = async () => {
            try {
                const data = await fetchAttendanceById(id);
                setAttendance(data);
            } catch (err) {
                console.error("Failed to fetch attendance", err);
            } finally {
                setLoading(false);
            }
        };

        loadAttendance();
    }, [id]);
    if (loading) {
        return <div className="text-center py-10">Loading attendance...</div>;
    }

    if (!attendance) {
        return <div className="text-center py-10">Attendance not found</div>;
    }

    return (
        <div className="space-y-6 max-w-5xl mx-auto">
            <div className="flex items-center gap-4">
                <button
                    onClick={() => navigate(-1)}
                    className="p-2 rounded-lg hover:bg-gray-100"
                >
                    <ArrowLeft size={20} />
                </button>
                <h1 className="text-2xl font-bold text-gray-800">
                    Attendance Details
                </h1>
            </div>

            {/* CARD */}
            <div className="bg-white shadow rounded-xl p-8 space-y-8">
                {/* BASIC */}
                <section>
                    <h2 className="text-sm font-semibold text-gray-500 uppercase mb-4">
                        Attendance Information
                    </h2>

                    <div className="grid md:grid-cols-2 gap-6">
                        <Detail label="Student Name" value={attendance.studentName} />
                        <Detail label="Status" value={attendance.status} />
                        <Detail label="Remarks" value={attendance.remarks} />
                    </div>
                </section>
                <section>
                    <h2 className="text-sm font-semibold text-gray-500 uppercase mb-4">
                        Record Info
                    </h2>

                    <div className="grid md:grid-cols-2 gap-6">
                        <Detail label="Class" value={attendance.className} />
                        <Detail label="Term" value={attendance.termName} />
                        <Detail label="Session" value={attendance.sessionName} />
                        <Detail label="Marked By" value={attendance.markedByName} />
                        <Detail label="Date" value={attendance.date} />
                    </div>
                </section>
                <section>
                    <h2 className="text-sm font-semibold text-gray-500 uppercase mb-4">
                        Update Info
                    </h2>

                    <div className="grid md:grid-cols-2 gap-6">
                        <Detail
                            label="Created At"
                            value={new Date(attendance.createdAt).toLocaleString()}
                        />
                        <Detail
                            label="Updated At"
                            value={new Date(attendance.updatedAt).toLocaleString()}
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

export default ViewAttendance;