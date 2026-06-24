const trustItems = [
  'Experienced Specialists',
  'Modern Diagnostics',
  'Pharmacy On-Site',
];

const allItems = [...Array(8)].flatMap(() => trustItems);

export default function TrustBar() {
  return (
    // mx-6 matches the hero section's side inset — together they form one floating card.
    // No negative margin; the bar connects flush to the hero's bottom edge.
    <div className="lg:mx-6 2xl:mx-8 relative z-10" aria-label="Trust signals">
      <div
        className="overflow-hidden lg:rounded-b-[44px] 2xl:rounded-b-[60px] py-7 sm:py-9 2xl:py-12"
        style={{ background: 'var(--teal)' }}
      >
        <div
          className="marquee-track flex items-center whitespace-nowrap"
          style={{ animation: 'marquee 40s linear infinite' }}
        >
          {allItems.map((item, i) => (
            <span key={i} className="inline-flex items-center shrink-0">
              <span className="text-[20px] sm:text-[32px] lg:text-[44px] 2xl:text-[52px] font-normal text-white leading-none px-6 sm:px-10 lg:px-14 2xl:px-16 tracking-tight">
                {item}
              </span>
              <span className="text-white/55 text-[16px] sm:text-[26px] lg:text-[32px] 2xl:text-[40px] leading-none shrink-0">✚</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
