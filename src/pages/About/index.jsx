import SEO from '../../components/SEO';
import PageBanner from '../../components/PageBanner';

export default function About() {
  return (
    <>
      <SEO
        title="About Unicare Hospitals | Doctor-Founded Hospital in Kokapet"
        description="Founded by practicing doctors, Unicare Hospitals brings specialist-grade care to Kokapet and West Hyderabad. Read our story, mission and values."
        url="/about-us"
        keywords="about Unicare Hospitals, doctor founded hospital Hyderabad, hospital in Kokapet Telangana"
      />
      <PageBanner
        chip="About Us"
        title="Founded by doctors. Built for families."
        subtitle="Unicare Hospitals was created by practicing specialists who wanted to bring expert, honest care closer to where West Hyderabad families live."
      />
    </>
  );
}
