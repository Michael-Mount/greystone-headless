import HeroImage from "../../components/Decorative/HeroImage/HeroImage";
import BasicBtn from "../../components/Buttons/BasicBtn/BasicBtn";
import JobAdBlock from "../../components/Decorative/JobAdBlock/JobAdBlock";
import hrimg from "../../images/eventHero.jpeg";

import { jobs } from "../../Data/JobData";

export default function Careers() {
  return (
    <div>
      <HeroImage image={hrimg} title="Careers" />
      <div className="introText w-full flex flex-col items-center justify-center gap-6 text-center text-[#003d51] px-4 py-8">
        <h2 className="header font-[cursive] text-3xl md:text-6xl mb-4">
          Join The Greystone Team
        </h2>
        <p className="text-base md:text-2xl max-w-3xl">
          We believe that employees are our most important resource and our
          success depends upon creating and retaining a staff capable of
          delivering an exceptional experience to every customer, every time.
        </p>
        <BasicBtn bg="blue-btn" link="#" title="Submit Your Resume" />
      </div>
      <div className="w-full h-px bg-[#003d51] my-6" />
      <h3 className="header font-[cursive] text-[#003d51] text-3xl md:text-5xl mb-4 text-center">
        Current Available Postions
      </h3>
      <div className="space-y-8">
        {jobs.map((job) => (
          <JobAdBlock key={job.id} {...job} />
        ))}
      </div>
    </div>
  );
}
