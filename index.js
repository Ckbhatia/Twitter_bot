var Twit = require('twit')

require("dotenv").config();

// Create a instance of Twit
var Twitter = new Twit({
    consumer_key: process.env.consumer_key,
    consumer_secret: process.env.consumer_key,
    access_token: process.env.consumer_key,
    access_token_secret: process.env.consumer_key,
    timeout_ms: 60 * 1000,
    strictSSL: true
})

var retweet = function () {
    var params = {
        q: '#codehelp, #codeshare, #codeask, #codechallenge', // Hashtags to search tweets within
        result_type: 'recent',
        lang: 'en'
    }
    Twitter.get('search/tweets', params, function (err, data) {
        if (!err) {
                var retweetId = data.statuses[0].id_str;
                Twitter.post('statuses/retweet/:id', {
                    id: retweetId
                }, function (err, response) {
                    if (response) {
                        console.log('Retweeted!!!');
                    }
                    if (err) {
                          console.log(err);
                        console.log('Problem when retweeting. Possibly already retweeted this tweet!');
                    }
                });
        }
        else {
            console.log('Error during tweet search call');
        }
    });
};

retweet()