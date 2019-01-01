<template>
	<div class="cityload-area">
		<div class="">
			<h5>
				城主专区
			</h5>
		</div>
		<div class="flex-item-3 flex-start">
			<div v-for="(item,index) in cityLoadList"  @click="orderList">
				<img :src="item.img">
			</div>
			<div @click="moreList">
				更多礼包
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:'cityloadArea',
		data(){
			return{
				cityLoadList:[{
					img:'../../../static/myself/set_icon@2x.png'
				},{
					img:'../../../static/myself/set_icon@2x.png'
				},{
					img:'../../../static/myself/set_icon@2x.png'
				},{
					img:'../../../static/myself/set_icon@2x.png'
				},{
					img:'../../../static/myself/set_icon@2x.png'
				}]
			}
		},
		components:{
			
		},
		methods:{
			moreList(){
				this.$gotoPages('/cityloadArea/moreList')
			},
			orderList(){
				this.$gotoPages('/cityloadArea/orderManager')
			}
		},
		mounted(){
			
		}
	}
</script>

<style>
	.cityload-area h5{
		padding: .15rem 0;
		line-height: 16px;
		font-size: 14px;
	}

</style>