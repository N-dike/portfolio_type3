import './App.css';
import Header from './components/NavHeader/Header'
import Navbar from './components/NavHeader/Navbar'
import { Routes, Route } from 'react-router-dom'
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer'
import Layout from './layout/Layout';
import Portfolio from './components/Portfolio/Portfolio'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element= {<Layout />}>
          <Route path="/header" element={<Header />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/portfolio" element={<Portfolio />}/>
          <Route path="/about" element={<Contact />}/>
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
