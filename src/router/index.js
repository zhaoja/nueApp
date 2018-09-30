import Vue from 'vue'
import Router from 'vue-router'
//账号管理
import Register from '@/containers/account/register'
import LoginPword from '@/containers/account/loginPword'
import LoginVcode from '@/containers/account/loginVcode'
import PasswordNew from '@/containers/account/passwordNew' 
//首页
import Home from '@/containers/home'
import Statistics from '@/containers/home/statistics'
import InsuranceDetails from '@/containers/home/InsuranceDetails'
import Insure from '@/containers/home/Insure'
import InsureConfirm from '@/containers/home/InsureConfirm'
import ToNRCPay from '@/containers/home/toNRCPay'
import PayOrder from '@/containers/home/payOrder'
//公示
import Publicity from '@/containers/Publicity'
import Details from '@/containers/Publicity/details'

//社区
import Community from '@/containers/Community'
//我的
import Mine from '@/containers/Mine'
import MyVoucher      from '@/containers/mine/MyVoucher'    
import MyOrder        from '@/containers/mine/MyOrder'     
import MyInvitation   from '@/containers/mine/MyInvitation' 
import MyIndemnity    from '@/containers/mine/MyIndemnity' 
import Certification  from '@/containers/mine/Certification'
import AccountInfo  from '@/containers/mine/AccountInfo'
import AboutUs        from '@/containers/mine/AboutUs'       


import Layout from '@/components/layout'

//import Tim from '@/components/Timeline'

Vue.use(Router)
const router = new Router({
	routes: [
		{
			path: '/plogin',
			name: '密码登录',
			component: LoginPword
		},{
			path: '/vlogin',
			name: '验证登录',
			component: LoginVcode
		},
		{
			path: '/register',
			name: '注册',
			component: Register
		},{
			path: '/newpd',
			name: '找回密码',
			component: PasswordNew
		},
		{
			path: '/',
			//name: 'layout', 不能加名字
			component: Layout,
			children: [
			{
				path: '/',
				name: '首页1',
				component: Home
			}, {
				path: '/home',
				name: '首页',
				component: Home
			}, 
			{
				path: 'publicity',
				name: '公示',
				component: Publicity
			}, 
			{
				path: 'community',
				name: '社区',
				component: Community
			},{
				path: 'mine',
				name: '我的',
				component: Mine,
			}]
		},
		{
			path: '/statistics',
			name: '查看区块链',
			component: Statistics
		},
		{
			path: '/insuranceDetails/:id',
			name: '保险详情',
			component: InsuranceDetails
		},
		{
//			path: '/insure/:id/:money',
			path: '/insure',
			name: '投保',
			component: Insure,
			meta: { 
			  	requireAuth: true
			}
		},
		{
			path: '/confirm',
			name: '保单确认',
			component: InsureConfirm,
			meta: { 
			  	requireAuth: true
			}
		},
		{
			path: '/payorder',
			name: 'NRC钱包支付',
			component: PayOrder,
			meta: { 
			  	requireAuth: true
			}
		},
		{
			path: '/toNRCPay',
			name: '绑定NRC钱包支付地址',
			component: ToNRCPay,
			meta: { 
			  	requireAuth: true
			}
		},
		{
			path: '/details',
			name: '公示详情',
			component: Details
		},
		{
			path: '/accountinfo',
			name: '公示详情',
			component: AccountInfo
		},
		
		{
			path: '/myvoucher',
			name: '我的凭证',
			component: MyVoucher,
			meta: { 
			  	requireAuth: true
			}
		},
		{
			path: '/myorder',
			name: '我的订单',
			component: MyOrder,
			meta: { 
			  	requireAuth: true
			}
		},
		{
			path: '/invitefriends',
			name: '邀请好友',
			component: MyInvitation,
			meta:{
				notAvailable:true
			}
		},
		{
			path: '/indemnity',
			name: '赔付申请',
			component: MyIndemnity,
			meta: { 
			  	requireAuth: true
			}
		},
		{
			path: '/certification',
			name: '实名认证',
			component: Certification,
			meta: { 
			  	requireAuth: true
			}
		},
		{
			path: '/aboutus',
			name: '关于我们',
			component: AboutUs,
			meta:{
				notAvailable:true
			}
		}
	]

})

// 判断是否需要登录权限 以及是否登录
router.beforeEach((to, from, next) => {
 	if (to.matched.some(res => res.meta.requireAuth)) {// 判断是否需要登录权限
 		console.log(localStorage.userid,1111)
	 	if (localStorage.userid) {// 判断是否登录
	  		next()
	 	} else {// 没登录则跳转到登录界面
	 		mui.alert('才可查看该模块', '请您先登录');
		  	next({
		  		path: '/mine',
		  		query: {redirect: to.fullPath}
		  	})
	 	}
 	} else {
		// 判断是否需要登录权限
   		if (to.matched.some(res => res.meta.notAvailable)) {
	 		mui.alert('该模块暂无内容');
	 	} else{
	 		next()
	 	} 		
 	}
})
 
export default router;
