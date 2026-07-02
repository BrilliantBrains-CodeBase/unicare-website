import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { fadeUp, vp } from '../../../../lib/animations';
import { Phone, WhatsAppIc, CalendarCheck } from '../../../../components/icons';
import { doctors } from '../../../../data/doctors';

const pedDoctors = doctors.filter(d => d.specialty === 'Pediatrics');

function DoctorCard({ doc }) {
  const shortRole = doc.role.split('—')[0].trim();
  const fullRole  = doc.role.split('—')[1]?.trim() ?? doc.role;

  return (
    <div
      className="doctor-card"
      style={{ aspectRatio: '4/5', boxShadow: '0 8px 32px rgba(1,34,87,0.12)' }}
    >
      <img
        src={doc.photo}
        alt={doc.name}
        className="absolute inset-0 w-full h-full object-cover object-top"
        loading="lazy"
      />

      <div className="doctor-card-info" onMouseDown={(e) => e.stopPropagation()}>
        <h3 className="text-[17px] font-bold leading-snug shrink-0 text-white">
          {doc.name}
        </h3>
        <p className="text-[13px] mt-0.5 mb-3 shrink-0" style={{ color: 'rgba(255,255,255,0.65)' }}>
          {shortRole}
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
            href={doc.waUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="h-8 w-8 shrink-0 rounded-full flex items-center justify-center hover:opacity-80 cursor-pointer"
            style={{ background: 'rgba(255,255,255,0.12)' }}
          >
            <WhatsAppIc s={14} c="#25D366" />
          </a>
          <a
            href={`tel:${doc.phone}`}
            aria-label="Call"
            className="h-8 w-8 shrink-0 rounded-full flex items-center justify-center hover:opacity-80 cursor-pointer"
            style={{ background: 'rgba(255,255,255,0.12)' }}
          >
            <Phone s={12} c="#fff" />
          </a>
        </div>

        <div className="doctor-card-expanded-content mt-3 pb-5">
          <div className="h-px mb-3 mt-1" style={{ background: 'rgba(255,255,255,0.12)' }} />
          <p className="text-[13px] leading-relaxed mb-2.5" style={{ color: 'rgba(255,255,255,0.65)' }}>
            {doc.qualifications}
          </p>
          <p className="text-[13.5px] font-semibold mb-3" style={{ color: 'var(--teal)' }}>
            {fullRole}
          </p>
          <div className="h-px mb-3" style={{ background: 'rgba(255,255,255,0.12)' }} />
          <div>
            <p className="text-[11px] font-bold uppercase tracking-wider mb-1.5" style={{ color: 'rgba(255,255,255,0.40)' }}>
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

export default function DepartmentDoctors() {
  return (
    <section className="py-6 2xl:py-10">
      <div
        className="mx-4 sm:mx-5 2xl:mx-8 rounded-[20px] 2xl:rounded-[28px] py-14 sm:py-16 2xl:py-20 px-4 sm:px-6 lg:px-10"
        style={{ background: '#EAEDF0' }}
      >
        <div className="max-w-330 mx-auto">

          <motion.div
            className="text-center mb-10"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={vp}
          >
            <span
              className="block text-[12px] font-bold tracking-[1.2px] uppercase"
              style={{ color: 'var(--teal)' }}
            >
              Our Pediatricians
            </span>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={vp}
          >
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={24}
              slidesPerView={1}
              breakpoints={{ 768: { slidesPerView: 2 } }}
              navigation
              pagination={{ clickable: true }}
              className="pb-12"
            >
              {pedDoctors.map(doc => (
                <SwiperSlide key={doc.slug} style={{ height: 'auto' }}>
                  <DoctorCard doc={doc} />
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
