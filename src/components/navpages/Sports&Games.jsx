import React from "react";
import {
    Dumbbell,
    Trophy,
    CalendarDays,
    Users,
    Volleyball,
    Table,
} from "lucide-react";

import sportsIntroImage from "../../assets/images/game.avif";
import athleticsCalendarImage from "../../assets/images/game1.avif";
import peImage from "../../assets/images/club.avif";
import gamesImage from "../../assets/images/game2.avif";

export default function SportsAndGames() {
    return (
        <main className="font-sans text-gray-800 mt-18">
            <section className="container mx-auto px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                    <div>
                        <img
                            src={sportsIntroImage}
                            alt="School sports"
                            className="w-full h-56 object-cover rounded-2xl shadow mb-6"
                        />

                        <h1 className="text-4xl font-extrabold mb-4">Sports & Games</h1>
                        <p className="text-gray-700 mb-6">
                            Sports at Christ the Great School promote physical fitness, teamwork, discipline, and resilience. Our athletics programme is carefully structured to meet the developmental needs of students at every stage.
                        </p>

                        <div className="space-y-6">
                            <div className="flex gap-4">
                                <Users className="w-6 h-6 text-indigo-600 mt-1" />
                                <div>
                                    <h3 className="font-semibold">Nursery & Primary School</h3>
                                    <p className="text-sm text-gray-600">
                                        Foundational activities including sack race, short sprints, jumps, basic football skills, table tennis fundamentals, and fun movement games that build coordination and confidence.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <Trophy className="w-6 h-6 text-indigo-600 mt-1" />
                                <div>
                                    <h3 className="font-semibold">Junior Secondary School</h3>
                                    <p className="text-sm text-gray-600">
                                        Structured training in athletics, football, volleyball, table tennis, jumps, and inter-house competitions focused on teamwork and skill development.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <Dumbbell className="w-6 h-6 text-indigo-600 mt-1" />
                                <div>
                                    <h3 className="font-semibold">Senior Secondary School</h3>
                                    <p className="text-sm text-gray-600">
                                        Competitive athletics, football, volleyball, baseball fundamentals, advanced field events, leadership roles in sports teams, and preparation for external competitions.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-slate-50 rounded-2xl shadow-lg overflow-hidden">
                        <img
                            src={athleticsCalendarImage}
                            alt="Athletics calendar"
                            className="w-full h-64 object-cover"
                        />
                        <div className="p-6">
                            <div className="flex items-center gap-3 mb-3">
                                <CalendarDays className="w-6 h-6 text-indigo-600" />
                                <h2 className="text-2xl font-bold">Athletics Calendar</h2>
                            </div>
                            <p className="text-gray-600">
                                Our athletics calendar features inter-house sports, friendly matches, sports day, and seasonal competitions, ensuring students remain active and engaged throughout the academic year.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-slate-900 py-16 text-slate-100">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <div className="flex items-center gap-3 mb-4">
                            <Dumbbell className="w-7 h-7 text-indigo-400" />
                            <h2 className="text-3xl font-bold">Physical Education</h2>
                        </div>
                        <p className="text-slate-300 leading-relaxed mb-6">
                            Physical Education at Christ the Great School is a core part of our curriculum. Lessons focus on fitness, movement skills, sportsmanship, health awareness, and lifelong habits of physical activity.
                        </p>
                        <p className="text-slate-300 leading-relaxed">
                            Students participate in age-appropriate activities that enhance strength, flexibility, coordination, and overall wellbeing while learning the value of fair play and teamwork.
                        </p>
                    </div>

                    <img
                        src={peImage}
                        alt="Physical education"
                        className="w-full h-80 object-cover rounded-2xl shadow-lg mt-10"
                    />
                </div>
            </section>

            <section className="container mx-auto px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl font-bold mb-4">Games</h2>
                        <p className="text-gray-700 mb-6">
                            Our games programme complements formal sports by providing opportunities for recreation, strategy, and social interaction in a fun and inclusive environment.
                        </p>

                        <ul className="space-y-4">
                            <li className="flex gap-3">
                                <Volleyball className="w-5 h-5 text-indigo-600 mt-1" />
                                <span className="text-gray-600">Team games that build collaboration and communication</span>
                            </li>
                            <li className="flex gap-3">
                                <Table className="w-5 h-5 text-indigo-600 mt-1" />
                                <span className="text-gray-600">Indoor and outdoor games that enhance focus and coordination</span>
                            </li>
                            <li className="flex gap-3">
                                <Trophy className="w-5 h-5 text-indigo-600 mt-1" />
                                <span className="text-gray-600">Recreational competitions that encourage healthy participation</span>
                            </li>
                        </ul>
                    </div>

                    <div className="rounded-2xl overflow-hidden shadow-lg">
                        <img
                            src={gamesImage}
                            alt="School games"
                            className="w-full h-96 object-cover"
                        />
                    </div>
                </div>
            </section>
        </main>
    );
}
