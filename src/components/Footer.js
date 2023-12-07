import React from "react";

const Footer = () => {
  return (
    <div
      class="container-fluid bg-dark text-white-50 footer pt-5 mt-5 wow fadeIn"
      data-wow-delay="0.1s"
    >
      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css"
        rel="stylesheet"
      />
      <div class="container py-5">
        <div class="row g-5">
          <div class="col-lg-3 col-md-6">
            <h5 class="text-white mb-4">Contactos</h5>
            <p class="mb-2">
              <i class="fa fa-map-marker-alt me-3"></i>Argentina
            </p>
            <p class="mb-2">
              <i class="fa fa-phone-alt me-3"></i>+11 123 456 789
            </p>
            <p class="mb-2">
              <i class="fa fa-envelope me-3"></i>Pescar@gmail.com
            </p>
            <div class="d-flex pt-2">
              <a class="btn btn-outline-light btn-social" href="">
                <i class="fab fa-twitter"></i>
              </a>
              <a class="btn btn-outline-light btn-social" href="">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a class="btn btn-outline-light btn-social" href="">
                <i class="fab fa-youtube"></i>
              </a>
              <a class="btn btn-outline-light btn-social" href="">
                <i class="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
