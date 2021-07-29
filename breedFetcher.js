const request = require('request');
const CAT = process.argv[2];


const processinput = function (error, data) {

  if (error) {

    console.log(`There was an error in your request. Error description: ${error}`);

  } else {

    let input = data.substring(1, data.length - 1);
    let JSONobj = JSON.parse(input);
    console.log(JSONobj.description);
  
  }
  
}

const fetchBreedDescription = function(CAT, processinput) {

  request(`https://api.thecatapi.com/v1/breeds/search?q=${CAT}`, (error, response, body) => {

    if (error) {
      processinput(error, null)
    }

    if (body.length > 2) {

      processinput(null, body);

    } else {

      processinput(`The breed "${CAT.toUpperCase()}" that you specified was not found in our database`, null);

    }
  });
  
};



fetchBreedDescription(CAT, processinput);