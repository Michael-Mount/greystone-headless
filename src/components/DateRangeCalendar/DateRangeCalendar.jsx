import React, {
  useCallback,
  useMemo,
  useRef,
  useState,
  useEffect,
} from "react";

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
function clampToMidnight(d) {
  return new Date(d.getFullYear(), d.getMonth(), d.getDate());
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
function formatYMD(d) {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

/** Always returns 42 cells (6 rows) for stable layout */
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
  while (cells.length < 42) cells.push(null);
  return cells;
}

function inInclusiveRangeTs(dayTs, aTs, bTs) {
  // assumes aTs <= bTs
  return dayTs >= aTs && dayTs <= bTs;
}

/** Simple inline SVG chevrons (fixes “arrows not appearing” issues) */
function ChevronLeft(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M15 18l-6-6 6-6"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
function ChevronRight(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M9 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** --------- Month Panel (memoized) --------- */
const MonthPanel = React.memo(function MonthPanel({
  monthDate,
  todayTs,
  startDate,
  endDate,
  hoverDate,
  onDayClick,
  onHoverDay,
  onHoverLeave,
}) {
  const cells = useMemo(() => buildMonthGrid(monthDate), [monthDate]);

  // Preview range (only while picking end date)
  const preview = useMemo(() => {
    if (!startDate || endDate || !hoverDate) return null;
    const aTs = startDate.getTime();
    const bTs = hoverDate.getTime();
    if (aTs === bTs) return null;
    const minTs = Math.min(aTs, bTs);
    const maxTs = Math.max(aTs, bTs);
    return { minTs, maxTs };
  }, [startDate, endDate, hoverDate]);

  // Confirmed range (only valid if start < end)
  const confirmed = useMemo(() => {
    if (!startDate || !endDate) return null;
    const aTs = startDate.getTime();
    const bTs = endDate.getTime();
    if (aTs >= bTs) return null;
    return { minTs: aTs, maxTs: bTs };
  }, [startDate, endDate]);

  return (
    <div className="w-full">
      <div className="text-center font-semibold text-slate-900">
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
          if (!d) return <div key={`blank-${idx}`} className="h-16 bg-white" />;

          const day = clampToMidnight(d);
          const dayTs = day.getTime();

          const isPast = dayTs < todayTs;
          const disabled = isPast;

          const isStart = isSameDay(day, startDate);
          const isEnd = isSameDay(day, endDate);

          const inConfirmed =
            confirmed &&
            inInclusiveRangeTs(dayTs, confirmed.minTs, confirmed.maxTs);
          const inPreview =
            preview && inInclusiveRangeTs(dayTs, preview.minTs, preview.maxTs);

          const isMiddleConfirmed = inConfirmed && !isStart && !isEnd;
          const isMiddlePreview = inPreview && !isStart && !isEnd;

          const base =
            "h-16 px-2 py-2 text-left relative focus:outline-none focus:ring-2 focus:ring-slate-400";
          const hover = disabled ? "" : "hover:bg-slate-50";
          const text = disabled ? "text-slate-300" : "text-slate-900";

          const endpointClass =
            !disabled && (isStart || isEnd)
              ? "bg-slate-900 text-white hover:bg-slate-900"
              : "";
          const middleConfirmedClass =
            !disabled && isMiddleConfirmed ? "bg-slate-700 text-white" : "";
          const middlePreviewClass =
            !disabled && isMiddlePreview ? "bg-slate-200 text-slate-900" : "";
          const normalBg = "bg-white";

          const bgClass =
            endpointClass ||
            middleConfirmedClass ||
            middlePreviewClass ||
            normalBg;

          return (
            <button
              key={formatYMD(day)}
              type="button"
              disabled={disabled}
              onClick={() => onDayClick(day)}
              onPointerEnter={() => onHoverDay(day)}
              onPointerLeave={onHoverLeave}
              className={[base, hover, text, bgClass, "transition-colors"].join(
                " "
              )}
            >
              <div className="text-sm font-semibold">{day.getDate()}</div>
            </button>
          );
        })}
      </div>
    </div>
  );
});

