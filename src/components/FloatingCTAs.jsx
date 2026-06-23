import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom';
import { Phone, WhatsAppIc, CalendarCheck } from './icons';

const PHONE     = '+919090546363';
const PHONE_FMT = '+91 90905 46363';
const WA_MSG    = encodeURIComponent('Hello, I would like to book an appointment at UniCare Hospitals.');
const WA_URL    = `https://wa.me/919090546363?text=${WA_MSG}`;

export default function FloatingCTAs() {
  return createPortal(
    <>
      {/* ── Floating WhatsApp circle — bottom-right, all breakpoints ── */}
      <a
        href={WA_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with UniCare on WhatsApp"
        className="fixed right-5 lg:right-8 bottom-24 lg:bottom-8 z-9998 w-13 h-13 lg:w-14 lg:h-14 2xl:w-16 2xl:h-16 rounded-full flex items-center justify-center transition-transform hover:scale-110"
        style={{
          background: '#25D366',
          boxShadow: '0 4px 20px rgba(37,211,102,0.45)',
        }}
      >
        <WhatsAppIc s={26} c="#fff" />
      </a>

      {/* ── Mobile sticky bottom bar ── */}
      <div
        className="lg:hidden fixed bottom-0 left-0 right-0 z-[9998]"
        style={{
          background: 'rgba(255,255,255,0.97)',
          borderTop: '1px solid rgba(1,34,87,0.10)',
          boxShadow: '0 -4px 24px rgba(1,34,87,0.08)',
          paddingBottom: 'env(safe-area-inset-bottom, 0px)',
        }}
      >
        <div className="grid grid-cols-3 items-end py-2.5">
          {/* Call */}
          <a
            href={`tel:${PHONE}`}
            aria-label={`Call ${PHONE_FMT}`}
            className="flex flex-col items-center justify-center gap-1.5 py-1.5 text-(--navy) opacity-70 hover:opacity-100 transition-opacity"
          >
            <Phone s={22} />
            <span className="text-[10.5px] font-medium tracking-wide">Call</span>
          </a>

          {/* Book — elevated center CTA */}
          <Link
            to="/book-an-appointment"
            className="flex flex-col items-center justify-center gap-1.5 -mt-5"
            aria-label="Book an appointment"
          >
            <span
              className="w-15 h-15 rounded-full flex items-center justify-center ring-4 ring-white"
              style={{ background: 'var(--teal)', boxShadow: '0 6px 20px rgba(44,170,160,0.5)' }}
            >
              <CalendarCheck s={24} c="#fff" />
            </span>
            <span className="text-[10.5px] font-semibold tracking-wide" style={{ color: 'var(--teal)' }}>Book</span>
          </Link>

          {/* WhatsApp */}
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            className="flex flex-col items-center justify-center gap-1.5 py-1.5 text-(--navy) opacity-70 hover:opacity-100 transition-opacity"
          >
            <WhatsAppIc s={22} />
            <span className="text-[10.5px] font-medium tracking-wide">WhatsApp</span>
          </a>
        </div>
      </div>
    </>,
    document.body
  );
}
