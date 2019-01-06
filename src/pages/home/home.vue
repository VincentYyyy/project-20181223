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
			<div class="logo-wrap">
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
				<div class="ad-list">
					
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
				staticAdList:[]
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
		    				switch(type){
		    					case 1:
		    					//_this.swiperList=getData.data
		    					break;
		    					case 2:
		    					_this.logoList=getData.data
		    					break;
		    					case 3:
		    					_this.staticAdList=getData.data
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
	
	.logo-wrap{
		width: 100%;
		height: 100%;
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