import {motion} from 'framer-motion'
//import { useState } from 'react';
import { LuCctv } from "react-icons/lu"
import { SiHyperskill } from "react-icons/si";
import { MdMiscellaneousServices } from "react-icons/md";
//import { RiCctv2Line } from "react-icons/ri";
import { MdSecurity } from "react-icons/md";
import { GrShieldSecurity } from "react-icons/gr";
import { IoMdLock } from "react-icons/io";
import { FaCamera } from "react-icons/fa";
import { BiSolidCctv } from "react-icons/bi";
import { FaWhatsapp } from "react-icons/fa";
import React from 'react'; // Added missing React import

// Phone number for WhatsApp - replace with your actual number
const WHATSAPP_NUMBER = "1234567890"; // Replace with your number including country code

// Enhanced ServiceData with additional security services and gadget sales
const ServiceData = [
  {
    id: 1,
    title: "CCTV INSTALLATION",
    Desc: "We install all kinds of cameras for both residentials, event centers, eateries and corporate organizations. Our surveillance solutions include high-definition cameras, night vision capabilities, and remote monitoring options.",
    icon: LuCctv
  },
  {
    id: 2,
    title: "SOFT SKILL TRAINING",
    Desc: "Get yourself acquainted with the latest Skill in the present age. ICT is the future so get involved in the latest ICT skill including security system management and operation.",
    icon: SiHyperskill
  },
  {
    id: 3,
    title: "CONSULTING",
    Desc: "We are your trusted partner in Information and Communication Technology solutions. Our dedicated team of experts is here to guide you towards a more efficient, secure, and technologically advanced future.",
    icon: MdMiscellaneousServices
  },
  {
    id: 4,
    title: "ACCESS CONTROL",
    Desc: "Secure your premises with our advanced access control systems. We offer keycard, biometric, and mobile-based solutions to ensure only authorized personnel can access restricted areas.",
    icon: IoMdLock
  },
  {
    id: 5,
    title: "SURVEILLANCE CAMERAS",
    Desc: "We sell high-quality surveillance cameras for all security needs. Our product range includes IP cameras, PTZ cameras, thermal cameras, and wireless options from trusted brands.",
    icon: FaCamera,
    isProduct: true
  },
  {
    id: 6,
    title: "CCTV ACCESSORIES",
    Desc: "Complete your security system with our range of CCTV accessories including DVRs, NVRs, cables, connectors, hard drives, power supplies, and mounting brackets.",
    icon: BiSolidCctv,
    isProduct: true
  }
];

const SkillAds = [
  {
    id: 1,
    title: "UNLOCK YOUR POTENTIAL WITH ICT & SECURITY SKILLS",
    details: "At GOMLTD, we understand the pivotal role Information and Communication Technology (ICT) and security systems play in today's dynamic landscape. Our training programs are designed to empower individuals and organizations with the skills needed to thrive in the digital era.",
    KeyNote: "Customized Learning Paths: We understand that every learner's needs are unique, which is why we offer customized learning paths tailored to different skill levels, from beginners to advanced professionals.",
    courses: "COURSES: App Development | Web Development | Data Analytics | Security Systems Installation | CCTV Management"
  }
];

