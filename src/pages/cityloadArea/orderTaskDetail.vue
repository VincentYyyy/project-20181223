<template>
	<div class="application-auditing">
		<div>
			<toast v-model="showResMsg" type="text" :time='1200' is-show-mask :text="resMsgContent"  :position="'middle'" width="auto"></toast>
		</div>
		<cmheader :title="thatTitle"></cmheader>
		<div class="application-content" v-if="tabIndex==0">
			<div class="ac-title">
				您上传的凭证:
			</div>
			<div class="flex-start flex-item-3 ac-img-list">
				<div v-for="(item,index) in myFilesList" @click="deleteImg(index)">
					<img :src="item.src">
				</div>
				<div>
					<input type="file" multiple="multiple" id="domFiles" ref="domFiles" class="files" @change="changeFiles" @click="filesDomClk">
					<img src="../../../static/chicon/提交图片审核@3x.png" class="pre">
				</div>
			</div>
			<div class="ac-remark">
				<textarea v-model="remark" placeholder="输入备注">
					
				</textarea>
			</div>
			<div>
				<!--<div class="btn-bg">
					提交审核
				</div>-->
				<div @click="saveTask" class="btn-bg submit-btn" style="margin: 0;margin-top: .33rem;margin-bottom: .59rem;">
					提交审核
				</div>
			</div>
			<div class="ac-task-detail">
				<strong>
					任务详情
				</strong>
			</div>
			<div  class="flex-start-end no-wrap goods-item ac-set-plr">
				<div class="flex-start no-wrap">
					<div>
						<img :src="taskInfo.taskImgsArr[0]" class="goods-img" v-if="taskInfo.taskImgsArr">
						<!--<img :src="taskInfo.taskImgsArr[0]" class="goods-img" v-if="taskInfo.taskImgsArr">-->
						<img src="/static/chicon/88商城余额@2x.png" class="goods-img" v-else>
					</div>
					<div>
						<div class="goods-name">
							{{taskInfo.taskName}}
						</div>
						<div class="goods-type">
							【{{taskInfo.taskTypeStr}}】
						</div>
					</div>
				</div>
				<div class="flex-end">
					<div>
						<div class="goods-price">
							¥&nbsp;{{taskInfo.remainAmount}}
						</div>
						<div class="goods-status">
							{{taskInfo.remainStatusStr}} 
						</div>
					</div>
					<!--<div class="goods-trangle-wrap">
						<img src="../../../static/chicon/右箭头@2x.png" class="goods-img">
					</div>-->
				</div>
			</div>
			<div class="flex-start flex-item-3 ac-img-list" v-if="taskInfo.taskImgsArr">
				<div v-for="(item,index) in taskInfo.taskImgsArr">
					<img :src="item" class="pre">
				</div>
			</div>
			<div class="ac-task-detail">
				<div style="padding-bottom: .1rem;">
					<strong style="font-size: 18px;">
						任务要求
					</strong>
				</div>
				<div v-html="taskInfo.taskContent">
					
				</div>
			</div>
			<!--<div class="ac-remark" v-html="taskInfo.taskContent">
			</div>-->
		</div>
		<div class="application-content" v-if="tabIndex==1">
			<div class="ac-title">
				您上传的凭证:
			</div>
			<div class="flex-start flex-item-3 ac-img-list">
				<div v-for="(item,index) in taskInfo.remainImgsArr">
					<img :src="item" class="pre" v-if="item">
					<img src="/static/chicon/88商城余额@2x.png" class="goods-img" v-else>
				</div>
			</div>
			<div class="ac-remark">
				备注：{{taskInfo.remainContent}}
			</div>
			<!--<div class="ac-task-detail">
				<strong>
					驳回原因
				</strong>
			</div>
			<div class="ac-remark">
				<strong>
					{{taskInfo.taskContent}}
				</strong>  
			</div>-->
			<div class="ac-task-detail">
				<strong>
					任务详情
				</strong>
			</div>
			
			<div  class="flex-start-end no-wrap goods-item ac-set-plr">
				<div class="flex-start no-wrap">
					<div>
						<img :src="taskInfo.taskImgsArr[0]" class="goods-img" v-if="taskInfo.taskImgsArr">
						<!--<img :src="taskInfo.taskImgsArr[0]" class="goods-img" v-if="taskInfo.taskImgsArr">-->
						<img src="/static/chicon/88商城余额@2x.png" class="goods-img" v-else>
					</div>
					<div>
						<div class="goods-name">
							{{taskInfo.taskName}}
						</div>
						<div class="goods-type">
							【{{taskInfo.taskTypeStr}}】
						</div>
					</div>
				</div>
				<div class="flex-end">
					<div>
						<div class="goods-price">
							¥&nbsp;{{taskInfo.remainAmount}}
						</div>
						<div class="goods-status">
							{{taskInfo.remainStatusStr}} 
						</div>
					</div>
					<!--<div class="goods-trangle-wrap">
						<img src="../../../static/chicon/右箭头@2x.png" class="goods-img">
					</div>-->
				</div>
			</div>
			<div class="flex-start flex-item-3 ac-img-list" v-if="taskInfo.taskImgsArr">
				<div v-for="(item,index) in taskInfo.taskImgsArr">
					<img :src="item" class="pre">
				</div>
			</div>
			<div class="ac-remark">
				任务要求：{{taskInfo.taskContent}}  
			</div>
		</div>
		<div class="application-content" v-if="tabIndex==2">
			<div class="ac-title">
				您上传的凭证:
			</div>
			<div class="flex-start flex-item-3 ac-img-list">
				<div v-for="(item,index) in taskInfo.remainImgsArr">
					<img :src="item" class="pre" v-if="item">
					<img src="/static/chicon/88商城余额@2x.png" class="goods-img" v-else>
				</div>
			</div>
			<div class="ac-remark">
				备注：{{taskInfo.remainContent}}
			</div>
			<!--<div class="ac-task-detail">
				<strong>
					驳回原因
				</strong>
			</div>
			<div class="ac-remark">
				<strong>
					{{taskInfo.taskContent}}
				</strong>  
			</div>-->
			<div class="ac-task-detail">
				<strong>
					任务详情
				</strong>
			</div>
			
			<div  class="flex-start-end no-wrap goods-item ac-set-plr">
				<div class="flex-start no-wrap">
					<div>
						<img :src="taskInfo.taskImgsArr[0]" class="goods-img" v-if="taskInfo.taskImgsArr">
						<!--<img :src="taskInfo.taskImgsArr[0]" class="goods-img" v-if="taskInfo.taskImgsArr">-->
						<img src="/static/chicon/88商城余额@2x.png" class="goods-img" v-else>
					</div>
					<div>
						<div class="goods-name">
							{{taskInfo.taskName}}
						</div>
						<div class="goods-type">
							【{{taskInfo.taskTypeStr}}】
						</div>
					</div>
				</div>
				<div class="flex-end">
					<div>
						<div class="goods-price">
							¥&nbsp;{{taskInfo.remainAmount}}
						</div>
						<div class="goods-status">
							{{taskInfo.remainStatusStr}} 
						</div>
					</div>
					<!--<div class="goods-trangle-wrap">
						<img src="../../../static/chicon/右箭头@2x.png" class="goods-img">
					</div>-->
				</div>
			</div>
			<div class="flex-start flex-item-3 ac-img-list" v-if="taskInfo.taskImgsArr">
				<div v-for="(item,index) in taskInfo.taskImgsArr">
					<img :src="item" class="pre">
				</div>
			</div>
			<div class="ac-remark">
				任务要求：{{taskInfo.taskContent}}  
			</div>
		</div>
		<div class="application-content" v-if="tabIndex==3">
			<div class="ac-title">
				您上传的凭证:
			</div>
			<div class="flex-start flex-item-3 ac-img-list">
				<div v-for="(item,index) in taskInfo.remainImgsArr">
					<img :src="item" class="pre" v-if="item">
					<img src="/static/chicon/88商城余额@2x.png" class="goods-img" v-else>
				</div>
			</div>
			<div class="ac-remark">
				备注：{{taskInfo.remainContent}}
			</div>
			<!--<div class="ac-task-detail">
				<strong>
					驳回原因
				</strong>
			</div>
			<div class="ac-remark">
				<strong>
					{{taskInfo.taskContent}}
				</strong>  
			</div>-->
			<div class="ac-task-detail">
				<strong>
					任务详情
				</strong>
			</div>
			
			<div  class="flex-start-end no-wrap goods-item ac-set-plr">
				<div class="flex-start no-wrap">
					<div>
						<img :src="taskInfo.taskImgsArr[0]" class="goods-img" v-if="taskInfo.taskImgsArr">
						<!--<img :src="taskInfo.taskImgsArr[0]" class="goods-img" v-if="taskInfo.taskImgsArr">-->
						<img src="/static/chicon/88商城余额@2x.png" class="goods-img" v-else>
					</div>
					<div>
						<div class="goods-name">
							{{taskInfo.taskName}}
						</div>
						<div class="goods-type">
							【{{taskInfo.taskTypeStr}}】
						</div>
					</div>
				</div>
				<div class="flex-end">
					<div>
						<div class="goods-price">
							¥&nbsp;{{taskInfo.remainAmount}}
						</div>
						<div class="goods-status">
							{{taskInfo.remainStatusStr}} 
						</div>
					</div>
					<!--<div class="goods-trangle-wrap">
						<img src="../../../static/chicon/右箭头@2x.png" class="goods-img">
					</div>-->
				</div>
			</div>
			<div class="flex-start flex-item-3 ac-img-list" v-if="taskInfo.taskImgsArr">
				<div v-for="(item,index) in taskInfo.taskImgsArr">
					<img :src="item" class="pre">
				</div>
			</div>
			<div class="ac-remark">
				任务要求：{{taskInfo.taskContent}}  
			</div>
		</div>
	</div>
	
	</div>
