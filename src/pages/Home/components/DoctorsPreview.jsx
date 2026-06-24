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
    img: drBhargava,
    name: 'Dr. Bhargava Vyas A.N.',
    qual: 'MBBS, MS (General Surgery), FIAGES, FMAS',
    shortRole: 'Founder & General Surgery',
    fullRole: 'Founder & Clinical Lead, General and Minimal Access Surgery',
    opdTimings: 'Mon – Sat: 10:00 AM – 1:00 PM\nMon – Sat: 5:00 PM – 8:00 PM',
    waLink: `https://wa.me/919090546363?text=${encodeURIComponent("Hello, I'd like to book an appointment with Dr. Bhargava Vyas A.N.")}`,
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

function DoctorCard({ doc }) {
  return (
    <div
      className="doctor-card"
      style={{ height: 'clamp(320px, 26vw, 480px)', boxShadow: '0 8px 32px rgba(1,34,87,0.12)' }}
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
        <h3 className="text-[15px] font-bold leading-snug shrink-0" style={{ color: 'var(--navy)' }}>
          {doc.name}
        </h3>
        <p className="text-[11px] mt-0.5 mb-3 shrink-0" style={{ color: 'var(--muted)' }}>
          {doc.shortRole}
        </p>

        <div className="grid grid-cols-4 gap-2 items-center shrink-0">
          <Link
            to="/book-an-appointment"
            className="col-span-2 h-10 flex items-center justify-center gap-1.5 rounded-full text-[11px] font-semibold text-white hover:opacity-85 cursor-pointer"
            style={{ background: 'var(--navy)' }}
            aria-label="Book an appointment"
          >
            <CalendarCheck s={12} c="#fff" />
            Book Now
          </Link>
          <a
            href={doc.waLink} target="_blank" rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="h-10 w-10 rounded-full flex items-center justify-center mx-auto hover:opacity-80 cursor-pointer"
            style={{ background: '#E8F8F0' }}
          >
            <WhatsAppIc s={16} c="#25D366" />
          </a>
          <a
            href={`tel:${PHONE}`}
            aria-label="Call"
            className="h-10 w-10 rounded-full flex items-center justify-center mx-auto hover:opacity-80 cursor-pointer"
            style={{ background: 'var(--soft)' }}
          >
            <Phone s={13} c="var(--navy)" />
          </a>
        </div>

        {/* Expanded on hover — qualifications, full role, OPD timings */}
        <div className="doctor-card-expanded-content mt-3">

          <div className="h-px mb-3 mt-1" style={{ background: 'var(--line)' }} />

          <p className="text-[11.5px] leading-relaxed mb-2.5" style={{ color: 'var(--muted)' }}>
            {doc.qual}
          </p>

          <p className="text-[12px] font-semibold mb-3" style={{ color: 'var(--teal)' }}>
            {doc.fullRole}
          </p>

          <div className="h-px mb-3" style={{ background: 'var(--line)' }} />

          <div>
            <p className="text-[10px] font-bold uppercase tracking-wider mb-1.5"
               style={{ color: 'rgba(1,34,87,0.45)' }}>
              OPD Timings
            </p>
            <p className="text-[12px] leading-relaxed whitespace-pre-line" style={{ color: 'var(--navy)' }}>
              {doc.opdTimings}
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}

export default function DoctorsPreview() {
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
        <h2 className="text-[36px] lg:text-[42px] 2xl:text-[52px] font-bold leading-[1.3]" style={{ color: 'var(--navy)' }}>
          The doctors who built this hospital{' '}
          <strong className="font-extrabold">are the ones who treat you.</strong>
        </h2>
      </motion.div>

      <Swiper
        modules={[Autoplay]}
        slidesPerView="auto"
        spaceBetween={20}
        loop
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        style={{ overflow: 'visible', padding: '8px 24px 32px' }}
      >
        {doctors.map((doc, i) => (
          <SwiperSlide key={i} style={{ width: 'clamp(220px, 22vw, 320px)' }}>
            <DoctorCard doc={doc} />
          </SwiperSlide>
        ))}
      </Swiper>

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
