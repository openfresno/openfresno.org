import Slider from "@/components/Slider";
import SimpleDialog from "@/components/ui/SimpleDialog";
import BasePathImage from "@/integrations/gh-pages/BasePathImage";
import { SectionType } from "@/utility/constants/theme";
import { useEffect, useState } from "react";

export default function SingleProjectsScreenshots({
  data,
  sectionType = SectionType.light,
}) {
  const [showDialog, setShowDialog] = useState(false);
  const [startingSlide, setStartingSlide] = useState(0);
  const [windowState, setWindowState] = useState(window);
  useEffect(() => {
    setWindowState(window);
  });
  let shownImages = data.meta.screenshots.map((screenshot, i) => (
    <BasePathImage
      key={data.full_name.concat(screenshot)}
      onClick={() => {
        if (windowState && windowState.innerWidth > 992 && !showDialog) {
          setShowDialog(true);
          setStartingSlide(i);
        }
      }}
      className={`keen-slider__slide sharpen @container aspect-7/4 ${showDialog ? "" : "lg:cursor-pointer"}`}
      imgClassName={`@max-lg:border @max-lg:rounded-xl`}
      src={`https://raw.githubusercontent.com/${data.full_name}/${data.default_branch}/screenshots/${screenshot}`}
    />
  ));
  for (let i = shownImages.length; i < 6; i++) {
    shownImages.push(
      <div
        className={`keen-slider__slide @container aspect-7/4`}
        key={data.full_name + i}
      >
        <div
          className={`size-full bg-neutral-400 @max-lg:rounded-xl @max-lg:border`}
        />
      </div>,
    );
  }
  return (
    <section className={`py-12 app-color--${sectionType}`}>
      <div className={`page-container flex flex-col`}>
        <h2 className={`sub-heading-main`}>Screenshots</h2>
        <div
          className={`my-2 h-1 w-10 app-color--${SectionType.invert(sectionType)}`}
        />
        <p className={`paragraph-large project-paragraph lg:mb-16`}>
          Explore our project through screenshots, providing visual insights
          into its design and functionality.
        </p>
        <div className={`grid grid-cols-3 gap-4 max-lg:hidden`}>
          {shownImages}
        </div>
        <Slider className={"project-screenshots-slider-container lg:hidden"}>
          {shownImages}
        </Slider>
        <SimpleDialog
          title="Screenshots"
          openState={showDialog}
          handleClose={() => {
            setShowDialog(false);
          }}
          fullWidth={true}
          maxWidth={"lg"}
        >
          <Slider className={"aspect-7/4 w-full"} startingSlide={startingSlide}>
            {shownImages}
          </Slider>
        </SimpleDialog>
      </div>
    </section>
  );
}
