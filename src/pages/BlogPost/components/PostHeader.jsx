const CATEGORY_GRADIENTS = {
  'Gynecology & OB':       'linear-gradient(135deg, #9B1B6E 0%, #D65EA0 100%)',
  'Child Health':           'linear-gradient(135deg, #1B3F9B 0%, #5C7AE8 100%)',
  'Diabetes and Hormones':  'linear-gradient(135deg, #9B5B1B 0%, #E8975C 100%)',
  'Surgery':                'linear-gradient(135deg, #1B6B3F 0%, #3BAA6B 100%)',
  'General Health':         'linear-gradient(135deg, #012257 0%, #2CAAA0 100%)',
};

function formatDate(iso) {
  return new Date(iso).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' });
}

export default function PostHeader({ post }) {
  const gradient = CATEGORY_GRADIENTS[post.category] || CATEGORY_GRADIENTS['General Health'];

  return (
    <div className="mb-2">
      {/* Featured image / gradient */}
      <div className="w-full rounded-2xl overflow-hidden mb-6" style={{ aspectRatio: '16/9' }}>
        {post.coverImage
          ? <img src={post.coverImage} alt={post.title} className="w-full h-full object-cover" fetchpriority="high" decoding="async" />
          : <div className="w-full h-full" style={{ background: gradient }} aria-hidden="true" />
        }
      </div>

      {/* Meta row */}
      <div className="flex items-center gap-2 flex-wrap mb-4">
        <span className="inline-block px-3 py-1 rounded-full text-[12px] font-semibold text-white" style={{ background: 'var(--teal)' }}>
          {post.category}
        </span>
        <span className="text-[13px]" style={{ color: 'var(--muted)' }}>·</span>
        <time className="text-[13px]" style={{ color: 'var(--muted)' }} dateTime={post.publishedDate}>
          {formatDate(post.publishedDate)}
        </time>
        <span className="text-[13px]" style={{ color: 'var(--muted)' }}>·</span>
        <span className="text-[13px]" style={{ color: 'var(--muted)' }}>{post.readTime}</span>
      </div>

      {/* H1 */}
      <h1
        className="font-display leading-[1.2] mb-8"
        style={{ color: 'var(--navy)', fontSize: 'clamp(22px, 3.5vw, 36px)' }}
      >
        {post.title}
      </h1>
    </div>
  );
}
