var Twit = require('twit')

// Create a instance of Twit
var Twitter = new Twit({
    consumer_key: 'pPCU9eZWBvHBhY5l5SBaaOR0S',
    consumer_secret: '5453JXIL3ymwmOKpUSwdAmp2XpOv7SBmT1E8vizvR6uugTYGjy',
    access_token: '837276241434652672-7PbU9TIcO2ePq6csR8rgwJrRqmf0CAH',
    access_token_secret: 'mxMpFK2Olfx3fKe2zA6FfniCQJeNsrJOYIgM7EevwprVD',
    timeout_ms: 60 * 1000,
    strictSSL: true
})

var retweet = function () {
    var params = {
        q: '#AltCampus', // Hashtags to search tweets within
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