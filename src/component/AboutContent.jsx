import { Building, Users, Target, Award } from 'lucide-react';

const dataContent = [
  {
    id: 1,
    companyName: "GOMLTD",
    tagline: "Excellence in every service",
    aboutUs: "At GOMLTD, we are more than just a service provider—we are a dedicated partner committed to delivering excellence and tangible results. As a service-oriented company, we collaborate closely with our clients, ensuring their needs are met with precision and efficiency.",
    mission: "Our mission is rooted in a deep understanding of our clients' unique challenges, allowing us to provide tailored, top-quality solutions without compromise. We believe in upholding the highest standards of service, innovation, and integrity in everything we do.",
    values: [
      { icon: <Users size={24} />, title: "Partnership", description: "We build lasting relationships with our clients" },
      { icon: <Target size={24} />, title: "Excellence", description: "We deliver top-quality solutions without compromise" },
      { icon: <Award size={24} />, title: "Integrity", description: "We uphold the highest standards in everything we do" }
    ]
  }
];

function AboutContent() {
  return (
    <section className="flex flex-col justify-center items-center w-full bg-white py-16 px-6">
      
      {dataContent.map((data) => (
        <div key={data.id} className="max-w-4xl mx-auto">
          
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <Building size={48} className="text-blue-600" />
            </div> 
            <h1 className="text-4xl font-bold text-gray-800 mb-2">{data.companyName}</h1>
            <p className="text-lg text-blue-600 italic">{data.tagline}</p>
          </div>
          
          {/* About Us Section */}
          <div className="mb-12">
            <p className="text-gray-700 leading-relaxed">{data.aboutUs}</p>
          </div>
          
          {/* Mission Section */}
        
          
          {/* Values Section */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-6 border-b-2 border-blue-600 pb-2">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {data.values.map((value, index) => (
                <div key={index} className="bg-blue-50 p-6 rounded-lg text-center hover:shadow-md transition-shadow">
                  <div className="flex justify-center mb-3 text-blue-600">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-medium text-gray-800 mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
      
    </section>
  );
}

export default AboutContent;