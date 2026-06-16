import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import PageBanner from '../../components/PageBanner';
import { Arrow, Phone, WhatsAppIc, CalendarCheck } from '../../components/icons';
import { scaleIn, fadeUp, stagger, vp } from '../../lib/animations';

import maternityImg   from '../../../../src/assets/maternity.png';
import pediatricImg   from '../../../../src/assets/pediatric.png';
import orthoImg       from '../../../../src/assets/ortho.png';
import generalMedImg  from '../../../../src/assets/general-medicine.png';
import surgeryImg     from '../../../../src/assets/surgery-ot.png';
import pharmacyImg    from '../../../../src/assets/pharmacy.png';
import diagnosticsImg from '../../../../src/assets/diagnostics.png';

const PHONE  = '+919090546363';
const WA_URL = `https://wa.me/919090546363?text=${encodeURIComponent('Hello, I would like to know more about the specialties at UniCare Hospitals.')}`;

const SPECIALTIES = [
  {
    tag: 'Gynecology & OB',
    desc: 'Pregnancy care, safe deliveries, fertility support and gynecological treatment.',
    img: maternityImg,
    to: '/specialties/maternity-womens-health',
  },
  {
    tag: 'Paediatrics',
    desc: 'Newborn and child care by two MD paediatricians.',
    img: pediatricImg,
    to: '/specialties/pediatrics',
  },
  {
    tag: 'Orthopaedics',
    desc: 'Bone, joint, spine and sports injury care.',
    img: orthoImg,
    to: '/specialties/orthopedics',
  },
  {
    tag: 'General Medicine',
    desc: 'Fever, infections, lifestyle disease and preventive health for adults.',
    img: generalMedImg,
    to: '/specialties/general-medicine-endocrinology',
  },
  {
    tag: 'General Surgery',
    desc: 'Laparoscopic and minimal access procedures.',
    img: surgeryImg,
    to: '/specialties/general-minimal-access-surgery',
  },
  {
    tag: 'Endocrinology & Diabetes',
    desc: 'Diabetes, thyroid and hormonal care.',
    img: generalMedImg,
    to: '/specialties/general-medicine-endocrinology',
  },
  {
    tag: 'Pharmacy',
    desc: 'Round-the-clock prescribed medicines on-site.',
    img: pharmacyImg,
    to: '/specialties/pharmacy',
  },
  {
    tag: 'Diagnostics & Lab',
    desc: 'Blood tests, health panels and imaging with same-day reports.',
    img: diagnosticsImg,
    to: '/specialties/diagnostics-lab',
  },
];

const cardStagger = stagger(0.07, 0.1);
const ctaStagger  = stagger(0.1, 0);

function SpecialtyCard({ s }) {
  return (
    <motion.div variants={scaleIn}>
      <Link to={s.to} className="block relative rounded-2xl overflow-hidden h-72 sm:h-80 hover-lift group">
        <img
          src={s.img}
          alt={s.tag}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(180deg, rgba(1,34,87,.2) 0%, rgba(1,34,87,0) 35%, rgba(1,34,87,.82) 100%)' }}
        />
        <div className="absolute left-3 top-3">
          <span className="chip">{s.tag}</span>
        </div>
        <div className="absolute left-4 right-4 bottom-4 flex items-end justify-between gap-3">
          <p className="text-white font-display text-[16px] sm:text-[17px] leading-snug">{s.desc}</p>
          <div className="w-9 h-9 rounded-full bg-white text-(--navy) flex items-center justify-center shrink-0 group-hover:bg-(--teal) group-hover:text-white transition-colors">
            <Arrow s={12} />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export default function Specialties() {
  return (
    <>
      <SEO
        title="Medical Specialties at Unicare Hospitals Kokapet, Hyderabad"
        description="Maternity, pediatrics, laparoscopic surgery, endocrinology, orthopedics, general medicine, pharmacy and diagnostics at Unicare Hospitals, Kokapet."
        url="/specialties"
        keywords="multispecialty hospital Kokapet, hospital departments Kokapet Hyderabad"
      />

      <PageBanner
        chip="Our Specialties"
        title="Specialist care for every member of your family."
        subtitle="Eight departments. One neighbourhood hospital. Closer to Kokapet, Narsingi and the Financial District than you think."
      />

      {/* 8-card specialty grid */}
      <section className="px-4 sm:px-6 lg:px-10 pt-10 sm:pt-12 pb-12 sm:pb-16 lg:pb-20">
        <div className="max-w-330 mx-auto">
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6"
            variants={cardStagger}
            initial="hidden"
            whileInView="visible"
            viewport={vp}
          >
            {SPECIALTIES.map(s => (
              <SpecialtyCard key={s.tag} s={s} />
            ))}
          </motion.div>
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
              Not sure which specialist you need? Call{' '}
              <a href={`tel:${PHONE}`} className="text-(--teal) hover:underline whitespace-nowrap">
                +91 90905 46363
              </a>{' '}
              and our team will guide you.
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
