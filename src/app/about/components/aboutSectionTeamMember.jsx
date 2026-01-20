import Image from "next/image";

export default function AboutSectionTeamMember({
  src,
  name = (Math.random() > 0.5 ? "John" : "Jane") + " Doe",
  title = "",
}) {
  return (
    <div
      className={`mb-6 flex w-full flex-col gap-2 border border-[#eaecf0] max-lg:mx-auto`}
    >
      <Image
        className="aspect-1/1 object-cover"
        src={src}
        alt={`Team member: ${name}`}
        width={300}
        height={300}
      />
      <div className={`member-info-container`}>
        <div className={`member-name-container`}>
          <h2 className={`member-name`}>{name}</h2>
          <h3 className={`member-title`}>{title}</h3>
        </div>
      </div>
    </div>
  );
}
