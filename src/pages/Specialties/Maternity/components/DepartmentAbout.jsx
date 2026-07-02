import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import { IconChevronDown, IconChevronUp } from '@tabler/icons-react';
import bannerImg from '../../../../assets/maternity.png';
import { fadeUp, vp } from '../../../../lib/animations';
import { Phone, WhatsAppIc, CalendarCheck, ArrowLeft, ArrowRight } from '../../../../components/icons';
import { doctors } from '../../../../data/doctors';

const deptDoctors = doctors.filter(d => d.specialty === 'Gynecology & Obstetrics');

const OTHER_SPECIALTIES = [
  { label: 'Pediatrics',                       to: '/specialties/pediatrics' },
  { label: 'Orthopedics',                      to: '/specialties/orthopedics' },
  { label: 'General Medicine & Endocrinology', to: '/specialties/general-medicine-endocrinology' },
  { label: 'General & Minimal Access Surgery', to: '/specialties/general-minimal-access-surgery' },
  { label: 'Pharmacy',                         to: '/specialties/pharmacy' },
  { label: 'Diagnostics & Lab',                to: '/specialties/diagnostics-lab' },
];

const SERVICES = [
  'Antenatal care and pregnancy monitoring, trimester by trimester',
  'Normal and caesarean deliveries with experienced anesthesia and pediatric support',
  'High-risk pregnancy management',
  'Fertility evaluation and reproductive medicine consultations',
  'Gynecological consultations: PCOS, fibroids, menstrual disorders, menopause care',
  'Pre-marital and pre-conception counselling and health checks',
  'Laparoscopic gynecological procedures, in coordination with our minimal access surgery team',
];

const FAQS = [
  {
    q: 'Who is the best gynecologist in Kokapet?',
    a: 'Dr. A.N. Varuna Vyas, MBBS, DGO, DNB, FRM, is the Founder and Clinical Lead for Women\'s Health and Reproductive Care at Unicare Hospitals, Kokapet. She provides pregnancy care, delivery services, fertility consultations and gynecological treatment for women across West Hyderabad.',
  },
  {
    q: 'Does Unicare Hospitals handle deliveries in Kokapet?',
    a: 'Yes. Unicare Hospitals in Kokapet offers complete maternity services including antenatal care, normal and caesarean deliveries, and postnatal support, with in-house pediatricians available for newborn care immediately after birth.',
  },
  {
    q: 'Can I consult for fertility treatment at Unicare Hospitals?',
    a: 'Yes. Dr. A.N. Varuna Vyas holds a Fellowship in Reproductive Medicine and offers fertility evaluation and treatment consultations at Unicare Hospitals, Kokapet. Call +91 90905 46363 to book a private consultation.',
  },
];

