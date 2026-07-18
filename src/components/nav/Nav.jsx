import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

import AdmissionDropdown from "./dropdown/AdmissionDropdown";
import StudentLifeDropdown from "./dropdown/StudentLifeDropdown";
import AcademicsDropdown from "./dropdown/AcademicsDropdown";
import AboutDropdown from "./dropdown/AboutDropdown";
import CommunityDropdown from "./dropdown/CommunityDropdown";

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">

            <div className="max-w-7xl mx-auto flex items-center justify-between px-5 lg:px-8 py-4">

                {/* Logo */}
                <Link
                    to="/"
                    className="font-extrabold text-lg md:text-xl uppercase font-mono"
                >
                    ChristTheGreat
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden lg:block">
                    <ul className="flex items-center gap-8 font-medium">

                        <li>
                            <Link
                                to="/"
                                className="hover:text-red-700 transition"
                            >
                                Home
                            </Link>
                        </li>

                        <li className="relative group">
                            <span className="cursor-pointer hover:text-red-700">
                                About
                            </span>

                            <div className="absolute top-full mt-4 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition">
                                <AboutDropdown />
                            </div>
                        </li>

                        <li className="relative group">
                            <span className="cursor-pointer hover:text-red-700">
                                Admission
                            </span>

                            <div className="absolute top-full mt-4 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition">
                                <AdmissionDropdown />
                            </div>
                        </li>

                        <li className="relative group">
                            <span className="cursor-pointer hover:text-red-700">
                                Student Life
                            </span>

                            <div className="absolute top-full mt-4 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition">
                                <StudentLifeDropdown />
                            </div>
                        </li>

                        <li className="relative group">
                            <span className="cursor-pointer hover:text-red-700">
                                Academics
                            </span>

                            <div className="absolute top-full mt-4 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition">
                                <AcademicsDropdown />
                            </div>
                        </li>

                        <li className="relative group">
                            <span className="cursor-pointer hover:text-red-700">
                                Community
                            </span>

                            <div className="absolute top-full mt-4 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition">
                                <CommunityDropdown />
                            </div>
                        </li>

                        <li>
                            <Link
                                to="/login"
                                className="hover:text-red-700 transition"
                            >
                                Login
                            </Link>
                        </li>

                        <li>
                            <Link
                                to="/signup"
                                className="bg-red-700 hover:bg-red-800 text-white px-5 py-2 rounded-lg"
                            >
                                Sign Up
                            </Link>
                        </li>

                    </ul>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="lg:hidden"
                >
                    {isOpen ? (
                        <X size={30} />
                    ) : (
                        <Menu size={30} />
                    )}
                </button>

            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="lg:hidden bg-white shadow-md border-t">

                    <nav className="flex flex-col p-6 space-y-5">

                        <Link
                            to="/"
                            onClick={() => setIsOpen(false)}
                        >
                            Home
                        </Link>

                        <Link
                            to="/about"
                            onClick={() => setIsOpen(false)}
                        >
                            About
                        </Link>

                        <Link
                            to="/admission"
                            onClick={() => setIsOpen(false)}
                        >
                            Admission
                        </Link>

                        <Link
                            to="/student-life"
                            onClick={() => setIsOpen(false)}
                        >
                            Student Life
                        </Link>

                        <Link
                            to="/academics"
                            onClick={() => setIsOpen(false)}
                        >
                            Academics
                        </Link>

                        <Link
                            to="/community"
                            onClick={() => setIsOpen(false)}
                        >
                            Community
                        </Link>

                        <Link
                            to="/login"
                            onClick={() => setIsOpen(false)}
                        >
                            Login
                        </Link>

                        <Link
                            to="/signup"
                            onClick={() => setIsOpen(false)}
                            className="bg-red-700 text-white py-3 rounded-lg text-center"
                        >
                            Sign Up
                        </Link>

                    </nav>

                </div>
            )}

        </header>
    );
};

export default Nav;