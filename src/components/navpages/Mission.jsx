import HeroImg from "../../assets/images/School1.webp";
import MissionImg from "../../assets/images/admitStudent.webp";

const MissionAndPhilosophy = () => {
  return (
    <main className="w-full mt-18">
      <section className="relative w-full h-[60vh] md:h-[75vh] overflow-hidden">
        <img
          src={HeroImg}
          alt="Mission Hero"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/50 flex items-center justify-center px-4">
          <h1 className="text-white text-4xl md:text-6xl font-bold text-center drop-shadow-lg tracking-wide">
            Our Mission & Educational Philosophy
          </h1>
        </div>
      </section>
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-20 grid md:grid-cols-2 gap-14 items-center">
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Our Mission
          </h2>
          <p className="text-gray-700 leading-relaxed text-lg">
            At Christ the Great, our mission is to nurture intelligent,
            visionary, and morally grounded leaders who will shape the future.
            We are committed to delivering high-quality, globally competitive
            education through modern learning methodologies, innovation, and
            discipline.
          </p>

          <p className="text-gray-700 leading-relaxed text-lg">
            We empower students to discover their purpose, develop their
            potential, and excel in a world driven by knowledge, creativity, and
            technologies of the future.
          </p>
        </div>
        <div>
          <img
            src={MissionImg}
            alt="Mission"
            className="w-full rounded-2xl shadow-xl object-cover"
          />
        </div>
      </section>
      <section className="bg-gray-50 py-20 px-6 md:px-12">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10">
            Our Educational Philosophy
          </h2>

          <p className="text-gray-700 text-lg leading-relaxed max-w-4xl mx-auto">
            Our educational philosophy is built on the belief that every student
            possesses unique potential capable of transforming society and the
            world.  
            <br /> <br />
            We prioritize a holistic approach to learning — one that combines
            intellectual development, practical skills, character formation, and
            emotional intelligence.  
            <br /> <br />
            Through experiential learning, mentorship, discipline, and deep
            engagement with real-world challenges, we shape students into
            innovators, critical thinkers, and responsible leaders committed to
            excellence.
          </p>
        </div>
      </section>
    </main>
  );
};

export default MissionAndPhilosophy;
