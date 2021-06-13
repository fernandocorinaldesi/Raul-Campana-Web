<template>
  <footer id="footer">
    <div class="footer-top">
      <div class="container">
        <div class="row">
          <div class="col-lg-3 col-md-6 footer-info">
            <h3>Raul Campana</h3>
            <h6>"Una vez que dominas la técnica, podrás desarrollar tus propias ideas"</h6>
          </div>
          <div class="col-lg-3 col-md-6 footer-links">
            <h4>Enlaces utiles</h4>
            <ul>
              <li>
                <a href="#">Inicio</a>
              </li>
              <li>
                <a href="#acercade">Acerca de mi</a>
              </li>
              <li>
                <a href="#music">Mi música</a>
              </li>
              <li>
                <a href="#videos">Galeria</a>
              </li>
              <li>
                <a href="#clases">Mis Clases</a>
              </li>
              <li>
                <a v-b-modal.modal-2>Contacto</a>
              </li>
            </ul>
          </div>
          <div class="col-lg-3 col-md-6 footer-contact">
            <h4>Contactame</h4>
            <p>
              <!-- Primera junta 648 <br /> -->
              CABA
              <br />Argentina
              <br />
              <strong>Telefono:</strong>11 2183-2396
              <br />
              <strong>Email:</strong>@gmail.com
              <br />
            </p>
            <div class="social-links " style="padding-right:60%">
              <a href="https://www.facebook.com/raulcampanacuadro" class="facebook">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a href="#" class="instagram">
                <i class="fab fa-instagram"></i>
              </a>
            </div>
          </div>
      
        </div>
      </div>
    </div>
    <div class="container-copy">
      <div class="copyright">
        &copy; Copyright
        <strong>Raul Campana </strong>. Todos los derechos reservados
      </div>
      <div class="credits">
        <strong>Made by</strong>
        <a href="https://" style="color:white"> Fernando Corinaldesi</a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style>
.container-copy {
  background: black;
  width: 100%;
  position: absolute;
}
#footer {
  background: url("https://i.ibb.co/f8xT9Pj/drum.jpg");
  background-size: cover;
  padding: 0 0 30px 0;
  color: rgb(255, 255, 255);
  font-size: 14px;
}
#footer .footer-top {
  background: rgba(0, 0, 0, 0.5);
  padding: 60px 0 30px 0;
  text-align: start;
}

#footer .footer-top .footer-info {
  margin-bottom: 30px;
}

#footer .footer-top .footer-info h3 {
  font-size: 34px;
  margin: 0 0 20px 0;
  padding: 2px 0 2px 10px;
  line-height: 1;
  font-family: "kunstlerschreibschdbolregular";
  font-weight: bold;
  font-weight: 700;
  letter-spacing: 3px;
  /* border-left: 4px solid #f8cb3f; */
  border-left: 4px solid yellow;
}

#footer .footer-top .footer-info p {
  font-size: 14px;
  line-height: 24px;
  margin-bottom: 0;
  font-family: "Montserrat", sans-serif;
  color: #eee;
}

#footer .footer-top .social-links a {
  font-size: 18px;
  display: inline-block;
  background: #333;
  color: #eee;
  line-height: 1;
  padding: 8px 0;
  margin-left: 4px;
  border-radius: 50%;
  text-align: center;
  width: 36px;
  height: 36px;
  transition: 0.3s;
}

#footer .footer-top .social-links a:hover {
  /* background: #f8cb3f; */
  background: rgb(167, 167, 10) !important;
  color: #fff;
}

#footer .footer-top h4 {
  font-size: 14px;
  font-weight: bold;
  color: #fff;
  text-transform: uppercase;
  position: relative;
  padding-bottom: 12px;
}

#footer .footer-top .footer-links {
  margin-bottom: 30px;
}

#footer .footer-top .footer-links ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

#footer .footer-top .footer-links ul i {
  padding-right: 8px;
  color: #ddd;
}

#footer .footer-top .footer-links ul li {
  border-bottom: 1px solid #333;
  padding: 10px 0;
}

#footer .footer-top .footer-links ul li:first-child {
  padding-top: 0;
}

#footer .footer-top .footer-links ul a {
  color: #eee;
}

#footer .footer-top .footer-links ul a:hover {
  /* color: #f8cb3f; */
  color: yellow;
}

#footer .footer-top .footer-contact {
  margin-bottom: 30px;
}

#footer .footer-top .footer-contact p {
  line-height: 26px;
}

#footer .footer-top .footer-newsletter {
  margin-bottom: 30px;
}

#footer .footer-top .footer-newsletter input[type="email"] {
  border: 0;
  padding: 6px 8px;
  width: 65%;
  background-color: white;
}

#footer .footer-top .footer-newsletter input[type="submit"] {
  /* background: #f8cb3f; */
  background: #5cb85c;
  border: 0;
  width: 35%;
  padding: 6px 0;
  text-align: center;
  color: #fff;
  transition: 0.3s;
  cursor: pointer;
}

#footer .footer-top .footer-newsletter input[type="submit"]:hover {
  /* background: #f8cb3f; */
  background: #5cb85c;
}

#footer .copyright {
  text-align: center;
  padding-top: 30px;
  color: white;
}
#footer .credits {
  text-align: center;
  font-size: 13px;
  color: white;
}
</style>
