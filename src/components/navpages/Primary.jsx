import { BookOpen, Calculator, Globe, Palette, BadgeCheck, Laptop, Users, Sparkles, ArrowRight } from "lucide-react";
import heroImage from "../../assets/images/primary.avif";
import acadImage from "../../assets/images/academics.avif";
import leadImage from "../../assets/images/leadership.avif";
import enrichmentImage from "../../assets/images/enrichment.avif";
import experientialImage from "../../assets/images/experiential.webp";
import artImage from "../../assets/images/arts.avif";
import globeImage from "../../assets/images/global.avif";

const sectionImages = {
    acadImage,
    leadImage,
    enrichmentImage,
    experientialImage,
    artImage,
    globeImage
};

export default function Primary() {
    const programs = [
        {
            title: "Core Academics",
            desc: "Strong foundations in literacy, numeracy and reasoning skills. We combine structured instruction with inquiry-based activities.",
            icon: <BookOpen className="w-6 h-6" />, img: sectionImages.experientialImage,
        },
        {
            title: "STEM & Computing",
            desc: "Hands-on science labs, early engineering challenges and supervised computing that builds logic and digital fluency.",
            icon: <Laptop className="w-6 h-6" />, img: sectionImages.leadImage,
        },
        {
            title: "Creative & Performing Arts",
            desc: "Art, music, drama and expression projects that support confidence, creativity and emotional growth.",
            icon: <Palette className="w-6 h-6" />, img: sectionImages.artImage,
        },
        {
            title: "Mathematics Mastery",
            desc: "Conceptual understanding reinforced with visual models, problem-solving and mental maths routines.",
            icon: <Calculator className="w-6 h-6" />, img: sectionImages.acadImage,
        },
        {
            title: "Global Studies",
            desc: "Understanding communities, cultures and basic geography through integrated humanities lessons.",
            icon: <Globe className="w-6 h-6" />, img: sectionImages.globeImage,
        },
        {
            title: "Character & Leadership",
            desc: "Responsibility, teamwork, peer leadership and values-based education embedded across subjects.",
            icon: <Users className="w-6 h-6" />, img: sectionImages.enrichmentImage,
        },
    ];

    return (
        <main className="font-sans text-gray-800">
            <section
                className="relative h-[60vh] bg-cover bg-center flex items-center"
                style={{ backgroundImage: `url(${heroImage})` }}
            >
                <div className="absolute inset-0 bg-black/40" />
                <div className="relative z-10 container mx-auto px-6">
                    <h1 className="text-white text-4xl md:text-6xl font-extrabold drop-shadow-lg">Primary School</h1>
                    <p className="text-white text-lg md:text-xl mt-3">Primary 1 — Primary 5</p>
                    <span className="mt-6 inline-block bg-white/15 text-white px-4 py-2 rounded-lg backdrop-blur-sm text-sm">Building Strong Minds. Shaping Great Futures.</span>
                </div>
            </section>
            <section className="container mx-auto px-6 py-14">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
                    <div className="space-y-4">
                        <h2 className="text-3xl font-bold">Personalised Learning for Growing Scholars</h2>
                        <p className="text-gray-700 text-lg">
                            The Primary School P1 - P5 at Christ the Great School is structured to strengthen academic foundations while helping children develop curiosity, independence and confidence. We combine structured teaching with rich, meaningful experiences across subjects.
                        </p>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4"> 
                            <li className="flex gap-3 items-start">
                                <span className="p-2 bg-indigo-50 text-indigo-600 rounded-lg"><BadgeCheck className="w-5 h-5" /></span>
                                <div>
                                    <h4 className="font-semibold">Structured Literacy</h4>
                                    <p className="text-sm text-gray-600">Phonics, reading fluency and comprehension.</p>
                                </div>
                            </li>

                            <li className="flex gap-3 items-start">
                                <span className="p-2 bg-amber-50 text-amber-600 rounded-lg"><Sparkles className="w-5 h-5" /></span>
                                <div>
                                    <h4 className="font-semibold">Integrated Creativity</h4>
                                    <p className="text-sm text-gray-600">Art, performance and design thinking woven into units.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="bg-slate-50 p-6 rounded-2xl shadow-md">
                        <h3 className="text-2xl font-bold">Primary Learning Framework</h3>
                        <p className="text-gray-700 mt-2">A structured model that guides all teaching and learning experiences.</p>

                        <ul className="mt-6 space-y-4">
                            <li className="flex items-start gap-4">
                                <div className="p-3 bg-indigo-600 text-white rounded-lg"><BookOpen className="w-5 h-5" /></div>
                                <div>
                                    <h4 className="font-semibold">Foundational Mastery</h4>
                                    <p className="text-sm text-gray-600">Clear learning targets and strong academic reinforcement.</p>
                                </div>
                            </li>

                            <li className="flex items-start gap-4">
                                <div className="p-3 bg-emerald-600 text-white rounded-lg"><Calculator className="w-5 h-5" /></div>
                                <div>
                                    <h4 className="font-semibold">Critical Thinking</h4>
                                    <p className="text-sm text-gray-600">Reasoning, problem-solving and early logic development.</p>
                                </div>
                            </li>

                            <li className="flex items-start gap-4">
                                <div className="p-3 bg-sky-600 text-white rounded-lg"><Users className="w-5 h-5" /></div>
                                <div>
                                    <h4 className="font-semibold">Collaboration & Respect</h4>
                                    <p className="text-sm text-gray-600">Teamwork, communication and leadership through guided activities.</p>
                                </div>
                            </li>
                        </ul>

                        <div className="mt-6 flex gap-3">
                            <button className="px-4 py-2 bg-indigo-600 text-white rounded-md shadow hover:bg-indigo-700">Download Curriculum</button>
                            <button className="px-4 py-2 border border-slate-300 text-slate-700 rounded-md">Book a Visit</button>
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-slate-50 py-14">
                <div className="container mx-auto px-6">
                    <h3 className="text-3xl font-bold mb-8">Primary School Programs</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {programs.map((p, i) => (
                            <div key={i} className="bg-white shadow rounded-2xl overflow-hidden hover:shadow-lg transition-shadow">
                                <div className="h-40 w-full bg-gray-100 overflow-hidden">
                                    <img src={p.img} alt={p.title} className="w-full h-full object-cover hover:scale-105 transition-transform" />
                                </div>
                                <div className="p-5">
                                    <div className="flex gap-3 items-center">
                                        <span className="p-2 bg-indigo-50 text-indigo-600 rounded-lg">{p.icon}</span>
                                        <h4 className="font-semibold text-lg">{p.title}</h4>
                                    </div>
                                    <p className="mt-3 text-sm text-gray-600">{p.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section className="container mx-auto px-6 py-14">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                    <div>
                        <h3 className="text-3xl font-bold">Experiential Learning</h3>
                        <p className="text-gray-700 mt-3">
                            Beyond the classroom, children explore learning through excursions, experiments, community events and practical projects. These activities deepen understanding, build confidence and connect learning to real life.
                        </p>

                        <ul className="mt-6 space-y-4">
                            <li className="flex gap-3 items-start">
                                <span className="p-2 bg-emerald-50 text-emerald-600 rounded-lg"><Globe className="w-5 h-5" /></span>
                                <div>
                                    <h4 className="font-semibold">Field Trips</h4>
                                    <p className="text-sm text-gray-600">Visits to cultural, scientific and environmental locations.</p>
                                </div>
                            </li>

                            <li className="flex gap-3 items-start">
                                <span className="p-2 bg-indigo-50 text-indigo-600 rounded-lg"><Sparkles className="w-5 h-5" /></span>
                                <div>
                                    <h4 className="font-semibold">Innovation Days</h4>
                                    <p className="text-sm text-gray-600">Design, build and showcase student-led projects.</p>
                                </div>
                            </li>
                        </ul>

                        <div className="mt-6 flex flex-col sm:flex-row gap-3">
                            <a href="/admissions/apply" className="px-5 py-3 bg-amber-500 text-white rounded-lg inline-flex items-center gap-2 hover:scale-105 transition-transform">
                                Apply Now <ArrowRight className="w-4 h-4" />
                            </a>
                            <a href="/admissions/primary" className="px-5 py-3 border border-slate-300 text-slate-700 rounded-lg inline-flex items-center gap-2">
                                Learn More
                            </a>
                        </div>
                    </div>

                    <div className="rounded-2xl overflow-hidden shadow-lg">
                        <img src={sectionImages.experientialImage} alt="Experiential Learning" className="w-full h-80 object-cover" />
                    </div>
                </div>
            </section>
        </main>
    );
}