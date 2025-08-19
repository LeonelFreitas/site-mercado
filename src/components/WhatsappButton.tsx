import { FaWhatsapp } from "react-icons/fa";

export function WhatsappButton() {
  return (
    <a
      href="https://wa.me/5599999999999"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg flex items-center justify-center transition"
      aria-label="Fale conosco no WhatsApp"
    >
      <FaWhatsapp size={32} />
    </a>
  );
}