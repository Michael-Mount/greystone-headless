import HeroImage from "../../components/Decorative/HeroImage/HeroImage";
import CenterdTextBlock from "../../components/TextBlocks/CenterdTextBlock/CenterdTextBlock";
import BasicBtn from "../../components/Buttons/BasicBtn/BasicBtn";

import hero from "../../images/lobby1.png";
import lake2 from "../../images/lake2.png";

export default function CorporateTravel() {
  return (
    <section>
      <HeroImage image={hero} title="Corporate Travel" />
      <CenterdTextBlock content="Trade fluorescent lights for lake views and mountain air. At The Greystone Inn, your team can meet, plan, and recharge in a historic lakeside setting, with flexible venues, tailored menus, and quiet spaces that encourage real conversation and clear thinking." />
      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          {/* Header */}
          <h2 className="text-2xl sm:text-3xl lg:text-[2rem] font-serif tracking-tight text-[#003d51]">
            Space to step back, think clearly, and reconnect.
          </h2>

          {/* Text + image */}
          <div className="mt-6 grid gap-8 lg:mt-10 lg:grid-cols-2 lg:items-center">
            <div className="text-sm sm:text-base text-slate-700 leading-relaxed">
              <p>
                Bring your team to a place where the pace softens and
                conversations deepen. Set on the shores of private Lake Toxaway,
                The Greystone Inn offers a historic lakeside estate for strategy
                sessions, leadership retreats, and gatherings that deserve more
                than a conference room.
              </p>
              <p className="mt-4">
                Indoor salons, lakeside terraces, and intimate dining rooms
                create a natural flow from focused work to relaxed
                connection—whether that means a morning board meeting, an
                afternoon on the water, or cocktails by the fire. With tailored
                menus, curated experiences, and thoughtful, unobtrusive service,
                our team handles the details so yours can focus on what matters
                most.
              </p>
            </div>

            <div className="relative">
              <div className="overflow-hidden  shadow-[0_24px_60px_-32px_rgba(15,23,42,0.4)]">
                <img
                  src={lake2}
                  alt="Lake Toxaway at sunset"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Button */}
          <div className="flex flex-col md:flex-row justify-center gap-12 md:gap-44 mt-5 md:mt-12">
            <BasicBtn
              bg="blue-btn"
              title="Book Now"
              link="/book-now/calendar"
            />
            <BasicBtn bg="blue-btn" title="Contact Us" link="/contact" />
            <BasicBtn bg="blue-btn" title="Sign Up" link="/event-rfp" />
          </div>
        </div>
      </section>
    </section>
  );
}
