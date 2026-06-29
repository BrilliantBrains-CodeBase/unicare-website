import SEO from '../../../components/SEO';
import PageHeroBanner from '../../../components/PageHeroBanner';
import bannerImg from '../../../assets/diagnostics.png';
import { medicalSpecialtySchema } from '../../../lib/schema';

export default function Diagnostics() {
  return (
    <>
      <SEO
        title="Diagnostic Center in Kokapet | Blood Tests and Lab Near Narsingi"
        description="Blood tests, health panels and diagnostics with same-day reports at UniCare Hospitals, Kokapet. Home to accurate, doctor-reviewed lab testing."
        url="/specialties/diagnostics-lab"
        keywords="diagnostic center Kokapet, blood test near Narsingi, lab test Gachibowli, full body checkup Kokapet"
        schema={medicalSpecialtySchema({
          name: 'Diagnostics & Lab',
          description: 'Blood tests, health panels and diagnostics with same-day reports at UniCare Hospitals, Kokapet.',
          url: 'https://www.unicareglobalhospitals.com/specialties/diagnostics-lab',
        })}
      />
      <PageHeroBanner heading="Accurate results. Same day." breadcrumbLabel="Diagnostics & Lab" image={bannerImg}
        
        
        
      />
    </>
  );
}
