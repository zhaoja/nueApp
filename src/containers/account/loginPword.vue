<template>
	<div class="mui-content login">
		<a class="toplink" href="#/register">注册</a>
		<form>
			<h3>密码登录</h3>
			<div class="mui-input-row">
				<input type="text" @keyup="keyupInput()" class="mui-input-clear mui-input" placeholder="请输入手机号" v-model="userInfo.phone">
			</div>
			<div class="mui-input-row">
				<input type="password"  @keyup="keyupInput()" class="mui-input-clear mui-input" placeholder="请输入密码" v-model="userInfo.password">
			</div>
		
			<div class="alert"> {{message}} </div>
			
		</form>
		<div class="mui-content-padded">
			<button @click="pLogin()"  :disabled='registerbtn' class="mui-btn mui-btn-block mui-btn-primary">登录</button>
		</div>
		<div class="link-area">
			<a href="#/vlogin">验证码登录</a> <span class="spliter">|</span>
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
				registerbtn: true, //验证码按钮状态disabled 
				verifiytext:"获取验证码",
 				message:""   //提示信息
			}
		},
		computed: {
			...mapState({
				userInfo:state => state.user.userInfo
			}),
			
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
							self.registerbtn = true;
						}else{
							self.message = "";
							self.registerbtn = false; 
							return true;
						}
						
					},
					password() {
						 
						if(validate.require(self.userInfo.password)) {
							 
							self.message = "请输入密码";
							self.registerbtn = true;
						}else{
							self.message = "";
							self.registerbtn = false; 
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
			
			pLogin() {
				var that = this;
				let param = this.userInfo;
				$.ajax({
		            url: Url+'/Api/Interface/pwdLogin',
		            type:'post',
		            data:{
						'phone':param.phone,
						'password':param.password
					},
		            success:function ({code, msg, uid}) {
		            	console.log(code, msg, uid)
		            	if(code===1){
		            	 	alert(uid)
						    localStorage.userid = uid;
		            		that.userid = localStorage.userid;
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
// 			console.log(this.$store.state.user.userInfo,6666)

		}
	}
</script>