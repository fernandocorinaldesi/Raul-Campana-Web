<template>
  <div class="carousel-container mb-5">
    <b-carousel
      id="carousel-1"
      :interval="8000"
      controls
      indicators
      background="#ababab"
      fade
      style="text-shadow: 1px 1px 2px #333"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <!-- Text slides with image -->
      <div v-for="item in data" v-bind:key="item.id">
        <b-carousel-slide :img-src="`${item.imagen}`" class="img-responsive">
          <div v-if="(item.id !== 1) & (item.id !== 5)" class="caption">
            <div class="animationX">
              <h1>{{ item.titulo1 }}</h1>
              <h1>{{ item.titulo2 }}</h1>
            </div>
            <div>
              <!-- <b-button class="animationY" :href="`${item.ref}`" size="md" variant="outline-dark">{{ item.button }}</b-button> -->
              <a
                class="btn-style2 skill-btn animationY shadow"
                :href="`${item.ref}`"
                >{{ item.button }}</a
              >
            </div>
          </div>
          <div v-else-if="item.id == 5" class="contactos">
            <div class="animationXbright">
              <div class="text-center mb-3"> 
                    {{ item.titulo1 }}
              </div>
              <div>
                <div class="fa fa-instagram mr-2 mb-2"></div>
                {{ item.titulo2 }}
              </div>
              <div>
                <div class="far fa-envelope mr-2 mb-2"></div>
                {{ item.titulo3 }}
              </div>
              <div>
                <div class="fas fa-user-clock mr-2"></div>
                {{ item.titulo4 }}
              </div>
            </div>
          </div>
          <div v-else>
            <div class="d-flex flex-column primerTexto animationY">
              <div>
                <i class="fas fa-quote-left mr-1"></i> {{ item.titulo1 }}
              </div>
              <div>{{ item.titulo2 }}</div>
              <div>{{ item.titulo3 }}</div>
              <div>
                {{ item.titulo4 }} <i class="ml-1 fas fa-quote-right"></i>
              </div>
            </div>
          </div>
        </b-carousel-slide>
      </div>
      <!-- Slides with custom text -->
    </b-carousel>
  </div>
</template>

<script>
// import axios from "axios";
import slider from "@/assets/json/slider.json";

export default {
  name: "Slider",
  props: {},

  // created() {
  //   this.fetchData();
  // },
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
<style scoped>
.caption {
  margin-bottom: 20%;
}
.contactos {
  margin-bottom: 20%;
  margin-left: 60%;
  font-size: 30px;
  text-shadow: 0px 0px 4px rgba(0, 0, 0, 1);
  font-weight: bold;
}
.primerTexto {
  margin-bottom: 30%;
  margin-right: 50%;
  font-size: 30px;
  text-shadow: 0px 0px 4px rgba(0, 0, 0, 1);
  font-weight: bold;
}

h1 {
  font-size: 30px;
  text-shadow: 4px 3px 0px rgba(0, 0, 0, 1);
  color: rgb(255, 255, 255);
  font-weight: bold;
}
/* .btn-outline-warning {
  color: #000000 !important;
}
.btn-outline-warning:hover {
  color: rgb(211, 211, 211) !important;
} */

.btn-style2 {
  padding: 12px 22px;
  color: #fff;
  display: inline-block;
  transition: all 0.9s;
  outline: 2px solid #fff;
}

.btn-style2:hover {
  background-color: #fff;
  color: #000;
}
.skill-btn {
  display: block;
  max-width: 160px;
  font-size: 15px;
  margin: 0 auto;
  margin-top: 65px;
  padding: 10px 0px;
}
a {
  color: #000;
}

a:hover {
  text-decoration: none;
  color: #000;
}

@media only screen and (max-width: 500px) {
  .caption {
    margin-bottom: 0;
    margin-top: 15%;
  }
  h1 {
    font-size: 15px;
  }
  .contactos {
    margin-bottom: 0;
    margin-top: 0;
    font-size: 10px;
  }
  .primerTexto {
    margin: 0;
    font-size: 10px;
  }
  .btn-style2 {
  font-size: 10px;
  padding: 2%;
  max-width: 50%;
  margin-top: 5%;
}
}

@keyframes fadeIn3 {
  0% {
    opacity: 0;
    transform: translateX(-300px);
  }
  100% {
    opacity: 1;
    transform: translateX(0px);
  }
}
.animationXb {
  animation: fadeIn3 ease 4s;
  -webkit-animation: fadeIn3 ease 4s;
  -moz-animation: fadeIn3 ease 4s;
  -o-animation: fadeIn3 ease 4s;
  -ms-animation: fadeIn3 ease 4s;
   margin-bottom: 60%;
   margin-right: 10%;
}
@keyframes fadeIn {
  0% {
    opacity: 0;
    transform: translateX(-400px);
  }
  100% {
    opacity: 1;
    transform: translateX(0px);
  }
}

.animationXbright {
  animation: fadeIn ease 2s;
  -webkit-animation: fadeIn ease 2s;
  -moz-animation: fadeIn ease 2s;
  -o-animation: fadeIn ease 2s;
  -ms-animation: fadeIn ease 2s;
}

.animationX {
  animation: fadeIn ease 3s;
  -webkit-animation: fadeIn ease 3s;
  -moz-animation: fadeIn ease 3s;
  -o-animation: fadeIn ease 3s;
  -ms-animation: fadeIn ease 3s;
}
@keyframes fadeIn2 {
  0% {
    opacity: 0;
    transform: translateY(500px);
  }
  100% {
    opacity: 1;
    transform: translateY(0px);
  }
}

.animationY {
  animation: fadeIn2 ease 3s;
  -webkit-animation: fadeIn2 ease 3s;
  -moz-animation: fadeIn2 ease 3s;
  -o-animation: fadeIn2 ease 3s;
  -ms-animation: fadeIn2 ease 3s;
  
}
</style>