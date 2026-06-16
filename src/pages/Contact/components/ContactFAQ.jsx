import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from '../../../components/icons';
import { fadeUp, stagger, vp } from '../../../lib/animations';

const container = stagger(0.06);

export default function ContactFAQ({ faqs }) {
  const [openIndex, setOpenIndex] = useState(null);

  if (!faqs || faqs.length === 0) return null;

  return (
    <section className="px-4 sm:px-6 lg:px-10 py-12 sm:py-16">
      <div className="max-w-330 mx-auto">

        <motion.div
          className="flex flex-col items-center text-center mb-8 md:mb-10"
          variants={stagger(0.1, 0)}
          initial="hidden"
          whileInView="visible"
          viewport={vp}
        >
          <motion.span variants={fadeUp} className="pill text-[12px]">FAQs</motion.span>
          <motion.h2
            variants={fadeUp}
            className="font-display text-[28px] md:text-[38px] lg:text-[46px] leading-[1.08] mt-4"
            style={{ color: 'var(--navy)' }}
          >
            Frequently Asked Questions
          </motion.h2>
        </motion.div>

        <motion.div
          className="flex flex-col gap-3 max-w-220 mx-auto"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={vp}
        >
          {faqs.map(({ question, answer }, i) => {
            const isOpen = openIndex === i;
            return (
              <motion.div
                key={i}
                variants={fadeUp}
                className="border border-(--line) rounded-2xl overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-5 py-4 sm:py-5 text-left bg-white hover:bg-(--teal-soft)/40 transition-colors cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="text-[14.5px] sm:text-[15px] font-semibold text-(--navy) leading-snug">
                    {question}
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="shrink-0"
                  >
                    <ChevronDown s={15} c="var(--teal)" />
                  </motion.span>
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 bg-white">
                    <p className="text-[14px] text-(--muted) leading-relaxed">
                      {answer}
                    </p>
                  </div>
                )}
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
