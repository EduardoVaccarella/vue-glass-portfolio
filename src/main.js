import { createApp } from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import App from './App.vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import { library } from "@fortawesome/fontawesome-svg-core";
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

library.add(faLinkedinIn);
library.add(faGithub);
library.add(faEnvelope);

import './assets/main.css'

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

createApp(App)
    .component("font-awesome-icon", FontAwesomeIcon)
    .mount('#app')
