import React, { useEffect, useState } from "react";
import Select from "react-select";
import { useNavigate } from "react-router-dom";
import { getAssessmentFormData, getStudentItems, createAssessment } from "../../services/assessmentService";

export default function CreateAssessment() {

    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [options, setOptions] = useState({
        students: [],
        subjects: [],
        klasses: [],
        sessions: [],
        terms: [],
    });

    const [scores, setScores] = useState({
        quiz: 0,
        test: 0,
        exam: 0,
        total: 0,
    });

    const [formData, setFormData] = useState({
        studentId: "",
        subjectId: "",
        klassId: "",
        sessionId: "",
        termId: "",
        quiz: "",
        test: "",
        exam: "",
    });

    useEffect(() => {
        loadFormData();
    }, []);

    const loadFormData = async () => {
        try {
            setLoading(true);
            const response = await getAssessmentFormData();
            setOptions(response.data);
        }
        catch (error) {
            console.log(error);
        }
        finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        const fetchAssessmentItems = async () => {
            try {
                if (!formData.studentId || !formData.subjectId || !formData.sessionId || !formData.termId) {
                    return;
                }
                const response = await getStudentItems(
                    formData.studentId,
                    formData.subjectId,
                    formData.sessionId,
                    formData.termId
                );
                const quiz = response.data?.quiz;
                const test = response.data?.test;
                const exam = response.data?.exam;
                const quizScore = Number(quiz?.score || 0);
                const testScore = Number(test?.score || 0);
                const examScore = Number(exam?.score || 0);
                const total = quizScore + testScore + examScore;
                setScores({
                    quiz: quizScore,
                    test: testScore,
                    exam: examScore,
                    total,
                });

                setFormData(prev => ({
                    ...prev,
                    quiz: quiz?._id || "",
                    test: test?._id || "",
                    exam: exam?._id || "",
                }));
            }
            catch (error) {
                console.log(error);
            }
        };
        fetchAssessmentItems();
    },
        [
            formData.studentId,
            formData.subjectId,
            formData.sessionId,
            formData.termId
        ]
    );

    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            await createAssessment(formData);
            alert("Assessment created successfully");
            navigate("/admin/assessments");
        }
        catch (error) {
            console.log(error);
            alert(
                error?.response?.data?.message || "Something went wrong"
            );
        }

        finally {
            setLoading(false);
        }
    };

    return (

        <div className="min-h-screen bg-slate-100 p-6">
            <div className="max-w-7xl mx-auto">
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-slate-800">
                        Create Assessment
                    </h1>

                    <p className="text-slate-500 mt-2">
                        Create student assessment and calculate scores automatically
                    </p>
                </div>

                <div className="bg-white rounded-3xl shadow-lg p-8">
                    <form
                        onSubmit={submitHandler}
                        className="space-y-8"
                    >
                        <div>
                            <h3 className="text-xl font-semibold mb-5">
                                Assessment Scores
                            </h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
                                <div className="bg-blue-50 rounded-2xl p-6">
                                    <p>
                                        Quiz Score
                                    </p>
                                    <h2 className="text-3xl font-bold text-blue-600">
                                        {scores.quiz}
                                    </h2>
                                </div>

                                <div className="bg-green-50 rounded-2xl p-6">
                                    <p>
                                        Test Score
                                    </p>
                                    <h2 className="text-3xl font-bold text-green-600">
                                        {scores.test}
                                    </h2>
                                </div>

                                <div className="bg-purple-50 rounded-2xl p-6">
                                    <p>
                                        Exam Score
                                    </p>
                                    <h2 className="text-3xl font-bold text-purple-600">
                                        {scores.exam}
                                    </h2>
                                </div>
                                <div className="bg-orange-50 rounded-2xl p-6">
                                    <p>
                                        Total Score
                                    </p>
                                    <h2 className="text-3xl font-bold text-orange-600">
                                        {scores.total}
                                    </h2>
                                </div>
                            </div>
                        </div>
                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full py-4 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold transition disabled:opacity-50"
                        >
                            {
                                loading ? "Creating..." : "Create Assessment"
                            }

                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}