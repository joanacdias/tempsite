import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/views/Home'
import ObjectOrientedUX from '@/views/ObjectOrientedUX'

Vue.use(Router)

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home,
	}, {
		path: '/ooux',
		name: 'ooux',
		component: ObjectOrientedUX,
	},
]

export default new Router({
	mode: 'history',
	routes: routes,
})