<template>
	<div class="myself home">

		<div class="cm-header ">
			<img src="../../../static/myself/set_icon@2x.png" class="pre">
			<div class="p1p">认证中心		
			</div>
		</div>

		<!-- 头部占位 -->
		<div class="u-header-padding" ></div>

		<!-- 个人信息 -->
		<div class="m-details">

			<div v-for="item in nameInputs.items" 
				class="c-list-item c-list-item-input"
				@click="item.onClick && item.onClick(item)"
			>
				<input type="text" :placeholder="item.placeholder" v-model="item.value">
			</div>
		
		</div>

		<div class="c-btn">
			<button>绑定</button>
			<div class="c-btn-details">
				说明：银行卡用于提现使用，请确认好输入的银行卡信息。
			</div>
		</div>
	
	</div>
</template>

<script>
	import { XButton, Popup } from 'vux'	
	
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
					items: [{
						name: 'bank',
						value: '',
						placeholder: '输入银行卡开户行'
					}, {
						name: 'bankCardId',
						value: '',
						placeholder: '输入银行卡账号'
					}, {
						name: 'name',
						value: '',
						placeholder: '输入持卡人姓名'
					}, {
						name: 'phone',
						value: '',
						placeholder: '输入银行预留手机号'
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