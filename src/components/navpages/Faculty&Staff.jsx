import React from "react";
import HeroImage from "../../assets/images/teacher.avif"; 
import administrationImg from "../../assets/images/administration.avif"
import headtecherImg from "../../assets/images/head.avif";
import bursarImg from "../../assets/images/man.avif";
import vicePrincipalImg from "../../assets/images/viceprin.avif";
import viceheadteacherImg from "../../assets/images/vicehead.avif";
import deanImg from "../../assets/images/man1.avif"
import admni1Img from "../../assets/images/man2.avif";
import auditor from "../../assets/images/headteacher.avif"
import admni2 from "../../assets/images/admin.avif"
import admni3 from "../../assets/images/admin1.avif"
import admni4 from "../../assets/images/admin2.avif"
import admni5 from "../../assets/images/auditor.avif"
import coordImg from "../../assets/images/coord.avif"
import libImg from "../../assets/images/lib.avif"
import teacher1Img from "../../assets/images/teach.avif"
import prinImg from "../../assets/images/prin.webp"

const FacultyStaff = () => {
  const team = [
    {
      name: "Mr. Olung Peter Moses",
      role: "Administration",
      img: administrationImg,
    },
    {
      name: "Dr. Eze Chinencherem M.",
      role: "Principal",
      img: prinImg,
    },
    {
      name: "Mrs. Okeke Ifeoma P.",
      role: "Vice Principal",
      img: vicePrincipalImg,
    },
    {
      name: "Mrs. Jane Judith",
      role: "Headteacher",
      img: headtecherImg,
    },
    {
      name: "Mr. Daniel Okeyo",
      role: "Vice Headteacher",
      img: viceheadteacherImg,
    },
    {
      name: "Mr. Henry Nwosu",
      role: "Bursar",
      img: bursarImg,
    },
    {
      name: "Mrs. Linda James",
      role: "Auditor",
      img: auditor,
    },
    {
      name: "Mr. Kingsley Eze",
      role: "Dean of Study",
      img: deanImg,
    },
    {
      name: "Mrs. Rita Madu",
      role: "Administrator Junior Section",
      img: admni4,
    },
    {
      name: "Mr. Samuel Adebanjo",
      role: "Administrator Junior Section",
      img: admni1Img,
    },
    {
      name: "Mrs. Grace Akpan",
      role: "Administrator Senior Section",
      img: admni5,
    },
    {
      name: "Mr. Peter Johnson",
      role: "Administrator Senior Section",
      img: admni2,
    },
    {
      name: "Mr. Ibukun Ojo",
      role: "Subject Coordinator",
      img: admni3,
    },
    {
      name: "Mr. Kemi Alade",
      role: "Subject Coordinator",
      img: coordImg,
    },
    {
      name: "Mr. Wilson Umeh",
      role: "Librarian",
      img: libImg,
    },
    {
      name: "Mrs. Stella Nwachukwu",
      role: "Teacher",
      img: teacher1Img,
    },
  ];

  return (
    <div className="w-full mt-28">
      <section
        className="w-full h-[70vh] bg-cover bg-center relative flex items-end justify-center"
        style={{ backgroundImage: `url(${HeroImage})` }}
      >
        <div className="bg-black/50 w-full py-10 flex justify-center items-center">
          <h1 className="text-white text-4xl md:text-6xl font-bold tracking-wide text-center">
            Faculty & Staff
          </h1>
        </div>
      </section>

      <section className="px-6 md:px-20 py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Excellence in Education Through Outstanding Professionals
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Our faculty and staff are passionate, dedicated, and committed to 
            academic excellence. Each member of our team brings years of 
            experience, research expertise, and real-world knowledge to the 
            classroom.  
            <br />
            <br />
            At our school, we believe in shaping future leaders through 
            mentorship, innovation, and high-quality education. Our team works 
            tirelessly to ensure that every student receives exceptional support 
            and guidance in their academic journey.
          </p>
        </div>
      </section>
      <section className="px-6 md:px-20 py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
          Meet Our Team
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {team.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold text-gray-800">
                  {member.name}
                </h3>
                <p className="text-sm text-gray-500 mt-1">{member.role}</p>
                <a
                  href="#"
                  className="text-red-700 font-medium text-sm mt-3 inline-block hover:underline"
                >
                  View Bio →
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default FacultyStaff;