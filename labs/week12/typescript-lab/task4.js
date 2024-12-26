// Define the Product class
var Product = /** @class */ (function () {
    // Constructor
    function Product(name, price, category) {
        if (price === void 0) { price = 0; }
        if (category === void 0) { category = "General"; }
        var _this = this;
        // Method to get product details (arrow function)
        this.getDetails = function () {
            console.log("Product Name: ".concat(_this.name, ", Price: $").concat(_this.price, ", Category: ").concat(_this.category));
        };
        this.name = name;
        this.price = price;
        this.category = category;
    }
    return Product;
}());
// Create instances of the Product class
var laptop = new Product("Laptop", 1200, "Electronics");
var notebook = new Product("Notebook");
// Call getDetails on both instances
laptop.getDetails(); // Expected: Product Name: Laptop, Price: $1200, Category: Electronics
notebook.getDetails(); // Expected: Product Name: Notebook, Price: $0, Category: General
