import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import WhatsAppCTA from "./components/WhatsAppCTA";

export const metadata: Metadata = {
  title: "Bentota Holiday Tours — Premium Sri Lanka Tour Guide | Culture, Wildlife & Adventure",
  description:
    "Discover the soul of Sri Lanka with Bentota Holiday Tours. Personalized tours covering ancient temples, wildlife safaris, adventure treks, and hidden gems with an expert local guide.",
  keywords: "Sri Lanka tours, tour guide, Bentota, safari, Sigiriya, Ella, wildlife, adventure, cultural tours",
  openGraph: {
    title: "Bentota Holiday Tours — Premium Sri Lanka Tours",
    description: "Personalized Sri Lankan tour experiences — culture, wildlife, and adventure with an expert local guide.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased scroll-smooth">
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <WhatsAppCTA />
      </body>
    </html>
  );
}
