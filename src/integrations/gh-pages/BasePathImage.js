import Image from "next/image";

export default function BasePathImage({ src, ...props }) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const finalSrc =
    typeof src === "string" && !src.startsWith("http")
      ? `${basePath}${src}`
      : src;

  // eslint-disable-next-line jsx-a11y/alt-text
  return <Image src={finalSrc} {...props} />;
}
