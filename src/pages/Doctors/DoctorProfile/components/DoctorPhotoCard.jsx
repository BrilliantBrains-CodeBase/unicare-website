import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Phone, WhatsAppIc, CalendarCheck } from '../../../../components/icons';
import { slideLeft, vp } from '../../../../lib/animations';

export default function DoctorPhotoCard({ doctor }) {
  return (
    <motion.div
      variants={slideLeft}
      initial="hidden"
      whileInView="visible"
      viewport={vp}
      className="lg:sticky lg:top-20 xl:top-24 2xl:top-28 rounded-[26px] p-4 sm:p-5"
      style={{ background: 'var(--soft)' }}
    >
      <div className="rounded-2xl overflow-hidden h-[calc(70vh-3.5rem)] xl:h-[calc(70vh-4.2rem)] 2xl:h-[calc(70vh-4.9rem)] lg:max-w-[40vw]">
        <img
          src={doctor.photo}
          alt={doctor.name}
          className="w-full h-full object-cover object-top"
          loading="eager"
        />
      </div>

      {/* Action row — Book Appointment, Phone, WhatsApp */}
      <div className="mt-4 flex items-center gap-2">
        <Link
          to="/book-an-appointment"
          className="flex-1 min-w-0 h-11 rounded-full text-white text-[13.5px] font-semibold flex items-center justify-center gap-1.5 hover:opacity-90 transition-opacity"
          style={{ background: 'var(--teal)' }}
        >
          <CalendarCheck s={14} c="#fff" />
          Book Appointment
        </Link>
        <a
          href={`tel:${doctor.phone}`}
          aria-label="Call"
          className="w-11 h-11 shrink-0 rounded-full border border-(--line) bg-white flex items-center justify-center hover:bg-(--teal-soft) transition-colors"
        >
          <Phone s={16} c="var(--navy)" />
        </a>
        <a
          href={doctor.waUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
          className="w-11 h-11 shrink-0 rounded-full flex items-center justify-center hover:opacity-90 transition-opacity"
          style={{ background: '#25D366' }}
        >
          <WhatsAppIc s={17} c="#fff" />
        </a>
      </div>
    </motion.div>
  );
}
