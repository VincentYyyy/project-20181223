<template>
	<div class="mall-wrap">
		<cmheader :title="thatTitle" :backUrl='backUrl'></cmheader>
		<iframe :src="mallSrc" id="mall-iframe" ref="myIframe">
			
		</iframe>
	</div>
</template>

<script>
	import md5 from 'js-md5'
	import cmheader from '../../components/cmHeader.vue'
	export default{
		name:'mall',
		data(){
			return{
				thatTitle:'商城',
				backUrl:'/home',
				mallSrc:''
			}
		},
		watch:{
			"mallSrc":{
				handler:function(){
					console.log(111111111111111)	
				},
				deeply:true
			}
		},
		methods:{
			autoGetUserInfo(){
				var userInfo=JSON.parse(sessionStorage.getItem('userInfo'))
				var phone=userInfo.phone
				var params='?app_phone='+phone+'&app_strkey=hpyshop'+md5(phone)
				var domain=this.$route.query.domain
				var _url=domain+params
				this.mallSrc=_url
				console.log(_url)
			}
		},
		components:{
			cmheader
		},
		created(){
			this.autoGetUserInfo()
		},
		mounted(){
			var _this=this
//			setInterval(function(){
//				console.log(this.$refs.myIframe.getAttribute('src'))  
//			},1000)
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