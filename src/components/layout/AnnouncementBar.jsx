import { Phone, Pin } from '../icons';

const ADDRESS = 'A 201, 2nd Floor, Saanvi Antalya Homes, Kokapet, Telangana';

const PHONE_1 = '+919090546363';
const PHONE_1_DISPLAY = '+91 90905 46363';
const PHONE_2 = '+919121856565';
const PHONE_2_DISPLAY = '+91 91218 56565';

export default function AnnouncementBar() {
  return (
    <div
      className="hidden lg:block fixed top-0 left-0 right-0 z-[10000] h-9"
      style={{ background: 'var(--navy)' }}
    >
      <div className="max-w-[1320px] mx-auto h-full px-6 flex items-center justify-between text-[12.5px] text-white/85">
        <span className="flex items-center gap-2">
          <Pin s={12} c="var(--teal)" />
          {ADDRESS}
        </span>
        <span className="flex items-center gap-4">
          <a href={`tel:${PHONE_1}`} className="flex items-center gap-1.5 hover:text-white transition-colors">
            <Phone s={12} c="var(--teal)" />
            {PHONE_1_DISPLAY}
          </a>
          <span className="w-px h-3 bg-white/20" aria-hidden="true" />
          <a href={`tel:${PHONE_2}`} className="flex items-center gap-1.5 hover:text-white transition-colors">
            <Phone s={12} c="var(--teal)" />
            {PHONE_2_DISPLAY}
          </a>
        </span>
      </div>
    </div>
  );
}
