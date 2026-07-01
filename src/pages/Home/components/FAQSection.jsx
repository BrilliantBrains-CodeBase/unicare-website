import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeUp, vp } from '../../../lib/animations';
import { IconChevronDown, IconChevronUp } from '@tabler/icons-react';
import faqImg from '../../../assets/faq.jpg';

const faqs = [
  {
    id: 'faq1',
    q: 'Which is the best multispecialty hospital in Kokapet?',
    a: 'UniCare Hospitals is a doctor-founded multispecialty hospital in Kokapet, Hyderabad, offering maternity, pediatrics, general and laparoscopic surgery, endocrinology, orthopedics, general medicine, pharmacy and diagnostics in one location, with founder doctors leading clinical care.',
  },
  {
    id: 'faq2',
    q: 'Do UniCare Hospitals accept health insurance?',
    a: 'Yes. UniCare Hospitals works with leading health insurance providers and TPAs. The full list of empanelled insurers is available on our website and at the front desk, and our team assists with cashless and reimbursement processes.',
  },
  {
    id: 'faq4',
    q: 'Can the whole family be treated at UniCare Hospitals?',
    a: 'Yes. UniCare is designed as a family hospital. We care for patients across all age groups, from newborns and young children to adults and seniors. Our multispecialty setup means most of your family\'s healthcare needs can be addressed under one roof, without needing to visit multiple facilities.',
  },
  {
    id: 'faq5',
    q: 'Is the hospital clean, well-maintained, and patient-friendly?',
    a: 'UniCare Hospitals is a premium facility built to provide a comfortable and reassuring environment for patients and their families. The infrastructure is modern, well-maintained, and designed to feel welcoming rather than clinical. Patient comfort and hygiene are a core part of how we operate.',
  },
  {
    id: 'faq6',
    q: 'How can I contact UniCare Hospitals for any queries?',
    a: 'You can reach us by calling +91 90905 46363. Our team is available during hospital hours to assist with appointments, general queries, and directions.',
  },
];

function renderAnswer(text) {
  const phoneRegex = /(\+?[\d\s]{10,14})/g;
  const parts = text.split(phoneRegex);
  return parts.map((part, i) =>
    phoneRegex.test(part)
      ? <a key={i} href={`tel:${part.replace(/\s/g, '')}`} className="font-medium hover:underline" style={{ color: 'var(--teal)' }}>{part}</a>
      : part
  );
}

export default function FAQSection() {
  const [openId, setOpenId] = useState('faq1');

  return (
    <section className="pb-24 2xl:pb-32 overflow-hidden">
      <div className="max-w-330 2xl:max-w-400 mx-auto px-4 sm:px-6 lg:px-8 2xl:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-0 lg:items-center">

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
                className="h2-two-lines font-normal mb-0"
                style={{ color: 'var(--navy)' }}
              >
                We Are Here{' '}
                <strong className="font-bold">To Answer Your Questions</strong>
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
                            {renderAnswer(faq.a)}
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
