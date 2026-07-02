import { motion } from 'framer-motion';
import { fadeUp, vp } from '../../../../lib/animations';

export default function QualificationCard({ doctor }) {
  const quals = doctor.qualifications.split(',').map(q => q.trim());

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={vp}
      className="h-full rounded-[26px] p-6 sm:p-8 lg:p-10"
      style={{ background: 'var(--teal-tint)' }}
    >
      <h2 className="font-display text-[24px] sm:text-[28px] font-bold" style={{ color: 'var(--navy)' }}>
        Qualification
      </h2>
      <div className="h-px w-12 my-4" style={{ background: 'var(--navy)', opacity: 0.15 }} />

      <p className="text-[11px] font-bold uppercase tracking-wider mb-2.5" style={{ color: 'var(--muted)' }}>
        Qualifications
      </p>
      <div className="flex flex-wrap gap-1.5 mb-7">
        {quals.map(q => (
          <span
            key={q}
            className="px-2.5 py-1 rounded-full text-[12px] font-medium bg-white border"
            style={{ borderColor: 'rgba(1,34,87,0.12)', color: 'var(--navy)' }}
          >
            {q}
          </span>
        ))}
      </div>

      <p className="text-[11px] font-bold uppercase tracking-wider mb-2.5" style={{ color: 'var(--muted)' }}>
        Work Days
      </p>
      <p className="text-[14px] leading-relaxed whitespace-pre-line" style={{ color: 'var(--navy)' }}>
        {doctor.opdTimings}
      </p>
    </motion.div>
  );
}
