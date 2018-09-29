<template>
	<div class="mui-content login">
		<a class="toplink" href="#/register">注册</a>
		<form>
			<h3>验证码登录</h3>
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
					<button type="button" @click="getVerifiyCode()" :disabled="verifiybtn" class="mui-btn-primary mui-btn-outlined">{{verifiytext}}</button>
				</div>
			</div> 
			<div class="alert"> {{message}} </div>
			
		</form>
		<div class="mui-content-padded">
			<button @click="vLogin()" :disabled='registerbtn' class="mui-btn mui-btn-block mui-btn-primary">登录</button>
		</div>
		<div class="link-area">
			<a href="#/plogin" id='reg'>账号密码登录</a> <span class="spliter">|</span>
			<a href="#/newpd">忘记密码？</a>
		</div>
 	</div>
</template>
<script>
	import { mapState } from "vuex";
	import validate  from '../../utils/myvalidate.js';
 	import Url from '../../utils/url.js';

	export default {
		data() {
			return {
				verifiybtn: true, //验证码按钮状态disabled 
				registerbtn: true, //登录按钮状态disabled 
				verifiytext:"获取验证码",
				message:"",   //提示信息
   			}
		},
		computed: {
			...mapState({
				userInfo:state => state.user.userInfo
			})
		},
		created() {
//			this.$store.dispatch("getTitle", "")
		},
		methods: {
			//输入验证
			getValidate() {
				let self = this;
				return {
					phone() {
						if(!validate.phone(self.userInfo.phone)) {
							self.message = "* 不是完整的11位手机号或者正确的手机号前七位";
							self.verifiybtn = true;
						}else{
							self.message = "";
							self.verifiybtn = false; 
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
			getVerifiyCode() {
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
			vLogin(n) {
				var that = this;
				let param = this.userInfo;
   				$.ajax({
		            url: Url+'/Api/Interface/codeLogin',
		            type:'post',
		            data:{
						'phone':param.phone,
						'code':param.verifiyCode
					},
		            success:function ({code, msg, uid}) {
		            	if(code==1){
		            	 
						    localStorage.userid = uid;
		            		that.userid = localStorage.userid;
		            		that.$store.dispatch("newUser",that.userid)
		            		that.$router.push('/home')
		            	}else{
		            		mui.toast(msg)
		            	}
		            },
		            error:function () {
		            }
		        })
 				
			}
		},
		mounted(){
 
		}
	}
</script>
 