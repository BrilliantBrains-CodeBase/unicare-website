import SEO from '../../components/SEO';
import { hospitalSchema } from '../../lib/schema';
import HeroSection from './components/HeroSection';

export default function Home() {
  return (
    <>
      <SEO
        title="Unicare Hospitals Kokapet | Multispecialty Hospital in West Hyderabad"
        description="Doctor-founded multispecialty hospital in Kokapet, Hyderabad. Maternity, pediatrics, surgery, endocrinology, Pharmacy, orthopedics and diagnostics. Call +91 90905 46363."
        url="/"
        keywords="hospital in Kokapet, multispecialty hospital Kokapet, best hospital near Narsingi, hospital near Financial District Hyderabad"
        schema={hospitalSchema()}
      />
      <HeroSection />
    </>
  );
}
