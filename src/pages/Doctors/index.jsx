import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import PageHeroBanner from '../../components/PageHeroBanner';
import bannerImg from '../../assets/hero-thumbnail.png';
import CTABand from '../../components/CTABand';
import { Phone, WhatsAppIc, CalendarCheck } from '../../components/icons';
import { fadeUp, vp } from '../../lib/animations';
import { physicianSchema } from '../../lib/schema';
import { doctors } from '../../data/doctors';

const PHONE = '+919090546363';

const FILTERS = ['All', 'Gynecology & Obstetrics', 'Pediatrics', 'Surgery', 'Endocrinology & Diabetes', 'Orthopedics'];

function DoctorCard({ doc }) {
  const shortRole = doc.role.split('—')[0].trim();
  const fullRole  = doc.role.split('—')[1]?.trim() ?? doc.role;
  const waLink    = `https://wa.me/919090546363?text=${encodeURIComponent(`Hello, I'd like to book an appointment with ${doc.name}.`)}`;

  return (
    <Link
      to={`/doctors/${doc.slug}`}
      className="doctor-card"
      style={{ aspectRatio: '4/5', boxShadow: '0 8px 32px rgba(1,34,87,0.12)' }}
    >
      {/* Photo — behind the expanding panel */}
      <img
        src={doc.photo}
        alt={doc.name}
        className="absolute inset-0 w-full h-full object-cover object-top"
        loading="lazy"
      />

      {/* Expanding info panel */}
      <div className="doctor-card-info" onMouseDown={(e) => e.stopPropagation()}>

        {/* Always visible: name + role + action buttons */}
        <h3 className="text-[17px] font-bold leading-snug shrink-0 text-white">
          {doc.name}
        </h3>
        <p className="text-[13px] mt-0.5 mb-3 shrink-0" style={{ color: 'rgba(255,255,255,0.65)' }}>
          {shortRole}
        </p>

        <div className="flex items-center gap-2 shrink-0 pb-4" onClick={(e) => e.stopPropagation()}>
          <Link
            to="/book-an-appointment"
            className="flex-1 min-w-0 h-10 flex items-center justify-center gap-1.5 rounded-full text-[13px] font-semibold text-white hover:opacity-85 cursor-pointer"
            style={{ background: 'var(--teal)' }}
            aria-label="Book an appointment"
          >
            <CalendarCheck s={13} c="#fff" />
            Book Now
          </Link>
          <a
            href={waLink}
            target="_blank" rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="h-8 w-8 shrink-0 rounded-full flex items-center justify-center hover:opacity-80 cursor-pointer"
            style={{ background: 'rgba(255,255,255,0.12)' }}
          >
            <WhatsAppIc s={14} c="#25D366" />
          </a>
          <a
            href={`tel:${doc.phone}`}
            aria-label="Call"
            className="h-8 w-8 shrink-0 rounded-full flex items-center justify-center hover:opacity-80 cursor-pointer"
            style={{ background: 'rgba(255,255,255,0.12)' }}
          >
            <Phone s={12} c="#fff" />
          </a>
        </div>

        {/* Expanded on hover: qualifications, full role, OPD timings */}
        <div className="doctor-card-expanded-content mt-3 pb-5">
          <div className="h-px mb-3 mt-1" style={{ background: 'rgba(255,255,255,0.12)' }} />

          <p className="text-[13px] leading-relaxed mb-2.5" style={{ color: 'rgba(255,255,255,0.65)' }}>
            {doc.qualifications}
          </p>

          <p className="text-[13.5px] font-semibold mb-3" style={{ color: 'var(--teal)' }}>
            {fullRole}
          </p>

          <div className="h-px mb-3" style={{ background: 'rgba(255,255,255,0.12)' }} />

          <div>
            <p className="text-[11px] font-bold uppercase tracking-wider mb-1.5"
               style={{ color: 'rgba(255,255,255,0.40)' }}>
              OPD Timings
            </p>
            <p className="text-[13px] leading-relaxed whitespace-pre-line text-white">
              {doc.opdTimings}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default function Doctors() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [showAll,      setShowAll]      = useState(false);

  const filtered = doctors.filter(d => activeFilter === 'All' || d.specialty === activeFilter);
  const visible  = filtered.slice(0, showAll ? filtered.length : 3);
  const hasMore  = filtered.length > 3 && !showAll;

  function handleFilter(f) {
    setActiveFilter(f);
    setShowAll(false);
  }

  return (
    <>
      <SEO
        title="Our Doctors | UniCare Hospitals Kokapet, Hyderabad"
        description="Meet the founder-led medical team at UniCare Hospitals, Kokapet: gynecology, surgery, endocrinology and pediatrics specialists. View profiles and book."
        url="/doctors"
        keywords="doctors in Kokapet, best doctors near Narsingi, specialist doctors West Hyderabad"
        schema={doctors.map(d => physicianSchema({ name: d.name, jobTitle: d.role, specialty: d.specialty, image: d.photo }))}
      />

      <PageHeroBanner heading="Doctors who put their names on the building." breadcrumbLabel="Our Doctors" image={bannerImg} />

      {/* Cards section — floating container matching Specialties page */}
      <section className="py-6 2xl:py-10">
        <div
          className="mx-4 sm:mx-5 2xl:mx-8 rounded-[20px] 2xl:rounded-[28px] py-14 sm:py-16 2xl:py-20 px-4 sm:px-6 lg:px-10"
          style={{ background: '#EAEDF0' }}
        >
          <div className="max-w-330 mx-auto">

            {/* Section intro */}
            <motion.div
              className="max-w-158.75 mx-auto text-center mb-12"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={vp}
            >
              <span
                className="block text-[12px] font-bold tracking-[1.2px] uppercase mb-3"
                style={{ color: 'var(--teal)' }}
              >
                Our Doctors
              </span>
              <h2
                className="font-display leading-[1.1] mb-6"
                style={{ color: 'var(--navy)', fontSize: 'clamp(28px, 4vw, 44px)' }}
              >
                <span className="font-normal">Catch it early. </span>
                <span className="font-bold">Treat it easily.</span>
              </h2>
              <p
                className="text-[15px] sm:text-[16px] leading-[1.8] max-w-175 mx-auto"
                style={{ color: 'var(--muted)' }}
              >
                Most hospitals are owned by businesses and staffed by doctors. Unicare is the opposite: built by doctors, for the families of West Hyderabad. Every profile below is a specialist you will actually meet in the consultation room, visit after visit.
              </p>
            </motion.div>

            {/* Filter pill tabs */}
            <motion.div
              className="flex flex-wrap justify-center gap-2 mb-10"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={vp}
            >
              {FILTERS.map(f => (
                <button
                  key={f}
                  onClick={() => handleFilter(f)}
                  className="relative text-[12px] font-semibold tracking-[0.08em] rounded-full px-5 cursor-pointer transition-colors duration-200"
                  style={{
                    minHeight: 38,
                    border: '1px solid var(--line)',
                    background: activeFilter === f ? 'transparent' : '#fff',
                    color:      activeFilter === f ? '#fff'  : 'var(--navy)',
                  }}
                >
                  {activeFilter === f && (
                    <motion.span
                      layoutId="doc-pill-bg"
                      className="absolute inset-0 rounded-full"
                      style={{ background: 'var(--navy)' }}
                      transition={{ type: 'spring', stiffness: 400, damping: 35 }}
                    />
                  )}
                  <span className="relative z-10">{f}</span>
                </button>
              ))}
            </motion.div>

            {/* Doctor cards grid */}
            {filtered.length === 0 ? (
              <motion.div
                className="text-center py-16 flex flex-col items-center gap-4"
                variants={fadeUp}
                initial="hidden"
                animate="visible"
              >
                <p className="text-[15px] max-w-sm" style={{ color: 'var(--muted)' }}>
                  Our orthopaedic consultant is joining soon. Call us to be notified.
                </p>
                <a href={`tel:${PHONE}`} className="btn-dark gap-2!">
                  <Phone s={14} c="#fff" />
                  <span>Call Now</span>
                </a>
              </motion.div>
            ) : (
              <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
                {visible.map(doc => (
                  <DoctorCard key={doc.slug} doc={doc} />
                ))}
              </div>

              {hasMore && (
                <div className="flex justify-center mt-10">
                  <button
                    onClick={() => setShowAll(true)}
                    className="inline-flex items-center gap-3 rounded-full text-white text-[14px] font-semibold px-8 py-3.5 cursor-pointer transition-colors duration-200"
                    style={{ background: 'var(--teal)' }}
                    onMouseEnter={e => e.currentTarget.style.background = 'var(--teal-2)'}
                    onMouseLeave={e => e.currentTarget.style.background = 'var(--teal)'}
                  >
                    <span
                      className="w-7 h-7 rounded-full flex items-center justify-center shrink-0"
                      style={{ background: 'rgba(255,255,255,0.2)' }}
                    >
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 5v14M5 12l7 7 7-7"/>
                      </svg>
                    </span>
                    Load More
                  </button>
                </div>
              )}
              </>
            )}

          </div>
        </div>
      </section>
    </>
  );
}
