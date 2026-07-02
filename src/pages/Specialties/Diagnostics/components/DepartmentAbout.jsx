import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { IconChevronDown, IconChevronUp } from '@tabler/icons-react';
import bannerImg from '../../../../assets/diagnostics.png';
import { fadeUp, vp } from '../../../../lib/animations';

const OTHER_SPECIALTIES = [
  { label: "Maternity & Women's Health",        to: '/specialties/maternity-womens-health' },
  { label: 'Pediatrics',                        to: '/specialties/pediatrics' },
  { label: 'Orthopedics',                       to: '/specialties/orthopedics' },
  { label: 'General Medicine & Endocrinology',  to: '/specialties/general-medicine-endocrinology' },
  { label: 'General & Minimal Access Surgery',  to: '/specialties/general-minimal-access-surgery' },
  { label: 'Pharmacy',                          to: '/specialties/pharmacy' },
];

const SERVICES = [
  'Complete blood counts, fever panels and infection workups',
  'Diabetes monitoring: fasting glucose, HbA1c, lipid profiles',
  'Thyroid and hormonal panels supporting our endocrinology service',
  'Antenatal and maternity test panels',
  'Pre-surgical investigation packages',
  'Preventive health panels for adults and seniors',
];

const FAQS = [
  {
    q: 'Where can I get a blood test done in Kokapet?',
    a: 'Unicare Hospitals in Kokapet has an in-house diagnostic lab offering blood tests, diabetes and thyroid panels, maternity tests and preventive health checks, with same-day reports reviewed by the hospital\'s own doctors. Call +91 90905 46363 to book.',
  },
];

function CheckIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true" className="shrink-0 mt-0.5">
      <circle cx="9" cy="9" r="9" fill="var(--teal)" opacity="0.12" />
      <path d="M5.5 9L7.8 11.5L12.5 6.5" stroke="var(--teal)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function renderAnswer(text) {
  const phoneRegex = /(\+?[\d\s]{10,14})/g;
  const parts = text.split(phoneRegex);
  return parts.map((part, i) =>
    phoneRegex.test(part)
      ? <a key={i} href={`tel:${part.replace(/\s/g, '')}`} className="font-medium hover:underline" style={{ color: 'var(--teal)' }}>{part}</a>
      : part
  );
}

export default function DepartmentAbout() {
  const [openId, setOpenId] = useState(0);

  return (
    <section className="py-12 lg:py-16 px-4 sm:px-6 lg:px-10">
      <div className="max-w-330 mx-auto">
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-12 gap-10 xl:gap-14 lg:items-start">

          <div className="lg:col-span-4 lg:sticky lg:top-28">
            <motion.div className="flex flex-col gap-6 rounded-2xl p-6" style={{ background: 'var(--soft)' }} variants={fadeUp} initial="hidden" whileInView="visible" viewport={vp}>
              <div>
                <p className="text-[11px] font-bold tracking-[1.1px] uppercase mb-3" style={{ color: 'var(--teal)' }}>Other Specialties</p>
                <div className="flex flex-col gap-1.5">
                  {OTHER_SPECIALTIES.map(s => (
                    <Link key={s.to} to={s.to} className="block text-[13px] font-medium px-4 py-2.5 rounded-xl transition-colors duration-150" style={{ background: '#fff', border: '1px solid var(--line)', color: 'var(--navy)' }}
                      onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--teal)'; e.currentTarget.style.color = 'var(--teal)'; }}
                      onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--line)'; e.currentTarget.style.color = 'var(--navy)'; }}>
                      {s.label}
                    </Link>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-[11px] font-bold tracking-[1.1px] uppercase mb-3" style={{ color: 'var(--teal)' }}>Get Directions</p>
                <a href="https://www.google.com/maps/dir/?api=1&destination=UniCare+Hospitals,+Kokapet,+Hyderabad" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center h-10 w-full rounded-xl text-[13px] font-semibold text-white transition-opacity hover:opacity-85" style={{ background: 'var(--teal)' }}>
                  Get Directions
                </a>
              </div>
              <div className="rounded-xl overflow-hidden" style={{ height: 200 }}>
                <iframe src="https://www.google.com/maps?q=unicare+hospitals+kokapet+hyderabad&output=embed" width="100%" height="200" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="UniCare Hospitals location" />
              </div>
            </motion.div>
          </div>

          <motion.div className="lg:col-span-8" variants={fadeUp} initial="hidden" whileInView="visible" viewport={vp}>
            <img src={bannerImg} alt="Diagnostics and Lab at UniCare Hospitals, Kokapet" className="w-full rounded-2xl object-cover mb-8" style={{ aspectRatio: '4/3' }} loading="lazy" />

            <h2 className="font-display leading-[1.2] mb-4" style={{ color: 'var(--navy)', fontSize: 'clamp(24px, 3.5vw, 38px)' }}>
              Accurate answers, same-day reports, zero extra trips.
            </h2>
            <p className="text-[15px] sm:text-[16px] leading-[1.8] mb-8" style={{ color: 'var(--muted)' }}>
              A diagnosis is only as good as the test behind it. Unicare's in-house lab runs the investigations our doctors order, with quality-controlled processes and reports reviewed in-house. For diabetes monitoring, pregnancy panels, fevers or annual checks, your results reach your doctor the same day, often within hours.
            </p>

            <p id="services" className="text-[11px] font-bold tracking-[1.1px] uppercase mb-4" style={{ color: 'var(--teal)' }}>Our Services</p>
            <div className="flex flex-col gap-3 mb-10">
              {SERVICES.map((s, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckIcon />
                  <span className="text-[14.5px] leading-relaxed" style={{ color: 'var(--navy)' }}>{s}</span>
                </div>
              ))}
            </div>

            <p id="faq" className="text-[11px] font-bold tracking-[1.1px] uppercase mb-4" style={{ color: 'var(--teal)' }}>Frequently Asked Questions</p>
            <div>
              {FAQS.map((faq, i) => {
                const isOpen = openId === i;
                return (
                  <div key={i}>
                    <button type="button" onClick={() => setOpenId(isOpen ? null : i)} className="w-full flex items-start justify-between gap-4 text-left cursor-pointer bg-transparent border-0 outline-none" style={{ padding: 0 }} aria-expanded={isOpen}>
                      <span className="text-[17px] font-bold leading-snug" style={{ color: 'var(--navy)' }}>{faq.q}</span>
                      <span className="shrink-0 mt-0.5" style={{ color: '#627C95' }}>{isOpen ? <IconChevronUp size={20} /> : <IconChevronDown size={20} />}</span>
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25, ease: 'easeOut' }} className="overflow-hidden">
                          <p className="text-[14.5px] leading-relaxed" style={{ paddingTop: 14, color: 'var(--muted)' }}>{renderAnswer(faq.a)}</p>
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
