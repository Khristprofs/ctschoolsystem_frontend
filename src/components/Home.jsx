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
        <main className="w-full pt-20">
            <section className="relative w-full min-h-screen overflow-hidden">
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
                <div className="absolute inset-0 bg-black/40 flex items-center">

                    <div className="max-w-7xl mx-auto w-full px-6">

                        <h1 className="
            text-3xl
            sm:text-4xl
            md:text-5xl
            lg:text-6xl
            font-bold
            leading-tight
            max-w-4xl
        ">
                            Christ the Great Nursery,
                            Primary and Secondary School
                        </h1>

                        <div className="
            mt-8
            flex
            flex-col
            lg:flex-row
            gap-10
            items-start
        ">

                            <p className="
                text-base
                sm:text-lg
                md:text-xl
                max-w-xl
            ">
                                Where learning is made easy, morals, hard work,
                                obedience is inculcated in students. We strive to
                                provide quality education in a conducive learning
                                environment.
                            </p>

                            <div className="
                bg-black/60
                rounded-xl
                p-6
                text-center
                w-full
                lg:w-80
            ">

                                <p className="text-lg">
                                    Join a growing community
                                </p>

                                <h2 className="text-4xl font-bold text-red-600">
                                    240,000+
                                </h2>

                                <p>Graduates</p>

                            </div>

                        </div>

                        <div className="mt-10">

                            <p className="mb-5 text-lg">
                                Find your level
                            </p>

                            <div className="
                flex
                flex-wrap
                gap-4
            ">

                                <button className="bg-red-700 px-6 py-3 rounded-xl">
                                    Nursery
                                </button>

                                <button className="bg-red-700 px-6 py-3 rounded-xl">
                                    Primary
                                </button>

                                <button className="bg-red-700 px-6 py-3 rounded-xl">
                                    Junior Secondary
                                </button>

                                <button className="bg-red-700 px-6 py-3 rounded-xl">
                                    Senior Secondary
                                </button>

                            </div>

                        </div>

                    </div>

                </div>
            </section>
        </main>
    )
}

export default Home;