<template>
	<div class="add-manage">
		<outlink :thatTitle="thatTitle">
		</outlink>
	</div>
</template>

<script>
	import outlink from '../../components/outlink.vue'
	export default{
		name:'',
		data(){
			return{
				thatTitle:''
			}
		},
		components:{
			outlink
		},
		methods:{
			
		},
		created(){
			this.thatTitle=this.$route.query.linkType==0?'收货地址新增':'收货地址编辑'
		},
		mounted(){
			
		}
	}
</script>

<style>
	.add-manage{
		height: 100%;	
	}
</style>