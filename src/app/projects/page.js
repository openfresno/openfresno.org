import { githubOwner } from "../../utils/constants/app-data";
import Projects from "./projects";
import AppLayout from "../../components/layout/AppLayout";

export default function Page() {
  return (
    <AppLayout>
      <Projects githubOwner={githubOwner}></Projects>
    </AppLayout>
  );
}
