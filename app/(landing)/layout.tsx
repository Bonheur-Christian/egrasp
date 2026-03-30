import { Navbar } from "@/components/custom/common/Navbar";
import { Footer } from "@/components/custom/landingPage/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
