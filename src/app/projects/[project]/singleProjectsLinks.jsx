import Link from "next/link";

const SingleProjectsLinks = () => {
  return (
    <section className={`app-color--primary px-6 py-6`}>
      <div className={`mx-auto max-w-[calc(var(--screen-xxl)_+_80px)] flex flex-col max-lg:gap-4 lg:flex-row lg:justify-between`}>
        <Link className={`underline`} href="#project-brief">
          Project Brief
        </Link>
        <Link className={`underline`} href="#screenshots">
          Screenshots
        </Link>
        <Link className={`underline`} href="#roadmap">
          Roadmap
        </Link>
        <Link className={`underline`} href="#how-to-contribute">
          How to Contribute
        </Link>
        <Link className={`underline`} href="#resources">
          Resources
        </Link>
        <Link className={`underline`} href="#how-to-volunteer">
          How to Volunteer
        </Link>
      </div>
    </section>
  );
};

export default SingleProjectsLinks;
