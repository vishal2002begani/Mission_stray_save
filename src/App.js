import Navbar from './components/Navbar';
import Home from './components/Home';
import Volunteer from './components/Volunteer';
import Adopt from './components/About';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import About from './components/About';
import What_we_do from './components/What_we_do';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Donate from './components/Donate';

function App() {
  return (
    <>
    <Navbar/>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/about" element={<About/>}/>
          <Route exact path="/what_we_do" element={<What_we_do/>}/>
          <Route exact path="/donate" element={<Donate/>}/>
          <Route exact path="/adopt" element={<Adopt/>}/>
          <Route exact path="/volunteer" element={<Volunteer/>}/>
          <Route exact path="/contact" element={<Contact/>}/>
        </Routes>
      </BrowserRouter>
      <Footer/>
    </>
  );
}
export default App;