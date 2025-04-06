
import Hero1 from '../assets/hero1.jpg';
// import HeaderSvg from '../assets/headerSvg.svg';

const sliderData = [
  {
    id: 1,
    title: "About Us",
    description: "We provide the best services in the market.",
    image: Hero1,
  },
];

const HeroSection = () => {
  return (
    <section className="relative h-[400px] bg-cover bg-center w-full" style={{ backgroundImage: `url(${Hero1})` }}>
      
      {/* SVG Shape */}
      <div className="absolute inset-0 z-0 w-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 12000 300"
          className="absolute bottom-0 w-full h-56"
        >
          <path
            className="fil0"
            d="M-0 3130.84c1708.33,2284.63 5510.42,-502.29 7947.92,320.3l0 1048.87 -7916.67 -91 -31.25 -1278.16z"
            fill="#38a169"
          />
          <path
            className="fil1"
            d="M-10.42 3031.65c2093.75,1760.02 6755.21,-595.54 7821.1,272.71 -1883.6,-835.61 -6180.48,2017.17 -7821.1,-272.71z"
            fill="#48bb78"
          />
          <path
            className="fil1"
            d="M25.17 2849.46c1989.58,1812.1 6822.92,-708.73 7821.1,272.71 -1888.52,-806.85 -5706.52,1778.97 -7821.1,-272.71z"
            fill="#68d391"
          />
        </svg>
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60 z-5 w-full"></div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col justify-center items-center w-full h-full text-center text-white">
        {sliderData.map((item) => (
          <div key={item.id}>
            <h1 className="text-5xl md:text-6xl font-bold mb-4">{item.title}</h1>
            <h3 className="text-2xl md:text-3xl font-light">{item.description}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
