import { useState, useEffect } from "react";
import { X, Calendar, Clock, MapPin, Phone, ShieldCheck, CheckCircle2 } from "lucide-react";
import { BUSINESS_INFO, SERVICES } from "../data/content";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialServiceId?: string;
}

export function BookingModal({ isOpen, onClose, initialServiceId }: BookingModalProps) {
  const [selectedService, setSelectedService] = useState(
    initialServiceId || "emergency"
  );
  const [urgency, setUrgency] = useState<"standard" | "urgent">("standard");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [date, setDate] = useState("");
  const [notes, setNotes] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [bookingId, setBookingId] = useState("");

  useEffect(() => {
    if (initialServiceId) {
      setSelectedService(initialServiceId);
      if (initialServiceId === "emergency") {
        setUrgency("urgent");
      }
    }
  }, [initialServiceId]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;
    const generatedId = `PP-${Math.floor(100000 + Math.random() * 900000)}`;
    setBookingId(generatedId);
    setIsSuccess(true);
  };

  const handleResetAndClose = () => {
    setIsSuccess(false);
    setName("");
    setPhone("");
    setAddress("");
    setDate("");
    setNotes("");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in">
      <div className="relative w-full max-w-xl max-h-[90vh] overflow-y-auto bg-[#F7F6F1] rounded-3xl p-6 sm:p-10 border border-[#D9D8D1] shadow-2xl text-[#171716]">
        {/* Close Button */}
        <button
          onClick={handleResetAndClose}
          className="absolute top-6 right-6 p-2 rounded-full text-[#73736D] hover:text-[#171716] hover:bg-[#E7E6E0] transition-colors"
          aria-label="Close booking modal"
        >
          <X className="w-5 h-5" />
        </button>

        {isSuccess ? (
          <div className="py-8 text-center animate-in fade-in">
            <div className="w-16 h-16 rounded-full bg-[#B83A25]/10 text-[#B83A25] flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="text-xs font-mono uppercase tracking-widest text-[#73736D] mb-1">
              BOOKING CONFIRMED · {bookingId}
            </div>

            <h3
              className="text-2xl sm:text-3xl font-normal text-[#171716] mb-3"
              style={{ fontFamily: "var(--font-display)" }}
            >
              We'll be in touch shortly.
            </h3>

            <p className="text-sm text-[#73736D] max-w-md mx-auto mb-8 leading-relaxed">
              Thank you, {name}. Alexei Doubianski and the Plumbing Pure dispatch team will contact you at <strong className="text-[#171716]">{phone}</strong> to confirm your appointment window.
            </p>

            <div className="bg-white rounded-2xl p-5 border border-[#D9D8D1] mb-6 text-left text-xs sm:text-sm space-y-2">
              <div className="flex justify-between">
                <span className="text-[#73736D]">Service:</span>
                <span className="font-semibold text-[#171716]">
                  {SERVICES.find(s => s.id === selectedService)?.title || selectedService}
                </span>
              </div>
              {address && (
                <div className="flex justify-between">
                  <span className="text-[#73736D]">Location:</span>
                  <span className="font-semibold text-[#171716]">{address}</span>
                </div>
              )}
              {urgency === "urgent" && (
                <div className="flex justify-between text-[#B83A25] font-semibold">
                  <span>Priority:</span>
                  <span>Immediate / Emergency</span>
                </div>
              )}
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="flex-1 py-3 text-center text-sm font-semibold text-white bg-[#B83A25] hover:bg-[#a1321f] rounded-xl flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" />
                Call Now ({BUSINESS_INFO.phone})
              </a>
              <button
                onClick={handleResetAndClose}
                className="py-3 px-6 text-sm font-medium text-[#171716] border border-[#D9D8D1] rounded-xl hover:bg-white"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <div className="text-xs font-semibold tracking-widest text-[#B83A25] uppercase mb-2 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B83A25]" />
                DIRECT SCHEDULING
              </div>

              <h3
                className="text-2xl sm:text-3xl font-normal text-[#171716]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Schedule Service
              </h3>
              <p className="text-xs text-[#73736D] mt-1">
                Straightforward plumbing across San Francisco and Marin County.
              </p>
            </div>

            {/* Urgency Toggle */}
            <div className="grid grid-cols-2 gap-2 p-1 bg-[#E7E6E0] rounded-xl text-xs font-semibold">
              <button
                type="button"
                onClick={() => setUrgency("standard")}
                className={`py-2.5 rounded-lg transition-colors ${
                  urgency === "standard"
                    ? "bg-white text-[#171716] shadow-sm"
                    : "text-[#73736D] hover:text-[#171716]"
                }`}
              >
                Standard Appointment
              </button>
              <button
                type="button"
                onClick={() => setUrgency("urgent")}
                className={`py-2.5 rounded-lg transition-colors flex items-center justify-center gap-1.5 ${
                  urgency === "urgent"
                    ? "bg-[#B83A25] text-white shadow-sm"
                    : "text-[#73736D] hover:text-[#B83A25]"
                }`}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                Urgent / Emergency
              </button>
            </div>

            {/* Service Selection */}
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-[#73736D] mb-1.5">
                Select Service
              </label>
              <select
                value={selectedService}
                onChange={(e) => setSelectedService(e.target.value)}
                className="w-full px-4 py-3 bg-white border border-[#D9D8D1] rounded-xl text-sm text-[#171716] focus:outline-none focus:border-[#171716]"
              >
                {SERVICES.map((s) => (
                  <option key={s.id} value={s.id}>
                    {s.title} — {s.shortDesc}
                  </option>
                ))}
              </select>
            </div>

            {/* Contact Name & Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-[#73736D] mb-1.5">
                  Your Name *
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Full name"
                  className="w-full px-4 py-3 bg-white border border-[#D9D8D1] rounded-xl text-sm text-[#171716] focus:outline-none focus:border-[#171716]"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-[#73736D] mb-1.5">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="(415) ..."
                  className="w-full px-4 py-3 bg-white border border-[#D9D8D1] rounded-xl text-sm text-[#171716] focus:outline-none focus:border-[#171716]"
                />
              </div>
            </div>

            {/* Address */}
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-[#73736D] mb-1.5">
                Street Address & City (SF / Marin County)
              </label>
              <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="e.g. 24th Ave, Richmond District, SF"
                className="w-full px-4 py-3 bg-white border border-[#D9D8D1] rounded-xl text-sm text-[#171716] focus:outline-none focus:border-[#171716]"
              />
            </div>

            {/* Preferred Date & Notes */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-[#73736D] mb-1.5">
                  Preferred Date
                </label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full px-4 py-3 bg-white border border-[#D9D8D1] rounded-xl text-sm text-[#171716] focus:outline-none focus:border-[#171716]"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-[#73736D] mb-1.5">
                  Job Notes (Optional)
                </label>
                <input
                  type="text"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="e.g. Navien water heater leak"
                  className="w-full px-4 py-3 bg-white border border-[#D9D8D1] rounded-xl text-sm text-[#171716] focus:outline-none focus:border-[#171716]"
                />
              </div>
            </div>

            {/* Submit */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-4 bg-[#171716] hover:bg-[#B83A25] text-white text-sm font-semibold uppercase tracking-wider rounded-xl transition-colors shadow-md active:scale-[0.99]"
              >
                Confirm Request
              </button>

              <div className="flex items-center justify-center gap-2 mt-4 text-xs text-[#73736D]">
                <ShieldCheck className="w-4 h-4 text-[#B83A25]" />
                <span>No cancellation fees · Straightforward pricing</span>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
