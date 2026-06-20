import { PhoneCall } from "lucide-react";
import Interstudent from "../../assets/images/InterImg.webp";
import InternationalSlide from "../InternationalSlide";

const InternationalStudent = () => {
    return(
        <section className="w-full">
            <div className="w-full h-[85vh] flex items-center mt-56">
                <img src={Interstudent} alt="" 
                className="absolute inset-0 w-full object-cover h-[900px]"/>
                <div className="relative bg-white max-w-xl ml-10 p-8 rounded-lg border-t-8 border-blue-600 pt-10">
                    <p className="text-xl font-semibold tracking-wider uppercase text-gray-800">International Student Admission</p>
                    <h1 className="text-2xl font-bold mt-6 leading-snug">An accredited online school for international student</h1>
                    <p className="mt-6 text-gray-900 leading-relaxed text-lg">
                        Christ the Great School welcomes students from around the world. Join our international community and learn on your time with our flexible online classes. We're here to support you every step of the way
                    </p>
                    <button  className="mt-10 flex items-center gap-3 bg-red-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-red-800 transition-all cursor-pointer"
                    >
                        <PhoneCall className="w-5 h-5"/>
                        07070000460
                        </button>
                </div>
            </div>

            <InternationalSlide />
        </section>
    )
}

export default InternationalStudent;