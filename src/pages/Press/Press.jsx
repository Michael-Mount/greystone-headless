import HeroImage from "../../components/Decorative/HeroImage/HeroImage";
import PressGrid from "../../components/Decorative/PressCard/PressGrid";
import hrimg from "../../images/PressHero.jpeg";

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
