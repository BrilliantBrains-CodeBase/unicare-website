import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { IconCircleCheck } from '@tabler/icons-react';
import { Arrow } from '../../../components/icons';
import { slideLeft, slideRight, vp } from '../../../lib/animations';

const SCRIPT_URL = 'https://script.google.com/macros/s/REPLACE_WITH_PACKAGES_FORM_SCRIPT_ID/exec';

const WHY_POINTS = [
  'Every report is explained in person by a doctor, with a clear action plan.',
  'All tests are done in-house in a single morning visit.',
  'Abnormal findings route directly to the right specialist in the same building.',
];

const PACKAGE_TYPES = [
  'Complete Blood Picture (CBP) / Complete Blood Count (CBC)',
  'Blood Sugar Tests',
  'Renal (Kidney) Profile',
  'Liver Function Tests (LFT)',
  'Thyroid Profile',
  'Vitamin Profile',
  'Hormone Tests',
  'Lipid Profile (Cholesterol Tests)',
  'Cardiac Markers',
  'Fertility Tests',
  'Antenatal Profile',
  'Imaging & Diagnostic Procedures',
  'Other',
];

export default function PackageBooking({ selectedPackage, onPackageChange }) {
  const [name,        setName]        = useState('');
  const [phone,       setPhone]       = useState('');
  const [packageType, setPackageType] = useState(selectedPackage || '');
  const [message,     setMessage]     = useState('');
  const [status,      setStatus]      = useState('idle'); // idle | loading | success | error

  // Sync external selection (from PackageList click) into local state
  useEffect(() => {
    if (selectedPackage) setPackageType(selectedPackage);
  }, [selectedPackage]);

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('loading');
    try {
      const fd = new FormData();
      fd.append('name',        name);
      fd.append('phone',       phone);
      fd.append('packageType', packageType);
      fd.append('message',     message);
      fd.append('source',      'packages-booking');
      await fetch(SCRIPT_URL, { method: 'POST', body: fd });
      setStatus('success');
    } catch {
      setStatus('error');
    }
  }

  return (
    <section id="package-booking" className="bg-white pb-16 sm:pb-20 px-4 sm:px-6 lg:px-10">
      <div className="max-w-330 mx-auto">
        <div className="grid grid-cols-12 gap-5 sm:gap-6 items-stretch">

          {/* LEFT — navy sidebar with "Why" points */}
          <motion.div
            className="col-span-12 lg:col-span-5"
            variants={slideLeft}
            initial="hidden"
            whileInView="visible"
            viewport={vp}
          >
            <div
              className="h-full rounded-[20px] sm:rounded-[28px] text-white p-6 sm:p-8 md:p-10 flex flex-col relative overflow-hidden min-h-72 lg:min-h-0"
              style={{ background: 'var(--navy)' }}
            >
              {/* Decorative circles */}
              <svg viewBox="0 0 220 220" className="absolute -right-8 -top-8 w-50 opacity-[.06] pointer-events-none" aria-hidden="true">
                <circle cx="110" cy="110" r="100" fill="none" stroke="#2CAAA0" strokeWidth="1.5"/>
                <circle cx="110" cy="110" r="70"  fill="none" stroke="#2CAAA0" strokeWidth="1.5"/>
                <circle cx="110" cy="110" r="40"  fill="none" stroke="#2CAAA0" strokeWidth="1.5"/>
              </svg>

              <p className="text-[11px] font-bold tracking-[0.2em] uppercase mb-4" style={{ color: 'var(--teal)' }}>
                WHY CHOOSE US
              </p>

              <h2 className="font-display text-[26px] sm:text-[32px] leading-[1.15] mb-8">
                <span className="font-normal">Why a Unicare health check </span>
                <span className="font-bold">is different.</span>
              </h2>

              <div className="flex flex-col gap-6 mt-auto">
                {WHY_POINTS.map((point, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span
                      className="w-8 h-8 rounded-xl flex items-center justify-center shrink-0 mt-0.5"
                      style={{ background: 'rgba(44,170,160,0.18)' }}
                    >
                      <IconCircleCheck size={16} color="#2CAAA0" stroke={2} />
                    </span>
                    <p className="text-[14px] leading-[1.7] text-white/75">{point}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* RIGHT — booking form */}
          <motion.div
            className="col-span-12 lg:col-span-7"
            variants={slideRight}
            initial="hidden"
            whileInView="visible"
            viewport={vp}
          >
            <div
              className="h-full bg-white rounded-[20px] sm:rounded-[28px] p-6 sm:p-8 md:p-10"
              style={{ border: '1px solid var(--line)' }}
            >
              {status === 'success' ? (
                <div
                  className="flex flex-col items-center justify-center text-center py-16 px-6 rounded-2xl h-full min-h-80"
                  style={{ background: 'var(--teal-soft)', border: '1px solid rgba(44,170,160,0.2)' }}
                >
                  <span
                    className="w-12 h-12 rounded-full text-[20px] font-bold text-white flex items-center justify-center mb-5"
                    style={{ background: 'var(--teal)' }}
                  >✓</span>
                  <h3 className="font-display text-[22px] mb-2" style={{ color: 'var(--navy)' }}>Booking Request Received</h3>
                  <p className="text-[14.5px] leading-relaxed max-w-96" style={{ color: 'var(--muted)' }}>
                    Thank you. Our team will call you back within working hours to confirm your health checkup appointment.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>

                  <p className="font-display text-[20px] sm:text-[24px] leading-snug mb-6" style={{ color: 'var(--navy)' }}>
                    <span className="font-normal">Book your </span>
                    <span className="font-bold">health checkup.</span>
                  </p>

                  {/* Step 1 — Details */}
                  <div className="mb-7">
                    <p className="text-[10.5px] tracking-[0.16em] uppercase font-semibold mb-4" style={{ color: 'var(--muted)' }}>
                      <span
                        className="inline-flex items-center justify-center w-5 h-5 rounded-full text-white text-[10px] mr-2"
                        style={{ background: 'var(--navy)' }}
                      >1</span>
                      Your Details
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="pb-name" className="text-[12px] font-medium" style={{ color: 'var(--navy)', opacity: 0.7 }}>
                          Full Name <span className="text-red-400">*</span>
                        </label>
                        <input
                          id="pb-name"
                          type="text"
                          required
                          value={name}
                          onChange={e => setName(e.target.value)}
                          placeholder="Your name"
                          className="h-11 rounded-xl px-4 text-[14px] bg-white focus:outline-none transition"
                          style={{
                            border: '1px solid var(--line)',
                            color: 'var(--navy)',
                          }}
                        />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="pb-phone" className="text-[12px] font-medium" style={{ color: 'var(--navy)', opacity: 0.7 }}>
                          Mobile Number <span className="text-red-400">*</span>
                        </label>
                        <input
                          id="pb-phone"
                          type="tel"
                          required
                          value={phone}
                          onChange={e => setPhone(e.target.value)}
                          placeholder="+91 XXXXX XXXXX"
                          className="h-11 rounded-xl px-4 text-[14px] bg-white focus:outline-none transition"
                          style={{
                            border: '1px solid var(--line)',
                            color: 'var(--navy)',
                          }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Step 2 — Package type */}
                  <div className="mb-7">
                    <p className="text-[10.5px] tracking-[0.16em] uppercase font-semibold mb-4" style={{ color: 'var(--muted)' }}>
                      <span
                        className="inline-flex items-center justify-center w-5 h-5 rounded-full text-white text-[10px] mr-2"
                        style={{ background: 'var(--navy)' }}
                      >2</span>
                      Package Interest
                    </p>
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="pb-package" className="text-[12px] font-medium" style={{ color: 'var(--navy)', opacity: 0.7 }}>
                        Select a package
                      </label>
                      <select
                        id="pb-package"
                        value={packageType}
                        onChange={e => {
                          setPackageType(e.target.value);
                          onPackageChange?.(e.target.value);
                        }}
                        className="h-11 rounded-xl px-4 text-[14px] bg-white appearance-none cursor-pointer focus:outline-none transition"
                        style={{
                          border: '1px solid var(--line)',
                          color: packageType ? 'var(--navy)' : 'var(--muted)',
                          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%235b6577' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`,
                          backgroundRepeat: 'no-repeat',
                          backgroundPosition: 'right 14px center',
                          paddingRight: '40px',
                        }}
                      >
                        <option value="" disabled>Choose a package…</option>
                        {PACKAGE_TYPES.map(pkg => (
                          <option key={pkg} value={pkg}>{pkg}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Step 3 — Message */}
                  <div className="mb-7">
                    <p className="text-[10.5px] tracking-[0.16em] uppercase font-semibold mb-4" style={{ color: 'var(--muted)' }}>
                      <span
                        className="inline-flex items-center justify-center w-5 h-5 rounded-full text-white text-[10px] mr-2"
                        style={{ background: 'var(--navy)' }}
                      >3</span>
                      Any Questions?
                    </p>
                    <textarea
                      rows={4}
                      value={message}
                      onChange={e => setMessage(e.target.value)}
                      placeholder="Ask us anything about the packages or tests included…"
                      className="w-full rounded-xl px-4 py-3 text-[14px] bg-white focus:outline-none transition resize-none"
                      style={{ border: '1px solid var(--line)', color: 'var(--navy)' }}
                    />
                  </div>

                  {status === 'error' && (
                    <div className="mb-5 rounded-xl bg-red-50 border border-red-200 px-4 py-3 text-[13.5px] text-red-700">
                      Something went wrong. Please try again or call{' '}
                      <a href="tel:+919090546363" className="font-medium underline">+91 90905 46363</a>.
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="btn-dark w-full sm:w-auto disabled:opacity-60"
                  >
                    <span>{status === 'loading' ? 'Sending…' : 'Book Checkup'}</span>
                    {status !== 'loading' && <span className="arrow"><Arrow s={13} /></span>}
                  </button>

                </form>
              )}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
