import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Blackstart Labs | Great systems begin in silence",
  description: "A modern, minimal engineering-first studio. We build full-stack web applications, backend systems, and AI-integrated solutions with precision and purpose.",
  metadataBase: new URL("https://blackstartlabs.com"),
  openGraph: {
    title: "Blackstart Labs",
    description: "Great systems begin in silence and awaken with purpose.",
    type: "website",
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
      className={`${inter.variable} ${jetbrainsMono.variable} h-full antialiased dark`}
      style={{ colorScheme: "dark" }}
    >
      <body className="min-h-full bg-[#050505] text-[#A1A1AA] flex flex-col font-sans selection:bg-[#00E5FF]/20 selection:text-[#00E5FF]">
        {children}
      </body>
    </html>
  );
}

