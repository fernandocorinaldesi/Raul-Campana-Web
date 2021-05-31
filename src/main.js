import Vue from 'vue'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import  { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue';
import VueSocialChat from 'vue-social-chat';
import VueAudio from 'vue-audio-better';

 

Vue.config.productionTip = false
Vue.use(VueSocialChat)
Vue.use(VueAudio)
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)



new Vue({
  render: h => h(App),
}).$mount('#app')
