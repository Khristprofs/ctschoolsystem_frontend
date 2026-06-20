import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchUserById, updateUser } from "../../services/usersService";

const EditUser = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({});
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadUser = async () => {
      try {
        const data = await fetchUserById(id);
        setForm(data);
      } catch (err) {
        setError("Failed to load user");
      } finally {
        setLoading(false);
      }
    };
    loadUser();
  }, [id]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setSaving(true);
      await updateUser(id, form);
      navigate(`/admin/users/${id}`);
    } catch (err) {
      setError("Failed to update user");
    } finally {
      setSaving(false);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-600">{error}</p>;

  return (
    <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow">
      <h1 className="text-2xl font-bold mb-6">Edit User</h1>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">

        <Input label="Title" name="title" value={form.title || ""} onChange={handleChange} />
        <Input label="Surname" name="surname" value={form.surname || ""} onChange={handleChange} />
        <Input label="Middle Name" name="middlename" value={form.middlename || ""} onChange={handleChange} />
        <Input label="Last Name" name="lastname" value={form.lastname || ""} onChange={handleChange} />

        <Input label="Email" name="email" value={form.email || ""} onChange={handleChange} />
        <Input label="Phone" name="phone" value={form.phone || ""} onChange={handleChange} />
        <Input label="Address" name="address" value={form.address || ""} onChange={handleChange} />

        {/* ROLE BASED */}
        {form.role === "Teacher" && (
          <Input label="Staff Number" name="staffNo" value={form.staffNo || ""} onChange={handleChange} />
        )}

        {form.role === "Student" && (
          <Input label="Registration Number" name="regNo" value={form.regNo || ""} onChange={handleChange} />
        )}

        <div className="col-span-full flex gap-4 mt-4">
          <button
            disabled={saving}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
          >
            {saving ? "Saving..." : "Update User"}
          </button>

          <button
            type="button"
            onClick={() => navigate(-1)}
            className="px-6 py-2 rounded-lg border"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

const Input = ({ label, ...props }) => (
  <div>
    <label className="text-sm text-gray-600">{label}</label>
    <input
      {...props}
      className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
    />
  </div>
);

export default EditUser;
