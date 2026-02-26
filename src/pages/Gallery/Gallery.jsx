import HeroImage from "../../components/Decorative/HeroImage/HeroImage";
import GalleryPage from "../../components/Decorative/Gallery/GalleryPage";
import hrimg from "../../images/GalleryHero.jpeg";

export default function Gallery() {
  return (
    <div>
      <HeroImage image={hrimg} title="Gallery" />
      <div className="p-24">
        <GalleryPage />
      </div>
    </div>
  );
}
