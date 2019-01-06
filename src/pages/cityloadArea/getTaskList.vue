<template>
	<div class="get-task-list">
		<cmheader :title="thatTitle" :backUrl="backUrl"></cmheader>
		<div class="order-content-scroll">
			<div v-show="taskList.length==0" class="text-center">
				<label v-if="!isLoadding">
					暂无数据
				</label>
				<label v-else>
					加载中...
				</label>
			</div>
			<div v-for="(item,index) in taskList" class="flex-start-end no-wrap goods-item" @click="goTaskDetail(item)">
				<div class="flex-start no-wrap">
					<div>
						<img src="../../../static/myself/set_icon@2x.png" class="goods-img" v-if="item.imgsArr.length==0">
						<img :src="item.imgsArr[0]" class="goods-img" v-else>
					</div>
					<div>
						<div class="goods-name">
							{{item.taskName}}
						</div>
						<div class="goods-type">
							【{{item.memberTypeStr}}】
						</div>
					</div>
				</div>
				<div class="flex-end">
					<div>
						<div class="goods-price">
							¥&nbsp;6
							<!--数量&nbsp;:&nbsp;{{item.applyNum}}-->
						</div>
						<div class="goods-status">
							<!--{{item.taskStatusStr}}--> 
							{{item.taskTypeStr}}
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
	import cmheader from '../../components/cmHeader.vue'
	export default{
		name:'task-list',
		data(){
			return{
				thatTitle:'',
				backUrl:'/cityloadArea/getTask',
				taskType:0,
				taskList:[],
				pageNum:1,
				isLoadding:true
			}
		},
		created(){
			this.thatTitle=this.$route.query.type==0?'普通任务':'高级任务'
			this.taskType=this.$route.query.type
		},
		components:{
			cmheader
		},
		methods:{
			goTaskDetail(item){
				this.$gotoPages('/cityloadArea/getTaskListDetail',{
					id:item.id
				})
			},
			initGetTaskList(){
				var params={
					type:this.taskType,
					pageNum:this.pageNum,
					pageSize:10
				}
				var _this=this
				params=this.$qs.stringify(params)
				_this.isLoadding=true
				this.$axios({
					method:'post',
					data:params,
					url:'/appApi/appUsers/getTaskListByType'
				}).then(function(res){
					console.log(res)
					//str.split('')
					_this.isLoadding=false
					if(res.status=='200'){
						var getData=res.data
						if(getData.status=='200'){
							_this.taskList=getData.data
							if(getData.data.length>0){
								_this.taskList.forEach(function(item){
									if(item.imgs==null){
										item.imgsArr=[]
									}else{
										item.imgsArr=item.imgs.split(',')
									}
								})
							}
						}
					}
				}).catch(function(err){
					
				})
			}
		},
		mounted(){
			this.initGetTaskList()
		}
	}
</script>

<style>
	.text-center{
		text-align: center;
		line-height: .88rem;
		height: .88rem;
		font-size: 14px;
	}
	.get-task-list{
		padding-top: 1rem;
		box-sizing: border-box;
		height: 100%;
		overflow: hidden;
	}
</style>