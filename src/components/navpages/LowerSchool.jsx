import { Book, Palette, Cpu, Activity, Circle, Heart, Fence, Globe, ArrowRight } from "lucide-react";
import heroImage from "../../assets/images/nur.webp"
import curImage from "../../assets/images/cur.avif"
import humImage from "../../assets/images/hum.avif"
import sciImage from "../../assets/images/science.avif"
import math from "../../assets/images/math.webp"
import artImage from "../../assets/images/art.avif"
import phyImage from "../../assets/images/physical.webp"
import advisoryImage from "../../assets/images/advisory.avif"
import cumpImage from "../../assets/images/computer.avif"
import enrichImage from "../../assets/images/enrich.avif"
import interImage from "../../assets/images/inter.avif"

const cardImages = [
    curImage,
    humImage,
    sciImage,
    math,
    artImage,
    phyImage,
    advisoryImage,
    cumpImage,
    enrichImage

]

export default function LowerSchool() {
  const cards = [
    {
      title: "Curriculum",
      icon: <Book className="w-6 h-6" />,
      desc: "A play-centred, inquiry-led curriculum that builds foundational literacy, numeracy and curiosity through hands-on discovery.",
      img: cardImages[0],
    },
    {
      title: "Humanities",
      icon: <Globe className="w-6 h-6" />,
      desc: "Age-appropriate social studies that help children understand communities, cultures and kindness in action.",
      img: cardImages[1],
    },
    {
      title: "Science",
      icon: <Activity className="w-6 h-6" />,
      desc: "Simple experiments and nature-based learning to spark wonder and scientific thinking.",
      img: cardImages[2],
    },
    {
      title: "Mathematics",
      icon: <Circle className="w-6 h-6" />,
      desc: "Concrete-to-abstract approach: manipulatives first, then patterns, counting and early problem solving.",
      img: cardImages[3],
    },
    {
      title: "Visual Arts",
      icon: <Palette className="w-6 h-6" />,
      desc: "Self-expression through drawing, collage and multi-media projects that develop fine motor and creative confidence.",
      img: cardImages[4],
    },
    {
      title: "Physical Education",
      icon: <Fence className="w-6 h-6" />,
      desc: "Gross motor skill development, games and movement for healthy bodies and cooperative play.",
      img: cardImages[5],
    },
    {
      title: "Advisory / SEL",
      icon: <Heart className="w-6 h-6" />,
      desc: "Daily social-emotional learning routine that teaches empathy, self-regulation and conflict resolution.",
      img: cardImages[6],
    },
    {
      title: "Computer Science",
      icon: <Cpu className="w-6 h-6" />,
      desc: "Screen-time that matters: unplugged computing principles, basic logic games and supervised digital exploration.",
      img: cardImages[7],
    },
    {
      title: "Enrichment",
      icon: <Book className="w-6 h-6" />,
      desc: "Music, language play and intersession projects that bring learning to life.",
      img: cardImages[8],
    },
  ];

  return (
    <main className="font-sans text-gray-800">
      <section
        className="relative h-[56vh] md:h-[60vh] lg:h-[70vh] w-full bg-cover bg-center flex items-center"
        style={{ backgroundImage: `url(${heroImage})` }}
        aria-label="Lower School hero"
      >
        <div className="absolute inset-0 bg-black/45" aria-hidden></div>
        <div className="container mx-auto relative z-10 px-6">
          <div className="max-w-3xl text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight drop-shadow-lg">
              Lower School
            </h1>
            <p className="mt-4 text-lg md:text-xl opacity-90">Nursery 1 — Nursery 3</p>
            <p className="mt-6 bg-white/10 inline-block px-4 py-2 rounded-lg text-sm">
              Where Creativity Meets Capability — Christ the Great School
            </p>
          </div>
        </div>
        <div className="absolute right-6 bottom-6 z-20">
          <button
            className="flex items-center gap-2 bg-white/90 text-gray-900 px-4 py-2 rounded-full shadow-lg hover:scale-105 transition-transform"
            onClick={() => window.scrollTo({ top: 700, behavior: "smooth" })}
            aria-label="Jump to program details"
          >
            Learn more
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
      <section className="container mx-auto px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold">Nursery 1 to Nursery 3</h2>
            <p className="text-lg text-gray-700">At Christ the Great School our Lower School (Nursery 1 — Nursery 3) is where early learners take flight. We blend play, purposeful routines and guided discovery so children build confidence, independence and a lifelong love of learning.</p>
            <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <li className="flex items-start gap-3">
                <span className="flex-none bg-indigo-50 text-indigo-600 rounded-lg p-2"><Book className="w-5 h-5" /></span>
                <div>
                  <h4 className="font-semibold">Play-based learning</h4>
                  <p className="text-sm text-gray-600">Child-led exploration with teacher-guided scaffolds.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-none bg-emerald-50 text-emerald-600 rounded-lg p-2"><Palette className="w-5 h-5" /></span>
                <div>
                  <h4 className="font-semibold">Creative expression</h4>
                  <p className="text-sm text-gray-600">Art, music and sensory projects every week.</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="bg-linear-to-tr from-white to-slate-50 p-6 rounded-2xl shadow-md">
            <h3 className="text-2xl font-bold">PATH Framework</h3>
            <p className="mt-2 text-gray-700">Our PATH approach focuses on four pillars that shape every experience in the Lower School.</p>

            <div className="mt-6 grid grid-cols-1 gap-4">
              <div className="flex items-start gap-4">
                <div className="bg-indigo-600 text-white p-3 rounded-lg shadow-sm"><svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c1.657 0 3 1.567 3 3.5S13.657 15 12 15s-3-1.567-3-3.5S10.343 8 12 8z"/></svg></div>
                <div>
                  <h4 className="font-semibold">P — Playful learning</h4>
                  <p className="text-sm text-gray-600">Every day includes structured and free play to develop social skills and curiosity.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-emerald-600 text-white p-3 rounded-lg shadow-sm"><svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3"/></svg></div>
                <div>
                  <h4 className="font-semibold">A — Assessment for growth</h4>
                  <p className="text-sm text-gray-600">Formative, gentle assessments that inform personalised next steps.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-sky-600 text-white p-3 rounded-lg shadow-sm"><svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7h18M3 12h18M3 17h18"/></svg></div>
                <div>
                  <h4 className="font-semibold">T — Thematic & integrated</h4>
                  <p className="text-sm text-gray-600">Cross-curricular units that make learning coherent and memorable.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-amber-600 text-white p-3 rounded-lg shadow-sm"><svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 20l9-5-9-5-9 5 9 5z"/></svg></div>
                <div>
                  <h4 className="font-semibold">H — Holistic development</h4>
                  <p className="text-sm text-gray-600">We nurture cognitive, emotional, physical and social growth equally.</p>
                </div>
              </div>
            </div>

            <div className="mt-6 flex gap-3">
              <button className="px-4 py-2 rounded-md bg-indigo-600 text-white shadow hover:bg-indigo-700">Download brochure</button>
              <button className="px-4 py-2 rounded-md border border-slate-200 text-slate-700">Request a tour</button>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-slate-50 py-12">
        <div className="container mx-auto px-6">
          <h3 className="text-3xl font-bold mb-6">Program Highlights</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cards.map((c, i) => (
              <article key={i} className="bg-white rounded-2xl shadow hover:shadow-lg transition-shadow overflow-hidden">
                <div className="h-40 w-full bg-gray-100 overflow-hidden">
                  <img src={c.img} alt={c.title} className="object-cover w-full h-full scale-100 transition-transform hover:scale-105" />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-indigo-50 text-indigo-600 rounded-md">{c.icon}</div>
                    <h4 className="text-lg font-semibold">{c.title}</h4>
                  </div>
                  <p className="mt-3 text-sm text-gray-600">{c.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="container mx-auto px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-3xl font-bold">Experiential Learning & Intersession</h3>
            <p className="mt-3 text-gray-700">Our intersession programmes and project weeks give children time to dive deeper into a theme — from mini science labs and nature walks to creative studios and performance play. These short, intensive experiences consolidate classroom learning and ignite new passions.</p>

            <ul className="mt-6 grid grid-cols-1 gap-3">
              <li className="flex items-start gap-3">
                <div className="p-2 bg-emerald-50 text-emerald-600 rounded-md"><Activity className="w-5 h-5" /></div>
                <div>
                  <h4 className="font-semibold">Project Week</h4>
                  <p className="text-sm text-gray-600">A theme-based deep-dive culminating in a sharing morning for parents.</p>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <div className="p-2 bg-sky-50 text-sky-600 rounded-md"><Fence className="w-5 h-5" /></div>
                <div>
                  <h4 className="font-semibold">Outdoor Explorations</h4>
                  <p className="text-sm text-gray-600">Guided nature walks and play-based environmental activities.</p>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <div className="p-2 bg-indigo-50 text-indigo-600 rounded-md"><Cpu className="w-5 h-5" /></div>
                <div>
                  <h4 className="font-semibold">Tech for Tots</h4>
                  <p className="text-sm text-gray-600">Simple logic games and supervised digital activities that reinforce patterns and sequencing.</p>
                </div>
              </li>
            </ul>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a href="/admissions/apply" className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-amber-500 text-white shadow hover:scale-105 transition-transform">
                Apply Now
                <ArrowRight className="w-4 h-4" />
              </a>

              <a href="/admissions/intersession" className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-slate-200 text-slate-700">
                Learn about intersession
              </a>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img src={interImage} alt="Intersession" className="object-cover w-full h-80" />
          </div>
        </div>
      </section>
    </main>
  );
}