 // Step 1: Define the Enum for Vehicle Status
enum VehicleStatus {
    Active = "Active",
    Inactive = "Inactive",
    Pending = "Pending",
}

// Step 2: Create the Vehicle Interface
interface Vehicle {
    brand: string;
    model: string;
    year: number;
    status: VehicleStatus;
}

// Step 3: Define the Driver Type Alias
type Driver = {
    name: string;
    licenseNumber: string;
    vehicles: Vehicle[];
};

// Step 4: Write the addVehicleToDriver Function
function addVehicleToDriver(driver: Driver, vehicle: Vehicle): void {
    driver.vehicles.push(vehicle);
    console.log(`Vehicle added: ${vehicle.brand} ${vehicle.model} (${vehicle.year})`);
}

// Step 5: Test the Function
const driver: Driver = {
    name: "Ajla",
    licenseNumber: "XYZ12345",
    vehicles: [], // Start with an empty vehicle list
};

const vehicle1: Vehicle = {
    brand: "Toyota",
    model: "Corolla",
    year: 2020,
    status: VehicleStatus.Active,
};

const vehicle2: Vehicle = {
    brand: "Honda",
    model: "Civic",
    year: 2018,
    status: VehicleStatus.Pending,
};

const vehicle3: Vehicle = {
    brand: "Ford",
    model: "Focus",
    year: 2015,
    status: VehicleStatus.Inactive,
};

// Adding vehicles to the driver
addVehicleToDriver(driver, vehicle1);
addVehicleToDriver(driver, vehicle2);
addVehicleToDriver(driver, vehicle3);

// Log the updated driver
console.log(driver);

