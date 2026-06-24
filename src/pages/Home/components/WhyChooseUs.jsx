import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import { fadeUp, vp } from '../../../lib/animations';
import { ArrowRight } from '../../../components/icons';

import img1 from '../../../assets/img1.png';
import img2 from '../../../assets/img2.png';
import img3 from '../../../assets/img3.png';

const cards = [
  {
    bg: '#2CAAA0',          // teal — brand primary
    title: 'Founded &',
    titleBold: 'Run by Doctors',
    text: 'You see the same specialist every visit, not a different junior doctor each time. The founders are on the floor, every day.',
    img: img1,
  },
  {
    bg: '#012257',          // navy — brand secondary
    title: 'Genuinely',
    titleBold: 'Close to Home',
    text: 'Located in Kokapet, minutes from Narsingi, Gachibowli, Financial District, Nanakramguda and Manikonda. No ORR traffic when it matters most.',
    img: img2,
  },
  {
    bg: '#E67A66',          // warm coral — accent
    title: 'Everything',
    titleBold: 'In One Place',
    text: 'Consultation, diagnostics, pharmacy and procedures under one roof, so one visit does the work of three.',
    img: img3,
  },
];

function OverviewCard({ card }) {
  return (
    <div
      className="rounded-[20px] overflow-hidden flex flex-row items-center gap-0"
      style={{ background: card.bg }}
    >
      {/* Left — content */}
      <div className="flex-1 min-w-0 px-5 py-6">
        <h3 className="text-[18px] leading-[1.35] text-white mb-2">
          {card.title}
          <strong className="font-black block">{card.titleBold}</strong>
        </h3>
        <p className="text-[13px] leading-relaxed" style={{ color: 'rgba(255,255,255,0.80)' }}>
          {card.text}
        </p>
      </div>

      {/* Right — small decorative graphic */}
      <div className="shrink-0 flex items-center justify-center pr-4 opacity-80 pointer-events-none select-none">
        <img src={card.img} alt="" aria-hidden="true" className="w-16 h-auto" />
      </div>
    </div>
  );
}

export default function WhyChooseUs() {
  return (
    <section className="pb-10">

      {/* Heading */}
      <motion.div
        className="max-w-[635px] mx-auto px-6 text-center mb-12"
        variants={fadeUp} initial="hidden" whileInView="visible" viewport={vp}
      >
        <span className="block text-[12px] font-bold tracking-[1.2px] uppercase mb-3" style={{ color: 'var(--teal)' }}>
          Why Choose UniCare
        </span>
        <h2 className="h2-two-lines font-bold" style={{ color: 'var(--navy)' }}>
          Why are Kokapet families{' '}
          <strong className="font-extrabold">switching to Unicare?</strong>
        </h2>
      </motion.div>

      {/* Cards */}
      {/* Max-width cap so each card never exceeds ~360px */}
      <div className="max-w-7xl mx-auto px-6">

        {/* 3 horizontal rectangle cards inline */}
        <motion.div
          className="hidden md:grid md:grid-cols-3 gap-5"
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={vp}
        >
          {cards.map((card, i) => (
            <OverviewCard key={i} card={card} />
          ))}
        </motion.div>

        {/* Mobile: Swiper carousel */}
        <div className="md:hidden">
          <Swiper
            modules={[Autoplay]}
            slidesPerView={1.1}
            centeredSlides
            spaceBetween={16}
            loop
            autoplay={{ delay: 2800, disableOnInteraction: false }}
          >
            {[...cards, ...cards].map((card, i) => (
              <SwiperSlide key={i}>
                <OverviewCard card={card} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Common Learn More pill */}
        <motion.div
          className="text-center mt-10"
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={vp}
        >
          <Link
            to="/about-us"
            className="inline-flex items-center gap-2 rounded-full border-[1.5px] border-(--navy) px-6 py-2.5 text-[14px] font-semibold text-(--navy) hover:bg-(--navy) hover:text-white transition-all"
          >
            <ArrowRight s={15} c="currentColor" />
            Learn More About UniCare
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
