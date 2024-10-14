import Hero from "@/components/Hero";
import WhyChooseUs from "@/components/WhyChooseUs";
import Services from "@/components/Service/Services";
import ReasonsToChooseUs from "@/components/ReasonsToChooseUs";
import Testimonial from "@/components/Testimonial/Testimonial";
import Blog from "@/components/Blog/Blog";
import FAQ from "@/components/FAQ/FAQ";
import Footer from "@/components/Footer";
import Client from "@/components/Client/Client";

export default function Home() {
  return (
    <>
      <Hero/>
      <WhyChooseUs/>
      <Client/>
      <Services/>
      <ReasonsToChooseUs/>
      <Testimonial/>
      <Blog/>
      <FAQ/>
      <Footer/>
    </>
  );
}
