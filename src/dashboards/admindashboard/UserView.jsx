import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../../config/axios";
import { ArrowLeft } from "lucide-react";

const UserView = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const res = await api.get(`/admin/users/${id}`);
                setUser(res.data.data);
            } catch (err) {
                console.error(err);
                setError("Failed to load user details");
            } finally {
                setLoading(false);
            }
        };

        fetchUser();
    }, [id]);

    if (loading) return <p className="text-gray-500">Loading user...</p>;
    if (error) return <p className="text-red-500">{error}</p>;

    return (
        <div className="space-y-6">
            <button
                onClick={() => navigate(-1)}
                className="flex items-center gap-2 text-blue-600 hover:underline"
            >
                <ArrowLeft size={18} />
                Back
            </button>

            <div className="bg-white rounded-xl shadow p-6">
                <h1 className="text-2xl font-bold text-gray-800 mb-6">
                    User Details
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                    <Detail label="Title" value={user.title} />
                    <Detail label="Surname" value={user.surname} />
                    <Detail label="Middle Name" value={user.middlename} />
                    <Detail label="Last Name" value={user.lastname} />
                    <Detail label="Email" value={user.email} />
                    <Detail label="Role" value={user.role} />
                    <Detail label="Phone" value={user.phone} />
                    <Detail label="Address" value={user.address} />
                    {user.role === "Teacher" && (
                        <Detail label="Staff Number" value={user.staffNo} />
                    )}
                    {user.role === "Student" && (
                        <Detail label="Registration Number" value={user.regNo} />
                    )}
                    <Detail
                        label="Status"
                        value={user.active ? "Active" : "Inactive"}
                    />
                    <Detail
                        label="Created At"
                        value={new Date(user.createdAt).toLocaleString()}
                    />

                </div>

            </div>
        </div>
    );
};

const Detail = ({ label, value }) => (
    <div>
        <p className="text-gray-500">{label}</p>
        <p className="font-medium text-gray-800">{value || "-"}</p>
    </div>
);

export default UserView;
