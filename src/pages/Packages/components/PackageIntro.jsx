import { motion } from 'framer-motion';
import { fadeUp, vp } from '../../../lib/animations';

export default function PackageIntro() {
  return (
    <section className="bg-white py-16 sm:py-20 px-4 sm:px-6 lg:px-10">
      <motion.div
        className="max-w-3xl mx-auto text-center"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={vp}
      >
        <p
          className="text-[12px] font-bold tracking-[0.2em] uppercase mb-4"
          style={{ color: 'var(--teal)' }}
        >
          HEALTH CHECKUP PACKAGES
        </p>

        <h1
          className="font-display leading-[1.1] mb-6"
          style={{ color: 'var(--navy)', fontSize: 'clamp(32px, 5vw, 52px)' }}
        >
          <span className="font-normal">Catch it early. </span>
          <span className="font-bold">Treat it easily.</span>
        </h1>

        <p
          className="text-[15px] sm:text-[16px] leading-[1.8] max-w-[780px] mx-auto"
          style={{ color: 'var(--muted)' }}
        >
          Most serious conditions, from diabetes to heart disease, give quiet warnings years
          before they become emergencies. A structured annual health check, reviewed by a
          doctor rather than emailed as a PDF, is the single best health habit a family can
          build. At Unicare, every package ends with a consultation, not just a report.
        </p>
      </motion.div>
    </section>
  );
}
