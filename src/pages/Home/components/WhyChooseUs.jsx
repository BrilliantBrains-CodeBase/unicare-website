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

// Marquee text — repeated so it scrolls seamlessly
const MARQUEE =
  'Expert Care, Close to Home   ✦   Doctor-Founded Hospital   ✦   Kokapet, Hyderabad   ✦   ' +
  'Expert Care, Close to Home   ✦   Doctor-Founded Hospital   ✦   Kokapet, Hyderabad   ✦   ' +
  'Expert Care, Close to Home   ✦   Doctor-Founded Hospital   ✦   Kokapet, Hyderabad';

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
      className="rounded-[20px] relative overflow-hidden flex flex-col h-full"
      style={{ background: card.bg, padding: 'clamp(30px, 4vw, 50px) clamp(70px, 12vw, 160px) clamp(30px, 4vw, 50px) clamp(24px, 3vw, 45px)' }}
    >
      {/* Title */}
      <h3 className="text-[25px] 2xl:text-[30px] leading-[1.4] text-white mb-4">
        {card.title}
        <strong className="font-black block">{card.titleBold}</strong>
      </h3>

      {/* Body */}
      <p className="text-[15px] leading-relaxed mb-0" style={{ color: 'rgba(255,255,255,0.80)' }}>
        {card.text}
      </p>

      {/* Learn More link — pushed to bottom */}
      <div className="mt-auto pt-20">
        <Link
          to="/about-us"
          className="inline-flex items-center gap-1.5 text-[14.5px] font-semibold text-white hover:gap-3 transition-all"
        >
          <ArrowRight s={16} c="currentColor" />
          Learn More
        </Link>
      </div>

      {/* Decorative image — absolute bottom-right */}
      <div className="absolute bottom-[45px] right-[55px] pointer-events-none select-none">
        <img src={card.img} alt="" aria-hidden="true" />
      </div>
    </div>
  );
}

export default function WhyChooseUs() {
  return (
    <section className="pb-24">

      {/* Sub label */}
      <motion.div
        className="max-w-330 2xl:max-w-400 mx-auto px-6 2xl:px-20 text-center mb-0"
        variants={fadeUp} initial="hidden" whileInView="visible" viewport={vp}
      >
        <span className="block text-[12px] font-bold tracking-[1.2px] uppercase" style={{ color: 'var(--teal)' }}>
          Why Choose UniCare
        </span>
      </motion.div>

      {/* Large scrolling marquee */}
      <div className="overflow-hidden py-10">
        <div
          className="marquee-track whitespace-nowrap font-bold"
          style={{
            fontSize: 'clamp(40px, 7vw, 120px)',
            color: '#D5DAE5',
            lineHeight: 1,
            animation: 'marquee 18s linear infinite',
          }}
        >
          {MARQUEE}
        </div>
      </div>

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
              <SwiperSlide key={i} style={{ height: 'auto' }}>
                <OverviewCard card={card} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>
    </section>
  );
}
