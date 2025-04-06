import  { useState } from "react";
import EnquiryPic from '../assets/EnquiryPic.jpg'
const Enquiry = () => {

    const backgroundStyle = {
        backgroundImage: `url(${EnquiryPic})`,
        backgroundSize: 'cover',      // Ensures the image covers the entire area
        backgroundPosition: 'center', // Centers the image
                       // Adjust width and height as needed
                     // Example height, adjust as necessary
      };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email address";
    }
    if (!formData.subject) newErrors.subject = "Subject is required";
    if (!formData.message) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    // You can replace this console.log with your backend/email logic
    console.log(formData);

    alert("Your enquiry has been submitted!");
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="flex w-full justify bg-orange">
        <div style={backgroundStyle} className="container w-full py-10 sm:max-w-full">
        {/* <img src={EnquiryPic} /> */}
        
    <form
      onSubmit={handleSubmit}
      className="container max-w-sm mx-auto p-10 text-orange sm:max-w-[1000px] bg-transparent shadow-md rounded-md"
    >
     <div className="w-full h-10 mt-[-10px] tracking-[10px] py-2 sm:max-w-full sm:tracking-[40px] "> <h1 className="mt-[-30px] mb-6 text-3xl text-center font-bold text-white ">Book A Service </h1></div>

      <div className="mb-4">
        <label htmlFor="name" className="block mb-2 font-medium text-gray-700">
          Name:
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={`w-full px-4 py-2 border rounded-md focus:outline-none ${
            errors.name ? "border-red-500" : "border-gray-300"
          }`}
        />
        {errors.name && (
          <p className="mt-1 text-sm text-red-500">{errors.name}</p>
        )}
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="block mb-2 font-medium text-gray-700">
          Email:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={`w-full px-4 py-2 border rounded-md focus:outline-none ${
            errors.email ? "border-red-500" : "border-gray-300"
          }`}
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-500">{errors.email}</p>
        )}
      </div>

      <div className="mb-4">
        <label
          htmlFor="subject"
          className="block mb-2 font-medium text-gray-700"
        >
          Subject:
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          className={`w-full px-4 py-2 border rounded-md focus:outline-none ${
            errors.subject ? "border-red-500" : "border-gray-300"
          }`}
        />
        {errors.subject && (
          <p className="mt-1 text-sm text-red-500">{errors.subject}</p>
        )}
      </div>

      <div className="mb-4">
        <label
          htmlFor="message"
          className="block mb-2 font-medium text-gray-700"
        >
          Message:
        </label>
        <textarea
          id="message"
          name="message"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          className={`w-full px-4 py-2 border rounded-md focus:outline-none ${
            errors.message ? "border-red-500" : "border-gray-300"
          }`}
        ></textarea>
        {errors.message && (
          <p className="mt-1 text-sm text-red-500">{errors.message}</p>
        )}
      </div>

      <button
        type="submit"
        className="w-full bg-orange text-gray-dark text-[20px] font-bold py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200"
      >
        Submit
      </button>
    </form>
    </div>
    </div>
  );
};

export default Enquiry;
