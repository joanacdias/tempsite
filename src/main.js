import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'vue-awesome/icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'

library.add(faLinkedinIn, faInstagram, faEnvelope)

Vue.component('font-awesome-icon', FontAwesomeIcon)

import Vuex from 'vuex'
Vue.use(Vuex)

import storePlugin from './storePlugin'
Vue.use(storePlugin)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	template: '<App/>',
	components: { App },
})
