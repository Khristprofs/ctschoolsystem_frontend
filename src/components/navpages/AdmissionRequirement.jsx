import Student from "../../assets/images/student.jpg";

function AdmissionRequirement() {
    return (
        <main className="relative w-full bg-gray-900 flex flex-col md:flex-row items-center justify-between min-h-[80vh] overflow-hidden mt-18">
            <section className="w-full md:w-1/2 px-20 py-20">
                <p className="uppercase text-[20px] tracking-wider font-semibold text-white mb-3">How to apply to Christ the Great Nursery, Primary, and Secondary School</p>
                <h1 className="text-5xl md:text-6xl font-bold text-red-600 leading-tight mb-6">Admission requirements</h1>
                <p className="text-lg text-white mb-8 max-w-lg leading-relaxed">Enrol your child to his or her respective classes. Applying made easy!</p>
                <button className="bg-red-700 hover:bg-red-800 text-white font-semibold text-lg px-8 py-3 rounded-md flex items-center gap-2 shadow-md transition">Enrol Now
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-5 h-5"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </section>
            <section className="w-full md:w-1/2 h-[80vh]">
                <img src={Student} alt="student admission" className="w-full h-full object-cover" />
            </section>
        </main>
    )
}

export default AdmissionRequirement;