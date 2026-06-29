import SEO from '../../../components/SEO';
import PageHeroBanner from '../../../components/PageHeroBanner';
import bannerImg from '../../../assets/ortho.png';
import { medicalSpecialtySchema } from '../../../lib/schema';

export default function Orthopaedics() {
  return (
    <>
      <SEO
        title="Orthopedic Doctor in Kokapet | Bone and Joint Care Hyderabad"
        description="Bone, joint, spine and sports injury care at UniCare Hospitals, Kokapet. Consultations, fracture care and physiotherapy guidance for West Hyderabad families."
        url="/specialties/orthopedics"
        keywords="orthopedic doctor Kokapet, bone specialist Narsingi, knee pain doctor Gachibowli, fracture treatment Kokapet"
        schema={medicalSpecialtySchema({
          name: 'Orthopaedics',
          description: 'Bone, joint, spine and sports injury care at UniCare Hospitals, Kokapet.',
          url: 'https://www.unicareglobalhospitals.com/specialties/orthopedics',
        })}
      />
      <PageHeroBanner heading="Bone, joint and spine care in Kokapet." breadcrumbLabel="Orthopaedics" image={bannerImg}
        
        
        
      />
    </>
  );
}
