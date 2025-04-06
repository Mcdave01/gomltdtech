const WhoWeAre = () => {
    return (
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-6 lg:px-8">
          
          {/* Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Column */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h3>
              <p className="text-gray-600 mb-6">
                As a service-oriented company, we collaborate closely with our clients,
                 ensuring their needs are met with precision and efficiency. Our mission is
                  rooted in a deep understanding of our clients unique challenges, allowing us to provide tailored, top-quality solutions without compromise.
              </p>
              <p className="text-gray-600">
                We believe in upholding the highest standards of service, innovation, and integrity in everything we do.
              </p>
            </div>
            {/* Right Column */}
            <div className="relative p-6 bg-white rounded-lg shadow-lg">
              
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Why Choose Us</h3>
              <ul className="list-disc pl-5 text-gray-600 space-y-4">
                <li>Tailored solutions designed to meet your specific needs.</li>
                <li>Commitment to innovation and excellence in service delivery.</li>
                <li>A collaborative approach ensuring long-term success.</li>
                <li>Expert team with deep industry knowledge and experience.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    )
  }
  export default WhoWeAre;