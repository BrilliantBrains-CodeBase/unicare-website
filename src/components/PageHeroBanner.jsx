import { Link } from 'react-router-dom';
import { Phone } from './icons';

export default function PageHeroBanner({ heading, breadcrumbLabel, image, imageAlt = '' }) {
  return (
    <div className="pt-20 xl:pt-24 2xl:pt-28 px-4 sm:px-6 lg:px-8 pb-2">
      {/* Image card */}
      <div className="rounded-2xl overflow-hidden h-48 sm:h-56 lg:h-64">
        <img
          src={image}
          alt={imageAlt}
          className="w-full h-full object-cover object-center"
          fetchpriority="high"
          decoding="async"
        />
      </div>

      {/* Info panel */}
      <div
        className="mt-1 rounded-2xl border border-(--line) px-5 sm:px-8 py-5 sm:py-6 flex items-center justify-between flex-wrap gap-4"
        style={{ background: 'var(--bg)', boxShadow: '0 2px 12px rgba(1,34,87,0.06)' }}
      >
        {/* Left: heading + breadcrumb */}
        <div>
          <h1
            className="font-display text-[28px] sm:text-[36px] sm:text-[44px] leading-[1.1] font-bold"
            style={{ color: 'var(--navy)' }}
          >
            {heading}
          </h1>
          <div className="flex items-center gap-1.5 mt-1 text-[13px]" style={{ color: 'var(--muted)' }}>
            <Link
              to="/"
              className="transition-colors"
              style={{ color: 'var(--teal)' }}
              onMouseEnter={e => e.currentTarget.style.color = 'var(--teal-2)'}
              onMouseLeave={e => e.currentTarget.style.color = 'var(--teal)'}
            >Home</Link>
            <span>›</span>
            <span>{breadcrumbLabel}</span>
          </div>
        </div>

        {/* Right: call pill */}
        <div className="flex items-center gap-3 rounded-full px-3 py-2 bg-white border border-(--line)">
          <span
            className="w-11 h-11 rounded-full flex items-center justify-center shrink-0"
            style={{ background: 'var(--teal)' }}
          >
            <Phone s={17} c="#fff" />
          </span>
          <div className="leading-tight">
            <div className="text-[11px] tracking-[0.14em] uppercase" style={{ color: 'var(--muted)' }}>Call:</div>
            <div className="text-[14px] font-bold" style={{ color: 'var(--navy)' }}>+91 90905 46363</div>
          </div>
        </div>
      </div>
    </div>
  );
}
