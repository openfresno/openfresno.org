import { githubOwner } from "@/constants";
import Projects from "./projects";
import AppLayout from "@/components/layout/AppLayout";

export default function Page() {
  return (
    <AppLayout>
      <Projects githubOwner={githubOwner}></Projects>
    </AppLayout>
  );
}
