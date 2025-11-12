import { githubOwner } from "@/utility/constants/app-data";
import Projects from "./projects";
import LayoutE53 from "@/components/layout/LayoutE53";

export default function Page() {
  return (
    <LayoutE53>
      <Projects githubOwner={githubOwner}></Projects>
    </LayoutE53>
  );
}
