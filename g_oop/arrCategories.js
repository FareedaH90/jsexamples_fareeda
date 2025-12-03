// arrCategories.js
// storing objects inside an array

const arrCategories = new Array(     // instantiating a new Array object
    { name: "Cat A", description: "Cars below 1600cc" },   // JS Object[0]
    { name: "Cat B", description: "Cars above 1600cc" },   // JS Object[1]
    { name: "Cat C", description: "Goods Vehicles and Buses" } // JS Object[2]
);

//Access arrCategory  length property 
console.log(arrCategories.length);

 //accessing arrCategories' index 0's property called name and description
// console.log(arrCategories[0].name, arrCategories[0].description)

// print out all categories and description

// using a for loop
for (let i = 0; i < arrCategories.length; i++) {
    console.log(arrCategories[i].name, arrCategories[i].description);
}

console.log("\n");

arrCategories.push({name: "Cat E", description: "Open"})

// using the ForEach method of the Array Object
arrCategories.forEach((element) => {
    console.log(element.name, element.description);
});