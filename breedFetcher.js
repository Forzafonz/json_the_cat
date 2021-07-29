const request = require('request');
const {stdin, stdout} = require('process');
const CAT = process.argv[2];


const requestCat = function (){

  request(`https://api.thecatapi.com/v1/breeds/search?q=${CAT}`, (error, response, body) => {
    if (error) {
      return console.log(`There was an error in your request. Error description: ${error}`);
    }

    if (body.length > 2){

      console.log(response.statusCode);
      let data = body.substring(1, body.length - 1);
      let JSONobj = JSON.parse(data);
      console.log(JSONobj.description)

    } else {

      return console.log(`The breed "${CAT.toUpperCase()}" that you specified was not found in our database`);

    }
  });
  
}

requestCat()