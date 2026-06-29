import SEO from '../../components/SEO';
import { hospitalSchema } from '../../lib/schema';
import HeroSection from './components/HeroSection';
import TrustBar from './components/TrustBar';
import SpecialtiesSection from './components/SpecialtiesSection';
import WhyChooseUs from './components/WhyChooseUs';
import DoctorsPreview from './components/DoctorsPreview';
import InsuranceSection from '../Specialties/components/InsuranceSection';
import FindUs from './components/FindUs';
import MobileAppSection from './components/MobileAppSection';
import FAQSection from './components/FAQSection';

export default function Home() {
  return (
    <>
      <SEO
        title="UniCare Hospitals Kokapet | Multispecialty Hospital in West Hyderabad"
        description="Doctor-founded multispecialty hospital in Kokapet, Hyderabad. Maternity, pediatrics, surgery, endocrinology, Pharmacy, orthopedics and diagnostics. Call +91 90905 46363."
        url="/"
        keywords="hospital in Kokapet, multispecialty hospital Kokapet, best hospital near Narsingi, hospital near Financial District Hyderabad"
        schema={hospitalSchema()}
      />
      <HeroSection />
      <TrustBar />
      <SpecialtiesSection />
      <WhyChooseUs />
      <DoctorsPreview />
      <InsuranceSection />
      <FindUs />
      <MobileAppSection />
      <FAQSection />
    </>
  );
}
