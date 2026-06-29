/* placeholder logos — swap with real partner assets once added to content doc */

function LogoHealthCare() {
  return (
    <div className="flex items-center gap-2 shrink-0">
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <path d="M18 3 L32 10.5 V25.5 L18 33 L4 25.5 V10.5 Z" stroke="#7B7BE5" strokeWidth="1.5" fill="none"/>
        <path d="M18 3 L32 10.5 V25.5 L18 33 L4 25.5 V10.5 Z" fill="#7B7BE5" fillOpacity="0.1"/>
        <path d="M12 18h12M18 12v12" stroke="#2CAAA0" strokeWidth="2.5" strokeLinecap="round"/>
      </svg>
      <span className="text-[11px] font-bold tracking-[0.1em] uppercase leading-tight" style={{ color: 'var(--navy)' }}>
        Health<br/>Care
      </span>
    </div>
  );
}

function LogoWorldHeart() {
  return (
    <div className="flex items-center gap-2 shrink-0">
      <div className="rounded-md px-2 py-1.5 flex flex-col items-center" style={{ background: '#C8102E' }}>
        <span className="text-[8px] text-white font-medium tracking-widest">WORLD</span>
        <span className="text-[18px] font-black text-white leading-none tracking-tight">HEART</span>
        <span className="text-[8px] text-white font-medium tracking-widest">DAY</span>
      </div>
    </div>
  );
}

function LogoHealthyLife() {
  return (
    <div className="flex items-center gap-2 shrink-0">
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="14" stroke="#2CAAA0" strokeWidth="1.2" fill="none"/>
        <path d="M10 20 Q12 10 16 14 Q20 18 22 10" stroke="#2CAAA0" strokeWidth="1.8" strokeLinecap="round" fill="none"/>
        <circle cx="16" cy="10" r="2.5" fill="#7B7BE5" opacity="0.7"/>
      </svg>
      <span className="text-[13px] leading-none" style={{ color: 'var(--navy)' }}>
        <span className="font-normal">Healthy</span><span className="font-bold">Life</span>
      </span>
    </div>
  );
}

function LogoSurvivor() {
  return (
    <div className="flex items-center gap-2 shrink-0">
      <svg width="28" height="32" viewBox="0 0 28 32" fill="none">
        <path d="M14 2 Q22 8 22 16 Q22 26 14 30 Q6 26 6 16 Q6 8 14 2Z" fill="#2CAAA0" fillOpacity="0.15" stroke="#2CAAA0" strokeWidth="1.2"/>
        <path d="M8 18 Q14 14 20 18" stroke="#2CAAA0" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
        <circle cx="14" cy="13" r="3" fill="#2CAAA0" fillOpacity="0.6"/>
      </svg>
      <div className="flex flex-col leading-tight">
        <span className="text-[9px] font-medium tracking-wide uppercase" style={{ color: 'var(--muted)' }}>I AM A</span>
        <span className="text-[11px] font-bold tracking-wide uppercase" style={{ color: '#2CAAA0' }}>SURVIVOR</span>
      </div>
    </div>
  );
}

export default function InsuranceSection() {
  return (
    <section className="bg-white px-4 sm:px-6 lg:px-10 py-14 sm:py-16">
      <div className="max-w-330 mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">

          {/* Left: heading */}
          <div className="lg:w-72 shrink-0 text-center lg:text-left">
            <p
              className="text-[11px] font-bold tracking-[0.2em] uppercase mb-3"
              style={{ color: 'var(--teal)' }}
            >
              Insurance
            </p>
            <h2
              className="font-display text-[38px] sm:text-[46px] leading-[1.1]"
              style={{ color: 'var(--navy)' }}
            >
              <span className="font-normal block">Our Accepted</span>
              <span className="font-bold block">Insurance</span>
            </h2>
          </div>

          {/* Right: logo pill */}
          <div className="flex-1 w-full">

            {/* Mobile: auto-sliding marquee carousel */}
            <div className="lg:hidden rounded-[20px] py-6 overflow-hidden" style={{ background: 'var(--soft)' }}>
              <div
                className="flex whitespace-nowrap"
                style={{ animation: 'marquee 8s linear infinite' }}
              >
                {[0, 1].map(i => (
                  <div key={i} className="flex items-center gap-10 px-8 shrink-0">
                    <LogoHealthCare />
                    <LogoWorldHeart />
                    <LogoHealthyLife />
                    <LogoSurvivor />
                  </div>
                ))}
              </div>
            </div>

            {/* Desktop: static row */}
            <div
              className="hidden lg:flex rounded-[20px] px-10 py-8 items-center justify-around gap-6"
              style={{ background: 'var(--soft)' }}
            >
              <LogoHealthCare />
              <LogoWorldHeart />
              <LogoHealthyLife />
              <LogoSurvivor />
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
