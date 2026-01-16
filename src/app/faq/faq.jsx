import MDXComponents from "./MDXComponents";
import FaqSectionNav from "./faqSectionNav";
import FaqSectionStart from "./faqSectionStart";
import { SectionType } from "@/utility/constants/theme";
import fs from "fs";
import { MDXRemote } from "next-mdx-remote/rsc";
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
 * @returns {JSX.Element}
 */
export default function Faq() {
  const { fileContent, tableOfContents } = fetchMdx();

  return (
    <div className="faq-main">
      <FaqSectionStart sectionType={SectionType.light} />
      <FaqSectionNav sectionType={SectionType.light} topics={tableOfContents} />
      <section className="faq-container-margins mx-auto flex max-w-[calc(var(--screen-xxl)+80px)] flex-col gap-0 px-6 py-6 lg:py-12">
        <MDXRemote source={fileContent} components={MDXComponents} />
      </section>
    </div>
  );
}
