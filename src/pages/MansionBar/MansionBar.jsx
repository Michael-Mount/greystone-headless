import HeroImg from "../../components/Decorative/HeroImage/HeroImage";
import CenteredText from "../../components/TextBlocks/CenterdTextBlock/CenterdTextBlock";
import HourSplit from "../../components/TextBlocks/HourSplit/HourSplit";
import PhotoGridGallery from "../../components/Decorative/PhotoGridGallery/PhotoGridGallery";

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

const heroImg =
  "https://greystoneinn.com/wp-content/uploads/2020/11/Greystone-Dine-Parent-Mansion-Bar.jpg";

export default function MansionBar() {
  return (
    <div>
      <HeroImg image={heroImg} title="Mansion Bar" />
      <CenteredText content="Enjoy the easy-going elegance of the Mansion Bar. Relax with a glass of wine, a hand-crafted cocktail or an ice cold beer. We invite you to get comfortable at The Greystone Inn." />
      <div className="btn-banner flex justify-center  bg-[#003d51]">
        <ul className="btn-list flex gap-7 p-8 ">
          <li className="btn-item text-white text-xl uppercase border-2 px-8 py-2 hover:bg-white hover:text-[#003d51]">
            <a href="#">Bites</a>
          </li>
          <li className="btn-item text-white text-xl uppercase border-2 px-8 py-2 hover:bg-white hover:text-[#003d51]">
            <a href="#">Seasonal and Local Cocktails</a>
          </li>
          <li className="btn-item text-white text-xl uppercase border-2 px-8 py-2 hover:bg-white hover:text-[#003d51]">
            <a href="#">Local and Domestic Beers</a>
          </li>
        </ul>
      </div>
      <HourSplit
        img="https://greystoneinn.com/wp-content/uploads/2022/05/Greystone_Aug19-8732-2.jpg"
        title="Stand in image"
      />
      <PhotoGridGallery images={gallery} />
    </div>
  );
}
