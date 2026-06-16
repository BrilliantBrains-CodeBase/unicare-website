import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Phone, WhatsAppIc, CalendarCheck } from '../../../components/icons';
import { fadeUp, stagger, vp } from '../../../lib/animations';

const PHONE    = '+919090546363';
const WA_MSG   = encodeURIComponent('Hello, I would like to book an appointment at UniCare Hospitals.');
const WA_URL   = `https://wa.me/919090546363?text=${WA_MSG}`;
const ctaItems = stagger(0.08, 0.2);

export default function CTABand() {
  return (
    <section className="px-4 sm:px-6 py-12 lg:py-16">
      <motion.div
        className="max-w-330 mx-auto rounded-[24px] lg:rounded-[32px] px-6 sm:px-10 py-10 lg:py-14 text-center"
        style={{ background: 'var(--teal-soft)' }}
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={vp}
      >
        <p className="text-[11px] tracking-[0.14em] uppercase font-medium text-(--teal) mb-3">
          Got a question?
        </p>
        <h2 className="font-display text-[26px] sm:text-[32px] lg:text-[38px] text-(--navy) leading-[1.15] tracking-[-0.02em] max-w-[560px] mx-auto">
          Have a question an article cannot answer? Ask our doctors.
        </h2>

        <motion.div
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
          variants={ctaItems}
          initial="hidden"
          whileInView="visible"
          viewport={vp}
        >
          <motion.a
            variants={fadeUp}
            href={`tel:${PHONE}`}
            className="btn-dark text-[14px] py-3! px-5! gap-2!"
            aria-label="Call UniCare Hospitals"
          >
            <Phone s={15} c="#fff" />
            <span>Call Us</span>
          </motion.a>

          <motion.a
            variants={fadeUp}
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-dark text-[14px] py-3! px-5! gap-2!"
            style={{ background: '#25D366' }}
            aria-label="WhatsApp UniCare Hospitals"
          >
            <WhatsAppIc s={16} c="#fff" />
            <span>WhatsApp</span>
          </motion.a>

          <motion.div variants={fadeUp}>
            <Link
              to="/book-an-appointment"
              className="btn-outline text-[14px] py-3! px-5!"
            >
              <CalendarCheck s={15} c="var(--navy)" />
              <span>Book Appointment</span>
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
