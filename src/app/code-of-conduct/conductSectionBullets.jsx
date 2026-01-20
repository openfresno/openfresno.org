import CircledNumber from "@/components/ui/CircledNumber";

export default function conductSectionBullets({ sectionType }) {
  return (
    <section
      className={`conduct-list-container mx-auto my-12 max-w-[calc(var(--screen-xxl)+80px)] px-3 lg:px-10 lg:mb-24 lg:mt-16 conduct-${sectionType}-theme flex flex-col gap-4 lg:gap-8`}
    >
      <p className={`conduct-sub-heading-main font-semibold ml-3 lg:ml-0`}>
        Open Fresno fosters a community that:
      </p>

      <div className={`flex h-fit flex-row gap-4 lg:items-center lg:gap-8`}>
        <CircledNumber number={1} sectionType={sectionType} />
        <p className={`conduct-item-paragraph h-min align-middle`}>
          Is a safe and respectful environment for all participants.
        </p>
      </div>

      <div className={`flex h-fit flex-row gap-4 lg:items-center lg:gap-8`}>
        <CircledNumber number={2} sectionType={sectionType} />
        <p className={`conduct-item-paragraph h-min`}>
          Allows for the free expression of all identities.
        </p>
      </div>

      <div className={`flex h-fit flex-row gap-4 lg:items-center lg:gap-8`}>
        <CircledNumber number={3} sectionType={sectionType} />
        <p className={`conduct-item-paragraph`}>
          Welcomes everyone&apos;s ideas, skills, and contributions.
        </p>
      </div>

      <div className={`flex h-fit flex-row gap-4 lg:items-center lg:gap-8`}>
        <CircledNumber number={4} sectionType={sectionType} />
        <p className={`conduct-item-paragraph`}>
          Actively invites curiosity instead of assumptions.
        </p>
      </div>

      <div className={`flex h-fit flex-row gap-4 lg:items-center lg:gap-8`}>
        <CircledNumber number={5} sectionType={sectionType} />
        <p className={`conduct-item-paragraph`}>
          Encourages people to find and utilize their strengths and skills
          productively. We can foster this environment through
          &quot;yes/and&quot; statements.
        </p>
      </div>

      <div className={`flex h-fit flex-row gap-4 lg:items-center lg:gap-8`}>
        <CircledNumber number={6} sectionType={sectionType} />
        <p className={`conduct-item-paragraph`}>
          Invites members and leaders to practice active listening to better
          understand new perspectives.
        </p>
      </div>

      <div className={`flex h-fit flex-row gap-4 lg:items-center lg:gap-8`}>
        <CircledNumber number={7} sectionType={sectionType} />
        <p className={`conduct-item-paragraph`}>
          Strives to build open source tools for public use. Private gain is not
          the priority.
        </p>
      </div>

      <div className={`flex h-fit flex-row gap-4 lg:items-center lg:gap-8`}>
        <CircledNumber number={8} sectionType={sectionType} />
        <p className={`conduct-item-paragraph`}>
          Sees the strength in diverse teams and seeks input from those
          who&apos;s voices have been excluded.
        </p>
      </div>

      <div className={`flex h-fit flex-row gap-4 lg:items-center lg:gap-8`}>
        <CircledNumber number={9} sectionType={sectionType} />
        <p className={`conduct-item-paragraph`}>
          Works to bring in people who are not recognized as &quot;main
          stream&quot; for any reason including race, gender, economic status,
          etc. They shall be included throughout the planning, designing, and
          implementation phases of civic tech.
        </p>
      </div>

      <div className={`flex h-fit flex-row gap-4 lg:items-center lg:gap-8`}>
        <CircledNumber number={10} sectionType={sectionType} />
        <p className={`conduct-item-paragraph`}>
          Seeks out people with subject matter expertise in the decision making
          processes.
        </p>
      </div>

      <div className={`flex h-fit flex-row gap-4 lg:items-center lg:gap-8`}>
        <CircledNumber number={11} sectionType={sectionType} />
        <p className={`conduct-item-paragraph`}>
          Ensure that the relationships and conversations between community
          members, the local government staff and community partners remain
          respectful, participatory, and productive.
        </p>
      </div>

      <p className={`conduct-sub-heading-main pt-6`}>
        <b>
          Open Fresno reserves the right to ask anyone in violation of these
          policies not to participate in Open Fresno network activities, events,
          and digital forums.
        </b>
      </p>
    </section>
  );
}
