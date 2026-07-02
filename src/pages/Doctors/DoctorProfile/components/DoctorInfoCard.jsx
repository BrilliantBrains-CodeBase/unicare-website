import { motion } from 'framer-motion';
import { InstaIc, XIc, FbIc, LinkedInIc } from '../../../../components/icons';
import { fadeUp, vp } from '../../../../lib/animations';

const socialLinks = [
  { label: 'Instagram', href: 'https://www.instagram.com/unicarehospitals/', Icon: InstaIc },
  { label: 'X',         href: 'https://x.com/unicarehyd',                    Icon: XIc },
  { label: 'Facebook',  href: 'https://www.facebook.com/profile.php?id=61589321121365', Icon: FbIc },
  { label: 'LinkedIn',  href: 'https://linkedin.com/company/unicare-hospital-hyd/',     Icon: LinkedInIc },
];

function SocialRow({ className = '' }) {
  return (
    <div className={`flex items-center gap-2 rounded-full border border-(--line) bg-white pl-3 pr-2 py-2 ${className}`}>
      <span className="text-[11px] font-medium text-(--muted) whitespace-nowrap">Follow UniCare</span>
      {socialLinks.map(({ label, href, Icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`UniCare on ${label}`}
          className="w-8 h-8 rounded-full flex items-center justify-center text-(--navy) hover:bg-(--soft) transition-colors shrink-0"
          style={{ background: 'var(--teal-soft)' }}
        >
          <Icon s={13} c="var(--navy)" />
        </a>
      ))}
    </div>
  );
}

export default function DoctorInfoCard({ doctor }) {
  const shortRole = doctor.role.split('—')[1]?.trim() ?? doctor.role;

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={vp}
      className="rounded-[26px] p-6 sm:p-8 lg:p-10 relative"
      style={{ background: 'var(--soft)' }}
    >
      {/* Desktop social row */}
      <SocialRow className="hidden lg:flex absolute top-8 right-8" />

      <h1
        className="font-display text-[32px] sm:text-[40px] lg:text-[44px] font-bold leading-[1.1] pr-0 lg:pr-56"
        style={{ color: 'var(--navy)' }}
      >
        {doctor.name}
      </h1>
      <p className="text-[15px] sm:text-[16px] font-semibold mt-2" style={{ color: 'var(--teal)' }}>
        {shortRole}
      </p>

      {/* Mobile social row */}
      <SocialRow className="lg:hidden mt-6 w-fit" />
    </motion.div>
  );
}
