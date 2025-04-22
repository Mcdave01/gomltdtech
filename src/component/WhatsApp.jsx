
import { FaWhatsapp } from 'react-icons/fa'; // WhatsApp icon

const WhatsAppButton = () => {
  return (
    <a
      href="whatsapp://send?phone=+2348169767255&text=Hello"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed flex items-center justify-center p-3 text-white transition-colors rounded-full shadow-lg bg-orange/70 bottom-5 right-5 hover:bg-green-600"
    >
        
      <FaWhatsapp size={40} color={`green`}/>
    </a>
  );
};

export default WhatsAppButton;
