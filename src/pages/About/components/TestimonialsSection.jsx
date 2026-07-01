import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { fadeUp, slideLeft, slideRight, vp } from '../../../lib/animations';
import { IconStarFilled, IconShieldHeart } from '@tabler/icons-react';
import { ArrowLeft, ArrowRight } from '../../../components/icons';
import shapeImg   from '../../../assets/shape.png';
import googleIcon from '../../../assets/google-icon.webp';
import drVaruna   from '../../../assets/Dr.Varuna.png';
import drBhargava from '../../../assets/Dr.Bhargava.png';

/* Content doc Page 02 — Section 4: Leadership */
const LEADERSHIP = [
  {
    key: 'Dr. Varuna',
    name: 'Dr. A.N. Varuna Vyas',
    role: 'Founder & Clinical Lead',
    specialty: "Women's Health & Reproductive Care",
    quals: ['MBBS', 'DGO', 'DNB', 'FRM'],
    initials: 'VV',
    image: drVaruna,
    color: '#2CAAA0',
  },
  {
    key: 'Dr. Bhargava',
    name: 'Dr. Bhargava Vyas A.N.',
    role: 'Founder & Clinical Lead',
    specialty: 'General & Minimal Access Surgery',
    quals: ['MBBS', 'MS (General Surgery)', 'FIAGES', 'FMAS'],
    initials: 'BV',
    image: drBhargava,
    color: '#012257',
  },
  {
    key: 'Dr. Abhijit',
    name: 'Dr. Abhijit Roy',
    role: 'Director',
    specialty: 'UniCare Hospitals',
    quals: [],
    initials: 'AR',
    image: null,
    color: '#1a4a8a',
  },
  {
    key: 'Pavan',
    name: 'Pavan Kumar',
    role: 'Chief Executive Officer',
    specialty: 'UniCare Hospitals',
    quals: [],
    initials: 'PK',
    image: null,
    color: '#2CAAA0',
  },
];

