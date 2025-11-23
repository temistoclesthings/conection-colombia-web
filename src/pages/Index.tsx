import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import InternetPlans from "@/components/InternetPlans";
import TVPackages from "@/components/TVPackages";
import Coverage from "@/components/Coverage";
import SpeedTest from "@/components/SpeedTest";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <InternetPlans />
      <TVPackages />
      <Coverage />
      <SpeedTest />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
