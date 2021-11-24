<template>
  <b-container>
    <div class="titulos text-center"><h2>CLASES DE BATERIA</h2></div>
    <b-row class="mt-4 mb-5">
      <b-col cols="12" md="6" lg="4" class="clases-info">
        <h5>Clases On-Line y Presenciales</h5>
        <div class="descripcion">
          <p>Quien dirige el ritmo, dirige todo. Vení a aprender Batería.</p>
          <ul>
            <li>Desde lo básico hasta lo mas avanzado.</li>
            <li>Notación y teoría musical.</li>
            <li>Audioperceptiva.</li>
            <li>Ejercicios y técnica.</li>
            <li>Diferentes ritmos y estilos.</li>
            <li>Improvisación.</li>
          </ul>
        </div>
        <b-button v-b-modal.modal-2 class="mb-2" id="buttoninverse"
          >Contactame</b-button
        >
      </b-col>
      <b-col cols="12" md="6" lg="8">
        <b-row align-h="center">
          <b-col cols="8" md="6" lg="4" mb-2>
            <div class="custom-card text-center">
              <b-img
                class="pt-2 pl-1 pr-1"
                center
                src="https://i.ibb.co/j4gXwgF/clases1.jpg"
                fluid
                alt="Responsive image"
              ></b-img>
              <h5>Básico-intermedio</h5>
              <p>Empezá desde cero.</p>

              <b-button
                v-b-modal.modal-basico-intermedio
                class="mb-2"
                id="buttoninverse"
                >Mas información</b-button
              >
              <b-button
                v-b-modal.modal-basico-intermedio-videos
                class="ml-2 mb-2"
                id="buttoninverse"
                >Videos</b-button
              >
            </div>
          </b-col>
          <b-col cols="8" md="6" lg="4" mb-2>
            <div class="custom-card text-center">
              <b-img
                class="pt-2 pl-1 pr-1"
                center
                src="https://i.ibb.co/j4gXwgF/clases1.jpg"
                fluid
                alt="Responsive image"
              ></b-img>
              <h5>Avanzado</h5>
              <p>Têcnicas y teoría avanzada.</p>
              <b-button v-b-modal.modal-avanzado class="mb-2" id="buttoninverse"
                >Mas información</b-button
              >
              <b-button class="ml-2 mb-2" v-b-modal.modal-avanzado-videos id="buttoninverse">Videos</b-button>
            </div>
          </b-col>
        </b-row>
      </b-col>
    </b-row>

    <b-modal
      id="modal-2"
      title="Medios de contacto"
      ok-title="Volver"
      ok-only
      scrollable
    >
      <b-row>
        <b-col cols="12">
          <div class="d-flex align-items-center ml-3">
            <div class="">
              <img
                class="pr-4"
                src="@/assets/fa.svg"
                width="24%"
                height="24%"
              /><span style="font-size: 100%"
                ><strong
                  ><a href="https://www.facebook.com/raulcampanacuadro"
                    >Hablame por Facebook</a
                  ></strong
                ></span
              >
            </div>
          </div>

          <div class="d-flex align-items-center">
            <div class="">
              <img
                class="pr-3"
                src="@/assets/wsp.svg"
                width="21%"
                height="21%"
              /><span style="font-size: 100%"
                ><strong
                  ><a
                    href="https://api.whatsapp.com/send?phone=5491121832396&text="
                    >Mandame un mensaje por WhatsApp</a
                  ></strong
                ></span
              >
            </div>
          </div>

          <div class="d-flex align-items-center ml-3">
            <div class="">
              <img
                class="pr-4"
                src="@/assets/gmail.svg"
                width="20%"
                height="20%"
              /><span style="font-size: 100%"
                ><strong
                  ><a href="">Mail a raulwaltercuadro63@gmail.com</a></strong
                ></span
              >
            </div>
          </div>
        </b-col>
      </b-row>
    </b-modal>

    <b-modal
      id="modal-basico-intermedio"
      ok-title="Volver"
      hide-header="true"
      ok-only
      scrollable
    >
      <b-row>
        <b-col cols="12">
          <h5><u>ESTAS CLASES INCLUYEN LO SIGUIENTE:</u></h5>
          <br />
          <ul>
            <li>Clases individuales.</li>
            <li>
              Técnica sobre el instrumento: manejo de baqueta o palo, rebote
              sobre el parche. Rudimentos esenciales para la técnica: mano,
              muñeca, dedos.
            </li>
            <li>
              Técnica de bombo: ejercicios aplicando síncopas, uso de figuras
              como negras, corcheas, semicorcheas manteniendo la estructura
              rítmica.
            </li>
            <li>
              Diferentes Sticking sobre la batería: paraddilles sobre la
              síncopa, en tresillos, etc.
            </li>
            <li>
              Grupos artificiales: aplicación de diferentes alteraciones
              (stickings), grupos de 3,5 y 7 dentro de un compás de 4/4.
            </li>
            <li>
              Coordinación e independencia: ejercicios manteniendo un ostinatto.
              Hi Hat, Plato, mano izquierda y bombo, diferentes figuras.
            </li>
          </ul>
        </b-col>
      </b-row>
    </b-modal>
    <b-modal
      id="modal-basico-intermedio-videos"
      ok-title="Volver"
      hide-header="true"
      ok-only
      scrollable
    >
      <b-row>
        <b-col cols="12">
          <iframe
            width="100%"
            height="230"
            src="https://drive.google.com/file/d/1ZhTwRV39g9e13R3pgFsl_hQdVo22ckvQ/preview"
            frameborder="0"
            allowfullscreen
          ></iframe>
          <label class="form-control label-warning text-xs-center"
            >Clase 1 para principiantes</label
          >
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="12">
          <iframe
            width="100%"
            height="230"
            src="https://drive.google.com/file/d/1gi9sBPBIZjAejwccnmsV15VGEorrbRqQ/preview"
            frameborder="0"
            allowfullscreen
          ></iframe>
          <label class="form-control label-warning text-xs-center"
            >Clase 2 para principiantes</label
          >
        </b-col>
      </b-row>
    </b-modal>
    <b-modal
      id="modal-avanzado"
      ok-title="Volver"
      ok-only
      scrollable
      hide-header="true"
    >
      <b-row>
        <b-col cols="12">
          <h5><u>ESTAS CLASES INCLUYEN LO SIGUIENTE:</u></h5>
          <br />
          <ul>
            <li>Clases individuales y grupales.</li>
            <li>
              Ritmos y combinaciones: fraseos lineales, Jazz, Swing, Funk,
              Candombe, Latin, Rock, Pop, Folclore, Tango fusión.
            </li>
            <li>Ensamble con percusiones.</li>
            <li>Ensamble instrumental.</li>
            <li>Clínicas de batería.</li>
            <li>Sala de ensayo para pequeñas bandas.</li>
            <li>Grupos de análisis de audios y videos especializados.</li>
          </ul>
        </b-col>
      </b-row>
    </b-modal>
    <b-modal
      id="modal-avanzado-videos"
      ok-title="Volver"
      hide-header="true"
      ok-only
      scrollable
    >
      <b-row>
        <b-col cols="12">
          <iframe
            width="100%"
            height="230"
            src="https://drive.google.com/file/d/1Kt-UbKJHRVanoqv_ZvpNFEyVYjiWcJW5/preview"
            frameborder="0"
            allowfullscreen
          ></iframe>
          <label class="form-control label-warning text-xs-center"
            >Clase 1 para avanzados</label
          >
        </b-col>
      </b-row>      
    </b-modal>
  </b-container>
</template>

<script>
export default {
  name: "Clases",
};
</script>

<style>
.custom-card {
  box-shadow: 0px 0px 14px 7px rgba(146, 146, 146, 0.75);
  -webkit-box-shadow: 0px 0px 14px 7px rgba(146, 146, 146, 0.75);
  -moz-box-shadow: 0px 0px 14px 7px rgba(146, 146, 146, 0.75);
  transition: all 0.3s;
}
.custom-card:hover {
  background-color: #c9c9c9;
}
.descripcion {
  color: rgb(122, 122, 122);
}
@media only screen and (max-width: 576px) {
  .clases-info {
    margin-bottom: 10% !important;
  }
  .custom-card {
    margin-bottom: 10% !important;
  }
}
</style>