import { Slider } from "@/components/ui";

export default function SingleProjectsScreenshots({ data }) {
  let shownImages = data.meta.screenshots.map((screenshot) => (
    <div
      key={data.full_name.concat(screenshot)}
      className={`keen-slider__slide project-screenshot`}
      style={{
        backgroundImage: `url(https://raw.githubusercontent.com/${data.full_name}/main/${screenshot})`,
      }}
    ></div>
  ));
  for (let i = shownImages.length; i < 6; i++) {
    shownImages.push(
      <div
        className={`keen-slider__slide project-blank-screenshot`}
        key={data.full_name + i}
      ></div>,
    );
  }

  return (
    <section id="screenshots" className={`project-screenshots-container`}>
      <div
        className={`project-main-heading-container heading-underline underline-alt`}
      >
        <h2 className={`project-heading`}>Screenshots</h2>
      </div>
      <p className={`section-paragraph project-paragraph`}>
        Explore our project through screenshots, providing visual insights into
        its design and functionality.
      </p>
      <div className={`project-screenshots-images-container`}>
        {shownImages}
      </div>
      <Slider containerClass={"project-screenshots-slider-container"}>
        {shownImages}
      </Slider>
    </section>
  );
}
