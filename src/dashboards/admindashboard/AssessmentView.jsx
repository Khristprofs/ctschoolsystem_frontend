import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, GraduationCap, BookOpen, School, Calendar, Trophy } from "lucide-react";
import { fetchAssessmentById } from "../../services/assessmentService";

const AssessmentView = () => {

    const { id } = useParams();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [assessment, setAssessment] = useState(null);

    useEffect(() => {
        loadAssessment();
    }, [id]);

    const loadAssessment = async () => {
        try {
            const data = await fetchAssessmentById(id);
            setAssessment(data);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
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
                Loading assessment...
            </div>
        );
    }

    if (!assessment) {
        return (
            <div className="text-center py-10">
                Assessment not found
            </div>
        );
    }

    return (

        <div className="space-y-6">
            <div className="flex items-center gap-3">
                <button
                    onClick={() => navigate(-1)}
                    className="p-2 rounded-lg hover:bg-gray-100"
                >
                    <ArrowLeft size={20} />
                </button>
                <div>
                    <h1 className="text-3xl font-bold text-gray-800">
                        Assessment Details
                    </h1>
                    <p className="text-sm text-gray-500">
                        Full assessment information
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                <div className="bg-white rounded-2xl shadow p-5 border">
                    <div className="flex items-center gap-3 mb-3">
                        <GraduationCap className="text-indigo-600" />
                        <h3 className="font-semibold">
                            Student
                        </h3>
                    </div>

                    <p className="text-gray-700">
                        { assessment.student?.name }
                    </p>
                </div>

                <div className="bg-white rounded-2xl shadow p-5 border">
                    <div className="flex items-center gap-3 mb-3">
                        <BookOpen className="text-green-600" />
                        <h3 className="font-semibold">
                            Subject
                        </h3>
                    </div>
                    <p className="text-gray-700">
                        { assessment.subject?.name }
                    </p>
                </div>
                <div className="bg-white rounded-2xl shadow p-5 border">
                    <div className="flex items-center gap-3 mb-3">
                        <School className="text-blue-600" />
                        <h3 className="font-semibold">
                            Class
                        </h3>
                    </div>
                    <p className="text-gray-700">
                        { assessment.klass?.name }
                    </p>
                </div>

                <div className="bg-white rounded-2xl shadow p-5 border">
                    <div className="flex items-center gap-3 mb-3">
                        <Calendar className="text-orange-600" />
                        <h3 className="font-semibold">
                            Session / Term
                        </h3>
                    </div>
                    <p className="text-gray-700">
                        { assessment.session?.name }
                    </p>
                    <p className="text-sm text-gray-500">
                        { assessment.term?.name }
                    </p>
                </div>
            </div>
            <div className="bg-white rounded-2xl shadow border overflow-hidden">
                <div className="px-6 py-5 border-b">
                    <h2 className="text-xl font-bold">
                        Assessment Breakdown
                    </h2>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                        <thead className="bg-gray-50">
                            <tr className="text-left text-gray-600 uppercase text-xs">
                                <th className="px-6 py-4">
                                    Type
                                </th>
                                <th className="px-6 py-4">
                                    Title
                                </th>
                                <th className="px-6 py-4">
                                    Score
                                </th>
                                <th className="px-6 py-4">
                                    Max Score
                                </th>
                            </tr>

                        </thead>
                        <tbody className="divide-y">
                            <tr>
                                <td className="px-6 py-5">
                                    Quiz
                                </td>
                                <td className="px-6 py-5">
                                    { assessment.quiz?.title }
                                </td>
                                <td className="px-6 py-5">
                                    { assessment.quiz?.score }
                                </td>
                                <td className="px-6 py-5">
                                    { assessment.quiz?.maxScore }
                                </td>
                            </tr>

                            <tr>
                                <td className="px-6 py-5">
                                    Test
                                </td>
                                <td className="px-6 py-5">
                                    { assessment.test?.title }
                                </td>
                                <td className="px-6 py-5">
                                    { assessment.test?.score }
                                </td>
                                <td className="px-6 py-5">
                                    { assessment.test?.maxScore }
                                </td>
                            </tr>

                            <tr>
                                <td className="px-6 py-5">
                                    Exam
                                </td>
                                <td className="px-6 py-5">
                                    { assessment.exam?.title }
                                </td>
                                <td className="px-6 py-5">
                                    { assessment.exam?.score }
                                </td>
                                <td className="px-6 py-5">
                                    { assessment.exam?.maxScore }
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <div className="bg-white rounded-2xl shadow border p-8">
                <div className="flex items-center gap-3 mb-6">
                    <Trophy className="text-yellow-500" />
                    <h2 className="text-2xl font-bold">
                        Final Result
                    </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-indigo-50 rounded-xl p-5">
                        <p className="text-sm text-gray-500 mb-2">
                            Total Score
                        </p>
                        <h3 className="text-3xl font-bold text-indigo-700">
                            {
                                assessment.totalScore
                            }
                        </h3>
                    </div>

                    <div className="bg-gray-50 rounded-xl p-5">
                        <p className="text-sm text-gray-500 mb-2">
                            Grade
                        </p>
                        <span
                            className={`inline-block px-4 py-2 rounded-full text-lg font-bold ${getGradeColor(
                                assessment.grade
                            )}`}
                        >
                            {
                                assessment.grade
                            }
                        </span>
                    </div>
                    <div className="bg-gray-50 rounded-xl p-5">
                        <p className="text-sm text-gray-500 mb-2">
                            Remark
                        </p>
                        <h3 className="text-2xl font-bold text-gray-800">
                            {
                                assessment.remark
                            }
                        </h3>
                    </div>
                </div>
            </div>
        </div>
    );

};

export default AssessmentView;