import { Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ShawarmaPage from "./pages/ShawarmaPage";
import ContactPage from "./pages/ContactPage";
import WeeklySpecialsPage from "./pages/WeeklySpecialsPage";

const App = () => {
  
    return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/weekly-specials" element={<WeeklySpecialsPage />} />
        <Route path="/shawarma" element={<ShawarmaPage />} />
        <Route path="/contacts" element={<ContactPage />} />
      </Route>
    </Routes>
  );
};

export default App;
