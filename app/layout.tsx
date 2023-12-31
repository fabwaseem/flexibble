import { Footer, Navbar } from "@/components";

export const metadata = {
  title: "Flexibble",
  description:
    "Showcase and discover the latest work from top online portfolios by creative professionals across industries.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
