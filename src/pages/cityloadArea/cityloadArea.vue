<template>
	<div class="cityload-area">
		<div class="home-title">
			城主专区
		</div>
		<div class="home-content">
			<div>
				<div class="swiper">
			<swiper :list="swiperList" :show-dots="false" v-model="swiperIndex" @on-index-change="swiperonIndexChange"></swiper>
		</div>
		<div class="flex-start-end static-ad-list" style="padding-top: .1rem;">
			<div>
				精选
			</div>
			<div @click="moreList">
				更多礼包
			</div>
		</div>
		<div class="flex-item-4 flex-start cityLoadList">
			<div v-for="(item,index) in cityLoadList"  @click="goDetail(item.href)">
				<img :src="item.img">
				<p>{{item.p}}</p>
			</div>
		</div>
		<div>
			<!--<Popup v-model="show3">
	        <div class="popup2">
	          this is the first popup
	        </div>
	     </Popup>-->
			</div>
		</div>
		</div>
		<toast v-model="showErr" type="text" :time='1200' is-show-mask :text="errContent"  :position="'middle'" width="auto"></toast>
	</div>
</template>

<script>
	import { Icon,Popup,Toast } from 'vux'
	import { Swiper,SwiperItem} from 'vux'
	const baseList = [{
	  url: 'http://www.baidu.com',
	  img: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vvsr72j20p00gogo2.jpg',
//	  title: '送你一朵fua'
	}, {
	  url: 'javascript:',
	  img: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vw1k2wj20p00goq7n.jpg',
//	  title: '送你一辆车'
	}]
	export default{
		name:'cityloadArea',
		data(){
			return{
				showErr:false,
				errContent:'功能暂未开放',
				swiperList: baseList,
				swiperIndex:0,
//				show3:true,
				cityLoadList:[{
					p:'赚钱模式',
					img:'../../../static/chicon/cityload/矢量智能对象@2x.png'
				},{
					p:'发布广告',
					img:'../../../static/chicon/cityload/发布广告@2x.png',
					href:'/cityloadArea/editAd'
				},{
					p:'推广二维码',
					img:'../../../static/chicon/cityload/推广二维码@2x.png',
					href:'/cityloadArea/share'
				},{
					p:'领取任务',
					img:'../../../static/chicon/cityload/领取任务@2x.png',
					href:'/cityloadArea/getTask'
				},{
					p:'提交任务',
					img:'../../../static/chicon/cityload/提交任务@2x.png',
					href:'/cityloadArea/orderManager'
				},{
					p:'拼多多',
					img:'../../../static/chicon/cityload/拼多多@2x.png'
				},{
					p:'竞投中心',
					img:'../../../static/chicon/cityload/竞投中心@2x.png'
				},{
					p:'更多',
					img:'../../../static/chicon/cityload/更多@2x.png'
				}]
			}
		},
		components:{
			Icon,
			Popup,
			Swiper,
    		SwiperItem,
    		Toast
		},
		methods:{
			swiperonIndexChange (index) {
		      this.swiperIndex = index
		    },
			moreList(){
				this.$gotoPages('/cityloadArea/moreList')
			},
			orderList(){
				this.$gotoPages('/cityloadArea/orderManager')
			},
			goDetail(href){
				if(href!=undefined){
					this.$gotoPages(href)
				}else{
					this.showErr=true
				}
				
			}
		},
		mounted(){
			
		}
	}
</script>

<style lang="less">
	.cityLoadList{
		flex-wrap: wrap!important;
	}
	.cityLoadList>div{
		width: 25%;
		text-align: center;
		font-size: 13px;
		padding-top: .3rem;
		img{
			width: .9rem;
			margin: 0 auto;
			height: .9rem;
			display: block;
		}
	}
	.cityload-area h5{
		padding: .15rem 0;
		line-height: 16px;
		font-size: 14px;
	}

</style>