</template>

<script>
	import cmheader from '../../components/cmHeader.vue'
	import {Toast} from 'vux'
	export default {
		name: '',
		data() {
			return {
				thatTitle:'',
				tabIndex:0,
				taskId:'',
				myFilesList:[],
				remark:'',
				taskInfo:{},
				showResMsg:false,
				resMsgContent:''
			}
		},
		components: {
			cmheader,
			Toast
		},
		methods: {
			goPrev() {
				window.history.go(-1)
			},
			
			uploadFiles(){
				var imgs=[]
				if(this.myFilesList.length>0){
					this.myFilesList.forEach(function(item){
						imgs.push(item.uploadFiles)
					})
				}
				var params={
					bizCode:'新增文件夹',
					File:imgs
				}
				console.log(imgs)
				var formData=new FormData()
				formData.append('bizCode','新增文件夹')
				formData.append('File',this.myFilesList[0])
				this.$axios({
					headers: {
				        'Content-Type': 'multipart/form-data'
				    },
					method:'post',
					data:formData,
					url:'/appApi/file/uploadFile'
				}).then(function(res){
					console.log(res)
				}).catch(function(err){
					
				})
			},
			//tabIndex==0
			saveTask(){
				var params={
					memberId:this.$store.state.id,
					id:this.taskId,
					imgs:'xxxx.jpg',
					content:this.remark
				}
				this.uploadFiles()
				return false
				var _this=this
				params=this.$qs.stringify(params)
				this.$axios({
					method:'post',
					data:params,
					url:'/appApi/appUsers/subMemberRemain'
				}).then(function(res){
					console.log(res)
					if(res.status=='200'){
						var getData=res.data
						if(getData.status=='200'){
							_this.showResMsg=true
							_this.resMsgContent='提交成功!'
							setTimeout(function(){
								window.history.go(-1)
							},1500)
						}else{
							_this.showResMsg=true
							_this.resMsgContent=getData.msg
						}
					}
				}).catch(function(err){
					console.log(err)
				})
			},
			changeFiles(){
				//window.URL.createObjectURL(blob)//这里传一个文件对象 例如：file.files[0]
				var filesBlobs=this.$refs.domFiles.files
				if(filesBlobs.length>0){
					for(var i=0;i<filesBlobs.length;i++){
						var filesSrc=window.URL.createObjectURL(filesBlobs[i])
						var extStart=filesBlobs[i].name.lastIndexOf(".");
						var ext=filesBlobs[i].name.substring(extStart,filesBlobs[i].name.length).toUpperCase();
						if(ext!=".BMP"&&ext!=".PNG"&&ext!=".GIF"&&ext!=".JPG"&&ext!=".JPEG"){
							alert("“图片限于png,gif,jpeg,jpg格");
							continue
						}				
						var obj=new Object()
						obj.src=filesSrc
						obj.uploadFiles=filesBlobs[i]
						this.myFilesList.push(obj)
					}
				}
				console.log(this.myFilesList)
			},
			deleteImg(index){
				this.myFilesList.splice(index,1)
			},
			filesDomClk(){
				this.$refs.domFiles.value=''
			},
			//tabIndex==0
			
			getTaskInfo(){
				var params={
					memberId:this.$store.state.id,
					id:this.$route.query.taskId
				}
				var _this=this
				params=this.$qs.stringify(params)
				this.$axios({
					method:'post',
					data:params,
					url:'/appApi/appUsers/getRemainById'
				}).then(function(res){
					if(res.status=='200'){
						var getData=res.data
		    			if(getData.status=='200'){
		    				var resultObj=getData.data
		    				if(resultObj.taskImgs!=null){
		    					var imgsArr=resultObj.taskImgs.split(',')
		    					resultObj.taskImgsArr=imgsArr
		    				}
		    				if(resultObj.remainImgs!=null){
		    					var remainImgsArr=resultObj.remainImgs.split(',')
		    					resultObj.remainImgsArr=remainImgsArr
		    				}
		    				_this.taskInfo=resultObj
		    			}
					}
				}).catch(function(err){
					console.log(err)
				})
			}
		},
		created(){
			var arr=['提交审核','待审核','已完成','已驳回']
			this.thatTitle=arr[this.$route.query.tabIndex]
			this.tabIndex=this.$route.query.tabIndex
			this.taskId=this.$route.query.taskId
			this.getTaskInfo()
		},
		mounted() {
		
		}
	}
