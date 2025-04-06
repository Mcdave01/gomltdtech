import matt3 from "../assets/matt3.jpg"
//import project3 from "../assets/project3.jpeg"
const portfolioItems = [
  {
    title: 'Residential CCTV Installation',
    description: 'A comprehensive CCTV setup designed for home security, featuring high-definition cameras with night vision, remote monitoring, and motion detection to ensure 24/7 protection.',
    image: 'https://res.cloudinary.com/dzcxoeplc/image/upload/v1738156264/proj4_eszuky.jpg',
    link: '#',
  },
  {
    title: 'Commercial Surveillance System',
    description: 'A robust surveillance solution for businesses, including multi-camera installations,  centralized monitoring systems, and advanced features like facial recognition and video analytics.',
    image:'https://res.cloudinary.com/dzcxoeplc/image/upload/v1738156263/ProJ1_ovabaw.jpg',
    link: '#',
  },
  {
    title: 'Industrial CCTV Deployment',
    description: 'This is a brief description of Project 3.',
    image: matt3,
    link: '#',
  },
];

const Portfolio = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container px-4 mx-auto">
        <h2 className="mb-12 text-3xl font-bold text-center text-orange" >My Portfolio</h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {portfolioItems.map((item, index) => (
            <div key={index} className="overflow-hidden bg-white rounded-lg shadow-lg">
              <img src={item.image} alt={item.title} className="object-cover w-full h-48 rounded-[0px]"/>
              <div className="p-6">
                <h3 className="mb-2 text-xl font-semibold">{item.title}</h3>
                <p className="mb-4 text-gray-600">{item.description}</p>
                <a
                  href={item.link}
                  className="text-blue-500 hover:underline"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
