import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import PageBanner from '../../components/PageBanner';
import FilterBar from '../../components/FilterBar';
import { Arrow, Phone, WhatsAppIc, CalendarCheck } from '../../components/icons';
import { scaleIn, fadeUp, stagger, vp } from '../../lib/animations';

const PHONE  = '+919090546363';
const WA_URL = `https://wa.me/919090546363?text=${encodeURIComponent('Hello, I would like to know more about the specialties at UniCare Hospitals.')}`;

const cardStagger = stagger(0.07, 0.1);
const ctaStagger  = stagger(0.1, 0);

const FILTERS = ['All', 'Women & Children', 'Surgery & Ortho', 'Medicine & Diabetes', 'Support Services'];

const SPECIALTIES = [
  {
    tag: 'Gynecology & OB',
    category: 'Women & Children',
    desc: 'Pregnancy care, safe deliveries, fertility support and gynecological treatment.',
    to: '/specialties/maternity-womens-health',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <circle cx="12" cy="6" r="2.5"/>
        <path d="M6 22 C6 22 6 17 8 15 C10 13 12 13 12 13 C12 13 14 13 16 15 C18 17 18 22 18 22"/>
        <ellipse cx="12" cy="18" rx="4" ry="4"/>
        <path d="M10 18 L12 16.5 L14 18"/>
      </svg>
    ),
    bullets: [
      'Antenatal care and pregnancy monitoring, trimester by trimester',
      'Normal and caesarean deliveries with experienced anesthesia and pediatric support',
      'Fertility evaluation and reproductive medicine consultations',
    ],
  },
  {
    tag: 'Paediatrics',
    category: 'Women & Children',
    desc: 'Newborn and child care by two MD paediatricians.',
    to: '/specialties/pediatrics',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <circle cx="12" cy="5.5" r="2.5"/>
        <path d="M8 22 L8 15 Q8 11 12 11 Q16 11 16 15 L16 22"/>
        <path d="M8 18 L16 18"/>
        <path d="M5 13 L8 14"/>
        <path d="M19 13 L16 14"/>
      </svg>
    ),
    bullets: [
      'Newborn care and neonatal support from birth',
      'Complete vaccination and immunization schedules',
      'Growth, development and nutrition monitoring',
    ],
  },
  {
    tag: 'Orthopaedics',
    category: 'Surgery & Ortho',
    desc: 'Bone, joint, spine and sports injury care.',
    to: '/specialties/orthopedics',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M6 4 C6 4 4 5 4 7 C4 9 6 9 6 9 L9 12 L6 15 C6 15 4 15 4 17 C4 19 6 20 6 20"/>
        <path d="M18 4 C18 4 20 5 20 7 C20 9 18 9 18 9 L15 12 L18 15 C18 15 20 15 20 17 C20 19 18 20 18 20"/>
        <path d="M9 12 L15 12"/>
        <circle cx="12" cy="12" r="1.5" fill="currentColor" stroke="none"/>
      </svg>
    ),
    bullets: [
      'Fracture care, casting and trauma management',
      'Knee, hip, shoulder and back pain evaluation and treatment',
      'Sports injury assessment and recovery planning',
    ],
  },
  {
    tag: 'General Medicine',
    category: 'Medicine & Diabetes',
    desc: 'Fever, infections, lifestyle disease and preventive health for adults.',
    to: '/specialties/general-medicine-endocrinology',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M5 6 C5 4 7 3 9 4 L9 10 C9 12 7 13 5 12 C3 11 3 9 5 6Z"/>
        <path d="M9 7 Q14 6 17 9"/>
        <path d="M9 9 Q13 9 16 12"/>
        <circle cx="17" cy="13" r="3"/>
        <path d="M17 11 L17 15M15 13 L19 13"/>
      </svg>
    ),
    bullets: [
      'Fever, infections and everyday adult illness',
      'Hypertension and cholesterol management',
      'Preventive health consultations and annual reviews',
    ],
  },
  {
    tag: 'General Surgery',
    category: 'Surgery & Ortho',
    desc: 'Laparoscopic and minimal access procedures.',
    to: '/specialties/general-minimal-access-surgery',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M4 4 L16 16"/>
        <path d="M4 4 C4 4 2 4.5 2 6 C2 7.5 4 8 4 8 L8 8"/>
        <path d="M14 14 L20 20"/>
        <path d="M20 18 L22 16 L18 14"/>
        <circle cx="11" cy="11" r="3"/>
        <path d="M11 9 L11 13M9 11 L13 11"/>
      </svg>
    ),
    bullets: [
      'Laparoscopic gallbladder removal (cholecystectomy)',
      'Laparoscopic and open hernia repair',
      'Appendix surgery (appendicectomy)',
    ],
  },
  {
    tag: 'Endocrinology & Diabetes',
    category: 'Medicine & Diabetes',
    desc: 'Diabetes, thyroid and hormonal care.',
    to: '/specialties/general-medicine-endocrinology',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M12 3 C9 3 6 6 6 10 C6 15 12 21 12 21 C12 21 18 15 18 10 C18 6 15 3 12 3Z"/>
        <path d="M9 10 L11 12 L13 8 L15 12"/>
        <path d="M8 7 C10 6 14 6 16 7"/>
      </svg>
    ),
    bullets: [
      'Type 1 and Type 2 diabetes diagnosis, treatment and long-term management',
      'Thyroid disorders: hypothyroidism, hyperthyroidism, thyroid nodules',
      'Obesity and metabolic syndrome management',
    ],
  },
  {
    tag: 'Pharmacy',
    category: 'Support Services',
    desc: 'Round-the-clock prescribed medicines on-site.',
    to: '/specialties/pharmacy',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <rect x="4" y="3" width="16" height="18" rx="3"/>
        <path d="M12 8 L12 16"/>
        <path d="M8 12 L16 12"/>
        <path d="M8 7 L16 7"/>
      </svg>
    ),
    bullets: [
      "Genuine, quality-assured medicines aligned with our doctors’ prescriptions",
      'Qualified pharmacists who double-check every prescription',
      'Pediatric formulations, maternity supplements and chronic care medicines stocked',
    ],
  },
  {
    tag: 'Diagnostics & Lab',
    category: 'Support Services',
    desc: 'Blood tests, health panels and imaging with same-day reports.',
    to: '/specialties/diagnostics-lab',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M9 3 L9 12 L5 18 C4 20 5.5 22 8 22 L16 22 C18.5 22 20 20 19 18 L15 12 L15 3"/>
        <path d="M7 15 L17 15"/>
        <path d="M7 7 L17 7"/>
        <path d="M10 10 L14 10"/>
      </svg>
    ),
    bullets: [
      'Complete blood counts, fever panels and infection workups',
      'Diabetes monitoring: fasting glucose, HbA1c, lipid profiles',
      'Thyroid and hormonal panels supporting our endocrinology service',
    ],
  },
];

