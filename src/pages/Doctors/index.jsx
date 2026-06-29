import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import PageHeroBanner from '../../components/PageHeroBanner';
import bannerImg from '../../assets/hero-thumbnail.png';
import FilterBar from '../../components/FilterBar';
import CTABand from '../../components/CTABand';
import { Phone, WhatsAppIc, CalendarCheck } from '../../components/icons';
import { fadeUp, vp } from '../../lib/animations';
import { physicianSchema } from '../../lib/schema';
import { doctors } from '../../data/doctors';

const FILTERS = ['All', 'Gynecology & Obstetrics', 'Pediatrics', 'Surgery', 'Endocrinology & Diabetes', 'Orthopedics'];

function DoctorCard({ doc }) {
  const shortRole = doc.role.split('—')[0].trim();
  const fullRole  = doc.role.split('—')[1]?.trim() ?? doc.role;
  const waLink    = `https://wa.me/919090546363?text=${encodeURIComponent(`Hello, I'd like to book an appointment with ${doc.name}.`)}`;

  return (
    <div
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

      {/* Expanding info panel — same as DoctorsPreview */}
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
    </div>
  );
}

export default function Doctors() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchQuery,  setSearchQuery]  = useState('');

  const q = searchQuery.toLowerCase();
  const filtered = doctors
    .filter(d => activeFilter === 'All' || d.specialty === activeFilter)
    .filter(d => !q || d.name.toLowerCase().includes(q) || d.specialty.toLowerCase().includes(q));

  function handleFilter(f) {
    setActiveFilter(f);
    setSearchQuery('');
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

      <PageHeroBanner heading="Doctors who put their names on the building." breadcrumbLabel="Our Doctors" image={bannerImg}
        
        
        
      />

      {/* Filter bar */}
      <section className="px-4 sm:px-6 lg:px-10 pt-8 pb-0">
        <div className="max-w-330 mx-auto">
          <FilterBar
            searchQuery={searchQuery}
            onSearch={setSearchQuery}
            searchPlaceholder="Search doctors…"
            filters={FILTERS}
            activeFilter={activeFilter}
            onFilter={handleFilter}
          />
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

      <CTABand
        chip="Book an Appointment"
        heading="Choose Your Family's Specialist Today."
        subtext="Call us, message on WhatsApp, or book online — our team will confirm your slot within the hour."
      />
    </>
  );
}
