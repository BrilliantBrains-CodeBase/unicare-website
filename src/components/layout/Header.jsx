import { useState, useEffect, useRef } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import Logo from '../Logo';
import { Phone, Menu, Close, ChevronDown, ChevronRight, WhatsAppIc } from '../icons';

const PHONE = '+919090546363';
const PHONE_DISPLAY = '+91 90905 46363';
const WA_MSG = encodeURIComponent('Hello, I would like to book an appointment at UniCare Hospitals.');
const WA_URL = `https://wa.me/919090546363?text=${WA_MSG}`;

const specialtyLinks = [
  { label: "Maternity & Women's Health", to: '/specialties/maternity' },
  { label: 'Paediatrics',                to: '/specialties/paediatrics' },
  { label: 'Orthopaedics',               to: '/specialties/orthopaedics' },
  { label: 'General Medicine',           to: '/specialties/general-medicine' },
  { label: 'General Surgery',            to: '/specialties/general-surgery' },
  { label: 'Pharmacy',                   to: '/specialties/pharmacy' },
  { label: 'Diagnostics & Lab',          to: '/specialties/diagnostics' },
];

const mainLinks = [
  { label: 'Home',     to: '/',        exact: true },
  { label: 'About',    to: '/about' },
  { label: 'Doctors',  to: '/doctors' },
  { label: 'Packages', to: '/packages' },
  { label: 'Blog',     to: '/blog' },
  { label: 'Contact',  to: '/contact' },
];

const glassStyle = {
  background: 'rgba(255,255,255,0.10)',
  backdropFilter: 'blur(14px)',
  WebkitBackdropFilter: 'blur(14px)',
  borderBottom: '1px solid rgba(255,255,255,0.18)',
};

const pinnedStyle = {
  background: 'rgba(255,255,255,0.96)',
  backdropFilter: 'blur(20px)',
  WebkitBackdropFilter: 'blur(20px)',
  borderBottom: '1px solid rgba(1,34,87,0.10)',
  boxShadow: '0 4px 24px rgba(1,34,87,0.08)',
};

