define(['knockout', 'src/toggle'], function(ko, toggle) {
	ko.bindingHandlers.toggle = toggle;

	module('Toggle');
	test('It exists', function() {
		ok(toggle);
	});

});
