import GeneralSection from "@/components/ui/GeneralSection";

export default function ConductSectionLanding() {
  return (
    <>
      <GeneralSection
        heading="Code of Conduct"
        subHeading={<>Fostering Inclusivity<br />and Respect</>}
      >
        Our Code of Conduct is a set of guidelines that promotes a welcoming and
        inclusive environment within our community. It outlines our commitment
        to respectful behavior, collaboration, and diversity, ensuring that all
        members can contribute and thrive in a positive atmosphere.
      </GeneralSection>
      <hr className="mx-auto mb-12 lg:mb-24 max-w-[calc(var(--screen-xxl)_+_80px)] border-0 h-px bg-(--neutral-400)" />
    </>
  );
}
