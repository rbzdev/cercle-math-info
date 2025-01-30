import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";

// Theme
import { ThemeProvider } from "./myComponents/ThemeProvider";

// Components
import Footer from "./myComponents/footer";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Cercle Math Info",
  description: "Mathematical information for the cercle community",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${poppins.className} bg-gray-100 dark:bg-slate-900 dark:text-gray-100 thin-scrollbar antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
