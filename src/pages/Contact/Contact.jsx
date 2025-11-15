import { useState, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import HeroImage from "../../components/Decorative/HeroImage/HeroImage";

const hrimg =
  "https://greystoneinn.com/wp-content/uploads/2020/11/Greystone-Story-Parent-Header.jpg";

const faqs = [
  {
    question: "What time is check-in and check-out?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas non lorem sed neque interdum gravida. Vivamus posuere, ipsum at interdum placerat, lectus libero scelerisque purus, nec facilisis sem nisl at magna.",
  },
  {
    question: "Is on-site parking available?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer egestas, felis in molestie ultricies, magna nunc gravida magna, quis sodales est erat ac nunc. Cras euismod egestas lectus.",
  },
  {
    question: "Do you allow pets at the hotel?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, augue at sagittis dictum, odio justo tempus magna, vel varius eros est ac sem. Fusce eget ullamcorper velit.",
  },
  {
    question: "Is Wi-Fi included in my stay?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam volutpat eu nunc nec vulputate. Suspendisse vitae mattis felis. Nunc in nisi in enim feugiat laoreet.",
  },
];

export default function Contact() {
  const [openIndex, setOpenIndex] = useState(0);
  const containerRef = useRef(null);

  useGSAP(
    () => {
      gsap.from(".faq-contact-section", {
        opacity: 0,
        y: 24,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
      });
    },
    { scope: containerRef }
  );

  const toggleIndex = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <>
      <HeroImage image={hrimg} title="Contact Us" />
      <div
        ref={containerRef}
        className="min-h-screen bg-slate-50 text-[#003d51] flex items-center justify-center py-16 px-4"
      >
        <div className="faq-contact-section max-w-5xl w-full bg-white rounded-2xl shadow-xl px-6 py-8 md:px-10 md:py-10">
          {/* Header */}
          <header className="mb-10 text-center">
            <h1
              className="text-4xl md:text-5xl mb-2 text-[#003d51]"
              style={{ fontFamily: '"Imperial Script", cursive' }}
            >
              How can we help?
            </h1>
            <p className="text-xs md:text-sm tracking-[0.25em] uppercase text-[#003d51]/70">
              FAQ &amp; Contact · 220 Greystone Lane · Lake Toxaway, NC
            </p>
          </header>

          {/* Main content */}
          <div className="grid gap-10 md:grid-cols-[minmax(0,2fr)_minmax(0,1.4fr)]">
            {/* FAQ Section */}
            <section aria-labelledby="faq-heading" className="space-y-4">
              <h2
                id="faq-heading"
                className="text-xl font-semibold tracking-wide mb-2"
              >
                Frequently Asked Questions
              </h2>

              {faqs.map((faq, index) => (
                <div
                  key={faq.question}
                  className="border border-[#003d51]/20 rounded-xl bg-slate-50/60 overflow-hidden"
                >
                  <button
                    type="button"
                    onClick={() => toggleIndex(index)}
                    className="w-full flex items-center justify-between px-4 md:px-5 py-3 md:py-4 text-left"
                  >
                    <span className="font-medium text-sm md:text-base">
                      {faq.question}
                    </span>
                    <span className="ml-4 text-xl leading-none">
                      {openIndex === index ? "−" : "+"}
                    </span>
                  </button>

                  {openIndex === index && (
                    <div className="px-4 md:px-5 pb-4 text-sm leading-relaxed text-[#003d51]/80">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </section>

            {/* Contact Section */}
            <section
              aria-labelledby="contact-heading"
              className="rounded-2xl bg-[#003d51] text-white p-6 md:p-7 flex flex-col justify-between gap-6"
            >
              <div>
                <h2
                  id="contact-heading"
                  className="text-xl font-semibold mb-4 tracking-wide"
                >
                  Contact Us
                </h2>

                <div className="space-y-4 text-sm leading-relaxed">
                  <div>
                    <p className="text-[11px] font-semibold tracking-[0.2em] uppercase mb-1">
                      Visit
                    </p>
                    <p>220 Greystone Lane</p>
                    <p>Lake Toxaway, NC 28747</p>
                  </div>

                  <div>
                    <p className="text-[11px] font-semibold tracking-[0.2em] uppercase mb-1">
                      Call
                    </p>
                    <a
                      href="tel:18289664700"
                      className="underline underline-offset-2 decoration-white/40 hover:decoration-white"
                    >
                      828.966.4700
                    </a>
                  </div>
                </div>
              </div>

              <div className="border-t border-white/20 pt-4">
                <p className="text-[11px] font-semibold tracking-[0.25em] uppercase mb-3">
                  Send us a note
                </p>

                {/* Simple contact form (no real submit logic) */}
                <form className="space-y-3">
                  <div>
                    <label className="block text-xs mb-1" htmlFor="name">
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      placeholder="Your name"
                      className="w-full rounded-md border border-white/30 bg-white/10 px-3 py-2 text-sm placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/80"
                    />
                  </div>

                  <div>
                    <label className="block text-xs mb-1" htmlFor="email">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="you@example.com"
                      className="w-full rounded-md border border-white/30 bg-white/10 px-3 py-2 text-sm placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/80"
                    />
                  </div>

                  <div>
                    <label className="block text-xs mb-1" htmlFor="message">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={3}
                      placeholder="Tell us how we can help..."
                      className="w-full rounded-md border border-white/30 bg-white/10 px-3 py-2 text-sm placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/80 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="mt-1 inline-flex items-center justify-center rounded-full bg-white px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.25em] text-[#003d51] hover:bg-slate-100 transition"
                  >
                    Send
                  </button>
                </form>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
