<template>
  <div class="about container pt-5 mb-5">
    <div class="row">
      <div class="col-md-4">
        <b-carousel
          id="carousel-fade"
          style="text-shadow: 0px 0px 2px #000"
          fade
        >
          <div v-for="item in data" v-bind:key="item.id">
            <b-carousel-slide
              :img-src="`${item.imagen}`"
              class="img-responsive"
            >
            </b-carousel-slide>
          </div>
        </b-carousel>
      </div>
      <div class="col-md-8">
        <div class="about-text">
        <!--   <b-alert show class="text-center" variant="secondary"
            ><h4>MI HISTORIA</h4></b-alert> -->
            <div class="titulos mb-2"><h2>MI HISTORIA</h2></div>
          <p>
          Nací en el cerrito, montevideo. crecí entre tambores, carnavales y llamadas. 
          desde pequeño descubrí que mi instrumento sería la batería.  a los 18 años me 
          trasladé con mi familia a buenos aires, y desde entonces soy parte de esta ciudad. 
          </p>
          <p>
            Viví los 70 a pleno, integrando mis primeras bandas: sociedad anónima, 
            raíces. estudié en el conservatorio vinci con el maestro rolando picardi. 
            y luego fui sesionista de 
            importantes cantantes como jairo, estela raval, sergio denis.
          </p>
           <p>
            Hoy llevo adelante mis propios proyectos musicales, y transmito mi experiencia y 
            conocimiento a muchos alumnos que pasan por mi estudio.
          </p>
          <b-button v-b-modal.modal-1 id="buttoninverse" class="ml-2"
            >Mirá mi CV completo</b-button
          >
          <b-modal id="modal-1" title="Raul Campana" ok-title="Volver" ok-only scrollable>
            <h5><u>Formación musical</u></h5>
            <ul>
              <li>Conservatorio de mùsica de Montevideo</li>
              <li>Conservatorio “VINCI” de Buenos Aires con los maestros:</li>
              <dd>Rolando Piccardi</dd>
              <dd>Juan Carlos Licari</dd>
              <dd>Alejandro Varela</dd>
              <dd>Marcelo Geblòn</dd>
              <li>
                Clases avanzadas con Robbe Amin (baterista de Rubèn Blades)
              </li>
            </ul>
            <h5><u>Experiencia laboral:</u></h5>
            <ul>
              <li>Baterista de la banda “Sociedad Anònima” (1970-1977)</li>
              <li>
                Baterista del grupo de candombe “Raìces” con Beto Satragni,
                Andrès Calamaro, Jimy Santos, Alberto Bengolea, (1978-2010)
              </li>
              <li>Baterista de Sergio Denis entre 1978 y1990</li>
              <li>Baterista de Estela Raval entre 1990 y 1992</li>
              <li>Baterista de Jairo entre 1992 y 1994</li>
            </ul>
            <h5><u>Participación en proyectos musicales:</u></h5>
            <ul>
              <li>Grupo “Gorriòn”, estilo tango, 1995</li>
              <li>Grupo “La Yesca”, proyecciòn folclòrica, 1996</li>
              <li>Grupo “prusic”, jazz latino, 2008</li>
            </ul>
            <h5><u>Grabaciones:</u></h5>
            <ul>
              <li>LP con “Sociedad Anònima”</li>
              <li>LP V.O.V con “Raìces”</li>
              <li>CD con “La Yesca”</li>
              <li>CD con “Prusic”</li>
              <li>CD “Raìces 30 años”</li>
              <li>CD “Beto Satragni y Raìces”</li>
              <li>CD con “Dúo Cardozo” (2013)</li>
            </ul>
            <h5><u>Presentaciones en el exterior:</u></h5>
            <p>
              Con la cantante Estela Raval entre 1992 y 1996 en: Miami Perù
              España
            </p>
            <p>
              <strong
                >Con el grupo Raìces en el reenccuentro de los 30 años en el
                2009: Montevideo (Uruguay), sala Zitarrosa (disponible video en
                You tube) ◊Este recital fue presentado en Buenos Aires en el IFT
                de la ciudad autònoma y en el teatro de la Cova en San Isidro.
              </strong>
            </p>
            <h5><u>Actividad actual:</u></h5>
            <ul>
              <li>
                Clases avanzadas de baterìa en la zona de San Miguel (Campana
                Estudio)
              </li>
              <li>
                Baterista invitado del guitarrista Gustavo Suárez en: clínica
                realizada en la Sociedad Italiana de San Miguel, presentación en
                centro cultural Ninsei de San Miguel, presentación en Jam
                Session con varios músicos locales en Opus Noi en San Miguel,
                jornada de arte y música (jornada de Jazz) en la EPB de San
                Miguel, ciclos de Jazz en el club atlético San Miguel.
              </li>
              <li>
                Baterista de la cantante Adriana Nano junto al guitarrista
                Gustavo Suárez, presentaciones 2011: teatro San Martín de la
                Ciudad Autónoma de Buenos Aires, Notorius en la misma ciudad y
                en locales de San Miguel, Muñiz y Bella Vista.
              </li>
              <li>
                Preparaciòn de clìnicas de Candombe a través del proyecto “llegó
                el tambor”, en colaboración con los percusionistas Gustavo Rocco
                y Ezequiel Monterrosso, a desarrollarse a lo largo del año 2012
                como evento cultural.
              </li>
              <li>
                Actualmente conforma EL “CAMPANA TRIO FUSSION” junto al
                guitarrista David Márquez y el bajista Marcelo Márquez (en
                grabación video y CD)
              </li>
              <li>
                Integra la banda de covers “SILENCIO DE NEGRA” , estable del
                Pelthom bar de José C Paz
              </li>
              <li>
                En formación trío de jazz clásico con el guitarrista Emmanuel
                Franco y el contrabajista Alejandro Lorenzatto.
              </li>
            </ul>
          </b-modal>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import slider from "@/assets/json/aboutslide.json";

export default {
  name: "About",
  data() {
    return {
      // baseUrl: process.env.VUE_APP_BASE_URL,
      data: slider,
      slide: 0,
      sliding: null,
    };
  },
  methods: {
    // fetchData() {
    //   axios.get("http://localhost:8080/slider.json").then((response) => {
    //     this.data = response.data;
    //   });
    // },
    onSlideStart() {
      this.sliding = true;
    },
    onSlideEnd() {
      this.sliding = false;
    },
  },
};
</script>

<style>
.modal-dialog {
  border: #0275d8 2px solid !important;
}

</style>