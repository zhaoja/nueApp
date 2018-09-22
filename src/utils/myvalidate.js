let validate = {
	require(data) {
	   if(['', undefined ].includes(data)){
	   		return true;
	   }
	   return false;
	},
	phone(data) {
		return !!(/^1[3|4|5|6|7|8][0-9]\d{8}$/.test(data))
	},
	password(data){
 		return !!(/^(?=.*[a-zA-Z]+)(?=.*[0-9]+)[a-zA-Z0-9]+$/).test(data)
	}
	
}
export default validate;
 