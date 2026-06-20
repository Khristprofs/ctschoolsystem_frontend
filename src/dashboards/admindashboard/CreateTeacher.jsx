import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import {
  fetchTeacherUsers,
  fetchLevels,
  createTeacher
} from "../../services/teacherService";

const CreateTeacher = () => {
  const navigate = useNavigate();

  const [users, setUsers] = useState([]);
  const [levels, setLevels] = useState([]);

  const [searchUser, setSearchUser] = useState("");
  const [searchLevel, setSearchLevel] = useState("");

  const [showUserDropdown, setShowUserDropdown] = useState(false);
  const [showLevelDropdown, setShowLevelDropdown] = useState(false);

  const userRef = useRef();
  const levelRef = useRef();

  const [form, setForm] = useState({
    userId: "",
    levelId: "",
    subjects: "",
    specialization: ""
  });

  const [saving, setSaving] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      const teacherUsers = await fetchTeacherUsers();
      const levelData = await fetchLevels();
      setUsers(teacherUsers);
      setLevels(levelData);
    };
    loadData();
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (userRef.current && !userRef.current.contains(e.target)) {
        setShowUserDropdown(false);
      }
      if (levelRef.current && !levelRef.current.contains(e.target)) {
        setShowLevelDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const filteredUsers = users.filter(u =>
    u.fullName.toLowerCase().includes(searchUser.toLowerCase())
  );

  const filteredLevels = levels.filter(l =>
    l.name.toLowerCase().includes(searchLevel.toLowerCase())
  );

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.userId) return alert("Please select a teacher");
    if (!form.levelId) return alert("Please select a level");

    try {
      setSaving(true);

      await createTeacher({
        ...form,
        subjects: form.subjects.split(",").map(s => s.trim())
      });

      navigate("/admin/teachers");

    } catch (err) {
      alert(err.response?.data?.message || "Failed to create teacher");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">
        Create Teacher
      </h1>

      <div className="bg-white shadow rounded-xl p-8">
        <form onSubmit={handleSubmit} className="space-y-6">

          {/* USER DROPDOWN */}
          <div ref={userRef} className="relative">
            <label className="block text-sm font-medium mb-2">
              Select Teacher (User)
            </label>

            <input
              type="text"
              placeholder="Search teacher..."
              value={searchUser}
              onFocus={() => setShowUserDropdown(true)}
              onChange={(e) => {
                setSearchUser(e.target.value);
                setShowUserDropdown(true);
              }}
              className="w-full border rounded-lg px-4 py-2"
            />

            {showUserDropdown && (
              <div className="absolute z-10 w-full bg-white border rounded-lg mt-1 max-h-40 overflow-y-auto shadow">
                {filteredUsers.length === 0 && (
                  <div className="px-4 py-2 text-gray-500">
                    No teachers found
                  </div>
                )}
                {filteredUsers.map(user => (
                  <div
                    key={user.id}
                    onClick={() => {
                      setForm({ ...form, userId: user.id });
                      setSearchUser(`${user.fullName} (${user.staffNo})`);
                      setShowUserDropdown(false);
                    }}
                    className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                  >
                    {user.fullName} ({user.staffNo})
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* LEVEL DROPDOWN */}
          <div ref={levelRef} className="relative">
            <label className="block text-sm font-medium mb-2">
              Select Level
            </label>

            <input
              type="text"
              placeholder="Search level..."
              value={searchLevel}
              onFocus={() => setShowLevelDropdown(true)}
              onChange={(e) => {
                setSearchLevel(e.target.value);
                setShowLevelDropdown(true);
              }}
              className="w-full border rounded-lg px-4 py-2"
            />

            {showLevelDropdown && (
              <div className="absolute z-10 w-full bg-white border rounded-lg mt-1 max-h-40 overflow-y-auto shadow">
                {filteredLevels.length === 0 && (
                  <div className="px-4 py-2 text-gray-500">
                    No levels found
                  </div>
                )}
                {filteredLevels.map(level => (
                  <div
                    key={level._id}
                    onClick={() => {
                      setForm({ ...form, levelId: level._id });
                      setSearchLevel(level.name);
                      setShowLevelDropdown(false);
                    }}
                    className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                  >
                    {level.name}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* SUBJECTS */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Subjects (comma separated)
            </label>
            <input
              type="text"
              value={form.subjects}
              onChange={(e) =>
                setForm({ ...form, subjects: e.target.value })
              }
              required
              className="w-full border rounded-lg px-4 py-2"
            />
          </div>

          {/* SPECIALIZATION */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Specialization
            </label>
            <input
              type="text"
              value={form.specialization}
              onChange={(e) =>
                setForm({ ...form, specialization: e.target.value })
              }
              required
              className="w-full border rounded-lg px-4 py-2"
            />
          </div>

          <button
            type="submit"
            disabled={saving}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 disabled:opacity-50"
          >
            {saving ? "Creating..." : "Create Teacher"}
          </button>

        </form>
      </div>
    </div>
  );
};

export default CreateTeacher;