import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "./footer.css";
import "./header.css";
import "./hero.css";

export const metadata: Metadata = {
  title: "HF Daily",
  description:
    "HF Daily helps people with heart failure consistently track changes in symptoms and know when it may be appropriate to speak with their care team.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