export default function TestimonialsSection() {
  const [leaderIdx, setLeaderIdx] = useState(0);
  const leader = LEADERSHIP[leaderIdx];

  const prevLeader = () => setLeaderIdx(i => (i - 1 + LEADERSHIP.length) % LEADERSHIP.length);
  const nextLeader = () => setLeaderIdx(i => (i + 1) % LEADERSHIP.length);

  return (
    <section className="bg-white px-4 sm:px-6 lg:px-10 py-16 sm:py-20">
      <div className="max-w-330 mx-auto">

        {/* ── FULL-WIDTH HEADING BLOCK ── */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={vp} className="relative mb-10 sm:mb-12 text-center">
          <p
            className="text-[11px] font-bold tracking-[0.2em] uppercase mb-4"
            style={{ color: 'var(--teal)' }}
          >
            YOUR HEALTH IS OUR TOP PRIORITY
          </p>
          <h2 className="font-display text-[40px] sm:text-[52px] lg:text-[60px] leading-[1.12] max-w-4xl mx-auto">
            <span style={{ color: 'var(--navy)' }}>
              Our track record speaks for itself. Many families have chosen{' '}
            </span>
            <span style={{ color: 'var(--muted)' }}>UniCare Hospitals</span>
          </h2>
          <motion.img
            src={shapeImg}
            alt=""
            aria-hidden="true"
            className="hidden sm:block absolute right-0 bottom-0 w-28 sm:w-36 lg:w-44 pointer-events-none"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div>

        {/* ── 2-COLUMN GRID ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6 items-stretch">

          {/* LEFT: leadership card */}
          <motion.div variants={slideLeft} initial="hidden" whileInView="visible" viewport={vp} className="flex flex-col h-full">

            {/* ── LEADERSHIP CARD ── */}
            <div className="rounded-2xl p-4 sm:p-5 flex flex-col flex-1" style={{ background: '#D6D2F1' }}>

              {/* Tab pills — min 44px touch target */}
              <div className="flex items-center gap-2 flex-wrap mb-4">
                {LEADERSHIP.map((l, i) => (
                  <button
                    key={l.key}
                    onClick={() => setLeaderIdx(i)}
                    className="text-[13px] font-medium px-4 rounded-full border cursor-pointer transition-colors duration-200 flex items-center justify-center"
                    style={{
                      minHeight: 44,
                      ...(leaderIdx === i
                        ? { background: 'var(--navy)', color: '#fff', borderColor: 'var(--navy)' }
                        : { background: '#fff', color: 'var(--navy)', borderColor: 'rgba(1,34,87,0.15)' })
                    }}
                  >
                    {l.key}
                  </button>
                ))}
              </div>

              {/* Animated profile */}
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={leaderIdx}
                  initial={{ opacity: 0, x: 12 }}
                  animate={{ opacity: 1, x: 0, transition: { duration: 0.2, ease: [0.22, 1, 0.36, 1] } }}
                  exit={{ opacity: 0, x: -12, transition: { duration: 0.13, ease: [0.22, 1, 0.36, 1] } }}
                  className="flex-1"
                >
                  {/* Mobile layout */}
                  <div className="flex flex-col gap-3 sm:hidden">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-16 h-16 rounded-2xl shrink-0 relative overflow-hidden"
                        style={{ background: leader.color }}
                      >
                        {leader.image ? (
                          <img src={leader.image} alt={leader.name} className="w-full h-full object-cover object-top" />
                        ) : (
                          <span
                            className="absolute inset-0 flex items-center justify-center font-bold text-[24px] text-white"
                            style={{ opacity: 0.35 }}
                          >
                            {leader.initials}
                          </span>
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div
                          className="inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-semibold tracking-wide mb-1.5"
                          style={{ background: leader.color + '22', color: leader.color }}
                        >
                          {leader.role}
                        </div>
                        <div className="text-[16px] font-bold leading-snug" style={{ color: 'var(--navy)' }}>
                          {leader.name}
                        </div>
                        <div className="text-[12px] leading-normal mt-0.5" style={{ color: 'var(--muted)' }}>
                          {leader.specialty}
                        </div>
                      </div>
                    </div>
                    {leader.quals.length > 0 && (
                      <div className="flex flex-wrap gap-1.5">
                        {leader.quals.map(q => (
                          <span key={q} className="px-2.5 py-1 rounded-full text-[11px] font-medium bg-white border" style={{ borderColor: 'rgba(1,34,87,0.12)', color: 'var(--navy)' }}>{q}</span>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Desktop layout */}
                  <div className="hidden sm:grid sm:grid-cols-12 gap-4 items-start">
                    <div className="sm:col-span-5">
                      <div
                        className="rounded-2xl h-44 md:h-56 relative overflow-hidden"
                        style={{ background: leader.color }}
                      >
                        {leader.image ? (
                          <img src={leader.image} alt={leader.name} className="w-full h-full object-cover object-top" />
                        ) : (
                          <span
                            className="absolute inset-0 flex items-center justify-center font-bold text-white"
                            style={{ fontSize: 'clamp(48px,6vw,72px)', opacity: 0.2 }}
                          >
                            {leader.initials}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="sm:col-span-7 pt-1">
                      <div
                        className="inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-semibold tracking-wide mb-2"
                        style={{ background: leader.color + '22', color: leader.color }}
                      >
                        {leader.role}
                      </div>
                      <div className="text-[18px] font-bold leading-snug mb-1" style={{ color: 'var(--navy)' }}>
                        {leader.name}
                      </div>
                      <div className="text-[12px] leading-normal mb-3" style={{ color: 'var(--muted)' }}>
                        {leader.specialty}
                      </div>
                      {leader.quals.length > 0 && (
                        <div className="flex flex-wrap gap-1.5">
                          {leader.quals.map(q => (
                            <span key={q} className="px-2.5 py-1 rounded-full text-[11px] font-medium bg-white border" style={{ borderColor: 'rgba(1,34,87,0.12)', color: 'var(--navy)' }}>{q}</span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Bottom bar: counter + nav */}
              <div className="flex items-center justify-between mt-4 pt-4 border-t border-white/60">
                <span className="text-[12px] tabular-nums" style={{ color: 'var(--muted)' }}>
                  {String(leaderIdx + 1).padStart(2, '0')} / {String(LEADERSHIP.length).padStart(2, '0')}
                </span>
                <div className="flex gap-2">
                  <button
                    onClick={prevLeader}
                    aria-label="Previous leader"
                    className="w-11 h-11 rounded-full bg-white flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity"
                  >
                    <ArrowLeft s={15} c="var(--navy)" />
                  </button>
                  <button
                    onClick={nextLeader}
                    aria-label="Next leader"
                    className="w-11 h-11 rounded-full flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity"
                    style={{ background: 'var(--navy)' }}
                  >
                    <ArrowRight s={15} c="#fff" />
                  </button>
                </div>
              </div>
            </div>

          </motion.div>

          {/* RIGHT: ratings row + book CTA */}
          <motion.div variants={slideRight} initial="hidden" whileInView="visible" viewport={vp} transition={{ delay: 0.1 }} className="flex flex-col gap-5">

            {/* Ratings + Quality Assured */}
            <div className="flex gap-5">
              <div className="rounded-2xl p-5 sm:p-6 flex-1 flex flex-col justify-between" style={{ background: 'var(--teal-soft)' }}>
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mb-3 shrink-0">
                  <img src={googleIcon} alt="Google" className="w-7 h-7 object-contain" />
                </div>
                <div>
                  <p className="text-[10px] tracking-[0.18em] uppercase font-semibold mb-2" style={{ color: 'var(--muted)' }}>
                    Average Google Ratings
                  </p>
                  <div className="flex items-center gap-2">
                    <IconStarFilled size={22} color="var(--teal)" />
                    <span className="text-[40px] font-bold leading-none" style={{ color: 'var(--navy)' }}>4.9</span>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl p-5 sm:p-6 flex-1 flex flex-col justify-between" style={{ background: 'var(--soft)' }}>
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mb-3">
                  <IconShieldHeart size={22} color="var(--teal)" stroke={1.5} />
                </div>
                <div>
                  <p className="text-[10px] tracking-[0.18em] uppercase font-semibold mb-1" style={{ color: 'var(--muted)' }}>
                    Quality Assured
                  </p>
                  <p className="text-[13px] font-bold leading-snug" style={{ color: 'var(--navy)' }}>
                    UniCare delivers specialist-grade care with neighbourhood warmth.
                  </p>
                </div>
              </div>
            </div>

            {/* Book Appointment CTA */}
            <div
              className="rounded-[20px] p-6 sm:p-7 flex flex-col gap-4 relative overflow-hidden flex-1"
              style={{ background: 'var(--navy)' }}
            >
              <svg viewBox="0 0 220 220" className="absolute -right-8 -bottom-8 w-44 opacity-[.07] pointer-events-none" aria-hidden="true">
                <circle cx="110" cy="110" r="100" fill="none" stroke="#2CAAA0" strokeWidth="1.5"/>
                <circle cx="110" cy="110" r="70" fill="none" stroke="#2CAAA0" strokeWidth="1.5"/>
                <circle cx="110" cy="110" r="40" fill="none" stroke="#2CAAA0" strokeWidth="1.5"/>
              </svg>
              <div className="relative z-10">
                <p className="text-[10px] tracking-[0.18em] uppercase font-semibold text-white/50 mb-2">Get Started</p>
                <h3 className="font-display text-[20px] sm:text-[24px] text-white leading-snug mb-1.5">
                  Ready to book an appointment?
                </h3>
                <p className="text-[13px] text-white/60 leading-relaxed">
                  Call, WhatsApp, or book online — our team will guide you to the right specialist.
                </p>
              </div>
              <div className="relative z-10 flex items-center gap-3 flex-wrap">
                <Link
                  to="/book-an-appointment"
                  className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-[13px] font-semibold transition-opacity hover:opacity-90"
                  style={{ background: 'var(--teal)', color: '#fff' }}
                >
                  Book Appointment
                </Link>
                <a
                  href="tel:+919090546363"
                  className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-[13px] font-medium text-white/80 hover:text-white transition-colors border border-white/20"
                >
                  +91 90905 46363
                </a>
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
