import SEO from '../../../components/SEO';
import PageHeroBanner from '../../../components/PageHeroBanner';
import bannerImg from '../../../assets/pediatric.png';
import CTABand from '../../../components/CTABand';
import { medicalSpecialtySchema, faqPageSchema } from '../../../lib/schema';
import DepartmentAbout from './components/DepartmentAbout';

const schema = [
  medicalSpecialtySchema({
    name: 'Pediatrics and Neonatal Care',
    description: 'Child and newborn care at Unicare Hospitals, Kokapet by MD pediatricians Dr. Mareddy Veena and Dr. M. Nitin Rao.',
    url: 'https://www.unicareglobalhospitals.com/specialties/pediatrics',
  }),
  faqPageSchema([
    {
      q: 'Who are the pediatricians at Unicare Hospitals Kokapet?',
      a: "Unicare Hospitals has two MD pediatricians: Dr. Mareddy Veena and Dr. M. Nitin Rao. Both provide newborn care, vaccinations, growth monitoring and treatment for childhood illnesses at the hospital's Kokapet facility in West Hyderabad.",
    },
    {
      q: 'Where can I vaccinate my baby near Gachibowli or Narsingi?',
      a: 'Unicare Hospitals in Kokapet, a short drive from Gachibowli and Narsingi, offers the complete childhood vaccination schedule administered by MD pediatricians, with reminders for upcoming doses. Call +91 90905 46363 to book a vaccination slot.',
    },
  ]),
];

export default function Paediatrics() {
  return (
    <>
      <SEO
        title="Pediatrician in Kokapet | Child Specialist Near Gachibowli"
        description="Child and newborn care at UniCare Hospitals, Kokapet by MD pediatricians Dr. Mareddy Veena and Dr. M. Nitin Rao. Vaccinations, fevers, growth checks."
        url="/specialties/pediatrics"
        keywords="pediatrician in Kokapet, child specialist Narsingi, baby doctor near Gachibowli, vaccination center Kokapet, newborn care West Hyderabad"
        schema={schema}
      />
      <PageHeroBanner
        heading="Specialist paediatric care, close to home."
        breadcrumbLabel="Child Health"
        image={bannerImg}
      />
      <DepartmentAbout />
    </>
  );
}
