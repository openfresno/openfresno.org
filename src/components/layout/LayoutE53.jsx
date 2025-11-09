import NavbarE7e from "./NavbarE7e";
import FooterE4d from "./FooterE4d";
import BannerF60 from "./BannerF60";

/**
 * The default layout for the application. It includes a navbar, banner and footer.
 * - Set "fade navbar" to enable a transparent navbar. You must set the background color of a root tag like <body> to control the color behind the navbar. The color should match the background of the first main content.
 * - The child of AppLayout is usually a <main> tag.
 * Example:
 <AppLayout fadeNavbar={true} />
 <main></main>
 <AppLayout />
 */
export default function LayoutE53({
                                    children,
                                    banner = { active: false },
                                    fadeNavbar = false
                                  }) {
  return (
    <>
      <NavbarE7e fade={fadeNavbar} />
      {banner.active && <BannerF60>{banner.message}</BannerF60>}
      <div
        className={
          banner.active
            ? "toolbar-after-content-with-banner"
            : "toolbar-after-content"
        }
      >
        {children}
      </div>
      <FooterE4d />
    </>
  );
}
