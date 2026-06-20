import React, { useEffect, useState } from "react";
import Select from "react-select";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateAttendance = () => {
    const navigate = useNavigate();

    const [students, setStudents] = useState([]);
    const [teachers, setTeachers] = useState([]);
    const [classes, setClasses] = useState([]);
    const [sessions, setSessions] = useState([]);
    const [terms, setTerms] = useState([]);
    const [statusOptions, setStatusOptions] = useState([]);

    const [selectedStudent, setSelectedStudent] = useState(null);
    const [selectedTeacher, setSelectedTeacher] = useState(null);
    const [selectedClass, setSelectedClass] = useState(null);
    const [selectedSession, setSelectedSession] = useState(null);
    const [selectedTerm, setSelectedTerm] = useState(null);
    const [selectedStatus, setSelectedStatus] = useState(null);

    const [date, setDate] = useState("");
    const [remarks, setRemarks] = useState("");

    useEffect(() => {
        fetchFormData();
    }, []);

    const fetchFormData = async () => {
        try {
            const res = await axios.get(
                "http://localhost:3001/api/v1/admin/attendance/form-data"
            );

            setStudents(res.data.students);
            setTeachers(res.data.teachers);
            setClasses(res.data.classes);
            setSessions(res.data.sessions);
            setTerms(res.data.terms);
            setStatusOptions(res.data.statusOptions);
        } catch (error) {
            console.error(error);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (
            !selectedStudent ||
            !selectedTeacher ||
            !selectedClass ||
            !selectedSession ||
            !selectedTerm ||
            !selectedStatus ||
            !date
        ) {
            return alert("All fields are required");
        }

        try {
            await axios.post(
                "http://localhost:3001/api/v1/admin/academics/attendance",
                {
                    studentId: selectedStudent.value,
                    klassId: selectedClass.value,
                    sessionId: selectedSession.value,
                    termId: selectedTerm.value,
                    markedBy: selectedTeacher.value,
                    date,
                    status: selectedStatus.value,
                    remarks,
                }
            );

            alert("Attendance created successfully");
            navigate("/admin/academics/attendance");
        } catch (error) {
            alert(error.response?.data?.message || "Error creating attendance");
        }
    };

    const selectStyle = {
        control: (base) => ({
            ...base,
            borderRadius: "12px",
            padding: "6px",
            borderColor: "#e5e7eb",
            "&:hover": { borderColor: "#4f46e5" },
        }),
    };

    return (
        <div className="min-h-screen bg-gray-50 flex justify-center items-center p-10">
            <div className="bg-white w-full max-w-3xl rounded-2xl shadow-xl p-10">
                <h2 className="text-3xl font-bold mb-8 text-gray-800">
                    Create Attendance
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">

                    {/* Student */}
                    <Select
                        options={students}
                        value={selectedStudent}
                        onChange={setSelectedStudent}
                        placeholder="Select student"
                        styles={selectStyle}
                    />

                    {/* Class */}
                    <Select
                        options={classes}
                        value={selectedClass}
                        onChange={setSelectedClass}
                        placeholder="Select class"
                        styles={selectStyle}
                    />

                    {/* Session */}
                    <Select
                        options={sessions}
                        value={selectedSession}
                        onChange={setSelectedSession}
                        placeholder="Select session"
                        styles={selectStyle}
                    />

                    {/* Term */}
                    <Select
                        options={terms}
                        value={selectedTerm}
                        onChange={setSelectedTerm}
                        placeholder="Select term"
                        styles={selectStyle}
                    />

                    {/* Teacher */}
                    <Select
                        options={teachers}
                        value={selectedTeacher}
                        onChange={setSelectedTeacher}
                        placeholder="Select teacher"
                        styles={selectStyle}
                    />

                    {/* Status (NOW SELECT ✅) */}
                    <Select
                        options={statusOptions}
                        value={selectedStatus}
                        onChange={setSelectedStatus}
                        placeholder="Select status"
                        styles={selectStyle}
                    />

                    {/* Date */}
                    <input
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className="w-full border rounded-xl px-4 py-3"
                    />

                    {/* Remarks */}
                    <textarea
                        value={remarks}
                        onChange={(e) => setRemarks(e.target.value)}
                        className="w-full border rounded-xl px-4 py-3"
                        placeholder="Optional remarks..."
                    />

                    <button className="w-full bg-indigo-600 text-white py-3 rounded-xl">
                        Create Attendance
                    </button>
                </form>
            </div>
        </div>
    );
};

export default CreateAttendance;