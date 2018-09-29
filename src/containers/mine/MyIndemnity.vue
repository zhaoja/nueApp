<template>
	<div class="myInd">
		<form class="mui-input-group">
			<div class="mui-input-row">
				<label>申请时间：</label>
				<input v-model="applyFor.apply_time" type="text">
			</div>
			<div class="mui-input-row">
				<label>发生时间：</label>
				<button id='demo2' type="button" data-options='{"type":"date","beginYear":2014,"endYear":2016}' style="width: 66px;" class="btn mui-btn mui-btn-block">选择日期 </button>
				<input id="time2" v-model="applyFor.event_occur_time" type="text" class="mui-input-clear" style="width: 40%;" placeholder="请输入发生时间" data-input-clear="5"><span class="mui-icon mui-icon-clear mui-hidden"></span>
			</div>
		</form>
		<div class="mui-input-row" style="margin: 10px 5px;background: #ffffff;padding: 10px;">
			<div style="line-height: 30px;">事件描述：</div>
			<textarea v-model="applyFor.event_describe" rows="5" placeholder="请输入事件描述"></textarea>
		</div>
	    <div class="alert">  {{Message}}  </div>

		<div class="mui-content-padded">
			<button class="mui-btn mui-btn-block mui-btn-primary" @click="sendIndemnity(applyFor)">提交申请</button>
		</div>
		<!--<div id='result' class="ui-alert"></div>-->

	</div>
</template>

<script>
import Url from '../../utils/url.js';

export default {
	data(){
		return{
			applyFor:{
			 	apply_time:'',
			 	event_occur_time:'',
			 	event_describe:''
			},
			Message:""
		}
	},
	created(){
		this.getData()
	},
	mounted(){
		let _that = this;
		(function($) {
			$.init();
			var result = $('#result')[0];
			var btns = $('.btn');
			btns.each(function(i, btn) {
				btn.addEventListener('tap', function() {
					var _self = this;
					if(_self.picker) {
						_self.picker.show(function (rs) {
							result.innerText = '选择结果: ' + rs.text;
							_self.picker.dispose();
							_self.picker = null;
						});
					} else {
						var optionsJson = this.getAttribute('data-options') || '{}';
						var options = JSON.parse(optionsJson);
						var id = this.getAttribute('id');
						/*
						 * 首次显示时实例化组件
						 * 示例为了简洁，将 options 放在了按钮的 dom 上
						 * 也可以直接通过代码声明 optinos 用于实例化 DtPicker
						 */
						_self.picker = new $.DtPicker(options);
						_self.picker.show(function(rs) {
							 
							_that.applyFor.event_occur_time = rs.text;
							/*
							 * rs.value 拼合后的 value
							 * rs.text 拼合后的 text
							 * rs.y 年，可以通过 rs.y.vaue 和 rs.y.text 获取值和文本
							 * rs.m 月，用法同年
							 * rs.d 日，用法同年
							 * rs.h 时，用法同年
							 * rs.i 分（minutes 的第二个字母），用法同年
							 */
//							result.innerText = '选择结果: ' + rs.text;
							/* 
							 * 返回 false 可以阻止选择框的关闭
							 * return false;
							 */
							/*
							 * 释放组件资源，释放后将将不能再操作组件
							 * 通常情况下，不需要示放组件，new DtPicker(options) 后，可以一直使用。
							 * 当前示例，因为内容较多，如不进行资原释放，在某些设备上会较慢。
							 * 所以每次用完便立即调用 dispose 进行释放，下次用时再创建新实例。
							 */
							_self.picker.dispose();
							_self.picker = null;
						});
					}
					
				}, false);
			});
		})(this.mui);
 	},
 	methods:{
 		getData(){
 			this.applyFor.apply_time = "";
	 		var date = new Date();  
	 		var seperator1 = "-";  
	 		var year = date.getFullYear();  
	 		var month = date.getMonth() + 1;  
	 		var strDate = date.getDate();  
	 		if (month >= 1 && month <= 9) {    month = "0" + month;  }  
	 		if (strDate >= 0 && strDate <= 9) {    strDate = "0" + strDate;  }  
	 		var currentdate = year + seperator1 + month + seperator1 + strDate;
	 		this.applyFor.apply_time = currentdate;
 		},
 		sendIndemnity(param){
		 		
	 		let _self = this;
	
  			var _data = {
				uid: localStorage.userid,
				order_id:_self.$route.query.order_id ,
				event_occur_time:param.event_occur_time,
				event_describe:param.event_describe
  			};
  			if(this.applyFor.event_occur_time==''||this.event_describe==''){
  				this.Message = "请输入发生时间和事件描述"
  			}else{
  				this.Message = ""
				$.ajax({
		            url: Url+'/Api/Interface/compensateApply',
		            type:'post',
		            data:_data,
		            success:function ({code, msg, data}) {
		            	if(code==1){
		            		console.log(msg)
		            		_self.$router.push({path:'/mine',name:'我的'})
		            	}else{
		            		console.log(msg)
		            	}
		            },
		            error:function () {
		            	console.log("网络错误")
	//	            	_self.$router.push({path:'/payorder',name:'NRC钱包支付',query:_data})
		            }
	    		});
	 		}
	 	},
  	}
}			 
</script>

<style scoped="scoped">
 
	 
			.mui-btn {
				font-size: 16px;
				padding: 8px;
				margin: 3px;
			}
		
			* {
				-webkit-touch-callout: none;
				-webkit-user-select: none;
			}
</style>