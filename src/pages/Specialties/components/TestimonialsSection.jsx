import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { IconStarFilled, IconShieldHeart } from '@tabler/icons-react';
import shapeImg       from '../../../assets/shape.png';
import consultImg     from '../../../assets/general-medicine.png';
import surgeryImg     from '../../../assets/surgery-ot.png';
import googleIcon    from '../../../assets/google-icon.webp';
import { UserCircle } from 'lucide-react';

/* placeholder — swap once added to content doc */
const TESTIMONIALS = [
  {
    quote: 'The doctors here truly listened. My recovery after surgery was faster than expected and the team checked on me every step of the way.',
    name: 'Placeholder Name',
    role: 'Patient — General Surgery',
  },
  {
    quote: "Brought my newborn here and the paediatric team was outstanding. Felt like they genuinely cared about our family's wellbeing.",
    name: 'Placeholder Name',
    role: 'Patient — Paediatrics',
  },
  {
    quote: 'Finally a hospital close to home with real specialists. The diagnosis was quick and the follow-up care was exceptional.',
    name: 'Placeholder Name',
    role: 'Patient — General Medicine',
  },
];

export default function TestimonialsSection() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIdx(i => (i + 1) % TESTIMONIALS.length), 4000);
    return () => clearInterval(t);
  }, []);

  const prev = () => setIdx(i => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  const next = () => setIdx(i => (i + 1) % TESTIMONIALS.length);
  const t = TESTIMONIALS[idx];

  return (
    <section className="bg-white px-4 sm:px-6 lg:px-10 py-16 sm:py-20">
      <div className="max-w-330 mx-auto">

        {/* ── FULL-WIDTH HEADING BLOCK ── */}
        <div className="relative mb-10 sm:mb-12 text-center">
          <p
            className="text-[11px] font-bold tracking-[0.2em] uppercase mb-4"
            style={{ color: 'var(--teal)' }}
          >
            YOUR HEALTH IS OUR TOP PRIORITY
          </p>
          <h2
            className="font-display text-[40px] sm:text-[52px] lg:text-[60px] leading-[1.12] max-w-4xl mx-auto"
          >
            <span style={{ color: 'var(--navy)' }}>
              Our track record speaks for itself. Many families have chosen{' '}
            </span>
            <span style={{ color: 'var(--muted)' }}>
              UniCare Hospitals
            </span>
          </h2>

          {/* Animated spring */}
          <motion.img
            src={shapeImg}
            alt=""
            aria-hidden="true"
            className="hidden sm:block absolute right-0 bottom-0 w-28 sm:w-36 lg:w-44 pointer-events-none"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>

        {/* ── 2-COLUMN GRID ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6 items-stretch">

          {/* LEFT: consultation photo + testimonial card */}
          <div className="flex flex-col gap-5 h-full">

            {/* Consultation photo */}
            <div className="rounded-2xl overflow-hidden h-64 sm:h-80">
              <img
                src={consultImg}
                alt="Doctor consulting a patient at UniCare Hospitals"
                className="w-full h-full object-cover object-center"
                loading="lazy"
              />
            </div>

            {/* Testimonial carousel card — flex-1 stretches to match right col height */}
            <div className="rounded-[20px] p-7 sm:p-9 flex flex-col flex-1" style={{ background: '#D6D2F1' }}>
              <div
                className="text-[52px] leading-none font-bold mb-3 select-none"
                style={{ color: '#B0B0D8' }}
                aria-hidden="true"
              >
                ❝
              </div>

              <div className="min-h-[112px]">
                <AnimatePresence mode="wait">
                  <motion.p
                    key={idx}
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -16 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="text-[15px] sm:text-[16px] leading-[1.75]"
                    style={{ color: 'var(--navy)' }}
                  >
                    {t.quote}
                  </motion.p>
                </AnimatePresence>
              </div>

              <div className="flex items-center justify-between mt-auto pt-5">
                <div className="flex items-center gap-3">
                  <span
                    className="w-12 h-12 rounded-full flex items-center justify-center shrink-0"
                    style={{ background: 'var(--soft)' }}
                  >
                    <UserCircle size={26} color="var(--navy)" strokeWidth={1.5} />
                  </span>
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <p className="text-[13px] font-bold" style={{ color: 'var(--navy)' }}>{t.name}</p>
                      <p className="text-[11px]" style={{ color: 'var(--muted)' }}>{t.role}</p>
                    </motion.div>
                  </AnimatePresence>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <button onClick={prev} aria-label="Previous"
                    className="w-10 h-10 rounded-full border border-(--line) bg-white flex items-center justify-center cursor-pointer hover:bg-(--soft) transition-colors">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="var(--navy)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M19 12H5M12 5l-7 7 7 7"/>
                    </svg>
                  </button>
                  <button onClick={next} aria-label="Next"
                    className="w-10 h-10 rounded-full border border-(--line) bg-white flex items-center justify-center cursor-pointer hover:bg-(--soft) transition-colors">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="var(--navy)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>

          </div>

          {/* RIGHT: ratings row + surgery photo + trust card */}
          <div className="flex flex-col gap-5">

            {/* Ratings + Quality Assured side by side */}
            <div className="flex gap-5">
              {/* Ratings badge */}
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

              {/* Quality Assured card */}
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

            {/* Surgery photo */}
            <div className="rounded-2xl overflow-hidden h-72 sm:h-80">
              <img
                src={surgeryImg}
                alt="UniCare Hospitals surgical team"
                className="w-full h-full object-cover object-center"
                loading="lazy"
              />
            </div>

            {/* Book Appointment CTA — below surgery photo, beside testimonial card */}
            <div
              className="rounded-[20px] p-6 sm:p-7 flex flex-col gap-4 relative overflow-hidden"
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

          </div>
        </div>
      </div>
    </section>
  );
}
