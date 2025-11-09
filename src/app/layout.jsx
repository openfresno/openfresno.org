import { Inter } from "next/font/google";
import "./global.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap"
});

export const metadata = {
  title: "Open Fresno",
  description: "Open Fresno civic technology.",
  icons: {
    icon: [
      { url: "/assets/logo/favicon.ico", sizes: "any" }, // classic favicon
      { url: "/assets/logo/logo192.png", type: "image/png", sizes: "192x192" },
      { url: "/assets/logo/logo512.png", type: "image/png", sizes: "512x512" },
      {
        url: "/assets/logo/logo-blue.svg",
        type: "image/svg+xml",
        sizes: "any"
      }
    ],
    apple: [
      { url: "/assets/logo/logo192.png", sizes: "192x192", type: "image/png" }
    ],
    shortcut: ["/assets/logo/favicon.ico"]
  }
};

/**
 * Root layout for the application.
 */
export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <body className={inter.className}>{children}</body>
    </html>
  );
}
