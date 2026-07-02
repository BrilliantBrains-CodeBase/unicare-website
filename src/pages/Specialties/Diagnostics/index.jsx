import SEO from '../../../components/SEO';
import PageHeroBanner from '../../../components/PageHeroBanner';
import CTABand from '../../../components/CTABand';
import bannerImg from '../../../assets/diagnostics.png';
import { medicalSpecialtySchema, faqPageSchema } from '../../../lib/schema';
import DepartmentAbout from './components/DepartmentAbout';

const schema = [
  medicalSpecialtySchema({
    name: 'Diagnostics & Lab',
    description: 'Blood tests, health panels and diagnostics with same-day reports at UniCare Hospitals, Kokapet.',
    url: 'https://www.unicareglobalhospitals.com/specialties/diagnostics-lab',
  }),
  faqPageSchema([
    {
      q: 'Where can I get a blood test done in Kokapet?',
      a: "Unicare Hospitals in Kokapet has an in-house diagnostic lab offering blood tests, diabetes and thyroid panels, maternity tests and preventive health checks, with same-day reports reviewed by the hospital's own doctors. Call +91 90905 46363 to book.",
    },
  ]),
];

export default function Diagnostics() {
  return (
    <>
      <SEO
        title="Diagnostic Center in Kokapet | Blood Tests and Lab Near Narsingi"
        description="Blood tests, health panels and diagnostics with same-day reports at UniCare Hospitals, Kokapet. Home to accurate, doctor-reviewed lab testing."
        url="/specialties/diagnostics-lab"
        keywords="diagnostic center Kokapet, blood test near Narsingi, lab test Gachibowli, full body checkup Kokapet"
        schema={schema}
      />
      <PageHeroBanner heading="Accurate results. Same day." breadcrumbLabel="Diagnostics & Lab" image={bannerImg} />
      <DepartmentAbout />
      <CTABand heading="Book your tests where your doctor is." chip="Book Now" />
    </>
  );
}
