import RentalCard from "./RentalCard";

export default function RentalList({ rentals }) {
  return (
    <div className="space-y-8">
      {rentals.map((rental) => (
        <RentalCard key={rental.id} rental={rental} />
      ))}
    </div>
  );
}
