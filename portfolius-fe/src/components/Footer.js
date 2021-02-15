import React from 'react'
import { Container, Image } from 'react-bootstrap'
import footer_image from '../assets/img/logo/moontree.png'

function Footer() {
  return (
    <footer className="footer-area img-fluid">
      <Container>
        <div className="flex-wrap">
          <div className="site-logo text-center py-4">
            <a href="_">
              <Image src={footer_image} alt="logo" fluid className="footer-logo"/>
            </a>
          </div>
          <div className="social text-center">
            <h5 className="text-uppercase">Follow me</h5>
            {/* <a href="_"><i className="fab fa-linkedin"></i></a> */}
            {/* <a href="_"><i className="fab fa-github"></i></a> */}
          </div>
          <div className="copyrights text-center">
            <p className="para">
              Copyright ©2021 All rights reserved |  made by Karnowsky Estime
              <a href="_" className="anchor-style"><span>Daily Tuition</span></a>
            </p>
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
