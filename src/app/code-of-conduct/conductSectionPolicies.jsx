import Link from "next/link";
import { SectionType } from "@/utility/constants/theme";
import { HeaderUnderline } from "@/components/ui";

export default function conductSectionPolicies({
                                                 sectionType = SectionType.dark
                                               }) {
  return (
    <section className={`py-12 lg:py-24 app-color--${sectionType}`}>
      <div
        className={`page-container conduct-policy-landing-container conduct-dark-theme flex flex-col gap-4 lg:gap-8`}
      >
        <HeaderUnderline
          title="Anti-harassment Policy"
          description="Promoting a Safe and Respectful Community"
          sectionType={sectionType}
          className={"mb-8"}
        >
          This anti-harassment policy is based on{" "}
          <Link className={`conduct-paragraph-anchor underline`} href="/">
            the example policy
          </Link>{" "}
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
        </HeaderUnderline>

        <h3 className={`conduct-sub-heading-main font-semibold`}>
          All Open Fresno network activities, events, and digital forums and
          their staff, presenters, and participants are held to an
          anti-harassment policy, included below.{" "}
        </h3>

        <p className={`conduct-item-paragraph`}>
          In addition to governing our own events by this policy, Open Fresno
          will only lend its brand and fund groups that offer an anti-harassment
          policy to their attendees. For information on how to offer an
          anti-harassment policy to your group,{" "}
          <Link className={`primary-link--underline`}
                href="https://docs.google.com/document/d/1Zg2FDt7awgfCmdcbzMwKHMb1A7KDOhs_z7ibCb3TLLQ/edit?usp=sharing">
            see this guide
          </Link>
          .
        </p>

        <p className={`conduct-item-paragraph`}>
          Open Fresno is dedicated to providing a harassment-free experience for
          everyone regardless of gender, gender identity and expression, sexual
          orientation, disability, physical appearance, body size, race, age, or
          religion. We do not tolerate harassment of staff, presenters, and
          participants in any form. Sexual language and imagery is not
          appropriate for any Open Fresno event or network activity, including
          talks. Anyone in violation of these policies may expelled from Open
          Fresno network activities, events, and digital forums, at the
          discretion of the event organizer or forum administrator.
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
          or expulsion from Open Fresno network activities, events, and digital
          forums.
        </p>

        <p className={`conduct-item-paragraph`}>
          If you are being harassed, notice that someone else is being harassed,
          or have any other concerns, please fill out{" "}
          <Link className="primary-link--underline" href="https://forms.gle/JF3Q1AQA6pGxNSNS8">this form</Link>.
        </p>

        <p className={`conduct-item-paragraph`}>
          We are hopeful that by providing these guidelines we are establishing
          a community that jointly adheres to these values and can provide an
          environment that is welcoming to all.
        </p>

        <h3 className={`conduct-sub-heading-main`}>
          We value your attendance and hope that by communicating these
          expectations widely we can all enjoy a harassment-free environment.
        </h3>
      </div>
    </section>
  );
}
