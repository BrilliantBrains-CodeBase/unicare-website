export default function ArticleBody({ content }) {
  if (!content || content.length === 0) {
    return (
      <p className="text-(--muted) text-[15px] italic py-8">
        Article coming soon. Check back shortly.
      </p>
    );
  }

  return (
    <div className="prose-blog">
      {content.map((block, i) => {
        if (block.type === 'paragraph') {
          return (
            <p key={i} className="text-[15px] sm:text-[16px] text-(--navy)/85 leading-[1.8] mb-5">
              {block.text}
            </p>
          );
        }
        if (block.type === 'heading') {
          const Tag = block.level === 3 ? 'h3' : 'h2';
          const cls = block.level === 3
            ? 'font-display text-[18px] sm:text-[20px] text-(--navy) leading-[1.3] mt-8 mb-3'
            : 'font-display text-[22px] sm:text-[25px] text-(--navy) leading-[1.25] mt-10 mb-4';
          return <Tag key={i} className={cls}>{block.text}</Tag>;
        }
        if (block.type === 'list') {
          return (
            <ul key={i} className="mb-5 flex flex-col gap-2 pl-0">
              {block.items.map((item, j) => (
                <li key={j} className="flex gap-3 text-[15px] text-(--navy)/85 leading-relaxed">
                  <span
                    className="shrink-0 w-1.5 h-1.5 rounded-full mt-2.25"
                    style={{ background: 'var(--teal)' }}
                    aria-hidden="true"
                  />
                  {item}
                </li>
              ))}
            </ul>
          );
        }
        if (block.type === 'blockquote') {
          return (
            <blockquote
              key={i}
              className="rounded-2xl p-6 sm:p-8 my-8 relative overflow-hidden"
              style={{ background: 'var(--soft)' }}
            >
              <span
                className="absolute top-2 left-5 font-display leading-none select-none pointer-events-none"
                style={{ fontSize: 80, color: 'var(--teal)', opacity: 0.15 }}
                aria-hidden="true"
              >
                "
              </span>
              <p
                className="text-[16px] sm:text-[18px] italic leading-[1.7] relative z-10"
                style={{ color: 'var(--navy)' }}
              >
                {block.text}
              </p>
              {block.attribution && (
                <footer
                  className="mt-4 text-[13px] font-semibold uppercase tracking-wider"
                  style={{ color: 'var(--teal)' }}
                >
                  — {block.attribution}
                </footer>
              )}
            </blockquote>
          );
        }
        return null;
      })}
    </div>
  );
}
