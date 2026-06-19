import { useState, useEffect, useRef } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import Logo from '../Logo';
import { Phone, Pin, Menu, Close, ChevronDown, ChevronRight, WhatsAppIc } from '../icons';

const PHONE         = '+919090546363';
const PHONE_DISPLAY = '+91 90905 46363';
const PHONE_2       = '+919121856565';
const PHONE_2_DISPLAY = '+91 91218 56565';
const ADDRESS       = 'A 201, 2nd Floor, Saanvi Antalya Homes, Kokapet, Telangana';
const WA_MSG        = encodeURIComponent('Hello, I would like to book an appointment at UniCare Hospitals.');
const WA_URL        = `https://wa.me/919090546363?text=${WA_MSG}`;

const specialtyLinks = [
  { label: "Maternity & Women's Health", to: '/specialties/maternity-womens-health' },
  { label: 'Paediatrics',                to: '/specialties/pediatrics' },
  { label: 'Orthopaedics',               to: '/specialties/orthopedics' },
  { label: 'General Medicine',           to: '/specialties/general-medicine-endocrinology' },
  { label: 'General Surgery',            to: '/specialties/general-minimal-access-surgery' },
  { label: 'Pharmacy',                   to: '/specialties/pharmacy' },
  { label: 'Diagnostics & Lab',          to: '/specialties/diagnostics-lab' },
];

const mainLinks = [
  { label: 'Home',     to: '/',        exact: true },
  { label: 'About',    to: '/about-us' },
  { label: 'Doctors',  to: '/doctors' },
  { label: 'Packages', to: '/health-checkup-packages' },
  { label: 'Blog',     to: '/blog' },
  { label: 'Contact',  to: '/contact#inquiry-form' },
];

const TRANSITION = 'background 0.4s ease, box-shadow 0.4s ease, border-color 0.35s ease, border-radius 0.45s cubic-bezier(0.4, 0, 0.2, 1), margin 0.45s cubic-bezier(0.4, 0, 0.2, 1)';

const glassStyle = {
  background: 'rgba(255,255,255,0.10)',
  backdropFilter: 'blur(14px)',
  WebkitBackdropFilter: 'blur(14px)',
  border: '1px solid rgba(255,255,255,0.18)',
  marginTop: '12px',
  marginRight: '16px',
  marginBottom: '0px',
  marginLeft: '16px',
  borderRadius: '28px',
  transition: TRANSITION,
};

const pinnedStyle = {
  background: 'rgba(255,255,255,0.96)',
  backdropFilter: 'blur(20px)',
  WebkitBackdropFilter: 'blur(20px)',
  border: '1px solid rgba(1,34,87,0.10)',
  boxShadow: '0 4px 24px rgba(1,34,87,0.08)',
  marginTop: '0px',
  marginRight: '0px',
  marginBottom: '0px',
  marginLeft: '0px',
  borderRadius: '0px',
  transition: TRANSITION,
};

