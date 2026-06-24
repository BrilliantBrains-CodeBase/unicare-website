import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { fadeUp, stagger, vp } from '../../../lib/animations';
import { ArrowRight } from '../../../components/icons';
import {
  IconHeartHandshake,
  IconBabyCarriage,
  IconScissors,
  IconDroplet,
} from '@tabler/icons-react';

import maternityImg from '../../../assets/maternity.png';
import pediatricImg from '../../../assets/pediatric.png';
import surgeryImg   from '../../../assets/surgery-ot.png';
import diagImg      from '../../../assets/diagnostics.png';
import polygon1     from '../../../assets/polygon1.png';
import polygon2     from '../../../assets/polygon2.png';

const specialties = [
  {
    img: maternityImg, poly: polygon1, polyPos: 'right', Icon: IconHeartHandshake,
    name: 'Gynecology & OB',
    desc: 'Pregnancy care, safe deliveries, fertility support and gynecological treatment led by founder Dr. A.N. Varuna Vyas.',
    to: '/specialties/maternity-womens-health',
  },
  {
    img: pediatricImg, poly: polygon1, polyPos: 'right', Icon: IconBabyCarriage,
    name: 'Pediatrics & Neonatal Care',
    desc: 'Newborn and child care by two MD pediatricians, Dr. Mareddy Veena and Dr. M. Nitin Rao.',
    to: '/specialties/pediatrics',
  },
  {
    img: surgeryImg, poly: polygon2, polyPos: 'left', Icon: IconScissors,
    name: 'General & Minimal Access Surgery',
    desc: 'Laparoscopic and minimal access procedures led by founder Dr. Bhargava Vyas FIAGES, FMAS.',
    to: '/specialties/general-minimal-access-surgery',
  },
  {
    img: diagImg, poly: polygon2, polyPos: 'left', Icon: IconDroplet,
    name: 'Endocrinology & Diabetes',
    desc: 'Diabetes, thyroid and hormonal care with DM endocrinologist Dr. Deepak Thiriveedi, SCE (UK).',
    to: '/specialties/general-medicine-endocrinology',
  },
];

const rowStagger = stagger(0.08, 0.05);

function ServiceImage({ svc }) {
  return (
    <div className="relative mb-9">
      <Link to={svc.to}>
        <img
          src={svc.img}
          alt={`${svc.name} at UniCare Hospitals Kokapet`}
          className="w-full rounded-[20px] object-cover aspect-4/3"
          loading="lazy"
        />
      </Link>
      <div
        className={`absolute top-1/2 -translate-y-1/2 z-10 ${
          svc.polyPos === 'right' ? '-right-5' : '-left-5'
        }`}
        aria-hidden="true"
      >
        <img src={svc.poly} alt="" />
      </div>
    </div>
  );
}

function ServiceCard({ svc }) {
  return (
    <div className="relative mb-9 group">
      {/* Offset shadow that appears on hover */}
      <div className="absolute inset-0 rounded-[20px] translate-x-[10px] translate-y-[10px] -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
           style={{ background: '#D6D2F1' }} />
      <div className="relative z-10 rounded-[20px] bg-white px-8 py-10 2xl:px-12 2xl:py-14 transition-all duration-500">
        <div className="mb-7">
          <svc.Icon size={40} color="var(--teal)" stroke={1.5} />
        </div>
        <h3 className="text-[18px] 2xl:text-[22px] font-bold mb-4" style={{ color: 'var(--navy)' }}>
          <Link to={svc.to} className="hover:text-[var(--teal)] transition-colors">
            {svc.name}
          </Link>
        </h3>
        <p className="text-[15px] 2xl:text-[17px] leading-relaxed mb-5" style={{ color: 'var(--muted)' }}>
          {svc.desc}
        </p>
        <Link
          to={svc.to}
          className="inline-flex items-center gap-1.5 text-[14.5px] font-medium transition-colors hover:gap-3"
          style={{ color: 'var(--navy)' }}
        >
          <ArrowRight s={16} c="currentColor" />
          Learn More
        </Link>
      </div>
    </div>
  );
}

export default function SpecialtiesSection() {
  const row1 = specialties.slice(0, 2); // img → card | img → card
  const row2 = specialties.slice(2, 4); // card → img | card → img

  return (
    <section className="py-6 2xl:py-10">
      <div className="mx-5 2xl:mx-8 rounded-[20px] 2xl:rounded-[28px] py-24 2xl:py-28" style={{ background: '#EAEDF0' }}>
        <div className="max-w-330 2xl:max-w-400 mx-auto px-6 2xl:px-20">

          {/* Section heading */}
          <motion.div
            className="max-w-[635px] mx-auto text-center mb-12"
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={vp}
          >
            <span className="block text-[12px] font-bold tracking-[1.2px] uppercase mb-3"
                  style={{ color: 'var(--teal)' }}>
              Our Specialties
            </span>
            <h2 className="h2-two-lines font-bold" style={{ color: 'var(--navy)' }}>
              One hospital for every chapter{' '}
              <strong className="font-extrabold">of your family's health.</strong>
            </h2>
          </motion.div>

          {/* Row 1: img → card | img → card */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 items-center"
            variants={rowStagger} initial="hidden" whileInView="visible" viewport={vp}
          >
            {row1.map((svc) => (
              <Fragment key={svc.name}>
                <motion.div variants={fadeUp}>
                  <ServiceImage svc={svc} />
                </motion.div>
                <motion.div variants={fadeUp}>
                  <ServiceCard svc={svc} />
                </motion.div>
              </Fragment>
            ))}
          </motion.div>

          {/* Row 2: card → img | card → img */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 items-center"
            variants={rowStagger} initial="hidden" whileInView="visible" viewport={vp}
          >
            {row2.map((svc) => (
              <Fragment key={svc.name}>
                <motion.div variants={fadeUp}>
                  <ServiceCard svc={svc} />
                </motion.div>
                <motion.div variants={fadeUp}>
                  <ServiceImage svc={svc} />
                </motion.div>
              </Fragment>
            ))}
          </motion.div>

          {/* Bottom CTA */}
          <motion.div
            className="text-center mt-8"
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={vp}
          >
            <Link
              to="/specialties"
              className="inline-flex items-center gap-3 rounded-full pl-14 pr-6 py-3 text-[15px] font-medium text-white relative transition-colors hover:opacity-90"
              style={{ background: 'var(--teal)' }}
            >
              <span className="absolute left-5 top-1/2 -translate-y-1/2">
                <ArrowRight s={22} c="#fff" />
              </span>
              Explore All Specialties
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
