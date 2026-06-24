import { motion } from 'framer-motion';
import { fadeUp, vp } from '../../../lib/animations';
import mobileAppImg       from '../../../assets/mobile-app.jpg';
import googlePlayBadge    from '../../../assets/google-play-badge.svg';
import drVaruna  from '../../../assets/Dr.Varuna.png';
import drDeeepak from '../../../assets/Dr.Deepak.png';
import drVeena   from '../../../assets/Dr.Veena.png';
import drNitin   from '../../../assets/Dr.Nitin.png';

const doctorAvatars = [drVaruna, drDeeepak, drVeena, drNitin];
const doctorNames   = ['Dr. Varuna Vyas', 'Dr. Deepak Thiriveedi', 'Dr. Mareddy Veena', 'Dr. M. Nitin Rao'];

const APPLE_BADGE = 'https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg';

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
            <h2 className="h2-two-lines font-normal mb-0" style={{ color: 'var(--navy)' }}>
              Download Our Mobile App For The{' '}
              <strong className="font-bold">Best Experience</strong>
            </h2>

            {/* Info row — 4 overlapping doctor circles */}
            <div className="flex items-center mt-6 mb-9">
              <div className="flex shrink-0">
                {doctorAvatars.map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt={doctorNames[i]}
                    className="w-11 h-11 rounded-full object-cover object-top border-2 border-[#C4DCF3]"
                    style={{ marginLeft: i === 0 ? 0 : -12 }}
                    loading="lazy"
                  />
                ))}
              </div>
              <div className="ml-4">
                <h5 className="text-[14px] font-semibold mb-0" style={{ color: 'var(--navy)' }}>
                  All your favorite doctors
                </h5>
                <span className="block text-[14px] mt-1" style={{ color: 'var(--muted)' }}>
                  are available in the app
                </span>
              </div>
            </div>

            {/* Official app store badges */}
            <div className="flex flex-col gap-3">
              <a href="#" target="_blank" rel="noopener noreferrer"
                 className="transition-opacity hover:opacity-85 cursor-pointer">
                <img src={googlePlayBadge} alt="Get it on Google Play"
                     className="w-40 h-auto" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer"
                 className="transition-opacity hover:opacity-85 cursor-pointer">
                <img src={APPLE_BADGE} alt="Download on the App Store"
                     className="w-40 h-auto" />
              </a>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
