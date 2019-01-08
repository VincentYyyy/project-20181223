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
	},
	
	// 个人中心
	{
		path: '/mySelf',
		name: 'mySelf',
		component: resolve => require(['../pages/mySelf/mySelf.vue'], resolve)
	}, {
		path: '/mySelf-identification',
		name: 'mySelf-identification',
		component: resolve => require(['../pages/mySelf-identification/identification.vue'], resolve)
	}, {
		path: '/mySelf-userinfor',
		name: 'mySelf-userinfor',
		component: resolve => require(['../pages/mySelf-userinfor/userinfor.vue'], resolve)
	}, {
		path: '/mySelf-acount',
		name: 'mySelf-acount',
		component: resolve => require(['../pages/mySelf-acount/acount.vue'], resolve)
	}, {
		path: '/mySelf-acount-password',
		name: 'mySelf-acount-password',
		component: resolve => require(['../pages/mySelf-acount-password/password.vue'], resolve)
	}, {
		path: '/mySelf-setting',
		name: 'mySelf-setting',
		component: resolve => require(['../pages/mySelf-setting/setting.vue'], resolve)
	}, {
		path: '/mySelf-conect',
		name: 'mySelf-conect',
		component: resolve => require(['../pages/mySelf-conect/conect.vue'], resolve)
	}, {
		path: '/mySelf-myTeam',
		name: 'mySelf-myTeam',
		component: resolve => require(['../pages/mySelf-myTeam/myTeam.vue'], resolve)
	}, {
		path: '/mySelf-myTeam-vipList',
		name: 'mySelf-myTeam-vipList',
		component: resolve => require(['../pages/mySelf-myTeam-vipList/vipList.vue'], resolve)
	}, 
	
	// 个人中心 - 钱包
	{
		path: '/mySelf-wallet',
		name: 'mySelf-wallet',
		component: resolve => require(['../pages/mySelf-wallet/wallet.vue'], resolve)
	},{
		path: '/mySelf-wallet-bind',
		name: 'mySelf-wallet-bind',
		component: resolve => require(['../pages/mySelf-wallet-bind/wallet-bind.vue'], resolve)
	},{
		path: '/mySelf-wallet-pickup',
		name: 'mySelf-wallet-pickup',
		component: resolve => require(['../pages/mySelf-wallet-pickup/wallet-pickup.vue'], resolve)
	}, {
		path: '/mySelf-budget',
		name: 'mySelf-budget',
		component: resolve => require(['../pages/mySelf-budget/budget.vue'], resolve),
		children:[{
			path: '/budget-panel',
			name: 'budget-panel',
			component: resolve => require(['../pages/mySelf-budget/budget-panel.vue'], resolve)
		}]
	}]
})