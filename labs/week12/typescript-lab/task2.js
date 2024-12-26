// Function to calculate fuel cost
function calculateFuelCost(distance, fuelEfficiency, // Default value is 15 km/l
fuelPrice) {
    if (fuelEfficiency === void 0) { fuelEfficiency = 15; }
    var litersRequired = distance / fuelEfficiency; // Calculate how many liters are needed
    var totalCost = litersRequired * fuelPrice; // Calculate the total cost
    return totalCost;
}
// Data for testing
var driverVehicles = {
    Toyota: 120,
    Honda: 150,
    Ford: 200,
};
// Test calculateFuelCost
var fuelCost = calculateFuelCost(150, undefined, 5); // Distance = 150 km, Default fuelEfficiency = 15, Fuel price = 5
console.log("Fuel cost for 150 km: ".concat(fuelCost.toFixed(2))); // Expected output: Fuel cost for 150 km: 50.00
