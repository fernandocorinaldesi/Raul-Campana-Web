<template>
  <b-container>
    <div class="titulos text-center"><h2>CONOCE MI MUSICA</h2></div>
    <b-row align-h="center" no-gutters class="mt-5 mb-5">
      <b-col cols="12" md="6" lg="5">
        <Aplayer
        autoplay
        controls
       
          :music="{
            title: '01- Esto es candombe',
            artist: 'Raices 1978',
            src: '/music/01EstoEsCandombe.mp3',
            pic: '/img/raices-front2.jpg',
          }"
          :list="[
            {
              title: '01- Esto es candombe ',
              src: '/music/01EstoEsCandombe.mp3',
              pic: '/img/raices-front2.jpg',
              artist: 'Raices 1978',
            },
            {
              title: '02- B.O.V Dombe',
              src: '/music/02BOVDombe.mp3',
              pic: '/img/raices-front2.jpg',
              artist: 'Raices 1978',
            },
            {
              title: '03- Hay un Funky en la Oreja del Obelisco',
              src: '/music/03HayunFunkyenlaOrejadelObelisco.mp3',
              pic: '/img/raices-front2.jpg',
              artist: 'Raices 1978',
            },
            {
              title: '04- Ton Coton',
              src: '/music/04TonCoton.mp3',
              pic: '/img/raices-front2.jpg',
              artist: 'Raices 1978',
            },
            {
              title: '05- Belmiro',
              src: '/music/05Belmiro',
              pic: '/img/raices-front2.jpg',
              artist: 'Raices 1978',
            },
            {
              title: '06- Cangas de Narcea',
              src: '/music/06CangasdeNarcea.mp3',
              pic: '/img/raices-front2.jpg',
              artist: 'Raices 1978',
            },
            {
              title: '07- Destilando Aceite',
              src: '/music/07DestilandoAceite.mp3',
              pic: '/img/raices-front2.jpg',
              artist: 'Raices 1978',
            },
           ]"
        />
      </b-col>
      <b-col cols="12" md="5" lg="4">
        <b-img
          class="pt-2"
          center
          src="/img/cover-raices2.jpg"
          fluid
          alt="Responsive image"
        ></b-img>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import Aplayer from "vue-aplayer";

export default {
  components: {
    Aplayer,
  },
  name: "Music",
};
</script>

<style>
.custom-music {
  box-shadow: 0px 0px 14px 7px rgba(146, 146, 146, 0.75);
  -webkit-box-shadow: 0px 0px 14px 7px rgba(146, 146, 146, 0.75);
  -moz-box-shadow: 0px 0px 14px 7px rgba(146, 146, 146, 0.75);
}
.aplayer-list ol li.aplayer-list-light,
.aplayer-list ol li:hover {
  background: #c9c9c9 !important;
}
</style>