import AppNavbar from "@/components/layout/AppNavbar";
import AppFooter from "@/components/layout/AppFooter";

/**
 <AppNavbar fade={true} />
 <MarginTop />
 {children}
 <AppFooter />
 */
export default function AppLayout({ children, fadeNavbar = false }) {
  return (
    <div className="">
      <AppNavbar fade={fadeNavbar} />
      <div className="toolbar-after-content">{children}</div>
      <AppFooter />
    </div>
  );
}
