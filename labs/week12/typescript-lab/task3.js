// a) Function to calculate discounted price
function calculateDiscount(price, discountRate) {
    if (discountRate === void 0) { discountRate = 0.1; }
    var discount = price * discountRate; // Calculate the discount amount
    var discountedPrice = price - discount; // Subtract discount from original price
    return discountedPrice;
}
// b) Function to format a greeting message
function formatGreeting(name, salutation) {
    if (salutation) {
        return "".concat(salutation, " ").concat(name, "!"); // If salutation is provided, include it
    }
    return "Hello ".concat(name, "!"); // Default greeting if salutation is not provided
}
// c) Function to calculate travel cost
function calculateTravelCost(distance, fuelEfficiency, // Default value is 15 km/l
fuelPrice // Default price per liter
) {
    if (fuelEfficiency === void 0) { fuelEfficiency = 15; }
    if (fuelPrice === void 0) { fuelPrice = 5; }
    var litersRequired = distance / fuelEfficiency; // Calculate how many liters are needed
    var totalCost = litersRequired * fuelPrice; // Calculate total cost
    return totalCost;
}
// Test the Functions
// Test calculateDiscount
var discountedPrice = calculateDiscount(100, 0.2); // Price = 100, Discount = 20%
console.log("Discounted price: ".concat(discountedPrice)); // Expected: 80
// Test formatGreeting
var greetingWithSalutation = formatGreeting("John", "Hi");
console.log(greetingWithSalutation); // Expected: Hi John!
var greetingWithoutSalutation = formatGreeting("John");
console.log(greetingWithoutSalutation); // Expected: Hello John!
// Test calculateTravelCost
var travelCost = calculateTravelCost(150); // Distance = 150, Default fuelEfficiency and fuelPrice
console.log("Travel cost: ".concat(travelCost)); // Expected: 50
