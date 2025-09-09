/**
 * About team section.
 * @returns {JSX.Element}
 */
export default function AboutSectionTeam() {
  return (
    <section className={`about-team-section`} id="team">
      <div className={`team-paragraph-container`}>
        <div className={`about-heading-container heading-underline`}>
          <h1 className={`general-heading-main`}>OUR TEAM</h1>
          <h2 className={`about-sub-heading-main`}>
            Meet the Heartbeat of Open Fresno
          </h2>
        </div>
        <p className={`team-paragraph`}>
          Open Fresno is powered by a volunteer Core Team that orchestrates
          events, fosters strategic partnerships, and ensures seamless
          communication among cross-functional project teams. Our dedicated team
          members bring diverse skills and expertise to the table, all with a
          shared passion for civic tech and community empowerment.
        </p>
      </div>

      <div className={`team-members-container`}>
        <div className={`team-cards-grid`}>
          <div className={`team-grid-item`}>
            <img src="/img/about/dan_fey.jpg" alt="Team Member Name" />
            <div className={`member-info-container`}>
              <div className={`member-name-container`}>
                <h2 className={`member-name`}>Dan Fey</h2>
                <h3 className={`member-title`}>
                  Executive Director, Open Fresno
                </h3>
              </div>
            </div>
          </div>

          <div className={`team-grid-item`}>
            <img src="/img/about/mary_fey_norris.jpg" alt="Team Member Name" />
            <div className={`member-info-container`}>
              <div className={`member-name-container`}>
                <h2 className={`member-name`}>Mary Fey Norris</h2>
                <h3 className={`member-title`}>
                  Executive Director, Open Fresno
                </h3>
              </div>
            </div>
          </div>

          <div className={`team-grid-item`}>
            <img src="/img/about/walter_yu.png" alt="Team Member Name" />
            <div className={`member-info-container`}>
              <div className={`member-name-container`}>
                <h2 className={`member-name`}>Walter Yu</h2>
                <h3 className={`member-title`}>Senior Director, Platform</h3>
              </div>
            </div>
          </div>

          <div className={`team-grid-item`}>
            <img
              src="/img/about/brianda_hernandez.png"
              alt="Team Member Name"
            />
            <div className={`member-info-container`}>
              <div className={`member-name-container`}>
                <h2 className={`member-name`}>Brianda Hernandez</h2>
                <h3 className={`member-title`}>
                  Senior Director, Communications
                </h3>
              </div>
            </div>
          </div>

          <div className={`team-grid-item`}>
            <img src="/img/about/nate_bass.jpg" alt="Team Member Name" />
            <div className={`member-info-container`}>
              <div className={`member-name-container`}>
                <h2 className={`member-name`}>Nate Bass</h2>
                <h3 className={`member-title`}>Senior Director, Product</h3>
              </div>
            </div>
          </div>

          <div className={`team-grid-item`}>
            <img
              src="/img/about/alexandre_steinhauslin.jpg"
              alt="Team Member Name"
            />
            <div className={`member-info-container`}>
              <div className={`member-name-container`}>
                <h2 className={`member-name`}>Alexandre Steinhauslin</h2>
                <h3 className={`member-title`}>
                  Director, Frontend Engineering
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
