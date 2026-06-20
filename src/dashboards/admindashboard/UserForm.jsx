import { useForm } from "react-hook-form";
import { Mail, Phone, ShieldCheck, MapPin } from "lucide-react";

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

const UserForm = ({ defaultValues = {}, onSubmit, loading }) => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm({ defaultValues });

    const role = watch("role");

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="max-w-5xl mx-auto bg-white rounded-2xl shadow-sm border"
        >
            <div className="px-8 py-6 border-b">
                <h2 className="text-xl font-semibold text-gray-800">
                    User Information
                </h2>
                <p className="text-sm text-gray-500 mt-1">
                    Complete the form below to create or update a user
                </p>
            </div>

            <div className="p-8 space-y-10">
                <section>
                    <h3 className="form-section-title">Personal Details</h3>

                    <div className="grid md:grid-cols-4 gap-6">
                        <div>
                            <label className="form-label">Title</label>
                            <input {...register("title")} className="form-input" />
                        </div>

                        <div>
                            <label className="form-label">Surname *</label>
                            <input
                                {...register("surname", { required: "Surname is required" })}
                                className="form-input"
                            />
                            {errors.surname && <p className="form-error">{errors.surname.message}</p>}
                        </div>

                        <div>
                            <label className="form-label">Middle Name</label>
                            <input {...register("middlename")} className="form-input" />
                        </div>

                        <div>
                            <label className="form-label">Last Name *</label>
                            <input
                                {...register("lastname", { required: "Last name is required" })}
                                className="form-input"
                            />
                            {errors.lastname && <p className="form-error">{errors.lastname.message}</p>}
                        </div>
                    </div>
                </section>

                {/* CONTACT */}
                <section>
                    <h3 className="form-section-title">Contact Information</h3>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <label className="form-label flex gap-2 items-center">
                                <Mail size={16} /> Email *
                            </label>
                            <input
                                type="email"
                                {...register("email", { required: "Email is required" })}
                                className="form-input"
                            />
                            {errors.email && <p className="form-error">{errors.email.message}</p>}
                        </div>

                        <div>
                            <label className="form-label flex gap-2 items-center">
                                <Phone size={16} /> Phone *
                            </label>
                            <input
                                {...register("phone", { required: "Phone number is required" })}
                                className="form-input"
                            />
                            {errors.phone && <p className="form-error">{errors.phone.message}</p>}
                        </div>
                    </div>

                    <div className="mt-6">
                        <label className="form-label flex gap-2 items-center">
                            <MapPin size={16} /> Address *
                        </label>
                        <textarea
                            rows="3"
                            {...register("address", { required: "Address is required" })}
                            className="form-input resize-none"
                        />
                        {errors.address && <p className="form-error">{errors.address.message}</p>}
                    </div>
                </section>

                {/* SECURITY */}
                <section>
                    <h3 className="form-section-title">Security & Role</h3>

                    <div className="grid md:grid-cols-2 gap-6">
                        {!defaultValues._id && (
                            <div>
                                <label className="form-label">Password *</label>
                                <input
                                    type="password"
                                    {...register("password", { required: "Password is required" })}
                                    className="form-input"
                                />
                                {errors.password && <p className="form-error">{errors.password.message}</p>}
                            </div>
                        )}

                        <div>
                            <label className="form-label flex gap-2 items-center">
                                <ShieldCheck size={16} /> Role *
                            </label>
                            <select
                                {...register("role", { required: "Role is required" })}
                                className="form-select"
                            >
                                <option value="">Select role</option>
                                {roles.map((r) => (
                                    <option key={r} value={r}>{r}</option>
                                ))}
                            </select>
                            {errors.role && <p className="form-error">{errors.role.message}</p>}
                        </div>
                    </div>
                </section>

                {/* ROLE-SPECIFIC */}
                {role === "Teacher" && (
                    <section>
                        <h3 className="form-section-title">Staff Information</h3>
                        <input
                            {...register("staffNo", { required: "Staff number is required" })}
                            className="form-input"
                            placeholder="Staff Number"
                        />
                        {errors.staffNo && <p className="form-error">{errors.staffNo.message}</p>}
                    </section>
                )}

                {role === "Student" && (
                    <section>
                        <h3 className="form-section-title">Student Information</h3>
                        <input
                            {...register("regNo", { required: "Registration number is required" })}
                            className="form-input"
                            placeholder="Registration Number"
                        />
                        {errors.regNo && <p className="form-error">{errors.regNo.message}</p>}
                    </section>
                )}
            </div>

            {/* FOOTER */}
            <div className="px-8 py-6 border-t bg-gray-50 flex justify-end rounded-b-2xl">
                <button
                    disabled={loading}
                    className="px-10 py-3 bg-blue-600 text-white rounded-lg font-semibold
                    hover:bg-blue-700 transition disabled:opacity-50"
                >
                    {loading ? "Saving..." : "Save User"}
                </button>
            </div>
        </form>
    );
};

export default UserForm;