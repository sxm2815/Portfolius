import React from 'react';
import { Container, Image, Row } from 'react-bootstrap';
import { service_data } from '../constants/servicesData';

function Services() {
  return (
    <section className="services-area">
      <Container>
        <Row>
          <div className="col-lg-12 text-center services-title">
            <h1 className="text-uppercase title-text">Services Offers</h1>
            <p className="para">
              There are many variations of passages of Lorem Ipsum available, but the majority have 
              suffered alteration in some form, by injected humour
            </p>
          </div>
        </Row>
        <div className="contain services-list">
          <Row>
            {service_data.map((item)=>(
              <div className="col-lg-3 col-md-6 col-sm-12" key={item.alt}>
              <div className="services">
                <div className="services-img text-center py-4 noselect">
                  <Image src={item.src} alt={item.alt} fluid/>
                </div>
                <div className="card-body text-center">
                  <h5 className="card-title text-uppercase font-roboto">{item.h5_content}</h5>
                  <p className="card-text text-secondary">{item.p_content}</p>  
                </div>
              </div>
            </div> 
            ))}
          </Row>
        </div>
      </Container>
    </section>
  )
}

export default Services
