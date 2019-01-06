<template>
	<div class="order-manager">
		<div class="cm-header">
			<img src="../../../static/chicon/黑色返回@2x.png" class="pre" @click="goPrev">
			<div class="p1p"><strong  class="draw-list">领取列表</strong>
			</div>
		</div>
		<div class="tab-wrap">
			<tab>
		      <tab-item selected @on-item-click="onItemClick">待完成</tab-item>
		      <tab-item @on-item-click="onItemClick">待审核</tab-item>
		      <tab-item @on-item-click="onItemClick">已完成</tab-item>
		      <tab-item @on-item-click="onItemClick">已驳回</tab-item>
		    </tab>
		</div>
		<router-view/>
	</div>
</template>

<script>
	import { Tab, TabItem } from 'vux'
	export default {
	  components: {
	    Tab,
	    TabItem
	  },
	  methods:{
	  	goPrev(){
	  		this.$gotoPages('/cityloadArea')
	  	},
	  	onItemClick(val){
	  		var _links=['/cityloadArea/orderImperfect','/cityloadArea/orderAuditing','/cityloadArea/orderFinish','/cityloadArea/orderReject']
	  		this.$gotoPages(_links[val])
	  	}
	  }
	}
</script>

<style>
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
	.tab-wrap{
		position: fixed;
		padding-top: .88rem;
		top: 0;
		left: 0;
		width: 100%;
	}
	.order-manager{
		height: 100%;
	}
</style>