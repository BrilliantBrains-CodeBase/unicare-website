import { BrowserRouter, Routes, Route, Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import FloatingCTAs from './components/FloatingCTAs';

import Home            from './pages/Home/index.jsx';
import About           from './pages/About/index.jsx';
import Specialties     from './pages/Specialties/index.jsx';
import Maternity       from './pages/Specialties/Maternity/index.jsx';
import Paediatrics     from './pages/Specialties/Paediatrics/index.jsx';
import Orthopaedics    from './pages/Specialties/Orthopaedics/index.jsx';
import GeneralMedicine from './pages/Specialties/GeneralMedicine/index.jsx';
import GeneralSurgery  from './pages/Specialties/GeneralSurgery/index.jsx';
import Pharmacy        from './pages/Specialties/Pharmacy/index.jsx';
import Diagnostics     from './pages/Specialties/Diagnostics/index.jsx';
import Doctors         from './pages/Doctors/index.jsx';
import Packages        from './pages/Packages/index.jsx';
import Blog            from './pages/Blog/index.jsx';
import BlogPost        from './pages/BlogPost/index.jsx';
import Contact         from './pages/Contact/index.jsx';
import BookAppointment from './pages/BookAppointment/index.jsx';
import NotFound        from './pages/NotFound/index.jsx';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function Layout() {
  return (
    <>
      <Header />
      <main id="main-content" className="pt-18 pb-16 lg:pb-0 min-h-dvh">
        <Outlet />
      </main>
      <Footer />
      <FloatingCTAs />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/"                           element={<Home />} />
          <Route path="/about"                      element={<About />} />
          <Route path="/specialties"                element={<Specialties />} />
          <Route path="/specialties/maternity"      element={<Maternity />} />
          <Route path="/specialties/paediatrics"    element={<Paediatrics />} />
          <Route path="/specialties/orthopaedics"   element={<Orthopaedics />} />
          <Route path="/specialties/general-medicine" element={<GeneralMedicine />} />
          <Route path="/specialties/general-surgery"  element={<GeneralSurgery />} />
          <Route path="/specialties/pharmacy"       element={<Pharmacy />} />
          <Route path="/specialties/diagnostics"    element={<Diagnostics />} />
          <Route path="/doctors"                    element={<Doctors />} />
          <Route path="/packages"                   element={<Packages />} />
          <Route path="/blog"                       element={<Blog />} />
          <Route path="/blog/:slug"                 element={<BlogPost />} />
          <Route path="/contact"                    element={<Contact />} />
          <Route path="/book-appointment"           element={<BookAppointment />} />
          <Route path="*"                           element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
