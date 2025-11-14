import HeroImage from "../../components/Decorative/HeroImage/HeroImage";
import CenterdTextBlock from "../../components/TextBlocks/CenterdTextBlock/CenterdTextBlock";
import HourSplit from "../../components/TextBlocks/HourSplit/HourSplit";
import PhotoGridGallery from "../../components/Decorative/PhotoGridGallery/PhotoGridGallery";
import SplitFeature2 from "../../components/Decorative/SplitFeature2/SplitFeature2";

const heroimg = "https://resizer.otstatic.com/v3/photos/48304683-3";

const gallery = [
  {
    src: "https://resizer.otstatic.com/v3/photos/48304683-3",
    alt: "Lakside King Bed",
    aspect: "landscape",
  },
  {
    src: "https://resizer.otstatic.com/v3/photos/48306752-2",
    alt: "Mondern Bathroom",
    aspect: "square",
  },
  {
    src: "https://resizer.otstatic.com/v3/photos/48306714-2",
    alt: "Lakeside View",
    aspect: "portrait",
  },
  {
    src: "https://resizer.otstatic.com/v3/photos/52980788-1",
    alt: "Champagne Kitchen Table",
    aspect: "portrait",
  },
  {
    src: "https://resizer.otstatic.com/v3/photos/48306763-2",
    alt: "Rain Room",
    aspect: "landscape",
  },
  {
    src: "https://resizer.otstatic.com/v3/photos/48306747-2",
    alt: "Living Room",
    aspect: "square",
  },
  {
    src: "https://resizer.otstatic.com/v3/photos/54602854-1",
    alt: "King Size Bed",
    aspect: "landscape",
  },
];

const cateringSplit = {
  img: "https://greystoneinn.com/wp-content/uploads/2020/11/Greystone-Dine-Parent-Catering.jpg",
  title: "Catering",
  para: "Our award-winning chef will design a menu to impress the most well-traveled palates, whether presented buffet-style or served individually. Choose from our array of menus designed to enhance any time of day, or let us custom design an unforgettable feast to highlight your event’s theme.",
  links: [{ label: "Learn More", href: "#" }],
};

export default function Restauraunt() {
  return (
    <div>
      <HeroImage image={heroimg} title="The Restaurant" />
      <CenterdTextBlock content="Nestled within the serene landscapes of North Carolina, the award-winning restaurant at Greystone Inn offers a culinary experience that blends sophistication with the warmth of Southern hospitality. Boasting a picturesque setting overlooking Lake Toxaway, diners are treated to a menu crafted with locally sourced ingredients, showcasing the region's rich flavors and seasonal delights. With a commitment to excellence in both cuisine and service, every visit to this renowned establishment promises an unforgettable journey through fine dining, where every dish tells a story of passion and creativity." />
      <div className="btn-banner flex justify-center bg-[#003d51]">
        <ul
          className="
      btn-list
      flex flex-col items-stretch gap-4 p-4
      md:flex-row md:items-center md:justify-center md:gap-7 md:p-8
    "
        >
          <li
            className="
        btn-item
        w-full text-center
        text-white text-base md:text-xl
        uppercase border-2
        px-4 py-2 md:px-12 md:py-2
        hover:bg-white hover:text-[#003d51]
      "
          >
            <a href="#">Brunch </a>
          </li>

          <li
            className="
        btn-item
        w-full text-center
        text-white text-base md:text-xl
        uppercase border-2
        px-4 py-2 md:px-12 md:py-2
        hover:bg-white hover:text-[#003d51]
      "
          >
            <a href="#">Dinner</a>
          </li>

          <li
            className="
        btn-item
        w-full text-center
        text-white text-base md:text-xl
        uppercase border-2
        px-4 py-2 md:px-12 md:py-2
        hover:bg-white hover:text-[#003d51]
      "
          >
            <a href="#">Dessert</a>
          </li>
        </ul>
      </div>

      <HourSplit
        img="https://resizer.otstatic.com/v3/photos/48306796-2"
        title="stand in image"
      />
      <PhotoGridGallery images={gallery} />
      <SplitFeature2 content={cateringSplit} />
    </div>
  );
}
