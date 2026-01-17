import BasePathImage from "@/integrations/gh-pages/BasePathImage";

export default function CenteredInImage({
  src = "/img/about/rectangle.png",
  alt = "rectangle",
  float = "left",
  width = 400,
  height = 300,
  children = <></>,
}) {
  return (
    <div
      className={`relative w-fit ${float === "center" ? "mx-auto" : `float-${float}`}`}
    >
      <BasePathImage src={src} alt={alt} width={width} height={height} />
      {/*used to place the text over the image*/}
      <div className={`absolute bottom-0 h-full w-full`}>
        {/*used to vertically center the text over the image*/}
        <div className={`flex h-full w-full items-center justify-center`}>
          {/*used to horizontally center the text over the image*/}
          {children}
        </div>
      </div>
    </div>
  );
}
