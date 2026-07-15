import type { Metadata } from "next";
import { Archivo_Narrow, Public_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import CursorFollower from "./cursor-follower";

const archivoNarrow = Archivo_Narrow({
  subsets: ["latin"],
  variable: "--font-archivo",
  display: "swap",
});

const publicSans = Public_Sans({
  subsets: ["latin"],
  variable: "--font-public",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vexoro — High-Contrast Digital Systams",
  description: "Vexoro builds high-impact websites, AI menus, and AI agents with a bold editorial design system.",
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90' font-family='Georgia,serif' font-weight='700' fill='%23ff5448'>V</text></svg>",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${archivoNarrow.variable} ${publicSans.variable} ${jetbrainsMono.variable} antialiased`}
    >
      <body>
        <CursorFollower />
        {children}
      </body>
    </html>
  );
}
