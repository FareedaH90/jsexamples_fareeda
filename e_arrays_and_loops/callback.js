// Using a Promise Object that takes in callback function to create a delay
const sleep = async (delay) => new Promise((resolve) => setTimeout(() => {
    console.log("I am sleeping for two seconds.");
    return resolve;
}, delay));

await sleep(2000);

// When using setTimeout, we are essentially applying a callback function as well
// After two seconds, setTimeout should run the callback function with console.log(...)
setTimeout(() => {
    console.log("I've been waiting for 2 seconds.");
}, 2000);

