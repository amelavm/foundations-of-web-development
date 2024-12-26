// Function to calculate fuel cost
function calculateFuelCost(
    distance: number,
    fuelEfficiency: number = 15, // Default value is 15 km/l
    fuelPrice: number
): number {
    const litersRequired = distance / fuelEfficiency; // Calculate how many liters are needed
    const totalCost = litersRequired * fuelPrice; // Calculate the total cost
    return totalCost;
}

// Data for testing
const driverVehicles = {
    Toyota: 120,
    Honda: 150,
    Ford: 200,
};

// Test calculateFuelCost
const fuelCost = calculateFuelCost(150, undefined, 5); // Distance = 150 km, Default fuelEfficiency = 15, Fuel price = 5
console.log(`Fuel cost for 150 km: ${fuelCost.toFixed(2)}`); // Expected output: Fuel cost for 150 km: 50.00

