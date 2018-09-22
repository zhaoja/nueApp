<template>
	<div class="insuranceDetails">
		<div class="inD1">
			<img class="bannerImg" :src="InsuranceDetails.insurance_logo"/>
		    <div class="mui-row">
		        <div class="num">
		        	资金池总额(元) 
				</div>	
		        <div class="num">
		         <span class="mui-badge-danger mui-badge-inverted">{{InsuranceDetails.all_money}}</span>
		        </div>	
		        <div class="num">
		        	加入计划总人数(人) 
		        	<div>
			           <span class="mui-badge-danger mui-badge-inverted">{{InsuranceDetails.all_user_buy}}</span>
			        </div>
		        </div>
		        <div class="num">
		        	近7日加入计划人数(人) 
		        	<div>
			           <span class="mui-badge-danger mui-badge-inverted">{{InsuranceDetails.seven_user_buy}}</span>
			        </div>
		        </div>
		    </div>
		</div>
 
		<div class="mui-card">
			<div class="title1">计划规则</div>
			<ul class="mui-table-view">
				<li class="mui-table-view-cell">
					加入年龄
					<select v-model="pay">
						<option v-for="(value, index) in InsuranceDetails.age_money" :value="value">{{value.age}}</option>
					</select>
				</li>
				<li class="mui-table-view-cell">
					保障范围
					<span>{{InsuranceDetails.insurance_range}}</span>
				</li>
				<li class="mui-table-view-cell">
					保障期间
					<span>
					 {{InsuranceDetails.insurance_time}}年
				</span>
				</li>
				<li class="mui-table-view-cell">
					赔付金额
					<span>
						最高{{InsuranceDetails.insurance_max_money}}元
					</span>
				</li>
			</ul>
		</div>
		<div class="inD6">
			需支付INU <span> {{pay.insured_amount}}</span>
			<button class="mui-btn mui-btn-warning" @click="gotoDetails()">立即加入</button>
		</div>
		<div class="mui-card">
			<div class="title1">计划简介</div>
			<div class="mui-card-content">
				<div class="mui-card-content-inner">
					<p v-html="InsuranceDetails.synopsis"></p>
				</div>
			</div>
		</div>
		
		<div class="mui-card">
			<div class="title1">赔付流程</div>
			<div class="mui-card-content">
				<div class="mui-card-content-inner">
					<p v-html="InsuranceDetails.procedure"></p>
				</div>
			</div>
		</div>
		
		<div class="mui-card">
			<div class="title1">常见问题</div>
			<div class="mui-card-content">
				<div class="mui-card-content-inner">
					<div class="title2">Q：什么是重疾险产品？</div>	
					<p>
						A：“INU生命互助”是全球首家采用实名制区块链以及人工智能技术，整合传统保险行业中投保人以及未投保人需要解决的基础痛点，建立了一个完整的体系。
					</p>
					<div class="title2">Q：什么是重疾险产品？</div>	
					<p>A：“INU生命互助”是全球首家采用实名制区块链以及人工智能技术，整合传统保险行业中投保人以及未投保人需要解决的基础痛点，建立了一个完整的体系。					</p>
				</div>
			</div>
		</div>

		 
	</div>
</template>

<script>
	import { mapState } from "vuex"
	import Url from '../../utils/url.js';

	export default {
//		name: 'home',
		data(){
			return{
				pay:{
					insurance_id: "", 
					age: "", 
					insured_amount: ""
				}
			}
		},
		computed: {
			...mapState({
				InsuranceDetails:state => state.insuranceDetails.InsuranceDetails

			})
		},
		created(){
			
//			this.$store.dispatch("getTitle","")
 			this.getInsuranceDetails();
		},
		methods:{
			gotoDetails(){
//				this.$router.push({ path: `/insuranceDetails/${id}` })
 				this.$router.push({ path:'/insure' ,name:'投保', query:this.pay})
//				this.$route.query.id;
 			},
			getInsuranceDetails(){
				let _self = this;
				let _data = {insurance_id: this.$route.params.id}
				$.ajax({
		            url: Url+'/Api/Interface/getInsuranceDetails',
		            type:'post',
		            data:_data,
		            success:function ({code, msg, data}) {
		            	if(code==1){
    						_self.$store.dispatch("insuranceDetails",data)
		            	}else{
		            		console.log("msg")
		            	}
		            },
		            error:function () {
		            }
		        })

			}
//		 
		},
		mounted(){
//	 		 
		 	this.pay = this.InsuranceDetails.age_money[0];
			var slider = this.mui("#slider");
			slider.slider({
				interval: 5000
			});
		
		}
	}
</script>

<style scoped>
	.mui-table-view-cell span,
	.mui-table-view-cell .mui-numbox {
		float: right;
	}
</style>