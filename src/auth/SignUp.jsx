import { useForm } from "react-hook-form";
import { signupUser } from "../services/authService";
import { toast } from "react-toastify";
import Input from "../components/Input";
import { UserPlus } from "lucide-react";

const roles = [
  "Admin",
  "School_admin",
  "Properietor",
  "Properietress",
  "Principal",
  "Vice_principal",
  "Headteacher",
  "Vice_headteacher",
  "Bursar",
  "Auditor",
  "Dean_of_study",
  "Teacher",
  "Student",
  "Parent",
];

const Signup = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const selectedRole = watch("role");

  const onSubmit = async (data) => {
    try {
      await signupUser(data.role, data);
      toast.success("Account created successfully");
      reset();
    } catch (error) {
      toast.error(error.response?.data?.message || error.message);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 mt-16">
      <div className="w-full max-w-3xl bg-white shadow-xl rounded-2xl p-8">
        <div className="flex items-center gap-3 mb-6">
          <UserPlus className="w-8 h-8 text-blue-600" />
          <h1 className="text-2xl font-bold text-gray-800">
            Create Account
          </h1>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="grid md:grid-cols-2 gap-6">
          <Input label="Title" {...register("title")} />
          <Input label="Surname" {...register("surname", { required: "Required" })} error={errors.surname?.message} />
          <Input label="Middle Name" {...register("middlename", { required: "Required" })} error={errors.middlename?.message} />
          <Input label="Last Name" {...register("lastname", { required: "Required" })} error={errors.lastname?.message} />
          <Input label="Email" type="email" {...register("email", { required: "Required" })} error={errors.email?.message} />
          <Input label="Phone" {...register("phone", { required: "Required" })} error={errors.phone?.message} />
          <Input label="Password" type="password" {...register("password", { required: "Required" })} error={errors.password?.message} />

          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium">Role</label>
            <select
              {...register("role", { required: "Select role" })}
              className="px-4 py-2 border rounded-lg"
            >
              <option value="">Select Role</option>
              {roles.map((r) => (
                <option key={r} value={r}>{r}</option>
              ))}
            </select>
            {errors.role && <span className="text-xs text-red-500">{errors.role.message}</span>}
          </div>

          {(selectedRole === "Teacher" || selectedRole === "Principal") && (
            <>
              <Input label="Staff Number" {...register("staffNo", { required: "Required" })} />
              <Input label="Address" {...register("address", { required: "Required" })} />
            </>
          )}

          {selectedRole === "Student" && (
            <>
              <Input label="Registration Number" {...register("regNo", { required: "Required" })} />
              <Input label="Address" {...register("address", { required: "Required" })} />
            </>
          )}

          <div className="md:col-span-2">
            <button
              disabled={isSubmitting}
              className="w-full py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
            >
              {isSubmitting ? "Creating Account..." : "Sign Up"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
