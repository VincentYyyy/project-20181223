<template>
	<div class="myself home">
		<cmheader :title="'个人中心'"></cmheader>

		<!-- <div class="cm-header ">
			<img src="../../../static/myself/set_icon@2x.png" class="pre">
			<div class="p1p">个人中心		
			</div>
		</div> -->

		<!-- 头部占位 -->
		<div class="u-header-padding" ></div>

		<!-- 个人信息 -->
		<div class="m-details" v-show="commond.pageState === 'details'">

			<div class="c-list-item c-list-item-raw">
				<div class="c-item-label">
					<label class="f-fs-16">
						{{ details.userImg.label }}
					</label>
				</div>
				<div class="c-item-content"
					@click="details.userImg.onClick"
				>
					<div>
						<img class="head-portrail" 
							:src="details.userImg.img" 
							@click="details.userImg.onClick()">
					</div>
					<div class="c-item-raw-right"></div>
				</div>
			</div>

			<div v-for="item in details.items" 
				class="c-list-item c-list-item-raw" 
				@click="item.onClick(item)"
			>
				<div class="c-item-label f-gray-2">
					<label class="f-fs-16"> {{item.label}} </label>
				</div>
				<div class="c-item-content"
				>
					<div v-if="item.filterType"
						:class="item.class"
						class="f-fs-14"
					>
						{{ item.content | filterFactory(item.filterType) }}
					</div>
					<div v-else
						:class="item.class"
						class="f-fs-14"
					>
						{{ item.content }}
					</div>
							
					<div v-if="item.rawRight" class="c-item-raw-right"></div>
				</div>
			</div>
		
		</div>

		<!-- 输入昵称 -->
		<div class="m-name-input" v-if="commond.pageState === 'nameInput'">
			<div class="c-list-item">
				<input  type="text" placeholder="输入昵称">
			</div>
		</div>

		<popup v-model="popup.show" >
			<div class="m-popup popoup-select-headport" height="300">
			<div class="m-selector">
				<div class="header">
					选择头像
				</div>
				<div class="haederpoit-list">
					<div class="list-item">

							<div class="wrap f-clear">
								<img class="headpoint" src="../../img/myself/男@2x.png" alt="">
								<div class="checkbox">钩</div>
								<label>男</label>
							</div>
							
					</div>
					<div class="list-item">
							<div class="wrap f-clear">
								<img class="headpoint" src="../../img/myself/女@3x.png" alt="">
								<div class="checkbox">钩</div>
								<label>女</label>
							</div>
					</div>
					<div class="list-item">
							<div class="wrap f-clear">
								<img class="headpoint" src="../../img/myself/老@2x.png" alt="">
								<div class="checkbox">钩</div>
								<label>老</label>
							</div>
					</div>
					<div class="list-item">
							<div class="wrap f-clear">
								<img class="headpoint" src="../../img/myself/少@2x.png" alt="">
								<div class="checkbox">钩</div>
								<label>少</label>
							</div>
					</div>
				</div>
			</div>
			<div class="cancel">
				取消
			</div>
			</div>
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
				details: {
					userImg:{
						label: '头像',
						img: require('../../img/myself/男@2x.png'),
						rawRight: true,
						onClick: function(){
							popup.show = true;
						}
					},
					items:[{
						label: '昵称',
						content: '欧阳诸葛',
						rawRight: true,
						onClick: function(){
							common.pageState = "nameInput";
						},
						class: {
							'f-gray-2': true
						}
					},{
						label: '手机号码',
						content: '12345678901',
						filterType: 'phone',
						class: {
							'f-gray-1': true
						}
					},{
						label: '身份证',
						content: '12345678890123',
						filterType: "identify",
						class: {
							'f-gray-1': true
						}
					}]
				},

				isLogined:false,
				random:'',
				user:{
					username:'',
					img:require('../../img/myself/nav6.jpg'),
				//	img:require('../img/myself/nav6.jpg'),
					lv:'../../static/myself/vip_icon@2x.png',
					mobile:'',
					userLevel:''
				},
				tabsList:[{
					title:'我的档案',
					href:'/myself/myflie'
				},{
					title:'会员中心',
					href:'/myself/VipCenter'
				},{
					title:'订单管理',
					href:'/myself/ordermanager'
				}],
				linkList:[{
					title:"我的消息",
					img:'../../../static/myself/wdxx_icon@2x.png',
					href:'/myself/MyMsg'
				},{
					title:'学习进度',
					img:'../../../static/myself/xxjd_icon@2x.png',
					href:'/myself/studystage'
				},{
					title:'我的收藏',
					img:'../../../static/myself/wdsc_icon@2x.png',
					href:'/myself/testing-report'
				},{
					title:'我的关注',
					img:'../../../static/myself/wdgz_icon@2x.png',
					href:'/myself/myattention'
				},{
					title:'我的缓存',
					img:'../../../static/myself/wdhc_icon@2x.png',
					href:'/myself/Cache'
				},{
					title:'意见反馈',
					img:'../../../static/myself/yjfk_icon@2x.png',
					href:'/myself/complain'
				}]
			}
		},
		methods:{
			
			toLink(href){
				if(!this.isLogined){
					this.$gotoPages('/login')
				}else{
					this.$gotoPages(href)
				}
			},
			showPopUp(){
				this.$store.state.isShowPop=true				
			},
			initUserInfo(){	
				if(this.$cookie.get('uid')=='undefined'){
					this.isLogined=false
				}else{
					console.log('11111')
					this.user.username=this.$cookie.get('username')
					this.user.mobile=this.$cookie.get('mobile')
					this.user.userLevel=this.$cookie.get('userLevel')
					this.isLogined=true
				}
			}
		},
		components:{
			XButton,
			Popup,
			cmheader
		},
		created(){
			this.initUserInfo()
		}
	}
</script>

<style lang="less" scoped>
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
		.c-list-item{
			padding-right: 0.6rem;

			.c-item-raw-right{
				margin-left: 0.15rem;
				margin-right: -0.44rem;
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