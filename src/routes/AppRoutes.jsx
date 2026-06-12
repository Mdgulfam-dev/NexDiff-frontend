import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import ServicesPage from "../pages/ServicesPage";
import Contact from "../pages/Contact";
import About from "../pages/About";
import Blog from "../pages/Blog";
import BlogDetails from "../pages/BlogDetails";
import ServiceDetails from "../pages/ServiceDetails";
import Pricing from "../pages/Pricing";
import PlanRequest from "../pages/PlanRequest";
import PlanPayment from "../pages/PlanPayment";
import Careers from "../pages/Careers";
import CaseStudies from "../pages/CaseStudies";
import MainLayout from "../layouts/MainLayout";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/service/:id" element={<ServiceDetails />} />
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/pricing/request" element={<PlanRequest />} />
        <Route path="/pricing/payment" element={<PlanPayment />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogDetails />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
