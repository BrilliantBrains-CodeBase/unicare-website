import SEO from '../../../components/SEO';
import PageHeroBanner from '../../../components/PageHeroBanner';
import bannerImg from '../../../assets/pediatric.png';
import { medicalSpecialtySchema } from '../../../lib/schema';

export default function Paediatrics() {
  return (
    <>
      <SEO
        title="Pediatrician in Kokapet | Child Specialist Near Gachibowli"
        description="Child and newborn care at UniCare Hospitals, Kokapet by MD pediatricians Dr. Mareddy Veena and Dr. M. Nitin Rao. Vaccinations, fevers, growth checks."
        url="/specialties/pediatrics"
        keywords="pediatrician in Kokapet, child specialist Narsingi, baby doctor near Gachibowli, vaccination center Kokapet, newborn care West Hyderabad"
        schema={medicalSpecialtySchema({
          name: 'Paediatrics',
          description: 'Child and newborn care at UniCare Hospitals, Kokapet.',
          url: 'https://www.unicareglobalhospitals.com/specialties/pediatrics',
        })}
      />
      <PageHeroBanner heading="Specialist paediatric care, close to home." breadcrumbLabel="Child Health" image={bannerImg}
        
        
        
      />
    </>
  );
}
