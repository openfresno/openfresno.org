import { Slider } from "@/components/ui";
import BasePathImage from "@/integrations/gh-pages/BasePathImage";

export default function SingleProjectsScreenshots({
                                                    data,
                                                    sectionType,
                                                  }) {
  let shownImages = data.meta.screenshots.map((screenshot) => (
    <div
      key={data.full_name.concat(screenshot)}
      className={`keen-slider__slide aspect-2/1 lg:rounded-lg project-screenshot`}
      style={{
        backgroundImage: `url()`,
      }}
    >
      <BasePathImage
        className={`object-cover aspect-2/1 `}
        src={`https://raw.githubusercontent.com/${data.full_name}/main/${screenshot}`}
      />
    </div>
  ));
  for (let i = shownImages.length; i < 6; i++) {
    shownImages.push(
      <div
        className={`keen-slider__slide aspect-2/1 lg:rounded-lg bg-neutral-400 project-blank-screenshot`}
        key={data.full_name + i}
      />
    );
  }
  return (
    <section className={`py-12 app-color--${sectionType}`}>
      <div className={`page-container flex flex-col`}>
        <h2 className={`sub-heading-main`}>Screenshots</h2>
        <div className="my-2 h-1 w-10 bg-neutral-900"/>
        <p className={`paragraph-large project-paragraph lg:mb-16`}>
          Explore our project through screenshots, providing visual insights into
          its design and functionality.
        </p>
        <div className={`grid grid-cols-3 gap-4 max-lg:hidden`}>
          {shownImages}
        </div>
        <Slider className={"project-screenshots-slider-container lg:hidden"}>
          {shownImages}
        </Slider>
      </div>
    </section>
  );
}
