// Step 1: Define the Enum for Vehicle Status
var VehicleStatus;
(function (VehicleStatus) {
    VehicleStatus["Active"] = "Active";
    VehicleStatus["Inactive"] = "Inactive";
    VehicleStatus["Pending"] = "Pending";
})(VehicleStatus || (VehicleStatus = {}));
// Step 4: Write the addVehicleToDriver Function
function addVehicleToDriver(driver, vehicle) {
    driver.vehicles.push(vehicle);
    console.log("Vehicle added: ".concat(vehicle.brand, " ").concat(vehicle.model, " (").concat(vehicle.year, ")"));
}
// Step 5: Test the Function
var driver = {
    name: "Ajla",
    licenseNumber: "XYZ12345",
    vehicles: [], // Start with an empty vehicle list
};
var vehicle1 = {
    brand: "Toyota",
    model: "Corolla",
    year: 2020,
    status: VehicleStatus.Active,
};
var vehicle2 = {
    brand: "Honda",
    model: "Civic",
    year: 2018,
    status: VehicleStatus.Pending,
};
var vehicle3 = {
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
