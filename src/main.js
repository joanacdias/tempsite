import Vue from 'vue'
import App from './App.vue'
import router from './router'

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
