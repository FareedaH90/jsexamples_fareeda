async function fetchData() {
  // TODO: fetch via async/await
  try {
    //take note of the prepended keyword await
    const response = await fetch('https://reqres.in/api/unknown', {
       headers: { 'x-api-key': 'reqres_3824db0ed4604efb9c7f2479e2e4940b' }
    });
    // handle errors gracefully
    if (response.status === 403)
      throw new Error('Permission denied. Please confirm authentication.');
    else if (!response.ok)
      throw new Error("Network response is NOT ok.");
    //take note of the prepended keyword await
    const result = await response.json();   
    console.log(result);               

  } catch (error) {
    //manage the error message incl. those custom ones
    console.log(error.message);
  }
}

fetchData();
