import SEO from '../../../components/SEO';
import PageBanner from '../../../components/PageBanner';
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
      <PageBanner
        chip="Child Health"
        title="Specialist paediatric care, close to home."
        subtitle="Newborn checks, vaccinations, fevers and growth monitoring — by MD paediatricians Dr. Mareddy Veena and Dr. M. Nitin Rao."
      />
    </>
  );
}
