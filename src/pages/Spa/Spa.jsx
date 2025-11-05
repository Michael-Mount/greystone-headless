import HeroImage from "../../components/Decorative/HeroImage/HeroImage";
import CenterdTextBlock from "../../components/TextBlocks/CenterdTextBlock/CenterdTextBlock";

const heroimg =
  "https://greystoneinn.com/wp-content/uploads/2020/12/Greystone_Aug19-5933.jpg";

const introText =
  "Overnight guests and day visitors journey down a quaint path to enter our spa. Upon entry we provide complimentary citrus water and local hot teas, and you are welcome to relax as you await your therapy. Due to the intimate nature of our Spa, we highly recommend reserving your treatments in advance.";

export default function Spa() {
  return (
    <div>
      <HeroImage image={heroimg} title="Spa + Wellness" />
      <CenterdTextBlock content={introText} />
      <div>
        <h3>Our Treatments</h3>
      </div>
    </div>
  );
}
