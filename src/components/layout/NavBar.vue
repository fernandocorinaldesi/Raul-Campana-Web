<template>
  <b-navbar
    toggleable="lg"
    type="dark"
    class="py-0 shadow"
    variant="dark"
    sticky
    id="custom"
  >
    <b-navbar-brand href="#">
      <div class="logo d-flex align-items-center">
        <h3 class="mt-1 mr-2 titulo-principal">
          Raul Campana
          <img
            src="https://i.ibb.co/yRj603y/equalizer.gif"
            width="10%"
            height="10%"
          />
        </h3>
      </div>
    </b-navbar-brand>
    <!-- <audio src="@/assets/musica.mp3" autoplay loop  hidden></audio> -->
    <!-- <img src="../../public/img/logo.png" width="5%" height="5%" /> -->
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="mr-auto">
        <b-nav-item active href="#">Inicio</b-nav-item>
        <b-nav-item href="#acercade">Acerca de mi</b-nav-item>
        <b-nav-item href="#music">Mi musica</b-nav-item>
        <b-nav-item href="#video">Mis videos</b-nav-item>
        <b-nav-item v-b-modal.modal-2>Contacto</b-nav-item>
        <b-button id="button" href="#clases">Mis clases</b-button>
      </b-navbar-nav>
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <div class="social-links ml-auto">
          <a href="https://www.facebook.com/raulcampanacuadro" class="facebook">
            <i class="fab fa-facebook-f"></i>
          </a>
          <a href="#" class="instagram">
            <i class="fab fa-instagram"></i>
          </a>
        </div>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {};
  },
};
</script>

<style>
#custom {
  /* background: url("https://i.ibb.co/T45XBYw/nav.jpg") !important; */
  font-family: "Roboto Condensed", sans-serif !important;
  line-height: 24px;
  font-size: 13px;
  font-weight: 400;
  color: #a19e9e;
  letter-spacing: 0.8px;
  background: rgb(14, 14, 14) !important;
  background: linear-gradient(
    180deg,
    rgba(14, 14, 14, 1) 0%,
    rgba(11, 11, 11, 1) 15%,
    rgba(0, 0, 0, 1) 100%
  ) !important;
}
#button {
  color: #fff;
  transition: all 0.5s;
  outline: 2px solid #fff;
  background: black;
  border: none;
  padding-top: 2%;
  border-radius: 0;
  font-size: 13px;
}
#buttoninverse {
  color: rgb(0, 0, 0);
  transition: all 0.5s;
  outline: 2px solid rgb(0, 0, 0);
  background: rgb(255, 255, 255);
  border: none;
  padding: 0.5;
  border-radius: 0;
  font-size: 13px;
}
#buttoninverse:hover {
  background-color: rgb(0, 0, 0);
  color: rgb(255, 255, 255);
  border: none;
  border-radius: 0;
}
#button:hover {
  background-color: #fff;
  color: #000;
  border: none;
  border-radius: 0;
}
.logo {
  font-family: "kunstlerschreibschdbolregular";
  font-weight: bold;
}

.social-links {
  text-align: end;
}
.social-links a {
  font-size: 18px;
  display: inline-block;
  background: #333;
  color: rgb(255, 255, 255) !important;
  line-height: 1;
  padding: 8px 0;
  margin-right: 4px;
  border-radius: 50%;
  text-align: center;
  width: 36px;
  height: 36px;
  transition: 0.3s;
}
.social-links a:hover {
  /* background: #f8cb3f; */
  background: rgb(167, 167, 10) !important;
  color: #fff;
}
@media only screen and (max-width: 500px) {
  .titulo-principal {
    font-size: 16px;
  }
}
</style>