const Service = () => {
  // Removed the unused hoveredId state
  
  const slideInFromTop = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1 },
    },
  };
  
  // Function to generate WhatsApp link
  const getWhatsAppLink = (service) => {
    const message = service.isProduct 
      ? `I'm interested in your ${service.title}. Can you provide pricing details?`
      : `I'm interested in your ${service.title} service. Can you provide more information?`;
    
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  };
  
  return (
    <section className="flex flex-col justify-center w-full gap-10 p-5 mt-10 bg-gray-dark"> 
      {/* Service Header */}
      <div className="flex w-full gap-8">
        <div className="ml-5 w-20 h-1 mt-4 bg-orange sm:w-24"></div>
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }} 
          variants={slideInFromTop}
          className="text-2xl font-bold text-center lg:tracking-[20px] mb-16 text-white"> 
          Service
        </motion.p>
      </div>

      <div className="ml-12 -mt-20 mb-10 font-bold text-orange text-5xl sm:text-4xl">
        Our Top Services & Products
      </div>
      
      {/* Service Cards */}
      <div className="flex flex-wrap justify-center w-full gap-4 p-6 mt-5 mb-3">
        {ServiceData.map((service) => (
          <motion.div
            key={service.id}
            initial={{ backgroundColor: "rgba(255, 255, 255, 0.45)", color: "black" }}
            whileHover={{ backgroundColor: "#F97316", color: "white", borderBottomColor: "white", scale: 1.05 }}
            transition={{ duration: 0.5 }}
            // Removed onHoverStart and onHoverEnd handlers that used hoveredId
            className="flex flex-col h-96 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 border-b-8 border-b-orange rounded-3xl mb-24 shadow-2xl bg-white bg-opacity-45 relative mx-4"
          >
            {/* Icon */}
            <div className="flex items-center justify-center -mt-12 mx-auto bg-orange w-24 h-24 rounded-full">
              {service.icon && React.createElement(service.icon, { className: "w-12 h-12 text-white" })}
            </div>
            
            {/* Content */}
            <div className="p-6 h-full flex flex-col">
              <h2 className="text-2xl font-semibold text-center">
                {service.title}
              </h2>
              
              {/* Product Badge */}
              {service.isProduct && (
                <span className="absolute top-4 right-4 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                  FOR SALE
                </span>
              )}
              
              <p className="mt-5 font-light text-left flex-grow">
                {service.Desc}
              </p>
              
              {/* Button */}
              <div className="mt-4">
                <a 
                  href={getWhatsAppLink(service)}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-6 py-3 text-lg font-semibold text-white bg-orange 
                  rounded-full hover:bg-gray-dark transition-all duration-300 ease-in-out transform 
                  hover:scale-105 w-full mx-auto"
                >
                  {service.isProduct ? "Ask for Price" : "Contact Us"}
                  <FaWhatsapp size={20} />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Product Catalog Section */}
      <div className="flex flex-wrap justify-center gap-8 mb-16">
        <div className="w-full md:w-3/4 lg:w-1/2 p-8 bg-white bg-opacity-10 rounded-xl shadow-lg">
          <h2 className="text-3xl font-bold text-orange mb-4 text-center">Security Gadget Catalog</h2>
          <p className="text-white mb-6 text-center">
            We offer a wide range of security products at competitive prices:
          </p>
          
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 text-white">
            <li className="flex items-center gap-2">
              {/* <RiCctv2Line className="text-orange text-xl" /> HD Security Cameras */}
            </li>
            <li className="flex items-center gap-2">
              <BiSolidCctv className="text-orange text-xl" /> DVR/NVR Systems
            </li>
            <li className="flex items-center gap-2">
              <MdSecurity className="text-orange text-xl" /> Motion Sensors
            </li>
            <li className="flex items-center gap-2">
              <IoMdLock className="text-orange text-xl" /> Keyless Entry Systems
            </li>
            <li className="flex items-center gap-2">
              <FaCamera className="text-orange text-xl" /> IP Cameras
            </li>
            <li className="flex items-center gap-2">
              <GrShieldSecurity className="text-orange text-xl" /> Alarm Systems
            </li>
          </ul>
          
          <div className="flex justify-center">
            <a 
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("I'm interested in your security gadgets. Can you send me your full catalog with prices?")}`}
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-8 py-4 bg-green-600 text-white font-bold rounded-full hover:bg-green-700 transition-all duration-300"
            >
              <FaWhatsapp size={24} />
              <span>Request Full Catalog & Pricing</span>
            </a>
          </div>
        </div>
      </div>

      {/* Skills Ad Section */}
      <div className="flex p-5 w-full rounded-s-2xl flex-col">
        {SkillAds.map((item) => (
          <div key={item.id} className="w-full overflow-hidden">
            <h1 className="text-3xl font-bold text-center text-orange">
              {item.title}
            </h1>
            <p className="mt-5 mx-5 font-light text-white/50">{item.details}</p>
            <p className="my-4"></p>
            <h3 className="mx-5 text-white/50">{item.KeyNote}</h3>
            <p className="my-4"></p>
            <hr/>
            <p className="my-4"></p>
            <p className="flex items-center justify-center text-base text-orange/80">{item.courses}</p>
          </div>
        ))}
      </div>

      {/* Final CTA */}
      <div className="flex justify-center w-full">
        <a 
          href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hello! I'm interested in your security solutions. Can you provide more information?")}`}
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex items-center gap-2 px-8 py-4 mb-16 text-xl font-bold text-white bg-orange rounded-full hover:bg-gray-dark transition-all duration-300 ease-in-out transform hover:scale-105"
        >
          <span>Contact Us For Security Solutions</span>
          <FaWhatsapp size={24} />
        </a>
      </div>
    </section>
  );
};

export default Service;