import SEO from '../../../components/SEO';
import PageHeroBanner from '../../../components/PageHeroBanner';
import CTABand from '../../../components/CTABand';
import bannerImg from '../../../assets/general-medicine.png';
import { medicalSpecialtySchema, faqPageSchema } from '../../../lib/schema';
import DepartmentAbout from './components/DepartmentAbout';

const schema = [
  medicalSpecialtySchema({
    name: 'General Medicine & Endocrinology',
    description: 'Diabetes, thyroid and hormonal disorder care alongside general medicine at UniCare Hospitals, Kokapet.',
    url: 'https://www.unicareglobalhospitals.com/specialties/general-medicine-endocrinology',
  }),
  faqPageSchema([
    {
      q: 'Is there an endocrinologist in Kokapet?',
      a: 'Yes. Dr. Deepak Thiriveedi, MBBS, MD, DM (Endocrinology), with the UK SCE in Endocrinology and Diabetes, consults at Unicare Hospitals in Kokapet. He treats diabetes, thyroid disorders, obesity and hormonal conditions for patients across West Hyderabad.',
    },
    {
      q: 'Which is the best diabetes doctor near Gachibowli or the Financial District?',
      a: 'Unicare Hospitals in Kokapet, close to Gachibowli and Financial District, offers diabetes care led by DM endocrinologist Dr. Deepak Thiriveedi, with in-house lab testing for HbA1c and glucose monitoring, so diagnosis, testing and treatment happen in one visit.',
    },
    {
      q: 'Do I need a referral to see an endocrinologist at Unicare?',
      a: 'No referral is needed. You can book a direct consultation with our endocrinologist by calling +91 90905 46363, messaging on WhatsApp, or using the online booking form. Bring any previous reports for a more complete first consultation.',
    },
  ]),
];

export default function GeneralMedicine() {
  return (
    <>
      <SEO
        title="Diabetes Doctor in Kokapet | Endocrinologist Near Financial District"
        description="DM endocrinologist Dr. Deepak Thiriveedi treats diabetes, thyroid and hormonal disorders at UniCare Hospitals, Kokapet, alongside full general medicine care."
        url="/specialties/general-medicine-endocrinology"
        keywords="endocrinologist in Kokapet, diabetes doctor Gachibowli, thyroid specialist Narsingi, general physician Kokapet, diabetologist Financial District Hyderabad"
        schema={schema}
      />
      <PageHeroBanner heading="Precision care for diabetes and hormonal health." breadcrumbLabel="General Medicine" image={bannerImg} />
      <DepartmentAbout />
    </>
  );
}
