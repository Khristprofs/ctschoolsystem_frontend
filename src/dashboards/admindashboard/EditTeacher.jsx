import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchTeacherById, updateTeacher } from "../../services/teacherService";
import { ArrowLeft, Save } from "lucide-react";

const EditTeacher = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [teacher, setTeacher] = useState(null);
  const [form, setForm] = useState({
    levelName: "",
    specialization: "",
    subjects: ""
  });

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    const loadTeacher = async () => {
      try {
        const data = await fetchTeacherById(id);
        setTeacher(data);

        setForm({
          levelName: data.levelName || "",
          specialization: data.specialization || "",
          subjects: data.subjects || ""
        });

      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadTeacher();
  }, [id]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setSaving(true);

      await updateTeacher(id, form);

      alert("Teacher updated successfully");
      navigate("/admin/teachers");

    } catch (err) {
      alert(err.response?.data?.message || "Update failed");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return <div className="text-center py-10">Loading teacher...</div>;
  }

  if (!teacher) {
    return <div className="text-center py-10">Teacher not found</div>;
  }

  return (
    <div className="max-w-3xl mx-auto space-y-6">

      {/* HEADER */}
      <div className="flex items-center gap-4">
        <button
          onClick={() => navigate(-1)}
          className="p-2 rounded-lg hover:bg-gray-100"
        >
          <ArrowLeft size={20} />
        </button>
        <h1 className="text-2xl font-bold text-gray-800">
          Edit Teacher
        </h1>
      </div>

      {/* CARD */}
      <div className="bg-white shadow rounded-xl p-8">

        {/* READ ONLY USER DETAILS */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Detail label="Teacher Name" value={teacher.teacherName} />
          <Detail label="Staff No" value={teacher.staffNo} />
          <Detail label="Email" value={teacher.email} />
          <Detail label="Phone" value={teacher.phone} />
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Level Name
            </label>
            <input
              type="text"
              name="levelName"
              value={form.levelName}
              onChange={handleChange}
              required
              className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Specialization
            </label>
            <input
              type="text"
              name="specialization"
              value={form.specialization}
              onChange={handleChange}
              required
              className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Subjects (comma separated)
            </label>
            <input
              type="text"
              name="subjects"
              value={form.subjects}
              onChange={handleChange}
              required
              className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <button
            type="submit"
            disabled={saving}
            className="flex items-center gap-2 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition disabled:opacity-50"
          >
            <Save size={18} />
            {saving ? "Saving..." : "Update Teacher"}
          </button>

        </form>
      </div>
    </div>
  );
};

const Detail = ({ label, value }) => (
  <div>
    <p className="text-xs text-gray-500">{label}</p>
    <p className="font-medium text-gray-800 mt-1">{value}</p>
  </div>
);

export default EditTeacher;