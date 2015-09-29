request = require 'request'

main = (placeID, credentials, callback, formatResults = false)->
  url = "https://api.twitter.com/1.1/geo/id/#{placeID}.json" # The endpoint
  oauthCredentials = { # The keys
    consumer_key : credentials.consumer_key,
    consumer_secret : credentials.consumer_secret,
    token: credentials.token,
    token_secret: credentials.token_secret
  }

  # Make the request
  request {
    url: url
    json: true
    oauth:  oauthCredentials
  },(error, response, body)->
    if !error and response.statusCode == 200
      callback(if formatResults then stripDown(body) else body)

# Optionally get rid of all pointless data and just return lat and lon for GMaps
stripDown = (body) ->
  if body.centroid?
    lat: Math.round(body.centroid[1] * Math.pow(10, 6)) / Math.pow(10, 6),
    lon: Math.round(body.centroid[0] * Math.pow(10, 6)) / Math.pow(10, 6)
  else
    {}
module.exports = main