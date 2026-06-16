import SEO from '../../../components/SEO';
import PageBanner from '../../../components/PageBanner';
import { medicalSpecialtySchema } from '../../../lib/schema';

export default function Pharmacy() {
  return (
    <>
      <SEO
        title="Hospital Pharmacy in Kokapet | Unicare Hospitals"
        description="In-house pharmacy at Unicare Hospitals, Kokapet. Prescribed medicines, genuine stock and pharmacist guidance, right after your consultation."
        url="/specialties/pharmacy"
        keywords="pharmacy in Kokapet, medical store Kokapet, hospital pharmacy Narsingi"
        schema={medicalSpecialtySchema({
          name: 'Pharmacy',
          description: 'In-house pharmacy at Unicare Hospitals, Kokapet.',
          url: 'https://www.unicareglobalhospitals.com/specialties/pharmacy',
        })}
      />
      <PageBanner
        chip="Pharmacy"
        title="Your prescription, filled right here."
        subtitle="In-house pharmacy with genuine medicines and pharmacist guidance — no extra trip, right after your consultation."
      />
    </>
  );
}
