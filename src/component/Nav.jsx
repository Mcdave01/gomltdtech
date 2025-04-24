import { useEffect, useState } from "react";
import { FaAlignJustify } from "react-icons/fa6";

// Navigation Data
const NavData = [
  { id: 1, title: "Home", Link: "/" },
  { id: 2, title: "About", Link: "/About" },
  { id: 3, title: "Service", Link: "/Services" },
  { id: 4, title: "Contact", Link: "/Contact" },
];

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false); // State to manage mobile menu visibility
  const [navbarBg, setNavbarBg] = useState(false); // State to manage background color

  // Handle scroll event to change background color
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setNavbarBg(true); // Add background when scrolled past 50px
      } else {
        setNavbarBg(false); // Remove background when at the top
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Function to handle opening and closing the menu
  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  // Function to close the menu when clicking outside of it
  const handleOutsideClick = (e) => {
    if (isOpen && !e.target.closest('.mobile-menu') && !e.target.closest('.hamburger-menu')) {
      setIsOpen(false); // Close menu when clicking outside
    }
  };

  // Listen for clicks outside of the menu to close it
  useEffect(() => {
    window.addEventListener('click', handleOutsideClick);

    // Cleanup on unmount
    return () => {
      window.removeEventListener('click', handleOutsideClick);
    };
  }, [isOpen]);

  return (
    <section
      className={`w-full fixed top-0 left-0 z-50 transition duration-300 ease-in-out ${navbarBg ? 
        "bg-deep-orange-400 shadow-lg" : "bg-gray-dark"}`}
    >
      <nav className="w-full text-2xl text-white shadow-2xl shadow-black h-[70px]">
        <div className="flex w-full px-10 justify-between items-center h-[100px] py-6">
          {/* Logo */}
          <div className="text-2xl font-bold">Logo</div>

          {/* Desktop Links */}
          <div className="hidden gap-12 lg:flex">
            <ul className="flex gap-12 text-xl">
              {NavData.map((item) => (
                <li key={item.id}>
                  <a href={item.Link} className="hover:text-gray-300">
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile Hamburger Menu */}
          <button
            onClick={toggleMenu} // Toggle menu open/close
            className="block text-3xl lg:hidden focus:outline-none hamburger-menu"
          >
            <FaAlignJustify />
          </button>
        </div>

        {/* Mobile Menu Links */}
        <div
          className={`lg:hidden fixed top-[100px] right-0 h-screen w-[20rem] 
            bg-gray-900 bg-opacity-90 transition-transform transform-gpu
            duration-300 ease-in-out z-50 mobile-menu ${isOpen ? "translate-x-0" : "translate-x-full"}`}
        >
          <ul className="w-[20rem] py-6 mt-1 space-y-6  text-center rounded-xl bg-deep-orange-400">
            {NavData.map((item) => (
              <li key={item.id} className="hover:bg-gray-dark">
                <a href={item.Link} className="block py-2 text-lg text-white hover:bg-gray-800">
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </section>
  );
};

export default Nav;
