<template>
	<div id="app" :class="{'app-bottom':isShowFoot}">
		<router-view/>
		<div v-if="isShowFoot">
			<footMenu></footMenu>
		</div>

		<div>
			<toast v-model="toast.show" 
				type="text" :time='1200' 
				is-show-mask 
				:text="toast.text" 
				:position="'middle'" 
				width="6em">
			</toast>
		</div>

	</div>
</template>

<script>
	//document.documentElement.style.fontSize = document.documentElement.clientWidth / 7.5 + 'px';
	import footMenu from './components/Foot.vue'
	import {Toast} from 'vux'
	
	var toast = {
		show: false,
		text: "",
		alert: function (text){
			console.log("this", this)
			this.show = true;
			this.text = text;
		}
	}

	export default {
		name: 'App',
		data() {
			return {
				toast: toast,
				isShowFoot: false
			}
		},
		methods:{
			tetst(){}
		},
		components: {
			footMenu,
			Toast
		},
		watch: {
			//切换路由必定滚动到顶部
			'$route' (to, from) {　　　
//				document.body.scrollTop = 0;
//				document.documentElement.scrollTop = 0
				var pagePath = ['/home', '/cityloadArea','/findNew', '/mySelf']
				if(JSON.parse(sessionStorage.getItem('userInfo'))){
					var _userInfo=JSON.parse(sessionStorage.getItem('userInfo'))
					this.$store.state.id=_userInfo.id
					this.$store.state.userInfo =_userInfo;
				}
				if(pagePath.indexOf(to.path) != -1) {
					this.isShowFoot = true
				} else {
					this.isShowFoot = false
				}
				if(to.name=='moreDetail'&&from.name=='addressManage'){
					this.$store.state.isFromMall=true
				}else{
					this.$store.state.isFromMall=false
				}
				// 进入个人中心验证登录
				var toMySelf = to.name.indexOf('mySelf') > -1;
				var isUnLogin = !this.$store.state.id;
				if(toMySelf && isUnLogin){
					this.$router.push('/login') //FIXME
				}
			}
		},
		created(){
			// 全局弹窗
			window.$toast = toast;
		}
	}
</script>

<style>
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		/* text-align: center; */
		color: #2c3e50;
		box-sizing: border-box;
	}
	.app-bottom{
		padding-bottom: 54px;
	}
	html,
	body,
	#app {
		width: 100%;
		height: 100%;
		overflow-x: hidden;
		overflow-y: auto;
	}
	/*.footer-wrap{
	position: fixed;
	bottom: 0;
	width: 100%;
	height: auto;
}*/
</style>