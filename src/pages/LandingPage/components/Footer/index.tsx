import React from 'react';
import { Box } from '@mui/material';

export const Footer = () => {
  return (
    <Box style={{ justifyContent: 'left', textAlignLast: 'left' }}>
      <Box className="text-center text-lg-start bg-body-tertiary text-muted mt-4 justify-content-between" sx={{ px: 4,py:1, color: '#FFFFFF', textAlign:'left' }}>
        <section className="justify-left">
          <div className="container text-center text-md-start">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-2 text-left">
                <h6 className="text-uppercase fw-bold mb-4">
                  LOGO
                </h6>
              </div>

              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  Support
                </h6>
                <p>
                  Account Information
                </p>
                <p>
                  About
                </p>
                <p>
                 Contact Us
                </p>
                <p>
                  Help Center
                </p>
              </div>

              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  Product
                </h6>
                <p>
                  Beta Test
                </p>
                <p>
                 Demo Acces
                </p>
                <p>
                  Pricing Product
                </p>
              </div>

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4 ">
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <p>Talk to support</p>
                <p>Support Docs</p>
                <p>FAQ's</p>
                <p></p>
              </div>
            </div>
          </div>
        </section>
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          <div className="me-5 d-none d-lg-block">
            <span>Get connected with us on social networks:</span>
          </div>
          <div>
            <a href="" className="me-4 text-reset">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="" className="me-4 text-reset">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="" className="me-4 text-reset">
              <i className="fab fa-google"></i>
            </a>
            <a href="" className="me-4 text-reset">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="" className="me-4 text-reset">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="" className="me-4 text-reset">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </section>
        <div className="text-center p-4" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05);' }}>
          WEBDATANETS © 2024 Copyright:
          <a className="text-reset fw-bold" href="https://mdbootstrap.com/">MDBootstrap.com</a>
        </div>
      </Box>
    </Box>
  );
};



