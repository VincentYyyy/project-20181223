<template>
	<div class="cm-header">
		<img src="../../static/chicon/back.jpg" class="pre" @click="goPrev">
		<div class="p1p"><strong class="draw-list">{{title}}</strong>
		</div>
	</div>
</template>

<script>
	export default{
		name:'cm-header',
		props:['title'],
		data(){
			return{
				
			}
		},
		methods:{
			goPrev(){
				window.history.go(-1)
			}
		}
	}
</script>

<style>
</style>