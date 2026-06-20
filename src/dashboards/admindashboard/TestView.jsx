import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { fetchTestById } from "../../services/academicService";
import { ArrowLeft } from "lucide-react";

const TestView = () => {
    const navigate = useNavigate();
    const { id } = useParams();

    const [test, setTest] = useState(null);
    const [loading, setLoading] = useState(true);

    const loadTest = async () => {
        try {
            setLoading(true);
            const data = await fetchTestById(id);
            setTest(data);
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        loadTest();
    }, [id]);

    if (loading) {
        return <div className="text-center py-10">Loading test...</div>;
    }

    if (!test) {
        return <div className="text-center py-10">Test not found</div>;
    }

    return (
        <div className="space-y-6">

            {/* HEADER */}
            <div className="flex items-center gap-3">
                <button
                    onClick={() => navigate(-1)}
                    className="p-2 rounded-lg hover:bg-gray-100"
                >
                    <ArrowLeft size={20} />
                </button>

                <h1 className="text-2xl font-bold text-gray-800">
                    Test Details
                </h1>
            </div>

            {/* TEST INFO */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

                <div className="bg-white p-4 rounded-xl shadow">
                    <p className="text-gray-500 text-sm">Title</p>
                    <h2 className="font-semibold">{test.title}</h2>
                </div>

                <div className="bg-white p-4 rounded-xl shadow">
                    <p className="text-gray-500 text-sm">Subject</p>
                    <h2 className="font-semibold">{test.subjectName}</h2>
                </div>

                <div className="bg-white p-4 rounded-xl shadow">
                    <p className="text-gray-500 text-sm">Class</p>
                    <h2 className="font-semibold">{test.className}</h2>
                </div>

                <div className="bg-white p-4 rounded-xl shadow">
                    <p className="text-gray-500 text-sm">Session</p>
                    <h2 className="font-semibold">{test.sessionName}</h2>
                </div>

                <div className="bg-white p-4 rounded-xl shadow">
                    <p className="text-gray-500 text-sm">Term</p>
                    <h2 className="font-semibold">{test.termName}</h2>
                </div>

                <div className="bg-white p-4 rounded-xl shadow">
                    <p className="text-gray-500 text-sm">Status</p>
                    <h2 className="font-semibold">{test.status}</h2>
                </div>

                <div className="bg-white p-4 rounded-xl shadow">
                    <p className="text-gray-500 text-sm">Duration</p>
                    <h2 className="font-semibold">{test.duration} mins</h2>
                </div>

                <div className="bg-white p-4 rounded-xl shadow">
                    <p className="text-gray-500 text-sm">Total Questions</p>
                    <h2 className="font-semibold">{test.totalQuestions}</h2>
                </div>

                <div className="bg-white p-4 rounded-xl shadow">
                    <p className="text-gray-500 text-sm">Max Score</p>
                    <h2 className="font-semibold">{test.maxScore}</h2>
                </div>

            </div>

            {/* DESCRIPTION */}
            <div className="bg-white p-4 rounded-xl shadow">
                <p className="text-gray-500 text-sm">Description</p>
                <p>{test.description}</p>
            </div>

            {/* QUESTIONS */}
            <div className="space-y-4">
                <h2 className="text-xl font-semibold">Questions</h2>

                {test.questions.map((q, index) => (
                    <div key={index} className="bg-white p-4 rounded-xl shadow">

                        <p className="font-medium">
                            {index + 1}. {q.testQuestionText}
                        </p>

                        <div className="mt-2 space-y-1">
                            {q.options.map((opt, i) => (
                                <div
                                    key={i}
                                    className={`px-3 py-1 rounded-lg text-sm ${opt === q.correctAnswer
                                            ? "bg-green-100 text-green-700 font-semibold"
                                            : "bg-gray-100"
                                        }`}
                                >
                                    {opt}
                                </div>
                            ))}
                        </div>

                        <p className="text-xs text-gray-500 mt-2">
                            Marks: {q.marks}
                        </p>

                    </div>
                ))}

            </div>

        </div>
    );
};

export default TestView;