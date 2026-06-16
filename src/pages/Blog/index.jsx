import { useState } from 'react';
import { motion } from 'framer-motion';
import SEO from '../../components/SEO';
import PageBanner from '../../components/PageBanner';
import { fadeUp, stagger, vp } from '../../lib/animations';
import { getDoctorBySlug } from '../../data/doctors';
import posts from '../../../data/blog/posts.json';
import PostCard from './components/PostCard';
import CTABand from './components/CTABand';

const CATEGORIES = ['All', 'Gynecology & OB', 'Child Health', 'Diabetes and Hormones', 'Surgery', 'General Health'];
const gridStagger = stagger(0.07, 0.1);

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All'
    ? posts
    : posts.filter(p => p.category === activeCategory);

  return (
    <>
      <SEO
        title="Health Blog | Unicare Hospitals Kokapet"
        description="Practical health advice from the doctors at Unicare Hospitals, Kokapet: pregnancy, child health, diabetes, surgery recovery and preventive care."
        url="/blog"
        keywords="health blog Kokapet, hospital blog Hyderabad, pregnancy advice Kokapet, child health tips, diabetes management Hyderabad"
      />

      <PageBanner
        chip="Health Blog"
        title="Health advice from doctors you can visit."
        subtitle="Practical guidance on pregnancy, child health, diabetes, surgery and more — written by the Unicare team in Kokapet."
      />

      {/* Category filter */}
      <section className="px-4 sm:px-6 lg:px-10 pt-8 pb-0">
        <div className="max-w-330 mx-auto flex flex-wrap gap-2" role="tablist" aria-label="Filter blog posts by category">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              role="tab"
              aria-selected={activeCategory === cat}
              onClick={() => setActiveCategory(cat)}
              className="pill text-[13px] cursor-pointer transition-all duration-200"
              style={activeCategory === cat
                ? { background: 'var(--navy)', color: '#fff', borderColor: 'var(--navy)' }
                : {}
              }
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Posts grid */}
      <section className="px-4 sm:px-6 lg:px-10 py-10 lg:py-14">
        <div className="max-w-330 mx-auto">
          {filtered.length === 0 ? (
            <motion.p
              className="text-(--muted) text-[15px] py-16 text-center"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
            >
              No articles in this category yet. Check back soon.
            </motion.p>
          ) : (
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6"
              variants={gridStagger}
              initial="hidden"
              whileInView="visible"
              viewport={vp}
            >
              {filtered.map(post => (
                <PostCard
                  key={post.slug}
                  post={post}
                  doctor={getDoctorBySlug(post.authorSlug)}
                />
              ))}
            </motion.div>
          )}
        </div>
      </section>

      <CTABand />
    </>
  );
}
