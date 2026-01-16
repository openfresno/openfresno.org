import Image from "next/image";

/**
 * BasePathImage is a wrapper around Next.js's `Image` component that ensures
 * image paths resolve correctly when the app is deployed under a subpath—
 * such as when hosted on GitHub Pages or a forked repo.
 *
 * It prepends `NEXT_PUBLIC_BASE_PATH` to relative image paths, allowing
 * images in the `public/` directory to load correctly regardless of the base URL.
 *
 * This is especially useful in static exports (`next export`) or deployments
 * where the root path is not `/`, e.g. `/my-repo/`.
 *
 * @component
 * @param {Object} props - Props passed to the Next.js Image component.
 * @param {string} props.src - The image source path. If it's a relative path,
 * it will be prefixed with `NEXT_PUBLIC_BASE_PATH`.
 * @param {string} [props.className] The class of the container
 * @param {string} [props.imgClassName] The class of the image
 * @returns {JSX.Element} A Next.js Image component with a resolved `src`.
 *
 * @example
 // With NEXT_PUBLIC_BASE_PATH="/my-repo"
 <BasePathImage src="/logo.png" alt="Logo" />
 // Resolves to: "/my-repo/logo.png"
 */
export default function BasePathImage({
  src = "/img/tower-bridge.jpg",
  className = "",
  imgClassName = "",
  ...props
}) {
  // The fallback state for basic invalid values
  if (src === null || src === undefined || src === "")
    src = "/img/tower-bridge.jpg";
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const finalSrc =
    typeof src === "string" && !src.startsWith("http")
      ? `${basePath}${src}`
      : src;

  let split = finalSrc.split(/[\/.]/);
  let fileName = split[split.length - 2];
  // Temporarily use the <img> tag, eventually explicitly pass the width and height via prop.
  return (
    <div className={className}>
      <img
        alt={fileName}
        className={`object-cover ${imgClassName}${props.width === undefined && " w-full"}`}
        src={finalSrc}
        {...props}
      />
    </div>
  );
}
