import { motion } from 'framer-motion';
import { Phone, WhatsAppIc, Mail, Pin } from '../../../components/icons';
import { scaleIn, stagger, vp } from '../../../lib/animations';

const MAPS_URL = 'https://www.google.com/maps/place/UniCare+Hospitals/@17.390425,78.3436576,21z/data=!4m14!1m7!3m6!1s0x3bcb95005da665df:0x2bd6417591e43792!2sSaanvi+Antalya+Homes!8m2!3d17.3904212!4d78.3436241!16s%2Fg%2F11vyrdgvv5!3m5!1s0x3bcb91dc874272cd:0xbc4ad3918afe8fcb!8m2!3d17.3902459!4d78.3437231!16s%2Fg%2F11zb6wm04j?entry=ttu&g_ep=EgoyMDI2MDYwMS4wIKXMDSoASAFQAw%3D%3D';

const cards = [
  {
    label:   'Call Us',
    Icon:    Phone,
    iconBg:  'var(--teal-soft)',
    iconC:   'var(--teal)',
    href:    'tel:+919090546363',
    value:   '+91 90905 46363\n+91 91218 56565',
    target:  '_self',
  },
  {
    label:   'WhatsApp',
    Icon:    WhatsAppIc,
    iconBg:  'rgba(37,211,102,0.12)',
    iconC:   '#25D366',
    href:    'https://wa.me/919090546363?text=Hi%2C%20I%20would%20like%20to%20book%20an%20appointment%20at%20UniCare%20Hospitals.',
    value:   'Chat with us on WhatsApp',
    target:  '_blank',
  },
  {
    label:   'Email',
    Icon:    Mail,
    iconBg:  'var(--teal-soft)',
    iconC:   'var(--teal)',
    href:    'mailto:info@unicareglobalhospitals.com',
    value:   'info@unicareglobalhospitals.com',
    target:  '_self',
  },
  {
    label:   'Directions',
    Icon:    Pin,
    iconBg:  'var(--teal-soft)',
    iconC:   'var(--teal)',
    href:    MAPS_URL,
    value:   'A 201, 2nd Floor, Saanvi Antalya Homes, Kokapet',
    target:  '_blank',
  },
];

const container = stagger(0.08, 0.1);

export default function QuickContactCards() {
  return (
    <section className="px-4 sm:px-6 lg:px-10 pb-10 sm:pb-14">
      <div className="max-w-330 mx-auto">
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={vp}
        >
          {cards.map(({ label, Icon, iconBg, iconC, href, value, target }) => (
            <motion.a
              key={label}
              variants={scaleIn}
              href={href}
              target={target}
              rel={target === '_blank' ? 'noopener noreferrer' : undefined}
              className="bg-white border border-(--line) rounded-2xl p-5 hover-lift flex flex-col gap-3 no-underline"
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                style={{ background: iconBg }}
              >
                <Icon s={16} c={iconC} />
              </div>
              <div>
                <p className="text-[10px] tracking-[0.16em] uppercase font-semibold text-(--muted) mb-1">{label}</p>
                <p className="text-[13px] text-(--navy) font-medium leading-snug whitespace-pre-line">{value}</p>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
