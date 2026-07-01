import { motion } from 'framer-motion';
import { IconCircleCheck } from '@tabler/icons-react';
import { fadeUp, stagger, vp } from '../../../lib/animations';

const REASONS = [
  'Every report is explained in person by a doctor, with a clear action plan.',
  'All tests are done in-house in a single morning visit.',
  'Abnormal findings route directly to the right specialist in the same building.',
];

export default function WhyUnicare() {
  return (
    <section className="bg-white pb-16 sm:pb-20 px-4 sm:px-6 lg:px-10">
      <div className="max-w-330 mx-auto">

        <motion.h2
          className="font-display leading-[1.1] text-center mb-10"
          style={{ color: 'var(--navy)', fontSize: 'clamp(28px, 4vw, 44px)' }}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={vp}
        >
          <span className="font-normal">Why a Unicare health check </span>
          <span className="font-bold">is different.</span>
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-5"
          variants={stagger(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={vp}
        >
          {REASONS.map((reason, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="rounded-2xl p-7 flex flex-col gap-4"
              style={{ background: 'var(--teal-soft)' }}
            >
              <IconCircleCheck size={28} color="var(--teal)" stroke={1.6} />
              <p
                className="text-[15px] leading-[1.75]"
                style={{ color: 'var(--muted)' }}
              >
                {reason}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
