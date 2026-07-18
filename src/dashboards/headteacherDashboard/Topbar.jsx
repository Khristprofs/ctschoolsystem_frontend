import { useAuth } from "../../context/authContext";

const Topbar = () => {
  const { user, logout } = useAuth();

  return (
    <header className="bg-white shadow-sm px-6 py-4 flex justify-between items-center">
      <h2 className="font-semibold text-gray-700">Principal Dashboard</h2>

      <div className="flex items-center gap-4">
        <span className="text-sm text-gray-600">
          {user?.surname} ({user?.role})
        </span>
        <button
          onClick={logout}
          className="text-sm bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
        >
          Logout
        </button>
      </div>
    </header>
  );
};

export default Topbar;
