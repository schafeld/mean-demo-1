'use strict';

var request = require('request');
var cheerio = require('cheerio');

exports.list = function(url, cb) {
  request(url, function(error, resp, body) {
    if (error) {
      cb({
        error: error
      });
    }
    if (!error) {
      var $ = cheerio.load(body);
      var pin = {};
      var $url = url;

      var $img = $('.heightContainer .pinImage').attr('src');
      // var $img = $('.heightContainer img').attr('src'); // get from Pinterest

      var $desc = $('.heightContainer img').attr('alt'); // description from Pinterest

      console.log($img + ' pin url');

      pin = {
        img: $img,
        url: $url,
        desc: $desc
      };

      // respond with final JSON object
      cb(pin);
    }
  });
};
