import './App.css';
import Header from './components/NavHeader/Header'
import Navbar from './components/NavHeader/Navbar'
import { Routes, Route } from 'react-router-dom'
import About from './components/About/About';
import Layout from './layout/Layout';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element= {<Layout />}>
          <Route path="/header" element={<Header />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/about" element={<Contact />}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
