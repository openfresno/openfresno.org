import GeneralSection from "@/components/ui/GeneralSection";
import PageContainer from "@/components/ui/PageContainer";
import { SectionType } from "@/utility/constants/theme";
import Button from "../../components/ui/button/Button";

/**
 * The landing section for donations.
 * @returns {JSX.Element}
 */
export default function DonateSectionLanding({
  sectionType = SectionType.light,
}) {
  return (
    <>
      <GeneralSection
        heading="Donate"
        subHeading={
          <>
            Support
            <br /> Our Mission
          </>
        }
        sectionType={sectionType}
      >
        <span className={`paragraph-bold`}>
          Choose the option that suits you best.
        </span>{" "}
        Make a one-time donation to support our mission instantly
        {/*, or become a sustaining supporter by selecting the monthly donation option*/}
        . Your tax-deductible donation fuels innovation, empowers civic
        engagement, and enhances public services while shaping a brighter future
        in Central California. Thank you for your generous support!
      </GeneralSection>
      <PageContainer sectionType={sectionType} divClassName={"items-center"}>
        <Button className="btn btn--grow" href="https://givebutter.com/openfresno">
          Donate Now
        </Button>
      </PageContainer>
    </>
  );
}
