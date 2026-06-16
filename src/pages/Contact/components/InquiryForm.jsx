import { useState } from 'react';
import { motion } from 'framer-motion';
import { Arrow, Phone, WhatsAppIc, Mail } from '../../../components/icons';
import { fadeUp, slideLeft, slideRight, stagger, vp } from '../../../lib/animations';

const SCRIPT_URL = 'https://script.google.com/macros/s/REPLACE_WITH_CONTACT_FORM_SCRIPT_ID/exec';

const SPECIALTIES = [
  "Women's Health",
  'Laparoscopic Surgery',
  'Diabetes & Hormones',
  'Child Health',
  'General Medicine',
  'Diagnostics & Lab',
  'Other',
];

const headingStagger = stagger(0.1, 0);

export default function InquiryForm() {
  const [name,      setName]      = useState('');
  const [phone,     setPhone]     = useState('');
  const [specialty, setSpecialty] = useState('');
  const [message,   setMessage]   = useState('');
  const [status,    setStatus]    = useState('idle'); // idle | loading | success | error

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('loading');
    try {
      const fd = new FormData();
      fd.append('name',      name);
      fd.append('phone',     phone);
      fd.append('specialty', specialty);
      fd.append('message',   message);
      fd.append('source',    'contact-page');
      await fetch(SCRIPT_URL, { method: 'POST', body: fd });
      setStatus('success');
    } catch {
      setStatus('error');
    }
  }

  return (
    <section className="px-4 sm:px-6 lg:px-10 py-12 sm:py-16">
      <div className="max-w-330 mx-auto">

        {/* Heading */}
        <motion.div
          className="flex flex-col items-center text-center mb-8 md:mb-10"
          variants={headingStagger}
          initial="hidden"
          whileInView="visible"
          viewport={vp}
        >
          <motion.span variants={fadeUp} className="pill text-[12px]">Get in Touch</motion.span>
          <motion.h2
            variants={fadeUp}
            className="font-display text-[28px] md:text-[38px] lg:text-[46px] leading-[1.08] mt-4"
            style={{ color: 'var(--navy)' }}
          >
            Send us a message.
          </motion.h2>
          <motion.p variants={fadeUp} className="text-[14px] sm:text-[15px] text-(--muted) mt-3 leading-relaxed max-w-110">
            Our care team typically responds within the hour during working hours.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-12 gap-5 sm:gap-6 items-stretch">

          {/* Left sidebar — navy */}
          <motion.div
            className="col-span-12 lg:col-span-4"
            variants={slideLeft}
            initial="hidden"
            whileInView="visible"
            viewport={vp}
          >
            <div className="h-full rounded-[20px] sm:rounded-[28px] bg-(--navy) text-white p-6 sm:p-8 md:p-10 flex flex-col relative overflow-hidden min-h-72 lg:min-h-0">

              <svg viewBox="0 0 220 220" className="absolute -right-8 -top-8 w-50 opacity-[.06] pointer-events-none" aria-hidden="true">
                <circle cx="110" cy="110" r="100" fill="none" stroke="#2CAAA0" strokeWidth="1.5"/>
                <circle cx="110" cy="110" r="70"  fill="none" stroke="#2CAAA0" strokeWidth="1.5"/>
                <circle cx="110" cy="110" r="40"  fill="none" stroke="#2CAAA0" strokeWidth="1.5"/>
              </svg>

              <h2 className="font-display text-[28px] sm:text-[34px] leading-[1.1] mb-3">
                Need Assistance?
              </h2>
              <p className="text-[13.5px] text-white/65 leading-relaxed mb-8">
                Our care team is here to help with appointments, department guidance and general enquiries.
              </p>

              <div className="flex flex-col gap-4 mt-auto">
                <a href="tel:+919090546363" className="flex items-center gap-3 group">
                  <span className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0" style={{ background: 'rgba(44,170,160,0.18)' }}>
                    <Phone s={14} c="#2CAAA0"/>
                  </span>
                  <span className="text-[13.5px] text-white/80 group-hover:text-white transition-colors">+91 90905 46363</span>
                </a>
                <a href="tel:+919121856565" className="flex items-center gap-3 group">
                  <span className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0" style={{ background: 'rgba(44,170,160,0.18)' }}>
                    <Phone s={14} c="#2CAAA0"/>
                  </span>
                  <span className="text-[13.5px] text-white/80 group-hover:text-white transition-colors">+91 91218 56565</span>
                </a>
                <a
                  href="https://wa.me/919090546363?text=Hi%2C%20I%20would%20like%20to%20book%20an%20appointment%20at%20UniCare%20Hospitals."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 group"
                >
                  <span className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0" style={{ background: 'rgba(37,211,102,0.15)' }}>
                    <WhatsAppIc s={16} c="#25D366"/>
                  </span>
                  <span className="text-[13.5px] text-white/80 group-hover:text-white transition-colors">Chat on WhatsApp</span>
                </a>
                <a href="mailto:info@unicareglobalhospitals.com" className="flex items-center gap-3 group">
                  <span className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0" style={{ background: 'rgba(44,170,160,0.18)' }}>
                    <Mail s={14} c="#2CAAA0"/>
                  </span>
                  <span className="text-[13px] text-white/80 group-hover:text-white transition-colors break-all">info@unicareglobalhospitals.com</span>
                </a>
              </div>

            </div>
          </motion.div>

          {/* Right form card */}
          <motion.div
            className="col-span-12 lg:col-span-8"
            variants={slideRight}
            initial="hidden"
            whileInView="visible"
            viewport={vp}
          >
            <div className="h-full bg-white rounded-[20px] sm:rounded-[28px] border border-(--line) p-6 sm:p-8 md:p-10">

              {status === 'success' ? (
                <div
                  className="flex flex-col items-center justify-center text-center py-16 px-6 rounded-2xl h-full min-h-80"
                  style={{ background: 'var(--teal-soft)', border: '1px solid rgba(44,170,160,0.2)' }}
                >
                  <span
                    className="w-12 h-12 rounded-full text-[20px] font-bold text-white flex items-center justify-center mb-5"
                    style={{ background: 'var(--teal)' }}
                  >✓</span>
                  <h3 className="font-display text-[22px] text-(--navy) mb-2">Message Received</h3>
                  <p className="text-[14.5px] text-(--muted) leading-relaxed max-w-96">
                    Thank you. Our team will call you back within working hours, usually within the hour.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>

                  {/* Step 1 */}
                  <div className="mb-7">
                    <p className="text-[10.5px] tracking-[0.16em] uppercase font-semibold text-(--muted) mb-4">
                      <span className="inline-flex items-center justify-center w-5 h-5 rounded-full text-white text-[10px] mr-2" style={{ background: 'var(--navy)' }}>1</span>
                      Your Details
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="cf-name" className="text-[12px] font-medium text-(--navy)/70">Full Name <span className="text-red-400">*</span></label>
                        <input
                          id="cf-name"
                          type="text"
                          required
                          value={name}
                          onChange={e => setName(e.target.value)}
                          placeholder="Your name"
                          className="h-11 rounded-xl border border-(--line) px-4 text-[14px] text-(--navy) bg-white focus:outline-none focus:ring-2 focus:ring-(--teal)/30 focus:border-(--teal) placeholder:text-(--muted)/50 transition"
                        />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="cf-phone" className="text-[12px] font-medium text-(--navy)/70">Mobile Number <span className="text-red-400">*</span></label>
                        <input
                          id="cf-phone"
                          type="tel"
                          required
                          value={phone}
                          onChange={e => setPhone(e.target.value)}
                          placeholder="+91 XXXXX XXXXX"
                          className="h-11 rounded-xl border border-(--line) px-4 text-[14px] text-(--navy) bg-white focus:outline-none focus:ring-2 focus:ring-(--teal)/30 focus:border-(--teal) placeholder:text-(--muted)/50 transition"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="mb-7">
                    <p className="text-[10.5px] tracking-[0.16em] uppercase font-semibold text-(--muted) mb-4">
                      <span className="inline-flex items-center justify-center w-5 h-5 rounded-full text-white text-[10px] mr-2" style={{ background: 'var(--navy)' }}>2</span>
                      Preferred Specialty
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {SPECIALTIES.map(s => {
                        const active = specialty === s;
                        return (
                          <button
                            key={s}
                            type="button"
                            onClick={() => setSpecialty(active ? '' : s)}
                            className="px-4 py-2 rounded-full text-[12.5px] font-medium border transition-colors cursor-pointer"
                            style={active
                              ? { background: 'var(--navy)', color: '#fff', borderColor: 'var(--navy)' }
                              : { background: 'transparent', color: 'var(--navy)', borderColor: 'var(--line)' }
                            }
                          >
                            {s}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div className="mb-7">
                    <p className="text-[10.5px] tracking-[0.16em] uppercase font-semibold text-(--muted) mb-4">
                      <span className="inline-flex items-center justify-center w-5 h-5 rounded-full text-white text-[10px] mr-2" style={{ background: 'var(--navy)' }}>3</span>
                      Your Message
                    </p>
                    <textarea
                      rows={4}
                      value={message}
                      onChange={e => setMessage(e.target.value)}
                      placeholder="How can we help you?"
                      className="w-full rounded-xl border border-(--line) px-4 py-3 text-[14px] text-(--navy) bg-white focus:outline-none focus:ring-2 focus:ring-(--teal)/30 focus:border-(--teal) placeholder:text-(--muted)/50 transition resize-none"
                    />
                  </div>

                  {status === 'error' && (
                    <div className="mb-5 rounded-xl bg-red-50 border border-red-200 px-4 py-3 text-[13.5px] text-red-700">
                      Something went wrong. Please try again or call <a href="tel:+919090546363" className="font-medium underline">+91 90905 46363</a>.
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="btn-dark w-full sm:w-auto disabled:opacity-60"
                  >
                    <span>{status === 'loading' ? 'Sending…' : 'Send Message'}</span>
                    {status !== 'loading' && <span className="arrow"><Arrow s={13}/></span>}
                  </button>

                </form>
              )}

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
