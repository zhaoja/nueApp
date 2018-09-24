<template>
	<div class="insure">
  		<form class="mui-input-group">
			<div class="title">
				被保障人信息
			</div>
		    <div class="mui-input-row">
		     <a href="javascript:void(0);" class="mui-navigate-right">  
		     	<label>证件地区</label>
		        <input type="text" id='showCityPicker' class="mui-push-right" placeholder="证件地区" v-model="insureInfo.user_region">
				<!--<div id='cityResult'></div>-->
			</a> 	
		    </div>
		   <div class="mui-input-row">
		        <label>证件姓名</label>
		    	<input type="text" placeholder="请输入姓名" v-model="insureInfo.user_name">
		    </div>
		     <div class="mui-input-row">
		        <label>证件号码</label>
		    	<input type="text" placeholder="请输入证件号码" v-model="insureInfo.user_idnum">
		    </div>
		     
		    <div class="title">
				紧急联系人信息
			</div>
			 <div class="mui-input-row">
		        <a href="javascript:void(0);" class="mui-navigate-right"> 
	        	  	<label>联系人国籍</label>
	        		<input type="text" id='showCityPicker1' placeholder="联系人国籍" v-model="insureInfo.linker_region">
		   		</a>
			 </div>
		     <div class="mui-input-row">
		        <label>联系人姓名</label>
		    	<input type="text" placeholder="请输入紧急联系人姓名" v-model="insureInfo.linker_name">
		    </div>
		    <div class="mui-input-row">
		        <label>联系电话</label> 
				<select v-model="insureInfo.area_num" style="width: 30px;background: #C0CCDA; position: absolute;" class="mui-navigate-right">
					<option  v-for="am in area_nums" :value="am">+{{am}}</option>
				</select>
		    	<input style="margin-left: 35px; position: absolute;"
		    		 type="text" placeholder="请输入紧急联系人电话" v-model="insureInfo.linker_phone">
		    </div>
		    <div class="mui-input-row">
		        <label>电子邮箱</label>
		    	<input type="text" placeholder="请输入紧急联系人电子邮箱" v-model="insureInfo.linker_email">
		    </div>
		    
		    <div>
		    	<div class="title sure">
		    		<input name="checkbox1" value="Item1" type="checkbox" checked v-model="read" @change="ifRead()">已阅读并同意
		    		<span>《INU生命互助保障计划条款》</span>
				</div>
		    </div>
		</form>
	    <button @click="joinInsure(insureInfo)" :disabled="verifiybtn"  class="mui-btn mui-btn-warning mui-btn-block">立即加入</button>

	</div>
</template>

<script> 
	import { mapState } from "vuex"
	import Url from '../../utils/url.js';
	import cityData3 from "@/assets/mui/js/city.data-3.js" 
	
	export default{
		computed: {
			...mapState({
				insureInfo:state => state.insure.insureInfo
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
//			this.$store.dispatch("getTitle","")
		},
		methods:{
		 	ifRead(){
				if(this.read==true){
					this.verifiybtn = false;
				}else{
					this.verifiybtn = true;
				}
		 	},
		 	joinInsure(param){
		 		
		 		let _self = this;
		 		let other = this.$route.query;
		 		
				param.insurance_id = other.insurance_id;    
			    param.user_age   = other.age;       
				param.user_amount= other.insured_amount;
				param.uid = localStorage.userid;
  
				$.ajax({
		            url: Url+'/Api/Interface/insure',
		            type:'post',
		            data:param,
		            success:function ({code, msg, data}) {
		            	if(code==1){
		            		var _data = {
		            			uid:localStorage.userid,
		            			insure_id:data.insure_id,
		            			insurance_id:data.insurance_id
		            		}
//  				     	this.$store.dispatch("sendInsureInfo",param)
							_self.InsureConfirm(_data);
		            	}else{
		            		console.log("msg")
		            	}
		            },
		            error:function () {
		            }
        		});
		 	},
		 	//查看投保信息
		 	InsureConfirm(data){
		 		this.$router.push({path:'/confirm',name:'保单确认', query:data})
		 	}

		},
		mounted(){
//			(function() {
				this.mui.init();
				let _self = this;
				var _getParam = function(obj, param) {
					return obj[param] || '';
				};
				//证件地区
				var cityPicker = new this.mui.PopPicker({
					layer: 3
				});
				cityPicker.setData(cityData3);
				
				var showCityPickerButton = document.getElementById('showCityPicker');
				var cityResult = document.getElementById('cityResult');
				showCityPickerButton.addEventListener('tap', function(event) {
					cityPicker.show(function(items) {
						_self.insureInfo.user_region =_getParam(items[0], 'text') + " " + _getParam(items[1], 'text') + " " + _getParam(items[2], 'text');
						//返回 false 可以阻止选择框的关闭
//							return false;
					});
				}, false);
				
				//联系人国籍
				var showCityPickerButton1 = document.getElementById('showCityPicker1');
				var cityResult1 = document.getElementById('cityResult1');
				showCityPickerButton1.addEventListener('tap', function(event) {
					cityPicker.show(function(items) {
						_self.insureInfo.linker_region =_getParam(items[0], 'text') + " " + _getParam(items[1], 'text') + " " + _getParam(items[2], 'text');
//						//返回 false 可以阻止选择框的关闭
							return false;
					});
				}, false);	
// 			})();
		}
	}
 
</script>
 