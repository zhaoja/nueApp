<template>
	<div class="footer">		
		<nav class="mui-bar mui-bar-tab">
			<a class="mui-tab-item" :class="{ muiActive: $route.path.match('home')}" href="#/home" @click = "changePath('/home')">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</a>
			<a class="mui-tab-item" href="javascript:;" :class="{ muiActive: $route.path.match('publicity')}" @click = "changePath('/publicity')">
				<span class="mui-icon mui-icon-extra mui-icon-extra-xiaoshuo"><!--<span class="mui-badge">9</span>--></span>
				<span class="mui-tab-label">公示</span>
			</a>
			<a class="mui-tab-item" :class="{ muiActive: $route.path.match('community')}" href="#/community"  @click = "changePath('/community')">
				<span class="mui-icon mui-icon-chat"></span>
				<span class="mui-tab-label">社区</span>
			</a>
			<a class="mui-tab-item" :class="{ muiActive: $route.path.match('mine')}" href="#/mine"  @click = "changePath('/mine')">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">我的</span>
			</a>
		</nav>
	</div>
</template>

<script>
	export default{
		data() {
			return {
				
			}
		},
		mounted(){
//		 	this.mui('body').on('tap','a',function(){
//			    window.top.location.href = this.href;
//			});
		},
		methods:{
			changePath(path){
				this.$router.push({ path: path })
				if(path === '/publicity'){
					location.reload();
				}
			}
		}
		
	}
	
</script>
