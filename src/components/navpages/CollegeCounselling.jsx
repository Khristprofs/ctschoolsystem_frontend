import { University, Compass, Trophy, HelpCircle, CheckCircle2 } from "lucide-react";
import counselingImage from "../../assets/images/teacher.avif";
import acceptancesImage from "../../assets/images/admitStudent.webp";

export default function CollegeCounseling() {
    return (
        <main className="font-sans text-gray-800 mt-16">
            <section className="container mx-auto px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
                            College Counseling
                        </h1>
                        <h2 className="text-2xl font-semibold text-indigo-600 mb-3">
                            Building a College-Going Culture
                        </h2>
                        <p className="text-gray-700 leading-relaxed">
                            At Christ the Great School, college preparation is a shared journey. From the early secondary years, students are encouraged to explore their strengths, interests, and aspirations while developing the academic habits and character needed for higher education and beyond.
                        </p>
                        <p className="mt-4 text-gray-700 leading-relaxed">
                            Our college-going culture emphasizes purpose, integrity, global awareness, and informed decision-making, ensuring that every student is supported in finding a pathway that aligns with their goals.
                        </p>
                    </div>
                    <div className="bg-slate-50 rounded-2xl shadow-lg overflow-hidden">
                        <img
                            src={counselingImage}
                            alt="Office of College Counseling"
                            className="w-full h-64 object-cover"
                        />
                        <div className="p-6">
                            <div className="flex items-center gap-3 mb-3">
                                <University className="w-6 h-6 text-indigo-600" />
                                <h3 className="text-xl font-semibold">Office of College Counseling</h3>
                            </div>
                            <p className="text-gray-600">
                                Our dedicated counseling office partners with students and families throughout the college application process, providing personalized guidance, resources, and mentorship.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-slate-900 py-16 text-slate-100">
                <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <Compass className="w-7 h-7 text-indigo-400" />
                            <h2 className="text-3xl font-bold">Our Approach</h2>
                        </div>
                        <ul className="space-y-4 text-slate-300">
                            <li className="flex gap-3">
                                <CheckCircle2 className="w-5 h-5 text-indigo-400 mt-1" />
                                <span>Individualized college and career planning</span>
                            </li>
                            <li className="flex gap-3">
                                <CheckCircle2 className="w-5 h-5 text-indigo-400 mt-1" />
                                <span>Academic course planning aligned with student goals</span>
                            </li>
                            <li className="flex gap-3">
                                <CheckCircle2 className="w-5 h-5 text-indigo-400 mt-1" />
                                <span>Guidance on applications, essays, and interviews</span>
                            </li>
                            <li className="flex gap-3">
                                <CheckCircle2 className="w-5 h-5 text-indigo-400 mt-1" />
                                <span>Family engagement and transparent communication</span>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <Trophy className="w-7 h-7 text-indigo-400" />
                            <h2 className="text-3xl font-bold">What Our Graduates Achieve</h2>
                        </div>
                        <p className="text-slate-300 leading-relaxed">
                            Graduates of Christ the Great School gain admission to competitive universities locally and internationally. They leave equipped with academic confidence, leadership skills, and a strong sense of purpose.
                        </p>
                        <p className="mt-4 text-slate-300 leading-relaxed">
                            Our alumni thrive in diverse fields, pursue meaningful careers, and continue to embody the values of excellence and service.
                        </p>
                    </div>
                </div>
            </section>
            <section className="container mx-auto px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl font-bold mb-4">
                            College Acceptances at Christ the Great School
                        </h2>
                        <p className="text-gray-700 leading-relaxed">
                            Our students have been accepted into a wide range of reputable universities and colleges, reflecting diverse interests and academic strengths.
                        </p>
                        <ul className="mt-6 space-y-3 text-gray-700 list-disc">
                            <li>Top national universities</li>
                            <li>International institutions across multiple continents</li>
                            <li>Specialized colleges for science, technology, arts, and humanities</li>
                        </ul>
                    </div>
                    <div className="rounded-2xl overflow-hidden shadow-lg">
                        <img
                            src={acceptancesImage}
                            alt="College acceptances"
                            className="w-full h-80 object-cover"
                        />
                    </div>
                </div>
            </section>
            <section className="bg-slate-50 py-16">
                <div className="container mx-auto px-6">
                    <div className="flex items-center gap-3 mb-8">
                        <HelpCircle className="w-7 h-7 text-indigo-600" />
                        <h2 className="text-3xl font-bold">College Admissions FAQs</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-white rounded-xl shadow p-6">
                            <h4 className="font-semibold mb-2">When does college counseling begin?</h4>
                            <p className="text-gray-600">
                                College counseling begins in the junior secondary years and becomes more individualized in senior secondary school.
                            </p>
                        </div>
                        <div className="bg-white rounded-xl shadow p-6">
                            <h4 className="font-semibold mb-2">Do students receive one-on-one support?</h4>
                            <p className="text-gray-600">
                                Yes. Each student receives personalized guidance tailored to their academic profile and aspirations.
                            </p>
                        </div>
                        <div className="bg-white rounded-xl shadow p-6">
                            <h4 className="font-semibold mb-2">Are parents involved in the process?</h4>
                            <p className="text-gray-600">
                                Families are active partners through meetings, workshops, and regular communication.
                            </p>
                        </div>
                        <div className="bg-white rounded-xl shadow p-6">
                            <h4 className="font-semibold mb-2">Does the school support international applications?</h4>
                            <p className="text-gray-600">
                                Absolutely. We provide guidance for both local and international university applications.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
