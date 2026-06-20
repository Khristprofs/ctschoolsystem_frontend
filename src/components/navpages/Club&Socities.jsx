import React from "react";
import { Users, Cpu, Mic, HeartHandshake } from "lucide-react";
import introImage from "../../assets/images/club.avif";
import roboticsImage from "../../assets/images/rob.avif";
import debateImage from "../../assets/images/deb.avif";
import redCrossImage from "../../assets/images/red.webp";
import studentClubsImage from "../../assets/images/game.avif";

export default function ClubsAndSocieties() {
    return (
        <main className="font-sans text-gray-800 mt-18">
            <section className="container mx-auto px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
                            Clubs & Societies
                        </h1>
                        <h2 className="text-2xl font-semibold text-indigo-600 mb-3">
                            Student-Led Clubs
                        </h2>
                        <p className="text-gray-700 leading-relaxed">
                            At Christ the Great School, clubs and societies are a vital part of student life. Led by students and supported by faculty mentors, our clubs encourage leadership, creativity, teamwork, and personal growth beyond the classroom.
                        </p>
                        <p className="mt-4 text-gray-700 leading-relaxed">
                            Through participation, students explore interests, develop confidence, and build lifelong skills while contributing meaningfully to the school community.
                        </p>
                    </div>

                    <div className="rounded-2xl overflow-hidden shadow-lg">
                        <img
                            src={introImage}
                            alt="Student-led clubs"
                            className="w-full h-96 object-cover"
                        />
                    </div>
                </div>
            </section>
            <section className="bg-slate-900 py-16">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold text-white mb-10">Club Spotlights</h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                            <img
                                src={roboticsImage}
                                alt="Robotics Club Antares"
                                className="h-48 w-full object-cover"
                            />
                            <div className="p-6">
                                <div className="flex items-center gap-3 mb-3">
                                    <Cpu className="w-6 h-6 text-indigo-600" />
                                    <h3 className="text-xl font-semibold">ROBOTICS (ANTARES)</h3>
                                </div>
                                <p className="text-gray-600">
                                    The Antares Robotics Club challenges students to design, build, and program robots while developing problem-solving skills, innovation, and collaboration.
                                </p>
                            </div>
                        </div>
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                            <img
                                src={debateImage}
                                alt="Speech and Debate Club"
                                className="h-48 w-full object-cover"
                            />
                            <div className="p-6">
                                <div className="flex items-center gap-3 mb-3">
                                    <Mic className="w-6 h-6 text-indigo-600" />
                                    <h3 className="text-xl font-semibold">SPEECH & DEBATE</h3>
                                </div>
                                <p className="text-gray-600">
                                    Students refine public speaking, critical thinking, and persuasive communication through debates, speeches, and competitions.
                                </p>
                            </div>
                        </div>
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                            <img
                                src={redCrossImage}
                                alt="Red Cross Club"
                                className="h-48 w-full object-cover"
                            />
                            <div className="p-6">
                                <div className="flex items-center gap-3 mb-3">
                                    <HeartHandshake className="w-6 h-6 text-indigo-600" />
                                    <h3 className="text-xl font-semibold">RED CROSS</h3>
                                </div>
                                <p className="text-gray-600">
                                    The Red Cross Club promotes humanitarian values, first aid awareness, and community service while fostering empathy and responsibility.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="container mx-auto px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl font-bold mb-4">Student Clubs</h2>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Our clubs and societies are thoughtfully designed to meet the developmental needs and interests of students across all school levels.
                        </p>

                        <div className="space-y-5">
                            <div className="flex gap-3 items-start">
                                <Users className="w-5 h-5 text-indigo-600 mt-1" />
                                <div>
                                    <h4 className="font-semibold">Nursery & Primary School</h4>
                                    <p className="text-sm text-gray-600">
                                        Creative arts, music, sports, storytelling, and environmental clubs that encourage exploration and teamwork.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-3 items-start">
                                <Users className="w-5 h-5 text-indigo-600 mt-1" />
                                <div>
                                    <h4 className="font-semibold">Junior Secondary School</h4>
                                    <p className="text-sm text-gray-600">
                                        STEM clubs, debate, entrepreneurship, leadership, and cultural societies that build confidence and skills.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-3 items-start">
                                <Users className="w-5 h-5 text-indigo-600 mt-1" />
                                <div>
                                    <h4 className="font-semibold">Senior Secondary School</h4>
                                    <p className="text-sm text-gray-600">
                                        Advanced academic clubs, service organizations, innovation hubs, and student-led initiatives preparing learners for leadership beyond school.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="rounded-2xl overflow-hidden shadow-lg">
                        <img
                            src={studentClubsImage}
                            alt="Student clubs and societies"
                            className="w-full h-96 object-cover"
                        />
                    </div>
                </div>
            </section>
        </main>
    );
}