export default function Header() {
  const [pinned, setPinned]           = useState(false);
  const [mobileOpen, setMobileOpen]   = useState(false);
  const [specOpen, setSpecOpen]       = useState(false);   // desktop dropdown
  const [mobileSpec, setMobileSpec]   = useState(false);  // mobile accordion
  const dropdownRef = useRef(null);
  const closeTimer  = useRef(null);
  const location    = useLocation();

  const isSpecActive = location.pathname.startsWith('/specialties');

  useEffect(() => {
    const onScroll = () => setPinned(window.scrollY > 80);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
    setMobileSpec(false);
  }, [location.pathname]);

  // Prevent body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const textCls   = pinned ? 'text-[var(--navy)]'    : 'text-white/90';
  const hoverBg   = pinned ? 'hover:bg-[var(--soft)]' : 'hover:bg-white/12';
  const activeCls = pinned ? 'text-[var(--navy)] font-semibold' : 'text-white font-semibold';

  const navLinkCls = ({ isActive }) =>
    `text-[13.5px] font-medium px-3.5 py-2.5 rounded-full transition-colors cursor-pointer whitespace-nowrap flex items-center gap-1 min-h-[44px] ${
      isActive ? activeCls : `${textCls} ${hoverBg}`
    }`;

  const openDropdown  = () => { clearTimeout(closeTimer.current); setSpecOpen(true); };
  const closeDropdown = () => { closeTimer.current = setTimeout(() => setSpecOpen(false), 120); };

  return (
    <>
      {/* Skip to content — accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[10000] focus:px-4 focus:py-2 focus:rounded-lg focus:bg-[var(--navy)] focus:text-white focus:text-sm focus:font-medium"
      >
        Skip to main content
      </a>

      <header
        role="banner"
        className="fixed top-0 left-0 right-0 z-[9999] transition-all duration-300"
        style={pinned ? pinnedStyle : glassStyle}
      >
        {/* ── Desktop bar ── */}
        <div className="hidden lg:flex items-center gap-1 max-w-[1320px] mx-auto px-6 h-[72px]">
          {/* Logo */}
          <Link to="/" aria-label="UniCare Hospitals — Home" className="shrink-0 mr-3">
            <Logo horizontal className="h-12 w-auto" />
          </Link>

          {/* Nav links */}
          <nav role="navigation" aria-label="Main navigation" className="flex items-center gap-0.5">
            {mainLinks.slice(0, 2).map(({ label, to, exact }) => (
              <NavLink key={to} to={to} end={exact} className={navLinkCls}>{label}</NavLink>
            ))}

            {/* Specialties dropdown */}
            <div
              className="relative"
              ref={dropdownRef}
              onMouseEnter={openDropdown}
              onMouseLeave={closeDropdown}
            >
              <button
                aria-haspopup="true"
                aria-expanded={specOpen}
                onClick={() => setSpecOpen(o => !o)}
                className={`text-[13.5px] font-medium px-3.5 py-2.5 rounded-full transition-colors cursor-pointer flex items-center gap-1.5 min-h-[44px] ${
                  isSpecActive ? activeCls : `${textCls} ${hoverBg}`
                }`}
              >
                Specialties
                <ChevronDown
                  s={13}
                  c={pinned ? (isSpecActive ? '#012257' : '#012257cc') : 'rgba(255,255,255,0.8)'}
                  style={{ transition: 'transform 0.2s', transform: specOpen ? 'rotate(180deg)' : 'none' }}
                />
                {isSpecActive && (
                  <span className={`absolute bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full ${pinned ? 'bg-[var(--navy)]' : 'bg-white'}`} />
                )}
              </button>

              {specOpen && (
                <div
                  role="menu"
                  aria-label="Specialties menu"
                  onMouseEnter={openDropdown}
                  onMouseLeave={closeDropdown}
                  className="absolute top-[calc(100%+8px)] left-0 w-64 bg-white rounded-2xl shadow-[0_8px_32px_rgba(1,34,87,0.14)] border border-[var(--line)] py-2 overflow-hidden"
                >
                  <Link
                    to="/specialties"
                    role="menuitem"
                    className="flex items-center gap-2 px-4 py-2.5 text-[13px] font-semibold text-[var(--navy)] hover:bg-[var(--soft)] transition-colors"
                  >
                    All Specialties
                    <ChevronRight s={12} c="var(--teal)" />
                  </Link>
                  <div className="h-px bg-[var(--line)] mx-3 my-1" />
                  {specialtyLinks.map(({ label, to }) => (
                    <NavLink
                      key={to}
                      to={to}
                      role="menuitem"
                      className={({ isActive }) =>
                        `block px-4 py-2.5 text-[13px] transition-colors ${
                          isActive
                            ? 'bg-[var(--teal-soft)] text-[var(--navy)] font-medium'
                            : 'text-[var(--navy)]/80 hover:bg-[var(--soft)] hover:text-[var(--navy)]'
                        }`
                      }
                    >
                      {label}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>

            {mainLinks.slice(2).map(({ label, to }) => (
              <NavLink key={to} to={to} className={navLinkCls}>{label}</NavLink>
            ))}
          </nav>

          <div className="flex-1" />

          {/* CTAs */}
          <div className="flex items-center gap-2">
            <a
              href={`tel:${PHONE}`}
              className="btn-dark text-[13.5px] !py-2.5 !px-4 !gap-2"
              aria-label={`Call UniCare Hospitals: ${PHONE_DISPLAY}`}
            >
              <Phone s={14} c="#fff" />
              <span>Call Now</span>
            </a>
            <Link
              to="/book-appointment"
              className={`btn-outline text-[13.5px] !py-2.5 !px-4 ${!pinned ? 'btn-outline-white' : ''}`}
            >
              Book Appointment
            </Link>
          </div>
        </div>

        {/* ── Mobile bar ── */}
        <div className="lg:hidden flex items-center justify-between px-4 h-[64px]">
          <Link to="/" aria-label="UniCare Hospitals — Home" className="shrink-0">
            <Logo horizontal className="h-10 w-auto" />
          </Link>

          <div className="flex items-center gap-2">
            <a
              href={`tel:${PHONE}`}
              aria-label={`Call ${PHONE_DISPLAY}`}
              className="w-10 h-10 rounded-full flex items-center justify-center transition-colors"
              style={{ background: pinned ? 'var(--navy)' : 'rgba(255,255,255,0.15)' }}
            >
              <Phone s={16} c="#fff" />
            </a>
            <button
              onClick={() => setMobileOpen(o => !o)}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              className="w-10 h-10 rounded-full flex items-center justify-center transition-colors cursor-pointer"
              style={{ background: pinned ? 'rgba(1,34,87,0.08)' : 'rgba(255,255,255,0.15)' }}
            >
              {mobileOpen
                ? <Close s={17} c={pinned ? '#012257' : '#fff'} />
                : <Menu s={17}  c={pinned ? '#012257' : '#fff'} />
              }
            </button>
          </div>
        </div>

        {/* ── Mobile drawer ── */}
        {mobileOpen && (
          <div
            id="mobile-menu"
            role="navigation"
            aria-label="Mobile navigation"
            className="lg:hidden mx-3 mb-3 rounded-2xl overflow-hidden"
            style={pinned ? { background: '#fff', border: '1px solid rgba(1,34,87,0.1)' } : glassStyle}
          >
            <nav className="flex flex-col p-3 gap-1">
              {mainLinks.slice(0, 2).map(({ label, to, exact }) => (
                <NavLink
                  key={to}
                  to={to}
                  end={exact}
                  className={({ isActive }) =>
                    `text-[14px] font-medium py-3 px-4 rounded-xl transition-colors flex items-center min-h-[48px] ${
                      isActive
                        ? 'bg-[var(--teal-soft)] text-[var(--navy)] font-semibold'
                        : `${textCls} ${hoverBg}`
                    }`
                  }
                >
                  {label}
                </NavLink>
              ))}

              {/* Specialties accordion */}
              <div>
                <button
                  onClick={() => setMobileSpec(o => !o)}
                  aria-expanded={mobileSpec}
                  className={`w-full text-[14px] font-medium py-3 px-4 rounded-xl transition-colors flex items-center justify-between min-h-[48px] cursor-pointer ${
                    isSpecActive
                      ? 'bg-[var(--teal-soft)] text-[var(--navy)] font-semibold'
                      : `${textCls} ${hoverBg}`
                  }`}
                >
                  <span>Specialties</span>
                  <ChevronDown
                    s={14}
                    c={pinned ? '#012257' : '#fff'}
                    style={{ transition: 'transform 0.2s', transform: mobileSpec ? 'rotate(180deg)' : 'none' }}
                  />
                </button>

                {mobileSpec && (
                  <div className="mt-1 ml-4 flex flex-col gap-0.5">
                    <NavLink
                      to="/specialties"
                      className={({ isActive }) =>
                        `text-[13.5px] font-semibold py-2.5 px-4 rounded-xl transition-colors flex items-center gap-1.5 min-h-[44px] ${
                          isActive ? 'bg-[var(--teal-soft)] text-[var(--navy)]' : `${textCls} ${hoverBg}`
                        }`
                      }
                    >
                      All Specialties <ChevronRight s={12} c="var(--teal)" />
                    </NavLink>
                    {specialtyLinks.map(({ label, to }) => (
                      <NavLink
                        key={to}
                        to={to}
                        className={({ isActive }) =>
                          `text-[13px] py-2.5 px-4 rounded-xl transition-colors min-h-[44px] flex items-center ${
                            isActive ? 'bg-[var(--teal-soft)] text-[var(--navy)] font-medium' : `${textCls} ${hoverBg}`
                          }`
                        }
                      >
                        {label}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>

              {mainLinks.slice(2).map(({ label, to }) => (
                <NavLink
                  key={to}
                  to={to}
                  className={({ isActive }) =>
                    `text-[14px] font-medium py-3 px-4 rounded-xl transition-colors flex items-center min-h-[48px] ${
                      isActive
                        ? 'bg-[var(--teal-soft)] text-[var(--navy)] font-semibold'
                        : `${textCls} ${hoverBg}`
                    }`
                  }
                >
                  {label}
                </NavLink>
              ))}

              {/* Mobile CTAs */}
              <div className="h-px bg-[rgba(1,34,87,0.1)] mx-1 my-2" />
              <a href={`tel:${PHONE}`} className="btn-dark w-full justify-center !py-3 !text-[14px]">
                <Phone s={15} c="#fff" />
                <span>Call Now — {PHONE_DISPLAY}</span>
              </a>
              <Link to="/book-appointment" className="btn-outline w-full justify-center !py-3 !text-[14px]" style={!pinned ? { borderColor: 'rgba(255,255,255,0.4)', color: '#fff' } : {}}>
                Book Appointment
              </Link>
              <a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 px-4 rounded-full text-[14px] font-medium text-white min-h-[48px] transition-opacity hover:opacity-90"
                style={{ background: '#25D366' }}
                aria-label="Chat on WhatsApp"
              >
                <WhatsAppIc s={16} c="#fff" />
                <span>WhatsApp Us</span>
              </a>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
