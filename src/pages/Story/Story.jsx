// src/pages/OurStory/OurStory.jsx

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const eras = [
  {
    id: "lucy-beginnings",
    label: "1910–1916",
    title: "Lucy, Lake Toxaway & Hillmont",
    tag: "Beginnings",
    intro:
      "In the early 1910s, Savannah socialite Lucy Armstrong and her husband George discovered Lake Toxaway while staying at the famed Toxaway Inn among industrial families like the Vanderbilts, Rockefellers, and Firestones. What began as a summer escape quickly became a lifelong love.",
    body: [
      "When Lucy fell in love with the lake, George challenged her to spend a full summer on the shoreline before committing to building a home. Lucy accepted in her own way—by having a hardwood floor laid, covering it with a 2,000-square-foot canvas tent, and adding a second tent to house a full staff of servants.",
      "By 1915, the Armstrongs’ lake home was complete. Lucy personally laid out the original structure, drawing inspiration from the Swiss chalets she had admired on her travels: grey board-and-batten siding with crisp white trim, flower boxes, balconies with cut-out details, and casement windows that opened to the mountain air. Working with prominent Atlanta architects Heinz and Reid, she created a home she called Hillmont—a mountain retreat that was elegant, but never ostentatious.",
      "In 1916, a catastrophic flood caused the Toxaway dam to burst. A towering wave raced down the valley, scarring the landscape and emptying the lake. Local legend says Lucy was rowing on the water when the dam broke; by the time she reached shore, the lake was already receding. The grand Toxaway Inn never reopened, and the fashionable crowds drifted away. But Lucy did not.",
    ],
    gallery: [
      {
        src: "https://greystoneinn.com/wp-content/uploads/2021/01/Group-1.1.jpg",
        alt: "Historic-style image representing Lucy’s original lakeside camp setup",
        caption: "",
      },
      {
        src: "https://greystoneinn.com/wp-content/uploads/2021/01/Group-1.5.jpg",
        alt: "Vintage style representation of the Hillmont home in 1915",
        caption: "",
      },
      {
        src: "https://greystoneinn.com/wp-content/uploads/2021/01/Group-1.3.jpg",
        alt: "Historic lake inn representation",
        caption: "”",
      },
    ],
  },
  {
    id: "lucy-community",
    label: "1920–1961",
    title: "A House of Welcome & a Life of Service",
    tag: "Lucy’s Legacy",
    intro:
      "Even after the lake drained and the resort era faded, Lucy remained devoted to this quiet mountain community and to the home she had built above the water’s edge.",
    body: [
      "After George’s passing in 1924, Lucy made Hillmont her permanent residence. She later married local businessman Carl Moltz, and together they expanded the home—adding a larger dining room and sunroom, a kitchen wing with additional bedrooms above, and a freestanding library with a canning kitchen below.",
      "Lucy’s generosity touched nearly every corner of the valley. During the Depression, she created work on her estate and taught local women skills in cooking, canning, and homemaking. She adored children, often hosting picnics on the grounds and quietly sponsoring more than two dozen young people in their college studies.",
      "Her belief in education extended beyond Lake Toxaway. In Savannah, she donated her Armstrong House mansion to the city as the home of its first institution dedicated exclusively to higher learning. Decades later, she would be honored as a matriarch of Armstrong State College for the direction and life she helped give the school.",
      "Throughout it all, Lucy never stopped believing the lake would one day return. In 1961, her faith was rewarded when the Lake Toxaway Company rebuilt the dam and restored the waters below Hillmont.",
    ],
    gallery: [
      {
        src: "https://laketoxawaycommunity.net/wp-content/uploads/2024/10/Photo-of-Moltz-Mansion-from-Lake-Toxaway--768x640.png",
        alt: "Historic house expansion representation",
        caption: "",
      },
      {
        src: "https://laketoxawaycommunity.net/wp-content/uploads/2024/10/Photo-of-Moltz-Mansion-from-Front-Entrance--1024x820.png",
        alt: "Vintage community gathering illustration",
        caption: "",
      },
      {
        src: "https://historictoxaway.org/wp-content/uploads/2020/07/George-Lucy-and-Lucy-Jr_sm.jpg",
        alt: "Symbolic image of education and philanthropy",
        caption: "",
      },
    ],
  },
  {
    id: "lovelace-era",
    label: "1980s",
    title: "From Hillmont to The Greystone Inn",
    tag: "Lovelace Era",
    intro:
      "By the 1980s, Lucy’s beloved home had passed into other hands and weathered years of change. For a time, it served as a temporary clubhouse for the Lake Toxaway Country Club. Eventually, the house sat silent—its future uncertain.",
    body: [
      "In 1984, friends Reg Heinitsh, Jr. and Tim Lovelace were driving around the lake when they passed the old Hillmont estate. The house, nearly lost to neglect and development, still held a stately presence above the water. Reg suggested it might make a promising inn. A week later, Tim began negotiations to purchase the property.",
      "Tim and his wife Boo Boo approached the renovation as caretakers rather than developers. They preserved the original flow and ambience of the home, inspired by the stonework that climbed up the hillside. In that spirit, they renamed the estate The Greystone Inn and opened the doors to guests on July 15, 1985.",
      "From the outset, the Lovelaces saw the inn not as a typical hotel, but as a home that happened to welcome guests. As Tim put it, “It’s not a hotel or motel, it’s our home. We treat our customers like guests in our home.”",
    ],
    gallery: [
      {
        src: "https://greystoneinn.com/wp-content/uploads/2021/01/Lovelace-2.jpg",
        alt: "Representation of the Greystone Inn opening era",
        caption: "",
      },
      {
        src: "https://greystoneinn.com/wp-content/uploads/2021/01/Lovelace-1.jpg",
        alt: "Stone terraces representation",
        caption: "",
      },
      {
        src: "https://greystoneinn.com/wp-content/uploads/2021/01/Lovelace-3.jpg",
        alt: "Boat cruise representation",
        caption: "",
      },
    ],
  },
  {
    id: "lovelace-legacy",
    label: "1985–2017",
    title: "Recognition, Tradition & a New Generation",
    tag: "Hospitality",
    intro:
      "Over the next several decades, The Greystone Inn quietly earned a reputation as one of the South’s most romantic and storied escapes.",
    body: [
      "Tim became known for his pre-dinner cruises aboard the inn’s classic launch, sharing tales of the early resort era and pointing out historic sites along the shoreline. The experience was less a tour and more a conversation—an introduction to Lake Toxaway as Lucy once knew it.",
      "The inn drew guests from across the country and abroad, and the accolades followed: AAA Four-Diamond recognition, “Most Romantic Inn” distinctions, and features in countless magazines and travel publications.",
      "In 2005, Tim stepped back from daily operations and his son Clark Lovelace took the helm as general manager. Having grown up at The Greystone Inn and honed his craft at properties like The Greenbrier and Fearrington House, Clark carried forward his family’s warm, attentive style of hospitality.",
    ],
    gallery: [
      {
        src: "https://historictoxaway.org/wp-content/uploads/2020/12/Boo-Boo-and-Tim-Lovelace.jpg",
        alt: "Awards and recognition representation",
        caption: "",
      },
      {
        src: "https://historictoxaway.org/wp-content/uploads/2020/12/2013-October-Our-State-Magazine-T-County-photo-essay-3-1030x680.jpg",
        alt: "Romantic evening representation",
        caption: "",
      },
      {
        src: "https://www.highlandscashiersplateau.com/wp-content/uploads/2018/06/greystone-inn-lake-toxaway-nc-12.jpg",
        alt: "Generational guests illustration",
        caption: "",
      },
    ],
  },
  {
    id: "ellis-stewards",
    label: "2017–Today",
    title: "A Continuing Story of Welcome",
    tag: "Today",
    intro:
      "On November 1, 2017, the care of The Greystone Inn passed to new stewards. With it came a promise: to honor the history of this place while keeping it vibrantly present for today’s guests.",
    body: [
      "Listed on the National Register of Historic Places, The Greystone Inn remains, at its heart, a home on the lake. The architecture and setting speak to Lucy’s original vision; the warmth of the welcome reflects decades of thoughtful innkeeping.",
      "Today, guests arrive much as they always have—drawn by the stillness of the water, the curve of the mountains, and the feeling of stepping into a story that began more than a century ago.",
      "As current caretakers Shannon and Geoffrey Ellis have shared, it is a privilege to welcome guests to Greystone and to continue the legacy of gracious hospitality that began with Lucy’s belief that this beautiful place should be enjoyed by many.",
    ],
    gallery: [
      {
        src: "https://greystoneinn.com/wp-content/uploads/2023/12/banner-Greystone-Winter-Newsletter.jpg",
        alt: "Current Greystone Inn exterior representation",
        caption: "",
      },
      {
        src: "https://historictoxaway.org/wp-content/uploads/2021/01/web-lake_toxaway_aerial-3-1030x531.jpg",
        alt: "Lobby fireplace representation",
        caption: "",
      },
      {
        src: "https://historictoxaway.org/wp-content/uploads/2021/01/GreystoneInn_Rooms-4476-1030x687.jpg",
        alt: "Guests arriving representation",
        caption: "",
      },
    ],
  },
];

