<template>
	<div class="community">
		<img src="@/assets/images/shequ.png" class="imgbg"/>
		<div class="community-num">
			<div class="welcoming">
				欢迎加入我们的社区~
			</div>
			<ul class="mui-table-view smooth" v-for="group in community">
				<li class="mui-table-view-cell" v-for="gch in group.childrens">
				 	 <span class="copy"
			            v-clipboard:copy="gch.value"
			            v-clipboard:success="onCopy"
			            v-clipboard:error="onError">点击复制</span>
			             
					<a href="javascript:void(0);" class="mui-pull-left">
						<span :class="group.class"></span>
					</a>
					<div class="mui-media-body">
						INU官方微信群
						<p class="mui-ellipsis">官方秘书：{{gch.value}}</p>
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	import img1 from '@/assets/images/qq.jpg' 
 
 	export default {
	    data() {
	      	return {
 	        	community:[
	        		{name:"wx",class:"mui-icon mui-icon-weixin green",
		        		childrens:[
		        			{img:img1,ame:"INU官方微信群",value:'InUnion-manager1-2'},
	        				{img:img1,ame:"INU官方微信群",value:'InUnion-manager1-3'},
		        		]
	        		},
	        		{name:"qq",class:"mui-icon mui-icon-qq blue",
		        		childrens:[
		        			{img:img1,ame:"INU官方微bo群",value:'InUnion-manager1-2'},
	        				{img:img1,ame:"INU官方微bo群",value:'InUnion-manager1-3'},
		        		]
	        		},
	        		{name:"wb",class:"mui-icon mui-icon-weibo red",
		        		childrens:[
		        			{img:img1,ame:"INU官方微信群",value:'InUnion-manager1-2'},
	        				{img:img1,ame:"INU官方微信群",value:'InUnion-manager1-3'},
		        		]
	        		},
	        		 
	        	]
	      	}
	    },
	    methods: {
	      onCopy: function (e) {
			 this.mui.alert('社群已复制到剪贴板', '前往加入社区');
	      },
	      onError: function (e) {
	        this.mui.alert('复制失败');
	      }
	    },
	    mounted(){
	    	//mui初始化
			this.mui.init({
				swipeBack: true //启用右滑关闭功能
			});
	    }
  	}
</script>

<style>
</style>