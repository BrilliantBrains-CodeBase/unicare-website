import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import { fadeUp, vp } from '../../../lib/animations';
import { Phone, WhatsAppIc, CalendarCheck } from '../../../components/icons';

import drVaruna   from '../../../assets/Dr.Varuna.png';
import drBhargava from '../../../assets/Dr.Bhargava.png';
import drDeeepak  from '../../../assets/Dr.Deepak.png';
import drVeena    from '../../../assets/Dr.Veena.png';
import drNitin    from '../../../assets/Dr.Nitin.png';

const PHONE  = '+919090546363';
const WA_URL = `https://wa.me/919090546363?text=${encodeURIComponent('Hello, I would like to book an appointment at UniCare Hospitals.')}`;

const doctors = [
  { img: drVaruna,   name: 'Dr. A.N. Varuna Vyas',   qual: 'MBBS, DGO, DNB, FRM',                    role: "Founder & Women's Health" },
  { img: drBhargava, name: 'Dr. Bhargava Vyas A.N.',  qual: 'MBBS, MS, FIAGES, FMAS',                 role: 'Founder & General Surgery' },
  { img: drDeeepak,  name: 'Dr. Deepak Thiriveedi',   qual: 'MBBS, MD, DM (Endocrinology), SCE (UK)', role: 'Endocrinology & Metabolic Medicine' },
  { img: drVeena,    name: 'Dr. Mareddy Veena',       qual: 'MBBS, MD (Pediatrics)',                  role: 'Pediatrics & Neonatal Care' },
  { img: drNitin,    name: 'Dr. M. Nitin Rao',        qual: 'MBBS, MD (Pediatrics)',                  role: 'Pediatrics & Neonatal Care' },
];

const N = doctors.length;                                    // 5
const TILES = [...doctors, ...doctors, ...doctors];          // 15 slides
const INITIAL = N;                                           // start at index 5 (middle set)

// ── Active (center) card ────────────────────────────────────────────────────
function ActiveCard({ doc }) {
  return (
    <div
      className="rounded-[26px] overflow-hidden relative"
      style={{ height: 'clamp(340px, 28vw, 520px)', boxShadow: '0 8px 32px rgba(1,34,87,0.13)' }}
    >
      <img
        src={doc.img}
        alt={doc.name}
        className="absolute inset-0 w-full h-full object-cover object-top"
        loading="lazy"
      />
      {/* Floating white info panel inside card */}
      <div
        className="absolute left-3 right-3 bottom-3 bg-white rounded-[18px] px-4 pt-3.5 pb-4"
        style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.10)' }}
      >
        <h3 className="text-[16px] font-bold leading-snug" style={{ color: 'var(--navy)' }}>
          {doc.name}
        </h3>
        <p className="text-[12px] mt-1 mb-3.5" style={{ color: 'var(--muted)' }}>
          {doc.role}
        </p>
        <div className="grid grid-cols-4 gap-2 items-center">
          <Link
            to="/book-an-appointment"
            className="col-span-2 h-11 flex items-center justify-center gap-1.5 rounded-full text-[12px] font-semibold text-white transition-opacity hover:opacity-85 cursor-pointer"
            style={{ background: 'var(--navy)' }}
            aria-label="Book an appointment"
          >
            <CalendarCheck s={13} c="#fff" />
            Book Now
          </Link>
          <a
            href={WA_URL} target="_blank" rel="noopener noreferrer"
            aria-label="WhatsApp UniCare"
            className="h-11 w-11 rounded-full flex items-center justify-center mx-auto hover:opacity-80 cursor-pointer"
            style={{ background: '#E8F8F0' }}
          >
            <WhatsAppIc s={18} c="#25D366" />
          </a>
          <a
            href={`tel:${PHONE}`}
            aria-label="Call UniCare"
            className="h-11 w-11 rounded-full flex items-center justify-center mx-auto hover:opacity-80 cursor-pointer"
            style={{ background: 'var(--soft)' }}
          >
            <Phone s={14} c="var(--navy)" />
          </a>
        </div>
      </div>
    </div>
  );
}

