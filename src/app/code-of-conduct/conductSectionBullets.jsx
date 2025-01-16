export default function conductSectionBullets({sectionType}) {
  return (
    <section className={`conduct-list-container conduct-${sectionType}-theme`}>
      <p className={`conduct-sub-heading`}>
        Open Fresno fosters a community that:
      </p>

      <div className={`conduct-numbered-item`}>
        <img src={`/img/1.png`} alt={`Point 1`} className={`conduct-item-image`}/>
        <p className={`conduct-item-paragraph`}>
          Is a safe and respectful environment for all participants.
        </p>
      </div>

      <div className={`conduct-numbered-item`}>
        <img src={`/img/2.png`} alt={`Point 2`} className={`conduct-item-image`}/>
        <p className={`conduct-item-paragraph`}>
          Allows for the free expression of all identities.
        </p>
      </div>

      <div className={`conduct-numbered-item`}>
        <img src={`/img/3.png`} alt={`Point 3`} className={`conduct-item-image`}/>
        <p className={`conduct-item-paragraph`}>
          Welcomes everyone&apos;s ideas, skills, and contributions.
        </p>
      </div>

      <div className={`conduct-numbered-item`}>
        <img src={`/img/4.png`} alt={`Point 4`} className={`conduct-item-image`}/>
        <p className={`conduct-item-paragraph`}>
          Actively invites curiosity instead of assumptions.
        </p>
      </div>

      <div className={`conduct-numbered-item`}>
        <img src={`/img/5.png`} alt={`Point 5`} className={`conduct-item-image`}/>
        <p className={`conduct-item-paragraph`}>
          Encourages people to find and utilize their strengths and skills productively. We can foster this environment
          through &quot;yes/and&quot; statements.
        </p>
      </div>

      <div className={`conduct-numbered-item`}>
        <img src={`/img/6.png`} alt={`Point 6`} className={`conduct-item-image`}/>
        <p className={`conduct-item-paragraph`}>
          Invites members and leaders to practice active listening to better understand new perspectives.
        </p>
      </div>

      <div className={`conduct-numbered-item`}>
        <img src={`/img/7.png`} alt={`Point 7`} className={`conduct-item-image`}/>
        <p className={`conduct-item-paragraph`}>
          Strives to build open source tools for public use. Private gain is not the priority.
        </p>
      </div>

      <div className={`conduct-numbered-item`}>
        <img src={`/img/8.png`} alt={`Point 8`} className={`conduct-item-image`}/>
        <p className={`conduct-item-paragraph`}>
          Sees the strength in diverse teams and seeks input from those who&apos;s voices have been excluded.
        </p>
      </div>

      <div className={`conduct-numbered-item`}>
        <img src={`/img/9.png`} alt={`Point 9`} className={`conduct-item-image`}/>
        <p className={`conduct-item-paragraph`}>
          Works to bring in people who are not recognized as &quot;main stream&quot; for any reason including race, gender,
          economic status, etc. They shall be included throughout the planning, designing, and implementation phases of
          civic tech.
        </p>
      </div>

      <div className={`conduct-numbered-item`}>
        <img src={`/img/10.png`} alt={`Point 10`} className={`conduct-item-image`}/>
        <p className={`conduct-item-paragraph`}>
          Seeks out people with subject matter expertise in the decision making processes.
        </p>
      </div>

      <div className={`conduct-numbered-item`}>
        <img src={`/img/11.png`} alt={`Point 11`} className={`conduct-item-image`}/>
        <p className={`conduct-item-paragraph`}>
          Ensure that the relationships and conversations between community members, the local government staff and
          community partners remain respectful, participatory, and productive.
        </p>
      </div>

      <p className={`conduct-sub-heading`}>
        Open Fresno reserves the right to ask anyone in violation of these policies not to participate in
        Open Fresno network activities, events, and digital forums.
      </p>
    </section>
  )
}