import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import { ArrowLeft, ArrowRight } from '../../../components/icons';
import { fadeUp, vp } from '../../../lib/animations';
import { Phone, WhatsAppIc, CalendarCheck } from '../../../components/icons';

import drVaruna   from '../../../assets/Dr.Varuna.png';
import drBhargava from '../../../assets/Dr.Bhargava.png';
import drDeeepak  from '../../../assets/Dr.Deepak.png';
import drVeena    from '../../../assets/Dr.Veena.png';
import drNitin    from '../../../assets/Dr.Nitin.png';

const PHONE = '+919090546363';

const doctors = [
  {
    img: drVaruna,
    name: 'Dr. A.N. Varuna Vyas',
    qual: 'MBBS, DGO, DNB, FRM',
    shortRole: "Founder & Women's Health",
    fullRole: "Founder & Clinical Lead, Women's Health and Reproductive Care",
    opdTimings: 'Mon – Sat: 10:00 AM – 1:00 PM\nMon – Sat: 5:00 PM – 8:00 PM',
    waLink: `https://wa.me/919090546363?text=${encodeURIComponent("Hello, I'd like to book an appointment with Dr. A.N. Varuna Vyas.")}`,
  },
  {
    img: drDeeepak,
    name: 'Dr. Deepak Thiriveedi',
    qual: 'MBBS, MD (General Medicine), DM (Endocrinology), SCE Endocrinology & Diabetes (UK)',
    shortRole: 'Endocrinology & Metabolic Medicine',
    fullRole: 'Consultant, Endocrinology and Metabolic Medicine',
    opdTimings: 'Mon – Sat: 10:00 AM – 1:00 PM\nMon – Sat: 5:00 PM – 8:00 PM',
    waLink: `https://wa.me/919090546363?text=${encodeURIComponent("Hello, I'd like to book an appointment with Dr. Deepak Thiriveedi.")}`,
  },
  {
    img: drVeena,
    name: 'Dr. Mareddy Veena',
    qual: 'MBBS, MD (Pediatrics)',
    shortRole: 'Pediatrics & Neonatal Care',
    fullRole: 'Consultant, Pediatrics and Neonatal Care',
    opdTimings: 'Mon – Sat: 10:00 AM – 1:00 PM\nMon – Sat: 5:00 PM – 8:00 PM',
    waLink: `https://wa.me/919090546363?text=${encodeURIComponent("Hello, I'd like to book an appointment with Dr. Mareddy Veena.")}`,
  },
  {
    img: drNitin,
    name: 'Dr. M. Nitin Rao',
    qual: 'MBBS, MD (Pediatrics)',
    shortRole: 'Pediatrics & Neonatal Care',
    fullRole: 'Consultant, Pediatrics and Neonatal Care',
    opdTimings: 'Mon – Sat: 10:00 AM – 1:00 PM\nMon – Sat: 5:00 PM – 8:00 PM',
    waLink: `https://wa.me/919090546363?text=${encodeURIComponent("Hello, I'd like to book an appointment with Dr. M. Nitin Rao.")}`,
  },
];

// Detect touch/hover-less devices once at module level
const isTouchDevice = typeof window !== 'undefined' && window.matchMedia('(hover: none)').matches;

