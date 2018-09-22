<template>
	<div class="mui-content certification">
		
		<form class="mui-input-group">
			<div class="mui-input-row">
				<label><span>*</span>真实姓名：</label>
				<input type="text" class="mui-input-clear" placeholder="请输入您的真实姓名" data-input-clear="5"><span class="mui-icon mui-icon-clear mui-hidden"></span>
			</div>
			<!--<div class="mui-input-row">
				<label><span>*</span>联系电话：</label>
				<input type="text" class="mui-input-clear" placeholder="请输入手机号" data-input-clear="5"><span class="mui-icon mui-icon-clear mui-hidden"></span>
			</div>
			<div class="mui-input-row">
				<label><span>*</span>联系地址：</label>
				<input type="text" class="mui-input-clear" placeholder="请输入联系地址" data-input-clear="5"><span class="mui-icon mui-icon-clear mui-hidden"></span>
			</div>-->
			<div class="mui-input-row">
				<label><span>*</span>身份证号：</label>
				<input type="text" class="mui-input-clear" placeholder="请输入身份证号码" data-input-clear="5"><span class="mui-icon mui-icon-clear mui-hidden"></span>
			</div>
		</form>
		<form class="mui-input-group">
			<div class="mui-input-row">
				<label><span>*</span>上传身份证照片：</label>
			 	<div >请本人手持身份证照片</div>
 			</div>
 			<div class="twoimg">
 				<img src="@/assets/images/idcard1.png" @click="upIdCard(1)"/>
 				<img src="@/assets/images/idcard2.png" @click="upIdCard(2)" />
			 </div>
			 <div>
              <img id="headimg" class="headimg" src='@/assets/images/idcard1.png'  height="150"  width="150">
               <button onclick="upload();" class='button'> 提交</button>
 			 </div>
		</form>
	</div>
</template>

<script>
	
	
	export default{
		
		methods:{
	 		getRealNameAuth(param){
	 			console.log(param,123)
		 		let _self = this;
				let _data = {
					uid: localStorage.userid,
					user_name:"",
					id_number:"",
//					File类型  idPhoto1  idPhoto2  [Content-Type-> multipart/form-data]
				}
 
 
	

				$.ajax({
		            url: Url+'/Api/Interface/realNameAuth',
		            type:'post',
		            data:_data,
		            success:function ({code, msg, data}) {
		            	if(code==1){
		            		
		            		_self.hasOrder = true;
    				     	_self.$store.dispatch("MyOrderList",data)
    				     	
		            	}else{
		            		console.log(msg)
							_self.hasOrder = false;
		            	}
		            },
		            error:function () {
		            }
        		});
		 	},
 
	
		}
	}
  //弹出系统按钮选择框
                var page=null; 
                page={ 
                    imgUp:function(){ 
                        var m=this; 
                       /* console.log(m);*/
                        plus.nativeUI.actionSheet({cancel:"取消",buttons:[ 
                            {title:"拍照"}, 
                            {title:"从相册中选择"} 
                        ]}, function(e){//1 是拍照  2 从相册中选择 
                            switch(e.index){ 
                                case 1:appendByCamera();break; 
                                case 2:appendByGallery();break; 
                            } 
                        }); 
                    } 
                } 
//              page.imgUp();
</script>

<style>
</style>