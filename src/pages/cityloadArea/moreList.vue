<template>
	<div class="more-list">
		<div class="more-list-title">	
			<div class="title-wrap">
				<span>XXX</span>>xxxxxxxxxxxxxxx
			</div>
		</div>
		<div class="more-content-list">
			<div class="flex-start-end" v-for="(item,index) in goodsList">
				<div class="list-item-l flex-start">
					<div>
						<img :src="item.img">
						<!--<img src="../../img/appicon/trangle-r1.png">-->
					</div>
					<div>
						<div>
							{{item.title}}
						</div>
						<div>
							{{item.p}}
						</div>
					</div>
				</div>
				<div>
					XX
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:'',
		data(){
			return{
				goodsList:[{
					img:'../../../static/myself/xxjd_icon@2x.png',
					title:'介绍',
					p:'内容',
					href:''
				},{
					img:'../../../static/myself/xxjd_icon@2x.png',
					title:'介绍',
					p:'内容',
					href:''
				},{
					img:'../../../static/myself/xxjd_icon@2x.png',
					title:'介绍',
					p:'内容',
					href:''
				},{
					img:'../../../static/myself/xxjd_icon@2x.png',
					title:'介绍',
					p:'内容',
					href:''
				},{
					img:'../../../static/myself/xxjd_icon@2x.png',
					title:'介绍',
					p:'内容',
					href:''
				},{
					img:'../../../static/myself/xxjd_icon@2x.png',
					title:'介绍',
					p:'内容',
					href:''
				},{
					img:'../../../static/myself/xxjd_icon@2x.png',
					title:'介绍',
					p:'内容',
					href:''
				}]
			}
		},
		components:{
			
		},
		methods:{
			
		},
		mounted(){
			
		}
	}
</script>

<style lang="less">
	.more-list-title{
		height: .88rem;
		line-height: .88rem;
		font-size: 20px;
		text-align: center;	
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		z-index: 999;
		background: #FFFFFF;
	}
	.more-list-title{
		.title-wrap{
			position: relative;
			width: 100%;
			height: 100%;
			box-sizing:border-box;
			padding:0 .3rem;
			span{
				float: left;
			}
		}
	}
	.more-content-list{
		position: relative;
		margin-top: .88rem;
	}
	.flex-start-end{
			flex-wrap: nowrap;
			justify-content: center;
			align-items: center;
		}
		.list-item-l{
				img {
					width: 2rem;
					height: 2rem;
					display: block;
				}
		}
</style>