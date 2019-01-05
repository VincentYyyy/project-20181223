<template>
	<div class="myself home">

		<div class="cm-header ">
			<img src="../../../static/myself/set_icon@2x.png" class="pre">
			<div class="p1p">设置
			</div>
		</div>

		<!-- 头部占位 -->
		<div class="u-header-padding" ></div>

		<!-- 个人信息 -->
		<div class="m-details">

			<div v-for="item in vipList.items" 
				class="c-list-item"
				@click="item.onClick && item.onClick(item)"
			>
				<div class="c-item-label user-infor">
					<img class="user-infor-img" :src="item.img" alt="">
					<div class="user-infor-details">
						<p>{{item.label}}</p>
						<p class="user-infor-phone" v-if="item.phone">{{item.phone}}</p>
					</div>
				</div>
				<div class="c-item-content">
					{{item.date}}
				</div>
			</div>
		
		</div>
	
	</div>
</template>

<script>
	import { XButton, Popup } from 'vux'	
	
	var common = {
		pageState: 'details'
	}

	export default{
		name:'myself',
		filters: {
		},
		data(){
			return{
				commond: common,
				vipList:{
					items: [{
						label: '李一鸣',
						img: require('../../img/myself/男@2x.png'),
						phone: "12345678901",
						date: '2018.12.25',
						onClick: function (){
							
						}
					}]
				}
			}
		},
		methods:{
		},
		components:{
			XButton,
			Popup
		},
		created(){
		}
	}
</script>

<style lang="less" scoped>
.myself{

	.u-header-padding{
		height: 0.9rem;
		width: 100%;
	}

	.m-details{
		.c-list-item{
			padding-right: 0.6rem;

			.c-item-label{

				&.user-infor{
					width: 200%;
			
					.user-infor-img{
						width: 0.8rem;
						height: 0.8rem;
						border-radius: 0.4rem;
						margin-right: 0.2rem;
					}
					.user-infor-details{
						text-align: left;
					}
				}
			}

			.c-item-raw-right{
				margin-left: 0.15rem;
				margin-right: -0.44rem;
			}

			.c-item-content{
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