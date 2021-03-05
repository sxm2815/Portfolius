import React from 'react';
import { Container, Image, Row } from 'react-bootstrap';
import banner from '../assets/img/banner/banner-test.png'

function Banner() {
  return (
    <section className="site-banner">
      <Container fluid>
        <Row>
          <div className="col-lg-6 col-md-12 site-title">
            <h3 className="title-text">Hey</h3>
            <h1 className="title-text text-uppercase">I am Karnowsky</h1>
            <h4 className="title-text text-uppercase">WordPress Developer</h4>
            <div className="site-buttons">
              <div className="d-flex flex-row flex-wrap">
                <button type="button" className="btn button primary-button mr-4 text-uppercase">hire me</button>
                <button type="button" className="btn button secondary-button text-uppercase">Get cv</button>
              </div> 
            </div>
          </div>
          <div className="col-lg-6 col-md-12 banner-image noselect">
            <Image src={banner} alt="banner" fluid/>
          </div>
        </Row>
      </Container>
    </section>
  )
}

export default Banner