function CheckIcon() {
  return (
    <svg viewBox="0 0 12 12" fill="none" className="w-3 h-3 shrink-0 mt-0.5" style={{ color: '#2CAAA0' }}>
      <circle cx="6" cy="6" r="5.5" stroke="currentColor" strokeOpacity=".35"/>
      <path d="M3.5 6 L5 7.5 L8.5 4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function SpecialtyCard({ s }) {
  return (
    <motion.div variants={scaleIn} className="h-full">
      <div
        className="relative rounded-2xl overflow-hidden flex flex-col h-full group hover-lift"
        style={{ background: 'var(--navy)' }}
      >
        {/* Subtle radial glow decoration */}
        <div
          className="absolute -top-10 -right-10 w-48 h-48 rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(44,170,160,0.12) 0%, transparent 65%)' }}
        />
        {/* Faint dot grid */}
        <svg
          viewBox="0 0 200 200"
          className="absolute inset-0 w-full h-full pointer-events-none opacity-[.04]"
          aria-hidden="true"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <pattern id={`dots-${s.tag.replace(/\s/g,'-')}`} width="16" height="16" patternUnits="userSpaceOnUse">
              <circle cx="1" cy="1" r="1" fill="#2CAAA0"/>
            </pattern>
          </defs>
          <rect width="200" height="200" fill={`url(#dots-${s.tag.replace(/\s/g,'-')})`}/>
        </svg>

        {/* Content */}
        <div className="relative z-10 p-5 sm:p-6 flex flex-col flex-1 gap-4">

          {/* Icon */}
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 text-white"
            style={{ background: 'rgba(44,170,160,0.18)', color: '#2CAAA0' }}
          >
            {s.icon}
          </div>

          {/* Tag + description */}
          <div>
            <h3 className="font-display text-[20px] sm:text-[22px] text-white leading-snug mb-2">
              {s.tag}
            </h3>
            <p className="text-[14px] sm:text-[14.5px] leading-relaxed" style={{ color: 'rgba(255,255,255,0.52)' }}>
              {s.desc}
            </p>
          </div>

          {/* Divider */}
          <div className="border-t" style={{ borderColor: 'rgba(255,255,255,0.08)' }}/>

          {/* Bullets */}
          <ul className="flex flex-col gap-2.5 flex-1">
            {s.bullets.map(b => (
              <li key={b} className="flex items-start gap-2 text-[13.5px] leading-snug" style={{ color: 'rgba(255,255,255,0.65)' }}>
                <CheckIcon/>
                <span>{b}</span>
              </li>
            ))}
          </ul>

          {/* Read More */}
          <Link
            to={s.to}
            className="inline-flex items-center gap-1.5 self-start px-4 py-2 rounded-full text-[13px] font-medium text-white transition-all duration-200"
            style={{ border: '1px solid rgba(255,255,255,0.22)' }}
            onMouseEnter={e => { e.currentTarget.style.background = '#2CAAA0'; e.currentTarget.style.borderColor = '#2CAAA0'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.22)'; }}
          >
            Read More <Arrow s={11} c="currentColor"/>
          </Link>

        </div>
      </div>
    </motion.div>
  );
}

export default function Specialties() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchQuery,  setSearchQuery]  = useState('');

  const q = searchQuery.toLowerCase();
  const filtered = SPECIALTIES
    .filter(s => activeFilter === 'All' || s.category === activeFilter)
    .filter(s => !q || s.tag.toLowerCase().includes(q) || s.desc.toLowerCase().includes(q));

  function handleFilter(f) {
    setActiveFilter(f);
    setSearchQuery('');
  }

  return (
    <>
      <SEO
        title="Medical Specialties at Unicare Hospitals Kokapet, Hyderabad"
        description="Maternity, pediatrics, laparoscopic surgery, endocrinology, orthopedics, general medicine, pharmacy and diagnostics at Unicare Hospitals, Kokapet."
        url="/specialties"
        keywords="multispecialty hospital Kokapet, hospital departments Kokapet Hyderabad"
      />

      <PageBanner
        chip="Our Specialties"
        title="Specialist care for every member of your family."
        subtitle="Eight departments. One neighbourhood hospital. Closer to Kokapet, Narsingi and the Financial District than you think."
      />

      {/* Filter bar */}
      <section className="px-4 sm:px-6 lg:px-10 pt-8 pb-0">
        <div className="max-w-330 mx-auto">
          <FilterBar
            searchQuery={searchQuery}
            onSearch={setSearchQuery}
            searchPlaceholder="Search specialties…"
            filters={FILTERS}
            activeFilter={activeFilter}
            onFilter={handleFilter}
          />
        </div>
      </section>

      {/* Specialty cards grid */}
      <section className="px-4 sm:px-6 lg:px-10 pt-10 sm:pt-12 pb-12 sm:pb-16 lg:pb-20">
        <div className="max-w-330 mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {filtered.map(s => (
              <SpecialtyCard key={s.tag} s={s} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA band */}
      <section className="px-4 sm:px-6 lg:px-10 pb-16 sm:pb-20 lg:pb-24">
        <div className="max-w-330 mx-auto">
          <motion.div
            className="rounded-3xl px-6 sm:px-10 py-10 sm:py-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
            style={{ background: 'var(--teal-soft)' }}
            variants={ctaStagger}
            initial="hidden"
            whileInView="visible"
            viewport={vp}
          >
            <motion.p
              variants={fadeUp}
              className="font-display text-[20px] sm:text-[24px] lg:text-[28px] text-(--navy) leading-snug max-w-lg"
            >
              Not sure which specialist you need? Call{' '}
              <a href={`tel:${PHONE}`} className="text-(--teal) hover:underline whitespace-nowrap">
                +91 90905 46363
              </a>{' '}
              and our team will guide you.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-3 shrink-0">
              <a href={`tel:${PHONE}`} className="btn-dark gap-2!">
                <Phone s={14} c="#fff" />
                <span>Call Now</span>
              </a>
              <a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-dark gap-2!"
                style={{ background: '#25D366' }}
              >
                <WhatsAppIc s={16} c="#fff" />
                <span>WhatsApp</span>
              </a>
              <Link to="/book-an-appointment" className="btn-outline gap-2!">
                <CalendarCheck s={14} />
                <span>Book Appointment</span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
