import { useState } from 'react';

function FacebookIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function LinkIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

export default function SocialShare({ url, title }) {
  const [copied, setCopied] = useState(false);
  const fullUrl = `https://www.unicareglobalhospitals.com${url}`;

  const openShare = (platform) => {
    const urls = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(fullUrl)}`,
      twitter:  `https://twitter.com/intent/tweet?url=${encodeURIComponent(fullUrl)}&text=${encodeURIComponent(title)}`,
    };
    window.open(urls[platform], '_blank', 'noopener,noreferrer,width=600,height=400');
  };

  const copyLink = () => {
    navigator.clipboard.writeText(fullUrl).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const btnBase = 'w-10 h-10 rounded-full flex items-center justify-center cursor-pointer transition-colors duration-150';

  return (
    <div className="flex items-center gap-4 pt-8 mt-8" style={{ borderTop: '1px solid var(--line)' }}>
      <p className="text-[11px] font-bold uppercase tracking-[1.1px] shrink-0" style={{ color: 'var(--muted)' }}>
        Share this article
      </p>
      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={() => openShare('facebook')}
          aria-label="Share on Facebook"
          className={btnBase}
          style={{ border: '1px solid var(--line)', color: 'var(--muted)' }}
          onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--teal)'; e.currentTarget.style.color = 'var(--teal)'; }}
          onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--line)'; e.currentTarget.style.color = 'var(--muted)'; }}
        >
          <FacebookIcon />
        </button>
        <button
          type="button"
          onClick={() => openShare('twitter')}
          aria-label="Share on X (Twitter)"
          className={btnBase}
          style={{ border: '1px solid var(--line)', color: 'var(--muted)' }}
          onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--teal)'; e.currentTarget.style.color = 'var(--teal)'; }}
          onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--line)'; e.currentTarget.style.color = 'var(--muted)'; }}
        >
          <XIcon />
        </button>
        <button
          type="button"
          onClick={copyLink}
          aria-label={copied ? 'Link copied' : 'Copy link'}
          className={btnBase}
          style={{
            border: `1px solid ${copied ? 'var(--teal)' : 'var(--line)'}`,
            color: copied ? 'var(--teal)' : 'var(--muted)',
          }}
        >
          {copied ? <CheckIcon /> : <LinkIcon />}
        </button>
      </div>
    </div>
  );
}
