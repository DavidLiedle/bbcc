# Best Buy Code Challenge
Hi! My name is David Christian Liedle, and I'm a Senior Full Stack Developer currently in Denver, Colorado.

The UI guys at Best Buy's corporate office have given me a challenge to create a simple Calendar SPA using the following stack:

- Use Node.js/Express.js to provide sample data (below) to the view
- Use Backbone.js to request data (make use of Models, Views, and Collections)
- Use DustJS as your template engine
- Use RequireJS to modularize each component of the application
- Use Bootstrap v3.x as your CSS framework

This project is my solution to said challenge.

## The Old and the New
I'm familiar with Node/Express and Bootstrap from previous work, but I'm new to RequireJS and DustJS. My home turf is more in AngularJS, which overlaps much of the functionality provided by Backbone.js and DustJS, but everything in JavaScript has a similar feel so it isn't difficult to adapt.


## The Data
Here's the sample data I've been provided:
```javascript

    {
      "month": "12",
      "year": "2015",
      "events": [
        {
          "id": "123",
          "title": "Node.js Training - Day 1",
          "time": "9:00a - 4:00p",
          "month": "12",
          "day": "11",
          "year": "2015",
          "address": "7601 Penn Ave S, Richfield, MN"
        },
        {
          "id": "123",
          "title": "Node.js Training - Day 2",
          "time": "9:00a - 4:00p",
          "month": "12",
          "day": "12",
          "year": "2015",
          "address": "7601 Penn Ave S, Richfield, MN"
        }
      ]

    }

```
My first reaction to the data is to notice that the `"id"` fields both contain `"123"`. This may be on purpose to connect the two event, but it leaves us without a unique ID to work with. That's fine, because each event is an array element, so I'll just cycle through them and ignore that aspect for this challenge.

Next, the `"time"` fields are storing text, so down the road we would have to parse the times if we wanted to work with them in depth. I might suggest a `"start"` and `"end"` field instead, but that's out of scope for the challenge.

## The 5 Provided Requirements
There's a lot that *won't* be in this solution, because I'm coding to a Minimally Viable Product (MVP), so ONLY the requirements are being targeted in what we'll call version 1.0.0.

### 1: Simple calendar application
The simplest calendar I can think of is one that displays the dates and the events provided in The Data. Both events provided are in December of 2015, so it won't show any other months. I'm happy to add that functionality, including hard-coded, mathematically-calculated, or API-fetched data to populate the correct date mapping for other months/years, but that's not a part of MVP 1 as provided so I'll stay in-scope and KISS (Keep It Simply Simple).

### 2: Should be displayed in standard grid format (think of a desk calendar)
So, I'm creating a month-view using Bootstrap's grid system. No requirement has been given to make the solution responsive or address printing, so I'm just going to impliment col-md-1 for each calendar day and trust that you, the viewer, are using a desktop browser. A desk calendar doesn't have much room for displaying event information in a cell for the day, so I'll use a modal to provide details for the day and simply stick on an icon for days that have events to be viewed.

### 3: Month/Year is determined by data
This requirement raises the question of displaying other months/years. However, given requirement #1, I will read this literally and minimally to mean that the month (December) and the year (2015) are variables populated from The Data and displayed via the template in the view. Because the month is given as a numeric 12, I'll hard-code an array mapping month numbers to their en-us string equivalents, and then display that fetched value (December).

### 4: Events on specific days also determined by data
I'll hard-code the date-to-day mappings for December, and then cycle through them to lay them out on December's calendar. Rather than having each day look at The Data to determine whether or not it has an associated event (inefficient, with 31 lookups to The Data), I'll render the December page and then allow each event to find its way to the associated date (2 executions).

### 5: Final solution should be something that can run out-of-the-box from a zip file on a local machine
I'll assume you've got Node.js/NPM installed, so just unzip The Solution and run `npm start` from its root directory. You can view the solution in your desktop browser (I use the latest version of Google Chrome) on port 3210: [http://localhost:3210/](http://localhost:3210/)

## The Solution
The final requirement is that the solution should run out of the box (specifically a .zip file), so I'll assume that the user has a current version of Node.js (and its little buddy, `npm`) installed. Although I'd usually run something like `gulp watch` or just `gulp`, I'll stick with a simple `npm start` command to fire everything off. PLEASE NOTE: because I've wired this to be a "run out of the box" solution, it may feel like it takes forever between typing `npm start` and getting the message that it is serving on port 3210 and ready to view. That's because you'd usually do each step the script is handling individually, such as `npm install` (it does that for you), `bower install` (it's doing that for you too), and then starting up the server (it is also doing that). Give it time to run, and realize it is doing all-the-things so you don't have to.

## The Sugar
There's some cool stuff included, such as CDN/localhost fallback for RequireJS stuff, the one-command-does-it-all approach with `npm start`, and be sure to check out what's happening in console.log (which, if you're using Chrome's Developer Tools in the same window as you're viewing the page, will cause it to crush below the optimal viewing layout; again, responsiveness was not a requirement so I've coded to MVP only).

### Current Status
Presently the Bootstrap layout and Node.js/Express stuff is finished. Next up is implementation of DustJS and Backbone.js. Here's what you should see when the project runs as it currently is:

<img src="http://davidcanhelp.me/assets/images/bbcc-view.png" width="640">
