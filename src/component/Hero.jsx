import { useState, useEffect } from "react";
import Hero1 from '../assets/hero1.jpg';
import Hero2 from '../assets/hero2.jpg';
import Her3 from '../assets/her3.jpg';
import { motion } from 'framer-motion';

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
];

const slideInFromLeft = {
  hidden: { opacity: 0, x: -200 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 2 },
  },
};

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % sliderData.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + sliderData.length) % sliderData.length);
  };

  useEffect(() => {
    const autoplay = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(autoplay); // Clear interval on component unmount
  }, []);

  return (
    <section className="relative w-full h-[800px] md:h-[700px] lg:h-[900px] overflow-hidden bg-gray-dark">
      <div className="relative w-full h-full">
        {sliderData.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
            style={{ backgroundImage: `url(${slide.image})`, backgroundSize: "cover", backgroundPosition: "center" }}
          >
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideInFromLeft}
              className="flex flex-col items-center justify-center h-full w-full text-white bg-black bg-opacity-70 px-4"
            >
              <h1 className="mb-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-center">{slide.title}</h1>
              <p className="text-base sm:text-lg lg:text-xl text-center">{slide.description}</p>

              <div className="mt-6 flex flex-col sm:flex-row gap-4">
                <a href="#" className="px-6 py-3 bg-orange text-white rounded-full text-lg hover:bg-orange-600 transition">
                  Explore Our Services
                </a>
                <a href="#" className="px-6 py-3 bg-white text-orange rounded-full text-lg hover:bg-gray-200 transition">
                  Get Started Now
                </a>
              </div>
            </motion.div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-3xl text-white"
      >
        ←
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-3xl text-white"
      >
        →
      </button>

      {/* Dot Indicators */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
        {sliderData.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full ${index === currentSlide ? "bg-white" : "bg-gray-400"}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
