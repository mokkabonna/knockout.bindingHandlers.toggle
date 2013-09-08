# Toggle binding for knockout

[![Build status](https://travis-ci.org/mokkabonna/knockout.bindingHandlers.toggle.png)](https://travis-ci.org/mokkabonna/knockout.bindingHandlers.toggle)

## Usage

HTML

	<input data-bind="toggle : myobs" >

JS

	ko.applyBindings({
		myobs : ko.observable()
	});


This binding is written in AMD. It returns the binding object. You need to attach it yourself since this allows it to coexist with other possible bindings named toggle. This will only need to be done once as it will then be attached to the knockout module.

	define(['knockout', 'somefolder/toggle'], function(ko, toggle){
		ko.bindingHandlers.toggle = toggle;
		//use knockout
	});

## Behaviour

TODO:

### valueUpdate


## Demo

There is a demo at http://mokkabonna.github.io/knockout.bindingHandlers.toggle

## Dependencies

- knockout

For accurate versions check bower.json

## Contributing

Clone, then run (assuming you have node)

    npm install
    grunt bower //this is to install all bower packages

You can now use grunt develop for a ready made watch task for development. Tests, linting..

    grunt develop
