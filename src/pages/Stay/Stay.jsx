import HeroImage from "../../components/Decorative/HeroImage/HeroImage";
import CenteredTextBlock from "../../components/TextBlocks/CenterdTextBlock/CenterdTextBlock";
import StaggeredGallery from "../../components/Decorative/StaggeredGallery/StaggeredGallery";
import StaggeredGallery2 from "../../components/Decorative/StaggeredGallery2/StaggerdGallery2";

const introText =
  "Greystone brings together timeless character and contemporary ease across one scenic estate. Stay amid the grand, storied halls of The Mansion, the refined, modern design of The Hillmont, or the cozy, nature-framed Lakeside Cottages—each crafted for relaxation, connection, and a sense of place.";

export default function Stay() {
  return (
    <div>
      <HeroImage
        image="https://greystoneinn.com/wp-content/uploads/2020/12/GreystoneInn_Rooms-9150_HEADER.jpg"
        title="Stay"
      />
      <CenteredTextBlock content={introText} />
      <StaggeredGallery
        eyebrow="The Inn"
        title="The Mansion at Greystone Inn"
        text="Built in 1915 by Savannah Heiress Lucy Armstrong Moltz, each guestroom has its own character; some with fireplaces and lake views, others with private entrances and lakeside terraces. Guests enjoy the feeling of being in a grand private house, homey yet supremely special."
        images={[
          {
            src: "https://greystoneinn.com/wp-content/uploads/2020/09/MansionSuperiorRm-6.jpg",
            alt: "The Superior Room",
          },
          {
            src: "https://greystoneinn.com/wp-content/uploads/2020/06/MansionPremiumTerrace-2_HEADER2.jpg",
            alt: "The Premium Terrace",
          },
          {
            src: "https://greystoneinn.com/wp-content/uploads/2020/06/Mansion-Rockefeller-7_HEADER2.jpg",
            alt: "The Rockefeller Suit",
          },
        ]}
        link="/mansion"
      />
      <StaggeredGallery2
        eyebrow="The Inn"
        title="The Hillmont at Greystone Inn"
        text="Tucked into the hill on the shore of Lake Toxaway sits The Hillmont; where the rooms feel private: each with a separate entrance, warm and comfortably tucked into the peninsula. Every room is spacious with large decks overlooking the lake."
        images={[
          {
            src: "https://greystoneinn.com/wp-content/uploads/2020/12/HillmontClassic-3_HEADER.jpg",
            alt: "Beutiful Views",
          },
          {
            src: "https://greystoneinn.com/wp-content/uploads/2020/11/HillmontSignature-3_HEADER2.jpg",
            alt: "Luxury Lifestyle",
          },
          {
            src: "https://greystoneinn.com/wp-content/uploads/2020/09/HillmontSignature-4.jpg",
            alt: "Room to Breath",
          },
        ]}
        link="/hillmont"
      />
      <StaggeredGallery
        eyebrow="The Inn"
        title="Lakeside Cottage"
        text="Nestled above the serene spa and overlooking the lake and mountains are two private one bedroom suites. Each suite has a bedroom with luxurious king bed, separate living room and screened in porch."
        images={[
          {
            src: "https://greystoneinn.com/wp-content/uploads/2020/11/Graystone_Christmas_21-5078.jpg",
            alt: "Spacious Living",
          },
          {
            src: "https://greystoneinn.com/wp-content/uploads/2020/11/Graystone_Christmas_21-1819-HDR.jpg",
            alt: "Cozy Decor",
          },
          {
            src: "https://greystoneinn.com/wp-content/uploads/2020/09/LakesideCottages-1.jpg",
            alt: "Regal Living",
          },
        ]}
        link="/cottage"
      />
    </div>
  );
}
