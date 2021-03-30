import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './index.css';
import React from 'react'
import Nav from './components/NavComponent';
import Banner from './components/Banner';
import About from './components/About';
import Brand from './components/Brand';
import Services from './components/Services';
import Footer from './components/Footer';
import ServiceModal from './components/ServiceModal';
import { Button } from 'react-bootstrap';


function App() {
  const [modalShow, setModalShow] = React.useState(false);
  
  return (
    <>
      <Nav/>
      <div className="site-main">
        <Banner/>
        <About/>
        <Services/>
        <Brand/>
        <Footer/>
        {/* <Button variant="primary" onClick={() => setModalShow(true)}>
          Launch vertically centered modal
        </Button>
        <ModalTest
        show={modalShow}
        onHide={() => setModalShow(false)}>

        </ModalTest> */}
      </div>
    </>
  );
}

export default App;
