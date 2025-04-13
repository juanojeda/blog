import { firaCode, firaSans, merriweather } from "@/components/fonts/fonts";
import { CssBaseline } from "@mui/material";
import SiteHeader from "@/components/SiteHeader";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Metadata } from "next";
import ThemeRegistry from "./ThemeRegistry";
const fontClasses = [firaSans.variable, firaCode.variable, merriweather.variable].join(
  " ",
);

export const metadata: Metadata = {
  title: "Juan Ojeda — Home",
  description:
    "Personal website of Juan Ojeda, a software engineer and problem solver based in Melbourne, Australia.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${fontClasses}`}>
        <GoogleAnalytics gaId={process.env.GOOGLE_TRACKING_ID || "test"} />
        <ThemeRegistry options={{ key: "mui" }}>
          <CssBaseline />
          <SiteHeader />
          {children}
        </ThemeRegistry>
      </body>
    </html>
  );
}
