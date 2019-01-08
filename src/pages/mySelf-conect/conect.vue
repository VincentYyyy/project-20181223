<template>
	<div class="myself home">
		<cmheader :title="'联系我们'"></cmheader>

		<!-- 头部占位 -->
		<div class="u-header-padding" ></div>

		<!-- 个人信息 -->
		<div class="m-details" v-show="commond.pageState === 'details'">
			<textarea class="u-content f-fs-14" name="" id="" cols="30" rows="10" placeholder="请输入给客服的留言..."></textarea>
			<input class="u-conection f-fs-14" type="text" placeholder="请输入联系方式 （手机 / 微信 / 邮箱）">
		</div>

		<div class="c-btn">
			<button class="f-fs-16">提交</button>
		</div>
		
	</div>
</template>

<script>
	import cmheader from '../../components/cmHeader.vue'
	import { XButton, Popup } from 'vux'	
	
	var popup ={show: false}
	var common = {
		pageState: 'details'
	}

	export default{
		name:'myself',
		filters: {
			filterFactory: function(value, type){
				var filter = {
					phone: function(value){
						return "TODO " + value
					},
					identify: function(){
						return "TODO " + value
					}
				}[type];

				return filter(value);
			},
		},
		data(){
			return{
				popup: popup,
				commond: common,
				details: {
					items:[{
						label: '一级会员',
						level: 1,
						rawRight: true,
					},{
						label: '二级会员',
						level: 2,
						rawRight: true,
					}]
				},
			}
		},
		methods:{
			toLink(item){
				this.$gotoPages('/mySelf-myTeam-vipList', {level: item.level})
			}
		},
		components:{
			XButton,
			Popup,
			cmheader
		},
		created(){
		}
	}
</script>

<style lang="less" scoped>
.myself{
	padding: 0.3rem;

	.u-content{
		width: 100%;
		height: 3.15rem;
		background: #f5f5f5;
		line-height: 0.5rem;
		border-radius: 0.1rem;
		border: none;
		padding: 0.35rem;
		box-sizing: border-box;
		margin-bottom: 0.3rem;
	}

	.u-conection{
		width: 100%;
		background: #f5f5f5;
		border: none;
		border-radius: 0.1rem;
		height: 1rem;
		padding: 0.35rem;
		box-sizing: border-box;
		// line-height: 1rem;
		margin-bottom: 0.8rem;
	}

}

 
 .home{
	position: relative;	
 }
</style>