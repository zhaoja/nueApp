<template>
	<div class="publicity-datails img-bg1">
		<div class="tips">INU提示：公示结束后会隐藏个人信息，保护受助者隐私</div>
 		<ul class="mui-table-view smooth">
			<li class="mui-table-view-cell person">
				<img :src="accountInfo.personInfo.picture"/>
				<span>{{accountInfo.personInfo.name}}</span>
				<span>{{accountInfo.personInfo.sex}}</span>
				<span>{{accountInfo.personInfo.age}}</span>
			</li>
			<li class="mui-table-view-cell" v-for="inf in accountInfo.accountInfoList">
				<span class="mui-pull-left">{{inf.name}}</span>
				<span class=" mui-pull-right">{{inf.value}}</span>
			</li>			 
		</ul>
		<ul class="badge-li-list">
			<li class="mui-table-view-cell"  v-for="txt in accountInfo.accountInfoTxt">
				<div><h4 class="vertical-h4">{{txt.name}}</h4></div>
				<div class="vertical-text">{{txt.value}}</div>
			</li>
		</ul>
	</div>
</template>


<script>
 	
	import img1 from '@/assets/images/muwu.jpg' 
	export default {
 
		data() {
	      	return {
	      		accountInfo:{
	      			personInfo:{
	      				picture:img1,
	      				name:'欧阳娜娜',
	      				sex:'女',
	      				age:'66'
	      			},
	      			accountInfoList:[
	      				{'name':'互助计划','value':'中青年抗癌计划'},
	      				{'name':'加入日期','value':'2017-09-24'},
	      				{'name':'生效日期','value':'2017-09-24'},
	      				{'name':'参与人数','value':'393849'},
	      				{'name':'获捐互助金','value':'¥ 25 000 000.00'},
	      				{'name':'公示日期','value':'2018-08-09'},
	      				{'name':'划款日期','value':'2018-08-09'},
 	      			],
 	      			accountInfoTxt:[
 	      				{name:'事件详情',value:'血栓，就像身体里一个淘气的小家伙，容易脱落游走，还爱到处和其他疾病拉关系，一旦管理不好，颇为危险，因为它是全球前三位的致死性。'},
 	      				{name:'调查过程',value:'血栓，就像身体里一个淘气的小家伙，容易脱落游走，还爱到处和其他疾病拉关系，一旦管理不好，颇为危险，因为它是全球前三位的致死性。'},
 	      				{name:'互助详情',value:'血栓，就像身体里一个淘气的小家伙，容易脱落游走，还爱到处和其他疾病拉关系，一旦管理不好，颇为危险，因为它是全球前三位的致死性。'},
 	      				{name:'相关材料',value:'血栓，就像身体里一个淘气的小家伙，容易脱落游走，还爱到处和其他疾病拉关系，一旦管理不好，颇为危险，因为它是全球前三位的致死性。'},
 	      			]
	      		}
	      		
 	      	};
	   	},
	   	
	   	created(){
//	   		for(var i = mui.hooks.inits.length-1,item;i>=0;i--){
//	          	item=mui.hooks.inits[i];
//	          	if(item.name=="pullrefresh"){
//	              	item.repeat=true;
//        		}
//    		}
	   	},
	   	methods:{
	   		 
	   	},
	   	mounted(){
 		  
	   }
	}
</script>
 