import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueYouTubeEmbed from 'vue-youtube-embed'
import firebase from 'firebase/app'
import 'firebase/firestore'
import VueMeta from 'vue-meta';
import VueGtag from "vue-gtag";

Vue.use(VueGtag, {  config: { id: "G-8KN26L3K7Z" }});

Vue.use(VueMeta);

Vue.use(VueYouTubeEmbed)
Vue.config.productionTip = false


const firebaseConfig = {
  apiKey: "AIzaSyCtrdJ5oyOdPnoF6rvh7j1yPwLVAK8BXq8",
  authDomain: "greenwhale-830cc.firebaseapp.com",
  projectId: "greenwhale-830cc",
  storageBucket: "greenwhale-830cc.appspot.com",
  messagingSenderId: "155643983165",
  appId: "1:155643983165:web:464fb7ff5c93d0b69b4154",
  measurementId: "G-FYVFJR34PB"
};


firebase.initializeApp(firebaseConfig)
export const db = firebase.firestore()

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
