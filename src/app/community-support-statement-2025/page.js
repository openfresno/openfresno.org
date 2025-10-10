import Link from "next/link";
import HeaderUnderline from "../../components/ui/HeaderUnderline";
import SidebarSection from "../../components/ui/SidebarSection";
import LayoutE53 from "@/components/layout/LayoutE53";
import { SectionType } from "@/utility/constants/theme"

/**
 * Page for information about how to pitch a project.
 * @returns {JSX.Element}
 */
export default function CommunitySupportStatementPage() {
  return (
    <LayoutE53>
      <SidebarSection sectionType={SectionType.light}>
        <div className={`sidebar-info-container`}>
          <HeaderUnderline
            sectionType={SectionType.light}
            title="Announcement"
            description="Community Support Statement"
          />
        </div>
        <div className="prose">
          <p>
            At <Link href="https://openfresno.org/">Open Fresno</Link> (OpenSac)
            and <Link href="">OpenFresno</Link> (OpenFresno), we are dedicated
            to{" "}
            <b>
              fostering a community that is safe, respectful, and inclusive for
              all.
            </b>{" "}
            We take our roles in the Greater Fresno and Greater Fresno areas
            seriously, and supporting diversity and inclusion is not about
            taking sides—it&apos;s about doing what&apos;s right for our
            community and being good people.
          </p>
          <p>
            <Link href="/code-of-conduct">Our Code of Conduct</Link> embodies
            these values and ensures that we:
          </p>
          <ul>
            <li>
              Create a safe and respectful environment where every individual
              can thrive.
            </li>
            <li>
              Encourage the free expression of all identities without fear of
              discrimination.
            </li>
            <li>
              Embrace everyone&apos;s ideas, skills, and contributions,
              recognizing that diverse perspectives make us stronger.
            </li>
            <li>
              Foster curiosity over assumptions and cultivate open, honest
              dialogue.
            </li>
            <li>
              Support members in discovering and utilizing their strengths in
              positive, productive ways.
            </li>
          </ul>
          <p>
            OpenSac/OpenFresno isn&apos;t just about technology—it&apos;s about
            building a community where <b>everyone feels heard and valued</b>.
            We believe in the strength of diverse teams and in creating tools
            that serve the public good. This commitment goes beyond our work—it
            extends to the relationships we build within our community and with
            others, ensuring that every voice is heard, especially those that
            have historically been excluded.
          </p>
          <p>
            That&apos;s why OpenSac and OpenFresno is a part of the{" "}
            <Link href="https://www.civictechnologists.org/">
              Alliance of Civic Technologists
            </Link>
            . In this network, we collaborate with like-minded organizations to
            create a more diverse, equitable, inclusive, and accessible future.
            As outlined in their{" "}
            <Link href="https://mailchi.mp/civictechnologists/act-tpg-joint-statement">
              joint statement
            </Link>{" "}
            with{" "}
            <Link href="https://www.publicgood.tech/">
              Technologists for the Public Good
            </Link>
            , we are united in our pursuit to make a positive difference.
          </p>
          <p>
            Today, we{" "}
            <b>
              reaffirm our commitment to inviting and supporting individuals who
              are working to make the Greater Fresno and Greater Fresno
              areas—and beyond—a better, more inclusive place.
            </b>{" "}
            We stand with all members of our community—whether you&apos;re
            trans, queer, disabled, an immigrant, a remote worker, or anyone
            who&apos;s often marginalized. We firmly believe that discrimination
            of any kind has no place here. Whether in public spaces, the
            workplace, or online, we will not tolerate it.
          </p>
          <p>
            <b>
              This is not just the right thing to do—it is a vital step toward
              improving our community for everyone.
            </b>
          </p>
        </div>
      </SidebarSection>
    </LayoutE53>
  );
}
