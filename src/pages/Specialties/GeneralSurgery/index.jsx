import SEO from '../../../components/SEO';
import PageHeroBanner from '../../../components/PageHeroBanner';
import bannerImg from '../../../assets/surgery-ot.png';
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
      <PageHeroBanner heading="Minimal access. Maximum precision." breadcrumbLabel="Surgery" image={bannerImg}
        
        
        
      />
    </>
  );
}
