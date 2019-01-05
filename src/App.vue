<template>
	<div id="app" :class="{'app-bottom':isShowFoot}">
		<router-view/>
		<div v-if="isShowFoot">
			<footMenu></footMenu>
		</div>
		
	</div>
</template>

<script>
	//document.documentElement.style.fontSize = document.documentElement.clientWidth / 7.5 + 'px';
	import footMenu from './components/Foot.vue'
	export default {
		name: 'App',
		data() {
			return {
				isShowFoot: false
			}
		},
		components: {
			footMenu
		},
		watch: {
			//切换路由必定滚动到顶部
			'$route' (to, from) {　　　
//				document.body.scrollTop = 0;
//				document.documentElement.scrollTop = 0
				var pagePath = ['/home', '/cityloadArea','/findNew', '/mySelf']
				console.log(to.path)
				if(pagePath.indexOf(to.path) != -1) {
					this.isShowFoot = true
				} else {
					this.isShowFoot = false
				}
			}
		}
	}
</script>

<style>
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		box-sizing: border-box;
		
	}
	.app-bottom{
		padding-bottom: 54px;
	}
	html,
	body,
	#app {
		width: 100%;
		height: 100%;
		overflow: scroll;
	}
	/*.footer-wrap{
	position: fixed;
	bottom: 0;
	width: 100%;
	height: auto;
}*/
</style>