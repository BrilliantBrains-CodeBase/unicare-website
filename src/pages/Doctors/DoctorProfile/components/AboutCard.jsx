import { motion } from 'framer-motion';
import { fadeUp, vp } from '../../../../lib/animations';

export default function AboutCard({ doctor }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={vp}
      className="h-full rounded-[26px] p-6 sm:p-8 lg:p-10"
      style={{ background: 'var(--cream)' }}
    >
      <h2 className="font-display text-[24px] sm:text-[28px] font-bold" style={{ color: 'var(--navy)' }}>
        About
      </h2>
      <div className="h-px w-12 my-4" style={{ background: 'var(--navy)', opacity: 0.15 }} />
      <p className="text-[15px] sm:text-[16px] leading-[1.8]" style={{ color: 'var(--muted)' }}>
        {doctor.bio}
      </p>
    </motion.div>
  );
}
