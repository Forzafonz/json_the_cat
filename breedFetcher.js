const request = require('request');
const {stdin, stdout} = require('process');
const CAT = process.argv[2];


const requestCat = function (){

  request(`https://api.thecatapi.com/v1/breeds/search?q=${CAT}`, (error, response, body) => {
    // console.log('error:', error); // Print the error if one occurred
    // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    // console.log('body:', body); // Print the HTML for the Google homepage.
    let data = body.substring(1, body.length - 1);
    let JSONobj = JSON.parse(data);
    console.log(JSONobj.description)
  });
  
}

requestCat()