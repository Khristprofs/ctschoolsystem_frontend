import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, Pencil } from "lucide-react";

import { fetchAssessmentItemById } from "../../services/academicService";

const AssessmentItemView = () => {

    const navigate = useNavigate();
    const { id } = useParams();
    const [assessmentItem, setAssessmentItem] = useState(null);
    const [loading, setLoading] = useState(true);

    const loadAssessmentItem = async () => {

        try {

            setLoading(true);

            const data = await fetchAssessmentItemById(id);

            setAssessmentItem(data);

        } catch (error) {

            console.error("Failed to load assessment item", error);

        } finally {

            setLoading(false);

        }

    };

    useEffect(() => {

        loadAssessmentItem();

    }, [id]);

    if (loading) {
        return (
            <div className="text-center py-10">
                Loading assessment item...
            </div>
        );
    }

    if (!assessmentItem) {
        return (
            <div className="text-center py-10 text-red-500">
                Assessment item not found
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

                    <h1 className="text-2xl font-bold text-gray-800">
                        Assessment Item Details
                    </h1>

                </div>

                <button
                    onClick={() =>
                        navigate(
                            `/admin/academics/assessment-items/edit/${assessmentItem.id}`
                        )
                    }
                    className="flex items-center gap-2 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700"
                >
                    <Pencil size={18} />
                    Edit
                </button>

            </div>

            <div className="bg-white shadow rounded-2xl p-6">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    <div>
                        <label className="text-sm text-gray-500">
                            Student
                        </label>

                        <p className="font-semibold text-gray-800 mt-1">
                            {assessmentItem.studentName}
                        </p>
                    </div>

                    <div>
                        <label className="text-sm text-gray-500">
                            Subject
                        </label>

                        <p className="font-semibold text-gray-800 mt-1">
                            {assessmentItem.subjectName}
                        </p>
                    </div>

                    <div>
                        <label className="text-sm text-gray-500">
                            Class
                        </label>

                        <p className="font-semibold text-gray-800 mt-1">
                            {assessmentItem.className}
                        </p>
                    </div>

                    <div>
                        <label className="text-sm text-gray-500">
                            Session
                        </label>

                        <p className="font-semibold text-gray-800 mt-1">
                            {assessmentItem.sessionName}
                        </p>
                    </div>

                    <div>
                        <label className="text-sm text-gray-500">
                            Term
                        </label>

                        <p className="font-semibold text-gray-800 mt-1">
                            {assessmentItem.termName}
                        </p>
                    </div>

                    <div>
                        <label className="text-sm text-gray-500">
                            Assessment Type
                        </label>

                        <p className="font-semibold text-gray-800 mt-1">
                            {assessmentItem.type}
                        </p>
                    </div>

                    <div>
                        <label className="text-sm text-gray-500">
                            Title
                        </label>

                        <p className="font-semibold text-gray-800 mt-1">
                            {assessmentItem.title}
                        </p>
                    </div>

                    <div>
                        <label className="text-sm text-gray-500">
                            Score
                        </label>

                        <p className="font-semibold text-gray-800 mt-1">
                            {assessmentItem.score} / {assessmentItem.maxScore}
                        </p>
                    </div>

                    <div>
                        <label className="text-sm text-gray-500">
                            Created By
                        </label>

                        <p className="font-semibold text-gray-800 mt-1">
                            {assessmentItem.teacherName}
                        </p>
                    </div>

                    <div>
                        <label className="text-sm text-gray-500">
                            Created At
                        </label>

                        <p className="font-semibold text-gray-800 mt-1">
                            {new Date(
                                assessmentItem.createdAt
                            ).toLocaleString()}
                        </p>
                    </div>

                    <div>
                        <label className="text-sm text-gray-500">
                            Updated At
                        </label>

                        <p className="font-semibold text-gray-800 mt-1">
                            {new Date(
                                assessmentItem.updatedAt
                            ).toLocaleString()}
                        </p>
                    </div>

                </div>

            </div>

        </div>
    );
};

export default AssessmentItemView;