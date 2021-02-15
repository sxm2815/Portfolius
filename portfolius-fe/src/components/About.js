import React from 'react';
import { Image, Row } from 'react-bootstrap';
import about_image from '../assets/img/about-us.png';

function About() {
  return (
    <section className="about-area">
      <div className="content-fluid">
        <Row>
          <div className="col-lg-6 col-md-12">
            <div className="about-image">
              <Image src={about_image} alt="About us" className="noselect" fluid/>
            </div>  
          </div>
          <div className="col-lg-6 col-md-12 about-title">
            <h2 className="text-uppercase pt-5">
              <span>Let me </span>
              <span>introduce</span>
              <span>myself</span>
            </h2>
            <div className="paragraph py-4 w-75">
              <p className="para">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum ea explicabo error itaque ex numquam veniam quod molestias animi beatae.
              </p>
              <p className="para">
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',
              </p>
            </div>
            <button type="button" className="btn button primary-button text-uppercase">Download CV</button>
          </div>
        </Row>
      </div>
    </section>
  )
};

export default About
