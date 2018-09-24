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
				<label><span>*</span>上传身份证照片：</label>
			 	<div >请本人手持身份证照片</div>
 			</div>
 			<div class="twoimg">
 				   选择文件:<input type="file" id="file1" /><br />
 			        <img src="@/assets/images/idcard1.png" style="display:none" id="imgWait" />  
   				
   					<input type="file" id="file2" /><br />
 			        <img src="@/assets/images/idcard2.png" style="display:none" />  
   				
   				<!--<img src="@/assets/images/idcard1.png" @click="upIdCard(1)"/>-->
 				 <!--<input class="upload" @change='upIdCard'  type="file"  accept="image/jpg,image/jpeg,image/x-png,image/gif">-->
				<!--<img src="@/assets/images/idcard2.png" @click="upIdCard(2)" />-->
			 </div>
			 
		</form>
     	<button @click="getRealNameAuth(userInfo);" class='button'> 提交</button>

	</div>
</template>

<script>
	import { mapState } from "vuex"
	import Url from '../../utils/url.js';
	
	export default{
		computed:{
			...mapState({
				userInfo:state => state.user.userInfo
			})
		},
		methods:{
	 		getRealNameAuth(param){
	 			console.log(param,123)
		 		let _self = this;
				
				
// 	
//				$.ajax({
//		            url: Url+'/Api/Interface/realNameAuth',
//		            type:'post',
//		            data:_data,
//		            success:function ({code, msg, data}) {
//		            	if(code==1){
//		            		
//		            		_self.hasOrder = true;
//  				     	_self.$store.dispatch("MyOrderList",data)
//  				     	
//		            	}else{
//		            		console.log(msg)
//							_self.hasOrder = false;
//		            	}
//		            },
//		            error:function () {
//		            }
//      		});
//				var formData1 = new FormData();
				var file1 = document.getElementById("file1").files[0]
				var file2 = document.getElementById("file2").files[0]
//              formData2.append("myfile2", file2);
                
                let _data = {
					uid: localStorage.userid,
					user_name:param.user_name,
					id_number:param.id_number,
					idPhoto1:file1,
					idPhoto2:file2
				}
                console.log(_data)
                $.ajax({
                    url: Url+'/Api/Interface/realNameAuth',
                    type: "POST",
                    data: _data,
                    /**
                    *必须false才会自动加上正确的Content-Type
                    */
                    contentType: false,
                    /**
                    * 必须false才会避开jQuery对 formdata 的默认处理
                    * XMLHttpRequest会对 formdata 进行正确的处理
                    */
                    processData: false,
                    success: function (data) {
                        if (data.status == "true") {
                            alert("上传成功！");
                        }
                        if (data.status == "error") {
                            alert(data.msg);
                        }
//                      $("#imgWait").hide();
                    },
                    error: function () {
                        alert("上传失败！");
//                      $("#imgWait").hide();
                    }
                });
		 	},
 		 
		},
 	}
  
</script>

<style>
</style>