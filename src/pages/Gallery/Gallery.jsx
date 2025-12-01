import HeroImage from "../../components/Decorative/HeroImage/HeroImage";
import GalleryPage from "../../components/Decorative/Gallery/GalleryPage";

const hrimg =
  "https://greystoneinn.com/wp-content/uploads/2021/01/GreystoneInn_Rooms-0368.jpg";

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
