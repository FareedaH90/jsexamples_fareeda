function fetchData() {
  fetch("https://reqres.in/api/unknown", {
    // headers: { "x-api-key": "reqres_3824db0ed4604efb9c7f2479e2e4940b" },
  })
    .then((response) => {
      // if the response has an issue, throw a custom response (gracefully)
      if (response.status === 403)
        throw new Error('Permission Denied. Please confirm authentication.');
      else if (!response.ok)
        throw new Error('Network response is NOT ok.');

      // otherwise return the response in JSON format
      return response.json();
    })
    .then((result) => {
      // logs out the data from the fetch request
      console.log(result.data);
    })
    .catch((error) => {
      // catch any error that occurs
      console.log(error);
    });
}

fetchData();
