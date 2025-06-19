import Home from "./home";
import AppLayout from "@/components/layout/AppLayout";

export default function HomePage() {
  return (
    <AppLayout fadeNavbar={true}>
      <Home></Home>
    </AppLayout>
  );
}
