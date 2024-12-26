// Step 1: Define the Enum for Vehicle Status
var VehicleStatus2;
(function (VehicleStatus2) {
    VehicleStatus2["Active"] = "Active";
    VehicleStatus2["Inactive"] = "Inactive";
    VehicleStatus2["Pending"] = "Pending";
})(VehicleStatus2 || (VehicleStatus2 = {}));
// Step 4: Write the addVehicleToDriver Function
function addVehicleToDriver(driver, vehicle) {
    driver.vehicles.push(vehicle);
    console.log("Vehicle added: ".concat(vehicle.brand, " ").concat(vehicle.model, " (").concat(vehicle.year, ")"));
}
// Step 5: Test the Function
var driver2 = {
    name: "Ajla",
    licenseNumber: "XYZ12345",
    vehicles: [], // Start with an empty vehicle list
};
var vehicle12 = {
    brand: "Toyota",
    model: "Corolla",
    year: 2020,
    status: VehicleStatus2.Active,
};
var vehicle22 = {
    brand: "Honda",
    model: "Civic",
    year: 2018,
    status: VehicleStatus2.Pending,
};
var vehicle32 = {
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
