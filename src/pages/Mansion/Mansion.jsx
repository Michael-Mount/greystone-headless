import HeroImage from "../../components/Decorative/HeroImage/HeroImage";
import CenteredTextBlock from "../../components/TextBlocks/CenterdTextBlock/CenterdTextBlock";
import SplitColList from "../../components/TextBlocks/SplitColList/SplitColList";
import PhotoGridGallery from "../../components/Decorative/PhotoGridGallery/PhotoGridGallery";

const heroimg =
  "https://greystoneinn.com/wp-content/uploads/2020/12/MansionPremiumSuite-2_HEADER.jpg";
const introText =
  "Tucked just beyond the main hotel, the Mansion feels like stepping into a story. Once a private estate home, it now serves as an intimate retreat where high ceilings, restored woodwork, and soft, ambient lighting set the stage for memorable moments. From quiet mornings with coffee on the veranda to evenings spent lingering over cocktails in the parlor, the Mansion offers a cozy, lived-in elegance you won’t find anywhere else on property.";

const gallery = [
  {
    src: "https://greystoneinn.com/wp-content/uploads/2020/09/MansionSuperiorRm-1.jpg",
    alt: "Lakside King Bed",
    aspect: "landscape",
  },
  {
    src: "https://greystoneinn.com/wp-content/uploads/2020/09/MansionSuperiorRm-4.jpg",
    alt: "Mondern Bathroom",
    aspect: "square",
  },
  {
    src: "https://greystoneinn.com/wp-content/uploads/2020/06/MansionDeluxeRm-6_HEADER-2.jpg",
    alt: "Lakeside View",
    aspect: "portrait",
  },
  {
    src: "https://greystoneinn.com/wp-content/uploads/2020/09/MansionDeluxeRm-1.jpg",
    alt: "Champagne Kitchen Table",
    aspect: "portrait",
  },
  {
    src: "https://greystoneinn.com/wp-content/uploads/2020/09/Mansion-Rockefeller-2.jpg",
    alt: "Rain Room",
    aspect: "landscape",
  },
  {
    src: "https://greystoneinn.com/wp-content/uploads/2020/09/Mansion-Rockefeller-9.jpg",
    alt: "Living Room",
    aspect: "square",
  },
  {
    src: "https://greystoneinn.com/wp-content/uploads/2020/09/Mansion-Rockefeller-12.jpg",
    alt: "King Size Bed",
    aspect: "landscape",
  },
  {
    src: "https://greystoneinn.com/wp-content/uploads/2020/06/MansionPremiumTerrace-2_HEADER2.jpg",
    alt: "Suite",
    aspect: "landscape",
  },
  {
    src: "https://greystoneinn.com/wp-content/uploads/2020/09/MansionPremiumTerrace-2.jpg",
    alt: "Newly Constructed Bathroom",
    aspect: "portrait",
  },
];

export default function Mansion() {
  return (
    <div>
      <HeroImage image={heroimg} title="The Mansion" />
      <CenteredTextBlock content={introText} />
      <SplitColList
        room="Perched above the spa and overlooking the quiet marina and distant mountains, The Hillmont is the heart of Cottage on Lake Toxa—a refined retreat where lake life feels both relaxed and elevated. Inside, you’ll find welcoming one-bedroom suites with cozy sitting areas, breezy screened porches, plush king beds, soft feather bedding, and thoughtful comforts at every turn—all designed to wrap you in an easy, unhurried calm at the water’s edge."
        para="Room amenities include a feather-top mattress and feather pillows, complimentary high-speed internet access, television, iron and ironing board, hair dryer and two plush bathrobes."
        note="Our Lakeside Suites do not have sofabeds and are not designed for young children."
        title="Guests also enjoy complimentary:"
        list={[
          "24-hour concierge",
          "High-speed internet access",
          "Evening turndown service (cashmere hot water bottle turndown, available upon request)",
          "Complimentary shoe and boot cleaning services",
          "Board games and Stave puzzles for use while our guest",
          "Miss Lucy lake cruise May 1st through Thanksgiving (weather permitting)",
        ]}
        bookbtn="call to Book Your Lakeside Stay"
        link="#"
      />
      <PhotoGridGallery images={gallery} />
    </div>
  );
}
