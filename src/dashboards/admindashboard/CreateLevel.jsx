import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import {
  fetchTerms,
  fetchSessions,
  createLevel
} from "../../services/academicService";

const CreateLevel = () => {
  const navigate = useNavigate();

  const [terms, setTerms] = useState([]);
  const [sessions, setSessions] = useState([]);

  const [loading, setLoading] = useState(true);

  const [searchTerm, setSearchTerm] = useState("");
  const [searchSession, setSearchSession] = useState("");

  const [showTermDropdown, setShowTermDropdown] = useState(false);
  const [showSessionDropdown, setShowSessionDropdown] = useState(false);

  const termRef = useRef(null);
  const sessionRef = useRef(null);

  const [form, setForm] = useState({
    name: "",
    termId: "",
    sessionId: "",
  });

  const [saving, setSaving] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      try {
        const termRes = await fetchTerms();
        const sessionRes = await fetchSessions();

        // Ensure arrays
        setTerms(Array.isArray(termRes) ? termRes : termRes?.terms || []);
        setSessions(
          Array.isArray(sessionRes) ? sessionRes : sessionRes?.sessions || []
        );

      } catch (err) {
        console.error("Failed to load terms/sessions", err);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);


  useEffect(() => {
    const handleClickOutside = (e) => {
      if (termRef.current && !termRef.current.contains(e.target)) {
        setShowTermDropdown(false);
      }

      if (sessionRef.current && !sessionRef.current.contains(e.target)) {
        setShowSessionDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);


  const filteredTerms = (terms || []).filter((t) =>
    t.name?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredSessions = (sessions || []).filter((s) =>
    s.name?.toLowerCase().includes(searchSession.toLowerCase())
  );


  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.termId) {
      alert("Please select a term");
      return;
    }

    if (!form.sessionId) {
      alert("Please select a session");
      return;
    }

    try {
      setSaving(true);

      await createLevel(form);

      navigate("/admin/academics/levels");

    } catch (err) {
      console.error(err);
      alert(err.response?.data?.message || "Failed to create level");
    } finally {
      setSaving(false);
    }
  };


  if (loading) {
    return (
      <div className="flex justify-center py-20 text-gray-500">
        Loading data...
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto space-y-6">

      <h1 className="text-2xl font-bold text-gray-800">
        Create Level
      </h1>

      <div className="bg-white shadow-lg rounded-xl p-8">

        <form onSubmit={handleSubmit} className="space-y-6">

          {/* LEVEL NAME */}

          <div>
            <label className="block text-sm font-medium mb-1">
              Level Name
            </label>

            <input
              type="text"
              value={form.name}
              onChange={(e) =>
                setForm({ ...form, name: e.target.value })
              }
              required
              className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="e.g Primary School"
            />
          </div>

          {/* TERM SELECT */}

          <div ref={termRef} className="relative">

            <label className="block text-sm font-medium mb-2">
              Select Term
            </label>

            <input
              type="text"
              placeholder="Search term..."
              value={searchTerm}
              onFocus={() => setShowTermDropdown(true)}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setShowTermDropdown(true);
              }}
              className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
            />

            {showTermDropdown && (
              <div className="absolute z-10 w-full bg-white border rounded-lg mt-1 max-h-40 overflow-y-auto shadow">

                {filteredTerms.length === 0 && (
                  <div className="px-4 py-2 text-gray-500">
                    No term found
                  </div>
                )}

                {filteredTerms.map((term) => (
                  <div
                    key={term._id}
                    onClick={() => {
                      setForm({ ...form, termId: term._id });
                      setSearchTerm(term.name);
                      setShowTermDropdown(false);
                    }}
                    className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                  >
                    {term.name}
                  </div>
                ))}

              </div>
            )}
          </div>

          {/* SESSION SELECT */}

          <div ref={sessionRef} className="relative">

            <label className="block text-sm font-medium mb-2">
              Select Session
            </label>

            <input
              type="text"
              placeholder="Search session..."
              value={searchSession}
              onFocus={() => setShowSessionDropdown(true)}
              onChange={(e) => {
                setSearchSession(e.target.value);
                setShowSessionDropdown(true);
              }}
              className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
            />

            {showSessionDropdown && (
              <div className="absolute z-10 w-full bg-white border rounded-lg mt-1 max-h-40 overflow-y-auto shadow">

                {filteredSessions.length === 0 && (
                  <div className="px-4 py-2 text-gray-500">
                    No session found
                  </div>
                )}

                {filteredSessions.map((session) => (
                  <div
                    key={session._id}
                    onClick={() => {
                      setForm({ ...form, sessionId: session._id });
                      setSearchSession(session.name);
                      setShowSessionDropdown(false);
                    }}
                    className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                  >
                    {session.name}
                  </div>
                ))}

              </div>
            )}
          </div>

          {/* SUBMIT */}

          <button
            type="submit"
            disabled={saving}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 disabled:opacity-50 transition"
          >
            {saving ? "Creating..." : "Create Level"}
          </button>

        </form>

      </div>
    </div>
  );
};

export default CreateLevel;