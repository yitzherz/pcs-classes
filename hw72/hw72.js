(function () {

    'use strict';

    function Vehicle(color) {
        this.color = color;
    }

    Vehicle.prototype.go = function (speed) {
        this.speed = speed;
        console.log(`now going at speed ${speed}`);
    };

    Vehicle.prototype.print = function () {
        console.log(`the ${this.color} vehicle is going ${this.speed} mph`);
    };
    const vehicle1 = new Vehicle('blue');
    vehicle1.go(100);

    function Plane(color) {
        this.color = color;
    }
    Plane.prototype = Object.create(Vehicle.prototype);

    Plane.prototype.go = function (speed) {
        this.speed = speed;
        console.log(`now flying at  speed ${speed}`);
    };

    Plane.prototype.print = function () {
        console.log(`the ${this.color} plane is flying at ${this.speed} mph`);
    };
    const plane1 = new Plane('green');
    plane1.go(675);

    console.log(vehicle1.color);
    vehicle1.print();
    console.log(plane1.color);
    plane1.print();
}());