 // Step 1: Define the Enum for Vehicle Status
 enum VehicleStatus2 {
    Active = "Active",
    Inactive = "Inactive",
    Pending = "Pending",
}

// Step 2: Create the Vehicle Interface
interface Vehicle2 {
    brand: string;
    model: string;
    year: number;
    status: VehicleStatus2;
}

// Step 3: Define the Driver Type Alias
type Driver2 = {
    name: string;
    licenseNumber: string;
    vehicles: Vehicle2[];
};

// Step 4: Write the addVehicleToDriver Function
function addVehicleToDriver(driver: Driver2, vehicle: Vehicle2): void {
    driver.vehicles.push(vehicle);
    console.log(`Vehicle added: ${vehicle.brand} ${vehicle.model} (${vehicle.year})`);
}

// Step 5: Test the Function
const driver2: Driver2 = {
    name: "Ajla",
    licenseNumber: "XYZ12345",
    vehicles: [], // Start with an empty vehicle list
};

const vehicle12: Vehicle2 = {
    brand: "Toyota",
    model: "Corolla",
    year: 2020,
    status: VehicleStatus2.Active,
};

const vehicle22: Vehicle2 = {
    brand: "Honda",
    model: "Civic",
    year: 2018,
    status: VehicleStatus2.Pending,
};

const vehicle32: Vehicle2 = {
    brand: "Ford",
    model: "Focus",
    year: 2015,
    status: VehicleStatus2.Inactive,
};

// Adding vehicles to the driver
addVehicleToDriver(driver2, vehicle12);
addVehicleToDriver(driver2, vehicle22);
addVehicleToDriver(driver2, vehicle32);

// Log the updated driver
console.log(driver2);

