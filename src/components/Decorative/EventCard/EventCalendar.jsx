// src/components/events/EventCalendar.jsx
import { useMemo, useState } from "react";

function parseISODate(dateStr) {
  // Avoid timezone weirdness by constructing Date manually
  const [y, m, d] = dateStr.split("-").map(Number);
  return new Date(y, m - 1, d);
}

export default function EventCalendar({ events }) {
  const [currentMonth, setCurrentMonth] = useState(() => {
    // Start at month of first event, fallback to today
    if (events.length) {
      return parseISODate(events[0].date);
    }
    return new Date();
  });

  const { year, month, monthLabel, weeks, eventDatesSet } = useMemo(() => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();

    const firstDayOfMonth = new Date(year, month, 1);
    const lastDayOfMonth = new Date(year, month + 1, 0);
    const daysInMonth = lastDayOfMonth.getDate();
    const startDay = firstDayOfMonth.getDay(); // 0 = Sunday

    const eventDatesSet = new Set(
      events
        .map((e) => parseISODate(e.date))
        .filter((d) => d.getFullYear() === year && d.getMonth() === month)
        .map((d) => d.getDate())
    );

    const cells = [];
    // leading blanks
    for (let i = 0; i < startDay; i++) {
      cells.push(null);
    }
    // days of month
    for (let day = 1; day <= daysInMonth; day++) {
      cells.push(day);
    }

    const weeks = [];
    for (let i = 0; i < cells.length; i += 7) {
      weeks.push(cells.slice(i, i + 7));
    }

    const monthLabel = currentMonth.toLocaleDateString("en-US", {
      month: "long",
      year: "numeric",
    });

    return { year, month, monthLabel, weeks, eventDatesSet };
  }, [currentMonth, events]);

  const goToPrevMonth = () => {
    setCurrentMonth(
      (prev) => new Date(prev.getFullYear(), prev.getMonth() - 1, 1)
    );
  };

  const goToNextMonth = () => {
    setCurrentMonth(
      (prev) => new Date(prev.getFullYear(), prev.getMonth() + 1, 1)
    );
  };

  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return (
    <section className="calendar-wrapper rounded-2xl bg-white shadow-lg p-6">
      <header className="flex items-center justify-between mb-4">
        <button
          type="button"
          onClick={goToPrevMonth}
          className="rounded-full border px-3 py-1 text-xs uppercase tracking-[0.2em] hover:bg-slate-900 hover:text-white transition"
        >
          Prev
        </button>
        <h2 className="text-lg font-semibold tracking-wide text-slate-900">
          {monthLabel}
        </h2>
        <button
          type="button"
          onClick={goToNextMonth}
          className="rounded-full border px-3 py-1 text-xs uppercase tracking-[0.2em] hover:bg-slate-900 hover:text-white transition"
        >
          Next
        </button>
      </header>

      <div className="grid grid-cols-7 gap-1 text-center text-xs font-semibold text-slate-500 mb-2">
        {daysOfWeek.map((d) => (
          <div key={d} className="py-1">
            {d}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-1 text-center">
        {weeks.map((week, wi) =>
          week.map((day, di) => {
            if (day === null) {
              return <div key={`${wi}-${di}`} className="py-2" />;
            }

            const hasEvent = eventDatesSet.has(day);

            return (
              <div
                key={`${wi}-${di}`}
                className={`py-2 rounded-full text-sm ${
                  hasEvent
                    ? "bg-[#003d51] text-white font-semibold"
                    : "text-slate-700"
                }`}
              >
                {day}
              </div>
            );
          })
        )}
      </div>

      <p className="mt-4 text-xs text-slate-500">
        Dates highlighted in{" "}
        <span className="font-semibold text-[#003d51]">blue</span> have events
        scheduled.
      </p>
    </section>
  );
}
