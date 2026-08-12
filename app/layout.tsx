import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://sehyunryu.github.io"),
  title: "Sehyun Ryu — Wireless Communications & Machine Intelligence",
  description: "Sehyun Ryu is a systems engineer researching AI-native wireless systems, adaptive communication, machine intelligence, and physical AI.",
  keywords: ["Sehyun Ryu", "wireless communications", "machine intelligence", "AI-native RAN", "physical AI", "cloud robotics"],
  icons: {
    icon: [{ url: "/skyblue-sunflower.png", type: "image/png" }],
    shortcut: "/skyblue-sunflower.png",
    apple: "/skyblue-sunflower.png",
  },
  openGraph: {
    title: "Sehyun Ryu — Wireless Communications & Machine Intelligence",
    description: "Communication as infrastructure for scalable machine intelligence.",
    url: "https://sehyunryu.github.io",
    siteName: "Sehyun Ryu",
    type: "website",
    images: [{ url: "/og.webp", width: 1200, height: 630, alt: "Sehyun Ryu — Wireless Communications, Machine Intelligence, and Physical AI" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sehyun Ryu — Wireless Communications & Machine Intelligence",
    description: "Communication as infrastructure for scalable machine intelligence.",
    images: ["/og.webp"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}<script src="/navigation.js" defer></script></body></html>;
}
