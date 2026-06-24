import { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeUp, vp } from '../../../lib/animations';
import { ArrowRight, Pin } from '../../../components/icons';
import { IconCircleArrowRightFilled } from '@tabler/icons-react';

const MAPS_EMBED      = 'https://www.google.com/maps?q=A+201+2nd+Floor+Saanvi+Antalya+Homes+Kokapet+Telangana&output=embed';
const MAPS_DIRECTIONS = 'https://www.google.com/maps/search/A+201+2nd+Floor+Saanvi+Antalya+Homes+Kokapet+Telangana';

const physicians = [
  'DR. A.N. VARUNA VYAS',
  'DR. BHARGAVA VYAS A.N.',
  'DR. DEEPAK THIRIVEEDI',
  'DR. MAREDDY VEENA',
  'DR. M. NITIN RAO',
];

const timeSlots = [
  { group: 'Morning (10 AM – 2 PM)', times: ['10:00 AM', '11:00 AM', '12:00 PM', '01:00 PM'] },
  { group: 'Evening (5 PM – 8 PM)',   times: ['05:00 PM', '06:00 PM', '07:00 PM'] },
];

const fieldCls =
  'w-full h-[60px] rounded-[7px] bg-[#E1E6EB] border border-[#E1E6EB] outline-none px-5 text-[13.5px] tracking-[1.55px] transition-colors focus:border-[var(--teal)] focus:bg-white text-[var(--navy)] placeholder:text-[var(--muted)]';

