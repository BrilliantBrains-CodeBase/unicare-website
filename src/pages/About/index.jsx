import SEO from '../../components/SEO';
import PageHeroBanner from '../../components/PageHeroBanner';
import bannerImg from '../../assets/hospital-exterior-main.png';
import OurStory from './components/OurStory';
import MissionVision from './components/MissionVision';
import OurValues from './components/OurValues';
import TestimonialsSection from './components/TestimonialsSection';
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
      <PageHeroBanner heading="Founded by doctors. Built for families." breadcrumbLabel="About Us" image={bannerImg}



      />

      <OurStory />

      <MissionVision />

      <OurValues />

      <TestimonialsSection />
    </>
  );
}
