import { useRef, useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import SEO from '../../components/SEO';
import PageHeroBanner from '../../components/PageHeroBanner';
import bannerImg from '../../assets/general-medicine.png';
import { Phone, Pin } from '../../components/icons';

const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwGla8dr0IPmb5wKhYMHLgyh5-vxAZQOkXof6nMdXIf_UgRkc1aZDqxlzVYtuZQyvpm/exec';

const DOCTORS = [
  'Dr. A.N. Varuna Vyas',
  'Dr. Deepak Thiriveedi',
  'Dr. Mareddy Veena',
  'Dr. M. Nitin Rao',
  'Dr. Bhargava Vyas A.N.',
];

const SPECIALTIES = [
  'Gynecology & Obstetrics',
  'Pediatrics and Neonatal Care',
  'Orthopedics',
  'General Medicine',
  'General and Minimal Access Surgery',
  'Endocrinology and Diabetes',
  'Pharmacy',
  'Diagnostics and Lab',
];

export default function BookAppointment() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const formRef = useRef(null);
  const formSectionRef = useRef(null);
  const [status, setStatus] = useState('idle');

  const preselectedDoctor = searchParams.get('doctor') || '';

  // Scroll to form when doctor param is present
  useEffect(() => {
    if (preselectedDoctor && formSectionRef.current) {
      setTimeout(() => {
        formSectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 400);
    }
  }, [preselectedDoctor]);

  async function handleSubmit(e) {
    e.preventDefault();
    const form = formRef.current;
    const name     = form.elements['name'].value.trim();
    const mobile   = form.elements['mobile'].value.trim();
    const doctor   = form.elements['doctor'].value;
    const specialty = form.elements['specialty'].value;
    const reason   = form.elements['reason'].value.trim();
    const date     = form.elements['date'].value;

    if (!name || !mobile) return;

    setStatus('loading');
    try {
      await fetch(SCRIPT_URL, {
        method: 'POST',
        body: JSON.stringify({ name, mobile, doctor, specialty, reason, date }),
      });
      navigate('/thank-you');
    } catch {
      setStatus('error');
    }
  }

  return (
    <>
      <SEO
        title="Book an Appointment | UniCare Hospitals Kokapet"
        description="Book a doctor appointment at UniCare Hospitals, Kokapet in under a minute. Call, WhatsApp or use the online form. Same-day confirmations."
        url="/book-an-appointment"
        keywords="book doctor appointment Kokapet, doctor appointment near Narsingi, gynecologist appointment Kokapet"
      />

      <PageHeroBanner heading="Book your visit in under a minute." breadcrumbLabel="Book Appointment" image={bannerImg}
        
        
        
      />

      {/* Form section */}
      <section
        ref={formSectionRef}
        className="px-4 sm:px-6 lg:px-10 py-12 sm:py-16 scroll-mt-24"
      >
        <div className="max-w-330 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-start">

            {/* Left sidebar */}
            <div
              className="rounded-[20px] p-6 sm:p-8 text-white flex flex-col gap-6 relative overflow-hidden"
              style={{ background: 'var(--navy)' }}
            >
              <svg viewBox="0 0 300 300" className="absolute -right-16 -bottom-16 w-64 opacity-[.07] pointer-events-none" aria-hidden="true">
                <circle cx="150" cy="150" r="130" fill="none" stroke="#2CAAA0" strokeWidth="1.5"/>
                <circle cx="150" cy="150" r="90"  fill="none" stroke="#2CAAA0" strokeWidth="1.5"/>
                <circle cx="150" cy="150" r="50"  fill="none" stroke="#2CAAA0" strokeWidth="1.5"/>
              </svg>

              <div>
                <h3 className="font-display text-[22px] sm:text-[26px] leading-snug mb-2">Need help booking?</h3>
                <p className="text-[13px] text-white/60 leading-relaxed">
                  Our team is ready to assist with appointments, specialist guidance, and general queries.
                </p>
              </div>

              <div className="flex flex-col gap-2.5">
                <a href="tel:+919090546363" className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-white/10 hover:bg-white/15 transition-colors">
                  <span className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0" style={{ background: 'rgba(44,170,160,0.2)' }}>
                    <Phone s={15} c="#2CAAA0" />
                  </span>
                  <div>
                    <div className="text-[13.5px] font-semibold">+91 90905 46363</div>
                    <div className="text-[11px] text-white/50">Available during hospital hours</div>
                  </div>
                </a>
                <div className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-white/10">
                  <span className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0" style={{ background: 'rgba(44,170,160,0.2)' }}>
                    <Pin s={15} c="#2CAAA0" />
                  </span>
                  <div>
                    <div className="text-[13.5px] font-semibold">Narsingi, Kokapet, Hyderabad</div>
                    <div className="text-[11px] text-white/50">Modern family care, close to home</div>
                  </div>
                </div>
              </div>

              <div className="h-px bg-white/10" />
              <ul className="flex flex-col gap-2.5 text-[12.5px] text-white/70">
                {['Same-day appointment confirmations', 'No advance payment to book', 'Insurance assistance at front desk', 'Free parking available'].map(p => (
                  <li key={p} className="flex items-center gap-2">
                    <span className="w-4 h-4 rounded-full flex items-center justify-center shrink-0 text-[8px] font-bold text-white" style={{ background: 'var(--teal)' }}>✓</span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>

            {/* Form */}
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              noValidate
              className="lg:col-span-2 rounded-[20px] border border-(--line) bg-white p-6 sm:p-8 md:p-10 flex flex-col gap-6"
            >
              {preselectedDoctor && (
                <div className="rounded-2xl px-4 py-3 text-[13px] font-medium flex items-center gap-2" style={{ background: 'var(--teal-soft)', color: 'var(--teal)' }}>
                  <span className="text-[16px]">✓</span>
                  Booking with <strong className="ml-1">{preselectedDoctor}</strong>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="ba-name" className="text-[11px] tracking-[0.16em] uppercase font-semibold" style={{ color: 'var(--muted)' }}>
                    Full Name <span className="text-red-500" aria-hidden="true">*</span>
                  </label>
                  <input id="ba-name" name="name" type="text" autoComplete="name" required placeholder="Your full name"
                    className="w-full rounded-2xl px-4 py-3.5 text-[14px] outline-none border border-(--line) focus:border-(--teal) transition-colors placeholder:text-(--muted)/50"
                    style={{ background: 'var(--bg)', color: 'var(--navy)' }} />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="ba-mobile" className="text-[11px] tracking-[0.16em] uppercase font-semibold" style={{ color: 'var(--muted)' }}>
                    Mobile Number <span className="text-red-500" aria-hidden="true">*</span>
                  </label>
                  <input id="ba-mobile" name="mobile" type="tel" inputMode="numeric" autoComplete="tel" required placeholder="10-digit mobile number"
                    className="w-full rounded-2xl px-4 py-3.5 text-[14px] outline-none border border-(--line) focus:border-(--teal) transition-colors placeholder:text-(--muted)/50"
                    style={{ background: 'var(--bg)', color: 'var(--navy)' }} />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="ba-doctor" className="text-[11px] tracking-[0.16em] uppercase font-semibold" style={{ color: 'var(--muted)' }}>
                    Preferred Doctor
                  </label>
                  <select id="ba-doctor" name="doctor" defaultValue={preselectedDoctor}
                    className="w-full rounded-2xl px-4 py-3.5 text-[14px] outline-none border border-(--line) focus:border-(--teal) transition-colors"
                    style={{ background: 'var(--bg)', color: 'var(--navy)' }}>
                    <option value="">No preference</option>
                    {DOCTORS.map(d => <option key={d} value={d}>{d}</option>)}
                  </select>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="ba-specialty" className="text-[11px] tracking-[0.16em] uppercase font-semibold" style={{ color: 'var(--muted)' }}>
                    Department / Specialty
                  </label>
                  <select id="ba-specialty" name="specialty"
                    className="w-full rounded-2xl px-4 py-3.5 text-[14px] outline-none border border-(--line) focus:border-(--teal) transition-colors"
                    style={{ background: 'var(--bg)', color: 'var(--navy)' }}>
                    <option value="">Select department</option>
                    {SPECIALTIES.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="ba-reason" className="text-[11px] tracking-[0.16em] uppercase font-semibold" style={{ color: 'var(--muted)' }}>
                    Reason for Visit <span className="text-[10px] font-normal normal-case tracking-normal" style={{ color: 'var(--muted)' }}>(optional)</span>
                  </label>
                  <textarea id="ba-reason" name="reason" rows={4} placeholder="Briefly describe your concern"
                    className="w-full rounded-2xl px-4 py-3.5 text-[14px] outline-none border border-(--line) focus:border-(--teal) transition-colors resize-none placeholder:text-(--muted)/50"
                    style={{ background: 'var(--bg)', color: 'var(--navy)' }} />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="ba-date" className="text-[11px] tracking-[0.16em] uppercase font-semibold" style={{ color: 'var(--muted)' }}>
                    Preferred Date <span className="text-[10px] font-normal normal-case tracking-normal" style={{ color: 'var(--muted)' }}>(optional)</span>
                  </label>
                  <input id="ba-date" name="date" type="date"
                    className="w-full rounded-2xl px-4 py-3.5 text-[14px] outline-none border border-(--line) focus:border-(--teal) transition-colors"
                    style={{ background: 'var(--bg)', color: 'var(--navy)' }} />
                </div>
              </div>

              {status === 'error' && (
                <div className="rounded-2xl bg-red-50 border border-red-200 px-4 py-3.5 text-[13px] text-red-600 text-center">
                  Something went wrong. Please try again or call us at +91 90905 46363.
                </div>
              )}

              <div className="flex justify-end pt-2 border-t border-(--line)">
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-[14px] font-semibold text-white disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer transition-opacity hover:opacity-90"
                  style={{ background: 'var(--teal)' }}
                >
                  {status === 'loading' ? 'Submitting…' : 'Request Appointment'}
                </button>
              </div>
            </form>

          </div>
        </div>
      </section>
    </>
  );
}
