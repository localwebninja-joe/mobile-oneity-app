var frameModule = require("ui/frame");
exports.pageLoaded = function (args) {
    var page = args.object;
    var splash_screen = page.getViewById("splash_screen");
    splash_screen.animate({
        opacity: 1,
        duration: 1000
    }).then(function () {
        var navigationOptions = {
            moduleName: 'splash_screens/splash_screen2',
            context: {
                param1: "value1",
                param2: "value2"
            }
        };
        frameModule.topmost().navigate(navigationOptions);
        return splash_screen.animate({
            opacity: 0,
            duration: 1000
        });
    });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3BsYXNoX3NjcmVlbjEuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzcGxhc2hfc2NyZWVuMS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxJQUFJLFdBQVcsR0FBRSxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7QUFFckMsT0FBTyxDQUFDLFVBQVUsR0FBRyxVQUFTLElBQUk7SUFDOUIsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUN2QixJQUFJLGFBQWEsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQ3pELGFBQWEsQ0FBQyxPQUFPLENBQUM7UUFDckIsT0FBTyxFQUFFLENBQUM7UUFDVixRQUFRLEVBQUUsSUFBSTtLQUNkLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFFUCxJQUFJLGlCQUFpQixHQUFDO1lBQ3JCLFVBQVUsRUFBQywrQkFBK0I7WUFDMUMsT0FBTyxFQUFFO2dCQUNSLE1BQU0sRUFBRSxRQUFRO2dCQUNoQixNQUFNLEVBQUUsUUFBUTthQUNoQjtTQUNELENBQUE7UUFFRCxXQUFXLENBQUMsT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFFbEQsT0FBTyxhQUFhLENBQUMsT0FBTyxDQUFDO1lBQzVCLE9BQU8sRUFBRSxDQUFDO1lBQ1YsUUFBUSxFQUFFLElBQUk7U0FDZCxDQUFDLENBQUM7SUFDSixDQUFDLENBQUMsQ0FBQztBQUNKLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbInZhciBmcmFtZU1vZHVsZSA9cmVxdWlyZShcInVpL2ZyYW1lXCIpO1xuXG5leHBvcnRzLnBhZ2VMb2FkZWQgPSBmdW5jdGlvbihhcmdzKSB7XG4gICAgdmFyIHBhZ2UgPSBhcmdzLm9iamVjdDtcbiAgICB2YXIgc3BsYXNoX3NjcmVlbiA9IHBhZ2UuZ2V0Vmlld0J5SWQoXCJzcGxhc2hfc2NyZWVuXCIpO1xuXHRzcGxhc2hfc2NyZWVuLmFuaW1hdGUoe1xuXHRcdG9wYWNpdHk6IDEsXG5cdFx0ZHVyYXRpb246IDEwMDBcblx0fSkudGhlbihmdW5jdGlvbigpIHtcblxuXHRcdHZhciBuYXZpZ2F0aW9uT3B0aW9ucz17XG5cdFx0XHRtb2R1bGVOYW1lOidzcGxhc2hfc2NyZWVucy9zcGxhc2hfc2NyZWVuMicsXG5cdFx0XHRjb250ZXh0OiB7XG5cdFx0XHRcdHBhcmFtMTogXCJ2YWx1ZTFcIixcblx0XHRcdFx0cGFyYW0yOiBcInZhbHVlMlwiXG5cdFx0XHR9XG5cdFx0fVxuXHRcdFxuXHRcdGZyYW1lTW9kdWxlLnRvcG1vc3QoKS5uYXZpZ2F0ZShuYXZpZ2F0aW9uT3B0aW9ucyk7XG5cblx0XHRyZXR1cm4gc3BsYXNoX3NjcmVlbi5hbmltYXRlKHtcblx0XHRcdG9wYWNpdHk6IDAsXG5cdFx0XHRkdXJhdGlvbjogMTAwMFxuXHRcdH0pO1xuXHR9KTtcbn07Il19