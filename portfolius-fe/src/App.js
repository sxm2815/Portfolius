import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './index.css';
import Nav from './components/NavComponent';
import Banner from './components/Banner';
import About from './components/About';
import Brand from './components/Brand';
import Services from './components/Services';


function App() {
  return (
    <>
      <Nav/>
      <div className="site-main">
        <Banner/>
        <About/>
        <Brand/>
        <Services/>
      </div>
    </>
  );
}

export default App;