export default function Header() {
  const [pinned, setPinned]         = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [specOpen, setSpecOpen]     = useState(false);
  const [mobileSpec, setMobileSpec] = useState(false);
  const dropdownRef = useRef(null);
  const closeTimer  = useRef(null);
  const location    = useLocation();

  const isSpecActive = location.pathname.startsWith('/specialties');

  useEffect(() => {
    const hero = document.querySelector('[data-hero]');
    if (!hero) { setPinned(true); return; }
    setPinned(false);
    const observer = new IntersectionObserver(
      ([entry]) => setPinned(!entry.isIntersecting),
      { threshold: 0 }
    );
    observer.observe(hero);
    return () => observer.disconnect();
  }, [location.pathname]);

  useEffect(() => {
    setMobileOpen(false);
    setMobileSpec(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const textCls   = pinned ? 'text-[var(--navy)]'     : 'text-white/90';
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
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[10000] focus:px-4 focus:py-2 focus:rounded-lg focus:bg-[var(--navy)] focus:text-white focus:text-sm focus:font-medium"
      >
        Skip to main content
      </a>

      <header
        role="banner"
        className="fixed top-0 left-0 right-0 z-[9999]"
        style={pinned ? pinnedStyle : glassStyle}
      >
        {/* ── Announcement bar (desktop only, expands in when pinned) ── */}
        <div
          className="hidden xl:block overflow-hidden"
          style={{
            maxHeight: pinned ? '36px' : '0px',
            transition: 'max-height 0.35s ease',
            background: 'var(--navy)',
          }}
        >
          <div className="max-w-330 mx-auto h-9 px-6 flex items-center justify-between text-[12.5px] text-white/85">
            <span className="flex items-center gap-2">
              <Pin s={12} c="var(--teal)" />
              {ADDRESS}
            </span>
            <span className="flex items-center gap-4">
              <a href={`tel:${PHONE}`} className="flex items-center gap-1.5 hover:text-white transition-colors">
                <Phone s={12} c="var(--teal)" />
                {PHONE_DISPLAY}
              </a>
              <span className="w-px h-3 bg-white/20" aria-hidden="true" />
              <a href={`tel:${PHONE_2}`} className="flex items-center gap-1.5 hover:text-white transition-colors">
                <Phone s={12} c="var(--teal)" />
                {PHONE_2_DISPLAY}
              </a>
            </span>
          </div>
        </div>

        {/* ── Desktop nav bar ── */}
        <div className="hidden xl:flex items-center gap-1 max-w-330 mx-auto px-6 py-4">
          <Link to="/" aria-label="UniCare Hospitals — Home" className="shrink-0 mr-3">
            <Logo horizontal className="h-18 w-auto" />
          </Link>

          <nav role="navigation" aria-label="Main navigation" className="flex items-center gap-0.5">
            {mainLinks.slice(0, 2).map(({ label, to, exact }) => (
              <NavLink key={to} to={to} end={exact} className={navLinkCls}>{label}</NavLink>
            ))}

            {/* Specialties dropdown */}
            <div className="relative" ref={dropdownRef} onMouseEnter={openDropdown} onMouseLeave={closeDropdown}>
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

          <div className="flex items-center gap-2">
            <a
              href={`tel:${PHONE}`}
              className="btn-dark text-[13.5px] py-2.5! px-4! gap-2!"
              aria-label={`Call UniCare Hospitals: ${PHONE_DISPLAY}`}
            >
              <Phone s={14} c="#fff" />
              <span>Call Now</span>
            </a>
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat with UniCare on WhatsApp"
              className="btn-dark text-[13.5px] py-2.5! px-4! gap-2!"
              style={{ background: '#25D366' }}
            >
              <WhatsAppIc s={16} c="#fff" />
              <span>WhatsApp</span>
            </a>
            <Link
              to="/book-an-appointment"
              className={`btn-outline text-[13.5px] py-2.5! px-4! ${!pinned ? 'btn-outline-white' : ''}`}
            >
              Book Appointment
            </Link>
          </div>
        </div>

        {/* ── Mobile bar ── */}
        <div className="xl:hidden flex items-center justify-between px-4 h-[64px]">
          <Link to="/" aria-label="UniCare Hospitals — Home" className="shrink-0">
            <Logo horizontal className="h-10 w-auto" />
          </Link>
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
              : <Menu  s={17} c={pinned ? '#012257' : '#fff'} />
            }
          </button>
        </div>

        {/* ── Mobile drawer ── */}
        {mobileOpen && (
          <div
            id="mobile-menu"
            role="navigation"
            aria-label="Mobile navigation"
            className="xl:hidden mx-3 mb-3 rounded-2xl overflow-hidden"
            style={pinned
              ? { background: '#fff', border: '1px solid rgba(1,34,87,0.1)' }
              : { background: 'rgba(255,255,255,0.10)', backdropFilter: 'blur(14px)', WebkitBackdropFilter: 'blur(14px)', border: '1px solid rgba(255,255,255,0.18)' }
            }
          >
            <nav className="flex flex-col p-3 gap-1">
              {mainLinks.slice(0, 2).map(({ label, to, exact }) => (
                <NavLink
                  key={to} to={to} end={exact}
                  className={({ isActive }) =>
                    `text-[14px] font-medium py-3 px-4 rounded-xl transition-colors flex items-center min-h-[48px] ${
                      isActive ? 'bg-[var(--teal-soft)] text-[var(--navy)] font-semibold' : `${textCls} ${hoverBg}`
                    }`
                  }
                >
                  {label}
                </NavLink>
              ))}

              <div>
                <button
                  onClick={() => setMobileSpec(o => !o)}
                  aria-expanded={mobileSpec}
                  className={`w-full text-[14px] font-medium py-3 px-4 rounded-xl transition-colors flex items-center justify-between min-h-[48px] cursor-pointer ${
                    isSpecActive ? 'bg-[var(--teal-soft)] text-[var(--navy)] font-semibold' : `${textCls} ${hoverBg}`
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
                        key={to} to={to}
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
                  key={to} to={to}
                  className={({ isActive }) =>
                    `text-[14px] font-medium py-3 px-4 rounded-xl transition-colors flex items-center min-h-[48px] ${
                      isActive ? 'bg-[var(--teal-soft)] text-[var(--navy)] font-semibold' : `${textCls} ${hoverBg}`
                    }`
                  }
                >
                  {label}
                </NavLink>
              ))}
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
