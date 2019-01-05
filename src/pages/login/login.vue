<template>
	<div class="login">
		<div class="login-title">
			登录八八商城
		</div>
		<div class="logo-wrap">
		</div>
		<div class="login-input-wrap">
			<div>
				<input type="text" placeholder="手机号" id="username" v-model="user.username">
			</div>
			<div class="set-pt">
				<input type="password" placeholder="密码" id="pwd" v-model="user.password">
			</div>
		</div>
		<div class="login-btn-wrap">
			<div @click="login">
				登录
			</div>
		</div>
		<div class="flex-start-end password-register">
			<div @click="forgetPassWord">
				忘记密码?
			</div>
			<div @click="register">
				<strong>
					手机注册
				</strong>
			</div>
		</div>
		<toast v-model="showErr" type="text" :time='1200' is-show-mask :text="errContent"  :position="'middle'" width="3.4em"></toast>
		<div class="islogining"v-if="islogining">
			<load-more :tip="'登录中'"></load-more>
		</div>
	</div>
</template>

<script>
	import {Divider,Toast,LoadMore,TransferDomDirective as TransferDom,Alert} from 'vux'
//	import cmheader from '../components/CmHeader.vue'
//	import Tab from '../components/Tab.vue'
	export default {
		name: 'login',
		directives: {
		    TransferDom
		  },
		components: {
//			cmheader,
			Divider,
			LoadMore,
			Toast
		},
		data() {
			return {
				errContent:'账号不能为空',
				showErr:false,
				islogining:false,
				user:{
					username:'',
					password:'111111'
				}
			}
		},
		methods:{
			forgetPassWord(){
				this.$gotoPages('/forgetPassword')
			},
			register(){
				this.$gotoPages('/register')
			},
			goPrev(){
				//this.$gotoPages('/Main')
				this.$store.state.nowIndex=3
				this.$gotoPages('/myself')
//				console.log(this.$getCookie('uid'))
//				if(this.$getCookie('uid')!=undefined){
//					
//					this.$router.back()
//				}else{
//					this.$gotoPages('/Main')
//				}
				
			},
			isChecked(){
				if(this.user.username==''){
					this.errContent='账号不能为空'
					document.getElementById('username').focus()
					this.showErr=true
					return false
				}
				if(this.user.password==''){
					this.errContent='密码不能为空'
					document.getElementById('pwd').focus()
					this.showErr=true
					return false
				}
				
				return true
			},
			login(){
				if(this.isChecked()){
					if(this.islogining){
						return false
					}
					var _this=this
					var user=_this.user
					_this.islogining=true
					this.$axios.get(_this.domain+'/Account/login/g/1?username='+user.username+'&password='+user.password).then(function(res){
						if(res.status=='200'){
							if(res.data.status==1){
								_this.$setCookie('uid',res.data.data.uid)
								_this.$setCookie('username',res.data.data.nickname)
								_this.$setCookie('userLevel',res.data.data.userLevel)
								_this.$setCookie('loginToken',res.data.data.loginToken)
								_this.$setCookie('mobile',res.data.data.mobile)
								_this.$store.state.uid=res.data.data.uid
								_this.$store.state.username=res.data.data.username
								_this.$store.state.loginToken=res.data.data.loginToken
								_this.$store.state.logined=true								
								_this.$store.state.nowIndex=3
								setTimeout(function(){
									_this.$gotoPages('/myself',{loginToken:res.data.data.loginToken,uid:res.data.data.uid})
								},1000)
							}else if(res.data.status==0){
								console.log(2)
								if(res.data.errorcode){
									setTimeout(function(){
									_this.islogining=false
									_this.errContent=res.data.message
									_this.showErr=true
								},1000)
								}else{
									setTimeout(function(){
									_this.islogining=false
									_this.errContent='账号或密码有误'
									_this.showErr=true
								},1000)
								}						
							}			
						}/*else if(res.status=='0'){
							_this.errContent='连续登录错误超过最大次数，请1小时后再试'
							_this.showErr=true
						}*/
					}).catch(function(err){
						console.log(err)
					})
				}
				
			},
			clearLocalStorage(){
				window.localStorage.clear()
			}
		},
		mounted(){
			//this.clearLocalStorage()
		}
	}
</script>

<style lang="less">
	.set-pt{
		padding-top: .34rem;
	}
	.password-register{
		line-height: .12rem;
		font-size: 12px;
		div{
			color: #333333;
		}
	}
	.login {
		padding: 1.5rem .62rem .4rem;
	}
	.login-title{
		font-size: 27px;
		line-height: 27px;
		text-align: left;
		color:#1a1a1a;
		padding-bottom: 1rem;
	}
	p.weui-toast__content{
    	color: #FFFFFF;
	}
	.logo-wrap img{
		margin-top: .5rem;
		margin-bottom: 1rem;
		height: 2rem;
		width: auto;
	}
	.login-input-wrap{
		margin-bottom: 1rem;
		.flex-start{
			padding-bottom: .4rem;
		}
		>div{
			overflow: hidden;
		}
		input{
			float: left;
			outline: none;
			border: none;
			color: #333333;
			font-size: .28rem;
			width: 100%;
			line-height: .88rem;
			border-bottom: 1px solid #f5f5f5;
		}
	}
	.other-way-login >div:last-child{
		border-bottom: 1px solid #999999;
		width: 2rem;
		margin: 0 auto;
		color: #999999!important;
		margin-top: .24rem;
		margin-bottom: .2rem;
	}
	.login-btn-wrap{
		div{
			border:1px solid #ddd;
			line-height: .86rem;
			height: .86rem;
			text-align: center;
			box-sizing: border-box;
			font-size: 18px;
			border-radius: .2rem;
			margin-bottom: .36rem;
		}
	}
</style>