<template>
	<div class="publicity img-bg1"> 
		<!--下拉刷新容器-->
		<div id="pullrefresh" class="mui-content mui-scroll-wrapper">
			<div class="mui-scroll community-num">
				<!--数据列表-->
				<ul class="mui-table-view mui-table-view-chevron">
					<li class="mui-table-view-cell">
						<div>
							INU提示：公示结束后会隐藏个人信息，保护受助者隐私。
						</div>
					</li>
					<li class="mui-table-view-cell" v-for="pb in publicityList1" :key="pb.id" @click="getDetails(pb.id)">
						<img :src="pb.img">
						<span>{{pb.time}}</span>
						<div class="mui-media-body">
							<div>互助会员：{{pb.help_member}}</div>
							<div>互助计划：{{pb.help_plan}}</div>
							<div>所获互助金：{{pb.help_money}}</div>
						</div>
						<p>
							事件概况：{{pb.event}}
						</p>
					</li>
					 
				</ul>
			</div>
		</div>

	</div>
</template>


<script>
 	
	import img1 from '@/assets/images/muwu.jpg' 
	export default {
	// 		components:{
	// 			Nav
	// 		},
		data() {
	      	return {
	      		publicityList1:[
	      		{id:1,'img':img1,'time':'2018-01-01','help_member':'欧阳晓雨','help_plan':'欧阳晓雨','help_money':'27000','event':'补充细胞水分、促进水液代谢、稀释血液、预防便秘等，同时保证上午人体水分充足冲…'},
	      		{id:2,'img':img1,'time':'2018-01-01','help_member':'欧阳晓雨','help_plan':'欧阳晓雨','help_money':'27000','event':'补充细胞水分、促进水液代谢、稀释血液、预防便秘等，同时保证上午人体水分充足冲…'},
	      		{id:3,'img':img1,'time':'2018-01-01','help_member':'欧阳晓雨','help_plan':'欧阳晓雨','help_money':'27000','event':'补充细胞水分、促进水液代谢、稀释血液、预防便秘等，同时保证上午人体水分充足冲…'},
	      		 ],
	      		 publicityList2:[
	      		{id:11,'img':img1,'time':'2018-01-01','help_member':'欧阳晓雨1','help_plan':'欧阳晓雨','help_money':'27000','event':'补充细胞水分、促进水液代谢、稀释血液、预防便秘等，同时保证上午人体水分充足冲…'},
	      		{id:12,'img':img1,'time':'2018-01-01','help_member':'欧阳晓雨2','help_plan':'欧阳晓雨','help_money':'27000','event':'补充细胞水分、促进水液代谢、稀释血液、预防便秘等，同时保证上午人体水分充足冲…'},
	      		{id:13,'img':img1,'time':'2018-01-01','help_member':'欧阳晓雨3','help_plan':'欧阳晓雨','help_money':'27000','event':'补充细胞水分、促进水液代谢、稀释血液、预防便秘等，同时保证上午人体水分充足冲…'},
	      		{id:14,'img':img1,'time':'2018-01-01','help_member':'欧阳晓雨4','help_plan':'欧阳晓雨','help_money':'27000','event':'补充细胞水分、促进水液代谢、稀释血液、预防便秘等，同时保证上午人体水分充足冲…'},
	      		{id:15,'img':img1,'time':'2018-01-01','help_member':'欧阳晓雨5','help_plan':'欧阳晓雨','help_money':'27000','event':'补充细胞水分、促进水液代谢、稀释血液、预防便秘等，同时保证上午人体水分充足冲…'},
	      		{id:17,'img':img1,'time':'2018-01-01','help_member':'欧阳晓雨6','help_plan':'欧阳晓雨','help_money':'27000','event':'补充细胞水分、促进水液代谢、稀释血液、预防便秘等，同时保证上午人体水分充足冲…'},
	      		{id:19,'img':img1,'time':'2018-01-01','help_member':'欧阳晓雨7','help_plan':'欧阳晓雨','help_money':'27000','event':'补充细胞水分、促进水液代谢、稀释血液、预防便秘等，同时保证上午人体水分充足冲…'},
	      		{id:16,'img':img1,'time':'2018-01-01','help_member':'欧阳晓雨8','help_plan':'欧阳晓雨','help_money':'27000','event':'补充细胞水分、促进水液代谢、稀释血液、预防便秘等，同时保证上午人体水分充足冲…'},
	      		{id:111,'img':img1,'time':'2018-01-01','help_member':'欧阳晓雨9','help_plan':'欧阳晓雨','help_money':'27000','event':'补充细胞水分、促进水液代谢、稀释血液、预防便秘等，同时保证上午人体水分充足冲…'},
	      		{id:41,'img':img1,'time':'2018-01-01','help_member':'欧阳晓雨10','help_plan':'欧阳晓雨','help_money':'27000','event':'补充细胞水分、促进水液代谢、稀释血液、预防便秘等，同时保证上午人体水分充足冲…'},
	      		{id:51,'img':img1,'time':'2018-01-01','help_member':'欧阳晓雨11','help_plan':'欧阳晓雨','help_money':'27000','event':'补充细胞水分、促进水液代谢、稀释血液、预防便秘等，同时保证上午人体水分充足冲…'},
	      		{id:61,'img':img1,'time':'2018-01-01','help_member':'欧阳晓雨12','help_plan':'欧阳晓雨','help_money':'27000','event':'补充细胞水分、促进水液代谢、稀释血液、预防便秘等，同时保证上午人体水分充足冲…'},
	      		 ],
	      		count:0
 	      	};
	   	},
	   	
	   	created(){
//	   		for(var i = mui.hooks.inits.length-1,item;i>=0;i--){
//	          	item=mui.hooks.inits[i];
//	          	if(item.name=="pullrefresh"){
//	              	item.repeat=true;
//        		}
//    		}
	   	},
	   	methods:{
	   		/**
			 * 上拉加载具体业务实现
			 */
			
			pullupRefresh() {
				let that = this;
				
				setTimeout(function() { // 模拟ajax
					that.publicityList1 = that.publicityList1.concat(that.publicityList2);
					mui('#pullrefresh').pullRefresh().endPullupToRefresh((++this.count > 2)); //参数为true代表没有更多数据了。

				}, 1500);
			},
			getDetails(id){
				alert(id)
				this.$router.push({ path:'/details', params:{'id':id } })
			}
	   	},
	   	mounted(){
	   		this.mui.init({
				pullRefresh: {
					container: '#pullrefresh',
//					down: {
//						callback: pulldownRefresh
//					},
					up: {
						contentrefresh: '正在加载...',
						callback: this.pullupRefresh
					}
				}
			});
			
			
			/**
			 * 下拉刷新具体业务实现
			 */
//			function pulldownRefresh() {
//				setTimeout(function() {
//					var table = document.body.querySelector('.mui-table-view');
//					var cells = document.body.querySelectorAll('.mui-table-view-cell');
//					for (var i = cells.length, len = i + 3; i < len; i++) {
//						var li = document.createElement('li');
//						li.className = 'mui-table-view-cell';
//						li.innerHTML = '<a class="mui-navigate-right">Item ' + (i + 1) + '</a>';
//						//下拉刷新，新纪录插到最前面；
//						table.insertBefore(li, table.firstChild);
//					}
//					mui('#pullrefresh').pullRefresh().endPulldownToRefresh(); //refresh completed
//				}, 1500);
//			}		  
	   }
	}
</script>
 
<style scoped>
 
</style>