// a) Function to calculate discounted price
function calculateDiscount(price: number, discountRate: number = 0.1): number {
    const discount = price * discountRate; // Calculate the discount amount
    const discountedPrice = price - discount; // Subtract discount from original price
    return discountedPrice;
}

// b) Function to format a greeting message
function formatGreeting(name: string, salutation?: string): string {
    if (salutation) {
        return `${salutation} ${name}!`; // If salutation is provided, include it
    }
    return `Hello ${name}!`; // Default greeting if salutation is not provided
}

// c) Function to calculate travel cost
function calculateTravelCost(
    distance: number,
    fuelEfficiency: number = 15, // Default value is 15 km/l
    fuelPrice: number = 5 // Default price per liter
): number {
    const litersRequired = distance / fuelEfficiency; // Calculate how many liters are needed
    const totalCost = litersRequired * fuelPrice; // Calculate total cost
    return totalCost;
}

// Test the Functions

// Test calculateDiscount
const discountedPrice = calculateDiscount(100, 0.2); // Price = 100, Discount = 20%
console.log(`Discounted price: ${discountedPrice}`); // Expected: 80

// Test formatGreeting
const greetingWithSalutation = formatGreeting("John", "Hi");
console.log(greetingWithSalutation); // Expected: Hi John!

const greetingWithoutSalutation = formatGreeting("John");
console.log(greetingWithoutSalutation); // Expected: Hello John!

// Test calculateTravelCost
const travelCost = calculateTravelCost(150); // Distance = 150, Default fuelEfficiency and fuelPrice
console.log(`Travel cost: ${travelCost}`); // Expected: 50
