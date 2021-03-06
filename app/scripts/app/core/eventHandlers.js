define([

],

function () {
  'use strict';

  // placeholder for when the app instance
  // is passed in from its constructor
  var app;

  // a function to illustrate how to test
  // the internals of RequireJS modules
  function internalFunction (data) {
    if (data) {
      return 1;
    } else {
      return 0;
    }
  }

  function myCollectionReset () {
    console.log('collection reset!');
    console.log(app.collections.myCollection.toJSON());
  }

  function init (_app) {
    app = _app;

    return {
      myCollectionReset: myCollectionReset,
    };
  }

  // expose anything you want to the test environment.
  // you can even choose to return the module's normal value by using `has` within a test suite.
  // this entire branch will be removed automatically during a production build.
  if (has('internalTest')) {
    return {
      init: init,
      myCollectionReset: myCollectionReset,
      internalFunction: internalFunction,
    };
  }

  // otherwise return the module's normal value
  return init;
});
