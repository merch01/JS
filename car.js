



var car = {
	make: "cadillac",
	model: "escalade",
	year: 2015,
	color: "black",
	passengers: 8,
	mileage: 65000,
	engineVolume: 6.2,
	tankVolume: 117,
	fuelСonsumption: 11.2
};

var cadillac = car;
var distance = 0;
var d = distance;

function drive(car,d){
	car.mileage = car.mileage + d;
	car.tankVolume = car.tankVolume - ((d/100)*car.engineVolume);
console.log("вы проехали: " + d + ", у вас осталось: " + car.tankVolume + "литров бензина");
}

drive(cadillac, 500);
