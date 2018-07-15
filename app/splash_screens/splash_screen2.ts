var frameModule =require("ui/frame");

exports.pageLoaded = function(args) {
    var navigationOptions={
		moduleName:'login_registration/login',
		context: {
			param1: "value1",
			param2: "value2"
		}
	}
	
	frameModule.topmost().navigate(navigationOptions);
};