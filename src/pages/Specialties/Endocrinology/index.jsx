import SEO from '../../../components/SEO';
import PageHeroBanner from '../../../components/PageHeroBanner';
import CTABand from '../../../components/CTABand';
import bannerImg from '../../../assets/endocrinology.png';
import { medicalSpecialtySchema, faqPageSchema } from '../../../lib/schema';
import DepartmentAbout from './components/DepartmentAbout';

const schema = [
  medicalSpecialtySchema({
    name: 'Endocrinology',
    description: 'Expert diabetes, thyroid and hormone care at Unicare Hospitals, Kokapet. Comprehensive endocrinology services for diabetes, thyroid disorders, obesity and hormonal conditions.',
    url: 'https://www.unicareglobalhospitals.com/specialties/endocrinology',
  }),
  faqPageSchema([
    {
      q: 'Do you provide treatment for diabetes at Unicare Hospitals?',
      a: 'Yes. Unicare Hospitals offers comprehensive diabetes care including diagnosis, medication management, insulin therapy, lifestyle counselling and long-term monitoring to help patients maintain healthy blood sugar levels.',
    },
    {
      q: 'Can I consult for thyroid problems at Unicare Hospitals?',
      a: 'Yes. We evaluate and treat common thyroid conditions including hypothyroidism, hyperthyroidism, thyroid nodules and other thyroid hormone disorders with appropriate investigations and personalized treatment plans.',
    },
    {
      q: 'Do you treat hormonal disorders and obesity?',
      a: 'Yes. Our endocrinology services include treatment for obesity, metabolic syndrome, PCOS-related hormonal imbalance, osteoporosis, adrenal disorders and other endocrine conditions through evidence-based medical care.',
    },
  ]),
];

export default function Endocrinology() {
  return (
    <>
      <SEO
        title="Endocrinologist in Kokapet | Diabetes & Thyroid Care Near Narsingi"
        description="Expert diabetes, thyroid and hormone care at Unicare Hospitals, Kokapet. Comprehensive endocrinology services for diabetes, thyroid disorders, obesity and hormonal conditions. Book your consultation today."
        url="/specialties/endocrinology"
        keywords="endocrinologist in Kokapet, diabetes specialist Kokapet, thyroid doctor near Narsingi, hormone specialist Gachibowli, diabetes treatment Financial District, endocrine clinic West Hyderabad"
        schema={schema}
      />
      <PageHeroBanner
        heading="Better hormones. Better health. Better every day."
        breadcrumbLabel="Endocrinology"
        image={bannerImg}
      />
      <DepartmentAbout />
      <CTABand heading="Take control of your diabetes and hormonal health." chip="Book Consultation" />
    </>
  );
}
