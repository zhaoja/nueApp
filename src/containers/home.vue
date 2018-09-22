<template>
	<div class="home">
		<!--<a href="#/qrCode">二维码</a>-->
		<div class="home-slider">
			<div id="slider" class="mui-slider">
				<div class="mui-slider-group mui-slider-loop">
					<!-- 额外增加的一个节点(循环轮播：第一个节点是最后一张轮播) -->
					<div class="mui-slider-item  mui-slider-item-duplicate">
						<a href="#"><img :src="imglist[imglist.length-1].logo"></a>
					</div>
					<div class="mui-slider-item" v-for="img in imglist" :key="img.id">
						<a href="#"><img :src="img.logo"></a>
					</div>
				 
					<!-- 额外增加的一个节点(循环轮播：最后一个节点是第一张轮播) -->
					<div class="mui-slider-item mui-slider-item-duplicate">
						<a href="#"><img :src="imglist[0].logo"></a>
					</div>
				</div>
				<div class="mui-slider-indicator">
					<div class="mui-indicator mui-active"></div>
					<div class="mui-indicator"></div>
					<div class="mui-indicator"></div>
					<div class="mui-indicator"></div>
				</div>
			</div>
			<div class="text">
				<span class="mui-icon mui-icon-eye"></span>平台注册用户突破100万
			</div>
		</div>
		<div class="mui-content home-summary">
			<div class="mui-content-padded">
				<div>
					<span>9,991,124</span> 人已加入计划。
					<a href="#/statistics">查看区块链 </a>
				</div>
			</div>
		</div>
		<div class="mui-content home-insurance-type">
			<div class="mui-card">
				
				<div class="mui-card-content">
					<h4>保障计划</h4>
					<ul class="mui-table-view">
						<li class="mui-table-view-cell mui-media" v-for="ins in insureData.insurance" :key="ins.id">
							<img class="mui-pull-left" :src="ins.insurance_logo">
							<div class="mui-media-body">
								<b>{{ins.insurance_name}}</b>
								<p>{{ins.insurance_range}}</p>
								<router-link class="mui-btn mui-btn-warning"  :to="{name:'保险详情',params:{id:ins.id}}">立即加入</router-link>
							</div>
						</li>
					</ul>
				</div>
				
			</div>
		</div>
	</div>
</template>
<script>
 
	import { mapState } from "vuex"
	export default {
//		name: 'home',
		computed: {
			...mapState({
				imglist:state => state.home.homeData.imglist, 
				insureData:state => state.home.homeData.insureData,
			})
		},
		created(){
			
//			this.$store.dispatch("getTitle","")
			this.$store.dispatch("getLogo")
			this.$store.dispatch("getInsurance")
			
		},
		methods:{
			gotoDetails(id){
				this.$router.push({ path: `/insuranceDetails/${id}` })
			}
		},
		mounted(){
		 	console.log(this.$store.state.user,"user")
			var slider = this.mui("#slider");
			slider.slider({
				interval: 5000
			});
		 	this.mui.init()
		}
	}
</script>

 