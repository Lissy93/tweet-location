(function() {
  var main, request, stripDown;

  request = require('request');

  main = function(placeID, credentials, callback, formatResults) {
    var oauthCredentials, url;
    if (formatResults == null) {
      formatResults = false;
    }
    url = "https://api.twitter.com/1.1/geo/id/" + placeID + ".json";
    oauthCredentials = {
      consumer_key: credentials.consumer_key,
      consumer_secret: credentials.consumer_secret,
      token: credentials.token,
      token_secret: credentials.token_secret
    };
    return request({
      url: url,
      json: true,
      oauth: oauthCredentials
    }, function(error, response, body) {
      if (!error && response.statusCode === 200) {
        return callback(formatResults ? stripDown(body) : body);
      }
    });
  };

  stripDown = function(body) {
    if (body.centroid != null) {
      return {
        lat: Math.round(body.centroid[1] * Math.pow(10, 6)) / Math.pow(10, 6),
        lon: Math.round(body.centroid[0] * Math.pow(10, 6)) / Math.pow(10, 6)
      };
    } else {
      return {};
    }
  };

  module.exports = main;

}).call(this);
/* (C) Alicia Sykes <alicia@aliciasykes.com> 2015           *\
\* MIT License. Read full license at: https://goo.gl/IL4lQJ */