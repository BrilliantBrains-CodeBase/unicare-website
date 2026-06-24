import SEO from '../../components/SEO';
import PageBanner from '../../components/PageBanner';

export default function BookAppointment() {
  return (
    <>
      <SEO
        title="Book an Appointment | UniCare Hospitals Kokapet"
        description="Book a doctor appointment at UniCare Hospitals, Kokapet in under a minute. Call, WhatsApp or use the online form. Same-day confirmations."
        url="/book-an-appointment"
        keywords="book doctor appointment Kokapet, doctor appointment near Narsingi, gynecologist appointment Kokapet"
      />
      <PageBanner
        chip="Book Appointment"
        title="Book your visit in under a minute."
        subtitle="Call, WhatsApp or fill the form below. Our team confirms same-day and you're set."
      />
    </>
  );
}
