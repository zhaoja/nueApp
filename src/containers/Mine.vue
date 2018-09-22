<template>
	<div class="mui-content mine">
		<img src="@/assets/images/shequ.png" class="imgbg" alt="" />
		<div class="myinner">
			<div class="setup">
				<a href="#/accountInfo"><span class="mui-icon mui-icon-gear-filled"></span></a>
			</div>
			<div class="inner1">
				<img src="@/assets/images/my.png" alt="" />
				<a href="#/plogin" class="mui-btn mui-btn-white mui-btn-outlined" v-if="!ifLogin">登录/注册</a>				
				<div class="mui-btn mui-btn-white mui-btn-outlined" v-if="ifLogin">21313232</div>				
			</div>     
			<div class="mui-card" style="margin-bottom: 35px;">
				<ul class="mui-table-view">
					<li class="mui-table-view-cell">
						<a class="mui-navigate-right" href="#/myvoucher">
							<span class="mui-icon-extra mui-icon-extra-topic"></span>
							我的凭证
						</a>
					</li>
					<li class="mui-table-view-cell">
						<a class="mui-navigate-right" href="#/myorder">
							<span class="mui-icon-extra mui-icon-extra-order"></span>
							我的订单
						</a>
					</li>
					<li class="mui-table-view-cell">
						<a class="mui-navigate-right" href="#/invitefriends">
							<span class="mui-icon-extra mui-icon-extra-heart-filled"></span>
							邀请好友
						</a>
					</li>
					<li class="mui-table-view-cell">
						<a class="mui-navigate-right" href="#/indemnity">
							<span class="mui-icon-extra mui-icon-extra-gold"></span>
							赔付申请 
						</a>
					</li>
					<li class="mui-table-view-cell">
						<a class="mui-navigate-right" href="#/certification">
							<span class="mui-icon mui-icon-contact"></span>
							实名认证
						</a>
					</li>
					<li class="mui-table-view-cell">
						<a class="mui-navigate-right" href="#/aboutus">
							<span class="mui-icon-extra mui-icon-extra-custom"></span>
							关于我们
						</a>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				ifLogin:""
			}
		},
		methods:{
		 	account(){
		 		this.$router.push({path:'/accountInfo',name:'账号信息',params:{}})
		 	}
		},
		mounted(){
			this.ifLogin = localStorage.userid;
		 	this.mui.init()
		 	console.log(localStorage.userid)
		}
	}
</script>

<style>

	
</style>