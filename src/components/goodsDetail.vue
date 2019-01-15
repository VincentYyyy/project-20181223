<template>
	<div class="goods-detail">
		<!--<div @click="controlResult" style="position: fixed;top: 400px;">
			controlResult
		</div>-->
		<!--<cmheader :title="thatTitle"></cmheader>-->
		<div class="btn-bg bg-now" @click="showPopUp">
			立即购买
		</div>
		<div v-transfer-dom>
			<Popup v-model="isShowPopUp">
			<div class="goods-buy-popup" v-if="payStatus==0">
				<div class="gbp-title">
					<img src="../../static/chicon/关闭支付页面@2x.png" @click="closeWindow"> 购买礼包支付
				</div>
				<div class="goods-price-wrap flex-start-end">
					<div>
						购买&nbsp;{{goodsInfo.giftName}}&nbsp;需要支付
					</div>
					<div>
						<strong>{{goodsInfo.price}}元</strong>
					</div>
				</div>
				<div class="paytype-wrap">
					<div class="flex-start-end no-wrap pay-item" v-for="(item,index) in payList" @click="selectPayType(index)">
						<div class="flex-start">
							<div>
								<img :src="item.img">
							</div>
							<div>
								{{item.label}}
							</div>
						</div>
						<div>
							<img src="../../static/chicon/未选中@2x.png" v-if="!item.isSelected">
							<img src="../../static/chicon/选中@2x.png" v-else>	
						</div>
					</div>
				</div>
				<div class="btn-bg buy-now-btn" @click="buyGoods">
				立即支付:&nbsp;&nbsp;{{goodsInfo.price}}元
				</div>
			</div>
			<div class="goods-buy-popup" v-if="payStatus==1">
				<div class="gbp-title" style="border-bottom: 0;">
					<img src="../../static/chicon/关闭支付页面@2x.png" @click="closeWindow"> 地址选择
				</div>
				<div style="max-height: 45vh;overflow-y: scroll;overflow-x: hidden;">
					<div>
						<img src="../assets/no-add.png" v-if="addList.length==0&&!isFisrtLoad" style="margin: 0 auto;">
					</div>
					<div class="btn-bg buy-now-btn" @click="newAddress" v-if="addList.length==0&&!isFisrtLoad">
						新增
					</div>
					<div v-for="(item,index) in addList" class="add-list">
						<div class="flex-start">
							<div>
								<img src="../../static/chicon/选中@2x.png" v-if="item.isCheck" @click="checkClk(item,index)">
								<span v-else style="border-radius: 100%;border: 1px solid #ddd; box-sizing: border-box;width: 18px;height: 18px;display: inline-block;" @click="checkClk(item,index)">
									<img src="../../static/chicon/选中@2x.png" style="opacity: 0;">
								</span>
							</div>
							<div style="flex: 1;">
								<div class="flex-start">
									<div style="flex: 1;padding: 0 .2rem;"  @click="checkClk(item,index)">
										<div class="flex-start-end">
											<div><strong>
												{{item.consignee}}
											</strong></div>
											<div>
												{{item.mobile}}
											</div>
										</div>
										<div>
											{{item.address}}
										</div>
									</div>
									<div @click="newAddress">
										<img src="../../static/chicon/右箭头@2x.png">
									</div>
								</div>
							</div>
						</div>
					</div>
					<div v-if="addList.length!=0&&!isFisrtLoad"  class="btn-bg buy-now-btn" @click="changeStatus">
						去支付
					</div>
				</div>
			</div>
			<div class="goods-buy-popup" v-if="payStatus==2">
				<div class="gbp-title" style="border-bottom: 0;">
					<img src="../../static/chicon/关闭支付页面@2x.png" @click="closeWindow"> 购买礼包支付
				</div>
				<div class="pay-result">
					<img src="../../static/chicon/椭圆1@2x.png">
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
					<img src="../../static/chicon/关闭支付页面@2x.png" @click="closeWindow"> 购买礼包支付
				</div>
				<div class="pay-result">
					<img src="../../static/chicon/支付失败@2x.png">
					<div class="pay-result-title">
						购买失败
					</div>
				</div>
			</div>
		</Popup>
		</div>
	</div>
</template>

<script>
	import md5 from 'js-md5'
