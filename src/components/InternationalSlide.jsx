import { useState, useEffect } from "react";
import {
  BookOpen,
  Eye,
  User,
  Globe,
  GraduationCap,
  Brain,
  BadgeCheck,
  Award,
  HeartHandshake,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";

const slides = [
  { icon: <BookOpen className="w-12 h-12 mx-auto text-red-700" />, title: "Experience on-demand learning with FlexPath", description: "Learn at your own pace with flexible deadlines and online programs designed for international students." },
  { icon: <Eye className="w-12 h-12 mx-auto text-red-700" />, title: "Gain practical knowledge and skills", description: "Instead of memorizing, you'll apply real-world skills that matter in today's job market." },
  { icon: <User className="w-12 h-12 mx-auto text-red-700" />, title: "Student Support", description: "From academic coaches to advisors, our team supports you throughout your journey in Christ the Great." },
  { icon: <Globe className="w-12 h-12 mx-auto text-red-700" />, title: "Global Community", description: "Join a diverse student body from over 50+ countries worldwide." },
  { icon: <GraduationCap className="w-12 h-12 mx-auto text-red-700" />, title: "Accredited Programs", description: "Our courses meet global education standards for quality and excellence." },
  { icon: <Brain className="w-12 h-12 mx-auto text-red-700" />, title: "Critical Thinking Training", description: "Develop analytical skills that are essential for high-level careers." },
  { icon: <BadgeCheck className="w-12 h-12 mx-auto text-red-700" />, title: "Verified Certificates", description: "Receive recognized certifications that boost employability." },
  { icon: <Award className="w-12 h-12 mx-auto text-red-700" />, title: "Awards & Recognition", description: "Our university has won multiple awards for innovation and education." },
  { icon: <HeartHandshake className="w-12 h-12 mx-auto text-red-700" />, title: "Strong Career Partners", description: "We collaborate with top companies to help students secure jobs and internships." },
];

const InternationalSlide = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slidesPerPage = 3;

  const maxIndex = Math.ceil(slides.length / slidesPerPage) - 1;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev === maxIndex ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [maxIndex]);

  const goPrev = () => setCurrentIndex(prev => (prev === 0 ? maxIndex : prev - 1));
  const goNext = () => setCurrentIndex(prev => (prev === maxIndex ? 0 : prev + 1));

  return (
    <section className="w-full py-20 bg-gray-200">
      <h2 className="text-3xl font-bold text-center mb-10 uppercase font-mono">
        Why International Students Choose Us
      </h2>

      <div className="relative w-full overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            width: `${(slides.length / slidesPerPage) * 100}%`,
            transform: `translateX(-${currentIndex * (100 / (slides.length / slidesPerPage))}%)`,
          }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className="w-1/3 p-6"
            >
              <div className="p-8 rounded-lg shadow-lg border border-gray-200 bg-white hover:shadow-xl transition-all h-full">
                {slide.icon}
                <h3 className="text-xl font-bold mt-5">{slide.title}</h3>
                <p className="text-gray-600 mt-3 leading-relaxed">{slide.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center gap-6 mt-10">
          <button onClick={goPrev} className="p-3 rounded-full shadow-md border hover:bg-gray-200 transition-all">
            <ArrowLeft className="w-6 h-6" />
          </button>
          <button onClick={goNext} className="p-3 rounded-full shadow-md border hover:bg-gray-200 transition-all">
            <ArrowRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default InternationalSlide;