</script>

<style lang="less">
.draw-list{
	color: #333;
}
.files{
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
	opacity: 0;
	left: 0;
}
.application-content{
	padding: 0 .20rem;
	overflow: scroll;
    height: 100%;
    .ac-title,.ac-remark{
    	text-align: left;
    	padding: .26rem .08rem;
    	word-break: break-all;
    	word-wrap: break-word;
    	line-height: 18px;
    	font-size: 12px;
    }
    .ac-remark{
    	textarea{
    		border: 0;
    		padding: .2rem;
    		outline: none;
    		width: 100%;
    		box-sizing: border-box;
    		border-radius: .1rem;
    		background: rgb(245,245,245);
    		height: 1.36rem;
    	}
    }
    .ac-task-detail{
    	text-align: left;
    	font-size: 18px;
    	padding: 0.26rems .08rem;
    }
    .ac-title{
    	font-size: 16px;	
    }
    .ac-img-list{
    	>div{
    		padding: .08rem;
    		box-sizing: border-box;
    		position: relative;
    		img{
    			width: 1.8rem;
    			height: 1.8rem;
    		}
    	}
    }
    .ac-set-plr{
    	padding-left:  0.08rem;
    	padding-right: 0.08rem;
    	border-bottom: 0;
    }
}

.application-auditing{
	padding-top: .88rem;
	box-sizing: border-box;
	height: 100%;
	overflow: hidden;
}
.task-auditing {
	text-align: center;
	padding-top: 1.8rem;
}
.task-auditing img{
	width: 3.5rem;
}
	.goods-trangle-wrap{
		padding-left: .2rem;
	}
	
</style>