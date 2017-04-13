const cronJob = require('cron').CronJob;
const request = require('request');

/**
new cronJob( '06 09 * * *', function(){
  request('https://fast-harbor-58566.herokuapp.com/', function (error, response, body) {
    console.log('error:', error); // Print the error if one occurred
    console.log('ping: https://fast-harbor-58566.herokuapp.com/');
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    //console.log('body:', body);
  });
},  null, true,'America/Chicago');
*/

new cronJob( '30 08 * * *', function(){
  request('https://fast-harbor-58566.herokuapp.com/', function (error, response, body) {
    console.log('error:', error); // Print the error if one occurred
    console.log('ping: https://fast-harbor-58566.herokuapp.com/');
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    //console.log('body:', body);
  });
},  null, true,'America/Chicago');

new cronJob( '30 20 * * *', function(){
  request('https://fast-harbor-58566.herokuapp.com/', function (error, response, body) {
    console.log('error:', error); // Print the error if one occurred
    console.log('ping: https://fast-harbor-58566.herokuapp.com/');
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    //console.log('body:', body);
  });
},  null, true,'America/Chicago');
