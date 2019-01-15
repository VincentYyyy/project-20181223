<template>

	<div>
		<swiper :options="swiperOption" ref="mySwiper">
			<!-- slides -->
			<swiper-slide v-for="(item,index) in swiperList" :key="index">
				<div @click="showData(item)">
					<img :src="item.img" class="slider-img">
				</div>
			</swiper-slide>
			<!-- Optional controls -->
			<!--<div class="swiper-pagination" slot="pagination"></div>
			<div class="swiper-button-prev" slot="button-prev"></div>
			<div class="swiper-button-next" slot="button-next"></div>
			<div class="swiper-scrollbar" slot="scrollbar"></div>-->
		</swiper>
	</div>

</template>
<script>
	import 'swiper/dist/css/swiper.css'
	import { swiper, swiperSlide } from 'vue-awesome-swiper'
	export default {
		name: 'carrousel',
		data() {
			return {
				swiperOption: {
					preventLinksPropagation : false,
					notNextTick: true,
					slidesPerView: 'auto',
					loopedSlides :3,
//					spaceBetween: 10,
					autoplay: {
						delay: 3000,
						disableOnInteraction: false
					},
					initialSlide: 1, //默认第二个
					slidesPerView: 1.3, //可见个数2
					centeredSlides: true, //居中
					tdFlow: {
						rotate: 10,
						stretch: -10,
						depth: 10,
						modifier: 4,
						slideShadows: false
					},
					effect: "coverflow",
					loop: true,
					grabCursor: true,
				}
			}
		},
		components: {
			swiper,
			swiperSlide
		},
		props:["swiperList"],
		methods:{
			showData(item){
				this.$emit('swiperClk',item)
			}
		},
		computed: {
			swiper() {
				return this.$refs.mySwiper.swiper
			}
		},
		mounted() {
			console.log(this.swiperList)
		}
	}
</script>
<style>
	.slider-img{
		width: 100%;
		height: auto;
	}
	.swiper-container-horizontal > .swiper-scrollbar{
		height: 0;
	}
</style>