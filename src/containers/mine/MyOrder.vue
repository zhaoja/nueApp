<template>
	<div class="myOd">

		<ul class="tabs clearfix box">
			<li v-for="(tab,index) in tabsName">
				<a href="javascript:void(0);" class="tab-link" @click="getMyOrderList(index)" v-bind:class="{active: (index === active)}">{{tab.name}}</a>
			</li>
		</ul>

		<div style="margin-top:100px" v-if="hasOrder">
			<ul class="smooth">
				<li class="smooth-li" v-for="ol in myOrderList">
					<div class="inner">
						<div class="inner-header">
							<span>订单号：</span>
							<span>{{ol.order_num}}</span>
							<span class="span">{{status[ol.status]}}</span>
						</div>
						<div class="inner-body">
							<ul>
								<li><span>产品名称：</span>{{ol.insurance_name}}</li>
								<li><span>投保人：</span>{{ol.user_name}}</li>
							</ul>
						</div>
						<div class="inner-footer">
							<ul>
								<li>下单时间：{{ol.create_time}} 
									<span class="pull-right">支付：{{ol.order_money}}INU</span>
								</li>
								<!--<li>生效时间：wu </li>-->
							</ul>
							<div class="btnlist">
								<button @click="removeOder(ol)" v-if="ol.status==1">取消订单</button>
								<button @click="toPay(ol)" v-if="ol.status==1">立即支付</button>
								<button @click="indemnity(ol)" v-if="ol.status!=4">申请赔付</button>
							</div>
						</div>
					</div>
				</li>
			</ul>

		</div>
		<div class="no" v-if="!hasOrder">
			<img src="@/assets/images/noder.jpg" />
			<div>还没哟订单哦~</div>
			<a href="#/home" class="mui-btn mui-btn-primary">去投保</a>
		</div>

	</div>
</template>

<script>
	import { mapState } from "vuex"
	import Url from '../../utils/url.js';

	export default {
		computed: {
			...mapState({
				myOrderList: state => state.order.myOrderList
			})
		},
		data() {
			return {
				hasOrder: true,
				active: 0,
				tabsName: [{
					name: "全部",
					tid: 0,
				}, {
					name: "未支付",
					tid: 1,
				}, {
					name: "已支付",
					tid: 2,
				}, {
					name: "审核中",
					tid: 3,
				}, {
					name: "已完成",
					tid: 4,
				}, {
					name: "已失效",
					tid: 5,
				}],
				status: {
					0: "全部",
					1: "未支付",
					2: "已支付",
					3: "审核中",
					4: "已完成",
					5: "已失效"
				},
				active: false
			}
		},

		created() {

			//this.$store.dispatch("getTitle","")
			this.getMyOrderList(0)
		},
		methods: {
			getMyOrderList(param) {
				this.active = param;
				let _self = this;
				let _data = {
					uid: localStorage.userid,
					status: param
				}

				$.ajax({
					url: Url + '/Api/Interface/getOrderList',
					type: 'post',
					data: _data,
					success: function({
						code,
						msg,
						data
					}) {
						if(code == 1) {

							_self.hasOrder = true;
							_self.$store.dispatch("MyOrderList", data)

						} else {
							console.log(msg)
							_self.hasOrder = false;
						}
					},
					error: function() {}
				});
			},
			toPay(param) {
				console.log(param)
				let _data = {
					uid: localStorage.userid,
					insurance_id: param.insurance_id,
					user_age: param.user_age,
					insure_id: param.id,
					order_many: param.user_amount,
					order_num: param.order_num
				}
				this.$router.push({
					path: '/payorder',
					name: 'NRC钱包支付',
					query: param
				})
			},
			removeOder(param) {
				 
				let _data = {
					uid: localStorage.userid,
					order_id: param.id
				};

				$.ajax({
					url: Url + '/Api/Interface/cancelOrder',
					type: 'post',
					data: _data,
					success: function({
						code,
						msg,
						data
					}) {
						if(code == 1) {

						} else {
							console.log(msg)
						}
					},
					error: function() {}
				});
			},
			indemnity(param){
 
				this.$router.push({
					path: '/indemnity',
					name: '赔付申请',
					query: {order_id:param.id}
				})
			}
		},
 
	}
</script>

<style>
	.box {
		position: fixed;
		top: 40px;
		width: 100%;
	}
	
	.tabs {
		display: flex;
	}
	
	.tabs li {
		flex: 1;
		list-style: none;
	}
	
	.tabs .tab-link {
		display: block;
		height: 49px;
		text-align: center;
		line-height: 49px;
		background-color: #fff;
		color: #A9A9A9;
		text-decoration: none;
	}
	
	.tabs .tab-link.active {
		height: 47px;
		border-bottom: 2px solid #3377FF;
		transition: .3s;
		color: #333;
	}
</style>