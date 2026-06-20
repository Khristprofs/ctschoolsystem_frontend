import { Link } from "react-router-dom";

const CommunityDropdown = ({ onClose }) => (
    <ul className="absolute left-0 top-full mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-100 transition-all duration-300">
        <li>
            <Link
            to="/"
            onClick={onClose}
            className="block px-5 py-2 text-gray-700 rounded-md hover:bg-gray-300 hover:text-gray-800"
            >Family Association</Link>
        </li>
        <li>
            <Link
            to="/"
            onClick={onClose}
            className="block px-5 py-2 text-gray-700 rounded-md hover:bg-gray-300 hover:text-gray-800"
            >Alumni</Link>
        </li>
        <li>
            <Link
            to="/"
            onClick={onClose}
            className="block px-5 py-2 text-gray-700 rounded-md hover:bg-gray-300 hover:text-gray-800"
            >CTG Submit</Link>
        </li>
        <li>
            <Link
            to="/"
            onClick={onClose}
            className="block px-5 py-2 text-gray-700 rounded-md hover:bg-gray-300 hover:text-gray-800"
            >Webnars / Admissions Lab</Link>
        </li>
    </ul>
);

export default CommunityDropdown;