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
    // aspect-square keeps all 3 cards perfectly square at any screen width
    <div
      className="rounded-[20px] relative overflow-hidden aspect-square"
      style={{ background: card.bg, padding: 'clamp(24px, 3vw, 44px)' }}
    >
      {/* Title */}
      <h3 className="text-[22px] 2xl:text-[26px] leading-[1.4] text-white mb-3">
        {card.title}
        <strong className="font-black block">{card.titleBold}</strong>
      </h3>

      {/* Body */}
      <p className="text-[14px] leading-relaxed" style={{ color: 'rgba(255,255,255,0.80)' }}>
        {card.text}
      </p>

      {/* Decorative image — absolute bottom-right */}
      <div className="absolute bottom-6 right-6 pointer-events-none select-none opacity-80">
        <img src={card.img} alt="" aria-hidden="true" />
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
      <div className="max-w-330 2xl:max-w-400 mx-auto px-6 2xl:px-20">

        {/* Desktop: 3-col grid */}
        <motion.div
          className="hidden md:grid md:grid-cols-3 gap-6 2xl:gap-8"
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
            className="inline-flex items-center gap-2 rounded-full border-[1.5px] border-[var(--navy)] px-6 py-2.5 text-[14px] font-semibold text-[var(--navy)] hover:bg-[var(--navy)] hover:text-white transition-all"
          >
            <ArrowRight s={15} c="currentColor" />
            Learn More About UniCare
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
