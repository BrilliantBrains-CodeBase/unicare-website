import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeUp, slideRight, scaleIn, stagger, vp } from '../../../lib/animations';
import surgeryImg  from '../../../assets/surgery-ot.png';
import maternityImg from '../../../assets/maternity.png';


const TAB_CONTENT = {
  mission: {
    headingRegular: 'Specialist-grade care,',
    headingBold: 'with neighbourhood warmth.',
    body: 'To deliver specialist-grade medical care with the warmth and familiarity of a neighbourhood hospital, accessible to every family within our community, every single day.',
    isBlockquote: true,
  },
  vision: {
    headingRegular: 'The most trusted name',
    headingBold: 'in West Hyderabad healthcare.',
    body: 'To become the most trusted name in family healthcare across West Hyderabad, one honest consultation at a time.',
    isBlockquote: false,
  },
};

export default function MissionVision() {
  const [tab, setTab] = useState('mission');
  const content = TAB_CONTENT[tab];

  return (
    <>
      {/* ── SUB-SECTION A: image collage + text ── */}
      <section className="bg-white pt-0 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-10">
        <div className="max-w-330 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">

            {/* LEFT — content: stagger parent */}
            <motion.div
              className="pt-0 lg:pt-4"
              variants={stagger(0.09, 0.05)}
              initial="hidden"
              whileInView="visible"
              viewport={vp}
            >
              {/* Pill tab toggle */}
              <motion.div variants={fadeUp} className="inline-flex items-center rounded-full p-1 mb-6" style={{ background: 'var(--soft)' }}>
                {['mission', 'vision'].map(t => (
                  <button
                    key={t}
                    onClick={() => setTab(t)}
                    className="relative rounded-full text-[13px] font-semibold transition-colors cursor-pointer"
                    style={{
                      padding: '10px 20px',
                      minHeight: 44,
                      color: tab === t ? '#fff' : 'var(--muted)',
                    }}
                    aria-pressed={tab === t}
                  >
                    {tab === t && (
                      <motion.span
                        layoutId="mv-pill-bg"
                        className="absolute inset-0 rounded-full"
                        style={{ background: 'var(--navy)' }}
                        transition={{ type: 'spring', stiffness: 400, damping: 35 }}
                      />
                    )}
                    <span className="relative z-10">
                      {t === 'mission' ? 'Our Mission' : 'Our Vision'}
                    </span>
                  </button>
                ))}
              </motion.div>

              {/* Animated content block */}
              <motion.div variants={fadeUp}>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={tab}
                    initial={{ opacity: 0, x: 12 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -12, transition: { duration: 0.13, ease: [0.22, 1, 0.36, 1] } }}
                    transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <h2
                      className="font-display leading-[1.1] mb-6"
                      style={{ color: 'var(--navy)', fontSize: 'clamp(28px, 4.5vw, 46px)' }}
                    >
                      <span className="font-normal">{content.headingRegular} </span>
                      <span className="font-bold">{content.headingBold}</span>
                    </h2>

                    {content.isBlockquote ? (
                      <blockquote
                        className="text-[15px] sm:text-[16px] leading-[1.8] pl-5 mb-6"
                        style={{
                          color: 'var(--muted)',
                          borderLeft: '3px solid var(--teal)',
                        }}
                      >
                        {content.body}
                      </blockquote>
                    ) : (
                      <p className="text-[15px] sm:text-[16px] leading-[1.75] mb-6" style={{ color: 'var(--muted)' }}>
                        {content.body}
                      </p>
                    )}
                  </motion.div>
                </AnimatePresence>
              </motion.div>

              {/* Promise — always visible */}
              <motion.p variants={fadeUp} className="text-[15px] sm:text-[16px] leading-[1.75]" style={{ color: 'var(--muted)' }}>
                Every patient who walks into Unicare will feel seen, heard and cared for by professionals who know their name, in a facility that matches the premium standards of the neighbourhood it serves.
              </motion.p>
            </motion.div>

            {/* RIGHT — image collage: slides in from right */}
            <motion.div
              className="relative min-h-[420px] sm:min-h-[480px]"
              variants={slideRight}
              initial="hidden"
              whileInView="visible"
              viewport={vp}
            >
              {/* Main tall image — left 65% */}
              <div className="absolute inset-0" style={{ right: '35%' }}>
                <img
                  src={surgeryImg}
                  alt="UniCare Hospitals surgical team"
                  className="w-full h-full object-cover object-center rounded-[20px]"
                  loading="lazy"
                />
              </div>

              {/* Secondary image — bottom-right, overlapping — pops in after main */}
              <motion.div
                className="absolute bottom-0 right-0 w-[48%] h-[56%] z-10"
                style={{ marginLeft: -12 }}
                variants={scaleIn}
                transition={{ delay: 0.25 }}
              >
                <img
                  src={maternityImg}
                  alt="Maternity care at UniCare Hospitals"
                  className="w-full h-full object-cover object-center rounded-[20px]"
                  loading="lazy"
                />
              </motion.div>
            </motion.div>

          </div>
        </div>
      </section>

    </>
  );
}
