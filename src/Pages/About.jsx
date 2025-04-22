import Nav from '../component/Nav';
import Hero1 from '../component/HeroSection';
import Footer from '../component/Footer';
import Service from '../component/Service';
// import AboutIntro from '../component/AboutIntro';
import WhatsApp from '../component/WhatsApp';
import WhoWeAre from '../component/WhoWeAre.jsx';
import AboutContent from '../component/AboutContent.jsx';

const About = () => {
  return (
    <div className="flex flex-col gap-10 overflow-x-hidden">
      {/* Container for width control */}
      <div className=" mx-auto  sm:px-6 lg:px-8 w-full">
        <Nav />
        <Hero1 />
        <AboutContent />
        {/* <AboutIntro /> */}
        <WhoWeAre />
        <Service />
        <WhatsApp />
      </div>
      <Footer />
    </div>
  );
};

export default About;
