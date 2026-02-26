import HeroImage from "../../components/Decorative/HeroImage/HeroImage";
import CenteredTextBlock from "../../components/TextBlocks/CenterdTextBlock/CenterdTextBlock";
import PhotoGridGallery from "../../components/Decorative/PhotoGridGallery/PhotoGridGallery";
import SplitColList from "../../components/TextBlocks/SplitColList/SplitColList";
import hrimg from "../../images/cottageHero.jpeg";

const introText =
  "Tucked above the spa and gazing out toward the quiet marina and distant mountains, our Lakeside Cottage invites you into a pair of intimate one-bedroom suites—perfect for couples or friends traveling together. Each suite opens to a cozy living room and a breezy screened porch, with a plush king bed, soft feather bedding, and thoughtful comforts waiting to wrap you in lakeside calm.";

const gallery = [
  {
    src: "https://greystoneinn.com/wp-content/uploads/2020/09/LakesideCottages-4.jpg",
    alt: "Lakside King Bed",
    aspect: "landscape",
  },
  {
    src: "https://greystoneinn.com/wp-content/uploads/2020/09/LakesideCottages-3.jpg",
    alt: "Mondern Bathroom",
    aspect: "square",
  },
  {
    src: "https://greystoneinn.com/wp-content/uploads/2020/09/LakesideCottages-2.jpg",
    alt: "Lakeside View",
    aspect: "portrait",
  },
  {
    src: "https://greystoneinn.com/wp-content/uploads/2020/11/Graystone_Christmas_21-5064.jpg",
    alt: "Champagne Kitchen Table",
    aspect: "portrait",
  },
  {
    src: "https://greystoneinn.com/wp-content/uploads/2020/11/Graystone_Christmas_21-1819-HDR.jpg",
    alt: "Rain Room",
    aspect: "landscape",
  },
  {
    src: "https://greystoneinn.com/wp-content/uploads/2020/11/Graystone_Christmas_21-1809-HDR.jpg",
    alt: "Living Room",
    aspect: "square",
  },
  {
    src: "https://greystoneinn.com/wp-content/uploads/2020/11/Graystone_Christmas_21-1789-HDR.jpg",
    alt: "King Size Bed",
    aspect: "landscape",
  },
  {
    src: "https://greystoneinn.com/wp-content/uploads/2020/09/LakesideCottages-1.jpg",
    alt: "Suite",
    aspect: "portrait",
  },
  {
    src: "https://greystoneinn.com/wp-content/uploads/2020/09/LakesideCottages-6.jpg",
    alt: "Newly Constructed Bathroom",
    aspect: "portrait",
  },
  {
    src: "https://greystoneinn.com/wp-content/uploads/2020/11/Graystone_Christmas_21-1778-HDR.jpg",
    alt: "Living Space",
    aspect: "landscape",
  },
];

export default function Cottage() {
  return (
    <div>
      <HeroImage image={hrimg} title="Lakeside Cottage" />
      <CenteredTextBlock content={introText} />
      <SplitColList
        room="Within our Lakeside Cottage, nestled above the serene spa and overlooking the marina cove and mountains, are two private one bedroom suites. The side by side suites have adjoining doors for friends traveling together. Each suite has a bedroom with a luxurious king bed, separate living room and a screened in porch."
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
