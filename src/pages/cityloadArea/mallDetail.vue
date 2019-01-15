<template>
	<div class="mall-wrap-outer">
		<cmheader :title="thatTitle"></cmheader>
		<div class="mall-wrap">
			<iframe :src="mallSrc" id="mall-iframe" ref="myIframe">
				
			</iframe>
		</div>
	</div>
</template>

<script>
	import cmheader from '../../components/cmHeader.vue'
	export default{
		name:'',
		data(){
			return{
				thatTitle:'商品详情',
				mallSrc:'',
//				goodsInfo:{
//					price:'',
//					giftName:'',
//					id:''
//				}
			}
		},
		components:{
			cmheader,
		},
		methods:{
			
		},
		created(){
			this.mallSrc=this.$route.query.link
		},
		mounted(){
			
		}
	}
</script>

<style>
</style>