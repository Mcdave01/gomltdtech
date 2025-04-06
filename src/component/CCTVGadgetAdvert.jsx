
import CCTV from '../assets/her3.jpg'
import SUV from  '../assets/suv.jpg'
import Router from '../assets/router.jpg'
const CCTVGadgetAdvert = () => {
  return (
    <section className="py-16 bg-blue-gray-800 text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Top CCTV Gadgets for Sale</h2>
        <p className="text-lg mb-8">
          Explore our wide range of high-quality CCTV gadgets for all your surveillance needs.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Gadget 1 */}
          <div className="bg-{CCTV} rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-500">
            <img
              src={CCTV}
              alt="CCTV Camera"
              className="w-full h-auto object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                High-Definition CCTV Camera
              </h3>
              <p className="text-gray-700">
                Capture crystal-clear images with our HD CCTV cameras, perfect for both indoor and outdoor surveillance.
              </p>
            </div>
          </div>
          
          {/* Gadget 2 */}
          <div className="bg-bg-{CCTV}  rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-500">
            <img
              src={SUV}
              alt=""
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Dual Lens Camera
              </h3>
              <p className="text-gray-700">
                Store your surveillance footage securely with our advanced DVR systems, compatible with multiple cameras.
              </p>
            </div>
          </div>

          {/* Gadget 3 */}
          <div className="bg-{Router} rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-500">
            <img
              src={Router}
              alt="Surveillance Kit"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
               Router
              </h3>
              <p className="text-gray-700">
                Get an all-in-one solution with our complete surveillance kits, including cameras, DVR, and cables.
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-10">
          <button className="bg-yellow-500 hover:bg-yellow-600 text-gray-800 font-bold py-3 px-8 rounded-full shadow-lg transition duration-300">
            Shop Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default CCTVGadgetAdvert;
