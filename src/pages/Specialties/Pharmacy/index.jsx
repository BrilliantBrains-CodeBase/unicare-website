import SEO from '../../../components/SEO';
import PageHeroBanner from '../../../components/PageHeroBanner';
import bannerImg from '../../../assets/pharmacy.png';
import { medicalSpecialtySchema } from '../../../lib/schema';

export default function Pharmacy() {
  return (
    <>
      <SEO
        title="Hospital Pharmacy in Kokapet | UniCare Hospitals"
        description="In-house pharmacy at UniCare Hospitals, Kokapet. Prescribed medicines, genuine stock and pharmacist guidance, right after your consultation."
        url="/specialties/pharmacy"
        keywords="pharmacy in Kokapet, medical store Kokapet, hospital pharmacy Narsingi"
        schema={medicalSpecialtySchema({
          name: 'Pharmacy',
          description: 'In-house pharmacy at UniCare Hospitals, Kokapet.',
          url: 'https://www.unicareglobalhospitals.com/specialties/pharmacy',
        })}
      />
      <PageHeroBanner heading="Your prescription, filled right here." breadcrumbLabel="Pharmacy" image={bannerImg}
        
        
        
      />
    </>
  );
}
