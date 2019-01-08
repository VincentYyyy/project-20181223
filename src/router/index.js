import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
	//mode:'history',
	routes: [{
		path: '/',
		name: 'home',
		redirect: {
			path:'/login'
		},
		component: resolve => require(['../pages/login/login.vue'], resolve)
	},{
		path: '/home',
		name: 'home',
		component: resolve => require(['../pages/home/home.vue'], resolve)
	}, {
		path:'/mall',
		name:'mall',
		component: resolve => require(['../pages/home/mall.vue'], resolve)
	},{
		path:'/login',
		name:'login',
		component: resolve => require(['../pages/login/login.vue'], resolve)
	},{
		path:'/forgetPassword',
		name:'forgetPassword',
		component: resolve => require(['../pages/login/forgetPassword.vue'], resolve)
	}, {
		path:'/register',
		name:'register',
		component: resolve => require(['../pages/register/register.vue'], resolve)
	},{
		path: '/cityloadArea',
		name: 'cityloadArea',
		component: resolve => require(['../pages/cityloadArea/cityloadArea.vue'], resolve)
	},{
		path:'/cityloadArea/moreList',
		name:'moreList',
		component: resolve => require(['../pages/cityloadArea/moreList.vue'], resolve)
	},{
		path:'/cityloadArea/goodsDetail',
		name:'goodsDetail',
		component: resolve => require(['../pages/cityloadArea/goodsDetail.vue'], resolve)
	},{
		//发布广告
		path:'/cityloadArea/editAd',
		name:'editAd',
		component: resolve => require(['../pages/cityloadArea/editAd.vue'], resolve)
	},{
		//领任务
		path:'/cityloadArea/getTask',
		name:'getTask',
		component: resolve => require(['../pages/cityloadArea/getTask.vue'], resolve)
	},{
		//普通任务，重大任务
		path:'/cityloadArea/getTaskList',
		name:'getTaskList',
		component: resolve => require(['../pages/cityloadArea/getTaskList.vue'], resolve)
	},{
		//任务详情
		path:'/cityloadArea/getTaskListDetail',
		name:'getTaskListDetail',
		component: resolve => require(['../pages/cityloadArea/getTaskListDetail.vue'], resolve)
	},{
		path:'/cityloadArea/share',
		name:'share',
		component: resolve => require(['../pages/cityloadArea/share.vue'], resolve)
	},{
		//订单管理主页
		path:'/cityloadArea/orderManager',
		name:'orderManager',
		component: resolve => require(['../pages/cityloadArea/orderManager.vue'], resolve),
		redirect: {
			path:'/cityloadArea/orderImperfect'
		},
		children:[{
			//订单管理主页/待完成
			path:'/cityloadArea/orderImperfect',
			name:'orderImperfect',
			component: resolve => require(['../pages/cityloadArea/orderImperfect.vue'], resolve)	
		},{
			//订单管理主页/待审核
			path:'/cityloadArea/orderAuditing',
			name:'orderAuditing',
			component: resolve => require(['../pages/cityloadArea/orderAuditing.vue'], resolve)	
		},{
			//订单管理主页/已完成
			path:'/cityloadArea/orderFinish',
			name:'orderFinish',
			component: resolve => require(['../pages/cityloadArea/orderFinish.vue'], resolve)	
		},{
			//订单管理主页/已驳回
			path:'/cityloadArea/orderReject',
			name:'orderReject',
			component: resolve => require(['../pages/cityloadArea/orderReject.vue'], resolve)	
		}]
	},{
		//订单管理主页/待完成
		path:'/cityloadArea/orderImperfect',
		name:'orderImperfect',
		component: resolve => require(['../pages/cityloadArea/orderImperfect.vue'], resolve)	
	},{
		path:'/cityloadArea/orderTaskDetail',
		name:'orderTaskDetail',
		component: resolve => require(['../pages/cityloadArea/orderTaskDetail.vue'], resolve)	
	},{
		//订单管理主页/待审核
		path:'/cityloadArea/orderAuditing',
		name:'orderAuditing',
		component: resolve => require(['../pages/cityloadArea/orderAuditing.vue'], resolve)	
	},{
		//订单管理主页/已完成
		path:'/cityloadArea/orderFinish',
		name:'orderFinish',
		component: resolve => require(['../pages/cityloadArea/orderFinish.vue'], resolve)	
	},{
		//订单管理主页/已驳回
		path:'/cityloadArea/orderReject',
		name:'orderReject',
		component: resolve => require(['../pages/cityloadArea/orderReject.vue'], resolve)	
	},{
		path:'/cityloadArea/rejectDetail',
		name:'rejectDetail',
		component: resolve => require(['../pages/cityloadArea/rejectDetail.vue'], resolve)	
	},{
		//任务下架状态
		path:'/cityloadArea/taskUnshelve',
		name:'taskUnshelve',
		component: resolve => require(['../pages/cityloadArea/taskUnshelve.vue'], resolve)		
	},{
		//任务审核中
		path:'/cityloadArea/applicationAudit',
		name:'applicationAudit',
		component: resolve => require(['../pages/cityloadArea/applicationAudit.vue'], resolve)	
	},{
		//提交任务审核
		path:'/cityloadArea/submitAudit',
		name:'submitAudit',
		component: resolve => require(['../pages/cityloadArea/submitAudit.vue'], resolve)	
	},{
		//幸福村
		path: '/findNew',
		name: 'findNew',
		component: resolve => require(['../pages/findNew/findNew.vue'], resolve)
	},{
		path: '/mySelf',
		name: 'mySelf',
		component: resolve => require(['../pages/mySelf/mySelf.vue'], resolve)
	}]
})