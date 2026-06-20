import React, { useEffect, useState } from "react";
import Select from "react-select";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateSubject = () => {
  const navigate = useNavigate();

  const [teachers, setTeachers] = useState([]);
  const [classes, setClasses] = useState([]);

  const [selectedTeacher, setSelectedTeacher] = useState(null);
  const [selectedClass, setSelectedClass] = useState(null);

  const [name, setName] = useState("");

  useEffect(() => {
    fetchFormData();
  }, []);

  const fetchFormData = async () => {
    try {
      const res = await axios.get(
        "http://localhost:3001/api/v1/admin/subjects/form-data"
      );

      const teacherOptions = res.data.teachers.map((t) => ({
        value: t._id,
        label: t.teacherName,
      }));

      const classOptions = res.data.classes.map((c) => ({
        value: c._id,
        label: c.name,
      }));

      setTeachers(teacherOptions);
      setClasses(classOptions);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !selectedTeacher || !selectedClass) {
      return alert("All fields are required");
    }

    try {
      await axios.post(
        "http://localhost:3001/api/v1/admin/academics/subjects",
        {
          name: name,
          klassId: selectedClass.value,
          teacherId: selectedTeacher.value,
        }
      );

      navigate("/admin/academics/subjects");
    } catch (error) {
      alert(error.response?.data?.message || "Error creating subject");
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
          Create Subject
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">

          <div>
            <label className="block mb-2 font-medium">
              Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-gray-100 border rounded-xl px-4 py-3 "
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Select Teacher
            </label>
            <Select
              options={teachers}
              value={selectedTeacher}
              onChange={setSelectedTeacher}
              placeholder="Search teacher..."
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
            Create Subject
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateSubject;
