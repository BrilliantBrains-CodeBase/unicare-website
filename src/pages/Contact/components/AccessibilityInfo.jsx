import { motion } from 'framer-motion';
import { fadeUp, stagger, vp } from '../../../lib/animations';

const items = [
  'Free parking available',
  'Wheelchair accessible',
  'Elevator access',
  'Dedicated emergency entry point',
];

const container = stagger(0.07, 0.1);

export default function AccessibilityInfo() {
  return (
    <section className="px-4 sm:px-6 lg:px-10 pb-10 sm:pb-14">
      <div className="max-w-330 mx-auto">
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-4 gap-4"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={vp}
        >
          {items.map((label) => (
            <motion.div
              key={label}
              variants={fadeUp}
              className="bg-white border border-(--line) rounded-2xl p-4 flex items-center gap-3"
            >
              <span
                className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-[13px] font-bold"
                style={{ background: 'var(--teal-soft)', color: 'var(--teal)' }}
                aria-hidden="true"
              >
                ✓
              </span>
              <span className="text-[13px] text-(--navy) font-medium leading-snug">{label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
