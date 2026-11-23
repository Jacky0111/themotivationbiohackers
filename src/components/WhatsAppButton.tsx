import { MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/site";

const WhatsAppButton = () => {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300"
    >
      <MessageCircle className="w-6 h-6 text-white" />
    </a>
  );
};

export default WhatsAppButton;
