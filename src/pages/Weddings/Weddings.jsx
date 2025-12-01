import HeroImage from "../../components/Decorative/HeroImage/HeroImage";
import CenternedTextBlock from "../../components/TextBlocks/CenterdTextBlock/CenterdTextBlock";

import hrimg from "../../images/wedding.jpg";

export default function Weddings() {
  return (
    <div>
      <HeroImage image={hrimg} title="Weddings & Events" />
      <CenternedTextBlock content="Lorme ipsum lorme ipsum lorme ipsum lorme ipsumLorme ipsum lorme ipsum lorme ipsum lorme ipsum Lorme ipsum lorme ipsum lorme ipsum lorme ipsum Lorme ipsum lorme ipsum lorme ipsum lorme ipsum" />
    </div>
  );
}
