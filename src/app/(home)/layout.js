import AppLayout from "../../components/layout/AppLayout";

export default function Layout({ children }) {
  return <AppLayout fadeNavbar={true}>{children}</AppLayout>;
}
