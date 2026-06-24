import { motion } from 'framer-motion';
import SEO from '../../components/SEO';
import { fadeUp, stagger, vp } from '../../lib/animations';
import InquiryForm from './components/InquiryForm';
import LocationMap from './components/LocationMap';

const FEATURES = [
  {
    num:   '01',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M5 17H3a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v3"/>
        <rect x="9" y="11" width="14" height="10" rx="2"/>
        <circle cx="12" cy="16" r="1"/>
      </svg>
    ),
    title: 'Free Parking',
    desc:  'Ample on-site parking at no charge for all patients and visitors.',
  },
  {
    num:   '02',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <circle cx="12" cy="4" r="1.5"/>
        <path d="M9 12l2-2 4 0M5 20l4-8h6l4 8"/>
        <path d="M19 20H5"/>
      </svg>
    ),
    title: 'Wheelchair Accessible',
    desc:  'Ramps, wide corridors and accessible facilities throughout the hospital.',
  },
  {
    num:   '03',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <rect x="4" y="2" width="16" height="20" rx="2"/>
        <path d="M9 9h6M9 13h6M9 17h6"/>
        <path d="M7 2v20"/>
      </svg>
    ),
    title: 'Elevator Access',
    desc:  'Smooth elevator access across all floors for patients with limited mobility.',
  },
  {
    num:   '04',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M3 12h18M12 3l9 9-9 9"/>
        <circle cx="12" cy="12" r="3"/>
      </svg>
    ),
    title: 'Emergency Entry',
    desc:  'Dedicated emergency entry point for swift access during urgent situations.',
  },
];

const featContainer = stagger(0.09, 0.1);

export default function Contact() {
  return (
    <>
      <SEO
        title="Contact UniCare Hospitals Kokapet | Address, Phone, Directions"
        description="Reach UniCare Hospitals at Saanvi Antalya Homes, Kokapet, Telangana. Call +91 90905 46363, WhatsApp us or get directions from anywhere in West Hyderabad."
        url="/contact"
        keywords="UniCare Hospitals contact number, UniCare Hospitals Kokapet address, hospital near me Kokapet"
      />

      {/* Hero — full-width map banner */}
      <LocationMap />

      {/* 1. Inquiry form — floats over bottom of map */}
      <div id="inquiry-form" className="relative z-10 -mt-48 sm:-mt-56 lg:-mt-64">
        <InquiryForm />
      </div>

      {/* 2. Creative 4-feature strip */}
      <section className="px-4 sm:px-6 lg:px-10 pb-14 sm:pb-18">
        <div className="max-w-330 mx-auto">
          <div className="relative rounded-[28px] overflow-hidden" style={{ background: 'var(--navy)' }}>

            {/* Background decoration */}
            <svg viewBox="0 0 900 200" className="absolute inset-0 w-full h-full pointer-events-none opacity-[.05]" aria-hidden="true" preserveAspectRatio="xMidYMid slice">
              <defs>
                <pattern id="feat-grid" width="48" height="48" patternUnits="userSpaceOnUse">
                  <path d="M48 0H0V48" fill="none" stroke="#2CAAA0" strokeWidth="1"/>
                </pattern>
              </defs>
              <rect width="900" height="200" fill="url(#feat-grid)"/>
            </svg>
            <div className="absolute -right-20 -top-20 w-80 h-80 rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(44,170,160,0.2) 0%, transparent 65%)' }}/>

            {/* Feature grid */}
            <motion.div
              className="relative z-10 grid grid-cols-2 lg:grid-cols-4"
              variants={featContainer}
              initial="hidden"
              whileInView="visible"
              viewport={vp}
            >
              {FEATURES.map(({ num, icon, title, desc }, i) => (
                <motion.div
                  key={num}
                  variants={fadeUp}
                  className={`relative flex flex-col gap-4 p-6 sm:p-7 lg:p-8 ${i < FEATURES.length - 1 ? 'border-b lg:border-b-0 lg:border-r border-white/8' : ''} ${i === 1 ? 'border-r border-white/8 lg:border-r-white/8' : ''}`}
                >
                  {/* Large ghost number */}
                  <span
                    className="absolute top-4 right-4 font-display text-[52px] sm:text-[64px] leading-none select-none pointer-events-none"
                    style={{ color: 'rgba(44,170,160,0.10)' }}
                    aria-hidden="true"
                  >
                    {num}
                  </span>

                  {/* Icon */}
                  <div
                    className="w-11 h-11 rounded-2xl flex items-center justify-center text-white shrink-0"
                    style={{ background: 'rgba(44,170,160,0.22)' }}
                  >
                    {icon}
                  </div>

                  {/* Text */}
                  <div>
                    <p className="font-semibold text-[14.5px] text-white leading-snug mb-1">{title}</p>
                    <p className="text-[12.5px] text-white/50 leading-relaxed">{desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

          </div>
        </div>
      </section>

    </>
  );
}
