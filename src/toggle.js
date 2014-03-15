/* jshint boss:true*/
define(['knockout', 'jquery', 'module'], function(ko, $, module) {
  'use strict';
  var bindingName = module.config().name || 'toggle';

  return ko.bindingHandlers[bindingName] = {
    init: function(element, valueAccessor) {
      var observable = valueAccessor();
      $(element).on('click', function() {
        observable(!ko.utils.unwrapObservable(observable));
      });
    }
  };
});
