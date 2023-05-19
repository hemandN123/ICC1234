// input data
var numPeople = 10;
var electricity = 1;
var naturalGas = 1;
var fuelOil = 1;
var propane = 1;
var carMileage = 1;
var carFuelEfficiency = 1;
var airTravel = 1;

// emissions factors (metric tons of CO2 per unit)
var electricityEmissionsFactor = 0.000453; // kWh
var naturalGasEmissionsFactor = 0.005303; // therm
var fuelOilEmissionsFactor = 0.003114; // gallon
var propaneEmissionsFactor = 0.005824; // gallon
var carEmissionsFactor = 0.008887; // mile
var airEmissionsFactor = 0.000163; // mile

// calculate carbon footprint for electricity
var electricityCarbonFootprint = electricity * electricityEmissionsFactor;

// calculate carbon footprint for natural gas
var naturalGasCarbonFootprint = naturalGas * naturalGasEmissionsFactor;

// calculate carbon footprint for fuel oil
var fuelOilCarbonFootprint = fuelOil * fuelOilEmissionsFactor;

// calculate carbon footprint for propane
var propaneCarbonFootprint = propane * propaneEmissionsFactor;

// calculate carbon footprint for personal vehicle
var carCarbonFootprint = carMileage / carFuelEfficiency * carEmissionsFactor;

// calculate carbon footprint for air travel
var airCarbonFootprint = airTravel * airEmissionsFactor;

// calculate total carbon footprint
var totalCarbonFootprint = (electricityCarbonFootprint + naturalGasCarbonFootprint + fuelOilCarbonFootprint + propaneCarbonFootprint + carCarbonFootprint + airCarbonFootprint) * numPeople;

// display result
console.log("The total carbon footprint for " + numPeople + " person is " + totalCarbonFootprint.toFixed(2) + " metric tons of CO2 per year.");
