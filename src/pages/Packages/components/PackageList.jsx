import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IconArrowDownRight } from '@tabler/icons-react';
import FilterBar from '../../../components/FilterBar';
import { fadeUp, vp } from '../../../lib/animations';

const TABS = ['All', 'Blood Tests', 'Hormone & Fertility', 'Cardiac', 'Imaging & Diagnostics'];

const GROUPS = [
  {
    id: 'cbp',
    label: 'Complete Blood Picture (CBP) / Complete Blood Count (CBC)',
    tabs: ['All', 'Blood Tests'],
    items: [],
  },
  {
    id: 'sugar',
    label: 'Blood Sugar Tests',
    tabs: ['All', 'Blood Tests'],
    items: ['FBS / PPBS', 'HbA1c'],
  },
  {
    id: 'renal',
    label: 'Renal (Kidney) Profile',
    tabs: ['All', 'Blood Tests'],
    items: [],
  },
  {
    id: 'lft',
    label: 'Liver Function Tests (LFT)',
    tabs: ['All', 'Blood Tests'],
    items: [],
  },
  {
    id: 'thyroid',
    label: 'Thyroid Profile',
    tabs: ['All', 'Blood Tests'],
    items: [],
  },
  {
    id: 'vitamin',
    label: 'Vitamin Profile',
    tabs: ['All', 'Blood Tests'],
    items: ['Vitamin D', 'Vitamin B12'],
  },
  {
    id: 'hormone',
    label: 'Hormone Tests',
    tabs: ['All', 'Hormone & Fertility'],
    items: [],
  },
  {
    id: 'lipid',
    label: 'Lipid Profile (Cholesterol Tests)',
    tabs: ['All', 'Blood Tests'],
    items: [],
  },
  {
    id: 'cardiac',
    label: 'Cardiac Markers',
    tabs: ['All', 'Cardiac'],
    items: [],
  },
  {
    id: 'fertility',
    label: 'Fertility Tests',
    tabs: ['All', 'Hormone & Fertility'],
    items: [],
  },
  {
    id: 'antenatal',
    label: 'Antenatal Profile',
    tabs: ['All', 'Hormone & Fertility'],
    items: [],
  },
  {
    id: 'imaging',
    label: 'Imaging & Diagnostic Procedures',
    tabs: ['All', 'Imaging & Diagnostics'],
    items: [
      'Ultrasound Scanning',
      'Antenatal Scan',
      'ECG (Electrocardiogram)',
      '2D Echo',
      'CTG / NST (Fetal Heart Monitoring)',
      'Endometrial Biopsy',
      'Pap smear Test',
    ],
  },
];

function ItemRow({ label, onClick }) {
  return (
    <div
      onClick={onClick}
      className="group flex items-center gap-3 py-4 -mx-3 px-3 rounded-lg cursor-pointer transition-colors duration-150 hover:bg-white/50"
      style={{ borderBottom: '1px solid rgba(255,255,255,0.65)' }}
    >
      <IconArrowDownRight size={20} color="var(--teal)" className="shrink-0 group-hover:translate-x-0.5 transition-transform duration-150" />
      <span
        className="text-[14px] sm:text-[15px] font-medium flex-1"
        style={{ color: 'var(--navy)' }}
      >
        {label}
      </span>
      <span className="text-[11px] font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-150" style={{ color: 'var(--teal)' }}>
        Book →
      </span>
    </div>
  );
}

function GroupBlock({ group, onSelect }) {
  return (
    <>
      <div
        onClick={onSelect}
        className="group flex items-center justify-between py-4 -mx-3 px-3 rounded-lg cursor-pointer transition-colors duration-150 hover:bg-white/50"
        style={{ borderBottom: '1px solid rgba(255,255,255,0.7)' }}
      >
        <h3
          className="text-[18px] sm:text-[20px] font-semibold"
          style={{ color: 'var(--navy)' }}
        >
          {group.label}
        </h3>
        <span className="text-[11px] font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-150 shrink-0 ml-4" style={{ color: 'var(--teal)' }}>
          Book →
        </span>
      </div>
      {group.items.map(item => (
        <ItemRow key={item} label={item} onClick={onSelect} />
      ))}
    </>
  );
}

export default function PackageList({ onPackageSelect }) {
  const [activeTab,   setActiveTab]   = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const q = searchQuery.toLowerCase();
  const visible = GROUPS
    .filter(g => activeTab === 'All' || g.tabs.includes(activeTab))
    .filter(g => !q || g.label.toLowerCase().includes(q) || g.items.some(item => item.toLowerCase().includes(q)));

  return (
    <section className="bg-white pb-16 sm:pb-20 px-4 sm:px-6 lg:px-10">
      <div className="max-w-330 mx-auto">

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={vp}
        >
          {/* Filter bar */}
          <div className="mb-8">
            <FilterBar
              searchQuery={searchQuery}
              onSearch={setSearchQuery}
              searchPlaceholder="Search tests…"
              filters={TABS}
              activeFilter={activeTab}
              onFilter={(f) => { setActiveTab(f); setSearchQuery(''); }}
            />
          </div>

          {/* Content card */}
          <div
            className="rounded-[20px] p-6 sm:p-10 lg:p-12"
            style={{ background: 'var(--soft)' }}
          >
            <AnimatePresence mode="popLayout">
              {visible.map((group, i) => (
                <motion.div
                  key={group.id}
                  className={i === 0 ? '' : 'mt-8'}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0, transition: { duration: 0.25, ease: [0.22, 1, 0.36, 1] } }}
                  exit={{ opacity: 0, y: -8, transition: { duration: 0.15 } }}
                >
                  <GroupBlock
                    group={group}
                    onSelect={() => onPackageSelect?.(group.label)}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
