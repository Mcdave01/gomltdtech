import { useState, useEffect } from "react";
//import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Hero1 from '../assets/hero1.jpg'
import Hero2 from '../assets/hero2.jpg'
import Her3 from '../assets/her3.jpg'
import {motion} from 'framer-motion'
 
const sliderData = [
  {
    id: 1,
    title: "Welcome to Our Service",
    description: "We provide the best services in the market.",
    image: Hero1,
  },
  {
    id: 2,
    title: "Innovative Solutions",
    description: "We bring innovation to your business.",
    image: Hero2,
  },
  {
    id: 3,
    title: "Your Success is Our Goal",
    description: "Let's Give You The Best Service...",
    image: Her3,
  }
]

const slideInFromLeft = {
  hidden: { opacity: 0, x: -200 }, // Start position (hidden)
  visible: {
    opacity: 1,
    x: 0, // End position (center of the screen)
    transition: { duration: 2 }, // Animation duration (1 second)
  },
};

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Function to go to the next slide
  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % sliderData.length);
  }

  // Function to go to the previous slide
  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + sliderData.length) % sliderData.length
    )
  }

  // Autoplay: change slide every 5 seconds
  useEffect(() => {
    const autoplay = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(autoplay); // Clear interval on component unmount
  }, []);

  return (
    <section className=" w-full h-[700px] overflow-hidden mt-[-30px] bg-gray-dark ">
      {/* Slides */}
      {sliderData.map((slide, index) => (
        <div key={slide.id}
          className={`absolute top-0 left-0 w-full h-screen transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url(${slide.image})`, backgroundSize: "cover", backgroundPosition: "center" }}
        >
         
          {/* Slide Content */}
        
          <motion.div 
          initial="hidden"   // Start in the "hidden" state
          whileInView="visible"  
          viewport={{ once: true }}  // Animate to the "visible" state
          variants={slideInFromLeft}  // Apply the sliding variants
          
          className="flex flex-col  justify-center
            h-screen w-full text-center text-white bg-black bg-opacity-70">
              
                      <h1 className="mb-4 text-4xl font-bold lg:text-5xl">{slide.title}</h1>
            <p className="text-lg lg:text-xl">{slide.description}</p>
          </motion.div>
       
      {/* CTA Button */}


    



      <div className="flex flex-col sm:flex-row mt-[-200px] justify-center w-full gap-4 px-4 sm:px-0">
  <a
    href="#"
    className="inline-block max-w-sm px-6 py-3 text-lg font-semibold text-white bg-orange rounded-full hover:bg-gray-200 transition-all duration-300 ease-in-out transform hover:scale-105 w-full sm:w-auto text-center"
  >
    Explore Our Services
  </a>
  
  <a
    href="#"
    className="inline-block px-6 py-3 text-lg font-semibold text-orange bg-white rounded-full hover:bg-gray-200 transition-all duration-300 ease-in-out transform hover:scale-105 w-full sm:w-auto text-center"
  >
    Get Started Now
  </a>
</div>

    
         </div>
        

       
      ))}

 

      {/* Prev and Next Buttons */}
      <button
        onClick={prevSlide}
        className="absolute p-2 text-4xl text-white transform -translate-y-1/2 bg-black bg-opacity-50 rounded-full left-4 top-1/2"
      >
        
      </button>
      <button
        onClick={nextSlide}
        className="absolute p-2 text-4xl text-white transform -translate-y-1/2 bg-black bg-opacity-50 rounded-full right-4 top-1/2"
      >
        
      </button>


      

      {/* Dots for navigation */}
      <div className="absolute left-0 right-0 flex justify-center space-x-2 bottom-4">
        {sliderData.map((index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentSlide ? "bg-white" : "bg-gray-400"
            }`}
          />

          
        ))}
      </div>
    </section>
  );
};


export default Hero
