import { useState, useEffect } from "react";
import { Phone, Mail, MapPin, Send, CheckCircle2 } from "lucide-react";
import { BUSINESS_INFO, SERVICES } from "../data/content";

interface ContactSectionProps {
  selectedService?: string;
}

export function ContactSection({ selectedService }: ContactSectionProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "Emergency Plumbing",
    address: "",
    details: ""
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (selectedService) {
      const match = SERVICES.find(
        (s) => s.id === selectedService || s.title.toLowerCase().includes(selectedService.toLowerCase())
      );
      if (match) {
        setFormData((prev) => ({ ...prev, service: match.title }));
      }
    }
  }, [selectedService]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="w-full bg-[#F7F6F1] py-24 sm:py-36 px-6 sm:px-10 lg:px-16 border-b border-[#D9D8D1]/70">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Direct Info */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="text-xs font-semibold tracking-[0.25em] text-[#73736D] uppercase mb-4 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B83A25]" />
                CONTACT
              </div>

              <h2
                className="text-[#171716] text-balance font-normal leading-[0.96] tracking-[-0.05em] mb-6 sm:mb-8"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(42px, 6.5vw, 88px)"
                }}
              >
                Let's talk.
              </h2>

              <p className="text-lg text-[#73736D] font-normal leading-relaxed mb-10 max-w-md">
                Reach out directly by phone, email, or send us project notes below. We respond promptly across San Francisco and Marin County.
              </p>

              {/* Direct Details */}
              <div className="space-y-6 pt-4 border-t border-[#D9D8D1]">
                <div>
                  <div className="text-xs font-mono uppercase tracking-widest text-[#73736D] mb-1">
                    Phone
                  </div>
                  <a
                    href={`tel:${BUSINESS_INFO.phoneRaw}`}
                    className="text-2xl sm:text-3xl font-normal text-[#171716] hover:text-[#B83A25] transition-colors"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {BUSINESS_INFO.phone}
                  </a>
                </div>

                <div>
                  <div className="text-xs font-mono uppercase tracking-widest text-[#73736D] mb-1">
                    Email
                  </div>
                  <a
                    href={`mailto:${BUSINESS_INFO.email}`}
                    className="text-lg font-normal text-[#171716] hover:text-[#B83A25] transition-colors"
                  >
                    {BUSINESS_INFO.email}
                  </a>
                </div>

                <div>
                  <div className="text-xs font-mono uppercase tracking-widest text-[#73736D] mb-1">
                    Location
                  </div>
                  <div className="text-base text-[#171716] font-normal">
                    {BUSINESS_INFO.address}
                  </div>
                  <div className="text-xs text-[#73736D] mt-0.5">
                    San Francisco, CA · Serving SF & Marin County
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="flex flex-wrap gap-3 pt-10">
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider bg-[#171716] text-white rounded-full hover:bg-[#B83A25] transition-colors inline-flex items-center gap-2"
              >
                <Phone className="w-3.5 h-3.5" />
                Call
              </a>
              <a
                href={`mailto:${BUSINESS_INFO.email}`}
                className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider bg-white border border-[#D9D8D1] text-[#171716] rounded-full hover:border-[#171716] transition-colors inline-flex items-center gap-2"
              >
                <Mail className="w-3.5 h-3.5" />
                Email
              </a>
              <button
                onClick={() => {
                  const input = document.getElementById("contact-name-input");
                  if (input) {
                    input.focus();
                    input.scrollIntoView({ behavior: "smooth", block: "center" });
                  }
                }}
                className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider bg-transparent border border-[#B83A25] text-[#B83A25] rounded-full hover:bg-[#B83A25] hover:text-white transition-colors"
              >
                Book Online
              </button>
            </div>
          </div>

          {/* Right Column: Clean Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#D9D8D1] shadow-sm">
              {submitted ? (
                <div className="py-12 text-center animate-in fade-in">
                  <div className="w-16 h-16 rounded-full bg-[#B83A25]/10 text-[#B83A25] flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3
                    className="text-2xl font-normal text-[#171716] mb-3"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    Message Received
                  </h3>
                  <p className="text-sm text-[#73736D] max-w-md mx-auto mb-8">
                    Thank you, {formData.name}. Alexei Doubianski and the Plumbing Pure team will review your request and call back at {formData.phone} shortly.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: "",
                        phone: "",
                        email: "",
                        service: "Emergency Plumbing",
                        address: "",
                        details: ""
                      });
                    }}
                    className="text-xs uppercase tracking-wider font-semibold text-[#171716] hover:text-[#B83A25] underline"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <h3
                      className="text-2xl font-normal text-[#171716] mb-1"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      Send a message
                    </h3>
                    <p className="text-xs text-[#73736D]">
                      Tell us what you're seeing and we'll get back to you directly.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#73736D] mb-1.5">
                        Your Name *
                      </label>
                      <input
                        id="contact-name-input"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Sarah Jenkins"
                        className="w-full px-4 py-3 bg-[#F7F6F1] border border-[#D9D8D1] rounded-xl text-sm text-[#171716] focus:outline-none focus:border-[#171716]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#73736D] mb-1.5">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="(415) ..."
                        className="w-full px-4 py-3 bg-[#F7F6F1] border border-[#D9D8D1] rounded-xl text-sm text-[#171716] focus:outline-none focus:border-[#171716]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#73736D] mb-1.5">
                        Email Address
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="you@domain.com"
                        className="w-full px-4 py-3 bg-[#F7F6F1] border border-[#D9D8D1] rounded-xl text-sm text-[#171716] focus:outline-none focus:border-[#171716]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#73736D] mb-1.5">
                        Service Required
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-3 bg-[#F7F6F1] border border-[#D9D8D1] rounded-xl text-sm text-[#171716] focus:outline-none focus:border-[#171716]"
                      >
                        {SERVICES.map((s) => (
                          <option key={s.id} value={s.title}>
                            {s.title}
                          </option>
                        ))}
                        <option value="General Question">General Question</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#73736D] mb-1.5">
                      Property Address or Neighborhood (SF / Marin)
                    </label>
                    <input
                      type="text"
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      placeholder="e.g. Marina Blvd, San Francisco"
                      className="w-full px-4 py-3 bg-[#F7F6F1] border border-[#D9D8D1] rounded-xl text-sm text-[#171716] focus:outline-none focus:border-[#171716]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#73736D] mb-1.5">
                      Description of Problem / Project
                    </label>
                    <textarea
                      rows={3}
                      value={formData.details}
                      onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                      placeholder="Briefly describe what is happening..."
                      className="w-full px-4 py-3 bg-[#F7F6F1] border border-[#D9D8D1] rounded-xl text-sm text-[#171716] focus:outline-none focus:border-[#171716]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-[#171716] hover:bg-[#B83A25] text-white text-sm font-semibold uppercase tracking-wider rounded-xl transition-colors flex items-center justify-center gap-2 active:scale-[0.99]"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
