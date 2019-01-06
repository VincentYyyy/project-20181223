<template>
	<div class="order-content">
		<div class="order-content-scroll">
			<div v-for="(item,index) in 100" class="flex-start-end no-wrap goods-item" @click="goDetail(item)">
				<div class="flex-start no-wrap"> 
					<div>
						<img src="../../../static/chicon/右箭头@2x.png" class="goods-img">
					</div>
					<div>
						<div class="goods-name">
							X奥传媒
						</div>
						<div class="goods-type">
							【普通】
						</div>
					</div>
				</div>
				<div class="flex-end">
					<div>
						<div class="goods-price">
							¥&nbsp;6
						</div>
						<div class="goods-status">
							待完成
						</div>
					</div>
					<div class="goods-trangle-wrap">
						<img src="../../../static/chicon/右箭头@2x.png" class="goods-img">
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:'',
		data(){
			return{
				imperfectList:[
				],
				pageNum:1
			}
		},
		methods:{
			goDetail(item){
				this.$gotoPages('/cityloadArea/applicationAudit')
			},
			getTaskListByStatus(){
				var _this=this
				var params={
					id:this.$store.state.id,
					status:4,
					pageNum:this.pageNum,
					pageSize:'10'
				}
				params=this.$qs.stringify(params)
				this.$axios({
					method:'post',
					data:params,
					url:'/appApi/appUsers/getMemberRemainList'
				}).then(function(res){
					console.log(res)
					if(res.status=='200'){
						var getData=res.data
						if(getData.status=='200'){
							var _data=getData.data
							_this.imperfectList=_data
						}
					}
				}).catch(function(err){
					console.log(err)
				})
			}
		},
		created(){
			this.getTaskListByStatus()
		}
	}
</script>

<style>
	
</style>