/** --------- component --------- */
export default function DateRangeCalendar({
  // If you pass a relative path, we’ll set query params on it (e.g. "/search").
  // If you pass an absolute URL, we’ll set query params on it as well.
  baseUrl = "/search",
  paramNames = { start: "start", end: "end" },
  monthsAhead = 18,
}) {
  const today = useMemo(() => clampToMidnight(new Date()), []);
  const todayTs = useMemo(() => today.getTime(), [today]);

  const minMonth = useMemo(() => startOfMonth(today), [today]);
  const maxMonth = useMemo(
    () => startOfMonth(addMonths(minMonth, Math.max(0, monthsAhead - 1))),
    [minMonth, monthsAhead]
  );

  const [viewMonth, setViewMonth] = useState(minMonth);

  // Keep range in a single state object to avoid “click feels laggy / inconsistent” updates.
  const [range, setRange] = useState({ start: null, end: null });
  const startDate = range.start;
  const endDate = range.end;

  // Hover only matters while picking an end date
  const [hoverDate, setHoverDate] = useState(null);

  const options = useMemo(() => {
    const list = [];
    for (let i = 0; i < monthsAhead; i++) list.push(addMonths(minMonth, i));
    return list;
  }, [monthsAhead, minMonth]);

  const isAtMinMonth = useMemo(
    () =>
      viewMonth.getFullYear() === minMonth.getFullYear() &&
      viewMonth.getMonth() === minMonth.getMonth(),
    [viewMonth, minMonth]
  );
  const isAtMaxMonth = useMemo(
    () =>
      viewMonth.getFullYear() === maxMonth.getFullYear() &&
      viewMonth.getMonth() === maxMonth.getMonth(),
    [viewMonth, maxMonth]
  );

  // Prevent hover spam: only set hover when it matters and only when it changes
  const lastHoverTsRef = useRef(null);

  const handleHoverDay = useCallback(
    (d) => {
      if (!startDate || endDate) return; // hover preview only while choosing end
      const ts = d.getTime();
      if (lastHoverTsRef.current === ts) return;
      lastHoverTsRef.current = ts;
      setHoverDate(d);
    },
    [startDate, endDate]
  );

  const handleHoverLeave = useCallback(() => {
    lastHoverTsRef.current = null;
    setHoverDate(null);
  }, []);

  // Requirement #3:
  // If the user selects a date that is earlier than the current start,
  // we “readjust” by swapping (new start = earlier date, new end = previous start).
  const handleDayClick = useCallback((rawDate) => {
    const d = clampToMidnight(rawDate);

    setRange((prev) => {
      const s = prev.start;
      const e = prev.end;

      // start fresh if no start, or if we already had a full range
      if (!s || (s && e)) {
        return { start: d, end: null };
      }

      // second click: same day = keep start, clear end
      if (isSameDay(d, s)) {
        return { start: s, end: null };
      }

      // second click earlier than start: swap to make a valid range
      if (isBefore(d, s)) {
        return { start: d, end: s };
      }

      // normal: set end
      return { start: s, end: d };
    });
  }, []);

  // If you navigate months, keep hover from “sticking”
  useEffect(() => {
    handleHoverLeave();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [viewMonth]);

  const clearAll = useCallback(() => {
    setRange({ start: null, end: null });
    handleHoverLeave();
  }, [handleHoverLeave]);

  const canApply = !!startDate && !!endDate && isBefore(startDate, endDate);

  const applyToUrl = useCallback(() => {
    if (!startDate || !endDate) return;
    if (startDate.getTime() >= endDate.getTime()) return;

    const checkin = formatYMD(startDate);
    const checkout = formatYMD(endDate);

    const url = new URL("https://s006006.officialbookings.com/");

    // keep these always present
    url.searchParams.set("activeBookingEngine", "KBE");
    url.searchParams.set("propertyCode", "S006006");
    url.searchParams.set("skd-property-code", "S006006");

    // set the dates the engine reads
    url.searchParams.set("skd-checkin", checkin);
    url.searchParams.set("skd-checkout", checkout);

    window.location.assign(url.toString());
  }, [startDate, endDate]);

  const monthA = viewMonth;
  const monthB = useMemo(() => addMonths(viewMonth, 1), [viewMonth]);

  return (
    <div className="w-full max-w-5xl mx-auto my-96">
      {/* top controls */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setViewMonth((prev) => addMonths(prev, -1))}
            disabled={isAtMinMonth}
            className={[
              "h-10 w-10 rounded-full border bg-white flex items-center justify-center",
              isAtMinMonth
                ? "border-slate-200 text-slate-300 cursor-not-allowed"
                : "border-slate-300 text-slate-900 hover:bg-slate-50",
            ].join(" ")}
            aria-label="Previous month"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <select
            value={`${viewMonth.getFullYear()}-${viewMonth.getMonth()}`}
            onChange={(e) => {
              const [yy, mm] = e.target.value.split("-").map(Number);
              setViewMonth(new Date(yy, mm, 1));
            }}
            className="h-10 rounded-md border border-slate-300 bg-white px-3 text-slate-900"
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
            onClick={() => setViewMonth((prev) => addMonths(prev, 1))}
            disabled={isAtMaxMonth}
            className={[
              "h-10 w-10 rounded-full border bg-white flex items-center justify-center",
              isAtMaxMonth
                ? "border-slate-200 text-slate-300 cursor-not-allowed"
                : "border-slate-300 text-slate-900 hover:bg-slate-50",
            ].join(" ")}
            aria-label="Next month"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        <div className="flex items-center gap-3">
          <div className="text-sm text-slate-900">
            <span className="font-semibold">Start:</span>{" "}
            {startDate ? formatYMD(startDate) : "—"}
            <span className="mx-2">|</span>
            <span className="font-semibold">End:</span>{" "}
            {endDate ? formatYMD(endDate) : "—"}
          </div>

          <button
            type="button"
            onClick={clearAll}
            className="h-10 rounded-md border border-slate-300 bg-white px-3 text-slate-900 hover:bg-slate-50"
          >
            Clear
          </button>

          <button
            type="button"
            onClick={applyToUrl}
            disabled={!canApply}
            className={[
              "h-10 rounded-md px-4 font-semibold transition-colors",
              canApply
                ? "bg-slate-900 text-white hover:bg-slate-800"
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
          <MonthPanel
            monthDate={monthA}
            todayTs={todayTs}
            startDate={startDate}
            endDate={endDate}
            hoverDate={hoverDate}
            onDayClick={handleDayClick}
            onHoverDay={handleHoverDay}
            onHoverLeave={handleHoverLeave}
          />
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-4">
          <MonthPanel
            monthDate={monthB}
            todayTs={todayTs}
            startDate={startDate}
            endDate={endDate}
            hoverDate={hoverDate}
            onDayClick={handleDayClick}
            onHoverDay={handleHoverDay}
            onHoverLeave={handleHoverLeave}
          />
        </div>
      </div>
    </div>
  );
}