//	import cmheader from '../../components/cmHeader.vue'
	import { Popup,TransferDom } from 'vux'
	
	export default {
		name: 'goods-detail',
		data() {
			return {
				payStatus:1,
				payResultStatus:0,
				isShowPopUp: false,
				orderId:'',//支付订单号
				thatTitle: '礼包详情',
				selectedIndex:0,
				outlinkType:0,
				addList:[],
				isFisrtLoad:true,
				payList:[{
					label:'支付宝支付',
					img:'../../static/chicon/支付宝@2x.png',
					isSelected:true
				},{
					label:'微信支付',
					img:'../../static/chicon/微信@2x.png',
					isSelected:false
				}],
				receiptAddress:'',
				receiptPhone:'',
				receiptPerson:''
		}},
		props:['goodsInfo'],
		methods: {
			checkClk(item,index){
//				item.isChecked=!item.isChecked
				for(var i=0;i<this.addList.length;i++){
					if(i!=index){
						this.addList[i].isCheck=false
					}else{
						this.addList[i].isCheck=!this.addList[i].isCheck
//						if(this.addList[i].isCheck){
//							
//						}
					}
				}
			},
			changeStatus(){
				this.payStatus=0
			},
			closeWindow(){
				this.isShowPopUp=false
				this.payStatus=1
			},
			initAddList(){
				let _this=this
				let userInfo=JSON.parse(sessionStorage.getItem('userInfo'))
				let phone=userInfo.phone
				let str='?app_phone='+phone+'&app_strkey='+md5('hpyshop'+md5(phone))+'&act=address_list'	
				var _url='http://39.98.52.58:8081/app_api.php'+str
				console.log(_url)
				this.$axios({
					method:'get',
					url:_url
				}).then(function(res){
					console.log(res)
					if(res.status=='200'){
						var getData=res.data
						if(getData.data.length>0){
							getData.data.forEach(function(item){
								item.isCheck=false
							})
							getData.data[0].isCheck=true
							_this.receiptAddress=getData.data[0].address	//必填	String	收货人地址
							_this.receiptPhone=getData.data[0].mobile	//必填	String	收货人电话
							_this.receiptPerson=getData.data[0].consignee	//必填	String	收货人姓名
							_this.addList=getData.data							
						}
						_this.isFisrtLoad=false
					}
				}).catch(function(err){
					console.log(err)
				})
			},
			newAddress(){
				var outlink='http://39.98.52.58:8081/user.php?act=edit_consignee'
				var outlinkType=this.outlinkType
				sessionStorage.setItem('mallSrc',outlink)
				this.$gotoPages('/outlink/addressManage',{
					outlinkType:outlinkType
				})
			},
			showPopUp() {
				console.log(1111)
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
			},
			buyGoods(){
				var _this=this
				var payType=1
				if(this.selectedIndex==0){
					payType=1
				}else{
					payType=0
				}
				var params={
					id:this.$store.state.id,//	必填	String	用户ID
					giftId:this.goodsInfo.id,  //必填	String	礼包ID
					payType:payType,	//必填	Integer	支付方式
					receiptAddress:this.receiptAddress,	//必填	String	收货人地址
					receiptPhone:this.receiptPhone,	//必填	String	收货人电话
					receiptPerson:this.receiptPerson	//必填	String	收货人姓名
				}
				params=this.$qs.stringify(params)
				this.$axios({
					method:'post',
					url:'/appApi/appUsers/getGift',
					data:params
				}).then(function(res){
					
					if(res.status==200){
						var getData=res.data
						if(getData.status=='200'){
							var orderStr=getData.data.orderStr
	//						console.log(orderStr)
							_this.orderId=getData.data.orderId
							_this.goNativeAPP(orderStr)
						}else{
							alert('支付异常,请重试')
						}
						
					}else{
						alert('支付异常,请重试')
					}
				}).catch(function(err){
					console.log(err)
				})
			},
			goNativeAPP(orderStr){
				console.log(orderStr)
				if(window.android){
					window.android.ZFBPay(orderStr)
				}else{
					ZFBPay(orderStr)
				}			
			},
			controlResult(){
				var _this=this
				var params={
					id:this.$store.state.id,
					orderId:this.orderId
				}
				alert('调用了支付状态后台数据返回接口')
				params=this.$qs.stringify(params)
				this.$axios({
					method:'post',
					data:params,
					url:'/appApi/appUsers/getOrdeById'
				}).then(function(res){
					if(res.status=='200'){
						var getData=res.data
						if(getData.status=='200'){
							var payResultStatus=getData.data.status
							_this.payResultStatus=payResultStatus
							if(payResultStatus==1||payResultStatus==4){
								_this.$gotoPages('/cityloadArea/payResult',{payResultStatus:payResultStatus})
							}else{
								alert('支付异常,请重试')
							}
						}else{
							alert('支付异常,请重试')
						}
					}else{
						alert('支付异常,请重试')
					}
				}).catch(function(err){
					console.log(err)
				})
			}
		},
		components: {
			Popup,
//			cmheader
		},
		directives: {
		    TransferDom
		},
		mounted(){
			var _this=this
			this.initAddList()
			console.log(this.$store.state.isFromMall)
			if(this.$store.state.isFromMall){
				this.isShowPopUp=true
			}
			window.onload=function(){
				function PayState(val){
					_this.controlResult()
				}
			}
			function PayState(val){
				_this.controlResult()
			}
		}
	}
</script>

<style lang="less">
	.add-list{
		>div{
			font-size: 16px;
			padding: .2rem;
			box-sizing: border-box;
		}
		img{
			display: block;
			width: 18px;
			height: 18px;
			
		}
		span{
			display: inline-block;
		}
		strong{
		font-size: 14px;
		/*padding: .1rem;*/
		color: #333333;
	}
	}
	
	/*.buying{
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
}*/
.goods-detail,.bg-now{
	/*z-index: 10000;*/
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
				text-align: center;
				font-weight: 600;
				line-height: .86rem;
			}
		}
	.buy-now-btn{
		line-height: 50px;
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 50px;
		text-align: center;
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
		justify-content: space-between;
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
		height: 50px;
		line-height: 50px;
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