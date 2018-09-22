<template>
	<header class="mui-bar mui-bar-nav header">
		<a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
		<h1 class="mui-title">{{title}}</h1>
	</header>
</template>

<script>		
	import {mapState} from "vuex";
	export default {
		computed:{
			...mapState({
				 title:state => state.layout.title
			})
		},
		mounted () {
			mui.init({
				swipeBack:true //启用右滑关闭功能
			});
			 
		}
	}
</script>
 