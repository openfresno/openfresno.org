import MDXComponents from "./MDXComponents";
import Layout from "@/components/layout/layout";
import GeneralSection from "@/components/ui/GeneralSection";
import { SectionType } from "@/utility/constants/theme";
import fs from "fs";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import path from "path";

function extractToc(content) {
  const headers = [];
  const headerRegex = /^###\s+(.+)$/gm;
  let match;
  while ((match = headerRegex.exec(content)) !== null) {
    const text = match[1];
    const slug = text.toLowerCase().replace(/\s/g, "_");
    headers.push({ text, slug });
  }
  return headers;
}

const rootDir = path.join(process.cwd(), "src", "app", "faq");

function fetchMdx() {
  const filePath = path.join(rootDir, "faqMDXTexts.mdx");
  const fileContent = fs.readFileSync(filePath, { encoding: "utf-8" });
  const tableOfContents = extractToc(fileContent);
  return { fileContent, tableOfContents };
}

/**
 * Frequently-asked questions page.
 */
export default function FaqPage() {
  const { fileContent, tableOfContents } = fetchMdx();
  return (
    <Layout>
      <div className="faq-main">
        <GeneralSection
          heading="FAQ"
          subHeading="Frequently Asked Questions"
          sectionType={SectionType.light}
        >
          Welcome to our FAQ page, designed to provide you with quick and informative answers to
          commonly asked questions about Open Fresno. Whether you&apos;re curious about
          volunteering, projects, collaborations, or more, we&apos;ve compiled a list of queries to
          guide you through our mission, initiatives, and how you can get involved. Browse through
          the questions to find the information you need and embark on a journey of civic
          engagement, innovation, and community empowerment.
        </GeneralSection>
        <section className="faq-nav app-color--primary py-6">
          <nav className="page-container flex flex-col max-lg:gap-4 lg:flex-row lg:justify-between">
            {tableOfContents.map((item) => (
              <Link key={item.slug} className="nav-link underline" href={`#${item.slug}`}>
                {item.text}
              </Link>
            ))}
          </nav>
        </section>
        <section className="mx-auto max-w-[calc(var(--screen-xxl)+80px)] px-6 pt-12 pb-16 lg:px-10">
          <MDXRemote source={fileContent} components={MDXComponents} />
        </section>
        <hr className="mx-auto h-px max-w-(--screen-xxl) border-0 bg-(--neutral-400)" />
      </div>
    </Layout>
  );
}
