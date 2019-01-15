<template>
	<div class="mall-wrap-outer">
		<cmheader :title="thatTitle"></cmheader>
		<div class="mall-wrap">
			<iframe :src="mallSrc" id="mall-iframe" ref="myIframe">
				
			</iframe>
			
		</div>
		<payGroup :goodsInfo='goodsInfo'></payGroup>
	</div>
</template>

<script>
	import cmheader from '../../components/cmHeader.vue'
	import payGroup from '../../components/goodsDetail.vue'
	export default{
		name:'',
		data(){
			return{
				thatTitle:'礼包详情',
				mallSrc:'',
				goodsInfo:{
					price:'',
					giftName:'',
					id:''
				}
			}
		},
		components:{
			cmheader,
			payGroup
		},
		methods:{
			demo(){
				var _this=this
				var params={
					keyname:''
				}
				params=this.$qs.stringify(params)
				this.$axios({
					method:'post',
					data:params,
					url:''
				}).then(function(res){
					console.log(res)
					if(res.status=='200'){
						var getData=res.data
						if(getData.status=='200'){
							var _data=getData.data
							_this.XXXX=_data
						}
					}
				}).catch(function(err){
					console.log(err)
				})
			}
		},
		created(){
			this.mallSrc=this.$route.query.link+'&APPBagType=1'
			this.goodsInfo.price=this.$route.query.price
			this.goodsInfo.giftName=this.$route.query.giftName
			this.goodsInfo.id=this.$route.query.id
		},
		mounted(){
			
		}
	}
</script>

<style>
</style>