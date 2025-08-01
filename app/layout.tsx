import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import { Link } from "@heroui/link";
import clsx from "clsx";

import { Providers } from "./providers";

import { siteConfig } from "@/config/site";
import { fontSans, fontBebas, fontNunito } from "@/config/fonts";
import { Navbar } from "@/components/navbar";
import SmoothScroll from "@/components/smoothScroll";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          "min-h-screen bg-background font-nunito antialiased",
          fontSans.variable,
          fontBebas.variable,
          fontNunito.variable
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div className="relative flex flex-col h-screen">
            <Navbar />
            <SmoothScroll>
              <main className="pt-8 px-8 flex-grow">{children}</main>
              <footer className="w-full flex items-center justify-center py-3">
                <Link
                  isExternal
                  className="flex items-center gap-1 text-current"
                  href="https://www.linkedin.com/in/yuehanjohn"
                  title="Yuehan John's LinkedIn"
                >
                  <span className="text-default-600">Made by</span>
                  <p className="text-primary">Yuehan John</p>
                </Link>
              </footer>
            </SmoothScroll>
          </div>
        </Providers>
      </body>
    </html>
  );
}
