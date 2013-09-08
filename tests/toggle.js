define(['knockout', 'src/toggle'], function(ko, toggle) {
	var btn, model;
	module('Toggle', {
		fixture: '<button id="btn" data-bind="toggle:obs">This button toggles</button>',
		setup: function() {
			ko.bindingHandlers.toggle = toggle;
			btn = $('#btn');
			model = {
				obs: ko.observable()
			};
			ko.cleanNode(document.body);
			ko.applyBindings(model);
		},
		teardown: function() {
			delete ko.bindingHandlers.toggle;
		}
	});

	test('It exists', function() {
		ok(toggle);
	});

	test('On click the button flips the underlying value', function() {
		btn.click();
		equal(true, model.obs());
		btn.click();
		equal(false, model.obs());
		btn.click();
		equal(true, model.obs());
	});

});