function DoctorCard({ doc, isOpen, onToggle }) {
  return (
    <div
      className={`doctor-card${isOpen ? ' is-open' : ''}`}
      style={{ aspectRatio: '4/5', boxShadow: '0 8px 32px rgba(1,34,87,0.12)' }}
      onClick={isTouchDevice ? onToggle : undefined}
    >
      {/* Doctor photo — sits behind the expanding panel */}
      <img
        src={doc.img}
        alt={doc.name}
        className="absolute inset-0 w-full h-full object-cover object-top"
        loading="lazy"
      />

      {/* Expanding info panel — slides up on hover via .doctor-card-info CSS */}
      <div
        className="doctor-card-info"
        onMouseDown={(e) => e.stopPropagation()} // prevent Swiper drag conflict
      >
        {/* Always-visible: name, role, CTAs */}
        <h3 className="text-[17px] font-bold leading-snug shrink-0 text-white">
          {doc.name}
        </h3>
        <p className="text-[13px] mt-0.5 mb-3 shrink-0" style={{ color: 'rgba(255,255,255,0.65)' }}>
          {doc.shortRole}
        </p>

        <div className="flex items-center gap-2 shrink-0 pb-4" onClick={(e) => e.stopPropagation()}>
          <Link
            to="/book-an-appointment"
            className="flex-1 min-w-0 h-10 flex items-center justify-center gap-1.5 rounded-full text-[13px] font-semibold text-white hover:opacity-85 cursor-pointer"
            style={{ background: 'var(--teal)' }}
            aria-label="Book an appointment"
          >
            <CalendarCheck s={13} c="#fff" />
            Book Now
          </Link>
          <a
            href={doc.waLink} target="_blank" rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="h-8 w-8 shrink-0 rounded-full flex items-center justify-center hover:opacity-80 cursor-pointer"
            style={{ background: 'rgba(255,255,255,0.12)' }}
          >
            <WhatsAppIc s={14} c="#25D366" />
          </a>
          <a
            href={`tel:${PHONE}`}
            aria-label="Call"
            className="h-8 w-8 shrink-0 rounded-full flex items-center justify-center hover:opacity-80 cursor-pointer"
            style={{ background: 'rgba(255,255,255,0.12)' }}
          >
            <Phone s={12} c="#fff" />
          </a>
        </div>

        {/* Expanded on hover — qualifications, full role, OPD timings */}
        <div className="doctor-card-expanded-content mt-3 pb-5">

          <div className="h-px mb-3 mt-1" style={{ background: 'rgba(255,255,255,0.12)' }} />

          <p className="text-[13px] leading-relaxed mb-2.5" style={{ color: 'rgba(255,255,255,0.65)' }}>
            {doc.qual}
          </p>

          <p className="text-[13.5px] font-semibold mb-3" style={{ color: 'var(--teal)' }}>
            {doc.fullRole}
          </p>

          <div className="h-px mb-3" style={{ background: 'rgba(255,255,255,0.12)' }} />

          <div>
            <p className="text-[11px] font-bold uppercase tracking-wider mb-1.5"
               style={{ color: 'rgba(255,255,255,0.40)' }}>
              OPD Timings
            </p>
            <p className="text-[13px] leading-relaxed whitespace-pre-line text-white">
              {doc.opdTimings}
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}

export default function DoctorsPreview() {
  const [openIdx, setOpenIdx] = useState(null);
  const swiperRef = useRef(null);

  function handleCardToggle(i) {
    setOpenIdx(prev => (prev === i ? null : i));
  }

  return (
    <section className="py-20 overflow-hidden">

      <motion.div
        className="max-w-[860px] mx-auto px-6 text-center mb-12"
        variants={fadeUp} initial="hidden" whileInView="visible" viewport={vp}
      >
        <span className="block text-[12px] font-bold tracking-[1.2px] uppercase mb-3"
              style={{ color: 'var(--teal)' }}>
          Meet our Doctors
        </span>
        <h2 className="h2-two-lines font-normal" style={{ color: 'var(--navy)' }}>
          The Doctors Who Built This Hospital{' '}
          <strong className="font-bold">Are The Ones Who Treat You.</strong>
        </h2>
      </motion.div>

      {/* Carousel with side nav buttons */}
      <div className="relative w-4/5 mx-auto">

        {/* Prev button */}
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          aria-label="Previous doctor"
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-10 w-11 h-11 rounded-full flex items-center justify-center cursor-pointer transition-all hover:scale-110 shrink-0"
          style={{ background: 'var(--navy)', boxShadow: '0 4px 16px rgba(1,34,87,0.25)' }}
        >
          <ArrowLeft s={18} c="#fff" />
        </button>

        {/* Next button */}
        <button
          onClick={() => swiperRef.current?.slideNext()}
          aria-label="Next doctor"
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10 w-11 h-11 rounded-full flex items-center justify-center cursor-pointer transition-all hover:scale-110 shrink-0"
          style={{ background: 'var(--navy)', boxShadow: '0 4px 16px rgba(1,34,87,0.25)' }}
        >
          <ArrowRight s={18} c="#fff" />
        </button>

        <div className="overflow-hidden">
        <Swiper
          onBeforeInit={(swiper) => { swiperRef.current = swiper; }}
          modules={[Autoplay]}
          spaceBetween={20}
          loop
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            0:    { slidesPerView: 1.2 },
            480:  { slidesPerView: 1.8 },
            768:  { slidesPerView: 2.3 },
            1024: { slidesPerView: 3 },
          }}
          style={{ padding: '8px 0 32px' }}
        >
          {doctors.map((doc, i) => (
            <SwiperSlide key={i}>
              <DoctorCard
                doc={doc}
                isOpen={openIdx === i}
                onToggle={() => handleCardToggle(i)}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        </div>

      </div>

      <motion.div
        className="max-w-330 2xl:max-w-400 mx-auto px-6 2xl:px-20 text-center mt-8"
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
