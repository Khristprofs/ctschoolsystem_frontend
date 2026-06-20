import { useEffect, useState } from "react";
import { fetchUsers, deleteUser } from "../../services/usersService";
import { Eye, Edit, Trash2, Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";

const UsersAdmin = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const loadUsers = async () => {
        try {
            setLoading(true);
            const usersData = await fetchUsers();
            setUsers(Array.isArray(usersData) ? usersData : []);
        } catch (err) {
            console.error(err);
            setError("Failed to load users");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        loadUsers();
    }, []);

    const handleDelete = async (id) => {
        if (!window.confirm("Are you sure you want to delete this user?")) return;
        try {
            await deleteUser(id);
            loadUsers();
        } catch (err) {
            console.error(err);
            alert("Failed to delete user");
        }
    };

    if (loading) return <p className="text-gray-500">Loading users...</p>;
    if (error) return <p className="text-red-500">{error}</p>;

    return (
        <div className="space-y-6">

            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold text-gray-800">Users</h1>

                <button 
                onClick={() => navigate("/admin/users/create")}
                className="flex items-center gap-2 bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition">
                    <Plus size={18} />
                    Create User
                </button>
            </div>

            <div className="bg-white rounded-xl shadow overflow-x-auto">
                <table className="w-full text-sm">
                    <thead className="bg-gray-50 text-gray-600">
                        <tr>
                            <th className="px-6 py-4 text-left">Title</th>
                            <th className="px-6 py-4 text-left">Surname</th>
                            <th className="px-6 py-4 text-left">Middlename</th>
                            <th className="px-6 py-4 text-left">Lastname</th>
                            <th className="px-6 py-4 text-left">Email</th>
                            <th className="px-6 py-4 text-left">Role</th>
                            <th className="px-6 py-4 text-left">Status</th>
                            <th className="px-6 py-4 text-right">Actions</th>
                        </tr>
                    </thead>

                    <tbody className="divide-y">
                        {users.length > 0 ? (
                            users.map((user) => (
                                <tr key={user._id} className="hover:bg-gray-50">
                                    <td className="px-6 py-4">{user.title || "-"}</td>
                                    <td className="px-6 py-4 font-medium">
                                        {user.surname || "-"}
                                    </td>
                                    <td className="px-6 py-4">
                                        {user.middlename || "-"}
                                    </td>
                                    <td className="px-6 py-4">
                                        {user.lastname || "-"}
                                    </td>
                                    <td className="px-6 py-4 text-gray-600">
                                        {user.email}
                                    </td>
                                    <td className="px-6 py-4 capitalize">
                                        {user.role}
                                    </td>
                                    <td className="px-6 py-4">
                                        <span
                                            className={`px-3 py-1 rounded-full text-xs font-medium
                                                ${user.isActive
                                                    ? "bg-green-100 text-green-700"
                                                    : "bg-red-100 text-red-700"
                                                }`}
                                        >
                                            {user.isActive ? "Active" : "Inactive"}
                                        </span>
                                    </td>

                                    <td className="px-6 py-4 flex justify-end gap-3">
                                        <button
                                            onClick={() => navigate(`/admin/users/${user._id}`)}
                                            className="text-blue-600 hover:text-blue-800"
                                            title="View"
                                        >
                                            <Eye size={18} />
                                        </button>


                                        <button
                                            onClick={() => navigate(`/admin/users/${user._id}/edit`)}
                                            className="text-yellow-600 hover:text-yellow-700"
                                            title="Edit"
                                        >
                                            <Edit size={18} />
                                        </button>

                                        <button
                                            onClick={() => handleDelete(user._id)}
                                            className="text-red-600 hover:text-red-700"
                                            title="Delete"
                                        >
                                            <Trash2 size={18} />
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td
                                    colSpan="8"
                                    className="text-center py-10 text-gray-500"
                                >
                                    No users found.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default UsersAdmin;