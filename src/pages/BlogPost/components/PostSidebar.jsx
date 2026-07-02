import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Search } from '../../../components/icons';
import { getDoctorBySlug } from '../../../data/doctors';
import allPosts from '../../../../data/blog/posts.json';
import { fadeUp, stagger, vp } from '../../../lib/animations';

const CATEGORIES = ['Gynecology & OB', 'Child Health', 'Diabetes and Hormones', 'Surgery', 'General Health'];

const CATEGORY_GRADIENTS = {
  'Gynecology & OB':       'linear-gradient(135deg, #9B1B6E 0%, #D65EA0 100%)',
  'Child Health':           'linear-gradient(135deg, #1B3F9B 0%, #5C7AE8 100%)',
  'Diabetes and Hormones':  'linear-gradient(135deg, #9B5B1B 0%, #E8975C 100%)',
  'Surgery':                'linear-gradient(135deg, #1B6B3F 0%, #3BAA6B 100%)',
  'General Health':         'linear-gradient(135deg, #012257 0%, #2CAAA0 100%)',
};

const blockStagger = stagger(0.06, 0.05);

function formatDate(iso) {
  return new Date(iso).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });
}

export default function PostSidebar({ currentSlug, tags = [] }) {
  const navigate    = useNavigate();
  const [q, setQ]   = useState('');

  const recentPosts = [...allPosts]
    .sort((a, b) => new Date(b.publishedDate) - new Date(a.publishedDate))
    .filter(p => p.slug !== currentSlug)
    .slice(0, 4);

  const handleSearch = e => {
    e.preventDefault();
    if (q.trim()) navigate(`/blog?q=${encodeURIComponent(q.trim())}`);
  };

  return (
    <motion.aside
      className="flex flex-col gap-6"
      variants={blockStagger}
      initial="hidden"
      whileInView="visible"
      viewport={vp}
    >
      {/* Search */}
      <motion.div variants={fadeUp} className="rounded-2xl p-6" style={{ background: 'var(--soft)' }}>
        <p className="font-display text-[15px] font-semibold mb-4" style={{ color: 'var(--navy)' }}>Search</p>
        <form onSubmit={handleSearch}>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" style={{ color: 'var(--teal)' }}>
              <Search s={15} />
            </span>
            <input
              type="search"
              value={q}
              onChange={e => setQ(e.target.value)}
              placeholder="Search articles…"
              className="h-10 w-full rounded-xl pl-9 pr-4 text-[13.5px] bg-white outline-none transition"
              style={{ border: '1px solid var(--line)', color: 'var(--navy)' }}
            />
          </div>
        </form>
      </motion.div>

      {/* Recent Posts */}
      <motion.div variants={fadeUp} className="rounded-2xl p-6" style={{ background: 'var(--soft)' }}>
        <p className="font-display text-[15px] font-semibold mb-5" style={{ color: 'var(--navy)' }}>Recent Posts</p>
        <div className="flex flex-col gap-4">
          {recentPosts.map(post => {
            const doctor   = getDoctorBySlug(post.authorSlug);
            const gradient = CATEGORY_GRADIENTS[post.category] || CATEGORY_GRADIENTS['General Health'];
            return (
              <div key={post.slug}>
                <Link to={`/blog/${post.slug}`} className="flex gap-3 group">
                  <div className="w-16 h-16 rounded-xl overflow-hidden shrink-0">
                    {post.coverImage
                      ? <img src={post.coverImage} alt="" className="w-full h-full object-cover" loading="lazy" />
                      : <div className="w-full h-full" style={{ background: gradient }} aria-hidden="true" />
                    }
                  </div>
                  <div className="flex-1 min-w-0">
                    <p
                      className="text-[13px] font-medium line-clamp-2 leading-[1.45] transition-colors duration-200 group-hover:text-[var(--teal)]"
                      style={{ color: 'var(--navy)' }}
                    >
                      {post.title}
                    </p>
                    <p className="text-[11.5px] mt-1" style={{ color: 'var(--muted)' }}>{formatDate(post.publishedDate)}</p>
                  </div>
                </Link>
                <Link to={`/blog/${post.slug}`} className="block text-[11.5px] font-semibold mt-1.5 ml-19 transition-colors hover:opacity-75" style={{ color: 'var(--teal)' }}>
                  + Read More
                </Link>
              </div>
            );
          })}
        </div>
      </motion.div>

      {/* Categories */}
      <motion.div variants={fadeUp} className="rounded-2xl p-6" style={{ background: 'var(--soft)' }}>
        <p className="font-display text-[15px] font-semibold mb-4" style={{ color: 'var(--navy)' }}>Categories</p>
        <div className="flex flex-col gap-1">
          {CATEGORIES.map(cat => (
            <Link
              key={cat}
              to="/blog"
              className="flex items-center justify-between w-full px-3 py-2.5 rounded-xl text-left transition-colors duration-150 group"
              style={{ color: 'var(--navy)' }}
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(1,34,87,0.06)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; }}
            >
              <span className="text-[13.5px] font-medium">{cat}</span>
              <span className="text-[13px]" style={{ color: 'var(--teal)' }}>→</span>
            </Link>
          ))}
        </div>
      </motion.div>

      {/* Tags */}
      {tags.length > 0 && (
        <motion.div variants={fadeUp} className="rounded-2xl p-6" style={{ background: 'var(--soft)' }}>
          <p className="font-display text-[15px] font-semibold mb-4" style={{ color: 'var(--navy)' }}>Tags</p>
          <div className="flex flex-wrap gap-2">
            {tags.map(tag => (
              <Link
                key={tag}
                to="/blog"
                className="inline-block px-3 py-1.5 rounded-full text-[12.5px] font-medium transition-colors duration-150"
                style={{ background: '#fff', border: '1px solid var(--line)', color: 'var(--navy)' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--teal)'; e.currentTarget.style.color = 'var(--teal)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--line)'; e.currentTarget.style.color = 'var(--navy)'; }}
              >
                {tag}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </motion.aside>
  );
}
