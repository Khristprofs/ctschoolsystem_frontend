import StudentImg from "../../assets/images/student.jpg"
import { ArrowRight } from "lucide-react";
import { useState } from "react";

function AcademicPrograms() {
    const programs = [
        {
            code: "NURS", title: "Key Areas", subtitle: "Language development including letters and simple words, Basic numeracy including numbers and shapes, Social and emotional development, Physical development, and Creative arts, music, and other hands-on activies"
        },
        {
            code: "PRY", title: "English", subtitle: "Grammar, Comprehension, Writting"
        },
        {
            code: "PRY", title: "Mathematics", subtitle: "Numeracy, Quantitative, Reasoning"
        },
        {
            code: "PRY", title: "Other Subjects", subtitle: "Basic Science and Technology, Social Studies and Civic Education, Cultral and Creative Arts, Physical and Health Education, Religious Education, and Languages (French, Igbo, Yoruba)"
        },
        {
            code: "SS", title: "Core Acadmeic Subjects", subtitle: "English Studies, Mathmatics, and Sciences are standard"
        },
        {
            code: "SS", title: "Sciences", subtitle: "Biology, Chemistry, Physics"
        },
        {
            code: "SS", title: "Humanities", subtitle: "Social Studies, Civic Education, History"
        },
        {
            code: "SS", title: "Arts and Technology", subtitle: "Creative Arts, Technical Drawing, Basic Technology"
        },
        {
            code: "SS", title: "Vocational/Pre-vocational", subtitle: "Home Economics, Agricultural Science"
        },
        {
            code: "SS", title: "Languages", subtitle: "Continued study of Nigerian languages and French"
        },
    ];

    const tabs = [
        {
            key: "flexibility", label: "Flexibility"
        },
        {
            key: "cost", label: "Cost & Savings"
        },
        {
            key: "quality", label: "Quality Curriculum"
        },
        {
            key: "student", label: "Student Experience"
        }
    ]

    const [activeTab, setActiveTab] = useState("flexibility");
    return (
        <div className="w-full min-h-screen bg-white text-slate-900">
            <section className="relative w-full lg:h-[950px] overflow-hidden">
                <img src={StudentImg} alt="Image for business page hero section"
                    className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="absolute inset-0 flex items-center">
                    <div className="max-w-[1200px] mx-auto px-6 lg:px-12 w-full grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div className="bg-[#e7f0f0] p-20 md:p-24 rounded-md max-w-2xl shadow-sm -ml-40">
                            <p className="text-2xl tracking-wider text-slate-700 font-semibold uppercase">Christ the Great Nursery, Primary and Secondary School</p>
                            <h1 className="mt-6 text-3xl sm:text-4xl md:text-5 font-extrabold leading-tight text-slate-800 uppercase">
                                Academic Programs
                            </h1>
                            <p className="mt-4 text-xl text-slate-700 leading-relaxed">
                                Enrolling your child in any of the levels a good start because in Christ the Great School we ensure quality teaching and learning to our pupils.
                            </p>
                            <div className="mt-8">
                                <a href="" className="inline-flex items-center gap-3 bg-rose-700 hover:bg-rose-800 text-white font-semibold px-5 py-3 rounded-md shadow transition text-2xl">
                                    Request information
                                    <ArrowRight className="w-4 h-4" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <nav className="max-w-[1200px] mx-auto px-2 lg:px-3 py-3 text-sm text-slate-600">
                <ol className="flex gap-2 items-center">
                    <li><a href="/" className="hover:underline">Home</a></li>
                    <ArrowRight className="w-4 h-4" />
                    <li><a href="/degree" className="hover:underline">Academic Programs</a></li>
                    <ArrowRight className="w-4 h-4" />
                    <li className="text-slate-800">Programs</li>
                </ol>
            </nav>
            <section className="max-w-[1200px] mx-auto px-3 lg:px-6 py-6">
                <div className="text-center max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold">A flexible Program</h2>
                    <p className="mt-4 text-xl leading-relaxed text-slate-600">
                        Our Academic programs isn't just about book smarts. It's also about gaining real-world knowlege know-how. It's about preparing to collaborate with teams and work areas and improving your effectiveness, all in a rich, interactive learning environment.
                    </p>
                </div>
            </section>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 mx-28">
                {
                    programs.map((p, i) => (
                        <a
                            key={i}
                            href="#"
                            className="group block bg-slate-50 rounded-lg shadow-lg p-6 border border-transparent hover:bg-rose-600 hover:text-white text-xl transition"
                        >
                            <div className="flex items-center gap-6">
                                <div className="flex items-center justify-center w-16 h-16 rounded-md bg-black text-white font-bold">
                                    <span className="text-xl">{p.code}</span>
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-lg font-semibold">{p.title}</h3>
                                    <p className="text-sm">{p.subtitle}</p>
                                </div>
                                <div className="text-rose-400 group-hover:text-rose-600 transition">
                                    <ArrowRight className="w-5 h-5" />
                                </div>
                            </div>
                        </a>
                    ))
                }
            </div>
            <section className="max-w-[1200px] mx-auto lg:px-12 px-6 py-12">
                <h2 className="text-2xl md:text-3xl font-extrabold text-center font-mono uppercase">Why Christ the Great School</h2>
                <div className="mt-8">
                    <div className="flex justify-center border-b border-slate-200">
                        {
                            tabs.map(t => (
                                <button
                                    key={t.key}
                                    onClick={() => setActiveTab(t.key)}
                                    className={`px-6 py-4 -mb-px text-xl font-medium ${activeTab === t.key
                                        ? "border-b-4 border-rose-700 text-rose-700" : "text-slate-600 hover:text-slate-800"
                                        }`}
                                >
                                    {t.label}
                                </button>
                            ))
                        }
                    </div>
                    <div>
                        {
                            activeTab === "flexibility" && (
                                <div>
                                    <div className="bg-slate-200 p-8 rounded-md text-center">
                                        <h3 className="text-xl md:text-2xl font-semibold">
                                            FlexPath lets you finish the level you started.
                                        </h3>
                                        <p className="mt-3 text-xl text-slate-700">
                                            Based on fastest 25% of students. Your length and cost vary depending on speed, transfer credits, and session fees
                                        </p>
                                    </div>
                                    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="p-6 border rounded-md shadow-sm bg-white">
                                            <h4 className="font-semibold mb-2 text-2xl">FlexPath</h4>
                                            <ul className="text-xl text-slate-600 list-disc pl-5 space-y-2">
                                                <li>Flexible teaching time between the teachers and the pupils</li>
                                                <li>Assignment to test student understanding</li>
                                                <li>Morning presentation on a subject matter by students</li>
                                                <li>Good teaching pace</li>
                                            </ul>
                                            <a href="#" className="inline-block mt-4 text-rose-600 font-medium text-xl hover:underline">Explore FlexPath</a>
                                        </div>
                                        <div className="p-6 border rounded-md shadow-sm bg-white">
                                            <h4 className="font-semibold mb-2 text-2xl">GuidePath</h4>
                                            <ul className="text-xl text-slate-600 list-disc pl-5 space-y-2">
                                                <li>Material availablity</li>
                                                <li>Other school activites to boost student readibility</li>
                                                <li>Structured 12-weeks quarters</li>
                                            </ul>
                                            <a href="#" className="inline-block mt-4 text-rose-600 font-medium text-xl hover:underline">Explore GuildPath</a>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                        {
                            activeTab === "cost" && (
                                <div>
                                    <div className="bg-slate-200 p-8 rounded-md text-center">
                                        <h3 className="text-xl md:text-2xl font-semibold">
                                            Cost
                                        </h3>
                                        <p className="mt-3 text-xl text-slate-700">
                                            Based on fastest 25% of students. Your length and cost vary depending on speed, transfer credits, session fees, and activietes for that particular term or session.
                                        </p>
                                    </div>
                                    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-3">
                                        <div className="p-4 border rounded-md shadow-sm bg-white">
                                            <h4 className="font-semibold mb-2 text-2xl">Registration Cost Path</h4>
                                            <ul className="text-xl text-slate-600 list-disc pl-5 space-y-2">
                                                <li>Registration fee <span>#8,000</span></li>
                                                <li>Acceptance fee <span>#10,000</span></li>
                                                <li>Handbook or school booklet <span>#3,000</span></li>
                                                <li>Uniforms <ul className="text-lg list-disc pl-5">
                                                    <li>Monday Wear - Suit <span>#20,000</span></li>
                                                    <li>Tuesday Wear <span>#12,000</span></li>
                                                    <li>Wednesday Wear <span>#12,000</span></li>
                                                    <li>Friday Wear <span>#8,000</span></li>
                                                    <li>Cadigian <span>#5,000</span></li>
                                                </ul>
                                                </li>
                                            </ul>
                                            <a href="#" className="inline-block mt-4 text-rose-600 font-medium text-xl hover:underline">Pay Fee</a>
                                        </div>
                                        <div className="p-4 border rounded-md shadow-sm bg-white">
                                            <h4 className="font-semibold mb-2 text-2xl">School Fees</h4>
                                            <ul className="text-xl text-slate-600 list-disc pl-5 space-y-2">
                                                <li>Lower Section 
                                                    <ul>
                                                        <li>NUR 1 <span>#120,000</span></li>
                                                        <li>NUR 2 <span>#100,000</span></li>
                                                        <li>NUR 3 <span>#180,000</span></li>
                                                    </ul>
                                                </li>
                                                <li>Primary School 
                                                    <ul>
                                                        <li>PRY 1 <span>#180,000</span></li>
                                                        <li>PRY 2 <span>#150,000</span></li>
                                                        <li>PRY 3 <span>#200,000</span></li>
                                                    </ul>
                                                </li>
                                                <li>Secondary School 
                                                    <ul>
                                                        <li>JSS1 <span>#250,000</span></li>
                                                        <li>JSS2 <span>#250,000</span></li>
                                                        <li>JSS3 <span>#320,000</span></li>
                                                        <li>SSS1 <span>#350,000</span></li>
                                                        <li>SSS2 <span>#330,000</span></li>
                                                        <li>SSS3 <span>#330,000</span></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                            <a href="#" className="inline-block mt-4 text-rose-600 font-medium text-xl hover:underline">Pay Fee</a>
                                        </div>
                                        <div className="p-4 border rounded-md shadow-sm bg-white">
                                            <h4 className="font-semibold mb-2 text-2xl">Savings</h4>
                                            <p>We understand that times can be hard sometimes and that is why there is a room for installment payment of school fees. Also the school is offering a discount of 5% for parents with 3 or more children in our school</p>
                                            <a href="#" className="inline-block mt-4 text-rose-600 font-medium text-xl hover:underline">Explore</a>
                                        </div> 
                                    </div>
                                </div>
                            )
                        }
                        {
                            activeTab === "quality" && (
                                <div className="bg-slate-200 p-8 rounded-md text-center">
                                    <div>
                                        <h3 className="text-xl md:text-2xl font-semibold">
                                            Quailty Curriculum
                                        </h3>
                                        <p className="mt-3 text-xl text-slate-700">
                                            Christ the Great Nursery, Primary and Secondary school offers a very reboast learning Curriculum, quality Education, conducive learning environment and many more.
                                        </p>
                                    </div>
                                </div>
                            )
                        }
                        {
                            activeTab === "student" && (
                                <div className="bg-slate-200 p-8 rounded-md text-center">
                                    <div>
                                        <h3 className="text-xl md:text-2xl font-semibold">
                                            Student Experience
                                        </h3>
                                        <p className="mt-3 text-xl text-slate-700">
                                            The student experience is top-notch in our school because we make sure that our student don't just pass through the school but the school also pass through them.
                                        </p>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
            </section>
        </div>
    )
}

export default AcademicPrograms;