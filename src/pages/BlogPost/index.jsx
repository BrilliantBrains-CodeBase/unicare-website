import { Navigate, useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SEO from '../../components/SEO';
import { articleSchema } from '../../lib/schema';
import { getDoctorBySlug } from '../../data/doctors';
import { ChevronRight } from '../../components/icons';
import { fadeUp, vp } from '../../lib/animations';
import posts from '../../../data/blog/posts.json';
import PostHero from './components/PostHero';
import KeyTakeawaysBox from './components/KeyTakeawaysBox';
import ArticleBody from './components/ArticleBody';
import AuthorBioCard from './components/AuthorBioCard';
import RelatedPosts from './components/RelatedPosts';
import CTABand from '../Blog/components/CTABand';

export default function BlogPost() {
  const { slug } = useParams();
  const post   = posts.find(p => p.slug === slug);

  if (!post) return <Navigate to="/blog" replace />;

  const doctor = getDoctorBySlug(post.authorSlug);

  const schema = articleSchema({
    title:         post.seo.title,
    description:   post.seo.description,
    url:           `/blog/${post.slug}`,
    publishedDate: post.publishedDate,
    authorName:    doctor ? doctor.name : post.authorSlug,
    image:         post.coverImage || undefined,
  });

  return (
    <>
      <SEO
        title={post.seo.title}
        description={post.seo.description}
        url={`/blog/${post.slug}`}
        schema={schema}
      />

      {/* Hero — extends behind header via negative margin */}
      <PostHero post={post} doctor={doctor} />

      {/* Article body — narrow reading column */}
      <article className="px-4 sm:px-6 py-10 lg:py-14">
        <div className="max-w-180 mx-auto">
          <KeyTakeawaysBox takeaways={post.keyTakeaways} />
          <ArticleBody content={post.content} />
          <AuthorBioCard doctor={doctor} />
          <RelatedPosts currentSlug={post.slug} category={post.category} />

          {/* Related specialty link */}
          {post.relatedSpecialty && (
            <motion.div
              className="mt-8"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={vp}
            >
              <Link
                to={post.relatedSpecialty.url}
                className="pill inline-flex items-center gap-1.5 text-[13.5px] font-medium"
              >
                <span>Explore {post.relatedSpecialty.name} at UniCare</span>
                <ChevronRight s={13} c="var(--teal)" />
              </Link>
            </motion.div>
          )}
        </div>
      </article>

    </>
  );
}
