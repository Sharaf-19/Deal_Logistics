import { ToastContainer } from 'react-toastify';
import { Routes, Route } from 'react-router-dom';

import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import WhatsAppButton from './components/WhatsAppButton';

import 'react-toastify/dist/ReactToastify.css';
import Education from './pages/Education';

const Home = () => (
  <>
    <Header />
    <Services />
    <About />
    <Testimonials />
    <Contact />
    <Footer />
  </>
);

const App = () => {
  return (
    <div className='w-full overflow-hidden'>
      <ToastContainer />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/education' element={<Education />} />
      </Routes>

      <WhatsAppButton />
    </div>
  );
};

export default App;
