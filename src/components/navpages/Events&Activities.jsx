import {
    CalendarDays,
    PartyPopper,
    Trophy,
    Briefcase,
    Globe,
    Baby,
    HeartHandshake,
    Clock,
    Users,
} from "lucide-react";
import heroImage from "../../assets/images/event.avif";
import graduationImage from "../../assets/images/leadership.avif";
import christmasImage from "../../assets/images/advisory.avif";
import sportsDayImage from "../../assets/images/sport.avif";
import careerDayImage from "../../assets/images/student.jpg";
import culturalDayImage from "../../assets/images/arts.avif";
import childrenDayImage from "../../assets/images/physical.webp";
import teachersDayImage from "../../assets/images/jun1.avif";

export default function EventsAndActivities() {
    return (
        <main className="font-sans text-gray-800 mt-19">
            <section
                className="relative h-[60vh] bg-cover bg-center flex items-center"
                style={{ backgroundImage: `url(${heroImage})` }}
            >
                <div className="absolute inset-0 bg-black/50" />
                <div className="relative z-10 container mx-auto px-6">
                    <h1 className="text-white text-4xl md:text-6xl font-extrabold">
                        Events & Activities
                    </h1>
                    <p className="text-white/90 mt-3 max-w-2xl text-lg">
                        Celebrating learning, culture, achievement, and community life at Christ the Great School.
                    </p>
                </div>
            </section>
            <section className="container mx-auto px-6 py-16">
                <div className="flex items-center gap-3 mb-10">
                    <CalendarDays className="w-7 h-7 text-indigo-600" />
                    <h2 className="text-3xl font-bold">School Events</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[{
                        title: "Graduation Ceremonies",
                        image: graduationImage,
                        icon: PartyPopper,
                        desc: "Honoring academic milestones and celebrating student achievement across school levels.",
                    }, {
                        title: "Christmas Parties",
                        image: christmasImage,
                        icon: HeartHandshake,
                        desc: "Festive celebrations that foster joy, generosity, and community spirit.",
                    }, {
                        title: "Sports Day",
                        image: sportsDayImage,
                        icon: Trophy,
                        desc: "An exciting day of athletics, teamwork, and healthy competition.",
                    }, {
                        title: "Career Day",
                        image: careerDayImage,
                        icon: Briefcase,
                        desc: "Students explore professions, career pathways, and future aspirations.",
                    }, {
                        title: "Cultural Day",
                        image: culturalDayImage,
                        icon: Globe,
                        desc: "A vibrant celebration of diversity, heritage, music, and traditions.",
                    }, {
                        title: "Children's Day",
                        image: childrenDayImage,
                        icon: Baby,
                        desc: "Celebrating the joy, creativity, and uniqueness of every child.",
                    }, {
                        title: "Teacher's Appreciation Day",
                        image: teachersDayImage,
                        icon: HeartHandshake,
                        desc: "Recognizing and honoring the dedication of our educators.",
                    }].map((event, idx) => (
                        <div key={idx} className="bg-white rounded-xl shadow-lg overflow-hidden">
                            <img src={event.image} alt={event.title} className="h-48 w-full object-cover" />
                            <div className="p-6">
                                <div className="flex items-center gap-3 mb-3">
                                    <event.icon className="w-6 h-6 text-indigo-600" />
                                    <h3 className="text-lg font-semibold">{event.title}</h3>
                                </div>
                                <p className="text-gray-600 text-sm">{event.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            <section className="bg-slate-50 py-16">
                <div className="container mx-auto px-6">
                    <div className="flex items-center gap-3 mb-10">
                        <Clock className="w-7 h-7 text-indigo-600" />
                        <h2 className="text-3xl font-bold">Activities That Shape Every Day</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        <div className="bg-white rounded-xl shadow p-6">
                            <h3 className="text-xl font-semibold mb-4">Everyday Activities</h3>
                            <ul className="space-y-3 text-gray-700 list-disc ml-5">
                                <li>Assembly Time</li>
                                <li>Teaching & Lesson Time</li>
                                <li>Long Break & Short Break</li>
                                <li>Reading Culture Time</li>
                                <li>Structured Learning Sessions</li>
                            </ul>
                        </div>
                        <div className="bg-white rounded-xl shadow p-6">
                            <h3 className="text-xl font-semibold mb-4">Community & Engagement Activities</h3>
                            <ul className="space-y-3 text-gray-700 list-disc ml-5">
                                <li>Club & Societies Day</li>
                                <li>Open Day (Parents' Visitation)</li>
                                <li>PTA Meetings</li>
                                <li>Workshops, Seminars & School Forums</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <section className="container mx-auto px-6 py-16">
                <div className="flex items-center gap-3 mb-6">
                    <Users className="w-7 h-7 text-indigo-600" />
                    <h2 className="text-3xl font-bold">Why Events & Activities Matter</h2>
                </div>
                <p className="max-w-3xl text-gray-700 leading-relaxed">
                    Our events and activities are thoughtfully designed to enrich academic learning, strengthen character, and build a vibrant school culture. Through shared experiences, students develop confidence, social skills, leadership, and a sense of belonging that extends beyond the classroom.
                </p>
            </section>
        </main>
    );
}
