import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import NotFound from './pages/NotFound';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;