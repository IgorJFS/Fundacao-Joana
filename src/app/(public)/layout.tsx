import Header from "@/components/header";
import Footer from "@/components/footer";
import AlertBanner from "@/components/alert-banner";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <AlertBanner />
      {children}
      <Footer />
    </>
  );
}
