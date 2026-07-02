import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from '../../../../components/icons';
import { fadeUp, vp } from '../../../../lib/animations';

function initialsOf(name) {
  return name
    .replace(/^Dr\.?\s*/i, '')
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map(w => w[0])
    .join('')
    .toUpperCase();
}

export default function TestimonialSection({ testimonials }) {
  const [idx, setIdx] = useState(0);
  const current = testimonials[idx];

  const prev = () => setIdx(i => (i - 1 + testimonials.length) % testimonials.length);
  const next = () => setIdx(i => (i + 1) % testimonials.length);

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={vp}
      className="rounded-[26px] p-6 sm:p-8 lg:p-10 relative overflow-hidden"
      style={{ background: '#D6D2F1' }}
    >
      <span
        className="absolute top-4 left-6 font-display leading-none select-none"
        style={{ fontSize: '96px', color: 'var(--navy)', opacity: 0.12 }}
        aria-hidden="true"
      >
        &#10077;
      </span>

      <blockquote
        className="relative z-10 text-[18px] sm:text-[20px] leading-relaxed font-medium"
        style={{ color: 'var(--navy)' }}
      >
        {current.quote}
      </blockquote>

      <div className="relative z-10 flex items-center justify-between mt-8 pt-6 border-t border-white/50 flex-wrap gap-4">
        <div className="flex items-center gap-3">
          {current.avatar ? (
            <img src={current.avatar} alt={current.name} className="w-12 h-12 rounded-full object-cover shrink-0" />
          ) : (
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-white shrink-0"
              style={{ background: 'var(--navy)' }}
            >
              {initialsOf(current.name)}
            </div>
          )}
          <div>
            <p className="text-[14px] font-bold" style={{ color: 'var(--navy)' }}>{current.name}</p>
            <p className="text-[12.5px]" style={{ color: 'var(--muted)' }}>{current.role}</p>
          </div>
        </div>

        {testimonials.length > 1 && (
          <div className="flex gap-2">
            <button
              onClick={prev}
              aria-label="Previous testimonial"
              className="w-11 h-11 rounded-full bg-white flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity"
            >
              <ArrowLeft s={15} c="var(--navy)" />
            </button>
            <button
              onClick={next}
              aria-label="Next testimonial"
              className="w-11 h-11 rounded-full flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity"
              style={{ background: 'var(--navy)' }}
            >
              <ArrowRight s={15} c="#fff" />
            </button>
          </div>
        )}
      </div>
    </motion.div>
  );
}
