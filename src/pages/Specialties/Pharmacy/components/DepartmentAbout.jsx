import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import bannerImg from '../../../../assets/pharmacy.png';
import { fadeUp, vp } from '../../../../lib/animations';

const OTHER_SPECIALTIES = [
  { label: "Maternity & Women's Health",        to: '/specialties/maternity-womens-health' },
  { label: 'Pediatrics',                        to: '/specialties/pediatrics' },
  { label: 'Orthopedics',                       to: '/specialties/orthopedics' },
  { label: 'General Medicine & Endocrinology',  to: '/specialties/general-medicine-endocrinology' },
  { label: 'General & Minimal Access Surgery',  to: '/specialties/general-minimal-access-surgery' },
  { label: 'Diagnostics & Lab',                 to: '/specialties/diagnostics-lab' },
];

const HIGHLIGHTS = [
  "Genuine, quality-assured medicines aligned with our doctors' prescriptions",
  'Qualified pharmacists who double-check every prescription',
  'Pediatric formulations, maternity supplements and chronic care medicines stocked',
  'Clear guidance on dosage, timing and food interactions',
];

function CheckIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true" className="shrink-0 mt-0.5">
      <circle cx="9" cy="9" r="9" fill="var(--teal)" opacity="0.12" />
      <path d="M5.5 9L7.8 11.5L12.5 6.5" stroke="var(--teal)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function DepartmentAbout() {
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
            <img src={bannerImg} alt="In-house pharmacy at UniCare Hospitals, Kokapet" className="w-full rounded-2xl object-cover mb-8" style={{ aspectRatio: '4/3' }} loading="lazy" />

            <h2 className="font-display leading-[1.2] mb-4" style={{ color: 'var(--navy)', fontSize: 'clamp(24px, 3.5vw, 38px)' }}>
              Your prescription, filled before you reach the parking lot.
            </h2>
            <p className="text-[15px] sm:text-[16px] leading-[1.8] mb-8" style={{ color: 'var(--muted)' }}>
              No more pharmacy-hopping with a sick child in the back seat. Unicare's in-house pharmacy stocks the medicines our doctors prescribe, dispensed by qualified pharmacists who explain dosage and timing clearly. One building. One visit. Everything is done.
            </p>

            <p className="text-[11px] font-bold tracking-[1.1px] uppercase mb-4" style={{ color: 'var(--teal)' }}>Highlights</p>
            <div className="flex flex-col gap-3">
              {HIGHLIGHTS.map((s, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckIcon />
                  <span className="text-[14.5px] leading-relaxed" style={{ color: 'var(--navy)' }}>{s}</span>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
