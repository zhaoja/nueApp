<template>
	<div class="certification">
		<form class="mui-input-group">
			<div class="mui-input-row">
				<label><span>*</span>真实姓名：</label>
				<input type="text" class="mui-input-clear" v-model="userInfo.user_name" placeholder="请输入您的真实姓名" data-input-clear="5"><span class="mui-icon mui-icon-clear mui-hidden"></span>
			</div>
			<div class="mui-input-row">
				<label><span>*</span>身份证号：</label>
				<input type="text" class="mui-input-clear" v-model="userInfo.id_number" placeholder="请输入身份证号码" data-input-clear="5"><span class="mui-icon mui-icon-clear mui-hidden"></span>
			</div>
		</form>
		<form class="mui-input-group">
			<div class="mui-input-row">
				<label class="moretext-label"><span>*</span>上传身份证照片：<span class="note_text">请本人手持身份证照片</span>
				</label>
			</div>
 
			<div class="uploadimgs">
				<img src="@/assets/images/idcard1.png" id="img1" @click="clickUpFile('file1')"/>
				<img src="@/assets/images/idcard2.png" id="img2" @click="clickUpFile('file2')"/>
				<input type="file" id="file1" accept="image/*" class="hide" @change="readLocalFile('img1','file1')"/> 
				<input type="file" id="file2" accept="image/*" class="hide" @change="readLocalFile('img2','file2')"/> 
			</div>
			<a @click="showlayer()">示例</a>
		</form>
		<div class="alert"> {{message}} </div>
		<button @click="getRealNameAuth(userInfo);" class='mui-btn mui-btn-block mui-btn-primary'> 提交</button>
		<!--<div class="layer">
			<div class="inner-layer">
				<a class="close"></a>			
				<img src="@/assets/images/idcard3.png"/>
			</div>
		</div>-->
	</div>
</template>

<script>
	import { mapState } from "vuex"
	import validate  from '../../utils/myvalidate.js';
	import Url from '../../utils/url.js';

	export default {
		data() {
			return {
				message:"" 
			}
		},
		computed: {
			...mapState({
				userInfo: state => state.user.userInfo
			})
		},
		mounted(){
			mui.toast("msg");
		},
		methods: {
			getRealNameAuth(param) {
				
				let _self = this;
				var file1 = document.getElementById("file1").files[0]
				var file2 = document.getElementById("file2").files[0]

				if(validate.require(param.user_name)||validate.require(param.id_number)||validate.require(file1)||validate.require(file2)) {
					_self.message =  "请输入完整信息" 
				}else{
				 
					var formData = new FormData();
					formData.append('uid', localStorage.userid);
					formData.append('user_name', param.user_name);
					formData.append('id_number', param.id_number);
					formData.append('idPhoto1', file1);
					formData.append('idPhoto2', file2);
	
					var xhr = new XMLHttpRequest();
					xhr.open("post", Url + '/Api/Interface/realNameAuth');
					xhr.onload = function() {}
					xhr.send(formData);
					xhr.onreadystatechange = function(res) {
						if(xhr.readyState === 4 && xhr.status === 200) {
							var res = JSON.parse(xhr.responseText);
							if(res.success) {
								console.log(res)
		            			_self.$router.push({path:'/mine',name:'我的'})
							} else {
								 alert("失败")
							}
	
						}
					}
				}

			},
			clickUpFile(id){
				document.getElementById(id).click();
			},
			//删除图片
			deleteImg: function(index) {
				this.imgs.splice(index, 1);
			},
			//图片click
 
			//点击选中图片
			readLocalFile(imgId,inputId) {
				var img = document.getElementById(imgId);
				var localFile = document.getElementById(inputId).files[0];
				var reader = new FileReader();
				var content;
				console.log(content, 666)
				content = reader.readAsDataURL(localFile, "UTF-8");
				reader.onload = function(event) {
					content = event.target.result;
					img.src = content
				}
				reader.onerror = function(event) {
					alert('加载失败')
				}
	 		},
	 		alertPic () {
	 			
	 		}
		}
	}
</script>

<style>

</style>