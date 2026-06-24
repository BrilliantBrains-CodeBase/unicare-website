import SEO from '../../components/SEO';
import PageBanner from '../../components/PageBanner';
import CTABand from '../../components/CTABand';

export default function Packages() {
  return (
    <>
      <SEO
        title="Health Checkup Packages in Kokapet | Unicare Hospitals"
        description="Preventive health checkup packages at Unicare Hospitals, Kokapet: full body, diabetes, women's health and senior citizen panels with doctor review."
        url="/health-checkup-packages"
        keywords="health checkup packages Kokapet, full body checkup near Gachibowli, master health checkup West Hyderabad"
      />
      <PageBanner
        chip="Health Packages"
        title="Preventive care, priced simply."
        subtitle="Full-body panels, diabetes screens, women's health and senior citizen packages — each reviewed personally by our doctors."
      />

      <CTABand
        chip="Book a Package"
        heading="Have Questions About Our Packages? Talk To Our Team."
        subtext="Call us, WhatsApp or book online — our team will help you pick the right health panel and schedule your visit."
      />
    </>
  );
}
