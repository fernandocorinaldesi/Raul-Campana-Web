<template>
  <div class="container ">
    <div class="titulos text-center"><h2>MI GALERIA DE VIDEOS</h2></div>
    <div class="col-md-10 offset-md-1 mt-4 mb-5 ">
      <div class="row pb-row">
        <div class="col-md-3 pb-video">
          <iframe
            class="pb-video-frame"
            width="100%"
            height="230"
            src="https://www.youtube.com/embed/W9-iQY84UGs"
            frameborder="0"
            allowfullscreen
          ></iframe>
          <label class="form-control label-warning text-xs-center"
            >Raul Campana video 1</label
          >
        </div>
        <div class="col-md-3 pb-video">
          <iframe
            class="pb-video-frame"
            width="100%"
            height="230"
            src="https://www.youtube.com/embed/Zlgma_4RrtQ"
            frameborder="0"
            allowfullscreen
          ></iframe>
          <label class="form-control label-warning text-xs-center"
            >Raul Campana video 2</label
          >
        </div>
        <div class="col-md-3 pb-video">
          <iframe
            class="pb-video-frame"
            width="100%"
            height="230"
            src="https://www.youtube.com/embed/saOvJ5apFHo"
            frameborder="0"
            allowfullscreen
          ></iframe>
          <label class="form-control label-warning text-xs-center"
            >Raul Campana video 3</label
          >
        </div>
        <div class="col-md-3 pb-video">
          <iframe
            class="pb-video-frame"
            width="100%"
            height="230"
            src="https://www.youtube.com/embed/QnnU_5kP0dQ"
            frameborder="0"
            allowfullscreen
          ></iframe>
          <label class="form-control label-warning text-xs-center"
            >Raul Campana video 4</label
          >
        </div>
      </div>
      <div class="row pb-row">
        <div class="col-md-3 pb-video">
          <iframe
            class="pb-video-frame"
            width="100%"
            height="230"
            src="https://www.youtube.com/embed/Vr5E8MplERc"
            frameborder="0"
            allowfullscreen
          ></iframe>
          <label class="form-control label-warning text-xs-center"
            >Raul Campana video 5</label
          >
        </div>
        <div class="col-md-3 pb-video">
          <iframe
            class="pb-video-frame"
            width="100%"
            height="230"
            src="https://www.youtube.com/embed/DxjL1fn1928"
            frameborder="0"
            allowfullscreen
          ></iframe>
          <label class="form-control label-warning text-xs-center"
            >Raul Campana video 6</label
          >
        </div>
        <div class="col-md-3 pb-video">
          <iframe
            class="pb-video-frame"
            width="100%"
            height="230"
            src="https://www.youtube.com/embed/Xs_DMS8qS-4"
            frameborder="0"
            allowfullscreen
          ></iframe>
          <label class="form-control label-warning text-xs-center"
            >Raul Campana video 7</label
          >
        </div>
        <div class="col-md-3 pb-video">
          <iframe
            class="pb-video-frame"
            width="100%"
            height="230"
            src="https://www.youtube.com/embed/pe-BnsXRBh4"
            frameborder="0"
            allowfullscreen
          ></iframe>
          <label class="form-control label-warning text-xs-center"
            >Raul Campana video 8</label
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "VideoGallery",
};
</script>

<style>

.pb-video {
  border: 1px solid #e6e6e6;
  padding: 5px;
}

.pb-video:hover {
  background: #2c3e50;
}

.pb-video-frame {
  transition: width 2s, height 2s;
}

.pb-video-frame:hover {
  height: 250px;
}

.pb-row {
  margin-bottom: 10px;
}
</style>