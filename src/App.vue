<template>
  <div id="app">
    <router-view/>
    <div v-if="isShowFoot">
			
		</div>
		<footMenu></footMenu>
  </div>
</template>

<script>
	//document.documentElement.style.fontSize = document.documentElement.clientWidth / 7.5 + 'px';
import footMenu from './components/Foot.vue'
export default {
  name: 'App',
  data(){
  	return {
  		isShowFoot:true
  	}
  },
  components:{
  	footMenu
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
  padding-bottom: 54px;
}
html,body,#app{
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