function DoctorCard({ doc }) {
  const shortRole = doc.role.split('—')[0].trim();
  const fullRole  = doc.role.split('—')[1]?.trim() ?? doc.role;

  return (
    <div className="doctor-card" style={{ aspectRatio: '4/5', boxShadow: '0 8px 32px rgba(1,34,87,0.12)' }}>
      <img src={doc.photo} alt={doc.name} className="absolute inset-0 w-full h-full object-cover object-top" loading="lazy" />
      <div className="doctor-card-info" onMouseDown={e => e.stopPropagation()}>
        <h3 className="text-[17px] font-bold leading-snug shrink-0 text-white">{doc.name}</h3>
        <p className="text-[13px] mt-0.5 mb-3 shrink-0" style={{ color: 'rgba(255,255,255,0.65)' }}>{shortRole}</p>
        <div className="flex items-center gap-2 shrink-0 pb-4" onClick={e => e.stopPropagation()}>
          <Link to="/book-an-appointment" className="flex-1 min-w-0 h-10 flex items-center justify-center gap-1.5 rounded-full text-[13px] font-semibold text-white hover:opacity-85 cursor-pointer" style={{ background: 'var(--teal)' }} aria-label="Book an appointment">
            <CalendarCheck s={13} c="#fff" /> Book Now
          </Link>
          <a href={doc.waUrl} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="h-8 w-8 shrink-0 rounded-full flex items-center justify-center hover:opacity-80 cursor-pointer" style={{ background: 'rgba(255,255,255,0.12)' }}>
            <WhatsAppIc s={14} c="#25D366" />
          </a>
          <a href={`tel:${doc.phone}`} aria-label="Call" className="h-8 w-8 shrink-0 rounded-full flex items-center justify-center hover:opacity-80 cursor-pointer" style={{ background: 'rgba(255,255,255,0.12)' }}>
            <Phone s={12} c="#fff" />
          </a>
        </div>
        <div className="doctor-card-expanded-content mt-3 pb-5">
          <div className="h-px mb-3 mt-1" style={{ background: 'rgba(255,255,255,0.12)' }} />
          <p className="text-[13px] leading-relaxed mb-2.5" style={{ color: 'rgba(255,255,255,0.65)' }}>{doc.qualifications}</p>
          <p className="text-[13.5px] font-semibold mb-3" style={{ color: 'var(--teal)' }}>{fullRole}</p>
          <div className="h-px mb-3" style={{ background: 'rgba(255,255,255,0.12)' }} />
          <div>
            <p className="text-[11px] font-bold uppercase tracking-wider mb-1.5" style={{ color: 'rgba(255,255,255,0.40)' }}>OPD Timings</p>
            <p className="text-[13px] leading-relaxed whitespace-pre-line text-white">{doc.opdTimings}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

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
  const [navVisible, setNavVisible] = useState(false);
  const swiperRef = useRef(null);

  return (
    <section className="py-12 lg:py-16 px-4 sm:px-6 lg:px-10">
      <div className="max-w-330 mx-auto">
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-12 gap-10 xl:gap-14 lg:items-start">

          {/* Sticky sidebar */}
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

          {/* Main content */}
          <motion.div className="lg:col-span-8" variants={fadeUp} initial="hidden" whileInView="visible" viewport={vp}>
            <img src={bannerImg} alt="Maternity care at UniCare Hospitals, Kokapet" className="w-full rounded-2xl object-cover mb-8" style={{ aspectRatio: '4/3' }} loading="lazy" />

            <h2 className="font-display leading-[1.2] mb-4" style={{ color: 'var(--navy)', fontSize: 'clamp(24px, 3.5vw, 38px)' }}>
              Every pregnancy deserves a specialist who knows you by name.
            </h2>
            <p className="text-[15px] sm:text-[16px] leading-[1.8] mb-8" style={{ color: 'var(--muted)' }}>
              At Unicare Hospitals, your pregnancy journey is led by the same senior gynecologist from your first scan to your delivery and beyond. No rotating duty doctors. No fifteen-kilometre drives for a routine check-up. Just expert, personal care in the heart of Kokapet.
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
            <div className="mb-10">
              {FAQS.map((faq, i) => {
                const isOpen = openId === i;
                return (
                  <div key={i} className={i < FAQS.length - 1 ? 'mb-7.5 pb-7.5' : ''} style={i < FAQS.length - 1 ? { borderBottom: '1px solid #F2F4F6' } : {}}>
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

            <p className="text-[11px] font-bold tracking-[1.1px] uppercase mb-4" style={{ color: 'var(--teal)' }}>Our Doctors</p>
            <div className="relative">
              {navVisible && (
                <button onClick={() => swiperRef.current?.slidePrev()} aria-label="Previous" className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-10 w-11 h-11 rounded-full flex items-center justify-center cursor-pointer transition-all hover:scale-110 shrink-0" style={{ background: 'var(--navy)', boxShadow: '0 4px 16px rgba(1,34,87,0.25)' }}>
                  <ArrowLeft s={18} c="#fff" />
                </button>
              )}
              {navVisible && (
                <button onClick={() => swiperRef.current?.slideNext()} aria-label="Next" className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10 w-11 h-11 rounded-full flex items-center justify-center cursor-pointer transition-all hover:scale-110 shrink-0" style={{ background: 'var(--navy)', boxShadow: '0 4px 16px rgba(1,34,87,0.25)' }}>
                  <ArrowRight s={18} c="#fff" />
                </button>
              )}
              <div className="overflow-hidden">
                <Swiper onSwiper={s => { swiperRef.current = s; setNavVisible(!s.isLocked); }} onBreakpoint={s => setNavVisible(!s.isLocked)} modules={[Autoplay]} spaceBetween={20} loop={deptDoctors.length > 1} autoplay={{ delay: 3000, disableOnInteraction: false }} breakpoints={{ 0: { slidesPerView: 1 }, 640: { slidesPerView: 2 } }} style={{ padding: '8px 0 32px' }}>
                  {deptDoctors.map(doc => (
                    <SwiperSlide key={doc.slug}><DoctorCard doc={doc} /></SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
