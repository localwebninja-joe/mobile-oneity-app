var frameModule =require("ui/frame");

exports.pageLoaded = function(args) {
    var page = args.object;
    var splash_screen = page.getViewById("splash_screen");
	splash_screen.animate({
		opacity: 1,
		duration: 1000
	}).then(function() {

		var navigationOptions={
			moduleName:'splash_screens/splash_screen2',
			context: {
				param1: "value1",
				param2: "value2"
			}
		}
		
		frameModule.topmost().navigate(navigationOptions);

		return splash_screen.animate({
			opacity: 0,
			duration: 1000
		});
	});
};