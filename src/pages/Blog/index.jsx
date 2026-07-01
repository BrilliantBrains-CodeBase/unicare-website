import { useState } from 'react';
import { motion } from 'framer-motion';
import SEO from '../../components/SEO';
import PageHeroBanner from '../../components/PageHeroBanner';
import bannerImg from '../../assets/faq.jpg';
import { fadeUp, stagger, vp } from '../../lib/animations';
import { getDoctorBySlug } from '../../data/doctors';
import posts from '../../../data/blog/posts.json';
import PostCardFull from './components/PostCardFull';
import BlogSidebar from './components/BlogSidebar';
import CTABand from '../../components/CTABand';

const gridStagger = stagger(0.08, 0.05);

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery,    setSearchQuery]    = useState('');

  const q = searchQuery.toLowerCase();
  const filtered = posts
    .filter(p => activeCategory === 'All' || p.category === activeCategory)
    .filter(p => !q || p.title.toLowerCase().includes(q) || p.excerpt.toLowerCase().includes(q));

  function handleCategory(cat) {
    setActiveCategory(cat);
    setSearchQuery('');
  }

  return (
    <>
      <SEO
        title="Health Blog | UniCare Hospitals Kokapet"
        description="Practical health advice from the doctors at UniCare Hospitals, Kokapet: pregnancy, child health, diabetes, surgery recovery and preventive care."
        url="/blog"
        keywords="health blog Kokapet, hospital blog Hyderabad, pregnancy advice Kokapet, child health tips, diabetes management Hyderabad"
      />

      <PageHeroBanner heading="Health advice from doctors you can visit." breadcrumbLabel="Health Blog" image={bannerImg} />

      {/* Two-column layout: main posts + sidebar */}
      <section className="px-4 sm:px-6 lg:px-10 py-12 lg:py-16">
        <div className="max-w-330 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-14 items-start">

            {/* Main content */}
            <main className="lg:col-span-8">
              {filtered.length === 0 ? (
                <motion.p
                  className="text-[15px] py-16 text-center"
                  style={{ color: 'var(--muted)' }}
                  variants={fadeUp}
                  initial="hidden"
                  animate="visible"
                >
                  No articles found. Try a different category or search term.
                </motion.p>
              ) : (
                <motion.div
                  variants={gridStagger}
                  initial="hidden"
                  whileInView="visible"
                  viewport={vp}
                >
                  {filtered.map((post, i) => (
                    <PostCardFull
                      key={post.slug}
                      post={post}
                      doctor={getDoctorBySlug(post.authorSlug)}
                      isLast={i === filtered.length - 1}
                    />
                  ))}
                </motion.div>
              )}
            </main>

            {/* Sidebar */}
            <div className="lg:col-span-4 lg:sticky lg:top-28">
              <BlogSidebar
                searchQuery={searchQuery}
                onSearch={setSearchQuery}
                activeCategory={activeCategory}
                onCategory={handleCategory}
              />
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
