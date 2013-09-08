define(['knockout', 'jquery'], function(ko, $) {
	'use strict';
	return {
		init: function(element, valueAccessor) {
			var observable = valueAccessor();
			$(element).on('click', function() {
				observable(!ko.utils.unwrapObservable(observable));
			});
		}
	};
});
