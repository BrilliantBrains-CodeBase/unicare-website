import SEO from '../../../components/SEO';
import PageHeroBanner from '../../../components/PageHeroBanner';
import CTABand from '../../../components/CTABand';
import bannerImg from '../../../assets/surgery-ot.png';
import { medicalSpecialtySchema, faqPageSchema } from '../../../lib/schema';
import DepartmentAbout from './components/DepartmentAbout';

const schema = [
  medicalSpecialtySchema({
    name: 'General & Minimal Access Surgery',
    description: 'Advanced laparoscopic and general surgery at UniCare Hospitals, Kokapet.',
    url: 'https://www.unicareglobalhospitals.com/specialties/general-minimal-access-surgery',
  }),
  faqPageSchema([
    {
      q: 'Who is the laparoscopic surgeon at Unicare Hospitals Kokapet?',
      a: 'Dr. Bhargava Vyas A.N., MBBS, MS (General Surgery), FIAGES, FMAS, is the Founder and Clinical Lead for General and Minimal Access Surgery at Unicare Hospitals, Kokapet. He performs laparoscopic gallbladder, hernia, appendix and other keyhole procedures.',
    },
    {
      q: 'Is laparoscopic surgery better than open surgery?',
      a: 'For many conditions such as gallstones, hernia and appendicitis, laparoscopic surgery offers smaller incisions, less post-operative pain, shorter hospital stays and faster recovery. Suitability depends on the individual case, which our surgeon assesses during a detailed consultation.',
    },
    {
      q: 'Does insurance cover surgery at Unicare Hospitals?',
      a: 'Yes. Unicare Hospitals is empanelled with leading insurers and TPAs, and most planned surgical procedures are covered under cashless or reimbursement claims, subject to your policy. Our front desk team assists with pre-authorisation and paperwork.',
    },
  ]),
];

export default function GeneralSurgery() {
  return (
    <>
      <SEO
        title="Laparoscopic Surgeon in Kokapet | General Surgery Hyderabad"
        description="Advanced laparoscopic and general surgery at UniCare Hospitals, Kokapet, led by founder Dr. Bhargava Vyas A.N., MS, FIAGES, FMAS. Book a surgical opinion."
        url="/specialties/general-minimal-access-surgery"
        keywords="laparoscopic surgeon Kokapet, general surgeon Narsingi, hernia surgery Hyderabad, gallbladder surgery Kokapet, appendix surgery West Hyderabad"
        schema={schema}
      />
      <PageHeroBanner heading="Minimal access. Maximum precision." breadcrumbLabel="Surgery" image={bannerImg} />
      <DepartmentAbout />
    </>
  );
}
