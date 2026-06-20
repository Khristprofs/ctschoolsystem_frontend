import { useState, useEffect } from "react";
import SchoolImage from "../assets/images/school1.webp"
import SchoolImage1 from "../assets/images/school.webp"

function Home() {
    const images = [
        SchoolImage,
        SchoolImage1
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000); // change every 5 seconds
        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <main className="w-full mt-19">
            <section className="relative w-full h-screen overflow-hidden">
                <div
                    className="flex transition-transform duration-1500ms ease-in-out h-full"
                    style={{
                        transform: `translateX(-${currentIndex * 100}%)`,
                    }}
                >
                    {
                        images.map((img, index) => (
                            <div
                                key={index}
                                className="w-full h-full shrink-0 relative"
                            >
                                <img
                                    src={img}
                                    alt={`Slide ${index + 1}`}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-black/40"></div>
                            </div>
                        ))
                    }
                </div>
                <div className="absolute inset-0 z-10 flex flex-col text-white">
                    <div>
                        <h1 className="text-5xl md:text-6xl font-bold drop-shadow-lg mb-4 w-4xl mt-30 px-20">
                            Christ the Great Nursery, Primary and Secondary School AI
                        </h1>
                        <div className="flex flex-row gap-56 px-22">
                            <p className="text-2xl max-w-2xl font-serif pt-2"
                            >Where learning is made easy, morals, hard work, obedience is inculcated in students. We strive to providing quality education and conducive environment for learning.</p>
                            <div className="text-2xl md:text-3xl bg-black/60 w-6xl px-4 -mr-24 pt-2 rounded-l-2xl">
                                <p className="font-sans">Join a growing community</p>
                                <p className="text-red-700 font-bold">Over 240,000+</p>
                                <p className="italic">Graduates</p>
                            </div>
                        </div>
                    </div>
                    <div className="pl-20 -mt-14">
                        <p className="text-xl mb-6 mt-20 font-mono">Find your level:</p>
                        <div className="flex gap-4 flex-row text-lg font-sans font-bold">
                            <button className="bg-red-800 px-10 py-3 rounded-2xl cursor-pointer hover:bg-red-900">Nursery</button>
                            <button className="bg-red-800 px-10 py-3 rounded-2xl cursor-pointer hover:bg-red-900">Primary</button>
                            <button className="bg-red-800 px-10 py-3 rounded-2xl cursor-pointer hover:bg-red-900">Junior Secondary</button>
                            <button className="bg-red-800 px-10 py-3 rounded-2xl cursor-pointer hover:bg-red-900">Senior Secondary</button>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Home;