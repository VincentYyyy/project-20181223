<template>
	<div class="order-manager">
		<cmheader :title="'绑定银行卡'"></cmheader>

		<!-- 头部占位 -->
		<div class="u-header-padding" ></div>

		<div class="tab-wrap">
			<tab>
		      <tab-item selected @on-item-click="onItemClick('all')">全部</tab-item>
		      <tab-item @on-item-click="onItemClick('pay')">支出</tab-item>
		      <tab-item @on-item-click="onItemClick('income')">收入</tab-item>
		    </tab>
		</div>
		<!-- <router-view/> -->

		<div class="order-content p-budget-panel-0">
			<div class="order-content-scroll">

				<div v-for="item in budget.items" 
					class="c-list-item"
					@click="item.onClick && item.onClick(item)"
				>
					<div class="c-item-label budget-infor">
						<img class="user-infor-img" :src="item.img" alt="">
						<div class="user-infor-details">
							<p class="f-tl">{{item.label}}</p>
							<p class="budget-type f-tl" v-if="item.phone">[{{item.type}}]</p>
							<p class="f-tl">{{item.date}}</p>
						</div>
					</div>
					<div class="c-item-content">
						<p class="budget-num"
							:class="{
								'budget-out': item.budget <= 0,
								'budget-in': item.budget > 0
							}"
						>
							<span v-if="item.budget > 0">+</span>{{item.budget}}
						</p>
						<p class="budget-status"
							:class="item.class"
							v-if="item.status"
						>
							{{item.status.label}}
						</p>
					</div>
				</div>

			</div>
		</div>
	</div>
</template>

<script>
	import { Tab, TabItem } from 'vux'
	import cmheader from '../../components/cmHeader.vue'

	export default {
		data(){
			return{
				budget:{
					items:[{
						label: '余额提现到银行卡',
						img: require('../../img/myself/男@2x.png'),
						type: "提现",
						phone: "12345678901",
						date: '今天 20:33',
						budget: -200,
						class:  {
							'f-red-1': true
						},
						status: {
							type: 'finished',
							label: '已完成'
						},
						onClick: function (){

						}
					}, {
						label: '完成任务奖励',
						img: require('../../img/myself/男@2x.png'),
						type: "提现",
						phone: "12345678901",
						date: '今天 20:33',
						class:  {
							'f-gray-1': true
						},
						budget: 200,
						status: {
							type: 'processing',
							label: '正在处理'
						},
						onClick: function (){

						}
					}]
				}
			}
		},
		components: {
			Tab,
			TabItem,
			cmheader
		},
	  methods:{
	  	goPrev(){
	  		window.history.go(-1)
	  	},
	  	onItemClick(val){
			
	  	}
	  },
		created(){
		  this.$HRApp('getUserBill',{
				FIXME: true,
				params: {
					id: this.$store.state.id,
					pageNum: 0,
					pageSize: 200
				},
				then: function (data){
					console.log("ddd", data)
				}
			})
	  }
	}
</script>

<style lang="less">
	.draw-list{
		color: #333333;
		font-size: 17px;
	}
	.vux-tab-item{
		position: relative;
	}
	.vux-tab-container{
		line-height: .88rem;	
	}
	.vux-tab{
		height: auto!important;
	}
	.vux-tab-selected::after{
		content: '';
		width: .2rem;
		height: 4px;
		position: absolute;
		bottom: .08rem;
		left: 50%;
		margin: 0;
		background: #E03228;
		border-radius: 2px 2px 2px 2px;
		margin-left: -.1rem;
	}
	.vux-tab-container{
		background: #FFFFFF;	
	}
	.order-content{
		padding-top: 0.9rem;
	}
	.tab-wrap{
		position: fixed;
		padding-top: .88rem;
		top: 0;
		left: 0;
		width: 100%;

		.vux-tab{
			border-bottom: 0.01rem solid #f5f5f5;
		}
	}
	.order-manager{
		height: 100%;
	}


	.p-budget-panel-0{

		.user-infor-img{
			width: 0.8rem;
			height: 0.8rem;
			border-radius: 0.4rem;
			margin-right: 0.2rem;
		}
		.c-list-item{
			
			.c-list-label{
				width: 65%;

				.budget-infor{
					text-align: left;
				}
			}

			.c-item-content{
				width: 35%;
				display: flex;
				flex-direction: column;

				.budget-num{
					margin-bottom: 0.4rem;

					&.budget-out{
						color: black;
					}

					&.budget-in{
						color: red;
						span{
							color: red;
						}
					}

				}
			}

		}
	}
</style>