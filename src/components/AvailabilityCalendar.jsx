import React, { useMemo, useState } from 'react';

const mockUnavailable = ['2026-03-05', '2026-03-10', '2026-03-18'];

const AvailabilityCalendar = ({ value, onChange }) => {
  const [monthOffset, setMonthOffset] = useState(0);

  const { monthLabel, days } = useMemo(() => {
    const base = new Date();
    const monthDate = new Date(base.getFullYear(), base.getMonth() + monthOffset, 1);
    const monthLabel = monthDate.toLocaleString('default', {
      month: 'long',
      year: 'numeric'
    });
    const firstDay = monthDate.getDay();
    const daysInMonth = new Date(
      monthDate.getFullYear(),
      monthDate.getMonth() + 1,
      0
    ).getDate();

    const cells = [];
    for (let i = 0; i < firstDay; i++) cells.push(null);
    for (let d = 1; d <= daysInMonth; d++) {
      const iso = new Date(
        monthDate.getFullYear(),
        monthDate.getMonth(),
        d
      )
        .toISOString()
        .slice(0, 10);
      cells.push({ day: d, iso });
    }
    return { monthLabel, days: cells };
  }, [monthOffset]);

  const isUnavailable = iso => mockUnavailable.includes(iso);

  const handleSelect = iso => {
    if (isUnavailable(iso)) return;
    onChange?.(iso);
  };

  return (
    <div className="glass-panel rounded-3xl p-4 text-xs">
      <div className="flex items-center justify-between mb-2">
        <p className="font-semibold text-slate-900 dark:text-slate-50 text-sm">
          Real-time availability
        </p>
        <div className="flex items-center gap-2">
          <button
            type="button"
            className="h-7 w-7 rounded-full border border-slate-200 dark:border-slate-700 flex items-center justify-center"
            onClick={() => setMonthOffset(o => o - 1)}
            aria-label="Previous month"
          >
            ‹
          </button>
          <button
            type="button"
            className="h-7 w-7 rounded-full border border-slate-200 dark:border-slate-700 flex items-center justify-center"
            onClick={() => setMonthOffset(o => o + 1)}
            aria-label="Next month"
          >
            ›
          </button>
        </div>
      </div>
      <p className="text-[11px] text-slate-500 mb-2">{monthLabel}</p>
      <div className="grid grid-cols-7 gap-1.5 mb-1 text-[10px] text-slate-500">
        {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map(d => (
          <div key={d} className="text-center">
            {d}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-1">
        {days.map((cell, idx) =>
          !cell ? (
            <div key={idx} />
          ) : (
            <button
              key={cell.iso}
              type="button"
              onClick={() => handleSelect(cell.iso)}
              className={`h-7 w-7 rounded-full text-[11px] flex items-center justify-center ${
                isUnavailable(cell.iso)
                  ? 'bg-slate-200/80 dark:bg-slate-800/80 text-slate-400 cursor-not-allowed line-through'
                  : value === cell.iso
                  ? 'bg-clinic-blue text-white'
                  : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-200 hover:bg-clinic-soft/80'
              }`}
            >
              {cell.day}
            </button>
          )
        )}
      </div>
      <p className="mt-3 text-[11px] text-slate-500">
        Greyed-out dates are fully booked. Selected date will be paired with your preferred time
        and confirmed by our team.
      </p>
    </div>
  );
};

export default AvailabilityCalendar;

