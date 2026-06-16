import SEO from '../../../components/SEO';
import PageBanner from '../../../components/PageBanner';
import { medicalSpecialtySchema } from '../../../lib/schema';

export default function Diagnostics() {
  return (
    <>
      <SEO
        title="Diagnostic Center in Kokapet | Blood Tests and Lab Near Narsingi"
        description="Blood tests, health panels and diagnostics with same-day reports at Unicare Hospitals, Kokapet. Home to accurate, doctor-reviewed lab testing."
        url="/specialties/diagnostics-lab"
        keywords="diagnostic center Kokapet, blood test near Narsingi, lab test Gachibowli, full body checkup Kokapet"
        schema={medicalSpecialtySchema({
          name: 'Diagnostics & Lab',
          description: 'Blood tests, health panels and diagnostics with same-day reports at Unicare Hospitals, Kokapet.',
          url: 'https://www.unicareglobalhospitals.com/specialties/diagnostics-lab',
        })}
      />
      <PageBanner
        chip="Diagnostics & Lab"
        title="Accurate results. Same day."
        subtitle="Blood tests, health panels and full-body diagnostics with same-day reports — reviewed by our doctors, not just a printout."
      />
    </>
  );
}
