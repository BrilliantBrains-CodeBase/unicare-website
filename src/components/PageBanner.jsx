import { motion } from 'framer-motion';
import { fadeUp, stagger } from '../lib/animations';

const container = stagger(0.1, 0);

export default function PageBanner({ chip, title, subtitle }) {
  return (
    <div
      className="relative -mt-16 lg:-mt-20 w-full overflow-hidden"
      style={{ minHeight: 'clamp(280px, 38vw, 400px)' }}
    >
      {/* Base */}
      <div className="absolute inset-0" style={{ background: 'var(--navy)' }} />

      {/* Grid pattern */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" aria-hidden="true">
        <defs>
          <pattern id="pb-grid" width="48" height="48" patternUnits="userSpaceOnUse">
            <path d="M48 0H0V48" fill="none" stroke="#ffffff" strokeOpacity=".04" strokeWidth="1"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#pb-grid)"/>
      </svg>

      {/* Decorative circles */}
      <div
        className="absolute -right-24 -top-24 w-100 h-100 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(44,170,160,0.18) 0%, transparent 70%)' }}
      />
      <div
        className="absolute -left-16 -bottom-16 w-72 h-72 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(44,170,160,0.10) 0%, transparent 70%)' }}
      />
      <svg
        viewBox="0 0 320 320"
        className="absolute right-0 top-0 h-full w-auto opacity-[.05] pointer-events-none"
        aria-hidden="true"
      >
        <circle cx="260" cy="160" r="220" fill="none" stroke="#2CAAA0" strokeWidth="1.5"/>
        <circle cx="260" cy="160" r="160" fill="none" stroke="#2CAAA0" strokeWidth="1.5"/>
        <circle cx="260" cy="160" r="100" fill="none" stroke="#2CAAA0" strokeWidth="1.5"/>
        <circle cx="260" cy="160" r="46"  fill="none" stroke="#2CAAA0" strokeWidth="1.5"/>
      </svg>

      {/* Photo placeholder badge */}
      <div className="absolute top-4 right-4 sm:top-6 sm:right-6 hidden sm:flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[10px] text-white/40 border border-white/10 backdrop-blur-sm">
        <span className="w-1.5 h-1.5 rounded-full bg-white/25"/>
        Photo coming soon
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-end px-4 sm:px-6 lg:px-10 pb-32 sm:pb-36 lg:pb-40 pt-28 sm:pt-32 lg:pt-36 max-w-330 mx-auto">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="max-w-2xl"
        >
          {chip && (
            <motion.span
              variants={fadeUp}
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/8 backdrop-blur-sm px-4 py-1.5 text-[11px] tracking-[0.14em] uppercase font-semibold text-white/70 mb-4"
            >
              {chip}
            </motion.span>
          )}
          <motion.h1
            variants={fadeUp}
            className="font-display text-[32px] sm:text-[44px] lg:text-[58px] leading-[1.04] text-white"
          >
            {title}
          </motion.h1>
          {subtitle && (
            <motion.p
              variants={fadeUp}
              className="mt-3 text-[14px] sm:text-[15px] text-white/60 leading-relaxed max-w-xl"
            >
              {subtitle}
            </motion.p>
          )}
        </motion.div>
      </div>

      {/* Bottom fade — sits below the text gap, smooth 5-stop dissolve */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none"
        style={{
          height: 'clamp(65px, 10vw, 95px)',
          background: 'linear-gradient(to bottom, transparent 0%, rgba(248,249,252,0.2) 30%, rgba(248,249,252,0.6) 60%, rgba(248,249,252,0.92) 82%, var(--bg) 100%)',
        }}
      />
    </div>
  );
}
