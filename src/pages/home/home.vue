<template>
	<div class="home">
		<div class="home-title">
			八八商城
		</div>
		<div class="home-content">
			<div>
				<div class="swiper">
			<swiper :list="swiperList" :show-dots="false" v-model="swiperIndex" @on-index-change="swiperonIndexChange"></swiper>
			</div>
			<div class="mall">
				<div @click="goMall">
					<img src="/static/chicon/mall.png">
				</div>
				<div v-for="(item,index) in logoList">
					<a :href="item.url">
						<img :src="item.img">
					</a>
				</div>
			</div>
			<div class="static-ad-list">
				<div>
					精选
				</div>
			</div>
			<div class="ad-list flex-start flex-item-2">
					<div v-for="(item,index) in staticAdList">
					<a :href="item.url">
						<img :src="item.img">
					</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
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
		name:'home',
		data(){
			return{
				swiperList: baseList,
				swiperIndex:0,
				logoList:baseList,
				staticAdList:baseList
			}
		},
		components:{
			Swiper,
    		SwiperItem
		},
		methods:{
			swiperonIndexChange (index) {
		      this.swiperIndex = index
		    },
		    goMall(){
		    	this.$gotoPages('/mall',{domain:'http://39.98.52.58'})
		    },
		    initHomeData(type){
		    	var _this=this
		    	var params={
		    		type:type,
					pageNum:1,
					pageSize:10
		    	}
		    	params=this.$qs.stringify(params)
		    	this.$axios({
		    		method:'post',
		    		data:params,
		    		url:'/appApi/appUsers/getAdvertisementList'
		    	}).then(function(res){
		    		console.log(res)
		    		if(res.status=='200'){
		    			var getData=res.data
		    			if(getData.status=='200'){
		    				var resultArr=getData.data
		    				if(resultArr.length>0){
		    					resultArr.forEach(function(item){
		    						item.img=item.imgUrl
		    						item.url=item.linkUrl
		    					})
		    				}
		    				switch(type){
		    					case 1:
		    					_this.swiperList=resultArr
		    					break;
		    					case 2:
		    					_this.logoList=resultArr
		    					break;
		    					case 3:
		    					_this.staticAdList=resultArr
		    					break;
		    					default:
		    					break;
		    				}
		    			}else{
		    				var msg=getData.msg
		    				//alert(msg)
		    				console.log(msg)
		    			}
		    		}
		    	}).catch(function(err){
		    		
		    	})
		    }
		},
		created(){
			this.initHomeData(1)
			this.initHomeData(2)
			this.initHomeData(3)
			console.log(JSON.parse(sessionStorage.getItem('userInfo')))
		},
		mounted(){
			
		}
	}
</script>

<style lang="less">
	.ad-list{
		padding: 0 .2rem;
		box-sizing: border-box;
		>div{
			box-sizing: border-box;
			padding: .1rem;
		}
		img{
			border-radius: .1rem;
			width: 100%;
			height: auto;
		}
	}
	.swiper{
		padding: 0 .3rem;
	}
	.mall{
		box-sizing: border-box;
		padding: 0.1rem .3rem;
		padding-top: .2rem;
		img,a{
			width: 100%;
			height: auto;
			display: block;
		}
	}
	
	/*.home{
		background: red;
	}*/
</style>