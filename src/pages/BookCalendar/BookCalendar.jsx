import DateRangeCalendar from "../../components/DateRangeCalendar/DateRangeCalendar";

export default function BookCalendar() {
  return (
    <div className="my-44">
      <DateRangeCalendar paramNames={{ start: "checkin", end: "checkout" }} />
    </div>
  );
}