export default function FindUs() {
  const [form, setForm] = useState({
    name: '', email: '', phone: '', reason: '',
    physician: '', time: '10:00 AM', date: '',
  });

  const set = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const msg =
      `Hello, I'd like to book an appointment.%0A` +
      `Name: ${form.name}%0APhone: ${form.phone}%0AReason: ${form.reason}%0A` +
      `Doctor: ${form.physician}%0ADate: ${form.date} at ${form.time}`;
    window.open(`https://wa.me/919090546363?text=${msg}`, '_blank');
  };

  return (
    // overflow-hidden is critical — it clips the address strip that bleeds left
    <section className="pt-10 pb-16 lg:pb-24 2xl:pb-32 overflow-hidden">
      <div className="max-w-330 2xl:max-w-400 mx-auto px-4 sm:px-8 2xl:px-20">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 xl:gap-14 items-start">

          {/* ── Left col: map + address ── */}
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={vp}
          >
            {/* Map */}
            <div className="rounded-[20px] overflow-hidden">
              <iframe
                src={MAPS_EMBED}
                width="100%"
                height="460"
                style={{ border: 0, display: 'block', height: 'clamp(360px, 30vw, 600px)' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="UniCare Hospitals Location"
              />
            </div>

            {/* Address strip — background extends to left viewport edge */}
            <div
              className="relative z-10 mt-8 flex items-center justify-between py-[15px] pr-4"
              style={{ paddingLeft: 15, maxWidth: 500 }}
            >
              {/* Full-bleed blue bg via absolute el that bleeds left via overflow-hidden on section */}
              <div
                className="absolute inset-0 -z-10"
                style={{
                  background: '#C4DCF3',
                  borderRadius: '0 50px 50px 0',
                  left: '-100vw',   // bleeds to the left edge — clipped by section overflow:hidden
                }}
              />

              <div className="flex items-center gap-3">
                <span
                  className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                  style={{ background: 'var(--teal)' }}
                >
                  <Pin s={18} c="#fff" />
                </span>
                <div>
                  <h5 className="text-[14px] font-semibold tracking-[1.2px] mb-0" style={{ color: 'var(--navy)' }}>
                    A 201, Saanvi Antalya Homes, Kokapet
                  </h5>
                  <span className="block text-[13px] mt-1" style={{ color: 'var(--muted)' }}>
                    Narsingi – 5 min &nbsp;·&nbsp; Financial District – 10 min &nbsp;·&nbsp; Gachibowli – 15 min
                  </span>
                </div>
              </div>

              <a
                href={MAPS_DIRECTIONS}
                target="_blank"
                rel="noreferrer"
                aria-label="Get directions"
                className="w-11 h-11 rounded-full flex items-center justify-center shrink-0 ml-3 transition-colors cursor-pointer"
                style={{ background: '#8EC0EE' }}
                onMouseEnter={e => { e.currentTarget.style.background = 'var(--teal)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = '#8EC0EE'; }}
              >
                <ArrowRight s={17} c="currentColor" />
              </a>
            </div>
          </motion.div>

          {/* ── Right col: heading + form ── */}
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={vp}
          >
            {/* Heading — indented 40px to align with form's content area (not the watermark zone) */}
            <div style={{ marginLeft: 40, marginBottom: 40 }}>
              <span
                className="block text-[12px] font-bold tracking-[1.2px] uppercase mb-4"
                style={{ color: 'var(--teal)' }}
              >
                Book an Appointment
              </span>
              <h2
                className="h2-two-lines font-normal mb-0"
                style={{ color: 'var(--navy)' }}
              >
                <strong className="font-bold">Book an appointment</strong>{' '}
                for an in-clinic consultation
              </h2>
            </div>

            {/* Form card — left padding 165px (watermark lives here), negative left margin bleeds left */}
            <div
              className="relative rounded-[30px] bg-white md:-ml-[145px]"
              style={{
                boxShadow: '0 2px 74px rgba(45,83,121,0.05)',
                padding: 'clamp(24px, 3vw, 45px) clamp(20px, 3vw, 45px) clamp(24px, 3vw, 45px) clamp(24px, 12vw, 165px)',
              }}
            >
              {/* Vertical "Unicare" watermark — sits in the 165px left padding zone */}
              <span
                className="hidden md:inline absolute select-none pointer-events-none font-black"
                style={{
                  left: 25,
                  top: 40,
                  fontSize: 100,
                  color: 'rgba(213,218,229,0.5)',
                  writingMode: 'vertical-lr',
                  letterSpacing: 10,
                  lineHeight: 1,
                  margin: 0,
                }}
                aria-hidden="true"
              >
                Unicare
              </span>

              <form onSubmit={handleSubmit} className="flex flex-col gap-5">

                <div>
                  <label htmlFor="appt-name" className="sr-only">Full Name</label>
                  <input id="appt-name" type="text" name="name" required
                    placeholder="NAME" value={form.name} onChange={set}
                    autoComplete="name" className={fieldCls} />
                </div>

                <div>
                  <label htmlFor="appt-email" className="sr-only">Email</label>
                  <input id="appt-email" type="email" name="email"
                    placeholder="EMAIL" value={form.email} onChange={set}
                    autoComplete="email" className={fieldCls} />
                </div>

                <div>
                  <label htmlFor="appt-phone" className="sr-only">Phone</label>
                  <input id="appt-phone" type="tel" name="phone" required
                    inputMode="numeric" placeholder="PHONE NO"
                    value={form.phone} onChange={set}
                    autoComplete="tel" className={fieldCls} />
                </div>

                <div>
                  <label htmlFor="appt-reason" className="sr-only">Reason of Visit</label>
                  <input id="appt-reason" type="text" name="reason"
                    placeholder="REASON OF VISIT" value={form.reason}
                    onChange={set} className={fieldCls} />
                </div>

                <div>
                  <label htmlFor="appt-physician" className="sr-only">Choose Physician</label>
                  <select id="appt-physician" name="physician"
                    value={form.physician} onChange={set} className={fieldCls}>
                    <option value="">CHOOSE PHYSICIAN</option>
                    {physicians.map(p => <option key={p} value={p}>{p}</option>)}
                  </select>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="appt-time" className="sr-only">Time</label>
                    <select id="appt-time" name="time"
                      value={form.time} onChange={set} className={fieldCls}>
                      {timeSlots.map(({ group, times }) => (
                        <optgroup key={group} label={group}>
                          {times.map(t => <option key={t} value={t}>{t}</option>)}
                        </optgroup>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="appt-date" className="sr-only">Date</label>
                    <input id="appt-date" type="date" name="date"
                      value={form.date} onChange={set}
                      min={new Date().toISOString().split('T')[0]}
                      className={fieldCls} />
                  </div>
                </div>

                <button
                  type="submit"
                  className="relative inline-flex items-center rounded-full pl-14 pr-6 py-3.5 text-[15px] font-semibold text-white transition-opacity hover:opacity-90 cursor-pointer mt-2"
                  style={{ background: 'var(--teal)' }}
                >
                  <span className="absolute left-5 top-1/2 -translate-y-1/2">
                    <IconCircleArrowRightFilled size={22} color="#fff" />
                  </span>
                  Request For An Appointment
                </button>

              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
