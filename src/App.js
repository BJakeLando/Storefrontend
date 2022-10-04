import logo from './logo.svg';
import './App.css';
import NavBar from './components/navBar';
import Footer from './components/footer';
import Catalogue from './pages/catalogue';

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";


function App() {
  return (
    <div className='navBar'>
      <NavBar />
      <h1 className="site-title">Karla's Portaits</h1>

      <Catalogue />
      
      <Footer />

      
    </div>
    
  );
}

export default App;

//https://git-scm.com/downloads
