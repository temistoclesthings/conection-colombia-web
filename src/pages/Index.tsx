import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import InternetPlans from "@/components/InternetPlans";
import TVPackages from "@/components/TVPackages";
import Coverage from "@/components/Coverage";
import SpeedTest from "@/components/SpeedTest";
import ComplianceInfo from "@/components/ComplianceInfo";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingPayButton from "@/components/FloatingPayButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <FloatingPayButton />
      <Navbar />
      <Hero />
      <InternetPlans />
      <TVPackages />
      <Coverage />
      <SpeedTest />
      <ComplianceInfo />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
