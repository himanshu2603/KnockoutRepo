var viewModel={};

viewModel.Name=ko.observable().extend({required:{params:true,messages:"Please enter the valid Name,Its Mandotary field."}});
ko.validation.group(viewModel,{deep:true});
ko.applyBindings(viewModel);


function validateJS(){
	if(viewModel.isValid()){
		alert("success");

	}
	else{
		viewModel.errors.showAllMessages()
		alert("fail")

	}
}