export default function Story() {
  const rootRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".story-hero-heading", {
        y: 40,
        opacity: 0,
        duration: 1.1,
        ease: "power3.out",
      });

      gsap.from(".story-hero-subtitle", {
        y: 30,
        opacity: 0,
        duration: 1,
        delay: 0.1,
        ease: "power3.out",
      });

      gsap.from(".story-era-nav-item", {
        opacity: 0,
        y: 20,
        duration: 0.6,
        ease: "power3.out",
        stagger: 0.06,
        delay: 0.15,
      });

      // Era sections scroll-into-view
      const sections = gsap.utils.toArray(".story-era");

      sections.forEach((section, index) => {
        gsap.from(section, {
          opacity: 0,
          y: 80,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 78%",
            once: true,
          },
          delay: index * 0.02,
        });

        const galleryImages = section.querySelectorAll(".story-era-image");

        gsap.from(galleryImages, {
          opacity: 0,
          y: 30,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.08,
          scrollTrigger: {
            trigger: section,
            start: "top 70%",
            once: true,
          },
        });
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={rootRef} className="bg-white text-slate-900">
      {/* Hero section – full width */}
      <section className="relative overflow-hidden">
        {/* Header image placeholder – replace with your own hero */}
        <div className="relative h-[55vh] min-h-[360px] w-full">
          <img
            src="https://greystoneinn.com/wp-content/uploads/2021/01/HEADER.jpg"
            alt="Lakeside mountains representing the story of The Greystone Inn"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/35 to-main" />
        </div>

        {/* Overlay content */}
        <div className="absolute inset-0 flex items-end">
          <div className="mx-auto max-w-6xl px-6 pb-10 lg:px-8 lg:pb-14">
            <p className="story-hero-subtitle text-xs tracking-[0.3em] uppercase text-slate-100/80 mb-3">
              The Greystone Inn
            </p>
            <h1 className="story-hero-heading text-3xl sm:text-4xl lg:text-[2.9rem] font-serif tracking-tight text-white max-w-2xl">
              Our Story by the Water
            </h1>
            <p className="mt-4 max-w-2xl text-sm sm:text-base text-slate-100/90 leading-relaxed">
              More than a century ago, Lucy Armstrong chose a rocky knoll above
              Lake Toxaway for a summer “camp” that became a beloved mountain
              home. Since then, this lakeside estate has welcomed generations of
              guests, each adding their own chapter to Greystone’s story.
            </p>
          </div>
        </div>
      </section>

      {/* Era navigation strip */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-5 lg:px-8">
          <div className="flex flex-wrap gap-2 sm:gap-3">
            {eras.map((era) => (
              <a
                key={era.id}
                href={`#${era.id}`}
                className="story-era-nav-item inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3.5 py-1.5 text-[0.7rem] uppercase tracking-[0.2em] text-slate-600 hover:border-[#003d51] hover:text-[#003d51] hover:bg-slate-100 transition-colors"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-[#003d51]" />
                <span>{era.label}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Story content */}
      <main className="bg-[#f7f7f7]">
        <div className="mx-auto max-w-6xl px-6 py-14 lg:px-8 lg:py-18 space-y-16 lg:space-y-20">
          {eras.map((era) => (
            <section
              key={era.id}
              id={era.id}
              className="story-era rounded-3xl bg-white shadow-[0_24px_60px_-32px_rgba(15,23,42,0.35)] border border-slate-200 overflow-hidden"
            >
              <div className="grid gap-0 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1.4fr)]">
                {/* Text side */}
                <div className="px-6 py-7 sm:px-8 sm:py-9 lg:px-9 lg:py-10">
                  <p className="text-xs tracking-[0.3em] uppercase text-slate-500 mb-2">
                    {era.tag} &mdash; {era.label}
                  </p>
                  <h2 className="text-2xl sm:text-3xl font-serif tracking-tight text-[#003d51] mb-4">
                    {era.title}
                  </h2>
                  <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
                    {era.intro}
                  </p>
                  <div className="space-y-3.5 text-sm sm:text-base text-slate-700 leading-relaxed">
                    {era.body.map((paragraph, idx) => (
                      <p key={idx}>{paragraph}</p>
                    ))}
                  </div>
                </div>

                {/* Gallery side */}
                <div className="border-t border-slate-200 lg:border-t-0 lg:border-l lg:border-slate-200 bg-slate-50/80">
                  <div className="grid h-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3 sm:gap-4 lg:gap-3 p-4 sm:p-5 lg:p-6">
                    {era.gallery.map((image, idx) => (
                      <figure
                        key={image.src + idx}
                        className={`story-era-image group relative overflow-hidden rounded-2xl bg-slate-200 ${
                          idx === 0
                            ? "sm:col-span-2 lg:col-span-1 lg:h-64"
                            : "lg:h-64"
                        }`}
                      >
                        <img
                          src={image.src}
                          alt={image.alt}
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                        />
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent opacity-80" />
                        <figcaption className="absolute inset-x-3 bottom-3 text-[0.7rem] text-slate-50 leading-snug">
                          {image.caption}
                        </figcaption>
                      </figure>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          ))}

          {/* Closing section / soft CTA */}
          <section className="rounded-3xl border border-slate-200 bg-white px-6 py-8 sm:px-8 sm:py-9 lg:px-10 lg:py-10">
            <div className="max-w-3xl">
              <p className="text-xs tracking-[0.3em] uppercase text-slate-500 mb-3">
                A Living Story
              </p>
              <h2 className="text-2xl sm:text-3xl font-serif tracking-tight text-[#003d51] mb-4">
                Continuing Lucy’s Wish
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-3">
                In 1915, when Lucy Armstrong Moltz finished her lakeside home,
                she did so with the hope that this place would be shared and
                enjoyed by many. From the Lovelace family’s care in the 1980s to
                today’s stewardship, that wish has guided Greystone’s quiet,
                gracious approach to hospitality.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Each stay adds a new layer to that original vision—a guest
                turning a key, a couple stepping onto the terrace at dusk, a
                family returning to a familiar lakeside view. We are honored to
                welcome you into Lucy’s story, and to help you write a chapter
                of your own by the water.
              </p>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
