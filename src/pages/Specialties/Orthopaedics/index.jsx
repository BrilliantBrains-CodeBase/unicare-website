import SEO from '../../../components/SEO';
import PageHeroBanner from '../../../components/PageHeroBanner';
import CTABand from '../../../components/CTABand';
import bannerImg from '../../../assets/ortho.png';
import { medicalSpecialtySchema, faqPageSchema } from '../../../lib/schema';
import DepartmentAbout from './components/DepartmentAbout';

const schema = [
  medicalSpecialtySchema({
    name: 'Orthopaedics',
    description: 'Bone, joint, spine and sports injury care at UniCare Hospitals, Kokapet.',
    url: 'https://www.unicareglobalhospitals.com/specialties/orthopedics',
  }),
  faqPageSchema([
    {
      q: 'Where can I see an orthopedic doctor near Kokapet?',
      a: 'Unicare Hospitals in Kokapet offers orthopedic consultations for bone, joint, spine and sports injuries, with on-site X-ray and diagnostics. Call +91 90905 46363 to confirm consultant availability and book an appointment.',
    },
  ]),
];

export default function Orthopaedics() {
  return (
    <>
      <SEO
        title="Orthopedic Doctor in Kokapet | Bone and Joint Care Hyderabad"
        description="Bone, joint, spine and sports injury care at UniCare Hospitals, Kokapet. Consultations, fracture care and physiotherapy guidance for West Hyderabad families."
        url="/specialties/orthopedics"
        keywords="orthopedic doctor Kokapet, bone specialist Narsingi, knee pain doctor Gachibowli, fracture treatment Kokapet"
        schema={schema}
      />
      <PageHeroBanner heading="Bone, joint and spine care in Kokapet." breadcrumbLabel="Orthopaedics" image={bannerImg} />
      <DepartmentAbout />
      <CTABand heading="Do not let pain set your schedule." chip="Book a Consultation" />
    </>
  );
}
