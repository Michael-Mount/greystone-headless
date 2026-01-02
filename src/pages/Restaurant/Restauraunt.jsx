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

import wineLogo from "../../images/wineLogo.png";
import fiveLogo from "../../images/ fiveLogo.png";
import southLogo from "../../images/SouthsBestLogo.png";
import wbaLogo from "../../images/WBALogo.png";

const cateringSplit = {
  img: "https://greystoneinn.com/wp-content/uploads/2020/11/Greystone-Dine-Parent-Catering.jpg",
  title: "Catering",
  para: "Our award-winning chef will design a menu to impress the most well-traveled palates, whether presented buffet-style or served individually. Choose from our array of menus designed to enhance any time of day, or let us custom design an unforgettable feast to highlight your event’s theme.",
  links: [{ label: "Learn More", href: "#" }],
};

const barSplit = {
  img: "https://greystoneinn.com/wp-content/uploads/2025/12/Greystone_Meetings_BarFood_Drinks_Nest_April24-8763-scaled.jpg",
  title: "Mansion Bar",
  para: "Looking for more of a light snack or a refreshing drink, try our in house bar at the Mansion.",
  links: [{ label: "Learn More", href: "/dine/mansion-bar" }],
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
        px-4 py-1 md:px-10 md:py-1
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
        px-4 py-1 md:px-10 md:py-1
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
        px-4 py-1 md:px-10 md:py-1
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
      <div className="awardWrapper w-full flex justify-center px-4 py-6">
        <div className="awardContainer flex flex-wrap items-center justify-center gap-6 sm:gap-10 md:gap-16">
          <img
            src={wineLogo}
            alt="Wine Spectator Best 2023 Award"
            className="h-16 sm:h-18 md:h-28 w-auto object-contain"
          />
          <img
            src={fiveLogo}
            alt="500 Times Best Dine 2024 Award"
            className="h-16 sm:h-18 md:h-28 w-auto object-contain"
          />
          <img
            src={wbaLogo}
            alt="World Best Dine 2022 Award"
            className="h-16 sm:h-18 md:h-28 w-auto object-contain"
          />
          <img
            src={southLogo}
            alt="Best Southern Dine 2021 Award"
            className="h-16 sm:h-18 md:h-28 w-auto object-contain"
          />
        </div>
      </div>

      <PhotoGridGallery images={gallery} />
      <SplitFeature2 content={cateringSplit} />
      <SplitFeature2 content={barSplit} />
    </div>
  );
}
