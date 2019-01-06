<template>
	<div class="goods-detail">
		<cmheader :title="thatTitle"></cmheader>
		<div class="btn-bg bg-now" @click="showPopUp">
			立即购买
		</div>
		<Popup v-model="isShowPopUp">
			<div class="goods-buy-popup" v-if="payStatus==0">
				<div class="gbp-title">
					<img src="../../../static/chicon/关闭支付页面@2x.png" @click="isShowPopUp=false"> 购买礼包支付
				</div>
				<div class="goods-price-wrap flex-start-end">
					<div>
						购买XX商品需要支付
					</div>
					<div>
						<strong>88元</strong>
					</div>
				</div>
				<div class="paytype-wrap">
					<div class="flex-start-end no-wrap pay-item" v-for="(item,index) in payList">
						<div class="flex-start">
							<div>
								<img :src="item.img">
							</div>
							<div>
								{{item.label}}
							</div>
						</div>
						<div @click="selectPayType(index)">
							<img src="../../../static/chicon/未选中@2x.png" v-if="!item.isSelected">
							<img src="../../../static/chicon/选中@2x.png" v-else>	
						</div>
					</div>
				</div>
				<div class="btn-bg buy-now-btn">
				立即支付:&nbsp;&nbsp;88元
			</div>
			</div>
			<div class="goods-buy-popup" v-if="payStatus==1">
				<div class="gbp-title" style="border-bottom: 0;">
					<img src="../../../static/chicon/关闭支付页面@2x.png" @click="isShowPopUp=false"> 购买礼包支付
				</div>
				<div class="pay-result">
					<img src="../../../static/chicon/支付成功@2x.png">
					<div class="pay-result-title">
						购买成功
					</div>
					<div class="pay-result-tips">
						提示，购买成功
					</div>
				</div>
				<div class="result-back">
					<div class=" btn-bg back-btn">
						返回城主专区
					</div>
				</div>
			</div>
			<div class="goods-buy-popup" v-if="payStatus==2">
				<div class="gbp-title" style="border-bottom: 0;">
					<img src="../../../static/chicon/关闭支付页面@2x.png" @click="isShowPopUp=false"> 购买礼包支付
				</div>
				<div class="pay-result">
					<img src="../../../static/chicon/椭圆1@2x.png" class="buying">
					<div class="pay-result-title">
						正在购买中
						<label>
							...
						</label>
					</div>
				</div>
			</div>
			<div class="goods-buy-popup" v-if="payStatus==3">
				<div class="gbp-title" style="border-bottom: 0;">
					<img src="../../../static/chicon/关闭支付页面@2x.png" @click="isShowPopUp=false"> 购买礼包支付
				</div>
				<div class="pay-result">
					<img src="../../../static/chicon/支付失败@2x.png">
					<div class="pay-result-title">
						购买失败
					</div>
				</div>
			</div>
		</Popup>
	</div>
</template>

<script>
	import cmheader from '../../components/cmHeader.vue'
	import { Popup } from 'vux'
	export default {
		name: 'goods-detail',
		data() {
			return {
				payStatus:2,
				isShowPopUp: false,
				thatTitle: '礼包详情',
				selectedIndex:0,
				payList:[{
					label:'支付宝支付',
					img:'../../../static/chicon/支付宝@2x.png',
					isSelected:true
				},{
					label:'微信支付',
					img:'../../../static/chicon/微信@2x.png',
					isSelected:false
				}]
		}},
		methods: {
			showPopUp() {
				this.isShowPopUp = true
			},
			selectPayType(index){
				this.selectedIndex=index
				for(var i=0;i<this.payList.length;i++){
					var item=this.payList[i]
					if(i==index){
						item.isSelected=true
					}else{
						item.isSelected=false
					}					
				}
			}
		},
		components: {
			Popup,
			cmheader
		}
	}
</script>

<style lang="less">
	.buying{
 -webkit-transition-property: -webkit-transform;
    -webkit-transition-duration: 1s;
    -moz-transition-property: -moz-transform;
    -moz-transition-duration: 1s;
    -webkit-animation: rotate 3s linear infinite;
    -moz-animation: rotate 3s linear infinite;
    -o-animation: rotate 3s linear infinite;
    animation: rotate 3s linear infinite;
}
@-webkit-keyframes rotate{from{-webkit-transform: rotate(0deg)}
    to{-webkit-transform: rotate(360deg)}
}
@-moz-keyframes rotate{from{-moz-transform: rotate(0deg)}
    to{-moz-transform: rotate(359deg)}
}
@-o-keyframes rotate{from{-o-transform: rotate(0deg)}
    to{-o-transform: rotate(359deg)}
}
@keyframes rotate{from{transform: rotate(0deg)}
    to{transform: rotate(359deg)}
}
	.pay-result{
		padding-top: 1.3rem;
		text-align: center;
		
		img{
			display: block;
			margin: 0 auto;
			margin-bottom: .4rem;
			width: 1.58rem;
			height: 1.58rem;
		}
		.pay-result-title{
			font-weight: 400;
			font-size: 16px;
			line-height: 20px;
			padding-bottom: .44rem;
			label{
				position: relative;
				top: -4px;
			}
		}
		.pay-result-tips{
			font-size: 13px;
			line-height: 17px;
			padding: 0 .3rem;
		}
		
	}
	.result-back{
			padding: .3rem;
			box-sizing: border-box;
			width: 100%;
			position: absolute;
			bottom: 0;
			left:0;
			.back-btn{
				width: 100%;
				height: .86rem;
				color: #FFFFFF;
				border-radius: .1rem;
				font-size: 16px;
				font-weight: 600;
				line-height: .86rem;
			}
		}
	.buy-now-btn{
		line-height: .96rem;
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		height: .96rem;
		color: #FFFFFF;
		font-size: 16px;
	}
	.paytype-wrap{
		padding-bottom: 1.1rem;
	}
	.pay-item{
		padding: 0 .2rem;
		box-sizing: border-box;
		
		div{
			font-size: 14px;
		}
		>div:first-child{
			img{
				width: .84rem;
				height: .84rem;
				display: block;
				margin-right: .18rem;
				margin-top: .25rem;
				margin-bottom: .25rem;
			}
		}
		>div:last-child{
			img{
				width: .36rem;
				height: .36rem;
				display: block;
			}
		}
	}
	.goods-buy-popup{
		height: 7.4rem;
		position: relative;
	}
	.goods-price-wrap {
		height: 1rem;
		line-height: 1rem;
		font-size: 13px;
		padding: 0 .2rem;
		box-sizing: border-box;
		border-bottom: .1rem solid #f5f5f5;
		>div{
			font-size: 13px;
		}
		strong {
			color: #E03228;
			font-size: 13px;
		}
	}
	
	.bg-now {
		text-align: center;
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		height: .96rem;
		line-height: .96rem;
		font-size: 16px;
		color: #FFFFFF;
	}
	
	.goods-buy-popup {
		.gbp-title {
			position: relative;
			text-align: center;
			font-size: 16px;
			font-weight: 600;
			line-height: 1.04rem;
			height: 1.04rem;
			border-bottom: .1rem solid #f5f5f5;
			img {
				width: 18px;
				height: 18px;
				position: absolute;
				left: .2rem;
				top: 50%;
				margin-top: -9px;
				display: block;
			}
		}
	}
	
</style>