import HeroImage from "../../components/Decorative/HeroImage/HeroImage";
import CenterdTextBlock from "../../components/TextBlocks/CenterdTextBlock/CenterdTextBlock";
import PhotoGridGallery from "../../components/Decorative/PhotoGridGallery/PhotoGridGallery";
import SplitFeature2 from "../../components/Decorative/SplitFeature2/SplitFeature2";

const heroimg =
  "https://greystoneinn.com/wp-content/uploads/2020/12/Greystone_Aug19-5933.jpg";

const introText =
  "Overnight guests and day visitors journey down a quaint path to enter our spa. Upon entry we provide complimentary citrus water and local hot teas, and you are welcome to relax as you await your therapy. Due to the intimate nature of our Spa, we highly recommend reserving your treatments in advance.";

const gallery = [
  {
    src: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Demo site",
    aspect: "portrait",
  },
  {
    src: "https://images.unsplash.com/photo-1677763856232-d9eb9e127e9b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Demo site",
    aspect: "landscape",
  },
  {
    src: "https://plus.unsplash.com/premium_photo-1679430672295-3846f0cf0503?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Demo site",
    aspect: "square",
  },

  {
    src: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Demo site",
    aspect: "square",
  },
  {
    src: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Demo site",
    aspect: "landscape",
  },
];

const spaSplit = {
  img: "https://greystoneinn.com/wp-content/uploads/2020/12/Spa-Thumbs-01.jpg",
  title: "Call to Book Your Spa Appointment",
  para: "Stretch out and feel your tensions ease as expert therapists provide soothing massages and revitalizing facials. Ideal for pre-wedding pampering, romantic weekends, group visits and more. ",
  links: [],
};

export default function Spa() {
  return (
    <div>
      <HeroImage image={heroimg} title="Spa + Wellness" />
      <CenterdTextBlock content={introText} />
      <PhotoGridGallery images={gallery} />
      <SplitFeature2 content={spaSplit} />
    </div>
  );
}
