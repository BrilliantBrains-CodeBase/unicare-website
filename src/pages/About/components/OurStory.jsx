import { motion } from 'framer-motion';
import { IconStarFilled, IconUsers } from '@tabler/icons-react';
import { fadeUp, slideLeft, slideUp, scaleIn, stagger, vp } from '../../../lib/animations';
import googleIcon from '../../../assets/google-icon.webp';
import mainImg   from '../../../assets/hospital-exterior-main.png';
import secondImg from '../../../assets/general-medicine.png';

const FEATURES = [
  'Excellence',
  'Proximity',
  'Transparency',
  'Compassion',
  'Trust',
  'Founded and run by doctors',
  'Everything in one place',
  'Transparent by design',
];

export default function OurStory() {
  return (
    <section className="bg-white pt-6 sm:pt-8 pb-16 sm:pb-20 lg:pb-24 px-4 sm:px-6 lg:px-10">
      <div className="max-w-330 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* ── LEFT: Image collage ── */}
          <motion.div
            className="relative min-h-[420px] sm:min-h-[520px] lg:min-h-[580px]"
            variants={slideLeft} initial="hidden" whileInView="visible" viewport={vp}
          >
            {/* Main tall image — spans left ~78% */}
            <div className="absolute inset-0" style={{ right: '22%' }}>
              <img
                src={mainImg}
                alt="UniCare Hospitals, Kokapet"
                className="w-full h-full object-cover object-center rounded-[24px]"
                loading="lazy"
              />
            </div>

            {/* Stat card 1 — top-right: Google Rating */}
            <motion.div
              className="absolute top-4 right-0 w-36 sm:w-40 rounded-[20px] p-4 sm:p-5 flex flex-col justify-between z-10"
              style={{ background: 'var(--teal-soft)', minHeight: 148 }}
              variants={scaleIn}
              transition={{ delay: 0.2 }}
            >
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center mb-3 shrink-0">
                <img src={googleIcon} alt="Google" className="w-6 h-6 object-contain" />
              </div>
              <div>
                <p className="text-[10px] tracking-[0.18em] uppercase font-semibold mb-1.5" style={{ color: 'var(--muted)' }}>
                  Google Rating
                </p>
                <div className="flex items-center gap-1.5">
                  <IconStarFilled size={18} color="var(--teal)" />
                  <span className="text-[34px] sm:text-[38px] font-bold leading-none" style={{ color: 'var(--navy)' }}>4.9</span>
                </div>
              </div>
            </motion.div>

            {/* Secondary square image — bottom-right */}
            <div className="absolute bottom-0 right-0 w-[55%] h-[48%] z-[5]">
              <img
                src={secondImg}
                alt="Doctor consultation at UniCare Hospitals"
                className="w-full h-full object-cover object-center rounded-[20px]"
                loading="lazy"
              />
            </div>

            {/* Stat card 2 — bottom-left: Patients Served */}
            <motion.div
              className="absolute bottom-0 left-0 w-32 sm:w-36 rounded-[20px] p-4 sm:p-5 flex flex-col justify-between z-10"
              style={{ background: 'var(--soft)', minHeight: 130 }}
              variants={scaleIn}
              transition={{ delay: 0.32 }}
            >
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center mb-3 shrink-0">
                <IconUsers size={18} color="var(--teal)" stroke={1.5} />
              </div>
              <div>
                <p className="text-[10px] tracking-[0.18em] uppercase font-semibold mb-0.5" style={{ color: 'var(--muted)' }}>
                  Patients Served
                </p>
                <span className="text-[30px] sm:text-[34px] font-bold leading-none" style={{ color: 'var(--navy)' }}>5K+</span>
              </div>
            </motion.div>
          </motion.div>

          {/* ── RIGHT: Content — stagger parent ── */}
          <motion.div
            variants={stagger(0.08, 0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={vp}
          >
            {/* Eyebrow */}
            <motion.p
              variants={fadeUp}
              className="text-[12px] font-bold tracking-[0.2em] uppercase mb-4"
              style={{ color: 'var(--teal)' }}
            >
              ABOUT UNICARE
            </motion.p>

            {/* Headline */}
            <motion.h2
              variants={fadeUp}
              className="font-display leading-[1.1] mb-5"
              style={{ color: 'var(--navy)', fontSize: 'clamp(32px, 5vw, 52px)' }}
            >
              <span className="font-normal">Healthcare that finally feels </span>
              <span className="font-bold">close to home.</span>
            </motion.h2>

            {/* Para 1 */}
            <motion.p
              variants={fadeUp}
              className="text-[15px] sm:text-[16px] leading-[1.75] mb-7"
              style={{ color: 'var(--muted)' }}
            >
              For years, the families of Kokapet and West Hyderabad faced the same compromise.
              A corporate hospital fifteen kilometres away, or a neighbourhood clinic that could
              not handle anything serious. When your child spiked a fever at midnight, or a
              pregnancy needed urgent attention, the only answer was traffic.
            </motion.p>

            {/* Feature grid — stagger container */}
            <motion.div
              variants={stagger(0.04)}
              className="grid grid-cols-2 gap-x-6 gap-y-4 mb-7"
            >
              {FEATURES.map(item => (
                <motion.div key={item} variants={slideUp} className="flex items-start gap-2">
                  <svg
                    width="16" height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    className="shrink-0 mt-[2px]"
                    aria-hidden="true"
                  >
                    <circle cx="8" cy="8" r="8" fill="var(--teal)" fillOpacity="0.12" />
                    <path d="M4.5 8L7 10.5L11.5 5.5" stroke="var(--teal)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span
                    className="text-[14px] sm:text-[15px] font-semibold leading-snug"
                    style={{ color: 'var(--navy)' }}
                  >
                    {item}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            {/* Para 2 */}
            <motion.p
              variants={fadeUp}
              className="text-[15px] sm:text-[16px] leading-[1.75]"
              style={{ color: 'var(--muted)' }}
            >
              Unicare Hospitals exist to end that compromise. We are a boutique multispecialty
              hospital founded by practicing doctors, Dr. A.N. Varuna Vyas and Dr. Bhargava
              Vyas A.N., who spent their careers inside large hospital systems and saw exactly
              what neighbourhood healthcare could be, and was not. They built Unicare to combine
              the capability of a specialist center with the warmth and continuity of a family
              doctor, right where West Hyderabad's families live.
            </motion.p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
