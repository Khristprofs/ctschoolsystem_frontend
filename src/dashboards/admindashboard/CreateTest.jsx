import React, { useEffect, useState } from "react";
import Select from "react-select";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateTest = () => {
    const navigate = useNavigate();

    const [subjects, setSubjects] = useState([]);
    const [teachers, setTeachers] = useState([]);
    const [classes, setClasses] = useState([]);
    const [sessions, setSessions] = useState([]);
    const [terms, setTerms] = useState([]);
    const [statusOptions, setStatusOptions] = useState([]);

    const [selectedSubject, setSelectedSubject] = useState(null);
    const [selectedTeacher, setSelectedTeacher] = useState(null);
    const [selectedClass, setSelectedClass] = useState(null);
    const [selectedSession, setSelectedSession] = useState(null);
    const [selectedTerm, setSelectedTerm] = useState(null);
    const [selectedStatus, setSelectedStatus] = useState(null);

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [duration, setDuration] = useState(30);

    const [questions, setQuestions] = useState([
        {
            testQuestionText: "",
            options: ["", "", "", ""],
            correctAnswer: "",
            marks: 1,
        },
    ]);

    useEffect(() => {
        fetchFormData();
    }, []);

    const fetchFormData = async () => {
        try {
            const res = await axios.get(
                "http://localhost:3001/api/v1/admin/test/form-data"
            );

            setSubjects(res.data.subjects);
            setTeachers(res.data.teachers);
            setClasses(res.data.classes);
            setSessions(res.data.sessions);
            setTerms(res.data.terms);
            setStatusOptions(res.data.statusOptions);
        } catch (err) {
            console.error(err);
        }
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

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!selectedSubject || !selectedTeacher) {
            return alert("Fill all required fields");
        }

        try {
            await axios.post(
                "http://localhost:3001/api/v1/admin/academics/tests",
                {
                    title,
                    description,
                    subjectId: selectedSubject.value,
                    klassId: selectedClass.value,
                    sessionId: selectedSession.value,
                    termId: selectedTerm.value,
                    created_by: selectedTeacher.value,
                    status: selectedStatus?.value,
                    duration,
                    questions,
                }
            );

            alert("Test created successfully");
            navigate("/admin/academics/tests");
        } catch (err) {
            alert(err.response?.data?.message || "Error");
        }
    };

    const selectStyle = {
        control: (base) => ({
            ...base,
            borderRadius: "12px",
            padding: "6px",
        }),
    };

    return (
        <div className="min-h-screen bg-gray-100 p-10 flex justify-center">
            <div className="bg-white w-full max-w-5xl rounded-2xl shadow-xl p-10">
                <h2 className="text-3xl font-bold mb-6">Create Test</h2>

                {/* QUESTIONS SECTION */}
                <div className="mb-10">
                    <h3 className="text-xl font-semibold mb-4">
                        Create Questions
                    </h3>

                    {questions.map((q, qIndex) => (
                        <div
                            key={qIndex}
                            className="border rounded-xl p-5 mb-6 bg-gray-50"
                        >
                            <input
                                type="text"
                                placeholder="Question"
                                value={q.testQuestionText}
                                onChange={(e) =>
                                    handleQuestionChange(
                                        qIndex,
                                        "testQuestionText",
                                        e.target.value
                                    )
                                }
                                className="w-full mb-3 border rounded-xl px-4 py-2"
                            />

                            {q.options.map((opt, i) => (
                                <input
                                    key={i}
                                    type="text"
                                    placeholder={`Option ${i + 1}`}
                                    value={opt}
                                    onChange={(e) =>
                                        handleOptionChange(
                                            qIndex,
                                            i,
                                            e.target.value
                                        )
                                    }
                                    className="w-full mb-2 border rounded-xl px-4 py-2"
                                />
                            ))}

                            <input
                                type="text"
                                placeholder="Correct Answer"
                                value={q.correctAnswer}
                                onChange={(e) =>
                                    handleQuestionChange(
                                        qIndex,
                                        "correctAnswer",
                                        e.target.value
                                    )
                                }
                                className="w-full mb-2 border rounded-xl px-4 py-2"
                            />

                            <input
                                type="number"
                                placeholder="Marks"
                                value={q.marks}
                                onChange={(e) =>
                                    handleQuestionChange(
                                        qIndex,
                                        "marks",
                                        Number(e.target.value)
                                    )
                                }
                                className="w-full border rounded-xl px-4 py-2"
                            />

                            <button
                                type="button"
                                onClick={() => removeQuestion(qIndex)}
                                className="mt-3 text-red-500"
                            >
                                Remove
                            </button>
                        </div>
                    ))}

                    <button
                        type="button"
                        onClick={addQuestion}
                        className="bg-indigo-600 text-white px-4 py-2 rounded-xl"
                    >
                        + Add Question
                    </button>
                </div>

                {/* TEST DETAILS */}
                <form onSubmit={handleSubmit} className="space-y-5">
                    <input
                        type="text"
                        placeholder="Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="w-full border rounded-xl px-4 py-3"
                    />

                    <textarea
                        placeholder="Description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="w-full border rounded-xl px-4 py-3"
                    />

                    <Select
                        options={subjects}
                        value={selectedSubject}
                        onChange={setSelectedSubject}
                        placeholder="Select subject"
                        styles={selectStyle}
                    />

                    <Select
                        options={classes}
                        value={selectedClass}
                        onChange={setSelectedClass}
                        placeholder="Select class"
                        styles={selectStyle}
                    />

                    <Select
                        options={sessions}
                        value={selectedSession}
                        onChange={setSelectedSession}
                        placeholder="Select session"
                        styles={selectStyle}
                    />

                    <Select
                        options={terms}
                        value={selectedTerm}
                        onChange={setSelectedTerm}
                        placeholder="Select term"
                        styles={selectStyle}
                    />

                    <Select
                        options={teachers}
                        value={selectedTeacher}
                        onChange={setSelectedTeacher}
                        placeholder="Select teacher"
                        styles={selectStyle}
                    />

                    <Select
                        options={statusOptions}
                        value={selectedStatus}
                        onChange={setSelectedStatus}
                        placeholder="Status"
                        styles={selectStyle}
                    />

                    <input
                        type="number"
                        value={duration}
                        onChange={(e) => setDuration(e.target.value)}
                        className="w-full border rounded-xl px-4 py-3"
                        placeholder="Duration (minutes)"
                    />

                    <button className="w-full bg-indigo-600 text-white py-3 rounded-xl">
                        Create Test
                    </button>
                </form>
            </div>
        </div>
    );
};

export default CreateTest;