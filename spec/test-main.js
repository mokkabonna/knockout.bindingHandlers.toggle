require.config({
  baseUrl: '/base',
  paths: {
    knockout: 'bower_components/knockout/dist/knockout',
    jquery: 'bower_components/jquery/dist/jquery'
  }
});

require(['spec/toggle'], window.__karma__.start);
