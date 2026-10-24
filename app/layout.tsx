import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ocho (test build)",
  description: "Private test build of a possible new Ocho website. Not the real site.",
  // Keep this test site out of search engines.
  robots: { index: false, follow: false },
};

const nav = [
  { href: "/", label: "Home" },
  { href: "/order", label: "Order" },
  { href: "/booktable", label: "Book a table" },
];

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <div className="bg-foreground px-4 py-2 text-center text-xs text-background">
          Private test build. This is not the real Ocho website.
        </div>
        <header className="border-b border-line">
          <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
            <Link href="/" className="font-serif text-2xl tracking-wide">
              Ocho
            </Link>
            <nav className="flex gap-5 text-sm">
              {nav.map((item) => (
                <Link key={item.href} href={item.href} className="hover:text-accent">
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </header>
        <main className="flex-1">{children}</main>
        <footer className="border-t border-line">
          <div className="mx-auto max-w-5xl px-4 py-6 text-sm text-muted">
            Placeholder footer. Address, opening hours and legal pages to be added.
          </div>
        </footer>
      </body>
    </html>
  );
}
