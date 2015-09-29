
# tweet-location

[![Build Status](https://travis-ci.org/Lissy93/tweet-location.svg?branch=dev)](https://travis-ci.org/Lissy93/remove-words)
[![Dependency Status](https://david-dm.org/lissy93/tweet-location.svg)](https://david-dm.org/lissy93/remove-words)
[![devDependency Status](https://david-dm.org/lissy93/tweet-location/dev-status.svg)](https://david-dm.org/lissy93/remove-words#info=devDependencies)
[![Code Climate](https://codeclimate.com/github/Lissy93/tweet-location/badges/gpa.svg)](https://codeclimate.com/github/Lissy93/tweet-location)

>Returns a place object including latitude and longitude from a Twitter place ID


## Installation 
```npm install tweet-location --save```


## Example
```javascript
var tweetLocation =  require('tweet-location');

var credentials = require('./credentials'); // see below for template

tweetLocation('df51dec6f4ee2b2c', credentials, function(results){
    console.log(results); // Do whatever with the results
});
```

## Feeding Strait into Google Maps
Google Maps requires a latitude and longitude object which can be created from 
the center point of the polygon of coordinates returned, and then reversed and rounded.

To return a latitude and longitude object, simply specify the final optional parameter as true.
```javascript
tweetLocation('5d838f7a011f4a2d', credentials, function(latLonObject){
   // Send latLonObject to map!
    console.log(latLonObject)
}, true);
```


## Authenticating 
You will need to register your application at [https://apps.twitter.com/app/new](https://apps.twitter.com/app/new)
Then copy and paste the following into a JSON object similar to that below. 
Ideally you should put this in a separate .gitignore'd file

```javascript
module.exports = {
    consumer_key    : 'xxxxxxxxxxxxxxxxxxxxxxxxx',
    consumer_secret : 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
    token           : 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
    token_secret    : 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
};
```

## Note about Data Limits
Twitter imposes a limit of 15 requests every 15 minutes. After this the Twitter API returns a single empty JSON object.

## Tests
Run ```npm test```


## Building
- `gulp build` - Lints and compiles CoffeeScript
- `gulp test` - Runs tests
- `gulp` - Watches for changes, cleans working directory, builds and tests


## License
MIT © [Alicia Sykes](http://aliciasykes.com)