import { motion } from 'framer-motion';
import posts from '../../../../data/blog/posts.json';
import { getDoctorBySlug } from '../../../data/doctors';
import PostCard from '../../Blog/components/PostCard';
import { fadeUp, stagger, vp } from '../../../lib/animations';

const relatedStagger = stagger(0.07, 0.05);

export default function RelatedPosts({ currentSlug, category }) {
  const same   = posts.filter(p => p.slug !== currentSlug && p.category === category);
  const others = posts.filter(p => p.slug !== currentSlug && p.category !== category);
  const related = [...same, ...others].slice(0, 3);

  if (related.length === 0) return null;

  return (
    <section className="mt-12 pt-10 border-t border-(--line)">
      <motion.p
        className="text-[11px] font-semibold tracking-[0.12em] uppercase text-(--teal) mb-5"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={vp}
      >
        More from {category}
      </motion.p>
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        variants={relatedStagger}
        initial="hidden"
        whileInView="visible"
        viewport={vp}
      >
        {related.map(post => (
          <PostCard key={post.slug} post={post} doctor={getDoctorBySlug(post.authorSlug)} />
        ))}
      </motion.div>
    </section>
  );
}
