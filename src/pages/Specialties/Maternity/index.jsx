import SEO from '../../../components/SEO';
import PageHeroBanner from '../../../components/PageHeroBanner';
import bannerImg from '../../../assets/maternity.png';
import { medicalSpecialtySchema } from '../../../lib/schema';

export default function Maternity() {
  return (
    <>
      <SEO
        title="Maternity Hospital in Kokapet | Gynecologist Near Narsingi"
        description="Pregnancy care, deliveries, fertility and gynecology at UniCare Hospitals, Kokapet. Led by Dr. A.N. Varuna Vyas, MBBS, DGO, DNB, FRM. Book a consultation."
        url="/specialties/maternity-womens-health"
        keywords="maternity hospital Kokapet, gynecologist in Kokapet, best gynecologist near Narsingi, pregnancy care Gachibowli, fertility specialist West Hyderabad"
        schema={medicalSpecialtySchema({
          name: "Maternity & Women's Health",
          description: 'Pregnancy care, deliveries, fertility and gynecology at UniCare Hospitals, Kokapet.',
          url: 'https://www.unicareglobalhospitals.com/specialties/maternity-womens-health',
        })}
      />
      <PageHeroBanner heading="Expert care through every stage of womanhood." breadcrumbLabel="Maternity & Women's Health" image={bannerImg}
        
        
        
      />
    </>
  );
}
