import HeroImage from "../../components/Decorative/HeroImage/HeroImage";
import CenteredTextBlock from "../../components/TextBlocks/CenterdTextBlock/CenterdTextBlock";
import SplitColList from "../../components/TextBlocks/SplitColList/SplitColList";
import PhotoGridGallery from "../../components/Decorative/PhotoGridGallery/PhotoGridGallery";
import heroimg from "../../images/HillmontHero.png";

const introText =
  "Tucked just above the spa and looking out over the quiet marina and distant Blue Ridge peaks, The Hillmont is the gracious main lodge for Cottage on Lake Toxa. Here, intimate one-bedroom suites welcome couples and friends with cozy living rooms, breezy screened porches, plush king beds, soft feather bedding, and thoughtful touches that wrap you in Hillmont’s signature lakeside calm.";

const gallery = [
  {
    src: "https://greystoneinn.com/wp-content/uploads/2020/09/HillmontClassic-1.jpg",
    alt: "Lakside King Bed",
    aspect: "landscape",
  },
  {
    src: "https://greystoneinn.com/wp-content/uploads/2020/09/HillmontClassic-8.jpg",
    alt: "Mondern Bathroom",
    aspect: "square",
  },
  {
    src: "https://greystoneinn.com/wp-content/uploads/2020/09/HillmontClassic-2.jpg",
    alt: "Lakeside View",
    aspect: "portrait",
  },
  {
    src: "https://greystoneinn.com/wp-content/uploads/2020/09/HillmontClassic-4.jpg",
    alt: "Champagne Kitchen Table",
    aspect: "portrait",
  },
  {
    src: "https://greystoneinn.com/wp-content/uploads/2020/09/HillmontClassic-6.jpg",
    alt: "Rain Room",
    aspect: "landscape",
  },
  {
    src: "https://greystoneinn.com/wp-content/uploads/2020/09/HillmontClassic-5.jpg",
    alt: "Living Room",
    aspect: "square",
  },
  {
    src: "https://greystoneinn.com/wp-content/uploads/2020/09/HillmontSignature-5.jpg",
    alt: "King Size Bed",
    aspect: "landscape",
  },
  {
    src: "https://greystoneinn.com/wp-content/uploads/2020/09/HillmontSignature-10.jpg",
    alt: "Suite",
    aspect: "landscape",
  },
  {
    src: "https://greystoneinn.com/wp-content/uploads/2020/09/HillmontSignature-9.jpg",
    alt: "Newly Constructed Bathroom",
    aspect: "portrait",
  },
];

export default function Hillmont() {
  return (
    <div>
      <HeroImage image={heroimg} title="The Hillmont" />
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
        bookbtn="Book Your Lakeside Stay"
        link="/book-now/calendar"
      />
      <PhotoGridGallery images={gallery} />
    </div>
  );
}
