import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { scaleIn } from '../../../lib/animations';

const CATEGORY_GRADIENTS = {
  'Gynecology & Obstetrics':       'linear-gradient(135deg, #9B1B6E 0%, #D65EA0 100%)',
  'Child Health':           'linear-gradient(135deg, #1B3F9B 0%, #5C7AE8 100%)',
  'Diabetes and Hormones':  'linear-gradient(135deg, #9B5B1B 0%, #E8975C 100%)',
  'Surgery':                'linear-gradient(135deg, #1B6B3F 0%, #3BAA6B 100%)',
  'General Health':         'linear-gradient(135deg, #012257 0%, #2CAAA0 100%)',
};

const CATEGORY_CHIP = {
  'Gynecology & Obstetrics':       { bg: 'rgba(155,27,110,0.15)', text: '#7A0F55' },
  'Child Health':           { bg: 'rgba(27,63,155,0.12)', text: '#1B3F9B' },
  'Diabetes and Hormones':  { bg: 'rgba(155,91,27,0.12)', text: '#7A4510' },
  'Surgery':                { bg: 'rgba(27,107,63,0.12)', text: '#145231' },
  'General Health':         { bg: 'var(--teal-soft)',     text: 'var(--navy)' },
};

export default function PostCard({ post, doctor }) {
  const gradient = CATEGORY_GRADIENTS[post.category] || CATEGORY_GRADIENTS['General Health'];
  const chip     = CATEGORY_CHIP[post.category]     || CATEGORY_CHIP['General Health'];

  return (
    <motion.div variants={scaleIn} className="h-full">
      <Link
        to={`/blog/${post.slug}`}
        className="flex flex-col h-full rounded-2xl overflow-hidden bg-white border border-(--line) hover-lift group"
        style={{ boxShadow: '0 2px 12px rgba(1,34,87,0.05)' }}
      >
        {/* Cover image / gradient placeholder */}
        <div className="aspect-[16/9] relative overflow-hidden shrink-0">
          {post.coverImage
            ? <img
                src={post.coverImage}
                alt={post.title}
                className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                loading="lazy"
                decoding="async"
              />
            : <div
                className="w-full h-full group-hover:scale-[1.03] transition-transform duration-500"
                style={{ background: gradient }}
                aria-hidden="true"
              />
          }
          <div className="absolute top-3 left-3">
            <span
              className="text-[11px] font-medium px-2.5 py-1 rounded-full whitespace-nowrap"
              style={{ background: 'rgba(255,255,255,0.22)', color: '#fff', border: '1px solid rgba(255,255,255,0.3)', backdropFilter: 'blur(6px)' }}
            >
              {post.category}
            </span>
          </div>
        </div>

        {/* Body */}
        <div className="flex flex-col flex-1 p-5">
          <span
            className="text-[11px] font-semibold tracking-[0.1em] uppercase mb-2 w-fit px-2 py-0.5 rounded"
            style={{ background: chip.bg, color: chip.text }}
          >
            {post.category}
          </span>

          <h3 className="font-display text-[16px] sm:text-[17px] text-(--navy) leading-[1.35] line-clamp-2 mb-2 flex-1">
            {post.title}
          </h3>

          <p className="text-[13px] text-(--muted) leading-relaxed line-clamp-2 mb-4">
            {post.excerpt}
          </p>

          <div className="flex items-center justify-between text-[12px] text-(--muted) border-t border-(--line) pt-3 mt-auto">
            <span className="font-medium truncate max-w-[55%]">
              {doctor ? doctor.name : post.authorSlug}
            </span>
            <span>{post.readTime}</span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
