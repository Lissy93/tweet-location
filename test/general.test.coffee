expect = require('chai').expect

process.env.NODE_ENV = 'test'

removeWords = require('../index').main

describe 'Check basic functionality of tweet-location module', ()->
  # TODO: write tests...