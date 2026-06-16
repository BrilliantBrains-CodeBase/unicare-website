import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import PageBanner from '../../components/PageBanner';
import { Phone, WhatsAppIc, CalendarCheck } from '../../components/icons';
import { scaleIn, fadeUp, stagger, vp } from '../../lib/animations';
import { physicianSchema } from '../../lib/schema';
import { doctors } from '../../data/doctors';

const PHONE  = '+919090546363';
const WA_URL = `https://wa.me/919090546363?text=${encodeURIComponent('Hello, I would like to book an appointment at UniCare Hospitals.')}`;

const FILTERS = ['All', 'Gynecology & OB', 'Pediatrics', 'Surgery', 'Endocrinology & Diabetes', 'Orthopedics'];

const cardStagger = stagger(0.07, 0.1);
const ctaStagger  = stagger(0.1, 0);

function DoctorCard({ doc, expanded, onToggle }) {
  const roleLabel    = doc.role.split('—')[0].trim();
  const roleSubtitle = doc.role.split('—')[1]?.trim();
  const quals        = doc.qualifications.split(', ');

  return (
    <motion.div
      variants={scaleIn}
      className="rounded-2xl overflow-hidden flex flex-row"
      style={{ background: 'var(--teal-soft)' }}
    >
      {/* Photo — fixed width, fills card height */}
      <div className="relative w-36 sm:w-40 shrink-0 self-stretch">
        <img
          src={doc.photo}
          alt={doc.name}
          className="absolute inset-0 w-full h-full object-cover object-top"
        />
      </div>

      {/* Info */}
      <div className="p-3.5 sm:p-4 flex flex-col gap-2 flex-1 min-w-0">
        <div>
          <div
            className="inline-flex items-center px-2.5 py-1 rounded-full text-[9.5px] font-semibold tracking-wide mb-1.5"
            style={{ background: doc.color + '1A', color: doc.color }}
          >
            {roleLabel}
          </div>
          <div className="font-display text-[14px] sm:text-[16px] leading-snug text-(--navy)">{doc.name}</div>
          {roleSubtitle && (
            <div className="text-[10.5px] text-(--muted) mt-0.5 leading-snug">{roleSubtitle}</div>
          )}
        </div>

        {/* Expandable: quals + bio */}
        {expanded && (
          <>
            <div className="flex flex-wrap gap-1">
              {quals.map(q => (
                <span key={q} className="px-1.5 py-0.5 rounded-full text-[9px] font-medium bg-white border border-(--line) text-(--navy) leading-none">
                  {q}
                </span>
              ))}
            </div>
            <p className="text-[11px] text-(--muted) leading-relaxed">{doc.bio}</p>
          </>
        )}

        {/* Read more / less */}
        <button
          onClick={onToggle}
          className="self-start text-[11px] font-medium cursor-pointer hover:underline"
          style={{ color: doc.color }}
        >
          {expanded ? 'Read less ↑' : 'Read more ↓'}
        </button>

        {/* CTA row */}
        <div className="flex flex-wrap items-center gap-1.5 pt-2 border-t border-white/60 mt-auto">
          <a href={`tel:${doc.phone}`} className="btn-dark text-[10px] py-1.5! px-2.5! gap-1!">
            <Phone s={10} c="#fff" />
            <span>Call</span>
          </a>
          <a href={doc.waUrl} target="_blank" rel="noopener noreferrer" className="btn-dark text-[10px] py-1.5! px-2.5! gap-1!" style={{ background: '#25D366' }}>
            <WhatsAppIc s={11} c="#fff" />
            <span>WhatsApp</span>
          </a>
          <Link to="/book-an-appointment" className="btn-outline text-[10px] py-1.5! px-2.5! gap-1!">
            <CalendarCheck s={10} />
            <span>Book</span>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

export default function Doctors() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [expandedRow, setExpandedRow]   = useState(0);

  const filtered = activeFilter === 'All'
    ? doctors
    : doctors.filter(d => d.specialty === activeFilter);

  function handleFilter(f) {
    setActiveFilter(f);
    setExpandedRow(0);
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
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5"
              variants={cardStagger}
              initial="hidden"
              whileInView="visible"
              viewport={vp}
            >
              {filtered.map((doc, idx) => {
                const row = Math.floor(idx / 2);
                return (
                  <DoctorCard
                    key={doc.slug}
                    doc={doc}
                    expanded={expandedRow === row}
                    onToggle={() => setExpandedRow(r => r === row ? null : row)}
                  />
                );
              })}
            </motion.div>
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
