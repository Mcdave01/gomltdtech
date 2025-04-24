
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
    <section className="flex flex-col py-12 bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
        <div className="grid grid-cols-1  md:grid-cols-3 gap-8">
          {adverts.map((advert, index) => (
            <div key={index} className="bg-white shadow-lg h-auto rounded-lg overflow-hidden">
              <img
                src={advert.image}
                alt={advert.title}
                className="w-full  bg-cover h-[300px]"
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
