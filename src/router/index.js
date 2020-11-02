import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/views/Home'

const Error404 = { template: "<div>404 Error. Page not found</div>" };

Vue.use(Router)

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home,
	}, {
		path: '*',
		name: 'Error404',
		component: Error404,
	},
]

export default new Router({
	mode: 'history',
	routes: routes,
})