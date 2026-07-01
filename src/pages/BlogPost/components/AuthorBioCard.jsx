import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Phone, WhatsAppIc, CalendarCheck } from '../../../components/icons';
import { scaleIn, vp } from '../../../lib/animations';

function getInitials(name) {
  return name
    .replace('Dr. ', '')
    .split(' ')
    .slice(0, 2)
    .map(w => w[0])
    .join('');
}

export default function AuthorBioCard({ doctor }) {
  if (!doctor) return null;

  const initials = getInitials(doctor.name);

  return (
    <motion.div
      variants={scaleIn}
      initial="hidden"
      whileInView="visible"
      viewport={vp}
      className="rounded-2xl p-6 sm:p-7 mt-10"
      style={{ background: 'var(--teal-soft)', border: '1px solid rgba(44,170,160,0.15)' }}
    >
      <p className="text-[11px] font-semibold tracking-[0.12em] uppercase text-(--teal) mb-5">
        About the Author
      </p>

      <div className="flex gap-4 sm:gap-5 items-start">
        {/* Avatar */}
        {doctor.photo
          ? <img
              src={doctor.photo}
              alt={doctor.name}
              className="shrink-0 w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover"
            />
          : <div
              className="shrink-0 w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center font-display text-[18px] font-bold text-white select-none"
              style={{ background: 'var(--navy)' }}
              aria-hidden="true"
            >
              {initials}
            </div>
        }

        {/* Info */}
        <div className="flex-1 min-w-0">
          <p className="font-display text-[17px] sm:text-[18px] text-(--navy) font-semibold leading-tight">
            {doctor.name}
          </p>
          <p className="text-[13px] text-(--muted) mt-0.5">{doctor.qualifications}</p>
          <p className="text-[13px] text-(--navy)/70 mt-0.5">{doctor.role}</p>

          {doctor.opdTimings && (
            <p className="text-[12.5px] text-(--muted) mt-2">
              <span className="font-medium text-(--navy)/80">OPD: </span>
              {doctor.opdTimings}
            </p>
          )}
        </div>
      </div>

      {/* CTAs */}
      <div className="mt-5 flex flex-wrap gap-2.5">
        <a
          href={`tel:${doctor.phone}`}
          className="btn-dark text-[13px] py-2.5! px-4! gap-2!"
          aria-label={`Call ${doctor.name}`}
        >
          <Phone s={13} c="#fff" />
          <span>Call</span>
        </a>
        <a
          href={doctor.waUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-dark text-[13px] py-2.5! px-4! gap-2!"
          style={{ background: '#25D366' }}
          aria-label={`WhatsApp ${doctor.name}`}
        >
          <WhatsAppIc s={15} c="#fff" />
          <span>WhatsApp</span>
        </a>
        <Link
          to="/book-an-appointment"
          className="btn-outline text-[13px] py-2.5! px-4!"
        >
          <CalendarCheck s={13} c="var(--navy)" />
          <span>Book Appointment</span>
        </Link>
      </div>
    </motion.div>
  );
}
