<template>
	<div class="myself home">
		<div class="cm-header ">
			<img src="../../../static/myself/set_icon@2x.png" class="pre">
			<div class="p1p">我的		
			</div>
		</div>
		<div class="myself-t mt09">
			<div class="myself-info">
				<div  v-if="isLogined">
					<div>
						<img :src="user.img">
						<img :src="user.lv" class="flag" v-if="user.userLevel!=''">
					</div>
					<div>
						<div>
							您好，{{user.username}}
						</div>
						<div class="transparent-7-10">
							ID:{{user.mobile}}
						</div>
					</div>
				</div>
				<div v-else>
					<div>
						<img src="../../img/appicon/people_icon2@2x.png" class="tourist">
					</div>
					<div>
						您好,游客
					</div>
					<div class="transparent-7-10 no-logined" @click="$gotoPages('/login')">
						未登录,去登录
					</div>
				</div>
			</div>
		</div>
		<div class="myself-tabs flex-container flex-item-3">
			<div v-for="item in tabsList" class="flex-item" @click="toLink(item.href)">
				<div>
					{{item.title}}
				</div>
			</div>
		</div>
		<div class="myself-links">
			<div v-for="item in linkList" @click="toLink(item.href)">
				<div class="flex-container-start-end ">
					<div class="flex-item ">
						<div class="flex-container-middle">
							<img :src="item.img"><span>{{item.title}}</span>
						</div>					
					</div>
					<div class="flex-item">
						<img src="../../img/appicon/trangle-r1.png">
					</div>
				</div>
			</div>
			<div  @click="toLink()">
				<div class="flex-container-start-end ">
					<div class="flex-item ">
						<div class="flex-container-middle">
							<img src="../../img/appicon/myselflist.png" style="opacity: 0;">
							<div class="flex-container-middle">推荐<div class="flex-item price">曙光情感</div>给好友</div>
						</div>					
					</div>
					<div class="flex-item">
						<img src="../../img/appicon/trangle-r1.png">
					</div>
				</div>
			</div>
		</div>
		<div class="btn-wrap" @click="showPopUp" v-if="isLogined">
			<x-button type="warn">退出登录</x-button>
		</div>
	</div>
</template>

<script>
	import { XButton } from 'vux'
	export default{
		name:'myself',
		data(){
			return{
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
			XButton
		},
		created(){
			this.initUserInfo()
		}
	}
</script>

<style lang="less" scoped>
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