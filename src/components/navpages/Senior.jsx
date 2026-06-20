import {
    BookOpen,
    GraduationCap,
    FlaskConical,
    Calculator,
    Globe2,
    Briefcase,
    Users,
    Lightbulb,
    ArrowRight,
} from "lucide-react";
import heroImage from "../../assets/images/sen.avif";
import aboutImage from "../../assets/images/sen1.webp";
import peerImage from "../../assets/images/sen3.avif";
import passionImage from "../../assets/images/sen2.avif";

export default function SeniorSecondarySchool() {
    const academics = [
        {
            title: "Sciences",
            desc: "Physics, Chemistry and Biology taught with depth, experimentation and analytical rigour.",
            icon: <FlaskConical className="w-6 h-6" />,
        },
        {
            title: "Mathematics",
            desc: "Advanced algebra, geometry, statistics and problem-solving for tertiary readiness.",
            icon: <Calculator className="w-6 h-6" />,
        },
        {
            title: "Humanities",
            desc: "History, Government and Social Sciences that build perspective and civic responsibility.",
            icon: <Globe2 className="w-6 h-6" />,
        },
        {
            title: "Languages",
            desc: "English and other languages focused on communication, critical reading and expression.",
            icon: <BookOpen className="w-6 h-6" />,
        },
        {
            title: "C areer & Enterprise Studies",
            desc: "Entrepreneurship, career awareness and foundational business thinking.",
            icon: <Briefcase className="w-6 h-6" />,
        },
        {
            title: "Leadership & Ethics",
            desc: "Values-based education, leadership training and responsible decision-making.",
            icon: <GraduationCap className="w-6 h-6" />,
        },
    ];

    return (
        <main className="font-sans text-gray-800">
            <section
                className="relative h-[65vh] bg-cover bg-center flex items-center"
                style={{ backgroundImage: `url(${heroImage})` }}
            >
                <div className="absolute inset-0 bg-black/55" />
                <div className="relative z-10 container mx-auto px-6">
                    <h1 className="text-white text-4xl md:text-6xl font-extrabold drop-shadow-lg">
                        Senior Secondary School
                    </h1>
                    <p className="text-white text-lg md:text-xl mt-3">SS 1 — SS 3</p>
                    <span className="inline-block mt-6 bg-white/15 backdrop-blur-sm text-white px-4 py-2 rounded-lg text-sm">
                        Where Intellectual Curiosity Meets Real World Impact
                    </span>
                </div>
            </section>
            <section className="container mx-auto px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-5">
                        <h2 className="text-3xl font-bold">Preparing Students for University and Life</h2>
                        <p className="text-lg text-gray-700">
                            The Senior Secondary School SS1 - SS3 at Christ the Great School is designed to challenge students intellectually while preparing them for real-world responsibility. Learners refine their academic strengths, clarify career interests and develop independence.
                        </p>
                        <p className="text-gray-700">
                            <strong>Our Approach:</strong> We combine rigorous academics, mentorship, leadership opportunities and applied learning experiences. Students are encouraged to ask questions, solve problems and apply knowledge beyond the classroom.
                        </p>

                        <ul className="mt-6 space-y-3">
                            <li className="flex gap-3 items-start">
                                <span className="p-2 bg-indigo-50 text-indigo-600 rounded-lg"><Lightbulb className="w-5 h-5" /></span>
                                <div>
                                    <h4 className="font-semibold">Inquiry-Driven Learning</h4>
                                    <p className="text-sm text-gray-600">Critical thinking, research and independent study.</p>
                                </div>
                            </li>
                            <li className="flex gap-3 items-start">
                                <span className="p-2 bg-emerald-50 text-emerald-600 rounded-lg"><Users className="w-5 h-5" /></span>
                                <div>
                                    <h4 className="font-semibold">Mentorship & Guidance</h4>
                                    <p className="text-sm text-gray-600">Academic advising and personal development support.</p>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div className="rounded-2xl overflow-hidden shadow-lg">
                        <img src={aboutImage} alt="Senior Secondary students" className="w-full h-96 object-cover" />
                    </div>
                </div>
            </section>
            <section className="bg-slate-50 py-16">
                <div className="container mx-auto px-6">
                    <h3 className="text-3xl font-bold mb-10">Academic Program</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {academics.map((a, i) => (
                            <div key={i} className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition-shadow">
                                <div className="flex items-center gap-3">
                                    <span className="p-3 bg-indigo-50 text-indigo-600 rounded-lg">{a.icon}</span>
                                    <h4 className="text-lg font-semibold">{a.title}</h4>
                                </div>
                                <p className="mt-4 text-sm text-gray-600">{a.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section className="container mx-auto px-6 py-16">
                <h3 className="text-3xl font-bold mb-8">Beyond the Classroom</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="rounded-2xl overflow-hidden shadow-lg">
                        <img src={aboutImage} alt="Student seminar" className="w-full h-64 object-cover" />
                        <div className="p-4">
                            <h4 className="font-semibold">Lead a Seminar</h4>
                            <p className="text-sm text-gray-600">Students research, prepare and lead academic discussions.</p>
                        </div>
                    </div>

                    <div className="rounded-2xl overflow-hidden shadow-lg">
                        <img src={peerImage} alt="Peer teaching" className="w-full h-64 object-cover" />
                        <div className="p-4">
                            <h4 className="font-semibold">Teach Your Peers</h4>
                            <p className="text-sm text-gray-600">Peer-led sessions reinforce mastery and confidence.</p>
                        </div>
                    </div>

                    <div className="rounded-2xl overflow-hidden shadow-lg">
                        <img src={passionImage} alt="Student passions" className="w-full h-64 object-cover" />
                        <div className="p-4">
                            <h4 className="font-semibold">Pursue Your Passions</h4>
                            <p className="text-sm text-gray-600">Clubs, projects and initiatives aligned with student interests.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-slate-900 text-slate-100 py-16">
                <div className="container mx-auto px-6 text-center max-w-3xl">
                    <h3 className="text-3xl font-bold">What Else Can You Expect?</h3>
                    <p className="mt-4 text-slate-300 text-lg">
                        University preparation, career guidance, leadership development, moral instruction and a supportive community that challenges students to become responsible global citizens.
                    </p>

                    <div className="mt-8 flex justify-center">
                        <a
                            href="/admissions/apply"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-amber-500 text-white font-semibold shadow hover:scale-105 transition-transform"
                        >
                            Apply Now
                            <ArrowRight className="w-5 h-5" />
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
}
