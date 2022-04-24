import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Footer from './components/Footer';
import Courses from './components/Courses';
import Become from './components/Become';
import Dashboard from './components/Dashboard';
import Loginpage from './components/Loginpage';
import { Route, Routes } from "react-router-dom"
import Singin from './components/Singin';

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Home' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/Courses' element={<Courses />} />
        <Route path='/Become' element={<Become />} />
        <Route path='/Dashboard' element={<Dashboard />} />
        <Route path='/Loginpage' element={<Loginpage />} />
        <Route path='/Singin' element={<Singin />} />
        
      </Routes>
      <Footer />

    </>
  );
}

export default App;
