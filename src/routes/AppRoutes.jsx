// import { Routes, Route } from "react-router-dom";
// import Home from "../pages/Home";
// import ServicesPage from "../pages/ServicesPage";
// import Contact from "../pages/Contact";
// import MainLayout from "../layouts/MainLayout";
// import About from "../pages/About";

// const AppRoutes = () => {
//   return (
//     <Routes>
//       <Route element={<MainLayout />}>
//         <Route path="/" element={<Home />} />
//         <Route path="/services" element={<ServicesPage />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/about" element={<About />} />
//       </Route>
//     </Routes>
//   );
// };

// export default AppRoutes;




import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import ServicesPage from "../pages/ServicesPage";
import Contact from "../pages/Contact";
import About from "../pages/About";
import Blog from "../pages/Blog";
import BlogDetails from "../pages/BlogDetails";
import MainLayout from "../layouts/MainLayout";

const AppRoutes = () => {
return ( <Routes>
<Route element={<MainLayout />}>


    <Route path="/" element={<Home />} />
    <Route path="/services" element={<ServicesPage />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/about" element={<About />} />

    {/* BLOG ROUTES */}
    <Route path="/blog" element={<Blog />} />
    <Route path="/blog/:id" element={<BlogDetails />} />

  </Route>
</Routes>


);
};

export default AppRoutes;
