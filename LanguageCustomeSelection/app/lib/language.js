exports.L = function(text) {
	var langFile = Titanium.App.Properties.getString("lang");
	var file = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, 'lang/' + langFile + '/strings.xml');
	var xmltext = file.read().text;
	var xmldata = Titanium.XML.parseString(xmltext);
	var data = xmldata.documentElement.getElementsByTagName(text);
	var xpath = "/resources/string[@name='" + text + "']/text()";
	var result = xmldata.evaluate(xpath).item(0);
	if (result) {
		return result.text;
	} else {
		return "";
	}
};
