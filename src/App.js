
import './App.css';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';
import Contact from './pages/Contact';
import About from './pages/About';
import CakeOrderPage from './pages/ExploreCake';

function App() {
  return (
    
      
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element ={<Home/>}></Route>
          <Route path='/Contact' element ={<Contact/>}></Route>
          <Route path='/About' element ={<About/>}></Route>
          <Route path="/ExploreCake" element={<CakeOrderPage />} />
        </Routes>
        
        <Footer/>
      </Router>
      
    
    
  );
}

export default App;
