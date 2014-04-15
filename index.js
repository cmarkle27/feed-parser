var FeedParser = require('feedparser'),
  request = require('request');

request('http://rss.cnn.com/rss/cnn_topstories.rss')
  .pipe(new FeedParser())
  .on('readable', function() {
    var stream = this, 
      item;
    while (item = stream.read()) {
      console.log('%s', item.title);
    }
  });