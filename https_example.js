
var https = require('https');
console.log('#1 I dit it MothaFlippin!');

var options = {
  host: 'www.example.org',
  path: '/'
};

//called by https when the request is made.

var callback = function(response){
  console.log('#4: In response handler callback!');
  console.log('#5: Responses: ', response);
}

console.log("#2 I'm about to make the request!");

https.request(options, callback).end();

console.log("#3 I've made the request!");