import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import SpecialtiesBanner from './components/SpecialtiesBanner';
import FilterBar from '../../components/FilterBar';
import TestimonialsSection from './components/TestimonialsSection';
import InsuranceSection from './components/InsuranceSection';
import { ArrowRight } from '../../components/icons';
import { fadeUp, stagger, vp } from '../../lib/animations';
import {
  IconHeartHandshake,
  IconBabyCarriage,
  IconBone,
  IconStethoscope,
  IconScissors,
  IconDroplet,
  IconPill,
} from '@tabler/icons-react';

const cardStagger = stagger(0.06, 0.05);

const FILTERS = ['All', 'Women & Children', 'Surgery & Ortho', 'Medicine & Diabetes', 'Support Services'];

const SPECIALTIES = [
  {
    tag: 'General Medicine',
    category: 'Medicine & Diabetes',
    desc: 'Everyday illness, preventive health and chronic condition management.',
    to: '/specialties/general-medicine-endocrinology',
    Icon: IconStethoscope,
  },
  {
    tag: 'Gynecology & Obstetrics',
    category: 'Women & Children',
    desc: "Founder-led care for pregnancy, fertility and every stage of a woman's health journey.",
    to: '/specialties/maternity-womens-health',
    Icon: IconHeartHandshake,
  },
  {
    tag: 'Pediatrics and Neonatal Care',
    category: 'Women & Children',
    desc: 'Newborn care, vaccinations, growth monitoring and child illness care by MD pediatricians.',
    to: '/specialties/pediatrics',
    Icon: IconBabyCarriage,
  },
  {
    tag: 'General and Minimal Access Surgery',
    category: 'Surgery & Ortho',
    desc: 'Advanced laparoscopic and minimal access surgery, founded and led in-house.',
    to: '/specialties/general-minimal-access-surgery',
    Icon: IconScissors,
  },
  {
    tag: 'General Medicines',
    category: 'Medicine & Diabetes',
    desc: 'DM-qualified endocrinologist for diabetes, thyroid and hormonal disorders.',
    to: '/specialties/general-medicine-endocrinology',
    Icon: IconDroplet,
  },
  {
    tag: 'Orthopedics',
    category: 'Surgery & Ortho',
    desc: 'Bone, joint and sports injury care for active families. (Doctor onboarding in progress.)',
    to: '/specialties/orthopedics',
    Icon: IconBone,
  },
  {
    tag: 'Pharmacy, Diagnostics and Lab',
    category: 'Support Services',
    desc: 'In-house pharmacy and NABL-grade diagnostics under one roof.',
    to: '/specialties/pharmacy',
    Icon: IconPill,
  },
];

function SpecialtyCard({ s }) {
  return (
    <motion.div
      variants={fadeUp}
      className="h-full"
      whileHover={{ y: -4, boxShadow: '0 8px 24px rgba(0,0,0,0.10)' }}
      transition={{ type: 'spring', stiffness: 280, damping: 22 }}
    >
      <div className="h-full">
        <div className="rounded-[20px] bg-white px-8 py-10 flex flex-col h-full">
          {/* Icon */}
          <div className="mb-7">
            <s.Icon size={40} color="var(--teal)" stroke={1.5} />
          </div>

          {/* Name */}
          <h3 className="text-[18px] font-bold mb-4" style={{ color: 'var(--navy)' }}>
            <Link to={s.to} className="transition-colors hover:text-(--teal)">
              {s.tag}
            </Link>
          </h3>

          {/* Description */}
          <p className="text-[15px] leading-relaxed mb-5 flex-1" style={{ color: 'var(--muted)' }}>
            {s.desc}
          </p>

          {/* Read More */}
          <Link
            to={s.to}
            className="inline-flex items-center gap-1.5 text-[14.5px] font-medium transition-all hover:gap-3"
            style={{ color: 'var(--navy)' }}
          >
            <ArrowRight s={16} c="currentColor" />
            Learn More
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

export default function Specialties() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchQuery,  setSearchQuery]  = useState('');
  const [showAll,      setShowAll]      = useState(false);

  const q = searchQuery.toLowerCase();
  const filtered = SPECIALTIES
    .filter(s => activeFilter === 'All' || s.category === activeFilter)
    .filter(s => !q || s.tag.toLowerCase().includes(q) || s.desc.toLowerCase().includes(q));

  const visible = filtered.slice(0, showAll ? filtered.length : 4);
  const hasMore = filtered.length > 4 && !showAll;

  function handleFilter(f) {
    setActiveFilter(f);
    setSearchQuery('');
    setShowAll(false);
  }

  return (
    <>
      <SEO
        title="Medical Specialties at UniCare Hospitals Kokapet, Hyderabad"
        description="Maternity, pediatrics, laparoscopic surgery, endocrinology, orthopedics, general medicine, pharmacy and diagnostics at UniCare Hospitals, Kokapet."
        url="/specialties"
        keywords="multispecialty hospital Kokapet, hospital departments Kokapet Hyderabad"
      />

      <SpecialtiesBanner />

      {/* Services grid section — box treatment matching home SpecialtiesSection */}
      <section className="py-6 2xl:py-10">
        <div className="mx-4 sm:mx-5 2xl:mx-8 rounded-[20px] 2xl:rounded-[28px] py-14 sm:py-16 2xl:py-20 px-4 sm:px-6 lg:px-10" style={{ background: '#EAEDF0' }}>
        <div className="max-w-330 mx-auto">

          {/* Section heading — matches home SpecialtiesSection */}
          <motion.div
            className="max-w-158.75 mx-auto text-center mb-12"
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={vp}
          >
            <span className="block text-[12px] font-bold tracking-[1.2px] uppercase mb-3" style={{ color: 'var(--teal)' }}>
              Our Specialties
            </span>
            <h2 className="h2-two-lines font-normal" style={{ color: 'var(--navy)' }}>
              One Hospital For Every Chapter{' '}
              <strong className="font-bold">Of Your Family's Health.</strong>
            </h2>
          </motion.div>

          {/* Filter bar */}
          <div className="mb-10">
            <FilterBar
              searchQuery={searchQuery}
              onSearch={(v) => { setSearchQuery(v); setShowAll(false); }}
              searchPlaceholder="Search specialties…"
              filters={FILTERS}
              activeFilter={activeFilter}
              onFilter={handleFilter}
            />
          </div>

          {/* Cards grid — key forces re-mount on filter/search change */}
          <motion.div
            key={activeFilter + searchQuery}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={cardStagger}
            initial="hidden"
            animate="visible"
          >
            {visible.map(s => (
              <SpecialtyCard key={s.tag} s={s} />
            ))}
          </motion.div>

          {/* Load More */}
          {hasMore && (
            <div className="flex justify-center mt-10">
              <button
                onClick={() => setShowAll(true)}
                className="inline-flex items-center gap-3 rounded-full text-white text-[14px] font-semibold px-8 py-3.5 cursor-pointer transition-colors duration-200"
                style={{ background: 'var(--teal)' }}
                onMouseEnter={e => e.currentTarget.style.background = 'var(--teal-2)'}
                onMouseLeave={e => e.currentTarget.style.background = 'var(--teal)'}
              >
                <span className="w-7 h-7 rounded-full flex items-center justify-center shrink-0" style={{ background: 'rgba(255,255,255,0.2)' }}>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 5v14M5 12l7 7 7-7"/>
                  </svg>
                </span>
                Load More
              </button>
            </div>
          )}

        </div>
        </div>
      </section>

      <TestimonialsSection />

      <InsuranceSection />
    </>
  );
}
