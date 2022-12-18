import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'

import './assets/css/base.css';
import './assets/css/animate.min.css';
import './assets/css/bootstrap.min.css';
import './assets/css/font-awesome.min.css';
import './assets/css/helper.min.css';
import './assets/css/ionicons.min.css';
import './assets/css/jquery.mb.YTPlayer.min.css';
import './assets/css/leaflet.min.css';
import './assets/css/magnific-popup.min.css';
import './assets/css/nice-select.min.css';
import './assets/css/slick.min.css';
import './assets/css/slicknav.min.css';
import './assets/css/style.css';
import './assets/css/style.min.css';
import './assets/css/main.css'

const app = createApp(App)

app.use(router)
app.mount('#app')
app.use(VueAxios, axios)
