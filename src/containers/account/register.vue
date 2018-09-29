<template>
	<div class="mui-content register">
		<a class="toplink" href="#/plogin">已有账号</a>
		<form>
			<h3>快速注册</h3>
			<div class="mui-input-row">
				<input type="number"  
					@keyup="keyupInput()" 
					class="mui-input-clear mui-input" 
					placeholder="请输入手机号" 
					v-model.trim="userInfo.phone">
			</div>
			<div class="mui-input-row twoinput">
				<div class="mui-input-row">
					<input type="text" @keyup="keyupInput()"  class="mui-input-clear mui-input" placeholder="请输入收到的验证码" v-model.trim="userInfo.verifiyCode">
				</div>
				
				<div class="mui-input-row">
					<button type="button" @click="verifiyCode()" :disabled="verifiybtn" class="mui-btn-primary mui-btn-outlined">{{verifiytext}}</button>
				</div>
			</div> 
			
			<div class="mui-input-row">
				<input type="password" 
					@keyup="keyupInput()" 
					class="mui-input-clear mui-input" placeholder="请输入密码" v-model.trim="userInfo.password">
			</div>
			<div class="mui-input-row">
				<input type="password" 
					@keyup="keyupInput()"
				 	class="mui-input-clear mui-input" placeholder="请再次输入密码" v-model.trim="userInfo.repassword">
			</div>
			<div class="alert"> {{message}} </div>
			
		</form>
	 	<div class="mui-content-padded">
			<button class="mui-btn mui-btn-block mui-btn-primary" :disabled='registerbtn' @click="regist(userInfo)">注册</button>
		</div>
 	</div>
</template>

<script>
	import { mapState } from "vuex";
	import validate  from '../../utils/myvalidate.js';
	//	const url = "http://minsadmin.gksharedmall.com";
	import Url from '../../utils/url.js';
	
	export default {
		data() {
			return {
				verifiybtn: true, //验证码按钮状态disabled 
				registerbtn: true, //验证码按钮状态disabled 
				verifiytext:"获取验证码",
				message:"",   //提示信息
   			}
		},
		computed: {
			...mapState({
				userInfo:state => state.user.userInfo,
			}),
			
		},
		watch:{
//			verifiybtn(a,b){
//				this.keyupInput()
//			}
		},
		methods: {
			//输入验证
			getValidate() {
				let self = this;
				return {
					phone() {
						
						if(!validate.phone(self.userInfo.phone)) {
							self.verifiybtn = true;
							self.message = "* 不是完整的11位手机号或者正确的手机号前七位";
							self.registerbtn = true;
						}else{
							self.verifiybtn = false;
							self.message = "";
							self.registerbtn = false; 
							return true;
						}
						
					},
					verifiyCode(){
						if(validate.require(self.userInfo.verifiyCode)) {
							self.message = "* 请出入验证码";
							self.registerbtn = true;
						}else{
							self.message = "";
							self.registerbtn = false; 
						 	return true;
						}
					},
					password() {
						if(!validate.password(self.userInfo.password)) {
//							self.message = "密码需大于6位";
							self.message = "* 请输入密码，密码必须包含字母和数字，不能包含特殊字符";
							self.registerbtn = true;
						}else{
							self.message = "";
							self.registerbtn = false; 
						 	return true;
						}
					},
					repassword() {
						if(self.userInfo.password == self.userInfo.repassword){
							self.message=""; 
							self.registerbtn = false; 
						}else{
							self.message="* 确认密码与密码不一致";
							self.registerbtn = true;
							return true;
						}
						
					}
				}
			},
			keyupInput ( param ) {
				let funcArr = Object.values(this.getValidate());
				for(let i = 0; i < funcArr.length; i++){
					if(!funcArr[i]()){
						break;
					}
				} 
			},
			//获取验证码
			verifiyCode() {
				var that = this;
				var time = 60
				$.ajax({
		            url: Url+'/Api/Interface/getCode',
		            type:'post',
		            data:{"phone":this.userInfo.phone},
		            success:function ({code, msg, data}) {
		            	if(code==1){
    						var timr = setInterval(function() {
								that.verifiytext = (time--)+"s后重新获取";
								that.verifiybtn = true;
								if (time==0) {
									clearInterval(timr);
									that.verifiybtn = false;
									that.verifiytext = "获取验证码";
								}
							}, 1000);
		            		console.log(code, msg, data, that.verifiytext)
//		            		commit("getCodeSuccess", data)
		            	}else{
		            		mui.toast("验证码发送失败")
		            	}
		            },
		            error:function () {
		            }
		        })
			},
			//注册
			regist(userInfo) {
				let that = this;
//      		that.$router.push('/plogin')
            
//				let param = userInfo
//				param.$router = this.$router
//				this.$router.push({path:'/login', name: '登录', params: { userId: 1 }})
// 				this.$store.dispatch("sendUserInfo", param)
   				$.ajax({
		            url: Url+'/Api/Interface/register',
		            type:'post',
		            data:userInfo,
		            success:function ({code, msg, data}) {
		            	if(code==1){		            		
        					that.$router.push('/plogin')
		            	}else{
		            		mui.toast(msg);
//		            		that.$router.push({path:'/login'})
		            	}
		            },
		            error:function () {}
		        })
			},

		},
		created() {
//			this.$store.dispatch("getTitle", "");
		}
	}
</script>

<style>
	
</style>