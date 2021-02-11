import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './index.css';
import Nav from './components/NavComponent';
import Banner from './components/Banner';


function App() {
  return (
    <div className="site-main">
      <Nav/>
      <Banner/>
    </div>
  );
}

export default App;
