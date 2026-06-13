import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom';
import { Phone, WhatsAppIc } from './icons';

const PHONE     = '+919090546363';
const PHONE_FMT = '+91 90905 46363';
const WA_MSG    = encodeURIComponent('Hello, I would like to book an appointment at UniCare Hospitals.');
const WA_URL    = `https://wa.me/919090546363?text=${WA_MSG}`;

export default function FloatingCTAs() {
  return createPortal(
    <>
      {/* ── Desktop floating buttons ── */}
      <div className="hidden lg:block">
        {/* Call pill — bottom-left */}
        <a
          href={`tel:${PHONE}`}
          aria-label={`Call UniCare Hospitals: ${PHONE_FMT}`}
          className="fixed bottom-8 left-8 z-[9998] flex items-center gap-3 pl-3 pr-5 h-12 rounded-full group"
          style={{
            background: 'var(--navy)',
            boxShadow: '0 4px 20px rgba(1,34,87,0.30)',
          }}
        >
          {/* Pulse ring on the icon */}
          <span className="relative flex items-center justify-center w-7 h-7 shrink-0">
            <span
              className="absolute inset-0 rounded-full opacity-40"
              style={{
                background: 'rgba(255,255,255,0.25)',
                animation: 'callPulse 2s ease-out infinite',
              }}
            />
            <Phone s={15} c="#fff" />
          </span>
          <span className="flex flex-col leading-tight">
            <span className="text-[10px] text-white/60 font-medium tracking-wider uppercase">Call Now</span>
            <span className="text-[13px] text-white font-semibold">{PHONE_FMT}</span>
          </span>
        </a>

        {/* WhatsApp circle — bottom-right */}
        <a
          href={WA_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with UniCare on WhatsApp"
          className="fixed bottom-8 right-8 z-[9998] w-14 h-14 rounded-full flex items-center justify-center transition-transform hover:scale-110"
          style={{
            background: '#25D366',
            boxShadow: '0 4px 20px rgba(37,211,102,0.45)',
          }}
        >
          <WhatsAppIc s={28} c="#fff" />
        </a>
      </div>

      {/* ── Mobile sticky bottom bar ── */}
      <div
        className="lg:hidden fixed bottom-0 left-0 right-0 z-[9998] flex"
        style={{
          background: 'rgba(255,255,255,0.97)',
          borderTop: '1px solid rgba(1,34,87,0.10)',
          boxShadow: '0 -4px 24px rgba(1,34,87,0.08)',
          paddingBottom: 'env(safe-area-inset-bottom, 0px)',
        }}
      >
        <a
          href={`tel:${PHONE}`}
          aria-label={`Call ${PHONE_FMT}`}
          className="flex-1 flex items-center justify-center gap-2.5 py-3.5 text-white text-[14px] font-semibold transition-opacity active:opacity-80"
          style={{ background: 'var(--navy)' }}
        >
          <Phone s={17} c="#fff" />
          Call Now
        </a>
        <a
          href={WA_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="flex-1 flex items-center justify-center gap-2.5 py-3.5 text-white text-[14px] font-semibold transition-opacity active:opacity-80"
          style={{ background: '#25D366' }}
        >
          <WhatsAppIc s={18} c="#fff" />
          WhatsApp
        </a>
      </div>

      {/* Pulse keyframe */}
      <style>{`
        @keyframes callPulse {
          0%   { transform: scale(1);   opacity: 0.5; }
          70%  { transform: scale(2.2); opacity: 0;   }
          100% { transform: scale(1);   opacity: 0;   }
        }
        @media (prefers-reduced-motion: reduce) {
          @keyframes callPulse { from {} to {} }
        }
      `}</style>
    </>,
    document.body
  );
}
