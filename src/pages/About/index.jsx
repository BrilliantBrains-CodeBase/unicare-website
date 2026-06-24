import SEO from '../../components/SEO';
import PageBanner from '../../components/PageBanner';
import CTABand from '../../components/CTABand';

export default function About() {
  return (
    <>
      <SEO
        title="About UniCare Hospitals | Doctor-Founded Hospital in Kokapet"
        description="Founded by practicing doctors, UniCare Hospitals brings specialist-grade care to Kokapet and West Hyderabad. Read our story, mission and values."
        url="/about-us"
        keywords="about UniCare Hospitals, doctor founded hospital Hyderabad, hospital in Kokapet Telangana"
      />
      <PageBanner
        chip="About Us"
        title="Founded by doctors. Built for families."
        subtitle="UniCare Hospitals was created by practicing specialists who wanted to bring expert, honest care closer to where West Hyderabad families live."
      />

      <CTABand
        chip="Visit Us"
        heading="Ready To Meet Your Specialist? We Are Five Minutes Away."
        subtext="Call, WhatsApp or book online — our team will confirm your appointment and guide you to the right specialist."
      />
    </>
  );
}
