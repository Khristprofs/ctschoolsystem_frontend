import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Select from "react-select";
import { ArrowLeft } from "lucide-react";
import { fetchAssessmentById, fetchAssessmentFormData, updateAssessment } from "../../services/assessmentService";

const EditAssessment = () => {
    const { id } = useParams();

    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [students, setStudents] = useState([]);
    const [subjects, setSubjects] = useState([]);
    const [classes, setClasses] = useState([]);
    const [sessions, setSessions] = useState([]);
    const [terms, setTerms] = useState([]);
    const [quizzes, setQuizzes] = useState([]);
    const [tests, setTests] = useState([]);
    const [exams, setExams] = useState([]);
    const [selectedStudent, setSelectedStudent] = useState(null);
    const [selectedSubject, setSelectedSubject] = useState(null);
    const [selectedClass, setSelectedClass] = useState(null);
    const [selectedSession, setSelectedSession] = useState(null);
    const [selectedTerm, setSelectedTerm] = useState(null);
    const [selectedQuiz, setSelectedQuiz] = useState(null);
    const [selectedTest, setSelectedTest] = useState(null);
    const [selectedExam, setSelectedExam] = useState(null);

    useEffect(() => {
        loadData();
    }, [id]);

    const loadData =
        async () => {
            try {
                const [formData, assessmentData,] = await Promise.all([
                    fetchAssessmentFormData(),
                    fetchAssessmentById(id),
                ]);

                setStudents(formData.students);
                setSubjects(formData.subjects);
                setClasses(formData.classes);
                setSessions(formData.sessions);
                setTerms(formData.terms);
                setQuizzes(formData.quizzes);
                setTests(formData.tests);
                setExams(formData.exams);
                setSelectedStudent(formData.students.find((item) => item.value === assessmentData.student.id));
                setSelectedSubject(formData.subjects.find((item) => item.value === assessmentData.subject.id));
                setSelectedClass(formData.classes.find((item) => item.value === assessmentData.klass.id));
                setSelectedSession(formData.sessions.find((item) => item.value === assessmentData.session.id));
                setSelectedTerm(formData.terms.find((item) => item.value === assessmentData.term.id));
                setSelectedQuiz(formData.quizzes.find((item) => item.value === assessmentData.quiz._id));
                setSelectedTest(formData.tests.find((item) => item.value === assessmentData.test._id));
                setSelectedExam(formData.exams.find((item) => item.value === assessmentData.exam._id));
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

    const handleSubmit = async (e) => { e.preventDefault();
        try {
            await updateAssessment(id, {
                studentId: selectedStudent?.value,
                subjectId: selectedSubject?.value,
                klassId: selectedClass?.value,
                sessionId: selectedSession?.value,
                termId: selectedTerm?.value,
                quiz: selectedQuiz?.value,
                test: selectedTest?.value,
                exam: selectedExam?.value,
            });
            alert("Assessment updated successfully");
            navigate("/admin/academics/assessments");
        } catch (error) {
            console.error(error.response?.data || error);
            alert("Failed to update assessment");
        }
    };
    const selectStyle = { control: (base) => ({...base, minHeight: "52px", borderRadius: "12px"})};

    if (loading) {
        return (
            <div className="text-center py-10">Loading...</div>
        );
    }

    return (

        <div className="min-h-screen bg-gray-100 p-10 flex justify-center">
            <div className="bg-white w-full max-w-5xl rounded-2xl shadow-xl p-10">
                <div className="flex items-center gap-3 mb-8">
                    <button
                        onClick={() => navigate(-1)}
                        className="p-2 rounded-lg hover:bg-gray-100"
                    >
                        <ArrowLeft size={20} />
                    </button>

                    <h1 className="text-3xl font-bold">
                        Edit Assessment
                    </h1>
                </div>

                <form
                    onSubmit={handleSubmit}
                    className="space-y-5"
                >
                    <Select
                        options={students}
                        value={selectedStudent}
                        onChange={setSelectedStudent}
                        placeholder="Select Student"
                        isSearchable
                        styles={selectStyle}
                    />
                    <Select
                        options={subjects}
                        value={selectedSubject}
                        onChange={setSelectedSubject}
                        placeholder="Select Subject"
                        isSearchable
                        styles={selectStyle}
                    />
                    <Select
                        options={classes}
                        value={selectedClass}
                        onChange={setSelectedClass}
                        placeholder="Select Class"
                        isSearchable
                        styles={selectStyle}
                    />
                    <Select
                        options={sessions}
                        value={selectedSession}
                        onChange={setSelectedSession}
                        placeholder="Select Session"
                        isSearchable
                        styles={selectStyle}
                    />
                    <Select
                        options={terms}
                        value={selectedTerm}
                        onChange={setSelectedTerm}
                        placeholder="Select Term"
                        isSearchable
                        styles={selectStyle}
                    />
                    <Select
                        options={quizzes}
                        value={selectedQuiz}
                        onChange={setSelectedQuiz}
                        placeholder="Select Quiz"
                        isSearchable
                        styles={selectStyle}
                    />
                    <Select
                        options={tests}
                        value={selectedTest}
                        onChange={setSelectedTest}
                        placeholder="Select Test"
                        isSearchable
                        styles={selectStyle}
                    />
                    <Select
                        options={exams}
                        value={selectedExam}
                        onChange={setSelectedExam}
                        placeholder="Select Exam"
                        isSearchable
                        styles={selectStyle}
                    />
                    <button
                        type="submit"
                        className="w-full bg-indigo-600 text-white py-3 rounded-xl hover:bg-indigo-700 transition"
                    >
                        Update Assessment
                    </button>
                </form>
            </div>
        </div>
    );
};

export default EditAssessment;