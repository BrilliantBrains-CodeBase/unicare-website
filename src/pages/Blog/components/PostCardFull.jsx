import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight } from '../../../components/icons';
import { fadeUp } from '../../../lib/animations';

const CATEGORY_GRADIENTS = {
  'Gynecology & OB':       'linear-gradient(135deg, #9B1B6E 0%, #D65EA0 100%)',
  'Child Health':           'linear-gradient(135deg, #1B3F9B 0%, #5C7AE8 100%)',
  'Diabetes and Hormones':  'linear-gradient(135deg, #9B5B1B 0%, #E8975C 100%)',
  'Surgery':                'linear-gradient(135deg, #1B6B3F 0%, #3BAA6B 100%)',
  'General Health':         'linear-gradient(135deg, #012257 0%, #2CAAA0 100%)',
};

const CATEGORY_CHIP = {
  'Gynecology & OB':       { bg: 'rgba(155,27,110,0.15)', text: '#7A0F55' },
  'Child Health':           { bg: 'rgba(27,63,155,0.12)',  text: '#1B3F9B' },
  'Diabetes and Hormones':  { bg: 'rgba(155,91,27,0.12)',  text: '#7A4510' },
  'Surgery':                { bg: 'rgba(27,107,63,0.12)',  text: '#145231' },
  'General Health':         { bg: 'var(--teal-soft)',      text: 'var(--navy)' },
};

function formatDate(iso) {
  return new Date(iso).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' });
}

function getInitials(name) {
  return name
    .replace('Dr. ', '')
    .split(' ')
    .slice(0, 2)
    .map(w => w[0])
    .join('');
}

export default function PostCardFull({ post, doctor, isLast }) {
  const gradient = CATEGORY_GRADIENTS[post.category] || CATEGORY_GRADIENTS['General Health'];
  const chip     = CATEGORY_CHIP[post.category]     || CATEGORY_CHIP['General Health'];

  return (
    <motion.article
      variants={fadeUp}
      className={`pb-8 ${isLast ? '' : 'mb-8 border-b border-(--line)'}`}
    >
      <Link to={`/blog/${post.slug}`} className="group block">
        {/* Cover image / gradient */}
        <div className="aspect-[16/9] rounded-2xl overflow-hidden mb-5 relative">
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
          {/* Category badge — bottom-left overlay */}
          <div className="absolute bottom-3 left-3">
            <span
              className="text-[11px] font-medium px-2.5 py-1 rounded-full whitespace-nowrap"
              style={{ background: 'rgba(255,255,255,0.22)', color: '#fff', border: '1px solid rgba(255,255,255,0.3)', backdropFilter: 'blur(6px)' }}
            >
              {post.category}
            </span>
          </div>
        </div>

        {/* Category chip + date */}
        <div className="flex items-center gap-3 mb-3">
          <span
            className="text-[11px] font-semibold tracking-[0.08em] uppercase px-2.5 py-1 rounded-lg"
            style={{ background: chip.bg, color: chip.text }}
          >
            {post.category}
          </span>
          <span className="text-[12px]" style={{ color: 'var(--muted)' }}>
            <time dateTime={post.publishedDate}>{formatDate(post.publishedDate)}</time>
            {' · '}
            {post.readTime}
          </span>
        </div>

        {/* Title */}
        <h2
          className="font-display text-[20px] sm:text-[23px] leading-[1.3] line-clamp-2 mb-3 transition-colors duration-200 group-hover:text-(--teal)"
          style={{ color: 'var(--navy)' }}
        >
          {post.title}
        </h2>

        {/* Excerpt */}
        <p
          className="text-[14.5px] leading-relaxed line-clamp-3 mb-5"
          style={{ color: 'var(--muted)' }}
        >
          {post.excerpt}
        </p>

        {/* Footer: author + read more */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            {doctor?.photo
              ? <img
                  src={doctor.photo}
                  alt=""
                  aria-hidden="true"
                  className="w-7 h-7 rounded-full object-cover shrink-0"
                />
              : <span
                  className="w-7 h-7 rounded-full text-white text-[11px] font-bold flex items-center justify-center shrink-0"
                  style={{ background: 'var(--navy)' }}
                >
                  {doctor ? getInitials(doctor.name) : '?'}
                </span>
            }
            <span className="text-[13px] font-medium" style={{ color: 'var(--navy)' }}>
              {doctor?.name || '—'}
            </span>
          </div>

          <span
            className="text-[13px] font-semibold flex items-center gap-1"
            style={{ color: 'var(--teal)' }}
          >
            Read More
            <ChevronRight s={13} c="var(--teal)" />
          </span>
        </div>
      </Link>
    </motion.article>
  );
}
