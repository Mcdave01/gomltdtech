
import matt3 from '../assets/matt3.jpg'
import Suv from '../assets/suv.jpg'
import TechSkill from '../assets/techSkill.png'
const Adverts = () => {
  const adverts = [
    {
      title: "Security Camera Installation",
      description: "We provide top-notch installation services for security cameras, ensuring your safety and surveillance needs are met.",
      image: matt3, // Add the actual image path
    },
    {
      title: "Selling of Surveillance Equipment",
      description: "High-quality surveillance equipment available for purchase, including cameras, DVRs, and other essential accessories.",
      image: Suv, // Add the actual image path
    },
    {
      title: "Training on Tech Skills",
      description: "We offer hands-on training programs on various tech skills, including CCTV installation, programming, and more.",
      image: TechSkill, // Add the actual image path
    }
  ];

  return (
  
      <section className="py-16 bg-gray-100">
      <div className="container px-4 mx-auto">
        <h2 className="mb-12 text-3xl font-bold text-center text-orange" >Our Services</h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-1 sm:h-auto lg:grid-cols-3">
          {adverts.map((advert, index) => (
            <div key={index} className="bg-white shadow-lg h-auto rounded-lg overflow-hidden">
              <img
                src={advert.image}
                alt={advert.title}
                className="flex w-full  bg-cover h-[400px]"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4">{advert.title}</h3>
                <p className="text-gray-700">{advert.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Adverts;
