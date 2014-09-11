// The contents of this file will be executed before any of
// your view controllers are ever executed, including the index.
// You have access to all functionality on the `Alloy` namespace.
//
// This is a great place to do any initialization for your app
// or create any global variables/functions that you'd like to
// make available throughout your app. You can easily make things
// accessible globally by attaching them to the `Alloy.Globals`
// object. For example:
//
// Alloy.Globals.someGlobalFunction = function(){};
var lang = Titanium.App.Properties.getString("lang");

Ti.API.info('----- lang:' + lang);

if (lang) {

} else {
	Ti.API.info('----- SET SET:' + lang);
	Titanium.App.Properties.setString("lang", "en");
}
Ti.API.info('-------Titanium.App.Properties.getString:' + Titanium.App.Properties.getString("lang"));
//http://developer.appcelerator.com/question/122444/change-language-inside-app