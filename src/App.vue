<template>
 <div id="app">
		<Head/>
		<router-view/>
		<!--<Footer/>-->
	</div>
</template>

<script>
//	import Footer from "@/components/Footer.vue"
	import Head from "@/components/Head.vue"

	export default {
		name: 'App',
		components: {
//			Footer,
			Head
		}
	}
</script>

<style>

*{
	margin: 0;
	padding: 0;
}
html,body{
  height: 100%;
}
#app {
	position: relative;
	margin: 40px 0;
	min-height: 100%;
  	font-family: 'Avenir', Helvetica, Arial, sans-serif;
  	-webkit-font-smoothing: antialiased;
  	-moz-osx-font-smoothing: grayscale;
  	overflow: hidden;
 	/*color: #333333;*/
}
</style>
