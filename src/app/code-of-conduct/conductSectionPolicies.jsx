import Link from 'next/link'

export default function conductSectionPolicies() {
  return (
    <section className={`conduct-dark-theme`}>
      <div className={`conduct-policy-landing-container conduct-dark-theme`}>
        <div
          className={`conduct-section-heading-container conduct-heading-underline underline-alt`}
        >
          <h1 className={`general-heading-section general-heading-section-alt`}>
            anti-harassment policy
          </h1>
          <h2 className={`conduct-sub-h1-heading`}>
            Promoting a Safe and Respectful Community
          </h2>
        </div>
        <p className={`conduct-item-paragraph`}>
          This anti-harassment policy is based on{' '}
          <Link className={`conduct-paragraph-anchor`} href="/">
            the example policy
          </Link>{' '}
          from the Geek Feminism wiki, created by the Ada Initiative and other
          volunteers.
          <br />
          <br />
          This policy is based on several other policies, including the Ohio
          LinuxFest anti-harassment policy, written by Esther Filderman and Beth
          Lynn Eicher, and the Con Anti-Harassment Project. Mary Gardiner,
          Valerie Aurora, Sarah Smith, and Donna Benjamin generalized the
          policies and added supporting material. Many members of LinuxChix,
          Geek Feminism and other groups contributed to this work.
        </p>
      </div>

      <div className={`conduct-policy-body-container`}>
        <h3 className={`conduct-sub-heading`}>
          Open Fresno fosters a community that:
        </h3>

        <p className={`conduct-item-paragraph`}>
          In addition to governing our own events by this policy, Open
          Fresno will only lend its brand and fund groups that offer an
          anti-harassment policy to their attendees. For information on how to
          offer an anti-harassment policy to your group,{' '}
          <Link className={`conduct-paragraph-anchor`} href="/">
            see this guide.
          </Link>
        </p>

        <p className={`conduct-item-paragraph`}>
          Open Fresno is dedicated to providing a harassment-free experience
          for everyone regardless of gender, gender identity and expression,
          sexual orientation, disability, physical appearance, body size, race,
          age, or religion. We do not tolerate harassment of staff, presenters,
          and participants in any form. Sexual language and imagery is not
          appropriate for any Open Fresno event or network activity,
          including talks. Anyone in violation of these policies may expelled
          from Open Fresno network activities, events, and digital forums,
          at the discretion of the event organizer or forum administrator.
        </p>

        <p className={`conduct-item-paragraph`}>
          Harassment includes but is not limited to: offensive verbal or written
          comments related to gender, gender identity and expression, sexual
          orientation, disability, physical appearance, body size, race,
          religion; sexual images in public spaces; deliberate intimidation;
          stalking; following; harassing photography or recording; sustained
          disruption of talks or other events; inappropriate physical contact;
          unwelcome sexual attention; unwarranted exclusion; and patronizing
          language or action.
        </p>

        <p className={`conduct-item-paragraph`}>
          If a participant engages in harassing behavior, the organizers may
          take any action they deem appropriate, including warning the offender
          or expulsion from Open Fresno network activities, events, and
          digital forums.
        </p>

        <p className={`conduct-item-paragraph`}>
          If you are being harassed, notice that someone else is being harassed,
          or have any other concerns, please fill out{' '}
          <Link href="https://forms.gle/JF3Q1AQA6pGxNSNS8">this form</Link>.
        </p>

        <p className={`conduct-item-paragraph`}>
          We are hopeful that by providing these guidelines we are establishing
          a community that jointly adheres to these values and can provide an
          environment that is welcoming to all.
        </p>

        <h3 className={`conduct-sub-heading`}>
          We value your attendance and hope that by communicating these
          expectations widely we can all enjoy a harassment-free environment.
        </h3>
      </div>
    </section>
  )
}
