import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';
import 'roboto-fontface/css/roboto/roboto-fontface.css';
import '@fortawesome/fontawesome-free/css/all.css';

import firebase from 'firebase/app';
import 'firebase/firestore';
//   // Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAy-0_0Y_EewCmlpJBPR15V1_H9xB4rQ-k",
    authDomain: "scriptkev-web.firebaseapp.com",
    databaseURL: "https://scriptkev-web.firebaseio.com",
    projectId: "scriptkev-web",
    storageBucket: "scriptkev-web.appspot.com",
    messagingSenderId: "466208628441",
    appId: "1:466208628441:web:79c27112a33fb22f2328c8",
    measurementId: "G-0S68RBWS8W"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();
export const db = firebase.firestore();


Vue.config.productionTip = false;
// Vue.config.devtools = false

new Vue({
    router,
    store,
    vuetify,
    render: h => h(App)
}).$mount('#app')
