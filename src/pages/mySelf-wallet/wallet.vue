<template>
	<div class="p-myself-wallet">
		<cmheader :title="'我的钱包'"></cmheader>

		<!-- 头部占位 -->
		<div class="u-header-padding" ></div>

		<div class="m-wallet-details">
			<p class="details-sum f-fs-12">总余额（元）</p>			
			<p class="details-num">{{sum}}</p>
			<div class="details-inner">
				<div class="detials-voucher">
					<div class="label">购物券（元）</div>
					<div class="num">{{ voucher }}</div>
				</div>
				<div class="detials-incomon-yesterday">
					<div class="label">昨日收入（元）</div>
					<div class="num">{{ incomon }}</div>
				</div>
			</div>
		</div>
		<div class="m-btn-pickup"
			@click="goToPickup"
		>
			提现
		</div>
		<div class="c-list-item"
			@click="goToBind"
		>
			<div class="c-item-label">
				<label> 绑定银行卡 </label>
			</div>
			<div class="c-item-content">
				<div v-if="bankStatus == 0">
					未绑定
				</div>
				<div class="c-item-raw-right"></div>
			</div>
		</div>
	</div>
</template>

<script>
	import cmheader from '../../components/cmHeader.vue'

	export default{
		name:'',
		data(){
			return{
				sum: 0,
				voucher: 0,
				incomon: 0,
				bankStatus: 1
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
			},
			goToPickup(){
				this.$gotoPages('/mySelf-wallet-pickup')
			},
			goToBind(){
				this.$gotoPages('/mySelf-wallet-bind')
			},
			
		},
		mounted(){
			var _this = this;
			var params={
				id:this.$store.state.id,
			}
			params=this.$qs.stringify(params);
			_this.bankStatus = this.$store.state.userInfo.bankStatus;

			this.$axios({
				method:'post',
				data:params,
				url:'/appApi/appUsers/getBalance'
			}).then(function(res){
				if(res.status=='200'){		// TODO 
					var sum=res.data.data
					_this.sum = sum;
				}
			}).catch(function(err){
				
			})
	}
	}
</script>

<style lang="less" scoped>
	.p-myself-wallet{
		height: 100%;
		background: #f5f5f5;
	}

	.m-wallet-details{
		height: 5rem;
		width: 100%;
		text-align: center;
		background: url(../../img/myself/wallet-bg.png) no-repeat;
		background-size: 100% 100%; 
		padding-top: 0.7rem;
		box-sizing: border-box;
		color: #fff;
		
		.details-sum{
			color: #eca99d;
			margin-top: 0.4rem;
			font-size: 16px;
			margin-bottom: 0.4rem;
		}

		.details-num{
			color: #fff;
			font-size: 30px;
			margin-bottom: 0.6rem; 
		}

		.details-inner{
			display: flex;
			justify-content: center;

			.detials-voucher, .detials-incomon-yesterday{
				width: 100%;

				.label{
					color: #eca99d;
					font-size: 16px;
					margin-bottom: 0.2rem;
				}

				.num{
					color: #fff;
					font-size: 20px;
				}
			}

			.detials-voucher{
				border-right: 0.01rem solid #e27864;
			}
		}
	}

	.m-btn-pickup{
		background: #fff;
		height: 1rem;
		width: 100%;
		color: #ca0000;
		text-align: center;
		font-size: 18px;
		line-height: 1rem;
		margin-bottom: 0.2rem;
	}

	.c-list-item{
		background: #fff;
	}
</style>