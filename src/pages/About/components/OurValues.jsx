import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import {
  IconStar,
  IconMapPin,
  IconMessageCircle,
  IconHeartHandshake,
  IconShieldHeart,
} from '@tabler/icons-react';
import { fadeUp, vp } from '../../../lib/animations';

const VALUES = [
  {
    bg: '#D6E8F5',
    bubble: '#BFDBF0',
    Icon: IconStar,
    name: 'Excellence',
    desc: 'The highest clinical standards, without exception.',
  },
  {
    bg: '#D5EDE5',
    bubble: '#B8E0D2',
    Icon: IconMapPin,
    name: 'Proximity',
    desc: 'Always close, physically and emotionally.',
  },
  {
    bg: '#E2D9F3',
    bubble: '#CFC3EC',
    Icon: IconMessageCircle,
    name: 'Transparency',
    desc: 'Honest communication at every touchpoint.',
  },
  {
    bg: '#FAE0DA',
    bubble: '#F4C4BA',
    Icon: IconHeartHandshake,
    name: 'Compassion',
    desc: 'We see the person, not just the patient.',
  },
  {
    bg: '#D5ECE9',
    bubble: '#B8DDD9',
    Icon: IconShieldHeart,
    name: 'Trust',
    desc: 'Built through consistency, never claimed through advertising.',
  },
];

function ValueCard({ v }) {
  return (
    <div
      className="rounded-[24px] p-7 relative overflow-hidden flex flex-col gap-6 h-full"
      style={{ background: v.bg }}
    >
      {/* Decorative circles — top right */}
      <span className="absolute -top-6 -right-6 w-24 h-24 rounded-full" style={{ background: v.bubble, opacity: 0.6 }} />
      <span className="absolute -top-2 right-6 w-14 h-14 rounded-full" style={{ background: v.bubble, opacity: 0.45 }} />
      <span className="absolute top-8 -right-2 w-8 h-8 rounded-full" style={{ background: v.bubble, opacity: 0.35 }} />

      {/* Icon */}
      <div className="relative z-10">
        <v.Icon size={28} color="var(--navy)" stroke={1.6} />
      </div>

      {/* Text */}
      <div className="relative z-10 flex flex-col gap-3">
        <p className="text-[12px] tracking-[0.2em] uppercase font-bold" style={{ color: 'var(--navy)' }}>
          {v.name}
        </p>
        <p className="text-[14px] sm:text-[15px] leading-[1.72]" style={{ color: 'var(--muted)' }}>
          {v.desc}
        </p>
      </div>
    </div>
  );
}

export default function OurValues() {
  return (
    <section className="bg-white px-4 sm:px-6 lg:px-10 pt-0 pb-4">
      <div className="max-w-330 mx-auto">

        <motion.div
          className="text-center mb-12"
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={vp}
        >
          <p className="text-[12px] font-bold tracking-[0.2em] uppercase mb-4" style={{ color: 'var(--teal)' }}>
            OUR VALUES
          </p>
          <h2
            className="font-display leading-[1.1]"
            style={{ color: 'var(--navy)', fontSize: 'clamp(28px, 4vw, 44px)' }}
          >
            <span className="font-normal">Built on five </span>
            <span className="font-bold">core principles.</span>
          </h2>
        </motion.div>

        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={vp} transition={{ delay: 0.15 }}>
          <Swiper
            modules={[Autoplay]}
            slidesPerView={1.2}
            spaceBetween={16}
            loop
            autoplay={{ delay: 2600, disableOnInteraction: false }}
            breakpoints={{
              540:  { slidesPerView: 2.2, spaceBetween: 18 },
              900:  { slidesPerView: 3,   spaceBetween: 20 },
              1200: { slidesPerView: 3.5, spaceBetween: 20 },
            }}
          >
            {[...VALUES, ...VALUES].map((v, i) => (
              <SwiperSlide key={i} style={{ height: 'auto' }}>
                <ValueCard v={v} />
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

      </div>
    </section>
  );
}
