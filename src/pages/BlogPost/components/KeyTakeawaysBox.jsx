import { motion } from 'framer-motion';
import { slideLeft, vp } from '../../../lib/animations';

export default function KeyTakeawaysBox({ takeaways }) {
  if (!takeaways || takeaways.length === 0) return null;

  return (
    <motion.aside
      variants={slideLeft}
      initial="hidden"
      whileInView="visible"
      viewport={vp}
      className="rounded-2xl p-6 mb-8"
      style={{ background: 'var(--teal-soft)', border: '1px solid rgba(44,170,160,0.2)' }}
      aria-label="Key takeaways from this article"
    >
      <p className="text-[11px] font-semibold tracking-[0.12em] uppercase text-(--teal) mb-4">
        Key Takeaways
      </p>
      <ol className="flex flex-col gap-3">
        {takeaways.map((item, i) => (
          <li key={i} className="flex gap-3 text-[14px] text-(--navy) leading-relaxed">
            <span
              className="shrink-0 w-5 h-5 rounded-full text-[11px] font-bold text-white flex items-center justify-center mt-0.5"
              style={{ background: 'var(--teal)' }}
              aria-hidden="true"
            >
              {i + 1}
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ol>
    </motion.aside>
  );
}
