import { useEffect, useState } from "react";
import { getParentDashboard } from "../../services/parentDashboardService";

const ParentDashboardHome = () => {
    const [parent, setParent] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadData();
    }, []);

    const loadData = async () => {
        try {
            const res = await getParentDashboard();

            if (res.success) {
                setParent(res.data.student);
            }
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return (
            <div className="flex justify-center items-center h-[300px]">
                <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
            </div>
        );
    }

    return (
        <div className="space-y-8">

            <div className="bg-linear-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white shadow-lg">
                <h1 className="text-3xl font-bold">
                    Welcome Back,
                    {" "}
                    {parent?.lastname}
                </h1>
                <p className="mt-2 text-blue-100">Here's an overview of your profile.</p>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-4 gap-6 items-start">
                {/* Profile Card */}
                <div className="bg-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 p-8 self-start">
                    <div className="flex flex-col items-center text-center">

                        <div className="relative">
                            <img
                                src={
                                    parent?.profile?.img ||
                                    "https://plus.unsplash.com/premium_photo-1681505220220-410658c008da?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c2Vjb25kYXJ5JTIwc2Nob29sJTIwc3R1ZGVudCUyMGltYWdlfGVufDB8fDB8fHww"
                                }
                                alt="profile"
                                className="w-32 h-32 rounded-full object-cover border-4 border-blue-100 shadow-md"
                            />

                            <span className="absolute bottom-1 right-1 w-5 h-5 rounded-full bg-green-500 border-2 border-white"></span>
                        </div>

                        <h2 className="mt-5 text-2xl font-bold text-slate-800 leading-tight">
                            {parent?.fullname}
                        </h2>

                        <span className="mt-2 inline-flex items-center rounded-full bg-blue-100 px-4 py-1 text-sm font-medium text-blue-700 capitalize">
                            {parent?.role}
                        </span>

                    </div>
                </div>

                {/* Information Cards */}
                <div className="xl:col-span-3 grid sm:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-4 gap-4 items-start">
                    {/* Phone */}
                    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 px-5 py-2.5 self-start">
                        <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">
                            Phone
                        </p>
                        <h3 className="mt-1 text-base font-semibold text-slate-800 break-all">
                            {parent?.phone || "-"}
                        </h3>
                    </div>

                    {/* Email */}
                    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 px-5 py-2.5 self-start">
                        <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">
                            Email Address
                        </p>
                        <h3
                            className="mt-1 text-sm font-semibold text-slate-800 wrap-break-word"
                            title={parent?.email}
                        >
                            {parent?.email || "-"}
                        </h3>
                    </div>
                    {/* Personal & Contact Information */}
                    <div className="grid lg:grid-cols-2 gap-6">

                        {/* Personal Information */}
                        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 p-6">
                            <h2 className="text-lg font-bold text-slate-800 mb-5">
                                Personal Information
                            </h2>

                            <div className="space-y-4">

                                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                                    <span className="text-slate-500">
                                        Date of Birth
                                    </span>

                                    <span className="font-semibold text-slate-800">
                                        {parent?.profile?.DOB || "N/A"}
                                    </span>
                                </div>

                            </div>
                        </div>

                        {/* Contact Information */}
                        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 p-6">
                            <h2 className="text-lg font-bold text-slate-800 mb-5">
                                Contact Information
                            </h2>

                            <div className="space-y-4">

                                <div className="border-b border-slate-100 pb-3">
                                    <p className="text-slate-500 text-sm">
                                        Home Address
                                    </p>

                                    <p className="font-semibold text-slate-800 mt-1 leading-6">
                                        {parent?.address || "N/A"}
                                    </p>
                                </div>

                                <div>
                                    <p className="text-slate-500 text-sm">
                                        Contact Address
                                    </p>
                                    <p className="font-semibold text-slate-800 mt-1 leading-6">
                                        {parent?.profile?.contactAddress || "N/A"}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* About Me */}
                    <div className="bg-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 p-6">
                        <h2 className="text-lg font-bold text-slate-800 mb-4">
                            About Me
                        </h2>
                        <p className="text-slate-600 leading-8">
                            {parent?.profile?.bio || "No bio available."}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ParentDashboardHome;