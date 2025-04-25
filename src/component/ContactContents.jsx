import React, { useState } from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';

function ContactContents() {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData(prevState => ({
        ...prevState,
        [name]: value
      }));
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Handle form submission logic here
      console.log('Form submitted:', formData);
      // Reset form after submission
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      alert('Thank you for your message. We will get back to you shortly!');
    };
  
    return (
      <div className="bg-gray-50 min-h-screen">
        {/* Hero Section */}
        <div className="bg-blue-800 text-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl max-w-2xl">
              Have questions or need assistance? We're here to help. Reach out to GOMLTD today.
            </p>
          </div>
        </div>
  
        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col lg:flex-row gap-10">
            {/* Contact Information */}
            <div className="lg:w-1/3">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-6 text-blue-800">Contact Information</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="text-blue-600 mr-4 mt-1">
                      <FaMapMarkerAlt size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">Address</h3>
                      <p className="text-gray-600 mt-1">
                        123 Business Avenue<br />
                        Suite 456<br />
                        City, State 12345
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="text-blue-600 mr-4 mt-1">
                      <FaPhone size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">Phone</h3>
                      <p className="text-gray-600 mt-1">
                        (123) 456-7890<br />
                        (987) 654-3210
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="text-blue-600 mr-4 mt-1">
                      <FaEnvelope size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">Email</h3>
                      <p className="text-gray-600 mt-1">
                        info@gomltd.com<br />
                        support@gomltd.com
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="text-blue-600 mr-4 mt-1">
                      <FaClock size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">Business Hours</h3>
                      <p className="text-gray-600 mt-1">
                        Monday - Friday: 9:00 AM - 5:00 PM<br />
                        Saturday: 10:00 AM - 2:00 PM<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
  
            {/* Contact Form */}
            <div className="lg:w-2/3">
              <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                <h2 className="text-2xl font-bold mb-6 text-blue-800">Send Us a Message</h2>
                
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-gray-700 mb-2">Your Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-gray-700 mb-2">Your Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="subject" className="block text-gray-700 mb-2">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-gray-700 mb-2">Your Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="5"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700 transition duration-300"
                  >
                    Send Message
                  </button>
                </form>
              </div>
              
              {/* Google Map */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-6 text-blue-800">Find Us</h2>
                <div className="w-full h-64 bg-gray-200 rounded-md overflow-hidden">
                  <iframe
                    title="GOMLTD Location"
                    src="https://www.google.com/maps/place/CLASSIC+SYSTEMS+INFOTECH/@7.4888717,4.521181,13.81z/data=!4m7!1m2!2m1!1sclassic+systems+info+techno+30+mayfair+ile-ife+osun+state!3m3!1s0x1038375c7d081f9d:0x39d89e6f11e142c4!15sCjljbGFzc2ljIHN5c3RlbXMgaW5mbyB0ZWNobm8gMzAgbWF5ZmFpciBpbGUtaWZlIG9zdW4gc3RhdGVaOyI5Y2xhc3NpYyBzeXN0ZW1zIGluZm8gdGVjaG5vIDMwIG1heWZhaXIgaWxlIGlmZSBvc3VuIHN0YXRlkgEhZWxlY3RyaWNhbF9hbmRfZWxlY3Ryb25pY3Nfc3RvcmVzqgF2EAEqEiIOaW5mbyB0ZWNobm8gMzAoADIfEAEiG2sKoqXsdXZCxsFsRLAOemhK3S7uEdImCPbuBDI9EAIiOWNsYXNzaWMgc3lzdGVtcyBpbmZvIHRlY2hubyAzMCBtYXlmYWlyIGlsZSBpZmUgb3N1biBzdGF0ZeABAA!16s%2Fg%2F11y1kp4kgp?entry=ttu&g_ep=EgoyMDI1MDQyMy4wIKXMDSoASAFQAw%3D%3D"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  

export default ContactContents
