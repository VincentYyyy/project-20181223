<template>
	<div class="myself home">

		<div class="m-bg">

		</div>

		<div class="m-user">
			<div class="container">	
				<div @click="toLink({toPageUrl: '/mySelf-userinfor'})">
					<img class="user-headport" :src="user.img" alt="">
					<p class="user-name">
						<span class="f-fs-18">{{user.name}}</span>
						<i class="i-raw-right"></i>
					</p>
					<p class="user-phone f-gray-1 f-sz-18"
						v-if="user.phone"
					>
						手机号：{{user.phone}}
					</p>
				</div>
				<div class="wallet-details">
					<div class="item">
						<p class="num f-fs-18 f-fw-b">{{wallet.sum}}</p>
						<p class="label f-fs-12 f-gray-1">总余额</p>
					</div>
					<div class="item">
						<p class="num f-fs-18 f-fw-b">{{wallet.incommonyes}}</p>
						<p class="label f-fs-12 f-gray-1">昨日收入</p>
					</div>
					<div class="item">
						<p class="num f-fs-18 f-fw-b">{{wallet.pickedup}}</p>
						<p class="label f-fs-12 f-gray-1">已提现</p>
					</div>
				</div>
			</div>
		</div>

		<!-- 个人信息 -->
		<div class="m-details" v-show="commond.pageState === 'details'">
			
			<template v-for="item in details.items">
				<div class="c-list-item c-list-item-raw noborder"
					v-if="item.type !== 'line'"
					@click="toLink(item)"
				>
					<div class="c-item-label f-gray-2"
					>
						<img class="label-icon" v-if="item.icon" :src="getIconUrl(item)" alt="">
						<label class="f-fs-14"> {{item.label}} </label>
					</div>
					<div class="c-item-content"
					>
						<div
							v-if="!hasIdentified && item.content"
							:class="item.class"
							class="f-fs-14"
						>
							{{ item.content }}
						</div>
								
						<div v-if="item.rawRight" class="c-item-raw-right"></div>
					</div>
				</div>

				<hr class="line-item" v-if="item.type === 'line'">
			</template>
		
		</div>

		<!-- 输入昵称 -->
		<div class="m-name-input" v-if="commond.pageState === 'nameInput'">
			<div class="c-list-item">
				<input  type="text" placeholder="输入昵称">
			</div>
		</div>

		<popup v-model="popup.show" >
		</popup>		
	</div>
</template>

<script>
	import cmheader from '../../components/cmHeader.vue'
	import { XButton, Popup } from 'vux'	
	
	var popup ={show: false}
	var common = {
		pageState: 'details'
	}

	export default{
		name:'myself',
		filters: {
			filterFactory: function(value, type){
				var filter = {
					phone: function(value){
						return "TODO " + value
					},
					identify: function(){
						return "TODO " + value
					}
				}[type];

				return filter(value);
			},
		},
		data(){
			return{
				popup: popup,
				commond: common,
				hasIdentified: false,
				user:{
					name:'欧阳诸葛',
					img: require('../../img/myself/man.png'),
					phone:'169838929193',
					userLevel:''
				},
				details: {
					sum: 0,

					items:[{
							label: '钱包',
							icon: 'wallet',
							content: '',
							rawRight: true,
							toPageUrl: '/mySelf-wallet',
							class: {
								'f-gray-2': true
							}
						},{
							label: '收支明细',
							icon: 'budget',
							rawRight: true,
							toPageUrl: '/mySelf-budget',
							class: {
								'f-gray-1': true
							}
						}, {
							label: '认证中心',
							icon: 'identification',
							rawRight: true,
							toPageUrl: '/mySelf-identification',
							content: "未认证",
							class: {
								'f-gray-1': true
							}
						}, {
							label: '我的团队',
							icon: 'myTeam',
							rawRight: true,
							toPageUrl: '/mySelf-myTeam',
							class: {
								'f-gray-1': true
							}
						}, {
							label: '邀请有奖',
							icon: 'invite',
							rawRight: true,
							class: {
								'f-gray-1': true
							}
						}, {
							label: '横线',
							type: 'line'
						}, {
							label: '账号与安全',
							icon: 'acount',
							rawRight: true,
							toPageUrl: '/mySelf-acount',
							class: {
								'f-gray-1': true
							}
						}, {
							label: '关于我们',
							icon: 'about',
							rawRight: true,
							class: {
								'f-gray-1': true
							}
						}, {
							label: '联系我们',
							icon: 'conect',
							rawRight: true,
							toPageUrl: '/mySelf-conect',
							class: {
								'f-gray-1': true
							}
						}, {
							label: '设置',
							icon: 'setting',
							rawRight: true,
							toPageUrl: '/mySelf-setting',
							class: {
								'f-gray-1': true
							}
						}
					]
				},
				wallet: {
					sum:0,
					incommonyes:0,
					pickedup:0
				}
			}
		},
		methods:{
			getIconUrl: function(item){
				return require("../../img/myself/i-" + item.icon + ".png" );
			},
			toLink(item){
				if(item.toPageUrl){
					if(item.label === "认证中心" && this.hasIdentified){
						this.$gotoPages('/mySelf-userinfor')
						return;
					}
					this.$gotoPages(item.toPageUrl)
				}
			},
			showPopUp(){
				this.$store.state.isShowPop=true				
			},
			getUserDetail(){
				var self = this;
				var params={
					id:this.$store.state.id,
				}
				params=this.$qs.stringify(params);
				this.$axios({
					method:'post',
					data:params,
					url:'/appApi/appUsers/getUserDetail'
				}).then(function(res){
					var data = res.data;
					if(data && data.status=='200'){
						var userinfor = res.data.data;
						self.$resetUserInfor(userinfor);
						self.user.name = userinfor.nickName || '未设置昵称';
						self.user.phone = userinfor.phone;
						self.hasIdentified = !!userinfor.userName;
					}
				}).catch(function(err){
					
				})
			},
			getBalance(){
				var params={
					id:this.$store.state.id,
				}
				params=this.$qs.stringify(params);
				this.$axios({
					method:'post',
					data:params,
					url:'/appApi/appUsers/getBalance'
				}).then(function(res){
					var data = res.data;
					if(data && data.status=='200'){
						// if(getData.status=='200'){
						// console.log("getBalance",res);
						// }else{

						// }

					}
				}).catch(function(err){
					
				})
			}
		},
		components:{
			XButton,
			Popup,
			cmheader
		},
		created(){
			this.getBalance();
			this.getUserDetail();
		}
	}
