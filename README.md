# Toggle binding for knockout

[![Build status](https://travis-ci.org/mokkabonna/knockout.bindingHandlers.toggle.png)](https://travis-ci.org/mokkabonna/knockout.bindingHandlers.toggle)

## Usage

HTML

    <input data-bind="toggle: myobs" >

JS

    ko.applyBindings({
        myobs : ko.observable()
    });


This binding is written in AMD. It returns the binding object. It will attach itself to `knockout.bindingHandlers.toggle` once required for the first time. This can be overridden with a config section in your requirejs config like shown below.

```
requirejs.config({
    config: {
        'bower_components/knockout.bindingHandlers.toggle/src/toggle': {
            name: 'someOtherName'
    }
});
```

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

    npm install & bower install

You can now use grunt develop for a ready made watch task for development. Tests, linting..

    grunt develop
