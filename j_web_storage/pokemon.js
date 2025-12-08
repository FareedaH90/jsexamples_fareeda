function fetchData() {

    //via promises
    fetch('https://pokeapi.co/api/v2/pokemon?offset=1328&limit=5') // (?) is a query parameter
        .then((response) => {


            return response.json();
        })                                                      // obtain the response and return the json format of response
        .then((data) => {

            //if fetched data goes beyong 1328 characters, no more characters
            const returnedCharacters = data.results;

            if (!returnedCharacters.length)
                throw new Error("No characters found");

            console.log(data);
        })                                                       //work on the json
        .catch((error) => {
            console.log(error.message);

        });


}

//call /invoke the function
fetchData();
