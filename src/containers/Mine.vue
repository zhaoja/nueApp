<template>
	<div class="mine img-bg1">
		<div class="myinner">
			<div class="setup">
				<a href="#/accountInfo"><span class="mui-icon mui-icon-gear-filled"></span></a>
			</div>
			<div class="inner1">
				<img src="@/assets/images/my.png" alt="" />
				<a href="#/plogin" class="mui-btn mui-btn-white mui-btn-outlined" v-if="!ifLogin">登录/注册</a>				
				<div v-if="ifLogin">{{phone}}</div>				
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
	import Url from '../utils/url.js';

	export default{
		data(){
			return{
				ifLogin:"",
				phone:''
			}
		},
		created(){
			this.getPhone();
		},
		methods:{
		 	account(){
		 		this.$router.push({path:'/accountInfo',name:'账号信息',params:{}})
		 	},
		 	getPhone(){
		 		let _self = this;
   		 		$.ajax({
		            url: Url+'/Api/Interface/getLoginPhone',
		            type:'post',
		            data:{uid:localStorage.userid},
		            success:function ({code, msg, data}) {
		            	if(code==1){
		            		_self.phone = data.phone;  
							console.log("msg1",localStorage.userid)
		            	}else{
		            		localStorage.userid = ""
		            		console.log("msg",localStorage.userid)
		            	}
		            },
		            error:function () {
		            	console.log("erro")
		            }
        		});
		 	}
		},
		mounted(){
//			localStorage.userid = ""
			this.ifLogin = localStorage.userid;
		 	this.mui.init()
//		 	console.log(localStorage.userid,"uid")
		}
	}
</script>

<style>

	
</style>