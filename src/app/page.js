import Banner from "@/components/banner/Banner";
import Creator from "@/components/creator/Creator";
import CtaSection from "@/components/cta/CtaSection";
import Feature from "@/components/feature/Feature";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import Pricing from "@/components/pricing/Pricing";
import Testimonial from "@/components/testimonial/Testimonial";

const HomePage = () => {
  return (
    <>
      <Header />
      <Banner />
      <Feature />
      <Creator />
      <Pricing />
      <Testimonial />
      <CtaSection />
      <Footer />
    </>
  );
};
export default HomePage;
