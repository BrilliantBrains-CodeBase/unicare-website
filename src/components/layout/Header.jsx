import { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Logo from '../Logo';
import {
  Phone, Pin, Menu, Close, ChevronDown, ChevronRight,
  WhatsAppIc, CalendarCheck,
  MaternityIc, PaediatricsIc, OrthoIc, GeneralMedicIc,
  GeneralSurgIc, PharmacyIc, DiagnosticsIc,
} from '../icons';

const PHONE           = '+919090546363';
const PHONE_DISPLAY   = '+91 90905 46363';
const PHONE_2         = '+919121856565';
const PHONE_2_DISPLAY = '+91 91218 56565';
const ADDRESS         = 'A 201, 2nd Floor, Saanvi Antalya Homes, Kokapet, Telangana';
const WA_MSG          = encodeURIComponent('Hello, I would like to book an appointment at UniCare Hospitals.');
const WA_URL          = `https://wa.me/919090546363?text=${WA_MSG}`;

const specialtyLinks = [
  { label: "Maternity & Women's Health", sub: 'Labour, NICU, Gynaec',  to: '/specialties/maternity-womens-health',          Icon: MaternityIc },
  { label: 'Paediatrics',                sub: 'Child & Newborn Care',   to: '/specialties/pediatrics',                       Icon: PaediatricsIc },
  { label: 'Orthopaedics',               sub: 'Bones, Joints, Spine',   to: '/specialties/orthopedics',                      Icon: OrthoIc },
  { label: 'General Medicine',           sub: 'Diabetes, Endocrine',    to: '/specialties/general-medicine-endocrinology',   Icon: GeneralMedicIc },
  { label: 'General Surgery',            sub: 'Minimal Access',         to: '/specialties/general-minimal-access-surgery',   Icon: GeneralSurgIc },
  { label: 'Pharmacy',                   sub: 'In-house, 24/7',         to: '/specialties/pharmacy',                         Icon: PharmacyIc },
  { label: 'Diagnostics & Lab',          sub: 'Scans, Blood Tests',     to: '/specialties/diagnostics-lab',                  Icon: DiagnosticsIc },
];

const mainLinks = [
  { label: 'Home',     to: '/',        exact: true },
  { label: 'About',    to: '/about-us' },
  { label: 'Doctors',  to: '/doctors' },
  { label: 'Packages', to: '/health-checkup-packages' },
  { label: 'Blog',     to: '/blog' },
  { label: 'Contact',  to: '/contact#inquiry-form' },
];

// Framer Motion controls left/right/top directly so no Tailwind class fights it.
const glassVariant = {
  top: '20px',
  left: '24px',
  right: '24px',
  background: 'rgba(0,0,0,0)',
  backdropFilter: 'none',
  WebkitBackdropFilter: 'none',
  borderRadius: '0px',
  boxShadow: 'none',
};

const pinnedVariant = {
  top: '0px',
  left: '0px',
  right: '0px',
  background: 'rgba(255,255,255,0.98)',
  backdropFilter: 'blur(20px)',
  WebkitBackdropFilter: 'blur(20px)',
  borderRadius: '0px',
  boxShadow: '0 2px 16px rgba(1,34,87,0.06)',
};

// ── Mobile drawer (portal) ─────────────────────────────────────────────────

function MobileDrawer({ isOpen, onClose, isSpecActive }) {
  const [mobileSpec, setMobileSpec] = useState(false);
  const location = useLocation();

  useEffect(() => { onClose(); }, [location.pathname]);
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const drawer = (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 z-[9998] xl:hidden"
            style={{ background: 'rgba(1,34,87,0.45)', backdropFilter: 'blur(2px)', WebkitBackdropFilter: 'blur(2px)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
          />

          {/* Drawer panel */}
          <motion.div
            role="navigation"
            aria-label="Mobile navigation"
            className="fixed top-0 right-0 bottom-0 z-[9999] flex flex-col bg-white xl:hidden"
            style={{ width: 'min(320px, 100vw)', boxShadow: '-8px 0 40px rgba(1,34,87,0.18)' }}
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Teal header strip */}
            <div className="h-16 flex items-center justify-between px-4 shrink-0" style={{ background: 'var(--teal)' }}>
              <Link to="/" onClick={onClose} aria-label="UniCare Hospitals — Home">
                <Logo horizontal className="h-9 w-auto brightness-0 invert" />
              </Link>
              <button
                onClick={onClose}
                aria-label="Close menu"
                className="w-9 h-9 rounded-full flex items-center justify-center transition-colors cursor-pointer"
                style={{ background: 'rgba(255,255,255,0.20)' }}
              >
                <Close s={16} c="#fff" />
              </button>
            </div>

            {/* Nav items — scrollable */}
            <nav className="flex-1 overflow-y-auto py-3 px-3">
              {mainLinks.slice(0, 2).map(({ label, to, exact }) => (
                <NavLink
                  key={to} to={to} end={exact}
                  onClick={onClose}
                  className={({ isActive }) =>
                    `flex items-center text-[14px] font-medium py-3 px-4 rounded-xl min-h-[48px] transition-colors ${
                      isActive
                        ? 'bg-[var(--teal-soft)] text-[var(--teal)] font-semibold'
                        : 'text-[var(--navy)] hover:bg-[var(--soft)]'
                    }`
                  }
                >
                  {label}
                </NavLink>
              ))}

              <div className="h-px bg-[var(--line)] mx-4 my-2" />

              {/* Specialties expandable */}
              <button
                onClick={() => setMobileSpec(o => !o)}
                aria-expanded={mobileSpec}
                className={`w-full flex items-center justify-between text-[14px] font-medium py-3 px-4 rounded-xl min-h-[48px] transition-colors cursor-pointer ${
                  isSpecActive
                    ? 'bg-[var(--teal-soft)] text-[var(--teal)] font-semibold'
                    : 'text-[var(--navy)] hover:bg-[var(--soft)]'
                }`}
              >
                <span>Specialties</span>
                <motion.span animate={{ rotate: mobileSpec ? 180 : 0 }} transition={{ duration: 0.2 }}>
                  <ChevronDown s={14} c="currentColor" />
                </motion.span>
              </button>

              <AnimatePresence initial={false}>
                {mobileSpec && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.22, ease: 'easeOut' }}
                    className="overflow-hidden"
                  >
                    <div className="grid grid-cols-2 gap-1.5 mx-3 mt-2 mb-1">
                      {specialtyLinks.map(({ label, to, Icon }) => (
                        <NavLink
                          key={to} to={to}
                          onClick={onClose}
                          className={({ isActive }) =>
                            `flex items-center gap-2 p-2.5 rounded-xl transition-colors ${
                              isActive
                                ? 'bg-[var(--teal-soft)] text-[var(--teal)]'
                                : 'text-[var(--navy)] hover:bg-[var(--soft)]'
                            }`
                          }
                        >
                          <span className="w-7 h-7 rounded-lg bg-[var(--teal-soft)] flex items-center justify-center shrink-0">
                            <Icon s={14} c="var(--teal)" />
                          </span>
                          <span className="text-[12px] font-medium leading-tight">{label}</span>
                        </NavLink>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="h-px bg-[var(--line)] mx-4 my-2" />

              {mainLinks.slice(2).map(({ label, to }) => (
                <NavLink
                  key={to} to={to}
                  onClick={onClose}
                  className={({ isActive }) =>
                    `flex items-center text-[14px] font-medium py-3 px-4 rounded-xl min-h-[48px] transition-colors ${
                      isActive
                        ? 'bg-[var(--teal-soft)] text-[var(--teal)] font-semibold'
                        : 'text-[var(--navy)] hover:bg-[var(--soft)]'
                    }`
                  }
                >
                  {label}
                </NavLink>
              ))}
            </nav>

            {/* Bottom action row */}
            <div
              className="shrink-0 border-t border-[var(--line)] bg-white px-3 pt-3"
              style={{ paddingBottom: 'max(12px, env(safe-area-inset-bottom))' }}
            >
              <div className="grid grid-cols-3 gap-2">
                <a
                  href={`tel:${PHONE}`}
                  aria-label={`Call UniCare Hospitals: ${PHONE_DISPLAY}`}
                  className="flex flex-col items-center gap-1.5 rounded-xl py-3 text-[12px] font-semibold text-[var(--navy)] transition-colors hover:opacity-80"
                  style={{ background: 'var(--soft)' }}
                >
                  <Phone s={18} c="var(--navy)" />
                  Call
                </a>
                <a
                  href={WA_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Chat with UniCare on WhatsApp"
                  className="flex flex-col items-center gap-1.5 rounded-xl py-3 text-[12px] font-semibold text-white transition-colors hover:opacity-90"
                  style={{ background: '#25D366' }}
                >
                  <WhatsAppIc s={18} c="#fff" />
                  WhatsApp
                </a>
                <Link
                  to="/book-an-appointment"
                  onClick={onClose}
                  className="flex flex-col items-center gap-1.5 rounded-xl py-3 text-[12px] font-semibold text-white transition-colors hover:opacity-90"
                  style={{ background: 'var(--teal)' }}
                >
                  <CalendarCheck s={18} c="#fff" />
                  Book
                </Link>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );

  return createPortal(drawer, document.body);
}

// ── Main Header ────────────────────────────────────────────────────────────

export default function Header() {
  const [pinned, setPinned]         = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [specOpen, setSpecOpen]     = useState(false);
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
  }, [location.pathname]);

  const openDropdown  = () => { clearTimeout(closeTimer.current); setSpecOpen(true); };
  const closeDropdown = () => { closeTimer.current = setTimeout(() => setSpecOpen(false), 150); };

  // White text over dark hero when floating; navy text when pinned on white header
  const navLinkCls = ({ isActive }) =>
    `px-3.5 py-2 text-[13.5px] 2xl:text-[15px] font-medium transition-all rounded-full whitespace-nowrap cursor-pointer ${
      isActive
        ? pinned
            ? 'bg-white text-[var(--navy)] font-semibold shadow-sm'
            : 'bg-white/20 text-white font-semibold'
        : pinned
            ? 'text-[var(--navy)]/60 hover:text-[var(--navy)] hover:bg-white/70'
            : 'text-white/90 hover:text-white hover:bg-white/12'
    }`;

  return (
    <>
      {/* Skip to content */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[10000] focus:px-4 focus:py-2 focus:rounded-lg focus:bg-[var(--navy)] focus:text-white focus:text-sm focus:font-medium"
      >
        Skip to main content
      </a>

      <motion.header
        role="banner"
        className="fixed z-9999"
        animate={pinned ? pinnedVariant : glassVariant}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* ── Top utility bar (desktop, pinned only) ── */}
        <motion.div
          className="hidden xl:block overflow-hidden"
          style={{ background: 'var(--navy)' }}
          animate={{ maxHeight: pinned ? '36px' : '0px', opacity: pinned ? 1 : 0 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        >
          <div className="max-w-330 2xl:max-w-400 mx-auto h-9 px-6 2xl:px-20 flex items-center justify-between">
            <span className="flex items-center gap-1.5 text-[12px] text-white/70">
              <Pin s={11} c="var(--teal)" />
              {ADDRESS}
            </span>
            <span className="flex items-center gap-3 text-[12px]">
              <a
                href={`tel:${PHONE}`}
                className="flex items-center gap-1.5 text-white/70 hover:text-white transition-colors"
                aria-label={`Call UniCare: ${PHONE_DISPLAY}`}
              >
                <Phone s={11} c="var(--teal)" />
                {PHONE_DISPLAY}
              </a>
              <span className="w-px h-3 bg-white/20" aria-hidden="true" />
              <a
                href={`tel:${PHONE_2}`}
                className="flex items-center gap-1.5 text-white/70 hover:text-white transition-colors"
                aria-label={`Call UniCare: ${PHONE_2_DISPLAY}`}
              >
                <Phone s={11} c="var(--teal)" />
                {PHONE_2_DISPLAY}
              </a>
            </span>
          </div>
        </motion.div>

        {/* ── Desktop nav bar ── */}
        <div className="hidden xl:flex items-center h-18 2xl:h-21 max-w-330 2xl:max-w-400 mx-auto px-6 2xl:px-20">

          {/* Logo */}
          <Link to="/" aria-label="UniCare Hospitals — Home" className="shrink-0 mr-6">
            <Logo horizontal className={`h-16 xl:h-18 2xl:h-22 w-auto transition-all duration-300 ${!pinned ? 'brightness-0 invert' : ''}`} />
          </Link>

          {/* CENTER pill containing all nav links */}
          <div className="flex-1 flex items-center justify-center">
            <nav
              role="navigation"
              aria-label="Main navigation"
              className={`inline-flex items-center rounded-full px-2 py-1.5 gap-0.5 transition-all duration-300 ${
                pinned
                  ? 'bg-[var(--soft)] border border-[var(--line)]'
                  : 'bg-white/10 border border-white/20'
              }`}
            >
              {mainLinks.slice(0, 2).map(({ label, to, exact }) => (
                <NavLink key={to} to={to} end={exact} className={navLinkCls}>
                  {label}
                </NavLink>
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
                  className={`inline-flex items-center gap-1.5 px-3.5 py-2 text-[13.5px] font-medium transition-all rounded-full whitespace-nowrap cursor-pointer ${
                    isSpecActive
                      ? pinned
                          ? 'bg-white text-[var(--navy)] font-semibold shadow-sm'
                          : 'bg-white/20 text-white font-semibold'
                      : pinned
                          ? 'text-[var(--navy)]/60 hover:text-[var(--navy)] hover:bg-white/70'
                          : 'text-white/90 hover:text-white hover:bg-white/12'
                  }`}
                >
                  Specialties
                  <motion.span animate={{ rotate: specOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                    <ChevronDown s={13} c="currentColor" />
                  </motion.span>
                </button>

                {/* Mega-menu panel */}
                <AnimatePresence>
                  {specOpen && (
                    <motion.div
                      role="menu"
                      aria-label="Specialties menu"
                      onMouseEnter={openDropdown}
                      onMouseLeave={closeDropdown}
                      className="absolute top-[calc(100%+8px)] left-1/2 -translate-x-1/2 w-[480px] bg-white rounded-2xl overflow-hidden"
                      style={{
                        boxShadow: '0 16px 48px rgba(1,34,87,0.14), 0 4px 12px rgba(1,34,87,0.06)',
                        border: '1px solid rgba(1,34,87,0.08)',
                        transformOrigin: 'top center',
                      }}
                      initial={{ opacity: 0, y: -8, scale: 0.97 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -6, scale: 0.97 }}
                      transition={{ duration: 0.18, ease: 'easeOut' }}
                    >
                      {/* Panel header */}
                      <div className="flex items-center justify-between px-4 pt-3 pb-2">
                        <span className="text-[11px] uppercase tracking-[0.12em] text-[var(--muted)] font-semibold">
                          Our Specialties
                        </span>
                        <Link
                          to="/specialties"
                          role="menuitem"
                          onClick={() => setSpecOpen(false)}
                          className="flex items-center gap-1 text-[12px] text-[var(--teal)] font-semibold hover:gap-2 transition-all"
                        >
                          All Specialties
                          <ChevronRight s={12} c="var(--teal)" />
                        </Link>
                      </div>
                      <div className="h-px bg-[var(--line)] mx-3 mb-2" />

                      {/* 2-column specialty grid */}
                      <div className="grid grid-cols-2 gap-1 px-2 pb-2">
                        {specialtyLinks.map(({ label, sub, to, Icon }, i) => (
                          <NavLink
                            key={to}
                            to={to}
                            role="menuitem"
                            onClick={() => setSpecOpen(false)}
                            className={({ isActive }) =>
                              `group flex items-center gap-3 p-3 rounded-xl transition-colors ${
                                isActive ? 'bg-[var(--teal-soft)]' : 'hover:bg-[var(--soft)]'
                              }`
                            }
                            style={{ gridColumn: i === 6 ? 'span 2' : undefined }}
                          >
                            <span className="w-9 h-9 rounded-lg bg-[var(--teal-soft)] flex items-center justify-center shrink-0 group-hover:bg-[var(--teal-tint)] transition-colors">
                              <Icon s={18} c="var(--teal)" />
                            </span>
                            <span className="flex flex-col">
                              <span className="text-[13px] font-medium text-[var(--navy)] leading-tight">{label}</span>
                              <span className="text-[11px] text-[var(--muted)] mt-0.5">{sub}</span>
                            </span>
                          </NavLink>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {mainLinks.slice(2).map(({ label, to }) => (
                <NavLink key={to} to={to} className={navLinkCls}>
                  {label}
                </NavLink>
              ))}
            </nav>
          </div>

          {/* CTAs */}
          <div className="flex items-center gap-2 shrink-0 ml-6">

            {/* Call */}
            <a
              href={`tel:${PHONE}`}
              aria-label={`Call UniCare Hospitals: ${PHONE_DISPLAY}`}
              className={`inline-flex items-center gap-2 rounded-full border-[1.5px] px-4 py-2.5 2xl:px-5 2xl:py-3 text-[13px] 2xl:text-[15px] font-medium whitespace-nowrap transition-all cursor-pointer ${
                pinned
                  ? 'border-[var(--navy)] text-[var(--navy)] hover:bg-[var(--navy)] hover:text-white'
                  : 'border-white/60 text-white hover:bg-white/15'
              }`}
            >
              <Phone s={14} c="currentColor" />
              Call
            </a>

            {/* WhatsApp — always green */}
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat with UniCare on WhatsApp"
              className="inline-flex items-center gap-2 rounded-full px-4 py-2.5 2xl:px-5 2xl:py-3 text-[13px] 2xl:text-[15px] font-medium text-white whitespace-nowrap transition-colors cursor-pointer hover:opacity-90"
              style={{ background: '#25D366' }}
            >
              <WhatsAppIc s={15} c="#fff" />
              WhatsApp
            </a>

            {/* Book Appointment */}
            <Link
              to="/book-an-appointment"
              className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 2xl:px-6 2xl:py-3 text-[13.5px] 2xl:text-[15px] font-semibold text-white whitespace-nowrap transition-all cursor-pointer ${
                pinned
                  ? 'bg-[var(--teal)] hover:bg-[var(--teal-2)]'
                  : 'bg-white/20 border border-white/40 hover:bg-white/30'
              }`}
              style={pinned ? { boxShadow: '0 4px 14px rgba(44,170,160,0.35)' } : {}}
            >
              <CalendarCheck s={14} c="#fff" />
              Book Appointment
            </Link>
          </div>
        </div>

        {/* ── Mobile bar ── */}
        <div className="xl:hidden flex items-center justify-between px-4 h-[64px]">
          <Link to="/" aria-label="UniCare Hospitals — Home" className="shrink-0">
            <Logo horizontal className={`h-10 w-auto transition-all duration-300 ${!pinned ? 'brightness-0 invert' : ''}`} />
          </Link>
          <button
            onClick={() => setMobileOpen(o => !o)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            className="w-10 h-10 rounded-full flex items-center justify-center transition-colors cursor-pointer"
            style={{ background: pinned ? 'rgba(1,34,87,0.08)' : 'rgba(255,255,255,0.18)' }}
          >
            <Menu s={17} c={pinned ? '#012257' : '#fff'} />
          </button>
        </div>
      </motion.header>

      {/* Mobile drawer — rendered into document.body via portal */}
      <MobileDrawer
        isOpen={mobileOpen}
        onClose={() => setMobileOpen(false)}
        isSpecActive={isSpecActive}
      />
    </>
  );
}
