import { Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import AboutPageTest from "src/components/AboutUs";
import AboutPage from "./pages/AboutPage";
import ShawarmaPage from "./pages/ShawarmaPage";
import ContactPage from "./pages/ContactPage";
import WeeklySpecialsPage from "./pages/WeeklySpecialsPage";
import NotFound from "src/pages/NotFound";
import ServerError from "src/pages/ServerError";

const App = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/about-test" element={<AboutPageTest />} />
        <Route path="/holiday-menu" element={<WeeklySpecialsPage />} />
        <Route path="/order-online" element={<ShawarmaPage />} />
        <Route path="/contacts" element={<ContactPage />} />
        <Route path="/500" element={<ServerError />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;
