//import $http from '../utils/http.js';
import Url from '../utils/url.js';
//
export default {
	state: {
//		保险详情
		InsuranceDetails:{
			id:'id'                          ,
			insurance_name: '保险名称'           ,
			insurance_logo: '保险logo'         ,
			all_money: '资金池总额'               ,
			all_user_buy: '加入计划总人数'          ,
			seven_user_buy : '近7日人数'         ,
			insurance_range: '保障范围'          ,
			insurance_time: '保障期间'           ,
			insurance_max_money: '赔付金额'      ,
			age_money: [{id: "1", insurance_id: "1", age: "0-10", insured_amount: "100.00"}]
			 
		},
		insureInfo:{
			user_region:    ''     ,
			user_name :     ''     ,
			user_idnum :    ''     ,
			linker_region:  ''     ,
			linker_name :   ''     ,
			linker_phone :  ''     ,
			area_num :  	'86'     ,
			linker_email :  ''     ,
			insurance_id :  ''     ,
            user_age   :    ''   ,
			user_amount:    ''    ,
		},	
		insureInfo2:{
			"insure":{              
				"id": "",              
				"user_region": "",              
				"user_name": "",             
				"user_idnum": "",             
				"linker_region": "",              
				"linker_name": "",             
				"linker_phone": "",              
				"area_num": "+86",
				"linker_email": "",
				"create_time": "2018-09-18 12:38:41",             
				"insurance_id": "1",
				//投保信息ID
				"user_age": "12",
				"user_amount": "300"         
			},
			"insurance": ""
		},
		myOrderList:[{      
			"user_id": "2",
			"order_num": "20180920102526WUvtqksjs3",     
			"order_money": "300.00",     
			"status": "1",
			"create_time": "2018-09-20 10:25:26",     
			"user_name": "123",     
			"insurance_name": "意外险"      
		}],
		uid:'',  //用户id
		joinIn:0,
		toPay:0
	},
	actions: {
		//保险详情
		insuranceDetails({ commit, state },param){	 
			commit("insuranceDetailsSuccess", param)
		},
		//加入计划（投保）
//		sendInsureInfo({ commit, state },param){
//			console.log(param,"action")
//			commit("InsureInfoSuccess",param )
//		},
		//确认保单数据
		sendInsureConfirm({ commit, state },param){
			commit("sendInsureConfirmSuccess",param )
		},
		//最终的提交保单数据
		confirmInsure({ commit, state },param){
//			console.log(param,888)
			commit("confirmInsureSuccess",param )
		},
		//订单列表
		MyOrderList({ commit, state },param){
			  commit("MyOrderListSuccess", param)
		}
//		sendOrderInfo({ commit, state },param){
//			console.log(param)
//			$.ajax({
//	            url: url+'/Api/Interface/getLogo',
//	            type:'post',
//	            success:function ({code, msg, data}) {
//	            	if(code==1){
//	          commit("sendOrderInfoSuccess", "seccess")
//	            	}else{
//	            		console.log("msg")
//	            	}
//	            },
//	            error:function () {
//	            }
//	        })
//		}
	},
	mutations: {
		insuranceDetailsSuccess(state, data){
			state.InsuranceDetails = data;
		},
//		InsureInfoSuccess(state, data){
//			console.log(data,"mutations")
//			state.insureInfo
//		},
		sendInsureConfirmSuccess(state, data){
			state.insureInfo2 = data;
		},
//		confirmInsureSuccess(state,data){
//			
//		},
		//订单列表
		MyOrderListSuccess(state, data){
//			console.log(data,123)
			state.myOrderList = data;
		},
		
//		sendOrderInfoSuccess(state, ndata){
//		  	if(ndata=="seccess"){
////		 		console.log(ndata)
//			 	state.toPay = 1;
// 		 	}else{
// 		 		state.toPay = 0;
// 		 	}
//		},
	}
	
}