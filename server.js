/**
 * @description
 * This simple Node.js app uses the Express framework to serve data
 *
 * @author David Christian Liedle <david.liedle@gmail.com>
 *
 */

'use strict';

var express = require('express'); // The Express framework for Node.js
var morgan  = require('morgan');  // A logging middleware package

var app = express(); // Creating our app

app.use( morgan('combined') ); // The format of the log we want from Morgan


// ======================== Static Files ==========================================
app.use(express.static('public'));


// =============================== Routes =========================================
app
.get('/api/v1/getAppointments', function( req, res ){
  res.json(
    {
      "month":  "12",
      "year":   "2015",
      "events": [
        {
          "id":      "123",
          "title":   "Node.js Training - Day 1",
          "time":    "9:00a - 4:00p",
          "month":   "12",
          "day":     "11",
          "year":    "2015",
          "address": "7601 Penn Ave S, Richfield, MN"
        },
        {
          "id":      "123",
          "title":   "Node.js Training - Day 2",
          "time":    "9:00a - 4:00p",
          "month":   "12",
          "day":     "12",
          "year":    "2015",
          "address": "7601 Penn Ave S, Richfield, MN"
        }
      ]

    }
  );
});


// =============================== Server =========================================
var server = app.listen( 3210, function(){

  var port = server.address().port;

  console.log('The Best Buy Code Challenge Node.js server is listening on port %s', port);

});
