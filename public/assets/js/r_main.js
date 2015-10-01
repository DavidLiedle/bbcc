/**
 * The main file for working with RequireJS
 *
 */

console.log('assets/js/r_main.js loaded!');

requirejs.config({

  "baseUrl":  "./assets/lib",
  "optimize": "none",
  "shim": {
    "bootstrap": { "deps": ["jquery"] },
    "backbone":  { "deps": ["jquery","lodash"] }
  },
  "paths": {
    "jquery": [
      "//cdnjs.cloudflare.com/ajax/libs/jquery/2.1.4/jquery.min", // Main CDN file
      "./jquery/dist/jquery.min" // Local fallback installed by Bower
    ],
    "backbone": [
      "//cdnjs.cloudflare.com/ajax/libs/backbone.js/1.2.3/backbone-min", // Main CDN file
      "./backbone/backbone-min" // Local fallback installed by Bower
    ],
    "bootstrap": [
      "//cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.0.0/js/bootstrap.min", // Main CDN file
      "./bootstrap/dist/js/bootstrap.min" // Local fallback installed by Bower
    ],
    "dust": [
      "//cdnjs.cloudflare.com/ajax/libs/dustjs-linkedin/2.7.2/dust-full.min", // Main CDN file
      "./dustjs-linkedin/dist/dust-full.min" // Local fallback installed by Bower
    ],
    "lodash": [
      "//cdnjs.cloudflare.com/ajax/libs/lodash.js/3.10.1/lodash.min", // Main CDN file
      "./lodash/lodash.min" // Local fallback installed by Bower
    ],
    "underscore": [
      "//cdnjs.cloudflare.com/ajax/libs/underscore.js/1.8.3/underscore-min", // Main CDN file
      "./underscore/underscore-min" // Local fallback installed by Bower
    ]
  }

}); // End of requirejs.config()

require(
  [
    "jquery",
    "bootstrap", // has jQuery shim'd
    "backbone",
    "dust",
    "lodash"
  ],
  function(){

    // ======= jQuery ==============================================================================================
    $( function(){

      console.log('jQuery ready!');

      //$("#signature").html('test'); // Uncomment to see if jQuery has $ and can grab elements

      //$('[data-toggle="tooltip"]').tooltip(); // Was using this for hover on days with events, now using modals

    });

    // ======= Backbone.js ==========================================================================================

    // Backbone.sync = function(method, model){
    //   console.log('sync function model.url: ' + model.url)
    // }

    var Calendar = Backbone.Model.extend({
      defaults: {
        month: "",
        year:  "",
        events: []
      }
    });

    var Months = Backbone.Model.extend({
      initialize: function(){
        console.log('Months model created...');
      }
    });

    var Event  = Backbone.Model.extend({
      defaults: {
        id:      "",
        title:   "",
        time:    "",
        month:   "",
        day:     "",
        year:    "",
        address: ""
      },
      initialize: function(){
        console.log('Event model created...');
      }
    });

    var Events = Backbone.Collection.extend({
      model: Event,
      url:   '/api/v1/getAppointments'
    });

    var eventsCollection = new Events();
    console.log('new Events instantiated...');

    eventsCollection.fetch({

      success: function(){
        console.log( JSON.stringify(eventsCollection.models) );
        console.log('eventsCollection.fetch() called...');

        _.forEach(eventsCollection.models.events, function(event, key){
          console.log('forEach iterating...');
          console.log(event, key);
        });

      } // End of success

    });

    var months = new Months();

    console.log('All done!');

}); // End of require()

console.log('End of r_main.js');

