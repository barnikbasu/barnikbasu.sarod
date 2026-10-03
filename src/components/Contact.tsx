import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, Building2 } from 'lucide-react';
import { ContactParticles } from './ContactParticles';

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Full name is required.';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please provide a valid email address.';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Contact telephone is required.';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Please specify your recital details or enquiry.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('loading');

    // Simulate reliable dispatch
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });
      setErrors({});
    }, 800);
  };

  return (
    <section id="contact" className="relative py-20 sm:py-28 bg-[#040404] border-b border-[#222222] overflow-hidden">
      {/* Background Constellation Particles */}
      <ContactParticles />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2.5 h-2.5 bg-[#CC0000]" />
            <span className="text-xs font-display tracking-widest text-[#888888] uppercase">
              REPRESENTATIVE ENQUIRIES // CONCERT BOOKINGS
            </span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white uppercase mb-2">
            CONTACT
          </h2>
          <div className="font-display text-xs sm:text-sm tracking-widest text-[#CC0000] uppercase font-semibold">
            SEND MESSAGE DIRECTLY // RECITAL BOOKINGS & LECTURE DEMONSTRATIONS
          </div>
        </div>

        {/* 2-Column Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Contact Form */}
          <div className="lg:col-span-7 bg-black/85 border border-[#222222] p-6 sm:p-8 backdrop-blur-sm">
            {status === 'success' ? (
              <div className="py-8 text-center space-y-4">
                <div className="w-12 h-12 bg-[#CC0000] text-white flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h3 className="font-display text-2xl text-white font-bold uppercase">
                  MESSAGE TRANSMITTED
                </h3>
                <p className="font-body text-xs sm:text-sm text-[#AAAAAA] max-w-md mx-auto leading-relaxed">
                  Thank you for reaching out. Your enquiry has been received. Barnik Basu or management will acknowledge your recital or academic enquiry shortly.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="bg-[#111111] hover:bg-[#222222] text-white font-display text-xs tracking-widest px-6 py-2.5 uppercase border border-[#333333] transition-colors cursor-pointer"
                >
                  SEND ANOTHER MESSAGE
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-[11px] font-display tracking-widest text-[#AAAAAA] uppercase mb-1">
                    YOUR NAME *
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Shri / Smt. Full Name"
                    className="w-full bg-[#0a0a0a] border border-[#222222] focus:border-[#CC0000] focus:outline-none px-4 py-3 text-sm text-white font-body placeholder-[#444444] transition-colors"
                  />
                  {errors.name && (
                    <span className="text-[11px] text-[#CC0000] font-body mt-1 block">
                      {errors.name}
                    </span>
                  )}
                </div>

                {/* Email & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-[11px] font-display tracking-widest text-[#AAAAAA] uppercase mb-1">
                      YOUR EMAIL *
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="contact@domain.com"
                      className="w-full bg-[#0a0a0a] border border-[#222222] focus:border-[#CC0000] focus:outline-none px-4 py-3 text-sm text-white font-body placeholder-[#444444] transition-colors"
                    />
                    {errors.email && (
                      <span className="text-[11px] text-[#CC0000] font-body mt-1 block">
                        {errors.email}
                      </span>
                    )}
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-[11px] font-display tracking-widest text-[#AAAAAA] uppercase mb-1">
                      YOUR PHONE *
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 00000 00000"
                      className="w-full bg-[#0a0a0a] border border-[#222222] focus:border-[#CC0000] focus:outline-none px-4 py-3 text-sm text-white font-body placeholder-[#444444] transition-colors"
                    />
                    {errors.phone && (
                      <span className="text-[11px] text-[#CC0000] font-body mt-1 block">
                        {errors.phone}
                      </span>
                    )}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-[11px] font-display tracking-widest text-[#AAAAAA] uppercase mb-1">
                    YOUR MESSAGE / CONCERT INQUIRY *
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Specify concert dates, baithak invitation, lecture demonstration, or classical enquiry..."
                    className="w-full bg-[#0a0a0a] border border-[#222222] focus:border-[#CC0000] focus:outline-none px-4 py-3 text-sm text-white font-body placeholder-[#444444] transition-colors resize-none"
                  />
                  {errors.message && (
                    <span className="text-[11px] text-[#CC0000] font-body mt-1 block">
                      {errors.message}
                    </span>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full sm:w-auto bg-[#CC0000] hover:bg-[#990000] disabled:bg-[#555555] text-white font-display text-sm tracking-widest font-bold px-8 py-3.5 uppercase transition-colors cursor-pointer flex items-center justify-center gap-2"
                >
                  <Send className="w-3.5 h-3.5 fill-current" />
                  <span>{status === 'loading' ? 'TRANSMITTING...' : 'SEND MESSAGE'}</span>
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Artist Dossier & Representation */}
          <div className="lg:col-span-5 bg-black/85 border border-[#222222] p-6 sm:p-8 backdrop-blur-sm space-y-6">
            <div className="border-b border-[#222222] pb-4">
              <div className="text-[10px] font-display tracking-widest text-[#CC0000] uppercase font-bold mb-1">
                OFFICIAL REPRESENTATION
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-white uppercase tracking-wider">
                BARNIK BASU
              </h3>
              <div className="font-display text-xs text-[#888888] tracking-widest uppercase">
                SARODIST · KOLKATA, INDIA
              </div>
            </div>

            <div className="space-y-4">
              {/* Phone */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-[#141414] border border-[#222222] flex items-center justify-center shrink-0 text-[#CC0000]">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] font-display tracking-widest text-[#666666] uppercase">
                    TELEPHONE & BOOKINGS
                  </div>
                  <a
                    href="tel:+918017825688"
                    className="font-display text-base text-white font-bold tracking-wider hover:text-[#CC0000] transition-colors"
                  >
                    +91 80178 25688
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-[#141414] border border-[#222222] flex items-center justify-center shrink-0 text-[#CC0000]">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] font-display tracking-widest text-[#666666] uppercase">
                    OFFICIAL CORRESPONDENCE
                  </div>
                  <a
                    href="mailto:barnikbasu@gmail.com"
                    className="font-display text-base text-white font-bold tracking-wider hover:text-[#CC0000] transition-colors"
                  >
                    barnikbasu@gmail.com
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-[#141414] border border-[#222222] flex items-center justify-center shrink-0 text-[#CC0000]">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] font-display tracking-widest text-[#666666] uppercase">
                    RESIDENCE & SABHA BASE
                  </div>
                  <div className="font-display text-sm text-[#CCCCCC] tracking-wider">
                    Kolkata, West Bengal, India
                  </div>
                </div>
              </div>

              {/* Academy Affiliation */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-[#141414] border border-[#222222] flex items-center justify-center shrink-0 text-[#CC0000]">
                  <Building2 className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] font-display tracking-widest text-[#666666] uppercase">
                    ACADEMY AFFILIATION
                  </div>
                  <div className="font-display text-sm text-[#CCCCCC] tracking-wider">
                    ITC Sangeet Research Academy, Kolkata
                  </div>
                  <div className="text-[11px] text-[#777777] font-body">
                    Junior Scholar — Sarod (April 2026 — Present)
                  </div>
                </div>
              </div>
            </div>

            {/* Recital Guidelines Notice */}
            <div className="bg-[#0a0a0a] border border-[#1f1f1f] p-4 text-[11px] font-body text-[#888888] leading-relaxed">
              <div className="font-display text-[10px] tracking-widest text-[#CC0000] uppercase font-bold mb-1">
                RECITAL BOOKING PROTOCOL
              </div>
              Concert organizers and classical music sabhas are requested to provide 30–45 days advance notification for acoustic tuning, tabla accompanist coordination, and institutional schedules.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
