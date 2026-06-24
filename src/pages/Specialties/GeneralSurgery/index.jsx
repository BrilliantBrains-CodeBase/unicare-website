import SEO from '../../../components/SEO';
import PageBanner from '../../../components/PageBanner';
import { medicalSpecialtySchema } from '../../../lib/schema';

export default function GeneralSurgery() {
  return (
    <>
      <SEO
        title="Laparoscopic Surgeon in Kokapet | General Surgery Hyderabad"
        description="Advanced laparoscopic and general surgery at UniCare Hospitals, Kokapet, led by founder Dr. Bhargava Vyas A.N., MS, FIAGES, FMAS. Book a surgical opinion."
        url="/specialties/general-minimal-access-surgery"
        keywords="laparoscopic surgeon Kokapet, general surgeon Narsingi, hernia surgery Hyderabad, gallbladder surgery Kokapet, appendix surgery West Hyderabad"
        schema={medicalSpecialtySchema({
          name: 'General & Minimal Access Surgery',
          description: 'Advanced laparoscopic and general surgery at UniCare Hospitals, Kokapet.',
          url: 'https://www.unicareglobalhospitals.com/specialties/general-minimal-access-surgery',
        })}
      />
      <PageBanner
        chip="Surgery"
        title="Minimal access. Maximum precision."
        subtitle="Advanced laparoscopic and general surgery led by Dr. Bhargava Vyas A.N., MS, FIAGES, FMAS — smaller incisions, faster recovery."
      />
    </>
  );
}
