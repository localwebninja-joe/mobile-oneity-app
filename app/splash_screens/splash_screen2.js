var frameModule = require("ui/frame");
exports.pageLoaded = function (args) {
    var navigationOptions = {
        moduleName: 'login_registration/login',
        context: {
            param1: "value1",
            param2: "value2"
        }
    };
    frameModule.topmost().navigate(navigationOptions);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3BsYXNoX3NjcmVlbjIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzcGxhc2hfc2NyZWVuMi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxJQUFJLFdBQVcsR0FBRSxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7QUFFckMsT0FBTyxDQUFDLFVBQVUsR0FBRyxVQUFTLElBQUk7SUFDOUIsSUFBSSxpQkFBaUIsR0FBQztRQUN4QixVQUFVLEVBQUMsMEJBQTBCO1FBQ3JDLE9BQU8sRUFBRTtZQUNSLE1BQU0sRUFBRSxRQUFRO1lBQ2hCLE1BQU0sRUFBRSxRQUFRO1NBQ2hCO0tBQ0QsQ0FBQTtJQUVELFdBQVcsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUMsaUJBQWlCLENBQUMsQ0FBQztBQUNuRCxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgZnJhbWVNb2R1bGUgPXJlcXVpcmUoXCJ1aS9mcmFtZVwiKTtcblxuZXhwb3J0cy5wYWdlTG9hZGVkID0gZnVuY3Rpb24oYXJncykge1xuICAgIHZhciBuYXZpZ2F0aW9uT3B0aW9ucz17XG5cdFx0bW9kdWxlTmFtZTonbG9naW5fcmVnaXN0cmF0aW9uL2xvZ2luJyxcblx0XHRjb250ZXh0OiB7XG5cdFx0XHRwYXJhbTE6IFwidmFsdWUxXCIsXG5cdFx0XHRwYXJhbTI6IFwidmFsdWUyXCJcblx0XHR9XG5cdH1cblx0XG5cdGZyYW1lTW9kdWxlLnRvcG1vc3QoKS5uYXZpZ2F0ZShuYXZpZ2F0aW9uT3B0aW9ucyk7XG59OyJdfQ==