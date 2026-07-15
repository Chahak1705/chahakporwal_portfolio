import "./globals.css";
import Script from "next/script";

export const metadata = {
  title: "Chahak Porwal — Backend Developer & AI/ML Engineer",
  description:
    "Portfolio of Chahak Porwal — backend developer and AI/ML engineer. B.Tech CSE (AI & DL), Mody University. Building APIs at DecodeLabs.",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}

        <Script
          src="/oneko.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}