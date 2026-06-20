import { Link } from "react-router-dom";

const DropdownStudentLife = ({ onClose }) => (
    <ul className="absolute left-0 top-full mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-100 transition-all duration-300">
        <li>
            <Link
            to="/club-society"
            onClick={onClose}
            className="block px-5 py-2 text-gray-700 rounded-md hover:bg-gray-300 hover:text-gray-800"
            >Clubs & Societies</Link>
        </li>
        <li>
            <Link
            to="/sports-game"
            onClick={onClose}
            className="block px-5 py-2 text-gray-700 rounded-md hover:bg-gray-300 hover:text-gray-800"
            >Sports & Games</Link>
        </li>
        <li>
            <Link
            to="/event-activities"
            onClick={onClose}
            className="block px-5 py-2 text-gray-700 rounded-md hover:bg-gray-300 hover:text-gray-800"
            >Events & Activites</Link>
        </li>
        <li>
            <Link
            to="/"
            onClick={onClose}
            className="block px-5 py-2 text-gray-700 rounded-md hover:bg-gray-300 hover:text-gray-800"
            >Spiritual Life</Link>
        </li>
        <li>
            <Link
            to="/"
            onClick={onClose}
            className="block px-5 py-2 text-gray-700 rounded-md hover:bg-gray-300 hover:text-gray-800"
            >Photes & Video Gallery</Link>
        </li>
        <li>
            <Link
            to="/"
            onClick={onClose}
            className="block px-5 py-2 text-gray-700 rounded-md hover:bg-gray-300 hover:text-gray-800"
            >Student Leadership</Link>
        </li>
        <li>
            <Link
            to="/"
            onClick={onClose}
            className="block px-5 py-2 text-gray-700 rounded-md hover:bg-gray-300 hover:text-gray-800"
            >Guidance & Counselling</Link>
        </li>
    </ul>
);

export default DropdownStudentLife;