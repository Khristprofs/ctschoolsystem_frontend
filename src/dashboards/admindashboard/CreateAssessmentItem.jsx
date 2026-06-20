import { useEffect, useState } from "react";
import Select from "react-select";
import { useNavigate } from "react-router-dom";
import { ArrowLeft} from "lucide-react";
import {
    fetchAssessmentItemFormData,
    createAssessmentItem,
} from "../../services/academicService";

const CreateAssessmentItem = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [students, setStudents] = useState([]);
    const [subjects, setSubjects] = useState([]);
    const [teachers, setTeachers] = useState([]);
    const [classes, setClasses] = useState([]);
    const [sessions, setSessions] = useState([]);
    const [terms, setTerms] = useState([]);
    const [assessmentTypes, setAssessmentTypes] = useState([]);
    const [selectedStudent, setSelectedStudent] = useState(null);
    const [selectedSubject, setSelectedSubject] = useState(null);
    const [selectedTeacher, setSelectedTeacher] = useState(null);
    const [selectedClass, setSelectedClass] = useState(null);
    const [selectedSession, setSelectedSession] = useState(null);
    const [selectedTerm, setSelectedTerm] = useState(null);
    const [selectedType, setSelectedType] = useState(null);
    const [title, setTitle] = useState("");
    const [score, setScore] = useState("");
    const [maxScore, setMaxScore] = useState("");

    useEffect(() => {
        loadFormData();
    }, []);

    const loadFormData = async () => {
        try {

            const data = await fetchAssessmentItemFormData();

            setStudents(data.students);
            setSubjects(data.subjects);
            setTeachers(data.teachers);
            setClasses(data.classes);
            setSessions(data.sessions);
            setTerms(data.terms);
            setAssessmentTypes(data.assessmentTypes);

        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        if (
            !selectedStudent ||
            !selectedSubject ||
            !selectedTeacher ||
            !selectedClass ||
            !selectedSession ||
            !selectedTerm ||
            !selectedType
        ) {
            return alert("Please fill all required fields");
        }

        try {

            await createAssessmentItem({
                studentId: selectedStudent.value,
                subjectId: selectedSubject.value,
                klassId: selectedClass.value,
                sessionId: selectedSession.value,
                termId: selectedTerm.value,
                created_by: selectedTeacher.value,
                type: selectedType.value,
                title,
                score: Number(score),
                maxScore: Number(maxScore),
            });
            alert("Assessment item created successfully");
            navigate("/admin/academics/assessment-items");
        } catch (error) {
            console.error(error.response?.data || error);
            alert(
                error.response?.data?.message ||
                "Failed to create assessment item"
            );
        }
    };

    const selectStyle = {
        control: (base) => ({
            ...base,
            borderRadius: "12px",
            padding: "6px",
            minHeight: "52px",
        }),
    };

    if (loading) {
        return (
            <div className="text-center py-10">Loading form data...</div>
        );
    }
    return (

        <div className="min-h-screen bg-gray-100 p-10 flex justify-center">
            <div className="bg-white w-full max-w-4xl rounded-2xl shadow-xl p-10">
                <div className="flex items-center gap-3 mb-8">
                    <button
                        onClick={() => navigate(-1)}
                        className="p-2 rounded-lg hover:bg-gray-100"
                    >
                        <ArrowLeft size={20} />
                    </button>
                    <h1 className="text-3xl font-bold">Create Assessment Item</h1>
                </div>

                <form
                    onSubmit={handleSubmit}
                    className="space-y-5"
                >
                    <input
                        type="text"
                        placeholder="Assessment title"
                        value={title}
                        onChange={(e) =>
                            setTitle(e.target.value)
                        }
                        className="w-full border rounded-xl px-4 py-3"
                    />
                    <Select
                        options={students}
                        value={selectedStudent}
                        onChange={setSelectedStudent}
                        placeholder="Select student"
                        isSearchable
                        styles={selectStyle}
                    />
                    <Select
                        options={subjects}
                        value={selectedSubject}
                        onChange={setSelectedSubject}
                        placeholder="Select subject"
                        isSearchable
                        styles={selectStyle}
                    />
                    <Select
                        options={classes}
                        value={selectedClass}
                        onChange={setSelectedClass}
                        placeholder="Select class"
                        isSearchable
                        styles={selectStyle}
                    />
                    <Select
                        options={sessions}
                        value={selectedSession}
                        onChange={setSelectedSession}
                        placeholder="Select session"
                        isSearchable
                        styles={selectStyle}
                    />
                    <Select
                        options={terms}
                        value={selectedTerm}
                        onChange={setSelectedTerm}
                        placeholder="Select term"
                        isSearchable
                        styles={selectStyle}
                    />
                    <Select
                        options={teachers}
                        value={selectedTeacher}
                        onChange={setSelectedTeacher}
                        placeholder="Select teacher"
                        isSearchable
                        styles={selectStyle}
                    />
                    <Select
                        options={assessmentTypes}
                        value={selectedType}
                        onChange={setSelectedType}
                        placeholder="Select assessment type"
                        isSearchable
                        styles={selectStyle}
                    />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                        <input
                            type="number"
                            placeholder="Score"
                            value={score}
                            onChange={(e) =>
                                setScore(
                                    e.target.value
                                )
                            }
                            className="w-full border rounded-xl px-4 py-3"
                        />

                        <input
                            type="number"
                            placeholder="Maximum score"
                            value={maxScore}
                            onChange={(e) =>
                                setMaxScore(
                                    e.target.value
                                )
                            }
                            className="w-full border rounded-xl px-4 py-3"
                        />

                    </div>
                    <button
                        type="submit"
                        className="w-full bg-indigo-600 text-white py-3 rounded-xl hover:bg-indigo-700"
                    >
                        Create Assessment Item
                    </button>
                </form>
            </div>
        </div>
    );

};

export default CreateAssessmentItem;