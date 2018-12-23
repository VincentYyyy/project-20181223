<template>
	<div class="home">
		<div class="swiper">
			<swiper :list="swiperList" :show-dots="false" v-model="swiperIndex" @on-index-change="swiperonIndexChange"></swiper>
		</div>
		<div class="">
			
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
	}, {
	  url: 'javascript:',
	  img: 'https://static.vux.li/demo/5.jpg', // 404
//	  title: '送你一次旅行',
	  fallbackImg: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vw50iwj20ff0aaaci.jpg'
	}]
	export default{
		name:'home',
		data(){
			return{
				swiperList: baseList,
				swiperIndex:0
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
		},
		mounted(){
			
		}
	}
</script>

<style>
	/*.home{
		background: red;
	}*/
</style>