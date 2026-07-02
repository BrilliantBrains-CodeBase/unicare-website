import SEO from '../../../components/SEO';
import PageHeroBanner from '../../../components/PageHeroBanner';
import CTABand from '../../../components/CTABand';
import bannerImg from '../../../assets/maternity.png';
import { medicalSpecialtySchema, faqPageSchema } from '../../../lib/schema';
import DepartmentAbout from './components/DepartmentAbout';

const schema = [
  medicalSpecialtySchema({
    name: "Maternity & Women's Health",
    description: 'Pregnancy care, deliveries, fertility and gynecology at UniCare Hospitals, Kokapet.',
    url: 'https://www.unicareglobalhospitals.com/specialties/maternity-womens-health',
  }),
  faqPageSchema([
    {
      q: 'Who is the best gynecologist in Kokapet?',
      a: "Dr. A.N. Varuna Vyas, MBBS, DGO, DNB, FRM, is the Founder and Clinical Lead for Women's Health and Reproductive Care at Unicare Hospitals, Kokapet. She provides pregnancy care, delivery services, fertility consultations and gynecological treatment for women across West Hyderabad.",
    },
    {
      q: 'Does Unicare Hospitals handle deliveries in Kokapet?',
      a: 'Yes. Unicare Hospitals in Kokapet offers complete maternity services including antenatal care, normal and caesarean deliveries, and postnatal support, with in-house pediatricians available for newborn care immediately after birth.',
    },
    {
      q: 'Can I consult for fertility treatment at Unicare Hospitals?',
      a: 'Yes. Dr. A.N. Varuna Vyas holds a Fellowship in Reproductive Medicine and offers fertility evaluation and treatment consultations at Unicare Hospitals, Kokapet. Call +91 90905 46363 to book a private consultation.',
    },
  ]),
];

export default function Maternity() {
  return (
    <>
      <SEO
        title="Maternity Hospital in Kokapet | Gynecologist Near Narsingi"
        description="Pregnancy care, deliveries, fertility and gynecology at UniCare Hospitals, Kokapet. Led by Dr. A.N. Varuna Vyas, MBBS, DGO, DNB, FRM. Book a consultation."
        url="/specialties/maternity-womens-health"
        keywords="maternity hospital Kokapet, gynecologist in Kokapet, best gynecologist near Narsingi, pregnancy care Gachibowli, fertility specialist West Hyderabad"
        schema={schema}
      />
      <PageHeroBanner heading="Expert care through every stage of womanhood." breadcrumbLabel="Maternity & Women's Health" image={bannerImg} />
      <DepartmentAbout />
    </>
  );
}
