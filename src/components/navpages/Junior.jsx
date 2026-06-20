import {
  BookOpen,
  Calculator,
  Atom,
  Globe2,
  Laptop,
  Users,
  Award,
  ArrowRight,
} from "lucide-react";
import heroImage from "../../assets/images/jun.avif"
import aboutImage from "../../assets/images/jun1.avif"

export default function JuniorSecondarySchool() {
  const programs = [
    {
      title: "English & Communication",
      desc: "Advanced reading, writing, speaking and critical comprehension skills aligned with junior secondary standards.",
      icon: <BookOpen className="w-6 h-6" />,
    },
    {
      title: "Mathematics",
      desc: "Number systems, algebraic thinking and problem-solving strategies that prepare students for senior secondary maths.",
      icon: <Calculator className="w-6 h-6" />,
    },
    {
      title: "Integrated Science",
      desc: "Foundations in physics, chemistry and biology through experiments, observation and inquiry-based learning.",
      icon: <Atom className="w-6 h-6" />,
    },
    {
      title: "Social Studies",
      desc: "Civic responsibility, geography, history and global awareness for informed citizenship.",
      icon: <Globe2 className="w-6 h-6" />,
    },
    {
      title: "ICT & Computing",
      desc: "Digital literacy, basic programming concepts and responsible technology use.",
      icon: <Laptop className="w-6 h-6" />,
    },
    {
      title: "Leadership & Life Skills",
      desc: "Character education, teamwork, communication and leadership development.",
      icon: <Users className="w-6 h-6" />,
    },
  ];

  return (
    <main className="font-sans text-gray-800">
      <section
        className="relative h-[60vh] w-full bg-cover bg-center flex items-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 container mx-auto px-6">
          <h1 className="text-white text-4xl md:text-6xl font-extrabold drop-shadow-lg">
            Junior Secondary School
          </h1>
          <p className="text-white text-lg md:text-xl mt-3">JSS 1 - JSS 3</p>
          <span className="inline-block mt-6 bg-white/15 backdrop-blur-sm text-white px-4 py-2 rounded-lg text-sm">
            Where Purpose Meets Possibility
          </span>
        </div>
      </section>
      <section className="container mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold">Building Strong Academic & Moral Foundations</h2>
            <p className="text-gray-700 text-lg">
              The Junior Secondary School JSS 1 - JSS 3 at Christ the Great School bridges childhood learning and senior secondary readiness. Students develop academic discipline, critical thinking and personal responsibility while discovering their strengths and interests.
            </p>
            <p className="text-gray-700">
              Our programme combines rigorous academics with character formation, leadership opportunities and guided exploration to prepare students for higher-level studies and real-world challenges.
            </p>
            <ul className="mt-4 space-y-3">
              <li className="flex gap-3 items-start">
                <span className="p-2 bg-indigo-50 text-indigo-600 rounded-lg"><Award className="w-5 h-5" /></span>
                <div>
                  <h4 className="font-semibold">Academic Excellence</h4>
                  <p className="text-sm text-gray-600">Standards-aligned curriculum with continuous assessment.</p>
                </div>
              </li>
              <li className="flex gap-3 items-start">
                <span className="p-2 bg-emerald-50 text-emerald-600 rounded-lg"><Users className="w-5 h-5" /></span>
                <div>
                  <h4 className="font-semibold">Character & Values</h4>
                  <p className="text-sm text-gray-600">Discipline, respect, leadership and integrity.</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img
              src={aboutImage}
              alt="Junior Secondary students"
              className="w-full h-96 object-cover"
            />
          </div>
        </div>
      </section>
      <section className="bg-slate-50 py-14">
        <div className="container mx-auto px-6">
          <h3 className="text-3xl font-bold mb-8">Academic Program Highlights</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {programs.map((p, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl shadow hover:shadow-lg transition-shadow p-6"
              >
                <div className="flex items-center gap-3">
                  <span className="p-3 bg-indigo-50 text-indigo-600 rounded-lg">
                    {p.icon}
                  </span>
                  <h4 className="text-lg font-semibold">{p.title}</h4>
                </div>
                <p className="mt-4 text-sm text-gray-600">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="container mx-auto px-6 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-3xl font-bold">Prove Mastery. Prepare for the Future.</h3>
          <p className="mt-4 text-gray-700 text-lg">
            Through continuous assessment, projects, examinations and leadership activities, our students demonstrate mastery of knowledge and skills required for Senior Secondary School and beyond.
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
