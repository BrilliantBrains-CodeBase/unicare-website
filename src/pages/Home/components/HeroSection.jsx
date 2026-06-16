import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Phone, WhatsAppIc, CalendarCheck, Pin } from '../../../components/icons';
import { fadeUp, stagger } from '../../../lib/animations';
import heroBg from '../../../assets/hospital-exterior-main.png';

const PHONE = '+919090546363';
const WA_MSG = encodeURIComponent('Hello, I would like to book an appointment at UniCare Hospitals.');
const WA_URL = `https://wa.me/919090546363?text=${WA_MSG}`;
const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent('UniCare Hospitals, A 201, 2nd Floor, Saanvi Antalya Homes, Kokapet, Telangana')}`;

const ctaStagger = stagger(0.08, 0.35);

export default function HeroSection() {
  return (
    <section data-hero className="relative isolate overflow-hidden -mt-16 lg:-mt-35 min-h-150 lg:min-h-175 flex items-center">
      <img
        src={heroBg}
        alt="Unicare Hospitals exterior in Kokapet, Hyderabad"
        className="absolute inset-0 w-full h-full object-cover ken-burns"
        fetchpriority="high"
        decoding="async"
      />
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(180deg, rgba(1,34,87,.6) 0%, rgba(1,34,87,.15) 45%, rgba(1,34,87,.72) 100%)' }}
      />

      <div className="relative z-10 max-w-330 mx-auto px-4 sm:px-6 lg:px-10 w-full pt-28 lg:pt-36 pb-16 lg:pb-24">
        <motion.div className="chip mb-5 sm:mb-6 w-fit text-[12px] sm:text-[13px] px-3.5 py-2" variants={fadeUp} initial="hidden" animate="visible">
          <span className="dot" style={{ background: '#2CAAA0' }} /> Kokapet, Hyderabad
        </motion.div>

        <motion.h1
          className="font-display text-white text-[42px] sm:text-[64px] lg:text-[88px] leading-[0.98] tracking-[-0.03em] max-w-184"
          variants={fadeUp} initial="hidden" animate="visible"
        >
          Expert Care, Close to Home.
        </motion.h1>

        <motion.p
          className="text-white/95 text-[15px] sm:text-[17px] lg:text-[18px] max-w-136 mt-5 sm:mt-7 leading-relaxed"
          variants={fadeUp} initial="hidden" animate="visible"
        >
          A new generation of family hospital, founded by practising doctors. Located in the heart of Kokapet.
        </motion.p>

        <motion.div className="mt-7 sm:mt-9 flex flex-wrap items-center gap-3" variants={ctaStagger} initial="hidden" animate="visible">
          <motion.a variants={fadeUp} href={`tel:${PHONE}`} className="btn-dark text-[15px] sm:text-[16px] py-3! pl-5! pr-5!">
            <Phone s={15} c="#fff" />
            <span>Call Hospital</span>
          </motion.a>

          <motion.a
            variants={fadeUp}
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-dark text-[15px] sm:text-[16px] py-3! pl-5! pr-5!"
            style={{ background: '#25D366' }}
          >
            <WhatsAppIc s={17} c="#fff" />
            <span>WhatsApp Us</span>
          </motion.a>

          <motion.div variants={fadeUp}>
            <Link to="/book-an-appointment" className="btn-outline btn-outline-white text-[15px] sm:text-[16px] py-3! px-5!">
              <CalendarCheck s={16} c="#fff" />
              <span>Book an Appointment</span>
            </Link>
          </motion.div>
        </motion.div>

        <motion.a
          variants={fadeUp} initial="hidden" animate="visible"
          href={MAPS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-1.5 text-white/85 text-[13px] sm:text-[14px] hover:text-white transition-colors underline-offset-4 hover:underline"
        >
          <Pin s={14} c="#fff" />
          Get Directions
        </motion.a>
      </div>
    </section>
  );
}
