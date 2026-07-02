import { Link } from 'react-router-dom';

const CATEGORY_GRADIENTS = {
  'Gynecology & OB':       'linear-gradient(135deg, #9B1B6E 0%, #D65EA0 100%)',
  'Child Health':           'linear-gradient(135deg, #1B3F9B 0%, #5C7AE8 100%)',
  'Diabetes and Hormones':  'linear-gradient(135deg, #9B5B1B 0%, #E8975C 100%)',
  'Surgery':                'linear-gradient(135deg, #1B6B3F 0%, #3BAA6B 100%)',
  'General Health':         'linear-gradient(135deg, #012257 0%, #2CAAA0 100%)',
};

function NavCard({ post, direction }) {
  const gradient = CATEGORY_GRADIENTS[post.category] || CATEGORY_GRADIENTS['General Health'];
  const isPrev   = direction === 'prev';

  return (
    <Link
      to={`/blog/${post.slug}`}
      className="flex gap-4 p-4 rounded-2xl group transition-colors duration-150"
      style={{ border: '1px solid var(--line)', background: '#fff' }}
      onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--teal)'; }}
      onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--line)'; }}
    >
      {/* Thumbnail */}
      <div className="w-16 h-16 rounded-xl overflow-hidden shrink-0 self-center">
        {post.coverImage
          ? <img src={post.coverImage} alt="" className="w-full h-full object-cover" loading="lazy" />
          : <div className="w-full h-full" style={{ background: gradient }} aria-hidden="true" />
        }
      </div>

      <div className="flex-1 min-w-0">
        <p className="text-[11px] font-bold uppercase tracking-wider mb-1" style={{ color: 'var(--muted)' }}>
          {isPrev ? '← Previous Post' : 'Next Post →'}
        </p>
        <p
          className="text-[13.5px] font-semibold leading-snug line-clamp-2 transition-colors duration-150 group-hover:text-[var(--teal)]"
          style={{ color: 'var(--navy)' }}
        >
          {post.title}
        </p>
        <p className="text-[12px] font-medium mt-1.5" style={{ color: 'var(--teal)' }}>
          Read More
        </p>
      </div>
    </Link>
  );
}

export default function PostNavigation({ prevPost, nextPost }) {
  if (!prevPost && !nextPost) return null;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10 pt-10" style={{ borderTop: '1px solid var(--line)' }}>
      {prevPost ? <NavCard post={prevPost} direction="prev" /> : <div />}
      {nextPost ? <NavCard post={nextPost} direction="next" /> : <div />}
    </div>
  );
}
