'use strict';

var fs = require('fs');
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
      var $url = url;
      // var $img = $('img.js-post-image-thumb').attr('src');
      // var $desc = $('img.js-post-image-thumb').attr('alt'); // description from Imgur
      var $img = $('div.post-image img').attr('src');
      var $desc = $('div.post-image img').attr('alt');

      console.log($img + ' Imgur image url');

      var image = {
        img: 'http:' + $img,
        url: $url,
        desc: $desc
      };

      // respond with final JSON object
      console.log('Scraped: ' + image);
      cb(image);
    }
  });
};
