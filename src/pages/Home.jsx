import Hero from "../sections/Hero";
import Services from "../sections/Services";
import CTA from "../sections/CTA";
import Testimonials from "../components/Testimonials";
import Stats from "../sections/Stats";
import TechStack from "../sections/TechStack";
import WhyChoose from "../sections/WhyChoose";
import FAQ from "../sections/FAQ";

const Home = () => {
  return (
    <>
      <Hero />
      <Stats />
      <Services />
      <TechStack />
      <WhyChoose />
      <Testimonials />
      <FAQ />
      <CTA />
    </>
  );
};

export default Home;
