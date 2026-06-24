import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Phone, WhatsAppIc, CalendarCheck, Pin } from '../../../components/icons';
import { fadeUp, stagger } from '../../../lib/animations';
import heroBg from '../../../assets/hero-bg.png';

const HERO_VIDEO = '/hero-video.mp4';

const PHONE = '+919090546363';
const WA_MSG = encodeURIComponent('Hello, I would like to book an appointment at UniCare Hospitals.');
const WA_URL = `https://wa.me/919090546363?text=${WA_MSG}`;
const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent('UniCare Hospitals, A 201, 2nd Floor, Saanvi Antalya Homes, Kokapet, Telangana')}`;

const ctaStagger = stagger(0.08, 0.35);

export default function HeroSection() {
  // Make the page background dark navy while the hero is mounted — ensures the
  // floating header's margin gaps show dark (matching the hero overlay) not the
  // light page background (#F4F5F7) that would otherwise bleed through.
  useEffect(() => {
    document.documentElement.style.background = '#012257';
    return () => { document.documentElement.style.background = ''; };
  }, []);

  return (
    <section data-hero className="lg:mx-6 2xl:mx-8 lg:rounded-t-[44px] 2xl:rounded-t-[60px] relative isolate overflow-hidden -mt-22 min-h-150 sm:min-h-165 lg:min-h-0 lg:aspect-video flex items-center">
      <video
        src={HERO_VIDEO}
        poster={heroBg}
        autoPlay
        loop
        muted
        playsInline
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(180deg, rgba(1,34,87,.65) 0%, rgba(1,34,87,.1) 45%, rgba(1,34,87,.72) 100%)' }}
      />

      <div className="relative z-10 max-w-330 2xl:max-w-400 mx-auto px-4 sm:px-6 lg:px-10 2xl:px-20 w-full pt-32 lg:pt-28 2xl:pt-32 pb-16 lg:pb-24 2xl:pb-32">
        <motion.div className="chip mb-5 sm:mb-6 w-fit text-[12px] sm:text-[13px] px-3.5 py-2" variants={fadeUp} initial="hidden" animate="visible">
          <span className="dot" style={{ background: '#2CAAA0' }} /> Kokapet, Hyderabad
        </motion.div>

        <motion.h1
          className="font-display font-semibold text-white text-[36px] xs:text-[42px] sm:text-[64px] lg:text-[88px] 2xl:text-[110px] leading-[0.98] tracking-[-0.03em] max-w-184 2xl:max-w-none"
          variants={fadeUp} initial="hidden" animate="visible"
        >
          Expert Care,<br />Close to Home.
        </motion.h1>

        <motion.p
          className="text-white/95 text-[15px] sm:text-[17px] lg:text-[18px] 2xl:text-[20px] max-w-136 2xl:max-w-[640px] mt-5 sm:mt-7 leading-relaxed"
          variants={fadeUp} initial="hidden" animate="visible"
        >
          A new generation of family hospital, founded by practising doctors. Located in the heart of Kokapet.
        </motion.p>

        <motion.div className="mt-7 sm:mt-9 2xl:mt-12 flex flex-col sm:flex-row sm:items-center gap-3 2xl:gap-5" variants={ctaStagger} initial="hidden" animate="visible">
          <motion.a variants={fadeUp} href={`tel:${PHONE}`} className="btn-dark text-[15px] sm:text-[16px] 2xl:text-[16px] py-3! pl-5! pr-5! 2xl:py-4! 2xl:px-6! justify-center min-h-11 w-full sm:w-auto">
            <Phone s={15} c="#fff" />
            <span>Call Hospital</span>
          </motion.a>

          <motion.a
            variants={fadeUp}
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-dark text-[15px] sm:text-[16px] py-3! pl-5! pr-5! 2xl:py-4! 2xl:px-6! justify-center min-h-11 w-full sm:w-auto"
            style={{ background: '#25D366' }}
          >
            <WhatsAppIc s={17} c="#fff" />
            <span>WhatsApp Us</span>
          </motion.a>

          <motion.div variants={fadeUp} className="w-full sm:w-auto">
            <Link to="/book-an-appointment" className="btn-outline btn-outline-white text-[15px] sm:text-[16px] py-3! px-5! 2xl:py-4! 2xl:px-6! flex justify-center min-h-11 w-full">
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
