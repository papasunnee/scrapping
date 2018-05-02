var mongoose = require('mongoose') ;

//Comp Schemma

let compSchema = mongoose.Schema({
	name :{
		type : String ,
		required : false 
	},
	address :{
		type : String ,
		required : false 
	},
	phone : {
		type : String ,
		reqiired : false 
	}
})

let comp = module.exports = mongoose.model('comp', compSchema) ;
