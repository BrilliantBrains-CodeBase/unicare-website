import { useState, useRef, useEffect } from 'react';
import { Search, ChevronDown } from './icons';

function SlidersIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" className="w-4 h-4 shrink-0">
      <path d="M2 4h12M4 8h8M6 12h4"/>
      <circle cx="5"  cy="4"  r="1.5" fill="currentColor" stroke="none"/>
      <circle cx="11" cy="8"  r="1.5" fill="currentColor" stroke="none"/>
      <circle cx="8"  cy="12" r="1.5" fill="currentColor" stroke="none"/>
    </svg>
  );
}

export default function FilterBar({
  searchQuery,
  onSearch,
  searchPlaceholder = 'Search…',
  filters,
  activeFilter,
  onFilter,
}) {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef(null);

  useEffect(() => {
    function handleOutside(e) {
      if (wrapRef.current && !wrapRef.current.contains(e.target)) setOpen(false);
    }
    function handleKey(e) {
      if (e.key === 'Escape') setOpen(false);
    }
    document.addEventListener('mousedown', handleOutside);
    document.addEventListener('keydown', handleKey);
    return () => {
      document.removeEventListener('mousedown', handleOutside);
      document.removeEventListener('keydown', handleKey);
    };
  }, []);

  const isFiltered = activeFilter !== 'All';

  return (
    <div className="flex items-center gap-3">
      {/* Search */}
      <div className="relative flex-1">
        <span className="absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" style={{ color: 'var(--muted)' }}>
          <Search s={15}/>
        </span>
        <input
          type="search"
          value={searchQuery}
          onChange={e => onSearch(e.target.value)}
          placeholder={searchPlaceholder}
          className="h-11 w-full rounded-xl border border-(--line) pl-10 pr-4 text-[14px] text-(--navy) bg-white focus:outline-none focus:ring-2 focus:ring-(--teal)/30 focus:border-(--teal) placeholder:text-(--muted)/50 transition"
        />
      </div>

      {/* Filter button + dropdown */}
      <div className="relative shrink-0" ref={wrapRef}>
        <button
          onClick={() => setOpen(o => !o)}
          className="h-11 inline-flex items-center gap-2 px-4 rounded-xl border text-[13.5px] font-medium transition-all duration-200 cursor-pointer"
          style={isFiltered || open
            ? { background: 'var(--navy)', color: '#fff', borderColor: 'var(--navy)' }
            : { background: 'white', color: 'var(--navy)', borderColor: 'var(--line)' }
          }
          aria-haspopup="listbox"
          aria-expanded={open}
        >
          <SlidersIcon/>
          <span className="hidden sm:inline">{isFiltered ? activeFilter : 'Filter'}</span>
          <ChevronDown
            s={13}
            c="currentColor"
            style={{ transition: 'transform 0.2s', transform: open ? 'rotate(180deg)' : 'rotate(0deg)' }}
          />
        </button>

        {open && (
          <div
            className="absolute right-0 top-full mt-2 w-56 bg-white rounded-2xl border border-(--line) shadow-xl z-50 py-2 overflow-hidden"
            role="listbox"
            aria-label="Filter options"
          >
            {filters.map(f => {
              const active = f === activeFilter;
              return (
                <button
                  key={f}
                  role="option"
                  aria-selected={active}
                  onClick={() => { onFilter(f); setOpen(false); }}
                  className="w-full flex items-center gap-3 px-4 py-2.5 text-[13.5px] cursor-pointer transition-colors text-left hover:bg-(--teal-soft)"
                  style={{ color: active ? 'var(--navy)' : 'var(--muted)', fontWeight: active ? 600 : 400 }}
                >
                  <span
                    className="w-2 h-2 rounded-full shrink-0"
                    style={active
                      ? { background: 'var(--teal)' }
                      : { border: '2px solid var(--line)' }
                    }
                  />
                  {f}
                </button>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
