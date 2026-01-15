import HeaderUnderline from "@/components/ui/HeaderUnderline";
import { SectionType } from "@/utility/constants/theme";
import Link from "next/link";

export default function conductSectionBullets({ sectionType }) {
  return (
    <section className={`py-12 lg:py-24 app-color--${sectionType}`}>
      <div className={`page-container conduct-email-header-container`}>
        <HeaderUnderline
          title="Anti-harassment Reporting"
          description="Conflict Reporting Form"
          sectionType={SectionType.dark}
        >
          If you are being harassed, notice that someone else is being harassed,
          or have any other concerns, please fill out{" "}
          <Link
            className="app-text--primary underline"
            href="https://forms.gle/JF3Q1AQA6pGxNSNS8"
          >
            this form
          </Link>
          .
        </HeaderUnderline>
      </div>
    </section>
  );
}
