import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
    fetchTestById,
    updateTest,
} from "../../services/academicService";
import { ArrowLeft, Plus, Trash2 } from "lucide-react";

const EditTest = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [loading, setLoading] = useState(true);

    const [form, setForm] = useState({
        title: "",
        description: "",
        subjectId: "",
        klassId: "",
        sessionId: "",
        termId: "",
        duration: 30,
        status: "Draft",
    });

    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        const load = async () => {
            try {
                const data = await fetchTestById(id);

                setForm({
                    title: data.title || "",
                    description: data.description || "",

                    subjectId: data.subjectId?._id || data.subjectId || null,
                    klassId: data.klassId?._id || data.klassId || null,
                    sessionId: data.sessionId?._id || data.sessionId || null,
                    termId: data.termId?._id || data.termId || null,

                    duration: data.duration || 30,
                    status: data.status || "Draft",
                });

                setQuestions(data.questions || []);
            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        load();
    }, [id]);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };


    const handleQuestionChange = (index, field, value) => {
        const updated = [...questions];
        updated[index][field] = value;
        setQuestions(updated);
    };

    const handleOptionChange = (qIndex, optIndex, value) => {
        const updated = [...questions];
        updated[qIndex].options[optIndex] = value;
        setQuestions(updated);
    };

    const addQuestion = () => {
        setQuestions([
            ...questions,
            {
                testQuestionText: "",
                options: ["", "", "", ""],
                correctAnswer: "",
                marks: 1,
            },
        ]);
    };

    const removeQuestion = (index) => {
        const updated = questions.filter((_, i) => i !== index);
        setQuestions(updated);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await updateTest(id, {
                ...form,
                questions,
            });

            alert("Test updated successfully");
            navigate("/admin/academics/tests");
        } catch (err) {
            console.error(err.response?.data || err);
            alert("Failed to update test");
        }
    };

    if (loading) {
        return <div className="text-center py-10">Loading...</div>;
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-6">

            {/* HEADER */}
            <div className="flex items-center gap-3">
                <button
                    type="button"
                    onClick={() => navigate(-1)}
                    className="p-2 hover:bg-gray-100 rounded-lg"
                >
                    <ArrowLeft size={20} />
                </button>

                <h1 className="text-2xl font-bold">Edit Test</h1>
            </div>

            <div className="bg-white p-6 rounded-xl shadow space-y-4">

                <h2 className="text-lg font-semibold">Test Details</h2>

                <input
                    name="title"
                    value={form.title}
                    onChange={handleChange}
                    placeholder="Title"
                    className="w-full border p-2 rounded-lg"
                />

                <textarea
                    name="description"
                    value={form.description}
                    onChange={handleChange}
                    placeholder="Description"
                    className="w-full border p-2 rounded-lg"
                />

                <div className="grid grid-cols-2 gap-4">
                    <input
                        name="duration"
                        type="number"
                        value={form.duration}
                        onChange={handleChange}
                        className="border p-2 rounded-lg"
                        placeholder="Duration"
                    />

                    <select
                        name="status"
                        value={form.status}
                        onChange={handleChange}
                        className="border p-2 rounded-lg"
                    >
                        <option>Draft</option>
                        <option>Published</option>
                        <option>Closed</option>
                    </select>
                </div>

            </div>

            <div className="bg-white p-6 rounded-xl shadow space-y-4">

                <div className="flex justify-between items-center">
                    <h2 className="text-lg font-semibold">Questions</h2>

                    <button
                        type="button"
                        onClick={addQuestion}
                        className="flex items-center gap-2 bg-purple-600 text-white px-3 py-1 rounded-lg"
                    >
                        <Plus size={16} />
                        Add Question
                    </button>
                </div>

                {questions.map((q, index) => (
                    <div key={index} className="border p-4 rounded-lg space-y-3">

                        <div className="flex justify-between">
                            <p className="font-medium">Question {index + 1}</p>

                            <button
                                type="button"
                                onClick={() => removeQuestion(index)}
                                className="text-red-500"
                            >
                                <Trash2 size={16} />
                            </button>
                        </div>

                        <textarea
                            value={q.testQuestionText}
                            onChange={(e) =>
                                handleQuestionChange(index, "testQuestionText", e.target.value)
                            }
                            className="w-full border p-2 rounded-lg"
                            placeholder="Question text"
                        />

                        {/* OPTIONS */}
                        <div className="grid grid-cols-2 gap-2">
                            {q.options.map((opt, i) => (
                                <input
                                    key={i}
                                    value={opt}
                                    onChange={(e) =>
                                        handleOptionChange(index, i, e.target.value)
                                    }
                                    className="border p-2 rounded-lg"
                                    placeholder={`Option ${i + 1}`}
                                />
                            ))}
                        </div>

                        <input
                            value={q.correctAnswer}
                            onChange={(e) =>
                                handleQuestionChange(index, "correctAnswer", e.target.value)
                            }
                            className="w-full border p-2 rounded-lg"
                            placeholder="Correct Answer"
                        />

                        <input
                            type="number"
                            value={q.marks}
                            onChange={(e) =>
                                handleQuestionChange(index, "marks", Number(e.target.value))
                            }
                            className="w-full border p-2 rounded-lg"
                            placeholder="Marks"
                        />

                    </div>
                ))}

            </div>

            {/* SUBMIT */}
            <button
                type="submit"
                className="bg-green-600 text-white px-6 py-2 rounded-lg"
            >
                Update Test
            </button>

        </form>
    );
};

export default EditTest;