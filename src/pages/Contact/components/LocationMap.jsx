import { motion } from 'framer-motion';
import { Arrow, Pin } from '../../../components/icons';
import { fadeUp, stagger } from '../../../lib/animations';

const MAPS_URL = 'https://www.google.com/maps/place/UniCare+Hospitals/@17.390425,78.3436576,21z/data=!4m14!1m7!3m6!1s0x3bcb95005da665df:0x2bd6417591e43792!2sSaanvi+Antalya+Homes!8m2!3d17.3904212!4d78.3436241!16s%2Fg%2F11vyrdgvv5!3m5!1s0x3bcb91dc874272cd:0xbc4ad3918afe8fcb!8m2!3d17.3902459!4d78.3437231!16s%2Fg%2F11zb6wm04j?entry=ttu&g_ep=EgoyMDI2MDYwMS4wIKXMDSoASAFQAw%3D%3D';

const overlayStagger = stagger(0.1, 0);

export default function LocationMap() {
  return (
    <div
      className="relative -mt-16 lg:-mt-20 w-full overflow-hidden"
      style={{
        minHeight: 'clamp(460px, 60vw, 660px)',
        background: '#E6F4F2',
      }}
    >
      {/* Full-bleed SVG map */}
      <svg
        viewBox="0 0 800 520"
        className="absolute inset-0 w-full h-full pointer-events-none"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <defs>
          <pattern id="mapGrid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M40 0H0V40" fill="none" stroke="#012257" strokeOpacity=".05" strokeWidth="1"/>
          </pattern>
          <linearGradient id="lake" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#2CAAA0" stopOpacity=".3"/>
            <stop offset="1" stopColor="#012257" stopOpacity=".2"/>
          </linearGradient>
          <filter id="mapShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#012257" floodOpacity=".15"/>
          </filter>
        </defs>

        <rect width="800" height="520" fill="url(#mapGrid)"/>
        <path d="M0 60 L240 80 L260 200 L120 260 L0 240 Z"         fill="#D5ECE9" opacity=".8"/>
        <path d="M520 40 L800 60 L800 220 L580 240 L500 160 Z"     fill="#D5ECE9" opacity=".6"/>
        <path d="M180 330 L420 310 L520 420 L300 490 L160 450 Z"   fill="#D5ECE9" opacity=".75"/>
        <path d="M540 290 q70 -45 150 -8 q60 32 38 95 q-22 63 -115 62 q-92 0 -122 -52 q-28 -52 49 -97 Z" fill="url(#lake)"/>
        <text x="620" y="382" fontFamily="Inter, sans-serif" fontSize="12" fill="#012257" opacity=".45" fontStyle="italic">Osman Sagar</text>
        <path d="M-20 390 Q 200 330 400 370 T 820 310" fill="none" stroke="#fff"    strokeWidth="16" strokeLinecap="round"/>
        <path d="M-20 390 Q 200 330 400 370 T 820 310" fill="none" stroke="#012257" strokeWidth="2"  strokeDasharray="7 9" opacity=".3"/>
        <path d="M130 -10 Q 210 205 385 268 T 488 530" fill="none" stroke="#fff"    strokeWidth="12" strokeLinecap="round"/>
        <path d="M130 -10 Q 210 205 385 268 T 488 530" fill="none" stroke="#012257" strokeWidth="1.5" strokeDasharray="6 8" opacity=".28"/>
        <path d="M-20 185 Q 165 225 285 205 T 545 145 T 820 105"  fill="none" stroke="#fff"    strokeWidth="9" strokeLinecap="round" opacity=".9"/>
        <text x="60" y="378" fontFamily="ui-monospace, monospace" fontSize="9" fill="#012257" opacity=".4" letterSpacing="2">OUTER RING ROAD</text>
        <g fontFamily="ui-monospace, monospace" fontSize="10" fill="#012257">
          <circle cx="185" cy="125" r="4" fill="#012257" opacity=".4"/>
          <rect x="198" y="114" width="84" height="20" rx="10" fill="#fff" opacity=".85"/>
          <text x="206" y="128" opacity=".7" fontSize="9.5">Narsingi · 5 min</text>
          <circle cx="645" cy="105" r="4" fill="#012257" opacity=".4"/>
          <rect x="490" y="94" width="142" height="20" rx="10" fill="#fff" opacity=".85"/>
          <text x="498" y="108" opacity=".7" fontSize="9.5">Financial District · 10 min</text>
          <circle cx="705" cy="205" r="4" fill="#012257" opacity=".4"/>
          <rect x="568" y="218" width="120" height="20" rx="10" fill="#fff" opacity=".85"/>
          <text x="576" y="232" opacity=".7" fontSize="9.5">Gachibowli · 12 min</text>
        </g>
        {/* Pulsing ring */}
        <circle cx="390" cy="289" r="14" fill="none" stroke="#2CAAA0" strokeWidth="2">
          <animate attributeName="r" values="14;52;52" dur="2.4s" repeatCount="indefinite"/>
          <animate attributeName="opacity" values="0.65;0;0" dur="2.4s" repeatCount="indefinite"/>
        </circle>
        <circle cx="390" cy="255" r="52" fill="#2CAAA0" opacity=".1"/>
        <circle cx="390" cy="255" r="34" fill="#2CAAA0" opacity=".18"/>
        <g transform="translate(390 255)" filter="url(#mapShadow)">
          <path d="M0 -26 a20 20 0 1 1 -0.1 0 Z M0 34 L-12 8 L12 8 Z" fill="#012257"/>
          <circle cx="0" cy="-6" r="8" fill="#2CAAA0"/>
        </g>
      </svg>

      {/* Popup card — centred on pin */}
      <div className="absolute z-20" style={{ left: '50%', top: '38%', transform: 'translateX(-50%)' }}>
        <div className="bg-white rounded-2xl pl-2 pr-3 sm:pr-4 py-2 flex items-center gap-2 sm:gap-2.5 shadow-lg whitespace-nowrap">
          <span className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-(--teal) text-white flex items-center justify-center shrink-0">
            <Pin s={14} c="#fff"/>
          </span>
          <div className="text-left">
            <div className="text-[11.5px] sm:text-[12.5px] font-semibold text-(--navy)">UniCare Hospitals</div>
            <div className="text-[9.5px] sm:text-[10.5px] text-(--muted)">A 201, 2nd Floor, Saanvi Antalya Homes</div>
            <div className="text-[9px] sm:text-[9.5px] text-(--muted)/70">Kokapet, Telangana</div>
          </div>
        </div>
      </div>

      {/* Top overlay — left: label · right: Get Directions */}
      <motion.div
        className="absolute z-20 top-20 sm:top-24 left-4 sm:left-6 right-4 sm:right-6 flex items-start justify-between gap-3"
        variants={overlayStagger}
        initial="hidden"
        animate="visible"
      >
        {/* Left — location chip */}
        <motion.span
          variants={fadeUp}
          className="pill text-[11px] sm:text-[12px] inline-flex items-center gap-1.5 shadow-sm"
        >
          <Pin s={11}/> Kokapet, Hyderabad
        </motion.span>

        {/* Right — Get Directions */}
        <motion.a
          variants={fadeUp}
          href={MAPS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-dark text-[12px] sm:text-[13px] shrink-0"
        >
          <span>Get Directions</span>
          <span className="arrow"><Arrow s={12}/></span>
        </motion.a>
      </motion.div>
    </div>
  );
}
