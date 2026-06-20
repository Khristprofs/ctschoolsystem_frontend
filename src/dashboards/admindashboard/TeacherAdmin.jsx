import { useEffect, useState } from "react";
import { fetchTeachers, deleteTeacher } from "../../services/teacherService";
import { Eye, Edit, Trash2, Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";

const TeacherAdmin = () => {
  const [teachers, setTeachers] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const loadTeachers = async () => {
    try {
      setLoading(true);
      const data = await fetchTeachers();
      setTeachers(data);
    } catch (err) {
      console.error("Failed to load teachers", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadTeachers();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this teacher?"))
      return;

    try {
      await deleteTeacher(id);
      loadTeachers();
    } catch (err) {
      console.error(err);
      alert("Failed to delete teacher");
    }
  };

  if (loading) {
    return <div className="text-center py-10">Loading teachers...</div>;
  }

  return (
    <div className="space-y-6">
      {/* HEADER */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">
          Teachers
        </h1>

        <button
          onClick={() => navigate("/admin/teachers/create")}
          className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          <Plus size={18} />
          Create Teacher
        </button>
      </div>

      {/* TABLE */}
      <div className="bg-white shadow rounded-xl overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-gray-100 text-gray-700 uppercase text-xs">
            <tr>
              <th className="px-6 py-4 text-left">Full Name</th>
              <th className="px-6 py-4 text-left">Level</th>
              <th className="px-6 py-4 text-left">Subjects</th>
              <th className="px-6 py-4 text-left">Specialization</th>
              <th className="px-6 py-4 text-center">Actions</th>
            </tr>
          </thead>

          <tbody className="divide-y">
            {teachers.map((teacher) => (
              <tr key={teacher.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 font-medium">
                  {teacher.fullName}
                </td>

                <td className="px-6 py-4">
                  {teacher.levelName}
                </td>

                <td className="px-6 py-4">
                  {teacher.subjects?.join(", ")}
                </td>

                <td className="px-6 py-4">
                  {teacher.specialization}
                </td>

                <td className="px-6 py-4">
                  <div className="flex justify-center gap-3">
                    <button
                      onClick={() =>
                        navigate(`/admin/teachers/${teacher.id}`)
                      }
                      className="text-blue-600 hover:text-blue-800"
                    >
                      <Eye size={18} />
                    </button>

                    <button
                      onClick={() =>
                        navigate(`/admin/teachers/edit/${teacher.id}`)
                      }
                      className="text-green-600 hover:text-green-800"
                    >
                      <Edit size={18} />
                    </button>

                    <button
                      onClick={() => handleDelete(teacher.id)}
                      className="text-red-600 hover:text-red-800"
                      title="Delete"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}

            {teachers.length === 0 && (
              <tr>
                <td
                  colSpan="5"
                  className="px-6 py-8 text-center text-gray-500"
                >
                  No teachers found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TeacherAdmin;