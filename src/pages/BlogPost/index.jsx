import { Navigate, useParams } from 'react-router-dom';
import SEO from '../../components/SEO';
import { articleSchema } from '../../lib/schema';
import { getDoctorBySlug } from '../../data/doctors';
import posts from '../../../data/blog/posts.json';
import PostHeader from './components/PostHeader';
import KeyTakeawaysBox from './components/KeyTakeawaysBox';
import ArticleBody from './components/ArticleBody';
import SocialShare from './components/SocialShare';
import PostNavigation from './components/PostNavigation';
import CommentForm from './components/CommentForm';
import PostSidebar from './components/PostSidebar';

export default function BlogPost() {
  const { slug } = useParams();
  const idx  = posts.findIndex(p => p.slug === slug);

  if (idx === -1) return <Navigate to="/blog" replace />;

  const post     = posts[idx];
  const prevPost = idx > 0               ? posts[idx - 1] : null;
  const nextPost = idx < posts.length - 1 ? posts[idx + 1] : null;
  const doctor   = getDoctorBySlug(post.authorSlug);

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

      <section className="py-12 lg:py-16 px-4 sm:px-6 lg:px-10">
        <div className="max-w-330 mx-auto">
          <div className="flex flex-col-reverse lg:grid lg:grid-cols-12 gap-10 xl:gap-14 lg:items-start">

            {/* Sidebar */}
            <div className="lg:col-span-4 lg:sticky lg:top-28">
              <PostSidebar currentSlug={post.slug} tags={post.tags || []} />
            </div>

            {/* Main content */}
            <article className="lg:col-span-8">
              <PostHeader post={post} />
              <KeyTakeawaysBox takeaways={post.keyTakeaways} />
              <ArticleBody content={post.content} />
              <SocialShare url={`/blog/${post.slug}`} title={post.title} />
              <PostNavigation prevPost={prevPost} nextPost={nextPost} />
              <CommentForm />
            </article>

          </div>
        </div>
      </section>
    </>
  );
}
