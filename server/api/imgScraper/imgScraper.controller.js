'use strict';

var scrapers = {};

scrapers['pinterest'] = require('./scrapers/pinterest.js');
scrapers['imgur'] = require('./scrapers/imgur.js');

exports.scrape = function(req, res) {
  var url = req.body.url;
  var scraperToUse;

  if (url.indexOf('pinterest') > -1) {
    scraperToUse = 'pinterest';
  } else if (url.indexOf('imgur') > -1) {
    scraperToUse = 'imgur';
  } else {
    console.log('Cannot locate scraper.');
  }

  scrapers[scraperToUse].list(url, function(data) {
    console.log('Data from scraper: ', data);
    res.json(data);
  });
};
