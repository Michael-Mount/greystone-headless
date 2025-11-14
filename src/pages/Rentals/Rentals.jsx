import HeroImage from "../../components/Decorative/HeroImage/HeroImage";
const hrimg =
  "https://greystoneinn.com/wp-content/uploads/2022/05/Img-52-2-scaled.jpg";

import CenteredTextBlock from "../../components/TextBlocks/CenterdTextBlock/CenterdTextBlock.jsx";

import { rentals } from "../../Data/RentalsData";
import RentalList from "../../components/Decorative/RentalCard/RentalList";

export default function Rentals() {
  return (
    <div>
      <HeroImage image={hrimg} title="Rentals" />
      <CenteredTextBlock content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." />
      <div className="space-y-8">
        <RentalList rentals={rentals} />
      </div>
    </div>
  );
}
