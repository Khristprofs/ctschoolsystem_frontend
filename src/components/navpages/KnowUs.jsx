import StudentImg1 from "../../assets/images/student.webp";
import { Users, School, FileCheck } from "lucide-react";

function KnowAboutUs() {
    return (
        <main className="w-full">
            <section className="w-full bg-gray-900 flex flex-col md:flex-row items-center mt-16 min-h-[80vh]">
                
                <div className="w-full md:w-1/2 px-10 lg:px-20 py-20">
                    <p className="uppercase tracking-widest text-gray-300 mb-3">
                        Know About Us
                    </p>

                    <h1 className="text-5xl lg:text-6xl font-extrabold text-red-600 leading-tight mb-5">
                        Christ the Great School
                    </h1>

                    <p className="text-lg text-gray-200 max-w-md mb-8">
                        Committed to making learning worthwhile.
                    </p>

                    <button className="bg-red-700 hover:bg-red-800 text-white font-semibold px-8 py-3 rounded-lg flex items-center gap-2 shadow hover:scale-[1.03] transition">
                        Enrol Now
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                            viewBox="0 0 24 24" strokeWidth={2}
                            stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>

                <div className="w-full md:w-1/2 h-[80vh]">
                    <img 
                        src={StudentImg1}
                        alt="student"
                        className="w-full h-full object-cover"
                    />
                </div>
            </section>
            <section className="w-full bg-white py-24 px-6 md:px-16 lg:px-24">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-center text-4xl md:text-5xl font-bold text-gray-800 mb-16">
                        Excellence in Learning, Character & Innovation
                    </h2>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 place-items-center">
                        <div className="w-full max-w-md bg-white shadow-xl rounded-2xl overflow-hidden hover:shadow-2xl transition">
                            <img 
                                src={StudentImg1} 
                                alt="students"
                                className="w-full h-[230px] object-cover"
                            />
                            <div className="p-6">
                                <p className="text-gray-700 leading-relaxed text-[17px]">
                                    We offer an environment where students grow academically,
                                    socially, and morally — preparing them for a life of purpose
                                    and global relevance.
                                </p>
                            </div>
                        </div>
                        <div className="w-full max-w-md p-10 bg-gray-50 rounded-2xl shadow-md hover:shadow-xl transition cursor-pointer text-center">
                            <Users className="w-12 h-12 mx-auto text-red-600 mb-5" />
                            <h3 className="text-2xl font-semibold mb-3">Our Community</h3>
                            <p className="text-gray-600 leading-relaxed">
                                A home of collaboration, mentorship, and academic excellence.
                            </p>
                        </div>
                        <div className="w-full max-w-md p-10 bg-gray-50 rounded-2xl shadow-md hover:shadow-xl transition cursor-pointer text-center">
                            <School className="w-12 h-12 mx-auto text-red-600 mb-5" />
                            <h3 className="text-2xl font-semibold mb-3">Our Facilities</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Modern classrooms, tech-driven labs, and safe learning spaces.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default KnowAboutUs;
