import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
	//mode:'history',
	routes: [{
		path: '/',
		name: 'home',
		redirect: {
			path:'/home'
		},
		component: resolve => require(['../pages/home/home.vue'], resolve)
	},{
		path: '/home',
		name: 'home',
		component: resolve => require(['../pages/home/home.vue'], resolve)
	}, {
		path: '/cityloadArea',
		name: 'cityloadArea',
		component: resolve => require(['../pages/cityloadArea/cityloadArea.vue'], resolve)
	}, {
		path: '/findNew',
		name: 'findNew',
		component: resolve => require(['../pages/findNew/findNew.vue'], resolve)
	}, {
		path: '/mySelf',
		name: 'mySelf',
		component: resolve => require(['../pages/mySelf/mySelf.vue'], resolve)
	}]
})