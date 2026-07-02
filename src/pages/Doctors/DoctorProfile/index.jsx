import { Navigate, useParams } from 'react-router-dom';
import SEO from '../../../components/SEO';
import CTABand from '../../../components/CTABand';
import { physicianSchema } from '../../../lib/schema';
import { getDoctorBySlug } from '../../../data/doctors';
import DoctorPhotoCard from './components/DoctorPhotoCard';
import DoctorInfoCard from './components/DoctorInfoCard';
import AboutCard from './components/AboutCard';
import QualificationCard from './components/QualificationCard';
import TestimonialSection from './components/TestimonialSection';

export default function DoctorProfile() {
  const { slug } = useParams();
  const doctor = getDoctorBySlug(slug);

  if (!doctor) return <Navigate to="/doctors" replace />;

  const shortRole = doctor.role.split('—')[1]?.trim() ?? doctor.specialty;

  const schema = physicianSchema({
    name: doctor.name,
    jobTitle: doctor.role,
    image: doctor.photo,
    specialty: doctor.specialty,
  });

  return (
    <>
      <SEO
        title={`${doctor.name} | ${shortRole} | UniCare Hospitals`}
        description={doctor.bio.length > 155 ? `${doctor.bio.slice(0, 152)}...` : doctor.bio}
        url={`/doctors/${doctor.slug}`}
        schema={schema}
      />

      <section className="pt-20 xl:pt-24 2xl:pt-28 px-4 sm:px-6 lg:px-10 2xl:px-20 pb-10 sm:pb-14 lg:pb-16">
        <div className="max-w-330 mx-auto grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-8">

          {/* Left — column stretches to match the right column's full height; the photo card inside sticks to the top */}
          <div className="lg:col-span-2">
            <DoctorPhotoCard doctor={doctor} />
          </div>

          {/* Right — info card, about, qualifications, testimonial — scrolls independently */}
          <div className="lg:col-span-3 flex flex-col gap-6">
            <DoctorInfoCard doctor={doctor} />
            <div className="flex flex-col sm:flex-row gap-6 items-stretch">
              <div className="sm:flex-1 min-w-0">
                <AboutCard doctor={doctor} />
              </div>
              <div className="sm:flex-none sm:w-auto sm:min-w-64 sm:max-w-xs">
                <QualificationCard doctor={doctor} />
              </div>
            </div>
            {doctor.testimonials?.length > 0 && <TestimonialSection testimonials={doctor.testimonials} />}
          </div>
        </div>
      </section>
    </>
  );
}
