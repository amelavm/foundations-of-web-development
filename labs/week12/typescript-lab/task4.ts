// Define the Product class
class Product {
    name: string;
    price: number;
    category: string;

    // Constructor
    constructor(name: string, price: number = 0, category: string = "General") {
        this.name = name;
        this.price = price;
        this.category = category;
    }

    // Method to get product details (arrow function)
    getDetails = (): void => {
        console.log(`Product Name: ${this.name}, Price: $${this.price}, Category: ${this.category}`);
    };
}

// Create instances of the Product class
const laptop = new Product("Laptop", 1200, "Electronics");
const notebook = new Product("Notebook");

// Call getDetails on both instances
laptop.getDetails(); // Expected: Product Name: Laptop, Price: $1200, Category: Electronics
notebook.getDetails(); // Expected: Product Name: Notebook, Price: $0, Category: General
