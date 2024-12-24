export async function handleRegistration(event) {
    event.preventDefault(); // Prevent the default form submission

    const name = document.getElementById("name").value.trim();
    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const age = document.getElementById("age").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const gender = document.getElementById("gender").value;

    const newUser = { name, username, email, password, age, phone, gender };

    try {
        // Fetch the existing users
        const response = await fetch("users.json");
        if (!response.ok) throw new Error("Failed to fetch users.json");
        
        const users = await response.json();

        // Validate unique username and email
        const isUsernameTaken = users.some(user => user.username === username);
        const isEmailTaken = users.some(user => user.email === email);

        if (isUsernameTaken) {
            alert("Username is already taken. Please choose a different one.");
            return;
        }

        if (isEmailTaken) {
            alert("Email is already registered. Please use a different email.");
            return;
        }

        // Add the new user to the list
        users.push(newUser);

        // Simulate saving the updated list to the JSON file
        console.log("Updated user list:", JSON.stringify(users, null, 2));

        alert("Registration successful!");
    } catch (error) {
        console.error("Error:", error);
        alert("An error occurred during registration. Please try again.");
    }
}
