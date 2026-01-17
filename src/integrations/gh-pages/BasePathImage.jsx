import Image from "next/image";

/**
 * BasePathImage is a wrapper around Next.js's `Image` component that ensures
 * image paths resolve correctly when the app is deployed under a subpath—
 * such as when hosted on GitHub Pages or a forked repo.
 *
 * It prepends `NEXT_PUBLIC_BASE_PATH` to relative image paths, allowing
 * images in the `public/` directory to load correctly regardless of the base URL.
 *
 * This is especially useful in static exports, where just overriding the next configuration fixes the problem.

 * Needs a wrapper when using fill mode (requires relative positioning) or when wrapperClassName is provided
 *
 * @param {string} src - The image source path. If it's a relative path,
 * it will be prefixed with `NEXT_PUBLIC_BASE_PATH`.
 * @param {string} alt - The alt text for the image (required).
 * @param {number} [width] - The width of the image. Required unless using fill.
 * @param {number} [height] - The height of the image. Required unless using fill.
 * @param {boolean} [fill] - If true, image will fill its container.
 * @param {string} [className] - The class applied to the Image element.
 * @param {string} [wrapperClassName] - The class of the wrapper div (only used when wrapper is needed).
 * @returns {React.JSX.Element} A Next.js Image component with a resolved `src`.
 *
 * @example
 // With NEXT_PUBLIC_BASE_PATH="/my-repo"
 <BasePathImage src="/logo.png" alt="Logo" width={200} height={100} />
 // Resolves to: "/my-repo/logo.png"
 */
export default function BasePathImage({
  src,
  alt,
  className = "",
  wrapperClassName,
  width,
  height,
  fill,
}) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const finalSrc =
    typeof src === "string" && !src.startsWith("http")
      ? `${basePath}${src}`
      : src;

  const useFill = fill || (width === undefined && height === undefined);

  const needsWrapper = useFill || wrapperClassName;

  const imageElement = (
    <Image
      alt={alt}
      className={`object-cover ${className}`}
      src={finalSrc}
      width={useFill ? undefined : width}
      height={useFill ? undefined : height}
      fill={useFill}
    />
  );

  if (needsWrapper) {
    return (
      <div className={`${wrapperClassName || ""}${useFill ? " relative" : ""}`}>
        {imageElement}
      </div>
    );
  }

  return imageElement;
}
