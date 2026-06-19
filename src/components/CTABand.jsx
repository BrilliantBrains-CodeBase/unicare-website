import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Phone, WhatsAppIc, CalendarCheck } from './icons';
import { fadeUp, stagger, vp } from '../lib/animations';

const PHONE  = '+919090546363';
const WA_URL = `https://wa.me/919090546363?text=${encodeURIComponent('Hello, I would like to book an appointment at UniCare Hospitals.')}`;

const btnStagger = stagger(0.08, 0.2);

export default function CTABand({ chip = 'Get in Touch', heading, subtext }) {
  return (
    <section className="px-4 sm:px-6 lg:px-10 pb-16 sm:pb-20 lg:pb-24">
      <div className="max-w-330 mx-auto">
        <motion.div
          className="relative rounded-3xl overflow-hidden px-6 sm:px-12 lg:px-16 py-12 sm:py-16 text-center"
          style={{ background: 'var(--navy)' }}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={vp}
        >
          {/* Background decoration */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse 70% 60% at 50% 0%, rgba(44,170,160,0.18) 0%, transparent 70%)',
            }}
          />
          <svg
            viewBox="0 0 900 300"
            className="absolute inset-0 w-full h-full pointer-events-none opacity-[.04]"
            aria-hidden="true"
            preserveAspectRatio="xMidYMid slice"
          >
            <defs>
              <pattern id="cta-dots" width="24" height="24" patternUnits="userSpaceOnUse">
                <circle cx="1.5" cy="1.5" r="1.5" fill="#2CAAA0"/>
              </pattern>
            </defs>
            <rect width="900" height="300" fill="url(#cta-dots)"/>
          </svg>
          {/* Glowing orbs */}
          <div className="absolute -left-16 -top-16 w-64 h-64 rounded-full pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(44,170,160,0.14) 0%, transparent 65%)' }}/>
          <div className="absolute -right-16 -bottom-16 w-64 h-64 rounded-full pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(44,170,160,0.10) 0%, transparent 65%)' }}/>

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center gap-6">
            {/* Chip */}
            <span className="inline-flex items-center px-3.5 py-1.5 rounded-full text-[11px] font-semibold tracking-widest uppercase"
              style={{ background: 'rgba(44,170,160,0.18)', color: '#2CAAA0' }}>
              {chip}
            </span>

            {/* Heading */}
            <h2 className="font-display text-[26px] sm:text-[32px] lg:text-[38px] text-white leading-[1.15] tracking-tight max-w-2xl">
              {heading}
            </h2>

            {/* Optional subtext */}
            {subtext && (
              <p className="text-[14px] sm:text-[15px] max-w-lg leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)' }}>
                {subtext}
              </p>
            )}

            {/* Buttons */}
            <motion.div
              className="flex flex-wrap items-center justify-center gap-3 mt-2"
              variants={btnStagger}
              initial="hidden"
              whileInView="visible"
              viewport={vp}
            >
              <motion.a
                variants={fadeUp}
                href={`tel:${PHONE}`}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-[14px] font-semibold text-white transition-all duration-200 hover:opacity-90"
                style={{ background: 'var(--teal)' }}
              >
                <Phone s={15} c="#fff"/>
                <span>Call Now</span>
              </motion.a>

              <motion.a
                variants={fadeUp}
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-[14px] font-semibold text-white transition-all duration-200 hover:opacity-90"
                style={{ background: '#25D366' }}
              >
                <WhatsAppIc s={16} c="#fff"/>
                <span>WhatsApp</span>
              </motion.a>

              <motion.div variants={fadeUp}>
                <Link
                  to="/book-an-appointment"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-[14px] font-semibold text-white border transition-all duration-200 hover:bg-white hover:text-(--navy)"
                  style={{ borderColor: 'rgba(255,255,255,0.28)' }}
                >
                  <CalendarCheck s={15} c="currentColor"/>
                  <span>Book Appointment</span>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
