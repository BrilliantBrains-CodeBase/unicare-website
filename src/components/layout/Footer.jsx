import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Logo from '../Logo';
import { Phone, Mail, Pin, Clock, InstaIc, XIc, FbIc, LinkedInIc, ArrowRight, ChevronRight } from '../icons';
import { fadeUp, scaleIn, stagger, vp } from '../../lib/animations';

const PHONE        = '+919090546363';
const PHONE_DISPLAY = '+91 90905 46363';
const EMAIL        = 'info@unicareglobalhospitals.com';

const generalLinks = [
  { label: 'Home',             to: '/' },
  { label: 'About Us',         to: '/about' },
  { label: 'Meet the Doctors', to: '/doctors' },
  { label: 'Health Packages',  to: '/packages' },
  { label: 'Blog',             to: '/blog' },
  { label: 'Contact',          to: '/contact' },
  { label: 'Book Appointment', to: '/book-appointment' },
];

const specialtyLinks = [
  { label: "Maternity & Women's Health", to: '/specialties/maternity' },
  { label: 'Paediatrics',                to: '/specialties/paediatrics' },
  { label: 'Orthopaedics',               to: '/specialties/orthopaedics' },
  { label: 'General Medicine',           to: '/specialties/general-medicine' },
  { label: 'General Surgery',            to: '/specialties/general-surgery' },
  { label: 'Pharmacy',                   to: '/specialties/pharmacy' },
  { label: 'Diagnostics & Lab',          to: '/specialties/diagnostics' },
];

const socialLinks = [
  { label: 'Instagram', href: 'https://www.instagram.com/unicarehospital_/', Icon: InstaIc },
  { label: 'X',         href: 'https://x.com/unicarehyd',                    Icon: XIc },
  { label: 'Facebook',  href: 'https://www.facebook.com/profile.php?id=61589321121365', Icon: FbIc },
  { label: 'LinkedIn',  href: 'https://linkedin.com/company/unicare-hospital-hyd/',     Icon: LinkedInIc },
];

const iconStagger = stagger(0.06, 0.08);

export default function Footer() {
  return (
    <footer role="contentinfo" className="bg-white border-t border-(--line)">
      {/* ── Main grid ── */}
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 pt-14 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">

          {/* Col 1 — Brand */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={vp}>
            <Logo horizontal className="h-10 w-auto mb-4" />
            <p className="text-[13px] text-(--muted) leading-relaxed mb-5 max-w-[220px]">
              Expert Care, Close to Home. A family hospital in Kokapet, Hyderabad. Founded by practising doctors.
            </p>
            {/* Social row */}
            <motion.div
              className="flex items-center gap-2.5"
              variants={iconStagger}
              initial="hidden"
              whileInView="visible"
              viewport={vp}
            >
              {socialLinks.map(({ label, href, Icon }) => (
                <motion.a
                  key={label}
                  variants={scaleIn}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`UniCare on ${label}`}
                  className="w-8 h-8 rounded-full border border-(--line) flex items-center justify-center text-(--navy) hover:bg-(--soft) transition-colors"
                >
                  <Icon s={13} c="#012257" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Col 2 — Quick Links */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={vp}>
            <h3 className="text-[12px] font-semibold uppercase tracking-widest text-(--navy) mb-4">Quick Links</h3>
            <ul className="space-y-2" role="list">
              {generalLinks.map(({ label, to }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="text-[13px] text-(--muted) hover:text-(--navy) transition-colors flex items-center gap-1.5 group"
                  >
                    <ArrowRight s={11} c="var(--teal)" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Col 3 — Contact */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={vp}>
            <h3 className="text-[12px] font-semibold uppercase tracking-widest text-(--navy) mb-4">Contact Us</h3>

            <ul className="space-y-2.5" role="list">
              <li>
                <a href={`mailto:${EMAIL}`} className="flex items-center gap-2 text-(--muted) hover:text-(--navy) transition-colors group">
                  <Mail s={13} c="var(--teal)" />
                  <span className="text-[12.5px] group-hover:underline truncate">{EMAIL}</span>
                </a>
              </li>
              <li className="flex items-start gap-2 text-(--muted)">
                <Pin s={13} c="var(--teal)" className="mt-0.5 shrink-0" />
                <span className="text-[12.5px]">Kokapet, Hyderabad, Telangana</span>
              </li>
              <li className="flex items-start gap-2 text-(--muted)">
                <Clock s={13} c="var(--teal)" className="mt-0.5 shrink-0" />
                <span className="text-[12.5px]">OPD Mon–Sat 9 AM–7 PM · Emergency & Pharmacy 24×7</span>
              </li>
            </ul>
          </motion.div>

          {/* Col 4 — Specialties */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={vp}>
            <h3 className="text-[12px] font-semibold uppercase tracking-widest text-(--navy) mb-4">Specialties</h3>
            <ul className="space-y-2" role="list">
              <li>
                <Link
                  to="/specialties"
                  className="text-[13px] font-semibold text-(--navy) hover:text-(--teal) transition-colors flex items-center gap-1.5 mb-1"
                >
                  All Specialties <ChevronRight s={11} c="var(--teal)" />
                </Link>
              </li>
              {specialtyLinks.map(({ label, to }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="text-[12.5px] text-(--muted) hover:text-(--navy) transition-colors flex items-center gap-1.5"
                  >
                    <ArrowRight s={10} c="var(--teal)" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>

      {/* ── Marquee ── */}
      <div className="overflow-hidden border-t border-(--line) py-5" aria-hidden="true">
        <div className="marquee-track flex whitespace-nowrap" style={{ animation: 'marquee 20s linear infinite' }}>
          {[0, 1].map(i => (
            <span
              key={i}
              className="font-display leading-[0.9] tracking-[-0.04em] shrink-0 pr-16 select-none"
              style={{ color: 'var(--navy)', fontSize: 'clamp(48px, 10vw, 160px)', fontWeight: 700 }}
            >
              UNICARE HOSPITALS
            </span>
          ))}
        </div>
      </div>

      {/* ── Bottom strip ── */}
      <div className="border-t border-(--line)">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-[12px] text-(--muted)">
          <span>© 2026 UniCare Hospitals. All rights reserved.</span>
          <div className="flex items-center gap-4">
            <Link to="/privacy-policy" className="hover:text-(--navy) transition-colors">Privacy Policy</Link>
            <Link to="/sitemap" className="hover:text-(--navy) transition-colors">Sitemap</Link>
            <a
              href={`tel:${PHONE}`}
              className="flex items-center gap-1.5 font-medium text-(--navy) hover:underline"
              aria-label={`Emergency: call ${PHONE_DISPLAY}`}
            >
              <Phone s={11} c="var(--teal)" />
              {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
