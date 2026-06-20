import React from "react";
import {
    HeartHandshake,
    Sun,
    Brain,
    Users,
    Target,
    Clock,
    Compass,
    GraduationCap,
} from "lucide-react";
import heroImage from "../../assets/images/inter.avif";
import nurseryImage from "../../assets/images/nur.webp";
import juniorImage from "../../assets/images/jun.avif";
import seniorImage from "../../assets/images/sen.avif";

export default function StudentWellbeing() {
    return (
        <main className="font-sans text-gray-800">
            <section
                className="relative h-[60vh] bg-cover bg-center flex items-center"
                style={{ backgroundImage: `url(${heroImage})` }}
            >
                <div className="absolute inset-0 bg-black/50" />
                <div className="relative z-10 container mx-auto px-6">
                    <h1 className="text-white text-4xl md:text-6xl font-extrabold drop-shadow-lg">
                        Student Wellbeing
                    </h1>
                    <p className="text-white/90 text-lg md:text-xl mt-3 max-w-2xl">
                        Nurturing the mind, body and character of every learner at Christ the Great School.
                    </p>
                </div>
            </section>
            <section className="container mx-auto px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl font-bold">Nursery & Primary School</h2>
                        <p className="mt-2 text-xl font-semibold text-indigo-600">
                            Building Foundations for Wellbeing
                        </p>
                        <p className="mt-4 text-gray-700">
                            In the early years, wellbeing is the foundation of learning. Our Nursery and Primary programmes are designed to help children feel safe, supported and confident while developing emotional awareness and healthy routines.
                        </p>

                        <ul className="mt-6 space-y-4">
                            <li className="flex gap-3 items-start">
                                <span className="p-2 bg-indigo-50 text-indigo-600 rounded-lg"><HeartHandshake className="w-5 h-5" /></span>
                                <div>
                                    <h4 className="font-semibold">Advisory & Morning Meeting</h4>
                                    <p className="text-sm text-gray-600">Daily check-ins that build trust, belonging and emotional safety.</p>
                                </div>
                            </li>
                            <li className="flex gap-3 items-start">
                                <span className="p-2 bg-emerald-50 text-emerald-600 rounded-lg"><Sun className="w-5 h-5" /></span>
                                <div>
                                    <h4 className="font-semibold">Social-Emotional Learning Throughout the Day</h4>
                                    <p className="text-sm text-gray-600">Empathy, kindness and communication integrated into every subject.</p>
                                </div>
                            </li>
                            <li className="flex gap-3 items-start">
                                <span className="p-2 bg-sky-50 text-sky-600 rounded-lg"><Brain className="w-5 h-5" /></span>
                                <div>
                                    <h4 className="font-semibold">Mindfulness & Self-Regulation</h4>
                                    <p className="text-sm text-gray-600">Age-appropriate practices to manage emotions and focus attention.</p>
                                </div>
                            </li>
                            <li className="flex gap-3 items-start">
                                <span className="p-2 bg-amber-50 text-amber-600 rounded-lg"><Users className="w-5 h-5" /></span>
                                <div>
                                    <h4 className="font-semibold">Family Partnership</h4>
                                    <p className="text-sm text-gray-600">Strong collaboration between home and school for holistic support.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="rounded-2xl overflow-hidden shadow-lg">
                        <img
                            src={nurseryImage}
                            alt="Nursery and Primary wellbeing"
                            className="w-full h-96 object-cover"
                        />
                    </div>
                </div>
            </section>

            <section className="bg-slate-50 py-16">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold">Junior Secondary School</h2>
                            <p className="mt-2 text-xl font-semibold text-indigo-600">
                                Fostering Academic Success and Personal Growth
                            </p>
                            <p className="mt-4 text-gray-700">
                                During the junior secondary years, students experience rapid academic and personal development. Our wellbeing programme supports balance, self-awareness and responsible independence.
                            </p>

                            <ul className="mt-6 space-y-4">
                                <li className="flex gap-3 items-start">
                                    <span className="p-2 bg-indigo-50 text-indigo-600 rounded-lg"><HeartHandshake className="w-5 h-5" /></span>
                                    <div>
                                        <h4 className="font-semibold">Advisory</h4>
                                        <p className="text-sm text-gray-600">A consistent mentor relationship for guidance and support.</p>
                                    </div>
                                </li>
                                <li className="flex gap-3 items-start">
                                    <span className="p-2 bg-emerald-50 text-emerald-600 rounded-lg"><GraduationCap className="w-5 h-5" /></span>
                                    <div>
                                        <h4 className="font-semibold">Life Skills Lab</h4>
                                        <p className="text-sm text-gray-600">Practical skills including communication, decision-making and resilience.</p>
                                    </div>
                                </li>
                                <li className="flex gap-3 items-start">
                                    <span className="p-2 bg-sky-50 text-sky-600 rounded-lg"><Target className="w-5 h-5" /></span>
                                    <div>
                                        <h4 className="font-semibold">Goal Time</h4>
                                        <p className="text-sm text-gray-600">Structured reflection and goal-setting sessions.</p>
                                    </div>
                                </li>
                                <li className="flex gap-3 items-start">
                                    <span className="p-2 bg-amber-50 text-amber-600 rounded-lg"><Clock className="w-5 h-5" /></span>
                                    <div>
                                        <h4 className="font-semibold">Analog Hour</h4>
                                        <p className="text-sm text-gray-600">Intentional screen-free time for focus and connection.</p>
                                    </div>
                                </li>
                                <li className="flex gap-3 items-start">
                                    <span className="p-2 bg-rose-50 text-rose-600 rounded-lg"><Compass className="w-5 h-5" /></span>
                                    <div>
                                        <h4 className="font-semibold">Personal Expeditions</h4>
                                        <p className="text-sm text-gray-600">Explorations that build identity, confidence and purpose.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="rounded-2xl overflow-hidden shadow-lg">
                            <img
                                src={juniorImage}
                                alt="Junior secondary wellbeing"
                                className="w-full h-96 object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>
            <section className="container mx-auto px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl font-bold">Senior Secondary School</h2>
                        <p className="mt-2 text-xl font-semibold text-indigo-600">
                            Co-Designing Student Support Systems
                        </p>
                        <p className="mt-4 text-gray-700">
                            At the senior level, students take an active role in shaping their wellbeing journey. Support systems are designed with students, empowering them to advocate for themselves and others.
                        </p>

                        <ul className="mt-6 space-y-4">
                            <li className="flex gap-3 items-start">
                                <span className="p-2 bg-indigo-50 text-indigo-600 rounded-lg"><Users className="w-5 h-5" /></span>
                                <div>
                                    <h4 className="font-semibold">Advisory as Community</h4>
                                    <p className="text-sm text-gray-600">A trusted space for dialogue, mentorship and belonging.</p>
                                </div>
                            </li>
                            <li className="flex gap-3 items-start">
                                <span className="p-2 bg-emerald-50 text-emerald-600 rounded-lg"><Compass className="w-5 h-5" /></span>
                                <div>
                                    <h4 className="font-semibold">Student-Driven Advisory Design</h4>
                                    <p className="text-sm text-gray-600">Students help shape advisory goals and activities.</p>
                                </div>
                            </li>
                            <li className="flex gap-3 items-start">
                                <span className="p-2 bg-sky-50 text-sky-600 rounded-lg"><Target className="w-5 h-5" /></span>
                                <div>
                                    <h4 className="font-semibold">Grade-Level Focus Areas</h4>
                                    <p className="text-sm text-gray-600">Targeted support aligned with academic and life transitions.</p>
                                </div>
                            </li>
                            <li className="flex gap-3 items-start">
                                <span className="p-2 bg-amber-50 text-amber-600 rounded-lg"><Brain className="w-5 h-5" /></span>
                                <div>
                                    <h4 className="font-semibold">Authentic Reflection & Growth</h4>
                                    <p className="text-sm text-gray-600">Self-assessment, reflection and continuous personal growth.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="rounded-2xl overflow-hidden shadow-lg">
                        <img
                            src={seniorImage}
                            alt="Senior secondary wellbeing"
                            className="w-full h-96 object-cover"
                        />
                    </div>
                </div>
            </section>
        </main>
    );
}
