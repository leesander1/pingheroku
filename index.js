const cronJob = require('cron').CronJob;
const request = require('request');

/**
new cronJob( '24 09 * * *', function(){
    ping('https://fast-harbor-58566.herokuapp.com/');
},  null, true,'America/Chicago');
*/

new cronJob( '30 08 * * *', function(){
    ping('https://fast-harbor-58566.herokuapp.com/');
},  null, true,'America/Chicago');

new cronJob( '30 20 * * *', function(){
    ping('https://fast-harbor-58566.herokuapp.com/');
},  null, true,'America/Chicago');

ping = (http) => {
  request(http, function (error, response, body) {
    console.log('error:', error); // Print the error if one occurred
    console.log('ping: '+ http);
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    //console.log('body:', body);
  });
};
