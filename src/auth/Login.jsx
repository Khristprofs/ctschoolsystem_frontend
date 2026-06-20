import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext";
import Input from "../components/InputLogin";
import { Lock, Mail } from "lucide-react";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const user = await login(data);

      switch (user.role) {

        case "Admin":
          navigate("/admin");
          break;

        case "School_admin":
          navigate("/school-admin");
          break;

        case "Student":
          navigate("/student");
          break;

        default:
          navigate("/");
      }
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 to-indigo-100 flex items-center justify-center px-4 mt-9">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
        <div className="text-center mb-8">
          <div className="mx-auto w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center mb-4">
            <Lock className="text-white w-7 h-7" />
          </div>
          <h1 className="text-2xl font-bold text-gray-800">Welcome Back</h1>
          <p className="text-sm text-gray-500">
            Login to Christ the Great School Portal
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <Input
            label="Email Address"
            type="email"
            icon={<Mail />}
            {...register("email", { required: "Email is required" })}
            error={errors.email?.message}
          />

          <Input
            label="Password"
            type="password"
            {...register("password", { required: "Password is required" })}
            error={errors.password?.message}
          />

          <button
            disabled={isSubmitting}
            className="w-full py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition disabled:opacity-60"
          >
            {isSubmitting ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
