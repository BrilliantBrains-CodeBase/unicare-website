import SEO from '../../../components/SEO';
import PageBanner from '../../../components/PageBanner';
import { medicalSpecialtySchema } from '../../../lib/schema';

export default function GeneralMedicine() {
  return (
    <>
      <SEO
        title="Diabetes Doctor in Kokapet | Endocrinologist Near Financial District"
        description="DM endocrinologist Dr. Deepak Thiriveedi treats diabetes, thyroid and hormonal disorders at UniCare Hospitals, Kokapet, alongside full general medicine care."
        url="/specialties/general-medicine-endocrinology"
        keywords="endocrinologist in Kokapet, diabetes doctor Gachibowli, thyroid specialist Narsingi, general physician Kokapet, diabetologist Financial District Hyderabad"
        schema={medicalSpecialtySchema({
          name: 'General Medicine & Endocrinology',
          description: 'Diabetes, thyroid and hormonal disorder care alongside general medicine at UniCare Hospitals, Kokapet.',
          url: 'https://www.unicareglobalhospitals.com/specialties/general-medicine-endocrinology',
        })}
      />
      <PageBanner
        chip="Diabetes & Hormones"
        title="Precision care for diabetes and hormonal health."
        subtitle="Dr. Deepak Thiriveedi, DM Endocrinology (UK), treats diabetes, thyroid conditions and hormonal disorders alongside full general medicine."
      />
    </>
  );
}
