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
    src: "https://lh3.googleusercontent.com/p/AF1QipO5122gHFISU-dB37r1tlZ0iMEZU4ngi2tZwvPx=s680-w680-h510-rw",
    alt: "Demo site",
    aspect: "portrait",
  },
  {
    src: "https://lh3.googleusercontent.com/p/AF1QipP4e4s0r7Ld5HL-O48BUaKSh5AsX32t50Xzzuxn=s680-w680-h510-rw",
    alt: "Demo site",
    aspect: "landscape",
  },
  {
    src: "https://lh3.googleusercontent.com/p/AF1QipM6aEb_t9z-aYxALEqWuHSQEIOgA8ZrPZeFnQKG=s680-w680-h510-rw",
    alt: "Demo site",
    aspect: "square",
  },

  {
    src: "https://lh3.googleusercontent.com/p/AF1QipPVKY9SuBP8pVH-vnKWKP-f-f-eLTYUV0v8fmzx=s680-w680-h510-rw",
    alt: "Demo site",
    aspect: "square",
  },
  {
    src: "https://lh3.googleusercontent.com/p/AF1QipOIZkm5gdMt1C_dIoJLf_FI14J4iSd7dCAVwXNI=s680-w680-h510-rw",
    alt: "Demo site",
    aspect: "landscape",
  },
];

const spaSplit = {
  img: "https://greystoneinn.com/wp-content/uploads/2020/12/Spa-Thumbs-01.jpg",
  title: "Book Your Spa Appointment",
  para: "Stretch out and feel your tensions ease as expert therapists provide soothing massages and revitalizing facials. Ideal for pre-wedding pampering, romantic weekends, group visits and more. ",
  links: [{ label: "Book Now", href: "#" }],
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
