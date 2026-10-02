import { Phone } from "lucide-react";
import { BUSINESS_INFO } from "../data/content";

interface MobileStickyCallBarProps {
  onNavigateToContact?: () => void;
}

export function MobileStickyCallBar({ onNavigateToContact }: MobileStickyCallBarProps) {
  const whatsappUrl = `https://wa.me/1${BUSINESS_INFO.phoneRaw}?text=${encodeURIComponent(
    "Hello Plumbing Pure, I have a question regarding plumbing service."
  )}`;

  return (
    <div className="lg:hidden fixed bottom-3 inset-x-3 z-40 pointer-events-auto">
      <div className="flex items-center gap-2 p-1.5 bg-[#171716]/95 backdrop-blur-md border border-white/15 rounded-full shadow-2xl max-w-sm mx-auto">
        {/* Button 1: Call (clean, no phone number) */}
        <a
          href={`tel:${BUSINESS_INFO.phoneRaw}`}
          className="flex-1 py-2.5 px-4 bg-[#B83A25] hover:bg-[#a1321f] text-white text-xs font-semibold uppercase tracking-wider rounded-full flex items-center justify-center gap-2 active:scale-95 transition-all shadow-sm"
        >
          <Phone className="w-3.5 h-3.5" />
          <span>Call</span>
        </a>

        {/* Button 2: WhatsApp */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 py-2.5 px-4 bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-semibold uppercase tracking-wider rounded-full flex items-center justify-center gap-2 active:scale-95 transition-all shadow-sm"
        >
          <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor" className="shrink-0">
            <path d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.978-.276-.1-.477-.15-.678.15-.2.301-.778.978-.954 1.179-.176.2-.351.226-.652.075-.301-.15-1.272-.469-2.423-1.496-.896-.799-1.501-1.786-1.677-2.087-.176-.301-.019-.464.132-.614.136-.135.301-.351.452-.527.15-.176.2-.301.3-.502.101-.2.05-.376-.025-.526-.075-.15-.678-1.634-.929-2.239-.244-.589-.493-.509-.678-.519-.175-.01-.376-.01-.577-.01-.2 0-.527.075-.803.376-.276.301-1.054 1.03-1.054 2.511 0 1.482 1.079 2.912 1.23 3.113.15.201 2.124 3.243 5.144 4.547.718.311 1.279.497 1.716.636.722.23 1.378.197 1.898.12.579-.087 1.78-.728 2.03-1.431.25-.703.25-1.306.175-1.431-.075-.125-.276-.201-.577-.351zM12.042 21.879h-.008a9.834 9.834 0 0 1-5.01-1.376l-.359-.213-3.727.978.995-3.633-.235-.373a9.833 9.833 0 0 1-1.508-5.215c.003-5.432 4.425-9.851 9.862-9.851 2.632.001 5.105 1.026 6.964 2.888 1.859 1.862 2.88 4.337 2.878 6.971-.004 5.434-4.427 9.854-9.857 9.854zM12.04 0C5.402 0 .01 5.392.008 12.033a11.96 11.96 0 0 0 1.636 6.02L0 24l6.108-1.602a11.97 11.97 0 0 0 5.928 1.564h.005c6.637 0 12.029-5.393 12.032-12.035A12.04 12.04 0 0 0 12.04 0z" />
          </svg>
          <span>WhatsApp</span>
        </a>
      </div>
    </div>
  );
}
