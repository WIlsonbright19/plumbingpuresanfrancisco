import { MessageCircle } from "lucide-react";
import { BUSINESS_INFO } from "../data/content";

export function WhatsAppButton() {
  const whatsappUrl = `https://wa.me/1${BUSINESS_INFO.phoneRaw}?text=${encodeURIComponent(
    "Hello Plumbing Pure, I have a question regarding plumbing service."
  )}`;

  return (
    <aside aria-label="Direct messaging assistance">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Plumbing Pure on WhatsApp"
        className="hidden lg:flex fixed bottom-6 right-6 z-40 group items-center gap-2.5 px-4 py-3 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full shadow-[0_8px_30px_rgba(37,211,102,0.35)] hover:shadow-[0_12px_36px_rgba(37,211,102,0.5)] transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
      >
        {/* Pulsing indicator dot */}
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
          <span className="relative inline-flex rounded-full h-3 w-3 bg-white" />
        </span>

        {/* WhatsApp Official Style SVG Icon */}
        <svg
          viewBox="0 0 24 24"
          width="22"
          height="22"
          fill="currentColor"
          className="shrink-0"
        >
          <path d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.978-.276-.1-.477-.15-.678.15-.2.301-.778.978-.954 1.179-.176.2-.351.226-.652.075-.301-.15-1.272-.469-2.423-1.496-.896-.799-1.501-1.786-1.677-2.087-.176-.301-.019-.464.132-.614.136-.135.301-.351.452-.527.15-.176.2-.301.3-.502.101-.2.05-.376-.025-.526-.075-.15-.678-1.634-.929-2.239-.244-.589-.493-.509-.678-.519-.175-.01-.376-.01-.577-.01-.2 0-.527.075-.803.376-.276.301-1.054 1.03-1.054 2.511 0 1.482 1.079 2.912 1.23 3.113.15.201 2.124 3.243 5.144 4.547.718.311 1.279.497 1.716.636.722.23 1.378.197 1.898.12.579-.087 1.78-.728 2.03-1.431.25-.703.25-1.306.175-1.431-.075-.125-.276-.201-.577-.351zM12.042 21.879h-.008a9.834 9.834 0 0 1-5.01-1.376l-.359-.213-3.727.978.995-3.633-.235-.373a9.833 9.833 0 0 1-1.508-5.215c.003-5.432 4.425-9.851 9.862-9.851 2.632.001 5.105 1.026 6.964 2.888 1.859 1.862 2.88 4.337 2.878 6.971-.004 5.434-4.427 9.854-9.857 9.854zM12.04 0C5.402 0 .01 5.392.008 12.033a11.96 11.96 0 0 0 1.636 6.02L0 24l6.108-1.602a11.97 11.97 0 0 0 5.928 1.564h.005c6.637 0 12.029-5.393 12.032-12.035A12.04 12.04 0 0 0 12.04 0z" />
        </svg>

        {/* Text Label on hover / desktop */}
        <span className="hidden sm:inline-block text-xs font-semibold tracking-wide whitespace-nowrap">
          Chat on WhatsApp
        </span>
      </a>
    </aside>
  );
}
