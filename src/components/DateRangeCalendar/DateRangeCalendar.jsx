import { useMemo, useState } from "react";

/** --------- date helpers (no libraries) --------- */
const weekdays = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function startOfMonth(d) {
  return new Date(d.getFullYear(), d.getMonth(), 1);
}
function addMonths(d, n) {
  return new Date(d.getFullYear(), d.getMonth() + n, 1);
}
function isSameDay(a, b) {
  if (!a || !b) return false;
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}
function isBefore(a, b) {
  return a.getTime() < b.getTime();
}
function isAfter(a, b) {
  return a.getTime() > b.getTime();
}
function clampToMidnight(d) {
  return new Date(d.getFullYear(), d.getMonth(), d.getDate());
}
function formatYMD(d) {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

function buildMonthGrid(monthDate) {
  const y = monthDate.getFullYear();
  const m = monthDate.getMonth();

  const first = new Date(y, m, 1);
  const leadingBlanks = first.getDay(); // 0=Sun
  const daysInMonth = new Date(y, m + 1, 0).getDate();

  const cells = [];
  for (let i = 0; i < leadingBlanks; i++) cells.push(null);
  for (let day = 1; day <= daysInMonth; day++) {
    cells.push(new Date(y, m, day));
  }
  return cells;
}

function inInclusiveRange(d, a, b) {
  // assumes a <= b
  const t = d.getTime();
  return t >= a.getTime() && t <= b.getTime();
}

/** --------- component --------- */
export default function DateRangeCalendar({
  baseUrl = "/search",
  paramNames = { start: "start", end: "end" },
  monthsAhead = 18, // dropdown options
}) {
  const today = useMemo(() => clampToMidnight(new Date()), []);
  const [viewMonth, setViewMonth] = useState(startOfMonth(today));

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [hoverDate, setHoverDate] = useState(null);

  const monthA = viewMonth;
  const monthB = addMonths(viewMonth, 1);

  const options = useMemo(() => {
    const list = [];
    const start = startOfMonth(today);
    for (let i = 0; i < monthsAhead; i++) list.push(addMonths(start, i));
    return list;
  }, [monthsAhead, today]);

  function handleDayClick(rawDate) {
    const d = clampToMidnight(rawDate);

    // If no start OR already had a full range -> start fresh
    if (!startDate || (startDate && endDate)) {
      setStartDate(d);
      setEndDate(null);
      return;
    }

    // If choosing end:
    // - if clicked before start -> replace start
    // - if clicked same day -> keep as start, still no end
    // - if clicked after start -> set end
    if (isBefore(d, startDate)) {
      setStartDate(d);
      setEndDate(null);
    } else if (isSameDay(d, startDate)) {
      setEndDate(null);
    } else {
      setEndDate(d);
    }
  }

  function applyToUrl() {
    if (!startDate || !endDate) return;
    if (startDate.getTime() >= endDate.getTime()) return; // enforce start < end

    const baseUrl = `https://s006006.officialbookings.com/?activeBookingEngine=KBE&propertyCode=S006006&checkin=2025-11-02&checkout=2026-01-18&skd-checkin=${startDate}&skd-checkout=${endDate}&skd-property-code=S006006%3Fcheckin%3D2026-01-16`;

    const url = new URL(baseUrl, window.location.origin);

    window.location.assign(url.toString());
  }

  function MonthPanel({ monthDate }) {
    const cells = buildMonthGrid(monthDate);

    // compute preview range if start picked and end not yet picked
    const preview = useMemo(() => {
      if (!startDate || endDate || !hoverDate) return null;
      const a = startDate;
      const b = hoverDate;
      if (isSameDay(a, b)) return null;
      const [min, max] = isBefore(a, b) ? [a, b] : [b, a];
      return { min, max };
    }, [startDate, endDate, hoverDate]);

    const confirmed =
      startDate && endDate && isBefore(startDate, endDate)
        ? { min: startDate, max: endDate }
        : null;

    return (
      <div className="w-full">
        <div className="text-center font-semibold text-slate-800">
          {monthNames[monthDate.getMonth()]} {monthDate.getFullYear()}
        </div>

        <div className="mt-4 grid grid-cols-7 text-xs text-slate-600">
          {weekdays.map((w) => (
            <div key={w} className="py-2 text-center tracking-wide">
              {w}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-7 gap-px overflow-hidden rounded-lg border border-slate-200 bg-slate-200">
          {cells.map((d, idx) => {
            if (!d) return <div key={idx} className="h-16 bg-white" />;

            const isPast = isBefore(d, today);
            const disabled = isPast;

            const isStart = isSameDay(d, startDate);
            const isEnd = isSameDay(d, endDate);

            const inConfirmed =
              confirmed && inInclusiveRange(d, confirmed.min, confirmed.max);

            const inPreview =
              preview && inInclusiveRange(d, preview.min, preview.max);

            // Middle days are “inside range but not endpoints”
            const isMiddleConfirmed = inConfirmed && !isStart && !isEnd;
            const isMiddlePreview = inPreview && !isStart && !isEnd;

            const base =
              "h-16 px-2 py-2 text-left relative focus:outline-none focus:ring-2 focus:ring-slate-400";
            const hover = disabled ? "" : "hover:bg-slate-50";
            const text = disabled ? "text-slate-300" : "text-slate-800";

            // --- Range styling to match screenshot ---
            const endpointClass =
              !disabled && (isStart || isEnd)
                ? "bg-slate-900 text-white hover:bg-slate-900"
                : "";

            const middleConfirmedClass =
              !disabled && isMiddleConfirmed ? "bg-slate-700 text-white" : "";

            const middlePreviewClass =
              !disabled && isMiddlePreview ? "bg-slate-200 text-slate-900" : "";

            // Background when not in any range
            const normalBg = "bg-white";

            // Decide bg/text priority:
            // 1) endpoint (darkest)
            // 2) confirmed middle (dark)
            // 3) preview middle (light)
            // 4) normal
            const bgClass =
              endpointClass ||
              middleConfirmedClass ||
              middlePreviewClass ||
              normalBg;

            return (
              <button
                key={idx}
                type="button"
                disabled={disabled}
                onClick={() => handleDayClick(d)}
                onMouseEnter={() => setHoverDate(d)}
                onMouseLeave={() => setHoverDate(null)}
                className={[
                  base,
                  hover,
                  text,
                  bgClass,
                  "transition-colors",
                ].join(" ")}
              >
                <div className="text-sm font-semibold">{d.getDate()}</div>
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  const canApply = startDate && endDate && isBefore(startDate, endDate);

  return (
    <div className="w-full max-w-5xl mx-auto">
      {/* top controls */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setViewMonth(addMonths(viewMonth, -1))}
            className="h-10 w-10 rounded-full border border-slate-300 bg-white hover:bg-slate-50"
            aria-label="Previous month"
          >
            ←
          </button>

          <select
            value={`${viewMonth.getFullYear()}-${viewMonth.getMonth()}`}
            onChange={(e) => {
              const [yy, mm] = e.target.value.split("-").map(Number);
              setViewMonth(new Date(yy, mm, 1));
            }}
            className="h-10 rounded-md border border-slate-300 bg-white px-3 text-main"
            aria-label="Select month"
          >
            {options.map((m) => (
              <option
                key={`${m.getFullYear()}-${m.getMonth()}`}
                value={`${m.getFullYear()}-${m.getMonth()}`}
              >
                {monthNames[m.getMonth()]} {m.getFullYear()}
              </option>
            ))}
          </select>

          <button
            type="button"
            onClick={() => setViewMonth(addMonths(viewMonth, 1))}
            className="h-10 w-10 rounded-full border border-slate-300 bg-white hover:bg-slate-50"
            aria-label="Next month"
          >
            →
          </button>
        </div>

        <div className="flex items-center gap-3">
          <div className="text-sm text-main">
            <span className="font-semibold">Start:</span>{" "}
            {startDate ? formatYMD(startDate) : "—"}
            <span className="mx-2">|</span>
            <span className="font-semibold">End:</span>{" "}
            {endDate ? formatYMD(endDate) : "—"}
          </div>

          <button
            type="button"
            onClick={() => {
              setStartDate(null);
              setEndDate(null);
              setHoverDate(null);
            }}
            className="h-10 rounded-md border border-slate-300 bg-white px-3 text-main hover:bg-slate-50"
          >
            Clear
          </button>

          <button
            type="button"
            onClick={applyToUrl}
            disabled={!canApply}
            className={[
              "h-10 rounded-md px-4 font-semibold",
              canApply
                ? "bg-slate-800 text-white hover:bg-main"
                : "bg-slate-200 text-slate-500 cursor-not-allowed",
            ].join(" ")}
          >
            Apply
          </button>
        </div>
      </div>

      {/* two-month view */}
      <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="rounded-xl border border-slate-200 bg-white p-4">
          <MonthPanel monthDate={monthA} />
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-4">
          <MonthPanel monthDate={monthB} />
        </div>
      </div>
    </div>
  );
}
