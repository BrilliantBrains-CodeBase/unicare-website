import { useState, useRef, useLayoutEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import PageBanner from '../../components/PageBanner';
import { Phone, WhatsAppIc, CalendarCheck } from '../../components/icons';
import { fadeUp, stagger, vp } from '../../lib/animations';
import { physicianSchema } from '../../lib/schema';
import { doctors } from '../../data/doctors';

const PHONE  = '+919090546363';
const WA_URL = `https://wa.me/919090546363?text=${encodeURIComponent('Hello, I would like to book an appointment at UniCare Hospitals.')}`;

const FILTERS = ['All', 'Gynecology & OB', 'Pediatrics', 'Surgery', 'Endocrinology & Diabetes', 'Orthopedics'];

const ctaStagger = stagger(0.1, 0);

// Renders qualification pills, clipping to a single line and showing "+N" for overflow
function QualPills({ qualString }) {
  const containerRef = useRef(null);
  const [maxV, setMaxV]  = useState(null);
  const quals = qualString.split(', ');

  // Reset measurement when qualifications change (e.g. after filter switch)
  useLayoutEffect(() => { setMaxV(null); }, [qualString]);

  // Measure after every render; bail out once measured
  useLayoutEffect(() => {
    if (maxV !== null) return;
    const el = containerRef.current;
    if (!el) return;
    const pills = [...el.querySelectorAll('[data-pill]')];
    if (!pills.length) return;
    const base = pills[0].offsetTop;
    let count = 0;
    for (const p of pills) {
      if (p.offsetTop > base + 2) break;
      count++;
    }
    setMaxV(count);
  });

  const shown = maxV !== null ? quals.slice(0, maxV) : quals;
  const extra = maxV !== null ? quals.length - maxV : 0;

  return (
    <div ref={containerRef} className="flex flex-wrap justify-center gap-1.5">
      {shown.map(q => (
        <span
          key={q}
          data-pill
          className="px-2 py-0.5 rounded-full text-[10px] font-medium border border-(--line) text-(--navy) shrink-0"
          style={{ background: 'var(--teal-soft)' }}
        >
          {q}
        </span>
      ))}
      {extra > 0 && (
        <span
          className="px-2 py-0.5 rounded-full text-[10px] font-semibold text-white shrink-0"
          style={{ background: 'var(--navy)' }}
        >
          +{extra}
        </span>
      )}
    </div>
  );
}

function DoctorCard({ doc }) {
  const roleLabel    = doc.role.split('—')[0].trim();
  const roleSubtitle = doc.role.split('—')[1]?.trim();

  return (
    <div className="rounded-2xl overflow-hidden flex flex-col group hover-lift border border-(--line) bg-white">
      {/* Photo */}
      <div className="relative overflow-hidden h-72 sm:h-80" style={{ background: 'var(--teal-soft)' }}>
        <img
          src={doc.photo}
          alt={doc.name}
          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />
        {/* Book Appointment — overlaid at photo bottom */}
        <Link
          to="/book-an-appointment"
          className="absolute bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-[13px] font-semibold text-white shadow-lg transition-all duration-200 hover:scale-105"
          style={{ background: 'var(--navy)' }}
        >
          <CalendarCheck s={13} c="#fff" />
          Book An Appointment
        </Link>
      </div>

      {/* Info */}
      <div className="px-5 pt-5 pb-5 flex flex-col gap-3 text-center">
        <div>
          <h3 className="font-display text-[18px] sm:text-[19px] text-(--navy) leading-snug">{doc.name}</h3>
          <p className="text-[13px] text-(--muted) mt-1 leading-snug">{roleLabel}</p>
          {roleSubtitle && (
            <p className="text-[11.5px] mt-0.5 leading-snug" style={{ color: 'var(--muted)', opacity: 0.7 }}>{roleSubtitle}</p>
          )}
        </div>

        {/* Qualification pills — single line, overflow as "+N" */}
        <QualPills qualString={doc.qualifications} />

        {/* Contact buttons */}
        <div className="flex items-center justify-center gap-2 pt-3 border-t border-(--line)">
          <a href={`tel:${doc.phone}`} className="btn-dark text-[12px]! py-2! px-4! gap-1.5!">
            <Phone s={12} c="#fff" />
            <span>Call</span>
          </a>
          <a
            href={doc.waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-dark text-[12px]! py-2! px-4! gap-1.5!"
            style={{ background: '#25D366' }}
          >
            <WhatsAppIc s={13} c="#fff" />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Doctors() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filtered = activeFilter === 'All'
    ? doctors
    : doctors.filter(d => d.specialty === activeFilter);

  function handleFilter(f) {
    setActiveFilter(f);
  }

  return (
    <>
      <SEO
        title="Our Doctors | Unicare Hospitals Kokapet, Hyderabad"
        description="Meet the founder-led medical team at Unicare Hospitals, Kokapet: gynecology, surgery, endocrinology and pediatrics specialists. View profiles and book."
        url="/doctors"
        keywords="doctors in Kokapet, best doctors near Narsingi, specialist doctors West Hyderabad"
        schema={doctors.map(d => physicianSchema({ name: d.name, jobTitle: d.role, specialty: d.specialty, image: d.photo }))}
      />

      <PageBanner
        chip="Our Doctors"
        title="Doctors who put their names on the building."
        subtitle="Most hospitals are owned by businesses and staffed by doctors. Unicare is the opposite: built by doctors, for the families of West Hyderabad."
      />

      {/* Filter tabs */}
      <section className="px-4 sm:px-6 lg:px-10 pt-8 pb-0">
        <div className="max-w-330 mx-auto">
          <motion.div
            className="flex flex-wrap gap-2"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={vp}
            role="tablist"
            aria-label="Filter doctors by specialty"
          >
            {FILTERS.map(f => (
              <button
                key={f}
                role="tab"
                aria-selected={activeFilter === f}
                onClick={() => handleFilter(f)}
                className="pill text-[13px] cursor-pointer transition-all duration-200"
                style={activeFilter === f
                  ? { background: 'var(--navy)', color: '#fff', borderColor: 'var(--navy)' }
                  : {}
                }
              >
                {f}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Doctor cards grid */}
      <section className="px-4 sm:px-6 lg:px-10 pt-10 lg:pt-14 pb-12 sm:pb-16 lg:pb-20">
        <div className="max-w-330 mx-auto">
          {filtered.length === 0 ? (
            <motion.div
              className="text-center py-16 flex flex-col items-center gap-4"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
            >
              <p className="text-(--muted) text-[15px] max-w-sm">
                Our orthopaedic consultant is joining soon. Call us to be notified.
              </p>
              <a href={`tel:${PHONE}`} className="btn-dark gap-2!">
                <Phone s={14} c="#fff" />
                <span>Call Now</span>
              </a>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
              {filtered.map(doc => (
                <DoctorCard key={doc.slug} doc={doc} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA band */}
      <section className="px-4 sm:px-6 lg:px-10 pb-16 sm:pb-20 lg:pb-24">
        <div className="max-w-330 mx-auto">
          <motion.div
            className="rounded-3xl px-6 sm:px-10 py-10 sm:py-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
            style={{ background: 'var(--teal-soft)' }}
            variants={ctaStagger}
            initial="hidden"
            whileInView="visible"
            viewport={vp}
          >
            <motion.p
              variants={fadeUp}
              className="font-display text-[20px] sm:text-[24px] lg:text-[28px] text-(--navy) leading-snug max-w-lg"
            >
              Choose your family's specialist today.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-3 shrink-0">
              <a href={`tel:${PHONE}`} className="btn-dark gap-2!">
                <Phone s={14} c="#fff" />
                <span>Call Now</span>
              </a>
              <a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-dark gap-2!"
                style={{ background: '#25D366' }}
              >
                <WhatsAppIc s={16} c="#fff" />
                <span>WhatsApp</span>
              </a>
              <Link to="/book-an-appointment" className="btn-outline gap-2!">
                <CalendarCheck s={14} />
                <span>Book Appointment</span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
