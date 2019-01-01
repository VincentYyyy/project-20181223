<template>
	<div class="login">
		<img src="" @click="goBack" class="forget-go-back">
		<div class="login-title">
			找回密码
		</div>
		<div class="logo-wrap">
		</div>
		<div class="login-input-wrap">
			<div>
				<input type="text" placeholder="手机号" id="username" v-model="user.username">
			</div>
			<div class="set-pt flex-start">
				<div>
					<input type="number" placeholder="验证码" id="checkNumber" v-model="user.checkNumber">
				</div>
				<div class="check-btn">
					发送验证码
				</div>
			</div>
		</div>
		<div class="login-btn-wrap">
			<div @click="findPassSubmit">
				确定
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
					checkNumber:'111111'
				}
			}
		},
		methods:{
			goBack(){
				window.history.go(-1)
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
					this.errContent='手机号不能为空'
					document.getElementById('username').focus()
					this.showErr=true
					return false
				}
				if(this.user.checkNumber==''){
					this.errContent='验证码不为空'
					document.getElementById('checkNumber').focus()
					this.showErr=true
					return false
				}
				return true
			},
			findPassSubmit(){
				
			},
			clearLocalStorage(){
				window.localStorage.clear()
			}
		},
		mounted(){
			
		}
	}
</script>

<style lang="less">
	.forget-go-back{
		position: fixed;
		top: .2rem;
		left: .2rem;
		display: inline-block;
		width: .44rem;
		height: .44rem;
	}
	#checkNumber{
		width: 3.8rem;
	}
	.check-btn{
		color: #e03228;
	}
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
		/*.flex-start{
			padding-bottom: .4rem;
		}*/
		>div{
			overflow: hidden;
		}
		input{
			float: left;
			outline: none;
			border: none;
			color: #333333;
			font-size: .28rem;
			padding-left: .3rem;
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
			box-sizing: border-box;
			height: .86rem;
			text-align: center;
			font-size: 18px;
			border-radius: .2rem;
			margin-bottom: .36rem;
		}
	}
</style>