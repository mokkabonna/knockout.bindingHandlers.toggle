require.config({
  baseUrl: '/base',
  paths: {
    knockout: 'bower_components/knockout.js/knockout',
    jquery: 'bower_components/jquery/dist/jquery',
    requirejs: 'bower_components/requirejs/require'
  }
});

require(['spec/toggle'], window.__karma__.start);
