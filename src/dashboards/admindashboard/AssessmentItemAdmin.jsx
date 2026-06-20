import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
    fetchAssessmentItems,
    deleteAssessmentItem,
} from "../../services/academicService";

import {
    ArrowLeft,
    Eye,
    Edit,
    Trash2,
    Plus,
} from "lucide-react";

const AssessmentItemAdmin = () => {
    const navigate = useNavigate();

    const [assessmentItems, setAssessmentItems] = useState([]);
    const [loading, setLoading] = useState(true);

    const loadAssessmentItems = async () => {
        try {
            setLoading(true);

            const data = await fetchAssessmentItems();

            setAssessmentItems(data);

        } catch (err) {
            console.error("Failed to load assessment items", err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        loadAssessmentItems();
    }, []);

    const handleDelete = async (id) => {
        const confirmDelete = window.confirm(
            "Are you sure you want to delete this assessment item?"
        );

        if (!confirmDelete) return;

        try {
            await deleteAssessmentItem(id);

            loadAssessmentItems();

        } catch (err) {
            console.error(err);

            alert("Failed to delete assessment item");
        }
    };

    if (loading) {
        return (
            <div className="text-center py-10">
                Loading assessment items...
            </div>
        );
    }

    return (
        <div className="space-y-6">

            <div className="flex justify-between items-center">

                <div className="flex items-center gap-3">

                    <button
                        onClick={() => navigate(-1)}
                        className="p-2 rounded-lg hover:bg-gray-100"
                    >
                        <ArrowLeft size={20} />
                    </button>

                    <h1 className="text-2xl font-bold text-gray-800">
                        Assessment Items
                    </h1>

                </div>

                <button
                    onClick={() =>
                        navigate("/admin/academics/assessment-items/create")
                    }
                    className="flex items-center gap-2 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700"
                >
                    <Plus size={18} />
                    Create Assessment
                </button>

            </div>

            <div className="bg-white shadow rounded-xl overflow-x-auto">

                <table className="w-full text-sm">

                    <thead className="bg-gray-100 text-gray-700 uppercase text-xs">

                        <tr>
                            <th className="px-6 py-4 text-left">
                                Student
                            </th>

                            <th className="px-6 py-4 text-left">
                                Subject
                            </th>

                            <th className="px-6 py-4 text-left">
                                Class
                            </th>

                            <th className="px-6 py-4 text-left">
                                Session
                            </th>

                            <th className="px-6 py-4 text-left">
                                Term
                            </th>

                            <th className="px-6 py-4 text-left">
                                Type
                            </th>

                            <th className="px-6 py-4 text-left">
                                Title
                            </th>

                            <th className="px-6 py-4 text-left">
                                Score
                            </th>

                            <th className="px-6 py-4 text-center">
                                Actions
                            </th>
                        </tr>

                    </thead>

                    <tbody className="divide-y">

                        {assessmentItems.map((item) => (

                            <tr
                                key={item.id}
                                className="hover:bg-gray-50"
                            >
                                <td className="px-6 py-4">
                                    {item.studentName}
                                </td>

                                <td className="px-6 py-4">
                                    {item.subjectName}
                                </td>

                                <td className="px-6 py-4">
                                    {item.className}
                                </td>

                                <td className="px-6 py-4">
                                    {item.sessionName}
                                </td>

                                <td className="px-6 py-4">
                                    {item.termName}
                                </td>

                                <td className="px-6 py-4">
                                    {item.type}
                                </td>

                                <td className="px-6 py-4">
                                    {item.title}
                                </td>

                                <td className="px-6 py-4">
                                    {item.score}/{item.maxScore}
                                </td>

                                <td className="px-6 py-4">

                                    <div className="flex justify-center gap-3">

                                        <button
                                            onClick={() =>
                                                navigate(
                                                    `/admin/academics/assessment-items/${item.id}`
                                                )
                                            }
                                            className="text-blue-600 hover:text-blue-800"
                                        >
                                            <Eye size={18} />
                                        </button>

                                        <button
                                            onClick={() =>
                                                navigate(
                                                    `/admin/academics/assessment-items/edit/${item.id}`
                                                )
                                            }
                                            className="text-green-600 hover:text-green-800"
                                        >
                                            <Edit size={18} />
                                        </button>

                                        <button
                                            onClick={() =>
                                                handleDelete(item.id)
                                            }
                                            className="text-red-600 hover:text-red-800"
                                        >
                                            <Trash2 size={18} />
                                        </button>

                                    </div>

                                </td>

                            </tr>

                        ))}

                        {assessmentItems.length === 0 && (
                            <tr>
                                <td
                                    colSpan="9"
                                    className="text-center py-8 text-gray-500"
                                >
                                    No assessment items found
                                </td>
                            </tr>
                        )}

                    </tbody>

                </table>

            </div>

        </div>
    );
};

export default AssessmentItemAdmin;