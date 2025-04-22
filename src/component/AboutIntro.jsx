
import AboutContent from "./AboutContent";
const AboutIntro = () => {
  return (
    <section className="container grid items-center gap-10 px-6 py-16 mx-auto md:grid-cols-2">
      <div>
        <h2 className="text-3xl font-bold text-gray-800">Who We Are</h2>
       <AboutContent />
      </div>
      {/* <div>
        <img src="https://preview.colorlib.com/theme/builder/img/about-1.jpg" alt="About Us" className="rounded-lg shadow-lg" />
      </div> */}
    </section>
  );
};

export default AboutIntro;
