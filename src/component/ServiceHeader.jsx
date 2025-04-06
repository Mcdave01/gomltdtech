import { Shield, Camera, Cpu, Lock } from 'lucide-react';

const ServiceHeader = () => {
  return (
    <>
      <div className='flex flex-col md:flex-row text-white font-bold items-center justify-center gap-10 w-full min-h-[500px] bg-gray-dark shadow-lg py-16'>
        <div className="w-full md:w-[800px] h-auto bg-transparent shadow-lg text-white p-8 md:p-20 justify-center text-center">
          <h1 className="text-4xl md:text-6xl mb-6">Advanced Security Solutions</h1>
          <p className="text-xl font-normal mb-8">Cutting-edge surveillance and protection systems by GOMltdtech</p>
          <div className="grid grid-cols-2 gap-6 text-center">
            <div className="flex flex-col items-center">
              <Camera size={40} className="mb-2 text-red-500" />
              <span className="text-lg">Surveillance Systems</span>
            </div>
            <div className="flex flex-col items-center">
              <Lock size={40} className="mb-2 text-red-500" />
              <span className="text-lg">Access Control</span>
            </div>
            <div className="flex flex-col items-center">
              <Shield size={40} className="mb-2 text-red-500" />
              <span className="text-lg">Alarm Systems</span>
            </div>
            <div className="flex flex-col items-center">
              <Cpu size={40} className="mb-2 text-red-500" />
              <span className="text-lg">Smart Integration</span>
            </div>
          </div>
        </div>
        
        <div className="relative w-[300px] h-[300px]">
          <div className="absolute w-full h-full bg-gray-dark-50 shadow-lg rotate-45 text-white">
            <div className="absolute w-full h-full bg-red-600 shadow-lg rotate-12 text-white opacity-80">
              <div className="absolute w-full h-full bg-gray-dark/70 shadow-lg rotate-24 text-white"></div>
            </div>
          </div>
          
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center p-4 z-10">
              <h3 className="text-[60px] font-bold mb-2 ">24/7</h3>
              <p className="text-sm">Security Monitoring</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceHeader;