import { Link } from "react-router-dom";

const AboutDropdown = ({ onClose }) => (
    <ul className="absolute left-0 top-full mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-100 transition-all duration-300">
        <li>
            <Link
            to="/knowaboutus"
            onClick={onClose}
            className="block px-5 py-2 text-gray-700 rounded-md hover:bg-gray-300 hover:text-gray-800"
            >Get to Know Us</Link>
        </li>
        <li>
            <Link
            to="/missionandphilosophy"
            onClick={onClose}
            className="block px-5 py-2 text-gray-700 rounded-md hover:bg-gray-300 hover:text-gray-800"
            >Mission & Philosophy</Link>
        </li>
        <li>
            <Link
            to="/facultystaff"
            onClick={onClose}
            className="block px-5 py-2 text-gray-700 rounded-md hover:bg-gray-300 hover:text-gray-800"
            >Faculty & Staff</Link>
        </li>
        <li>
            <Link
            to="/"
            onClick={onClose}
            className="block px-5 py-2 text-gray-700 rounded-md hover:bg-gray-300 hover:text-gray-800"
            >Meet Our Founder: Great</Link>
        </li>
        <li> 
            <Link
            to="/"
            onClick={onClose}
            className="block px-5 py-2 text-gray-700 rounded-md hover:bg-gray-300 hover:text-gray-800"
            >Executive Director Welcome</Link>
        </li>
        <li>
            <Link
            to="/"
            onClick={onClose}
            className="block px-5 py-2 text-gray-700 rounded-md hover:bg-gray-300 hover:text-gray-800"
            >Frequently Asked Questions</Link>
        </li>
        <li>
            <Link
            to="/"
            onClick={onClose}
            className="block px-5 py-2 text-gray-700 rounded-md hover:bg-gray-300 hover:text-gray-800"
            >Careers</Link>
        </li>
        <li>
            <Link
            to="/"
            onClick={onClose}
            className="block px-5 py-2 text-gray-700 rounded-md hover:bg-gray-300 hover:text-gray-800"
            >Contact</Link>
        </li>
    </ul>
);

export default AboutDropdown;