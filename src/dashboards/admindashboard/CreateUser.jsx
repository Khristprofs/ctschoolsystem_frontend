import { createUser } from "../../services/usersService";
import UserForm from "./UserForm";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const CreateUser = () => {
    const navigate = useNavigate();

    const handleCreate = async (data) => {
        try {
            await createUser(data);
            toast.success("User created successfully");
            navigate("/admin/users");
        } catch (err) {
            toast.error(err.response?.data?.message || "Failed to create user");
        }
    };

    return (
        <div className="space-y-6">
            <h1 className="text-2xl font-bold">Create User</h1>
            <UserForm onSubmit={handleCreate} />
        </div>
    );
};

export default CreateUser;
