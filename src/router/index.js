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
	}, {
		path: '/mySelf-identification',
		name: 'mySelf-identification',
		component: resolve => require(['../pages/mySelf-identification/identification.vue'], resolve)
	}, {
		path: '/mySelf-password',
		name: 'mySelf-password',
		component: resolve => require(['../pages/mySelf-password/password.vue'], resolve)
	}, {
		path: '/mySelf-setting',
		name: 'mySelf-setting',
		component: resolve => require(['../pages/mySelf-setting/setting.vue'], resolve)
	}, {
		path: '/mySelf-myTeam-vipList',
		name: 'mySelf-myTeam-vipList',
		component: resolve => require(['../pages/mySelf-myTeam-vipList/vipList.vue'], resolve)
	}, {
		path: '/budget',
		name: 'budget',
		component: resolve => require(['../pages/budget/budget.vue'], resolve),
		children:[{
			path: '/budget-panel-0',
			name: 'budget-panel-0',
			component: resolve => require(['../pages/budget/budget-panel-0.vue'], resolve)
		},{
			path: '/budget-panel-1',
			name: 'budget-panel-1',
			component: resolve => require(['../pages/budget/budget-panel-1.vue'], resolve)
		},{
			path: '/budget-panel-2',
			name: 'budget-panel-2',
			component: resolve => require(['../pages/budget/budget-panel-2.vue'], resolve)
		}]
	}]
})