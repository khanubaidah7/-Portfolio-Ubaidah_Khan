import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/923178376433?text=Hello%20Abu%20Ubaidah,%20I%20visited%20your%20portfolio"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg text-2xl z-50 flex items-center justify-center animate-bounce"
      title="Chat with me on WhatsApp"
    >
      <FaWhatsapp />
    </a>
  );
}