import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Logo from '../Logo';
import { Phone, Mail, Pin, Globe, InstaIc, XIc, FbIc, LinkedInIc, ArrowRight } from '../icons';
import { fadeUp, scaleIn, stagger, vp } from '../../lib/animations';

const PHONE          = '+919090546363';
const PHONE_DISPLAY  = '+91 90905 46363';
const PHONE_2        = '+919121856565';
const PHONE_2_DISPLAY = '+91 91218 56565';
const EMAIL          = 'info@unicareglobalhospitals.com';
const EMAIL_2        = 'helpdesk@unicareglobalhospitals.com';
const WEBSITE        = 'www.unicareglobalhospitals.com';
const ADDRESS        = 'A 201, 2nd Floor, Saanvi Antalya Homes, Kokapet, Telangana';

const quickLinks = [
  { label: 'Specialties',         to: '/specialties' },
  { label: 'Doctors',             to: '/doctors' },
  { label: 'Book an Appointment', to: '/book-an-appointment' },
  { label: 'Blog',                to: '/blog' },
  { label: 'Contact',             to: '/contact' },
];

const socialLinks = [
  { label: 'Instagram', href: 'https://www.instagram.com/unicarehospitals/', Icon: InstaIc },
  { label: 'X',         href: 'https://x.com/unicarehyd',                    Icon: XIc },
  { label: 'Facebook',  href: 'https://www.facebook.com/profile.php?id=61589321121365', Icon: FbIc },
  { label: 'LinkedIn',  href: 'https://linkedin.com/company/unicare-hospital-hyd/',     Icon: LinkedInIc },
];

const iconStagger = stagger(0.06, 0.08);

export default function Footer() {
  return (
    <footer role="contentinfo" className="bg-white border-t border-(--line)">
      {/* ── Main grid ── */}
      <div className="max-w-[1320px] 2xl:max-w-400 mx-auto px-4 sm:px-6 2xl:px-20 pt-14 2xl:pt-20 pb-10 2xl:pb-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-8 2xl:gap-16">

          {/* Col 1 — Brand */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={vp}>
            <Logo horizontal className="h-10 2xl:h-16 w-auto mb-4" />
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
              {quickLinks.map(({ label, to }) => (
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
              <li className="flex items-start gap-2 text-(--muted)">
                <Pin s={13} c="var(--teal)" className="mt-0.5 shrink-0" />
                <span className="text-[12.5px]">{ADDRESS}</span>
              </li>
              <li className="flex items-start gap-2 text-(--muted)">
                <Phone s={13} c="var(--teal)" className="mt-0.5 shrink-0" />
                <span className="text-[12.5px]">
                  <a href={`tel:${PHONE}`} className="hover:text-(--navy) hover:underline transition-colors">{PHONE_DISPLAY}</a>
                  {', '}
                  <a href={`tel:${PHONE_2}`} className="hover:text-(--navy) hover:underline transition-colors">{PHONE_2_DISPLAY}</a>
                </span>
              </li>
              <li className="flex items-start gap-2 text-(--muted)">
                <Mail s={13} c="var(--teal)" className="mt-0.5 shrink-0" />
                <span className="text-[12.5px] flex flex-col gap-0.5">
                  <a href={`mailto:${EMAIL}`} className="hover:text-(--navy) hover:underline transition-colors truncate">{EMAIL}</a>
                  <a href={`mailto:${EMAIL_2}`} className="hover:text-(--navy) hover:underline transition-colors truncate">{EMAIL_2}</a>
                </span>
              </li>
              <li className="flex items-start gap-2 text-(--muted)">
                <Globe s={13} c="var(--teal)" className="mt-0.5 shrink-0" />
                <a href={`https://${WEBSITE}`} target="_blank" rel="noopener noreferrer" className="text-[12.5px] hover:text-(--navy) hover:underline transition-colors">
                  {WEBSITE}
                </a>
              </li>
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
              style={{ color: 'var(--navy)', fontSize: 'clamp(48px, 10vw, 200px)', fontWeight: 700 }}
            >
              UNICARE HOSPITALS
            </span>
          ))}
        </div>
      </div>

      {/* ── Bottom strip ── */}
      <div className="border-t border-(--line)">
        <div className="max-w-[1320px] 2xl:max-w-400 mx-auto px-4 sm:px-6 2xl:px-20 py-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-[12px] text-(--muted)">
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
            <a
              href={`tel:${PHONE_2}`}
              className="flex items-center gap-1.5 font-medium text-(--navy) hover:underline"
              aria-label={`Emergency: call ${PHONE_2_DISPLAY}`}
            >
              <Phone s={11} c="var(--teal)" />
              {PHONE_2_DISPLAY}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
