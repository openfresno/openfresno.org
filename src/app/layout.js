import { Inter } from "next/font/google";
import "./global.css";
import "../../styles/main.scss";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Open Fresno",
  description: "Open Fresno civic technology.",
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
