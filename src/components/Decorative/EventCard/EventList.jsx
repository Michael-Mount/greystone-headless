import EventCard from "./EventCard";

export default function EventList({ events }) {
  return (
    <div className="space-y-8">
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </div>
  );
}
