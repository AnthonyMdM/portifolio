import type { Metadata } from "next";
import { Poppins, Roboto } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "@/src/app/global.css";
import Footer from "../components/views/Footer";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portifólio Anthony",
  description: "Meu Portifólio",
  icons: {
    icon: "/favicon.svg",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-Br" suppressHydrationWarning>
      <body
        className={`${poppins.variable} ${roboto.variable} flex flex-col h-screen overflow `}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
