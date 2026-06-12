import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home/index.jsx';
import About from './pages/About/index.jsx';
import Specialties from './pages/Specialties/index.jsx';
import Maternity from './pages/Specialties/Maternity/index.jsx';
import Paediatrics from './pages/Specialties/Paediatrics/index.jsx';
import Orthopaedics from './pages/Specialties/Orthopaedics/index.jsx';
import GeneralMedicine from './pages/Specialties/GeneralMedicine/index.jsx';
import GeneralSurgery from './pages/Specialties/GeneralSurgery/index.jsx';
import Pharmacy from './pages/Specialties/Pharmacy/index.jsx';
import Diagnostics from './pages/Specialties/Diagnostics/index.jsx';
import Doctors from './pages/Doctors/index.jsx';
import Packages from './pages/Packages/index.jsx';
import Blog from './pages/Blog/index.jsx';
import BlogPost from './pages/BlogPost/index.jsx';
import Contact from './pages/Contact/index.jsx';
import BookAppointment from './pages/BookAppointment/index.jsx';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/specialties" element={<Specialties />} />
        <Route path="/specialties/maternity" element={<Maternity />} />
        <Route path="/specialties/paediatrics" element={<Paediatrics />} />
        <Route path="/specialties/orthopaedics" element={<Orthopaedics />} />
        <Route path="/specialties/general-medicine" element={<GeneralMedicine />} />
        <Route path="/specialties/general-surgery" element={<GeneralSurgery />} />
        <Route path="/specialties/pharmacy" element={<Pharmacy />} />
        <Route path="/specialties/diagnostics" element={<Diagnostics />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/book-appointment" element={<BookAppointment />} />
      </Routes>
    </BrowserRouter>
  );
}
