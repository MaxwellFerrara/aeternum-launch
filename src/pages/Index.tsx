import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ExecutiveSummary from "@/components/ExecutiveSummary";
import CompanyDescription from "@/components/CompanyDescription";
import MarketAnalysis from "@/components/MarketAnalysis";
import ProductSection from "@/components/ProductSection";
import TeamSection from "@/components/TeamSection";
import MarketingStrategy from "@/components/MarketingStrategy";
import FundingSection from "@/components/FundingSection";
import FinancialProjections from "@/components/FinancialProjections";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <HeroSection />
    <ExecutiveSummary />
    <CompanyDescription />
    <MarketAnalysis />
    <ProductSection />
    <TeamSection />
    <MarketingStrategy />
    <FundingSection />
    <FinancialProjections />
    <Footer />
  </div>
);

export default Index;
