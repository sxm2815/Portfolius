import React from 'react';
import { Image } from 'react-bootstrap';
import { brand_data } from '../constants/brandData';


function Brand() {
  return (
    <section className="brand-area">
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-6 col-lg-12 col-md-12">
            <div className="first-row row">
              {brand_data.map((item) => (
                // map brand data stuff here
                <div className="col-lg-4 col-md-6 col-sm-6" key={item.alt}>
                  <div className="single-brand">
                    <Image src={item.src} alt={item.alt} className={item.class, item.alt + "-service"} fluid/>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-xl-6 col-lg-12 col-md-12">
            <div className="experience-area">
              <div className="d-flex flex-row years-area">
                <h2 className="p-3 years">10</h2>
                <h2>
                  <span>Years</span>
                  <span>Work</span>
                  <span>Experience</span>
                </h2>
              </div>
              <div className="d-flex flex-row flex-wrap call-area">
                <span><i className="fas fa-phone-alt fa-3x px-3"></i></span>
                <div className="call-now">
                  <a href="_" className="text-uppercase h4 font-roboto anchor-style">Call Now</a>
                  <span className="font-roboto py-2">(555)-555-5555</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Brand
