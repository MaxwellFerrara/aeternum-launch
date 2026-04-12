import CarNavbar from "@/components/CarNavbar";
import CarHero from "@/components/CarHero";
import CarGallery from "@/components/CarGallery";
import CarAbout from "@/components/CarAbout";
import CarServices from "@/components/CarServices";
import CarContact from "@/components/CarContact";
import CarFooter from "@/components/CarFooter";

const Index = () => (
  <div className="min-h-screen bg-background">
    <CarNavbar />
    <CarHero />
    <CarGallery />
    <CarAbout />
    <CarServices />
    <CarContact />
    <CarFooter />
  </div>
);

export default Index;
