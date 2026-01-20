import { SectionType } from "@/utility/constants/theme";
import Image from "next/image";

export default function ImageSection({
  heading = "",
  subHeading = <></>,
  alt = "Open Data Day",
  src,
  sectionType = SectionType.light,
  children = <></>,
}) {
  return (
    <section className={`app-color--${sectionType} py-12 lg:py-24`}>
      <div className="home-split-wide">
        <div className="grid items-center">
          <div>
            <h1
              className={`heading-main app-color--${SectionType.invert(sectionType)}`}
            >
              {heading}
            </h1>
            <h2 className="sub-heading-main">{subHeading}</h2>
            <p className="paragraph-large pt-10">{children}</p>
          </div>
        </div>
        <div className="grid items-center justify-end">
          <Image
            alt={alt}
            width={728}
            height={577}
            className="home-split-image translate-x-6 lg:translate-x-10 object-cover"
            src={src}
          />
        </div>
      </div>
    </section>
  );
}
