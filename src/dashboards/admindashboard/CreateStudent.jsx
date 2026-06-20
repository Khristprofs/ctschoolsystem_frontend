import React, { useEffect, useState } from "react";
import Select from "react-select";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateStudent = () => {
  const navigate = useNavigate();

  const [students, setStudents] = useState([]);
  const [parents, setParents] = useState([]);
  const [classes, setClasses] = useState([]);

  const [selectedStudent, setSelectedStudent] = useState(null);
  const [selectedParent, setSelectedParent] = useState(null);
  const [selectedClass, setSelectedClass] = useState(null);

  const [regNo, setRegNo] = useState("");

  useEffect(() => {
    fetchFormData();
  }, []);

  const fetchFormData = async () => {
    try {
      const res = await axios.get(
        "http://localhost:3001/api/v1/admin/form-data"
      );

      setStudents(res.data.students);
      setParents(res.data.parents);
      setClasses(res.data.classes);
    } catch (error) {
      console.error(error);
    }
  };

  const handleStudentChange = (student) => {
    setSelectedStudent(student);
    setRegNo(student?.regNo || "");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!selectedStudent || !selectedParent || !selectedClass) {
      return alert("All fields are required");
    }

    try {
      await axios.post(
        "http://localhost:3001/api/v1/admin/students",
        {
          userId: selectedStudent.value,
          klassId: selectedClass.value,
          parentId: selectedParent.value,
          regNo: regNo,
        }
      );

      navigate("/admin/students");
    } catch (error) {
      alert(error.response?.data?.message || "Error creating student");
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
          Create Student
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">

          <div>
            <label className="block mb-2 font-medium">
              Select Student
            </label>
            <Select
              options={students}
              value={selectedStudent}
              onChange={handleStudentChange}
              placeholder="Search student..."
              isSearchable
              styles={selectStyle}
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Registration Number
            </label>
            <input
              type="text"
              value={regNo}
              readOnly
              className="w-full bg-gray-100 border rounded-xl px-4 py-3 cursor-not-allowed"
            />
          </div>

          {/* Parent */}
          <div>
            <label className="block mb-2 font-medium">
              Select Parent
            </label>
            <Select
              options={parents}
              value={selectedParent}
              onChange={setSelectedParent}
              placeholder="Search parent..."
              isSearchable
              styles={selectStyle}
            />
          </div>

          {/* Class */}
          <div>
            <label className="block mb-2 font-medium">
              Select Class
            </label>
            <Select
              options={classes}
              value={selectedClass}
              onChange={setSelectedClass}
              placeholder="Search class..."
              isSearchable
              styles={selectStyle}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-3 rounded-xl font-semibold hover:bg-indigo-700 transition duration-300"
          >
            Create Student
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateStudent;
