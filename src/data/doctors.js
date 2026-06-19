import drVarunaImg   from '../assets/Dr.Varuna.png';
import drBhargavaImg from '../assets/Dr.Bhargava.png';
import drDeepakImg   from '../assets/Dr.Deepak.png';
import drNitinImg    from '../assets/Dr.Nitin.png';
import drVeenaImg    from '../assets/Dr.Veena.png';

const PHONE  = '+919090546363';
const WA_MSG = encodeURIComponent('Hello, I would like to book an appointment at UniCare Hospitals.');

export const doctors = [
  {
    slug: 'dr-an-varuna-vyas',
    name: 'Dr. A.N. Varuna Vyas',
    qualifications: 'MBBS, DGO, DNB, FRM',
    role: "Founder & Clinical Lead — Women's Health and Reproductive Care",
    specialty: 'Gynecology & OB',
    opdTimings: 'To be confirmed',
    photo: drVarunaImg,
    color: '#2CAAA0',
    bio: "Co-founder of Unicare Hospitals. Dr. Varuna leads the maternity, gynecology and reproductive medicine program, caring for women through pregnancy, fertility journeys and every stage of gynecological health. Her training in reproductive medicine (FRM) brings fertility expertise rarely available outside corporate hospitals to the neighbourhood.",
    phone: PHONE,
    waUrl: `https://wa.me/919090546363?text=${WA_MSG}`,
  },
  {
    slug: 'dr-bhargava-vyas',
    name: 'Dr. Bhargava Vyas A.N.',
    qualifications: 'MBBS, MS (General Surgery), FIAGES, FMAS',
    role: 'Founder & Clinical Lead — General and Minimal Access Surgery',
    specialty: 'Surgery',
    opdTimings: 'To be confirmed',
    photo: drBhargavaImg,
    color: '#012257',
    bio: "Co-founder of Unicare Hospitals and fellowship-trained laparoscopic surgeon. Dr. Bhargava performs minimal access procedures for hernia, gallbladder, appendix and other abdominal conditions, and personally follows every surgical patient from first consultation to final review.",
    phone: PHONE,
    waUrl: `https://wa.me/919090546363?text=${WA_MSG}`,
  },
  {
    slug: 'dr-deepak-thiriveedi',
    name: 'Dr. Deepak Thiriveedi',
    qualifications: 'MBBS, MD (General Medicine), DM (Endocrinology), SCE Endocrinology & Diabetes (UK)',
    role: 'Consultant — Endocrinology and Metabolic Medicine',
    specialty: 'Endocrinology & Diabetes',
    opdTimings: 'To be confirmed',
    photo: drDeepakImg,
    color: '#1A6B65',
    bio: "Super-specialist endocrinologist with international certification. Dr. Deepak treats diabetes, thyroid disorders, obesity and hormonal conditions, and anchors Unicare's adult general medicine service. His DM in Endocrinology and UK SCE credential make him one of the most qualified hormone specialists practicing in the Kokapet area.",
    phone: PHONE,
    waUrl: `https://wa.me/919090546363?text=${WA_MSG}`,
  },
  {
    slug: 'dr-mareddy-veena',
    name: 'Dr. Mareddy Veena',
    qualifications: 'MBBS, MD (Pediatrics)',
    role: 'Consultant — Pediatrics and Neonatal Care',
    specialty: 'Pediatrics',
    opdTimings: 'To be confirmed',
    photo: drVeenaImg,
    color: '#6B3FA0',
    bio: "MD pediatrician with a focus on newborn and infant health. Dr. Veena partners with parents from the first vaccination through school-age check-ups, building the kind of long-term doctor relationship children grow up trusting.",
    phone: PHONE,
    waUrl: `https://wa.me/919090546363?text=${WA_MSG}`,
  },
  {
    slug: 'dr-m-nitin-rao',
    name: 'Dr. M. Nitin Rao',
    qualifications: 'MBBS, MD (Pediatrics)',
    role: 'Consultant — Pediatrics and Neonatal Care',
    specialty: 'Pediatrics',
    opdTimings: 'To be confirmed',
    photo: drNitinImg,
    color: '#0A3D62',
    bio: "MD pediatrician caring for newborns, infants and children: vaccinations, growth and development, childhood infections and nutrition. Known for calm, unhurried consultations that put both children and parents at ease.",
    phone: PHONE,
    waUrl: `https://wa.me/919090546363?text=${WA_MSG}`,
  },
];

export function getDoctorBySlug(slug) {
  return doctors.find(d => d.slug === slug) || null;
}
