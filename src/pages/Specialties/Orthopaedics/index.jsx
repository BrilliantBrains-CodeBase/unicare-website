import SEO from '../../../components/SEO';
import PageBanner from '../../../components/PageBanner';
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
      <PageBanner
        chip="Orthopaedics"
        title="Bone, joint and spine care in Kokapet."
        subtitle="Consultations for fractures, joint pain, spine issues and sports injuries — with physiotherapy guidance for lasting recovery."
      />
    </>
  );
}
