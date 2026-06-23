import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeUp, vp } from '../../../lib/animations';
import { IconChevronDown, IconChevronUp } from '@tabler/icons-react';
import faqImg from '../../../assets/faq.jpg';

const faqs = [
  {
    id: 'faq1',
    q: 'Which is the best multispecialty hospital in Kokapet?',
    a: 'Unicare Hospitals is a doctor-founded multispecialty hospital in Kokapet, Hyderabad, offering maternity, pediatrics, general and laparoscopic surgery, endocrinology, orthopedics, general medicine, pharmacy and diagnostics in one location, with founder doctors leading clinical care.',
  },
  {
    id: 'faq2',
    q: 'Do Unicare Hospitals accept health insurance?',
    a: 'Yes. Unicare Hospitals works with leading health insurance providers and TPAs. The full list of empanelled insurers is available on our website and at the front desk, and our team assists with cashless and reimbursement processes.',
  },
  {
    id: 'faq3',
    q: 'How do I book an appointment at Unicare Hospitals Kokapet?',
    a: 'You can book an appointment by calling +91 90905 46363, messaging us on WhatsApp, or using the Book an Appointment form on our website. Our team confirms your slot the same day.',
  },
];

export default function FAQSection() {
  const [openId, setOpenId] = useState('faq1');

  return (
    <section className="pb-24 2xl:pb-32 overflow-hidden">
      <div className="max-w-330 2xl:max-w-400 mx-auto px-4 sm:px-6 lg:px-8 2xl:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-0 lg:items-start">

          {/* ── Left: full-height image — hidden on xs, visible sm+ ── */}
          <motion.div
            className="hidden sm:block lg:pr-8"
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={vp}
          >
            <img
              src={faqImg}
              alt="UniCare Hospitals FAQ"
              className="w-full rounded-[20px] object-cover aspect-4/3"
              loading="lazy"
            />
          </motion.div>

          {/* ── Right: accordion ── */}
          <motion.div
            className="lg:pl-6"
            style={{ maxWidth: 635 }}
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={vp}
          >
            {/* Heading */}
            <div style={{ marginBottom: 'clamp(40px, 6vw, 80px)' }}>
              <span
                className="block text-[12px] font-bold tracking-[1.2px] uppercase mb-4"
                style={{ color: 'var(--teal)' }}
              >
                FAQ
              </span>
              <h2
                className="leading-[1.3] mb-0"
                style={{ fontSize: 'clamp(28px, 3vw, 52px)', color: 'var(--navy)' }}
              >
                We Are Here{' '}
                <strong className="font-extrabold">To Answer Your Questions</strong>
              </h2>
            </div>

            {/* Accordion */}
            <div>
              {faqs.map((faq, idx) => {
                const isOpen = openId === faq.id;
                return (
                  <div
                    key={faq.id}
                    className={idx < faqs.length - 1 ? 'mb-[30px] pb-[30px]' : ''}
                    style={idx < faqs.length - 1 ? { borderBottom: '1px solid #F2F4F6' } : {}}
                  >
                    {/* Question button */}
                    <button
                      type="button"
                      onClick={() => setOpenId(isOpen ? null : faq.id)}
                      className="w-full flex items-start justify-between gap-4 text-left cursor-pointer bg-transparent border-0 outline-none"
                      style={{ padding: 0 }}
                      aria-expanded={isOpen}
                    >
                      <span
                        className="text-[18px] 2xl:text-[22px] font-bold leading-snug"
                        style={{ color: 'var(--navy)' }}
                      >
                        {faq.q}
                      </span>
                      <span className="shrink-0 mt-0.5" style={{ color: '#627C95' }}>
                        {isOpen
                          ? <IconChevronUp size={20} />
                          : <IconChevronDown size={20} />
                        }
                      </span>
                    </button>

                    {/* Answer — animated expand/collapse */}
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25, ease: 'easeOut' }}
                          className="overflow-hidden"
                        >
                          <p
                            className="text-[15px] leading-relaxed mb-0"
                            style={{ paddingTop: 17, color: 'var(--muted)' }}
                          >
                            {faq.a}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
