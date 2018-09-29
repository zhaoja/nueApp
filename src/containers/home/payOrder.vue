<template>
	<div class="mui-content pay-oder">
	    <qriously :value="initQCode" :size="138"/>     
	    <!-- initQCode: 是你在你的vue实例中定义好的变量   
	    size:是这个Canvas的大小，这里要根据你的视觉稿来决定-->
  		<div>邀请亲朋好友加入INU<br/>共同保障健康</div>
	</div>
</template>
<script>
	export default {
		data(){
			return {
			 	initQCode: '678678687'
			}
		},
		created() {
		    this.qrcode()
//			console.log(this.$route.query, 99999)
		},
		methods: {
			qrcode() {
				console.log(this.$route.query,9)
				var value = [
				 	this.$route.query.order_id,
					this.$route.query.order_many,
					this.$route.query.walletAddress ,	
				]
				value = JSON.stringify(value); 
 
				this.initQCode = value
 			 
			}  
		} 
 
	}
</script>

<style>

</style>