// ── Side (non-active) card ──────────────────────────────────────────────────
function SideCard({ doc }) {
  return (
    <div>
      <div className="rounded-[22px] overflow-hidden" style={{ background: '#F0F0F3', height: 'clamp(160px, 14vw, 260px)' }}>
        <img
          src={doc.img}
          alt={doc.name}
          className="w-full h-full object-cover object-top"
          loading="lazy"
        />
      </div>
      <div className="mt-3.5 text-center px-1">
        <h3 className="text-[14px] font-bold leading-snug" style={{ color: 'var(--navy)' }}>
          {doc.name}
        </h3>
        <p className="text-[11px] mt-1 mb-3" style={{ color: 'var(--muted)' }}>
          {doc.role}
        </p>
        <div className="flex items-center justify-center gap-2">
          <Link
            to="/book-an-appointment"
            aria-label="Book appointment"
            className="w-11 h-11 rounded-full flex items-center justify-center hover:opacity-80 cursor-pointer"
            style={{ background: 'var(--navy)' }}
          >
            <CalendarCheck s={14} c="#fff" />
          </Link>
          <a
            href={WA_URL} target="_blank" rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="w-11 h-11 rounded-full border flex items-center justify-center hover:bg-[var(--soft)] cursor-pointer"
            style={{ borderColor: 'var(--line)' }}
          >
            <WhatsAppIc s={16} c="#25D366" />
          </a>
          <a
            href={`tel:${PHONE}`}
            aria-label="Call"
            className="w-11 h-11 rounded-full border flex items-center justify-center hover:bg-[var(--soft)] cursor-pointer"
            style={{ borderColor: 'var(--line)' }}
          >
            <Phone s={13} c="var(--navy)" />
          </a>
        </div>
      </div>
    </div>
  );
}

// ── Main section ────────────────────────────────────────────────────────────
export default function DoctorsPreview() {
  const [activeSlideIdx, setActiveSlideIdx] = useState(INITIAL);
  const jumping = useRef(false);

  function handleSlideChange(swiper) {
    if (jumping.current) return;
    const idx = swiper.activeIndex;

    setActiveSlideIdx(idx);

    // When entering the LAST set (indices 2N..3N-1), silently jump to
    // the equivalent slide in the MIDDLE set (N..2N-1). No visual change —
    // the same doctor is shown, position is the same, loop is seamless.
    if (idx >= 2 * N) {
      jumping.current = true;
      swiper.slideTo(idx - N, 0); // 0ms = instant, no animation
      setTimeout(() => { jumping.current = false; }, 50);
      return;
    }

    // When entering the FIRST set (0..N-1), silently jump to middle set
    // (handles manual backward swipes)
    if (idx < N) {
      jumping.current = true;
      swiper.slideTo(idx + N, 0);
      setTimeout(() => { jumping.current = false; }, 50);
    }
  }

  return (
    <section className="py-20 overflow-hidden">

      <motion.div
        className="max-w-330 2xl:max-w-400 mx-auto px-6 2xl:px-20 text-center mb-14"
        variants={fadeUp} initial="hidden" whileInView="visible" viewport={vp}
      >
        <h2 className="text-[36px] lg:text-[48px] 2xl:text-[58px] font-bold leading-tight" style={{ color: 'var(--navy)' }}>
          Let's meet with expert doctors
        </h2>
        <p className="mt-3 text-[15px]" style={{ color: 'var(--muted)' }}>
          The doctors who built this hospital are the ones who treat you.
        </p>
      </motion.div>

      <Swiper
        modules={[Autoplay]}
        centeredSlides
        slidesPerView="auto"
        spaceBetween={24}
        initialSlide={INITIAL}
        autoplay={{ delay: 3200, disableOnInteraction: false }}
        onSlideChange={handleSlideChange}
        style={{ overflow: 'visible', padding: '8px 0 32px' }}
      >
        {TILES.map((doc, i) => {
          const isActive = i === activeSlideIdx;
          return (
            <SwiperSlide key={i} style={{ width: 'clamp(200px, 20vw, 360px)' }}>
              <div
                style={{
                  transition: 'transform 0.4s cubic-bezier(0.22,1,0.36,1), opacity 0.3s ease',
                  transform: isActive ? 'scale(1) translateY(0)' : 'scale(0.82) translateY(28px)',
                  transformOrigin: 'center bottom',
                  opacity: isActive ? 1 : 0.55,
                }}
              >
                {isActive ? <ActiveCard doc={doc} /> : <SideCard doc={doc} />}
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>

      <motion.div
        className="max-w-330 2xl:max-w-400 mx-auto px-6 2xl:px-20 text-center mt-6"
        variants={fadeUp} initial="hidden" whileInView="visible" viewport={vp}
      >
        <Link
          to="/doctors"
          className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-[15px] font-semibold text-white hover:opacity-90 cursor-pointer"
          style={{ background: 'var(--navy)' }}
        >
          <CalendarCheck s={16} c="#fff" />
          Meet All Our Doctors
        </Link>
      </motion.div>

    </section>
  );
}
