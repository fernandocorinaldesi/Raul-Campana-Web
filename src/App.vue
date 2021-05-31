<template>
  <div id="app">
    <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.2.0/css/all.css"
      integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ"
      crossorigin="anonymous"
    />

    <NavBar />
    <Slider />
    <!-- <mini-audio
      id="floating"
      loop
      autoplay
      audio-source="musica.mp3"
    ></mini-audio> -->
    <Chat />
    <About id="acercade"/>
    <Music id="music"/>
    <Clases id="clases" />
    <VideoGallery id="video"/>
    
   

    <Footer />
  </div>
</template>

<script>
import NavBar from "./components/layout/NavBar";
import Footer from "./components/layout/Footer";
import Slider from "./components/Slider";
import About from "./components/sections/about";
import VideoGallery from "./components/sections/VideoGallery";
import Chat from "./components/layout/Chat";
import Clases from "./components/sections/Clases";
import Music from "./components/sections/Music";



export default {
  name: "App",
  components: {
    Footer,
    NavBar,
    Slider,
    About,
    VideoGallery,
    Chat,
    Clases,
    Music
   },
};
    Music
</script>

<style>
.vsc-popup-button--default {
  background-color: #25d366 !important;
}
.vsc-popup * {
  padding: 2 !important;
}
* {
  scroll-behavior: smooth;
}
.alert-secondary {
  background-color: rgb(214, 214, 214) !important;
}
.titulos {
  border-bottom: 1px solid #aaa;
}
#app{
  
  background-color: #e4e4e4 !important;  
  
  
 

}
#floating {
  position: fixed;
  z-index: 999;
  left: 1%;
  bottom: 1%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  margin-right: 1%;
}
</style>