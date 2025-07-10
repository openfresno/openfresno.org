import Link from "next/link";

export default function conductSectionBullets({ sectionType }) {
  return (
    <section className={`conduct-${sectionType}-theme`}>
      <div className={`conduct-email-header-container`}>
        <div
          className={`conduct-section-heading-container conduct-heading-underline underline-alt`}
        >
          <h1 className={`general-heading-section general-heading-section-alt`}>
            anti-harassment reporting
          </h1>
          <h2 className={`conduct-sub-h1-heading`}>Conflict Reporting Form</h2>
        </div>
      </div>

      <div className={`conduct-email-template-container`}>
        <p className={`conduct-item-paragraph`}>
          If you are being harassed, notice that someone else is being harassed,
          or have any other concerns, please fill out{" "}
          <Link href="https://forms.gle/JF3Q1AQA6pGxNSNS8">this form</Link>.
        </p>
      </div>
    </section>
  );
}
