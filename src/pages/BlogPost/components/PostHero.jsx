import { motion } from 'framer-motion';
import { fadeUp, stagger } from '../../../lib/animations';

const CATEGORY_GRADIENTS = {
  'Gynecology & Obstetrics':       'linear-gradient(135deg, #9B1B6E 0%, #D65EA0 100%)',
  'Child Health':           'linear-gradient(135deg, #1B3F9B 0%, #5C7AE8 100%)',
  'Diabetes and Hormones':  'linear-gradient(135deg, #9B5B1B 0%, #E8975C 100%)',
  'Surgery':                'linear-gradient(135deg, #1B6B3F 0%, #3BAA6B 100%)',
  'General Health':         'linear-gradient(135deg, #012257 0%, #2CAAA0 100%)',
};

const heroStagger = stagger(0.1, 0);

function formatDate(iso) {
  return new Date(iso).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' });
}

export default function PostHero({ post, doctor }) {
  const gradient = CATEGORY_GRADIENTS[post.category] || CATEGORY_GRADIENTS['General Health'];

  return (
    <div className="relative -mt-16 lg:-mt-35 overflow-hidden min-h-[380px] lg:min-h-[460px] flex items-end">
      {/* Background */}
      {post.coverImage
        ? <>
            <img
              src={post.coverImage}
              alt={post.title}
              className="absolute inset-0 w-full h-full object-cover"
              fetchpriority="high"
              decoding="async"
            />
            <div
              className="absolute inset-0"
              style={{ background: 'linear-gradient(180deg, rgba(1,34,87,.35) 0%, rgba(1,34,87,.80) 100%)' }}
            />
          </>
        : <>
            <div className="absolute inset-0" style={{ background: gradient }} />
            <div
              className="absolute inset-0"
              style={{ background: 'linear-gradient(180deg, rgba(0,0,0,0) 30%, rgba(0,0,0,0.32) 100%)' }}
            />
          </>
      }

      {/* Content */}
      <div className="relative z-10 w-full max-w-[760px] mx-auto px-4 sm:px-6 lg:px-10 pt-36 lg:pt-44 pb-12 lg:pb-16">
        <motion.div variants={heroStagger} initial="hidden" animate="visible">
          <motion.span
            variants={fadeUp}
            className="pill-ghost text-[11.5px] inline-flex items-center gap-1.5 mb-5 px-3 py-1.5"
          >
            {post.category}
          </motion.span>

          <motion.h1
            variants={fadeUp}
            className="font-display text-white text-[26px] sm:text-[34px] lg:text-[42px] leading-[1.18] tracking-[-0.02em] mb-5"
          >
            {post.title}
          </motion.h1>

          <motion.div
            variants={fadeUp}
            className="flex flex-wrap items-center gap-x-3 gap-y-1 text-white/75 text-[13px]"
          >
            {doctor && <span className="font-medium text-white/95">{doctor.name}</span>}
            {doctor && <span aria-hidden="true">·</span>}
            <time dateTime={post.publishedDate}>{formatDate(post.publishedDate)}</time>
            <span aria-hidden="true">·</span>
            <span>{post.readTime}</span>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
