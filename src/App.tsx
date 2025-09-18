import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import { AuthContext } from '@/contexts/authContext';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import Home from "@/pages/Home";
import HomeEn from "@/pages/HomeEn";
import About from "@/pages/About";
import AboutEn from "@/pages/AboutEn";
import Methodology from "@/pages/Methodology";
import MethodologyEn from "@/pages/MethodologyEn";
import Program from "@/pages/Program";
import ProgramEn from "@/pages/ProgramEn";
import Contact from "@/pages/Contact";
import ContactEn from "@/pages/ContactEn";
import { Empty } from '@/components/Empty';

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const logout = () => {
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, setIsAuthenticated, logout }}
    >
      <LanguageProvider>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow pt-20">
            <Routes>
              {/* 中文路由 */}
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/methodology" element={<Methodology />} />
              <Route path="/program" element={<Program />} />
              <Route path="/contact" element={<Contact />} />
              
              {/* 英文路由 */}
              <Route path="/en" element={<HomeEn />} />
              <Route path="/en/about" element={<AboutEn />} />
              <Route path="/en/methodology" element={<MethodologyEn />} />
              <Route path="/en/program" element={<ProgramEn />} />
              <Route path="/en/contact" element={<ContactEn />} />
              
              {/* 其他页面 */}
              <Route path="/other" element={<div className="text-center text-xl py-10">Other Page - Coming Soon</div>} />
              <Route path="*" element={<Empty />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </LanguageProvider>
    </AuthContext.Provider>
  );
}
