import { motion } from 'framer-motion';
import { fadeUp, vp } from '../../../lib/animations';
import { IconBrandGooglePlay, IconBrandApple } from '@tabler/icons-react';
import mobileAppImg from '../../../assets/mobile-app.jpg';
import userIcon     from '../../../assets/user.png';

const appButtons = [
  {
    icon: IconBrandGooglePlay,
    label: 'GET IT ON',
    store: 'Google Play',
    href: '#',
    bg: '#E67A66',   // coral — optionalColorFour from website-new
  },
  {
    icon: IconBrandApple,
    label: 'GET IT ON',
    store: 'Apple Store',
    href: '#',
    bg: 'var(--navy)',
  },
];

export default function MobileAppSection() {
  return (
    <section className="pb-24 2xl:pb-32">
      <div className="max-w-330 2xl:max-w-400 mx-auto px-4 sm:px-6 2xl:px-20">
        <motion.div
          className="grid grid-cols-1 xl:grid-cols-[1.4fr_1fr] gap-8 2xl:gap-12 xl:items-stretch"
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={vp}
        >

          {/* Left — image */}
          <div className="xl:min-h-0">
            <img
              src={mobileAppImg}
              alt="UniCare Hospitals mobile experience"
              className="w-full h-full rounded-[20px] object-cover"
              loading="lazy"
            />
          </div>

          {/* Right — content card */}
          <div className="rounded-[20px] px-8 sm:px-15 py-12 sm:py-18.75" style={{ background: '#C4DCF3' }}>

            {/* Sub label */}
            <span className="block text-[12px] font-bold tracking-[1.2px] uppercase mb-3" style={{ color: 'var(--teal)' }}>
              Download App
            </span>

            {/* Heading */}
            <h2 className="leading-[1.3] mb-0" style={{ fontSize: 'clamp(28px, 3vw, 52px)', color: 'var(--navy)' }}>
              Download Our Mobile App For The{' '}
              <strong className="font-extrabold">Best Experience</strong>
            </h2>

            {/* Info row */}
            <div className="flex items-center mt-6 mb-9">
              <img src={userIcon} alt="" aria-hidden="true" className="shrink-0" />
              <div className="ml-4">
                <h5 className="text-[14px] font-semibold mb-0" style={{ color: 'var(--navy)' }}>
                  All your favorite doctors
                </h5>
                <span className="block text-[14px] mt-1" style={{ color: 'var(--muted)' }}>
                  are available in the app
                </span>
              </div>
            </div>

            {/* App store buttons — forced 2-col grid so they always sit side by side */}
            <div className="grid grid-cols-2 gap-3">
              {appButtons.map(({ icon: Icon, label, store, href, bg }) => (
                <a
                  key={store}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center rounded-[10px] px-5 py-4 transition-opacity hover:opacity-85 cursor-pointer no-underline"
                  style={{ background: bg }}
                >
                  <Icon size={30} color="#fff" stroke={1.5} />
                  <div className="ml-4">
                    <span className="block text-[12px] text-white mb-1">{label}</span>
                    <h5 className="text-[16px] font-medium text-white mb-0">{store}</h5>
                  </div>
                </a>
              ))}
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
