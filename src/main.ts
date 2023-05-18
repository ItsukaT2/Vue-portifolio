import App from './App.vue';
import { createApp } from 'vue';

/*
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import Toasted from 'vue-toasted';
*/


//@ts-ignore
import Clipboard from "v-clipboard"


import router from './router'

import './assets/main.css'


//library.add(fas, fab);

const app = createApp(App)

//app.component('fa', FontAwesomeIcon)

app.use(Clipboard)

//app.use(Toasted)



app.use(router)

app.mount('#app')
