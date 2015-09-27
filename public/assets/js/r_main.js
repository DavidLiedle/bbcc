/**
 * The main file for working with RequireJS
 *
 */
console.log('assets/js/r_main.js loaded!');

requirejs.config({

  "baseUrl":  "./assets/lib",
  "optimize": "none",
  "shim": {
    "bootstrap": { "deps": ["jquery"] }
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
      "./underscore/underscore" // Local fallback installed by Bower
    ]
  }

});

//requirejs(["r_main"]);
require(
  [
    "jquery",
    "bootstrap", // has jQuery shim'd
    "backbone",
    "dust",
    "lodash"
  ],
  function(){

  // jQuery:
  $( function(){

    console.log('jQuery ready!');

    //$("#signature").html('test'); // Uncomment to see if jQuery has $ and can grab elements

    //$('[data-toggle="tooltip"]').tooltip(); // Was using this for hover on days with events, now using modals

  });

});
