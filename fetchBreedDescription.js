const request = require('request');


const fetchBreedDescription = function(CAT, processinput) {

  request(`https://api.thecatapi.com/v1/breeds/search?q=${CAT}`, (error, response, body) => {

    if (error) {
      processinput(error, null);
    }

    if (body.length > 2) {

      let input = body.substring(1, body.length - 1);
      let JSONobj = JSON.parse(input);
      processinput(null, JSONobj.description);

    } else {

      processinput(`The breed "${CAT.toUpperCase()}" that you specified was not found in our database`, null);

    }
  });
  
};

module.exports = fetchBreedDescription;