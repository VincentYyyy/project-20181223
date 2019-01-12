<template>
	<div class="mall-wrap">
		<cmheader :title="thatTitle"></cmheader>
		<iframe :src="mallSrc" id="mall-iframe" ref="myIframe">
			
		</iframe>
		<>
	</div>
</template>

<script>
	import cmheader from '../../components/cmHeader.vue'
	export default{
		name:'',
		data(){
			return{
				thatTitle:'礼包详情',
				mallSrc:''
			}
		},
		components:{
			cmheader
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
			this.mallSrc=this.$route.query.link+'?APPBagType=1'
		},
		mounted(){
			
		}
	}
</script>

<style>
</style>