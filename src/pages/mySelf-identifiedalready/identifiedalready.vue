<template>
	<div class="myself home">

		<cmheader :title="'认证中心'"></cmheader>

		<!-- 头部占位 -->
		<div class="u-header-padding" ></div>

		<!-- 个人信息 -->
		<div class="m-details">

			<div v-for="item in nameInputs.items" 
				class="c-list-item"
			>
				<div class="c-item-label">
					{{item.label}}
				</div>
				<div class="c-item-content">
					 : {{item.content}}
				</div>
			</div>
		
		</div>
	</div>
</template>

<script>
	import { XButton, Popup } from 'vux'	
	import cmheader from '../../components/cmHeader.vue'
	
	var popup ={show: false}
	var common = {
		pageState: 'details'
	}

	export default{
		name:'myself',
		filters: {
		},
		data(){
			return{
				popup: popup,
				commond: common,
				nameInputs:{
					items: []
				}
			}
		},
		methods:{
			submit(){
				var params={
					id:this.$store.state.id,
				}
				var items = this.nameInputs.items;
				var warn;
				var self = this;

				for(var i=0; i< items.length; i++){
					var item = items[i];
					warn = item.checker(item, this.$getChecker);
					params[item.name] = item.value;
					if(warn){
						self.$store.$toast.alert(warn);
						return;
					}
				}
				params=this.$qs.stringify(params);

				this.$axios({
					method:'post',
					data:params,
					url:'/appApi/appUsers/updateUserDetail'
				}).then(function(res){
					if(res.status=='200'){		// TODO 
						var code=res.data.data.code;
						if(code=='200'){
						}else{

						}
					}
				}).catch(function(err){

				})
			},
		},
		components:{
			XButton,
			Popup,
			cmheader
		},
		created(){
			var fields = {
				'userName': {
					index: 0,
					label: '姓名',
					filterType: 'username'
				},
				'idCard': {
					index: 1,
					label: '身份证',
					filterType: 'identify'
				},
				'phone': {
					index: 2,
					label: '手机',
					filterType: 'phone'
				},
				'email': {
					index: 3,
					label: '邮箱',
					filterType: 'email'
				},
				'address': {
					index: 4,
					label: '地址'
				}
			}

			// var fields = ['userName', 'idCard', 'phone', 'email', 'address'];
			// var labels = ['姓名', '身份证', '手机', '邮箱', '地址'];
			var self = this;
			var userInfo = self.$getUserInfo();

			for(var f in userInfo){
				if(fields[f]){
					var filterType = fields[f].filterType;
					var content = userInfo[f];
					content = content
						? filterType
							? window.utils.filters(content, filterType)
							: content
						: "无";

					self.nameInputs.items.push({
						name: f,
						label: fields[f].label,
						content: content,
					})
				}
			}

			// self.nameInputs.items.sort(function(a, b){
			// 	console.log(fields[a.name].index)
			// 	return fields[a.name].index > fields[b.name].index 
			// })
		}
	}
</script>

<style lang="less" scoped>
.myself{

	.u-header-padding{
		height: 0.9rem;
		width: 100%;
	}

	.m-popup{
		height: 6rem;
		.header{
			padding: 0.4rem 0;
		}

		.haederpoit-list{
			flex-wrap: wrap;
			display: flex;
			justify-items: 2;
			justify-content: center;

			.list-item{
				flex-basis: 50%;
				height: 1.7rem;

				.wrap{
					// &>div{
					// 	display: block;
					// }
					width: 1.25rem;
					margin: 0 auto;
					
					.headpoint{
						float: left;
						display: inline-block;
						width: 0.8rem;
						height: 0.8rem;
						border-radius: 0.25rem; 
					}
					.checkbox{
						float: right;
						display: inline-block;
						line-height: 0.8rem;
						height: 0.8rem;
						width: 0.45rem;
					}
					label{
						width: 0.8rem;
						float: left;
						display: block;
						padding: 0.12rem 0;
					}
				}
				
			}
		}
	}

	.m-details{
		.c-list-item{
			padding-right: 0.6rem;

			.c-item-raw-right{
				margin-left: 0.15rem;
				margin-right: -0.44rem;
			}

			.c-item-label{
				width: 25%;
			}

			.c-item-content{
				width: 75%;
				-webkit-box-pack: start;
				-ms-flex-pack: start;
				justify-content: flex-start;

				.head-portrail{
					width: 1.25rem;
					height: 1.25rem;
					border-radius: 0.625rem;
				}
			}
		}

		.right-raw{
			width: 0.24rem;
			height: 0.33rem;
			margin-left: 0.15rem;
			margin-right: -0.44rem;
		}

		.item.user-headport{
			img.head-portrail {
				width: 1.25rem;
				height: 1.25rem;
				border-radius: 0.625rem;
			}
			img.right-raw{
				width: 0.24rem;
				height: 0.33rem;
			}
		}

		.item{
			padding: 0.24rem 0.6rem 0.24rem 0.16rem;
			box-sizing: border-box;
			border-bottom: 1px solid #000;
			flex-wrap: nowrap;

			label{
				text-align: left;
				display: inline-block;
			}

			.content{
				.right-raw{
					display: block;
				}
			}
		}
	}
}
</style>