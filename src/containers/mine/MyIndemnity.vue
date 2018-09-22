<template>
	<div class="myInd">
		<form class="mui-input-group">
			<div class="mui-input-row">
				<label>申请时间：</label>
				<span>2018-08-08</span>
			</div>
			<div class="mui-input-row">
				<label>发生时间：</label>
				<button id='demo2' data-options='{"type":"date","beginYear":2014,"endYear":2016}' class="btn mui-btn mui-btn-block">选择日期 ...</button>
		
				<input type="text" class="mui-input-clear" placeholder="带清除按钮的输入框" data-input-clear="5"><span class="mui-icon mui-icon-clear mui-hidden"></span>
			</div>
		</form>
		<div class="mui-input-row" style="margin: 10px 5px;background: #ffffff;padding: 10px;">
			<div style="line-height: 30px;">事件描述：</div>
			<textarea id="textarea" rows="5" placeholder="多行文本框"></textarea>
		</div>
		<div class="mui-content-padded">
			<button class="mui-btn mui-btn-block mui-btn-primary">提交申请</button>
		</div>
 			<div id='result' class="ui-alert"></div>
	</div>
</template>

<script>
//	      (function($) {
//				$.init();
//				var result = $('#result')[0];
//				var btns = $('.btn');
//				btns.each(function(i, btn) {
//					btn.addEventListener('tap', function() {
//						var _self = this;
//						if(_self.picker) {
//							_self.picker.show(function (rs) {
//								result.innerText = '选择结果: ' + rs.text;
//								_self.picker.dispose();
//								_self.picker = null;
//							});
//						} else {
//							var optionsJson = this.getAttribute('data-options') || '{}';
//							var options = JSON.parse(optionsJson);
//							var id = this.getAttribute('id');
//					 
//							_self.picker = new $.DtPicker(options);
//							_self.picker.show(function(rs) {
//						 
//								result.innerText = '选择结果: ' + rs.text;
//							 
//								_self.picker.dispose();
//								_self.picker = null;
//							});
//						}
//						
//					}, false);
//				});
//			})(mui);
</script>

<style scoped="scoped">
	html,
			body,
			.mui-content {
				height: 0px;
				margin: 0px;
				background-color: #efeff4;
			}
			h5.mui-content-padded {
				margin-left: 3px;
				margin-top: 20px !important;
			}
			h5.mui-content-padded:first-child {
				margin-top: 12px !important;
			}
			.mui-btn {
				font-size: 16px;
				padding: 8px;
				margin: 3px;
			}
			.ui-alert {
				text-align: center;
				padding: 20px 10px;
				font-size: 16px;
			}
			* {
				-webkit-touch-callout: none;
				-webkit-user-select: none;
			}
</style>