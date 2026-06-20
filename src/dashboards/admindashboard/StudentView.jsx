import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchStudentById } from "../../services/studentService";
import { ArrowLeft } from "lucide-react";

const ViewStudent = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [student, setStudent] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadStudent = async () => {
            try {
                const data = await fetchStudentById(id);
                setStudent(data);
            } catch (err) {
                console.error("Failed to fetch student", err);
            } finally {
                setLoading(false);
            }
        };

        loadStudent();
    }, [id]);

    if (loading) {
        return <div className="text-center py-10">Loading student...</div>;
    }

    if (!student) {
        return <div className="text-center py-10">Student not found</div>;
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
                    Student Details
                </h1>
            </div>

            {/* CARD */}
            <div className="bg-white shadow rounded-xl p-8 space-y-8">
                {/* BASIC */}
                <section>
                    <h2 className="text-sm font-semibold text-gray-500 uppercase mb-4">
                        Student Information
                    </h2>

                    <div className="grid md:grid-cols-2 gap-6">
                        <Detail label="Full Name" value={student.studentName} />
                        <Detail label="Registration No" value={student.regNo} />
                        <Detail label="Class" value={student.className} />
                        <Detail label="Email" value={student.studentEmail} />
                        <Detail label="Phone" value={student.studentPhone} />
                    </div>
                </section>

                {/* PARENT */}
                <section>
                    <h2 className="text-sm font-semibold text-gray-500 uppercase mb-4">
                        Parent Information
                    </h2>

                    <div className="grid md:grid-cols-2 gap-6">
                        <Detail label="Parent Name" value={student.parentName} />
                        <Detail label="Parent Email" value={student.parentEmail} />
                        <Detail label="Parent Phone" value={student.parentPhone} />
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
                            value={new Date(student.createdAt).toLocaleString()}
                        />
                        <Detail
                            label="Updated At"
                            value={new Date(student.updatedAt).toLocaleString()}
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

export default ViewStudent;
