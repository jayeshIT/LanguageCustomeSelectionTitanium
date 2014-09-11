var LANG = require('language');

Alloy.Globals.CustomTabGroup = $.tgb;
$.tgb.open();
Alloy.Globals.openNewWin = function(win) {
	$.tgb.activeTab.open(win);
};

var setLanguage = function(e) {

	$.tab1.title = LANG.L("HOME_TAB_TITLE1");
	$.tab2.title = LANG.L("HOME_TAB_TITLE2");
	$.tab3.title = LANG.L("HOME_TAB_TITLE3");
	$.tab4.title = LANG.L("HOME_TAB_TITLE4");
	$.tab5.title = LANG.L("HOME_TAB_TITLE5");

};

setLanguage();

Alloy.Globals.setLanguage = function(e) {
	setLanguage(e);
};

if (OS_ANDROID) {
	$.tgb.addEventListener('open', function(e) {
		Ti.API.info('- this is data');
		if (e.index == 2) {
			Ti.API.info('----123');
			var activity = $.tgb.activeTab.activity;
			Ti.API.info('-------activity: ' + activity);
			activity.onCreateOptionsMenu = function(e) {
				var menu = e.menu;
				// Menu Item 1
				var menuItem1 = menu.add({
					title : "Item 1",
					icon : "images/action_about.png",
					showAsAction : Ti.Android.SHOW_AS_ACTION_ALWAYS
				});
				menuItem1.addEventListener("click", function(e) {
					alert("I was clicked 1");
				});

				// Menu Item 2
				var menuItem2 = menu.add({
					title : "Item 2",
					icon : "images/action_settings.png",
					showAsAction : Ti.Android.SHOW_AS_ACTION_ALWAYS
				});
				menuItem2.addEventListener("click", function(e) {
					alert("I was clicked 2");
				});
			};
		}

	});
}
