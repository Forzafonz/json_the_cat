const CAT = process.argv[2];
const fetchBreedDescription = require('./fetchBreedDescription');


const processinput = function(error, data) {

  if (error) {

    console.log(`Error fetch details: ${error}`);

  } else {

    console.log(data);
  
  }
  
};

fetchBreedDescription(CAT, processinput);