<template>
	<div class="mall-wrap">
		<cmheader :title="thatTitle" :baseUrl='baseUrl'></cmheader>
		<iframe src="http://www.baidu.com" id="mall-iframe">
			
		</iframe>
	</div>
</template>

<script>
	import cmheader from '../../components/cmHeader.vue'
	export default{
		name:'mall',
		data(){
			return{
				thatTitle:'商城',
				baseUrl:'/home'
			}
		},
		methods:{
			
		},
		components:{
			cmheader
		}
	}
</script>

<style>
	.mall-iframe{
		height: 100%;
		width: 100%;
		border: 0;
		padding: 0;
	}
	.mall-wrap{
		box-sizing: border-box;
		height: 100%;
		width: 100%;
		overflow: hidden;
		padding-top: .88rem;
	}
</style>