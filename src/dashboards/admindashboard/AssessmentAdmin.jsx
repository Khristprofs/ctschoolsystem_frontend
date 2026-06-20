import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Eye, Edit, Trash2, Plus } from "lucide-react";
import {
    fetchAssessments,
    deleteAssessment,
} from "../../services/assessmentService";

const AssessmentAdmin = () => {
    const navigate = useNavigate();
    const [assessments, setAssessments] = useState([]);
    const [loading, setLoading] = useState(true);

    const loadAssessments = async () => {

        try {
            setLoading(true);
            const data = await fetchAssessments();
            setAssessments(data);
        } catch (error) {
            console.error(
                "Failed to fetch assessments",
                error
            );
        } finally {
            setLoading(false);
        }

    };

    useEffect(() => {
        loadAssessments();
    }, []);

        const handleDelete =
        async (id) => {
            const confirmDelete = window.confirm("Are you sure you want to delete this assessment?");
            if (!confirmDelete) return;
            try {
                await deleteAssessment(id);
                setAssessments((prev) =>
                    prev.filter((assessment) => assessment.id !== id
                    )
                );
                alert(
                    "Assessment deleted successfully"
                );
            } catch (error) {
                console.error(error);
                alert(
                    "Failed to delete assessment"
                );
            }

        };

    const getGradeColor = (grade) => {
        switch (grade) {

            case "A":
                return "bg-green-100 text-green-700";

            case "B":
                return "bg-blue-100 text-blue-700";

            case "C":
                return "bg-yellow-100 text-yellow-700";

            case "D":
                return "bg-orange-100 text-orange-700";

            case "F":
                return "bg-red-100 text-red-700";

            default:
                return "bg-gray-100 text-gray-700";
        }

    };

    if (loading) {
        return (
            <div className="text-center py-10">
                Loading assessments...
            </div>
        );

    }
    return (

        <div className="space-y-6">

            <div className="flex justify-between items-center">

                <div className="flex items-center gap-3">
                    <button
                        onClick={() => navigate(-1)}
                        className="p-2 rounded-lg hover:bg-gray-100"
                    >
                        <ArrowLeft size={20} />
                    </button>
                    <div>
                        <h1 className="text-3xl font-bold text-gray-800">
                            Assessments
                        </h1>
                        <p className="text-sm text-gray-500">
                            Manage student assessments
                        </p>
                    </div>
                </div>
                <button
                    onClick={() => navigate("/admin/assessments/create")}
                    className="flex items-center gap-2 bg-indigo-600 text-white px-5 py-3 rounded-xl hover:bg-indigo-700 transition"
                >
                    <Plus size={18} />
                    Create Assessment
                </button>

            </div>
            <div className="bg-white rounded-2xl shadow overflow-hidden border border-gray-100">

                <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                        <thead className="bg-gray-50 border-b">
                            <tr className="text-left text-gray-600 uppercase text-xs">
                                <th className="px-6 py-4">
                                    Student
                                </th>
                                <th className="px-6 py-4">
                                    Subject
                                </th>
                                <th className="px-6 py-4">
                                    Class
                                </th>
                                <th className="px-6 py-4">
                                    Total
                                </th>
                                <th className="px-6 py-4">
                                    Grade
                                </th>
                                <th className="px-6 py-4">
                                    Remark
                                </th>
                                <th className="px-6 py-4 text-center">
                                    Actions
                                </th>
                            </tr>
                        </thead>

                        <tbody className="divide-y">

                            {assessments.map((assessment) => (
                                <tr
                                    key={assessment.id}
                                    className="hover:bg-gray-50 transition"
                                >

                                    <td className="px-6 py-5 font-medium text-gray-800 whitespace-nowrap">
                                        {assessment.studentName}
                                    </td>

                                    <td className="px-6 py-5 whitespace-nowrap">
                                        {assessment.subjectName}
                                    </td>

                                    <td className="px-6 py-5 whitespace-nowrap">
                                        {assessment.className}
                                    </td>

                                    <td className="px-6 py-5 font-semibold">
                                        {assessment.totalScore}
                                    </td>

                                    <td className="px-6 py-5">

                                        <span
                                            className={`px-3 py-1 rounded-full text-xs font-semibold ${getGradeColor(assessment.grade)}`}
                                        >
                                            {assessment.grade}
                                        </span>
                                    </td>

                                    <td className="px-6 py-5 whitespace-nowrap">
                                        {assessment.remark}
                                    </td>

                                    <td className="px-6 py-5">
                                        <div className="flex justify-center gap-3">

                                            <button
                                                onClick={() =>
                                                    navigate(
                                                        `/admin/assessments/${assessment.id}`
                                                    )
                                                }
                                                className="text-blue-600 hover:text-blue-800"
                                            >
                                                <Eye size={18} />
                                            </button>

                                            <button
                                                onClick={() =>
                                                    navigate(
                                                        `/admin/assessments/edit/${assessment.id}`
                                                    )
                                                }
                                                className="text-green-600 hover:text-green-800"
                                            >
                                                <Edit size={18} />
                                            </button>

                                            <button
                                                onClick={() =>
                                                    handleDelete(
                                                        assessment.id
                                                    )
                                                }
                                                className="text-red-600 hover:text-red-800"
                                            >
                                                <Trash2 size={18} />
                                            </button>

                                        </div>

                                    </td>
                                </tr>
                            ))}
                            {assessments.length === 0 && (
                                <tr>
                                    <td
                                        colSpan="10"
                                        className="text-center py-12 text-gray-500"
                                    >
                                        No assessments found
                                    </td>
                                </tr>
                            )}

                        </tbody>

                    </table>

                </div>

            </div>

        </div>

    );

};

export default AssessmentAdmin;