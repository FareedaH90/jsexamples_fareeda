// Create a class called Vehicle
class Vehicle {

    // constructor (keyword)
    // this (keyword)
    // a constructor is called when a new instance of the class is created
    constructor(make, model, year, distanceTraveled) {
        this.make = make;                        // property
        this.model = model;                      // property
        this.year = year;                        // property
        this.distanceTraveled = distanceTraveled ? distanceTraveled : 0;
        // property, default value upon instantiating
    }

    // method common to all vehicles
    travel(distance) {   // <-- Missing indent before!
        this.distanceTraveled += distance;        // cumulatively add distances passed in
        console.log(`The ${this.year} ${this.make} ${this.model} has been driven ${distance} units (km).`);
    }

    // method to get the total distance travelled
    getTotalDistance() {   // <-- Missing indent before!
        return this.distanceTraveled;
    }
}



// const myTransport = new Vehicle("Toyota", "Raize", "2022");
// myTransport.travel(100);     // yesterday 100km
// myTransport.travel(50);      // today 50km

// console.log(`My transport has travelled a total of ${myTransport.getTotalDistance()} km.`);

// const myTransport2 = new Vehicle("Honda", "Vezel", "2013", 50);
// myTransport2.travel(100);    // yesterday 100km
// myTransport2.travel(10);     // today 10km

// console.log(`My second transport has travelled a total of ${myTransport2.getTotalDistance()} km.`);

//module.exports = Vehicle;    // class Vehicle is exported

export default Vehicle;  //Modern ES6+ approach to export
