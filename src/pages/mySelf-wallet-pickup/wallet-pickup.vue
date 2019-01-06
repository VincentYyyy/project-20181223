<template>
	<div class="myself home main">

		<div class="cm-header ">
			<img src="../../../static/myself/set_icon@2x.png" class="pre">
			<div class="p1p">认证中心		
			</div>
		</div>

		<!-- 头部占位 -->
		<div class="u-header-padding"></div>

		<!-- 个人信息 -->
		<div class="c-panel">
			<p class="bank">中国工商银行</p>
			<p class="bank-card f-gray-2">尾号5266储值卡</p>
		</div>

		<div class="c-panel money">
			<p class="f-gray-1">提现金额</p>
			<div class="money-input">
				<span class="money-icon">¥</span>
				<input type="text">
			</div>
			<div class="f-gray-2">
				可提现余额0.00元

				<div class="all-pickup">
					全部提现
				</div>
			</div>
		</div>
		<p class="tips f-gray-1">
			最低是100元才能提现
		</p>

		<div class="c-btn disabled pickup-btn">
			<button class="f-bdr">
				提现
			</button>
		</div>

		<x-dialog v-model="dialog.show">
			<div class="m-dialog">
				<p class="header">提现</p>
				<p class="money">¥ 800.00</p>
				<p class="content">确定提现到该银行卡？</p>

				<div class="button">
					<div class="cancel">取消</div>
					<div class="confirm">确认</div>
				</div>
			</div>
		</x-dialog>
	</div>
</template>

<script>
	import {XDialog} from 'vux'

	export default{
		name:'',
		data(){
			return{
				dialog: {
					show: true
				}
			}
		},
		components:{
			XDialog
		},
		methods:{
			
		},
		mounted(){
			
		}
	}
</script>

<style lang="less" scoped>
	.bank{
		font-size: 18px;
	}
	.bank-card{
		font-size: 12px;
	}
	.m-panel.money{
		text-align: left;
	}
	.tips{
		padding-left: 0.3rem;
		margin-top: 0.2rem;
	}
	.money-input{
		border-bottom: 1px solid #f0f0f0;
		display: flex;
		justify-content: left;
		padding: 0.21rem 0;
		margin-bottom: 0.2rem;

		input{
			line-height: 0.78rem;
			font-weight: bold;
			font-size: 36px;
		}
	}
	.money-icon{
		font-size: 32px;
		font-weight: bold;
		line-height: 0.5rem;
		margin-right: 0.15rem;
		padding-top: 0.2rem;
	}
	.all-pickup{
		color: #6d48ff;
		float: right;
	}
	.pickup-btn{
		font-size: 24px;
	}

	.m-dialog{
		.header{
			margin-top: 0.5rem;
			font-size: 16px;
		}
		.money{
			margin-top: 0.5rem;
			font-size: 36px;
			font-weight: bold;
		}
		.content{
			margin-top: 0.5rem;
			font-size: 12px;
			color: #9f9f9f;
		}
		.button{
			display: flex;
			flex-direction: row;
			height: 0.9rem;
			border-top: 0.01rem solid #f0f0f0;
			height: 1rem;
			line-height: 1rem;
			margin-top: 0.3rem;

			.cancel{
				line-height: 1rem;
				width: 50%;
				font-size: 16px;
				border-right: 0.01rem solid #f0f0f0;
			}
			.confirm{
				color: #cb3c30;
				line-height: 1rem;
				width: 50%;
				font-size: 16px;
			}
		}
	}

</style>