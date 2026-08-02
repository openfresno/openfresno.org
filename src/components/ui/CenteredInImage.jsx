import Image from "next/image";

export default function CenteredInImage({
  src,
  alt = "rectangle",
  float = "left",
  width,
  height,
  children = <></>,
}) {
  return (
    <div
      className={`relative w-fit ${float === "center" ? "mx-auto" : `float-${float}`}`}
    >
      <Image
        src={src}
        alt={alt}
        {...(width && height ? { width, height } : {})}
        className="object-cover"
      />
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
