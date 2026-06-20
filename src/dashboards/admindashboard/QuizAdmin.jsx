import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchQuizzes, deleteQuiz } from "../../services/academicService";
import { ArrowLeft, Eye, Edit, Trash2, Plus } from "lucide-react";

const QuizAdmin = () => {
    const navigate = useNavigate();

    const [quizzes, setQuizzes] = useState([]);
    const [loading, setLoading] = useState(true);

    const loadQuizzes = async () => {
        try {
            setLoading(true);
            const data = await fetchQuizzes();
            setQuizzes(data);
        } catch (err) {
            console.error("Failed to load quizzes", err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        loadQuizzes();
    }, []);

    const handleDelete = async (id) => {
        if (!window.confirm("Delete this quiz?")) return;

        try {
            await deleteQuiz(id);
            loadQuizzes();
        } catch (err) {
            console.error(err);
            alert("Failed to delete quiz");
        }
    };

    if (loading) {
        return <div className="text-center py-10">Loading quizzes...</div>;
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
                        Quizzes
                    </h1>
                </div>

                <button
                    onClick={() => navigate("/admin/academics/quizzes/create")}
                    className="flex items-center gap-2 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700"
                >
                    <Plus size={18} />
                    Create Quiz
                </button>
            </div>

            <div className="bg-white shadow rounded-xl overflow-x-auto">
                <table className="w-full text-sm">
                    <thead className="bg-gray-100 text-gray-700 uppercase text-xs">
                        <tr>
                            <th className="px-6 py-4 text-left">Title</th>
                            <th className="px-6 py-4 text-left">Subject</th>
                            <th className="px-6 py-4 text-left">Class</th>
                            <th className="px-6 py-4 text-left">Session</th>
                            <th className="px-6 py-4 text-left">Term</th>
                            <th className="px-6 py-4 text-left">Status</th>
                            <th className="px-6 py-4 text-center">Actions</th>
                        </tr>
                    </thead>

                    <tbody className="divide-y">
                        {quizzes.map((quiz) => (
                            <tr key={quiz.id} className="hover:bg-gray-50">
                                <td className="px-6 py-4">{quiz.title}</td>
                                <td className="px-6 py-4">{quiz.subjectName}</td>
                                <td className="px-6 py-4">{quiz.className}</td>
                                <td className="px-6 py-4">{quiz.sessionName}</td>
                                <td className="px-6 py-4">{quiz.termName}</td>
                                <td className="px-6 py-4">{quiz.status}</td>

                                <td className="px-6 py-4">
                                    <div className="flex justify-center gap-3">

                                        <button
                                            onClick={() => navigate(`/admin/academics/quizzes/${quiz.id}`)}
                                            className="text-blue-600 hover:text-blue-800"
                                        >
                                            <Eye size={18} />
                                        </button>

                                        <button
                                            onClick={() => navigate(`/admin/academics/quizzes/edit/${quiz.id}`)}
                                            className="text-green-600 hover:text-green-800"
                                        >
                                            <Edit size={18} />
                                        </button>

                                        <button
                                            onClick={() => handleDelete(quiz.id)}
                                            className="text-red-600 hover:text-red-800"
                                        >
                                            <Trash2 size={18} />
                                        </button>

                                    </div>
                                </td>
                            </tr>
                        ))}

                        {quizzes.length === 0 && (
                            <tr>
                                <td colSpan="7" className="text-center py-8 text-gray-500">
                                    No quiz found
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default QuizAdmin;