import DateRangeCalendar from "../../components/DateRangeCalendar/DateRangeCalendar";

export default function BookCalendar() {
  return (
    <div className="mt-44">
      <DateRangeCalendar
        baseUrl="https://s006006.officialbookings.com/?activeBookingEngine=KBE&propertyCode=S006006&checkin=2025-11-02&checkout=2025-11-03&skd-checkin=2025-12-15&skd-checkout=2025-12-16&skd-property-code=S006006"
        paramNames={{ start: "checkin", end: "checkout" }}
      />
    </div>
  );
}
