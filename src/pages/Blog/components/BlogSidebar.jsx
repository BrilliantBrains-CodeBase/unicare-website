import { Link } from 'react-router-dom';
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

const recentPosts = [...allPosts]
  .sort((a, b) => new Date(b.publishedDate) - new Date(a.publishedDate))
  .slice(0, 3);

const blockStagger = stagger(0.06, 0.05);

export default function BlogSidebar({ searchQuery, onSearch, activeCategory, onCategory }) {
  const counts = CATEGORIES.reduce((acc, cat) => {
    acc[cat] = allPosts.filter(p => p.category === cat).length;
    return acc;
  }, {});

  return (
    <motion.aside
      className="flex flex-col gap-6"
      variants={blockStagger}
      initial="hidden"
      whileInView="visible"
      viewport={vp}
    >

      {/* Search */}
      <motion.div
        variants={fadeUp}
        className="rounded-2xl p-6"
        style={{ background: 'var(--soft)' }}
      >
        <p className="font-display text-[15px] font-semibold mb-4" style={{ color: 'var(--navy)' }}>
          Search
        </p>
        <div className="relative">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" style={{ color: 'var(--teal)' }}>
            <Search s={15} />
          </span>
          <input
            type="search"
            value={searchQuery}
            onChange={e => onSearch(e.target.value)}
            placeholder="Search articles…"
            className="h-10 w-full rounded-xl pl-9 pr-4 text-[13.5px] bg-white focus:outline-none transition"
            style={{ border: '1px solid var(--line)', color: 'var(--navy)' }}
          />
        </div>
      </motion.div>

      {/* Recent Posts */}
      <motion.div
        variants={fadeUp}
        className="rounded-2xl p-6"
        style={{ background: 'var(--soft)' }}
      >
        <p className="font-display text-[15px] font-semibold mb-5" style={{ color: 'var(--navy)' }}>
          Recent Posts
        </p>
        <div className="flex flex-col gap-4">
          {recentPosts.map(post => {
            const doctor  = getDoctorBySlug(post.authorSlug);
            const gradient = CATEGORY_GRADIENTS[post.category] || CATEGORY_GRADIENTS['General Health'];
            return (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="flex gap-3 group"
              >
                {/* Thumbnail */}
                <div className="w-16 h-16 rounded-xl overflow-hidden shrink-0">
                  {post.coverImage
                    ? <img src={post.coverImage} alt="" className="w-full h-full object-cover" loading="lazy" decoding="async" />
                    : <div className="w-full h-full" style={{ background: gradient }} aria-hidden="true" />
                  }
                </div>

                <div className="flex-1 min-w-0">
                  <p
                    className="text-[13px] font-medium line-clamp-2 leading-[1.45] transition-colors duration-200 group-hover:text-(--teal)"
                    style={{ color: 'var(--navy)' }}
                  >
                    {post.title}
                  </p>
                  {doctor && (
                    <p className="text-[11.5px] mt-1" style={{ color: 'var(--muted)' }}>
                      {doctor.name}
                    </p>
                  )}
                </div>
              </Link>
            );
          })}
        </div>
      </motion.div>

      {/* Categories */}
      <motion.div
        variants={fadeUp}
        className="rounded-2xl p-6"
        style={{ background: 'var(--soft)' }}
      >
        <p className="font-display text-[15px] font-semibold mb-4" style={{ color: 'var(--navy)' }}>
          Categories
        </p>
        <div className="flex flex-col gap-1">
          {CATEGORIES.map(cat => {
            const active = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => onCategory(active ? 'All' : cat)}
                className="flex items-center justify-between w-full px-3 py-2.5 rounded-xl text-left transition-colors duration-150 cursor-pointer"
                style={{
                  background: active ? 'var(--navy)' : 'transparent',
                  color:      active ? '#fff'        : 'var(--navy)',
                }}
              >
                <span className="text-[13.5px] font-medium">{cat}</span>
                <span
                  className="text-[11.5px] rounded-full px-2 py-0.5 font-medium"
                  style={{
                    background: active ? 'rgba(255,255,255,0.18)' : 'rgba(1,34,87,0.08)',
                    color:      active ? '#fff' : 'var(--muted)',
                  }}
                >
                  {counts[cat] ?? 0}
                </span>
              </button>
            );
          })}
        </div>
      </motion.div>

    </motion.aside>
  );
}
