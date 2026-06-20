import { Link } from "react-router-dom";

const AcademicsDropdown = ({ onClose }) => (
    <ul className="absolute left-0 top-full mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-100 transition-all duration-300">
        <li>
            <Link
            to="/acedemicprograms"
            onClick={onClose}
            className="block px-5 py-2 text-gray-700 rounded-md hover:bg-gray-300 hover:text-gray-800"
            >Academic Programs</Link>
        </li>
        <li>
            <Link
            to="/lowerschool"
            onClick={onClose}
            className="block px-5 py-2 text-gray-700 rounded-md hover:bg-gray-300 hover:text-gray-800"
            >Lower School (NUR1 - 3)</Link>
        </li>
        <li>
            <Link
            to="/primary"
            onClick={onClose}
            className="block px-5 py-2 text-gray-700 rounded-md hover:bg-gray-300 hover:text-gray-800"
            >Primary School (PRI1 - 5)</Link>
        </li>
        <li>
            <Link
            to="/junior"
            onClick={onClose}
            className="block px-5 py-2 text-gray-700 rounded-md hover:bg-gray-300 hover:text-gray-800"
            >Junior Secondary (JSS1 - JSS3)</Link>
        </li>
        <li>
            <Link
            to="/senior"
            onClick={onClose}
            className="block px-5 py-2 text-gray-700 rounded-md hover:bg-gray-300 hover:text-gray-800"
            >Senior Secondary (SS1 - SS3)</Link>
        </li>
        <li>
            <Link
            to="/wellbeing"
            onClick={onClose}
            className="block px-5 py-2 text-gray-700 rounded-md hover:bg-gray-300 hover:text-gray-800"
            >Student Wellbeing</Link>
        </li>
        <li>
            <Link
            to="/collegecounseling"
            onClick={onClose}
            className="block px-5 py-2 text-gray-700 rounded-md hover:bg-gray-300 hover:text-gray-800"
            >College Counselling</Link>
        </li>
    </ul>
);

export default AcademicsDropdown;