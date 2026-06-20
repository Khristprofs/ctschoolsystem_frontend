import AdmissionDropdown from "./dropdown/AdmissionDropdown";
import StudentLifeDropdown from "./dropdown/StudentLifeDropdown";
import AcademicsDropdown from "./dropdown/AcademicsDropdown";
import AboutDropdown from "./dropdown/AboutDropdown";
import CommunityDropdown from "./dropdown/CommunityDropdown";
import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <header className="flex justify-between items-center shadow-md p-6 fixed top-0 w-full z-40 bg-white">

            <p className="font-extrabold font-mono uppercase text-xl">christthegreat</p>
            <nav>
                <ul className="flex gap-10 items-center font-medium">
                    <li className="hover:text-blue-500 transition">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="relative group cursor-pointer text-gray-700 hover:text-blue-500 transition">
                        <span className="select-none">About</span>
                        <div className="absolute left-0 top-full h-4 w-full"></div>
                        <div className="
                            absolute left-0 top-full mt-4 
                            opacity-0 group-hover:opacity-100 
                            pointer-events-none group-hover:pointer-events-auto
                            transition-all duration-200 ease-out delay-200
                        ">
                            <AboutDropdown />
                        </div>
                    </li>
                    <li className="relative group cursor-pointer hover:text-blue-500 transition">
                        <span className="select-none">Admission</span>
                        <div className="absolute left-0 top-full h-4 w-full"></div>
                        <div className="
                            absolute left-0 top-full mt-4 
                            opacity-0 group-hover:opacity-100 
                            pointer-events-none group-hover:pointer-events-auto
                            transition-all duration-200 ease-out delay-200
                        ">
                            <AdmissionDropdown />
                        </div>
                    </li>
                    <li className="relative group cursor-pointer hover:text-blue-500 transition">
                        <span className="select-none">Student Life</span>
                        <div className="absolute left-0 top-full h-4 w-full"></div>
                        <div className="
                            absolute left-0 top-full mt-4 
                            opacity-0 group-hover:opacity-100 
                            pointer-events-none group-hover:pointer-events-auto
                            transition-all duration-200 ease-out delay-200
                        ">
                            <StudentLifeDropdown />
                        </div>
                    </li>
                    <li className="relative group cursor-pointer hover:text-blue-500 transition">
                        <span className="select-none">Academics</span>
                        <div className="absolute left-0 top-full h-4 w-full"></div>
                        <div className="
                            absolute left-0 top-full mt-4 
                            opacity-0 group-hover:opacity-100 
                            pointer-events-none group-hover:pointer-events-auto
                            transition-all duration-200 ease-out delay-200
                        ">
                            <AcademicsDropdown />
                        </div>
                    </li>
                    <li className="relative group cursor-pointer hover:text-blue-500 transition">
                        <span className="select-none">Community</span>
                        <div className="absolute left-0 top-full h-4 w-full"></div>
                        <div className="
                            absolute left-0 top-full mt-4 
                            opacity-0 group-hover:opacity-100 
                            pointer-events-none group-hover:pointer-events-auto
                            transition-all duration-200 ease-out delay-200
                        ">
                            <CommunityDropdown />
                        </div>
                    </li>
                    <li className="hover:text-blue-500 transition">
                        <Link to="/login">Login</Link>
                    </li>

                    <li className="hover:text-blue-500 transition">
                        <Link to="/signup">SignUp</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Nav;