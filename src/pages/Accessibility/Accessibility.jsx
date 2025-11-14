import HeroImage from "../../components/Decorative/HeroImage/HeroImage";

const hrimg =
  "https://greystoneinn.com/wp-content/uploads/2021/01/Greystone_ActivitiesHEADER-1.jpg";

export default function Accessibility() {
  return (
    <>
      <HeroImage image={hrimg} title="Accessibility" />
      <main className="min-h-screen bg-slate-50 text-slate-900">
        <div className="max-w-4xl mx-auto px-4 py-10 md:py-16">
          <section className="bg-white rounded-xl shadow-sm p-6 md:p-10">
            {/* Header */}
            <header className="mb-8">
              <h1 className="text-3xl md:text-4xl font-bold text-[#003d51]">
                Website Accessibility Statement
              </h1>
              <p className="mt-4 leading-relaxed">
                We at The Greystone are committed to making our services and
                products accessible to everyone. We have a website accessibility
                team and are making continued improvements to our website to
                make it easier for persons with disabilities to use. We are also
                making every effort to meet evolving accessibility standards,
                including those set forth in 36 CFR Parts 1193 and 1194 (January
                18, 2017).
              </p>
              <p className="mt-4 leading-relaxed">
                We are committed to making our website accessible and inclusive
                for people with disabilities. We believe in access to knowledge,
                no matter what sort of physical barrier a user may have. We are
                designing our website to be accessible to impaired users to
                navigate, understand, see, and interact. We strive to implement
                the World Wide Web Consortium&apos;s Web Content Accessibility
                Guidelines 2.0 Level AA (&quot;WCAG 2.0 AA&quot;), and EN 301
                549 to the best of our ability.
              </p>
            </header>

            {/* Improvements section */}
            <section aria-labelledby="improvements" className="mb-8">
              <h2
                id="improvements"
                className="text-2xl font-semibold text-[#003d51]"
              >
                Ongoing Website Improvements
              </h2>
              <p className="mt-3 leading-relaxed">
                Here are a few of the improvements we are currently making to
                our website:
              </p>

              <div className="mt-5 space-y-6">
                <article>
                  <h3 className="text-lg font-semibold text-[#003d51]">
                    Language Tagging
                  </h3>
                  <p className="mt-2 leading-relaxed">
                    Each page on our website is compatible with language
                    information-assist systems, including audible speak-back
                    softwares and Braille translators. You can use these forms
                    of information assistance on any page on our site. We are
                    also working to provide sign language interpretation and
                    prerecorded audio content in synchronized media as an
                    alternative to text.
                  </p>
                </article>

                <article>
                  <h3 className="text-lg font-semibold text-[#003d51]">
                    More Label Tags
                  </h3>
                  <p className="mt-2 leading-relaxed">
                    We have more labels and titles to make it easier to find
                    things and to use less keystrokes in getting around our
                    website.
                  </p>
                </article>

                <article>
                  <h3 className="text-lg font-semibold text-[#003d51]">
                    Image Text Alternatives
                  </h3>
                  <p className="mt-2 leading-relaxed">
                    We have added missing label tags on images throughout our
                    website to make it easier for persons with visual or
                    cognitive disabilities to find information on our site. We
                    are working to have a corresponding image for every page on
                    our website that you can use as an alternative to text. We
                    are making every reasonable effort to make the images
                    functional so you can find the content you are looking for
                    quickly. We are also making it possible to find content
                    without having to distinguish among colors.
                  </p>
                </article>

                <article>
                  <h3 className="text-lg font-semibold text-[#003d51]">
                    Easier Keyboard Access
                  </h3>
                  <p className="mt-2 leading-relaxed">
                    We have made it easier to use the keyboard on our website, a
                    functionality we will continue to improve so that you can
                    find what you are looking for easier.
                  </p>
                </article>

                <article>
                  <h3 className="text-lg font-semibold text-[#003d51]">
                    Re-Sizing Text
                  </h3>
                  <p className="mt-2 leading-relaxed">
                    We are making it easier to change the text size and font
                    style and the space between lines to make our website more
                    user-friendly. Large-scale text and images of large-scale
                    text will have a contrast ratio of at least 3:1. We are also
                    adding a zoom feature so you can make images even larger
                    when needed.
                  </p>
                </article>

                <article>
                  <h3 className="text-lg font-semibold text-[#003d51]">
                    Video and Audio Controls
                  </h3>
                  <p className="mt-2 leading-relaxed">
                    We are adding easy to find controls for prerecorded audio
                    and visual content.
                  </p>
                </article>
              </div>
            </section>

            {/* Partial conformance */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#003d51]">
                Partial Conformance
              </h2>
              <p className="mt-3 leading-relaxed">
                Some of the pages on our website may not conform fully to
                existing accessibility standards if accessibility support for
                them does not exist. For such pages, if any, every effort is
                being made to make them conforming to existing guidelines. Such
                partial non-conforming content may exist, for example, where a
                third party has contributed content that is non-conforming.
              </p>
            </section>

            {/* Partner & future changes */}
            <section className="mb-8 space-y-6">
              <article>
                <h2 className="text-2xl font-semibold text-[#003d51]">
                  Web Accessibility Partner
                </h2>
                <p className="mt-3 leading-relaxed">
                  We have a web accessibility partner who works with our web
                  accessibility team to update our website and content and
                  integrate new apps and releases that will make it easier to
                  use our services and products. We are committed as a company
                  to work with our partner to make our website more accessible
                  to everyone.
                </p>
              </article>

              <article>
                <h2 className="text-2xl font-semibold text-[#003d51]">
                  Future Changes
                </h2>
                <p className="mt-3 leading-relaxed">
                  In order to increase accessibility to our services and
                  products to everyone, we are committed to following the
                  evolving standards for accessibility and will continue to work
                  with our accessibility partner to upgrade our existing legacy
                  system to make it better.
                </p>
              </article>
            </section>

            {/* Closing & contact */}
            <section aria-labelledby="contact">
              <p className="leading-relaxed">
                We at The Greystone believe in access to knowledge, no matter
                what sort of physical barrier a user may have. We are continuing
                to design our website to be accessible to impaired users in
                navigating, understanding, seeing, and interacting with a
                website. We want impaired users to contribute to making our
                website better for all. Please be aware that our efforts are
                ongoing. If you find that something on our website is not
                accessible, we welcome your concerns, questions, and
                suggestions. Please contact us at your earliest convenience
                using the support information below.
              </p>

              <div id="contact" className="mt-6 border-t border-slate-200 pt-6">
                <h2 className="text-2xl font-semibold text-[#003d51] mb-3">
                  For assistance contact:
                </h2>
                <address className="not-italic space-y-1 text-base">
                  <p className="font-medium">Paulette Todd</p>
                  <p>
                    <a
                      href="tel:8284779600"
                      className="underline hover:no-underline"
                    >
                      828-477-9600
                    </a>
                  </p>
                  <p>
                    <a
                      href="mailto:info@greystoneinn.com"
                      className="underline break-all hover:no-underline"
                    >
                      info@greystoneinn.com
                    </a>
                  </p>
                </address>
              </div>
            </section>
          </section>
        </div>
      </main>
    </>
  );
}
