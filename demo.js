// Configure RequireJS so it resolves relative module paths from the `src` folder.
require.config({
    baseUrl: '',
    paths: {
        knockout: 'lib/knockout.js/knockout',
        jquery: 'lib/jquery/jquery'
    }
});


require(['knockout', 'src/toggle'], function(ko, toggle ) {
    ko.bindingHandlers. toggle = toggle ; //attach the binding


    //implement here the demo of your binding
    var viewModel = {
        demoFalse: ko.observable(false),
        demoTrue: ko.observable(true),
        demoUndefined: ko.observable(),
        demoNull: ko.observable(null),
        demoNumber : ko.observable(0),
        demoNumber2 : ko.observable(1)
    };

    viewModel.json = ko.computed(function() {
        var model = ko.toJS(viewModel);
        delete model.json;
        return JSON.stringify(model, null, 2);
    });

    ko.applyBindings(viewModel);
});
