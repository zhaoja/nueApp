<!-- 绑定NRC钱包支付地址-->
<template>
	<div class="myInd">
		<div class="mui-input-row" style="margin: 10px 5px;background: #ffffff;padding: 10px;">
			<div style="line-height: 30px;">事件描述：</div>
			<textarea v-model="adress" rows="5" placeholder="请输入您的NRC钱包地址"></textarea>
		</div>
		<div>
			<strong>用户须知</strong><br />
			1.	请填写并绑定您的NRC钱包地址，以便我们获知您的支付信息；<br />
			2.	如果您还没有NRC钱包，请访问<a href="www.nrc.one/downloads">www.nrc.one/downloads</a>  下载钱包<br />
		</div>
		<div class="mui-content-padded">
			<button class="mui-btn mui-btn-block mui-btn-primary" @click="sendNRCAdress(adress)">提交申请</button>
		</div>

	</div>
</template>
<script>
	import Url from '../../utils/url.js';
	export default {
		data(){
			return{
				adress:""
			}
		},
		methods:{
			sendNRCAdress (param) {
			 	console.log(this.$route.query,111)
				let _self = this;
			 
				 
				let _data = {
					order_id: this.$route.query.insure_id,
					uid: localStorage.userid,
					walletAddress:param
				}
				$.ajax({
		            url: Url+'/Api/Interface/bindAddress',
		            type:'post',
		            data:_data,
		            success:function ({code, msg, data}) {
		            	if(code==1){
//		            		_data.address = data.address;
//  				     	_self.$store.dispatch("confirmInsure",data)
		            	}else{
		            		console.log("msg") 
	            		_data.order_many = _self.$route.query.order_many;
	            		console.log(_data,123)
						_self.$router.push({path:'/payorder',name:'NRC钱包支付',query:_data})

		            	}
		            },
		            error:function () {

		            }
        		});
			 
			}
		}
	}
</script>

<style>
</style>