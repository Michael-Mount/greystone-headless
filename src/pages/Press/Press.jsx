import HeroImage from "../../components/Decorative/HeroImage/HeroImage";
import PressGrid from "../../components/Decorative/PressCard/PressGrid";

const hrimg =
  "https://greystoneinn.com/wp-content/uploads/2020/11/Greystone-Story-Parent-Header.jpg";

export default function Press() {
  return (
    <div>
      <HeroImage image={hrimg} title="Press" />
      <div className="p-24">
        <PressGrid />
      </div>
    </div>
  );
}
