import SEO from '../../components/SEO';
import PageHeroBanner from '../../components/PageHeroBanner';
import bannerImg from '../../assets/diagnostics.png';
import CTABand from '../../components/CTABand';

export default function Packages() {
  return (
    <>
      <SEO
        title="Health Checkup Packages in Kokapet | UniCare Hospitals"
        description="Preventive health checkup packages at UniCare Hospitals, Kokapet: full body, diabetes, women's health and senior citizen panels with doctor review."
        url="/health-checkup-packages"
        keywords="health checkup packages Kokapet, full body checkup near Gachibowli, master health checkup West Hyderabad"
      />
      <PageHeroBanner heading="Preventive care, priced simply." breadcrumbLabel="Health Packages" image={bannerImg}
        
        
        
      />

      <CTABand
        chip="Book a Package"
        heading="Have Questions About Our Packages? Talk To Our Team."
        subtext="Call us, WhatsApp or book online — our team will help you pick the right health panel and schedule your visit."
      />
    </>
  );
}
