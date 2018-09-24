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
//import AboutUs        from '@/containers/mine/AboutUs'       


import Layout from '@/components/layout'

//import Tim from '@/components/Timeline'

Vue.use(Router)

export default new Router({
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
				beforeEnter: (to, from, next) => {
			        localStorage.uid!="";
			        next()
			    },
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
			component: Insure
		},
		{
			path: '/confirm',
			name: '保单确认',
			component: InsureConfirm
		},
		{
			path: '/payorder',
			name: 'NRC钱包支付',
			component: PayOrder
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
			component: MyVoucher
		},
		{
			path: '/myorder',
			name: '我的订单',
			component: MyOrder
		},
		{
			path: '/invitefriends',
			name: '邀请好友',
			component: MyInvitation
		},
		{
			path: '/indemnity',
			name: '赔付申请',
			component: MyIndemnity
		},
		{
			path: '/certification',
			name: '实名认证',
			component: Certification
		},
		{
			path: '/aboutus',
			name: '关于我们',
//			component: AboutUs
		}
	]
})
