import AppLayout from "@/components/layout/AppLayout";
import Home from "./home/home";

export default function DefaultPage() {
  return (
    <AppLayout fadeNavbar={true}>
      <Home />
    </AppLayout>
  );
}
