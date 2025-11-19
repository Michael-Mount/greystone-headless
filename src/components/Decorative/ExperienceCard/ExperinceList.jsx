import ExperienceCard from "./ExperinceCard";

export default function ExperinceList({ experiences }) {
  return (
    <>
      {experiences.map((experience) => (
        <ExperienceCard key={experience.id} experience={experience} />
      ))}
    </>
  );
}
