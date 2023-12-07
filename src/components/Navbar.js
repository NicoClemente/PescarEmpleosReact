import React from "react";

const NavBarPescar = () => {
  return (
    <nav class="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0">
      <a
        href="index.html"
        class="navbar-brand d-flex align-items-center text-center py-0 px-4 px-lg-5"
      >
        <img src={require("../img/LogoPescar.jpg")} style={{width: 80}} id="logo" alt="logo" />
      </a>
      <h1 class="m-0 text-primary">PESCAR EMPLEOS</h1>
      <button
        type="button"
        class="navbar-toggler me-4"
        data-bs-toggle="collapse"
        data-bs-target="#navbarCollapse"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarCollapse">
        <div class="navbar-nav ms-auto p-4 p-lg-0">
          <a href="index.html" class="nav-item nav-link active">
            Inicio
          </a>
          <div class="nav-item dropdown">
            {/* <a
              href="#"
              class="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
            >
              EMPLEOS
            </a> */}
            <div class="dropdown-menu rounded-0 m-0">
              <a href="job-list.html" class="dropdown-item">
                LISTA DE EMPLEOS
              </a>
            </div>
          </div>
          <div class="nav-item dropdown">
            {/* <a
              href="#"
              class="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
            >
              CATEGORÍAS
            </a> */}
            <div class="dropdown-menu rounded-0 m-0">
              <a href="category.html" class="dropdown-item">
                CATEGORÍA 1
              </a>
            </div>
          </div>
          <div class="nav-item dropdown">
            {/* <a
              href="#"
              class="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
            >
              CUENTAS EGRESADOS
            </a> */}
            <div class="dropdown-menu rounded-0 m-0">
              <a href="../login/login.html" class="dropdown-item">
                REGISTRO
              </a>
              <a href="../login/login.html" class="dropdown-item">
                INICIO SESIÓN
              </a>
            </div>
          </div>
          <a href="contact.html" class="nav-item nav-link">
            CONTACTO
          </a>
          .
        </div>
      </div>
    </nav>
  );
};

export default NavBarPescar;
