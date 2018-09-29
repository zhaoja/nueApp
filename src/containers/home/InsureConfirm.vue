<template>
	<div class="insure">
  		<form class="mui-input-group">
  			<div class="title">
				投保计划信息
			</div>
			<div class="mui-input-row">
		        <label>投保计划：</label>
		    	<input type="text" placeholder="请输入紧急联系人电子邮箱" v-model="plan" disabled>
		    </div>
		    
			<div class="title">
				被保障人信息
			</div>
		    <div class="mui-input-row">
		     <a href="javascript:void(0);" class="mui-navigate-right">  
		     	<label>证件地区</label>
		        <input type="text" id='showCityPicker' class="mui-push-right" placeholder="证件地区" v-model="insureInfo.user_region" disabled>
			</a> 	
		    </div>
		   <div class="mui-input-row">
		        <label>证件姓名</label>
		    	<input type="text" placeholder="请输入姓名" v-model="insureInfo.user_name" disabled>
		    </div>
		     <div class="mui-input-row">
		        <label>证件号码</label>
		    	<input type="text" placeholder="请输入证件号码" v-model="insureInfo.user_idnum" disabled>
		    </div>
		     
		    <div class="title">
				紧急联系人信息
			</div>
			 <div class="mui-input-row">
		        <a href="javascript:void(0);" class="mui-navigate-right"> 
	        	  	<label>联系人国籍</label>
	        		<input type="text" id='showCityPicker1' placeholder="联系人国籍" v-model="insureInfo.linker_region" disabled>
		   		</a>
			 </div>
		     <div class="mui-input-row">
		        <label>联系人姓名</label>
		    	<input type="text" placeholder="请输入紧急联系人姓名" v-model="insureInfo.linker_name" disabled>
		    </div>
		    <div class="mui-input-row">
		        <label>联系电话</label> 
				<select v-model="insureInfo.area_num" style="width: 30px;position: absolute;" class="mui-navigate-right" disabled>
					<option :value="insureInfo.area_num">{{insureInfo.area_num}}</option>
				</select>
		    	<input style="margin-left: 35px; position: absolute;"
		    		 type="text" placeholder="请输入紧急联系人电话" v-model="insureInfo.linker_phone" disabled>
		    </div>
		    <div class="mui-input-row">
		        <label>电子邮箱</label>
		    	<input type="text" placeholder="请输入紧急联系人电子邮箱" v-model="insureInfo.linker_email" disabled>
		    </div>
		    
		    <div class="title">
				支付信息
			</div>
			<div class="mui-input-row">
		        <label>支付总计：</label>
		    	<input type="text" placeholder="请输入紧急联系人电子邮箱" v-model="insureInfo.user_amount" disabled>
		    </div>
		</form>
		
	    <button style="margin-top: 30px;" @click="wxPay(insureInfo)" class="mui-btn mui-btn-warning">微信支付</button>
	    <button style="margin-top: 30px;" @click="placeOrder(insureInfo)" class="mui-btn mui-btn-warning">NRC钱包支付</button>

	</div>
</template>

<script> 
	import { mapState } from "vuex"
	import Url from '../../utils/url.js';
	import cityData3 from "@/assets/mui/js/city.data-3.js" 
	
	export default{
		computed: {
			...mapState({
				insureInfo:state => state.insure.insureInfo2.insure,
				plan:state => state.insure.insureInfo2.insurance,
			})
		},
		data(){
			return{
				verifiybtn: true,
				area_nums:['86','88','10'],
  				read:false,
  				
			}
		},
		created(){
			this.confirm();
//			this.$store.dispatch("getTitle","")
		},
		methods:{
		 	 
		 	//查看投保信息
		 	confirm(){
		 		let _self = this;
		 		let _data = this.$route.query;
		 		$.ajax({
		            url: Url+'/Api/Interface/getInsureInfo',
		            type:'post',
		            data:_data,
		            success:function ({code, msg, data}) {
		            	if(code==1){
    				     	_self.$store.dispatch("sendInsureConfirm",data)
		            	}else{
		            		console.log("msg")

		            	}
		            },
		            error:function () {
		            }
        		});
		 	},
		 	//微信支付
		 	wxPay(param){
		 		alert("暂无")
		 	},
		 	//NRC钱包支付
			placeOrder(param){
				let _self = this;
				let _data = {
					uid: localStorage.userid,
					insurance_id: param.insurance_id,
					user_age: param.user_age,
					insure_id: param.id,
					order_many: param.user_amount,
				}
				$.ajax({
		            url: Url+'/Api/Interface/confirmInsure',
		            type:'post',
		            data:_data,
		            success:function ({code, msg, data}) {
		            	if(code==1){
		            		_data.address = data.address;
							_self.$router.push({path:'/toNRCPay',name:'绑定NRC钱包支付地址',query:_data});
//							_self.$router.push({path:'/payorder',name:'NRC钱包支付',query:_data})
//  				     	_self.$store.dispatch("confirmInsure",data)
		            	}else{
		            		console.log("msg") 

		            	}
		            },
		            error:function () {
		            }
        		});
			}
	
		} 
	}
 
</script>
 