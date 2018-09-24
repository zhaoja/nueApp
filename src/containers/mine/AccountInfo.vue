<template>
	<div class="accountInfo">
		<ul class="mui-table-view">
			<li class="mui-table-view-cell">
				<a class="mui-navigate-right">
					头像
					<img src="@/assets/images/my.png" class="mui-media-object mui-pull-right"/>
				</a>
			</li>
			<li class="mui-table-view-cell">
				<a class="mui-navigate-right" href="#/newpd">
					修改密码
				</a>
			</li>
		</ul>
		<button style="margin-top: 30px;" class="mui-btn mui-btn-primary mui-btn-block" @click="logout()">
			退出登录
		</button>
	</div>
</template>

<script>
	export default {
		methods:{
			logout(){
				alert(1)
				localStorage.userid = "";
        		this.$router.push('/mine')

			}
		}
		
	}
</script>

<style>
</style>