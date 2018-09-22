import Url from '../utils/url.js';

//用户注册和登录
export default {
	state: {
		homeData:{
 			imglist:[
 				{id: "1", logo: Url+"/Uploads/Img/2018-08-22/logo1.jpg", status: "1"}
 			],
 			insureData:{
 				user_number:10,
 				insurance:[
 					{
 						insurance_logo: Url+"/Uploads/Img/2018-08-22/01.jpg",
 						insurance_name:"重疾险",
 						insurance_max_money:"0.00",
   						admin_id:"",
						create_time:"",
						id:""

 					}
 				]
 			}
		}
	},
	actions: {
		//获取Logo
		getLogo({commit, state}){
			$.ajax({
	            url: Url+'/Api/Interface/getLogo',
	            type:'post',
	            success:function ({code, msg, data}) {
	            	if(code==1){
	            		commit("getLogoSuccess", data)
	            	}else{
	            		console.log("msg")
	            	}
	            },
	            error:function () {
	            }
	        })
		}, 
		//获取保险信息接口
	 	getInsurance({commit, state}){
			$.ajax({
	            url: Url+'/Api/Interface/getIndex',
	            type:'post',
	            success:function ({code, msg, data}) {
	            	if(code==1){
	            		commit("getInsuSuccess", data)
	            	}else{
	            		console.log("msg")
	            	}
	            },
	            error:function () {
	            }
	        })
		}, 
	},
	mutations: {
		getLogoSuccess(state, data){
 			state.homeData.imglist = data;
		},
		getInsuSuccess(state, data){
   			state.homeData.insureData = data;
		}
	}
	
}