</script>

<style lang="less" scoped>
.m-bg{
	height: 3.6rem;
	background: url(../../img/myself/myself-bg.png) no-repeat;
	background-size: 100% 100%;
	margin-bottom: 2.2rem;
}

.m-user{
	position: absolute;
	top: 1.7rem;
	width: 90%;
	left: 50%;
	margin-left: -45%; 
	background: #FFFFFF;
	border-radius: 0.15rem;
	box-shadow: #eaeaea 0.021rem 0.1rem 0.5rem;

	.container{
		position: relative;
		width: 100%;
		height: 100%;
		padding-top: 0.95rem; 

		.user-headport{
			width: 1.7rem;
			height: 1.7rem;
			border-radius: 0.85rem;
			left: 50%;
			display: block;
			position: absolute;
			margin-top: -1.8rem; 
			margin-left: -0.85rem; 
		}

		.user-name{
			font-size: 0.25rem;
			text-align: center;
			position: relative;
			margin-bottom: 0.2rem;

			span{
				font-size: 20px;
			}

			.i-raw-right{
				height: 0.3rem;
				width: 0.3rem;
				position: absolute;
				right: 0.3rem;
				top: 50%;
				margin-top: -0.15rem;
			}
		}

		.user-phone{
			text-align: center;
			font-size: 0.16rem;
			margin-bottom: 0.3rem;
		}

		.wallet-details{
			height: 1.3rem;
			display: flex;
			justify-content: center;
			border-top: 0.01rem solid #f5f5f5;

			.item{
				width: 100%;
				padding: 0.2rem 0;

				.num{
					font-size: 16px;
					text-align: center;
					margin-bottom: 0.1rem;
				}

				.label{
					text-align: center;
				}
			}
		}
	}
}


.myself{
	.m-popup{
		height: 6rem;
		.header{
			padding: 0.4rem 0;
		}

		.haederpoit-list{
			flex-wrap: wrap;
			display: flex;
			justify-items: 2;
			justify-content: center;

			.list-item{
				flex-basis: 50%;
				height: 1.7rem;

				.wrap{
					// &>div{
					// 	display: block;
					// }
					width: 1.25rem;
					margin: 0 auto;
					
					.headpoint{
						float: left;
						display: inline-block;
						width: 0.8rem;
						height: 0.8rem;
						border-radius: 0.25rem; 
					}
					.checkbox{
						float: right;
						display: inline-block;
						line-height: 0.8rem;
						height: 0.8rem;
						width: 0.45rem;
					}
					label{
						width: 0.8rem;
						float: left;
						display: block;
						padding: 0.12rem 0;
					}
				}
				
			}
		}
	}

	.m-details{
		.line-item{
			border: 0.01rem solid #f5f5f5;
		}
		.c-list-item{
			padding-right: 0.6rem;

			.c-item-label .label-icon{
				height: 0.35rem;
				width: 0.35rem;
				margin-right: 0.2rem;
			}

			.c-item-raw-right{
				margin-left: 0.15rem;
				margin-right: -0.15rem;
			}

			.c-item-content{
				.head-portrail{
					width: 1.25rem;
					height: 1.25rem;
					border-radius: 0.625rem;
				}
			}
		}

		.right-raw{
			width: 0.24rem;
			height: 0.33rem;
			margin-left: 0.15rem;
			margin-right: -0.44rem;
		}

		.item.user-headport{
			img.head-portrail {
				width: 1.25rem;
				height: 1.25rem;
				border-radius: 0.625rem;
			}
			img.right-raw{
				width: 0.24rem;
				height: 0.33rem;
			}
		}

		.item{
			padding: 0.24rem 0.6rem 0.24rem 0.16rem;
			box-sizing: border-box;
			border-bottom: 1px solid #000;
			flex-wrap: nowrap;

			label{
				text-align: left;
				display: inline-block;
			}

			.content{
				.right-raw{
					display: block;
				}
			}
		}
	}
}

 
 .home{
	position: relative;	
 }

 .myself-t {
        /*background: url(../img/bg/wd_bg@2x.png);*/
        height: 3.14rem;
        padding-top: .34rem;
        box-sizing: border-box;
        background-size: 100% 100%;
        background-position: 8px 1px;
        .myself-info {
            div {
                text-align: center;
                line-height: .5rem;
                font-size: 18px;
                color: #FFFFFF ;
            }
            .transparent-7-10 {
                font-size: 12px;
            }
            .no-logined{
			 	font-size: 16px;
			 	width: 2.3rem;
			 	border-bottom: 1px solid #FFFFFF;
			 	margin: 0 auto;
			 }
            img {
                margin: 0 auto;
                width: 1.18rem;
                display: block;
                height: 1.18rem;
            }
		    .tourist{
			 	width: 1rem;
			 	height: 1rem;
			 	margin-bottom: .13rem;
			 }
            img.flag {
                margin-top: .08rem;
                width: .8rem;
                height: auto;
            }
        }
    }
</style>